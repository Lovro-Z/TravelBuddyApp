package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.UserDTO;
import hr.zubcic.travelapp.dto.command.UserCommand;
import hr.zubcic.travelapp.model.Authority;
import hr.zubcic.travelapp.model.Travel;
import hr.zubcic.travelapp.model.User;
import hr.zubcic.travelapp.repositories.AuthorityRepository;
import hr.zubcic.travelapp.repositories.TravelRepository;
import hr.zubcic.travelapp.repositories.UserRepository;
import hr.zubcic.travelapp.services.exceptions.UsernameExistsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
class UserServiceImpl implements UserService {

    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    private final UserRepository userRepository;
    private final TravelRepository travelRepository;
    private final AuthorityRepository authorityRepository;

    public UserServiceImpl(UserRepository userRepository, TravelRepository travelRepository, AuthorityRepository authorityRepository) {
        this.userRepository = userRepository;
        this.travelRepository = travelRepository;
        this.authorityRepository = authorityRepository;
    }

    @Override
    public Optional<UserDTO> findByUsername(String username) {
        return userRepository.findOneByUsername(username).map(this::mapUserToDTO);
    }

    @Override
    @Transactional
    public Optional<UserDTO> save(final UserCommand command) {
        if (userRepository.findOneByUsername(command.getUsername()).isPresent()) {
            throw new UsernameExistsException();
        }
        User user = mapCommandToUser(command);
        Set<Authority> authorities = new HashSet<>();
        authorities.add(authorityRepository.findAuthorityByName("ROLE_USER").get());
        user.setAuthorities(authorities);
        userRepository.save(user);
        return Optional.of(mapUserToDTO(user));
    }

    @Override
    @Transactional
    public Optional<UserDTO> update(Long id, UserCommand updateUser) {

        User user = userRepository.findById(id).get();
        user.setUsername(updateUser.getUsername());
        user.setFirstName(updateUser.getFirstName());
        user.setLastName(updateUser.getLastName());
        userRepository.save(user);
        return Optional.of(mapUserToDTO(user));
    }

    @Override
    public Optional<UserDTO> bookTravel(Long id, Long travelId) {
        User user = userRepository.findById(id).get();
        Travel travel = travelRepository.findById(travelId).get();
        travel.setSpaceLeft(travel.getSpaceLeft() - 1);
        travelRepository.save(travel);
        user.setTravel(travel);
        userRepository.save(user);
        return Optional.of(mapUserToDTO(user));
    }

    @Override
    public Optional<UserDTO> cancelTravel(Long id) {
        User user = userRepository.findById(id).get();
        Travel travel = user.getTravel();
        travel.setSpaceLeft(travel.getSpaceLeft() + 1);
        travelRepository.save(travel);
        user.setTravel(null);
        userRepository.save(user);
        return Optional.of(mapUserToDTO(user));
    }

    private UserDTO mapUserToDTO(final User user){
        UserDTO userDTO = new UserDTO();

        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setAuthorities(user.getAuthorities().stream().map(Authority::getName).collect(Collectors.toSet()));
        userDTO.setTravel(user.getTravel());

        return userDTO;
    }

    private User mapCommandToUser(final UserCommand command) {
        User user = new User();

        user.setUsername(command.getUsername());
        user.setPassword(encoder().encode(command.getPassword()));
        user.setFirstName(command.getFirstName());
        user.setLastName(command.getLastName());

        return user;
    }
}
