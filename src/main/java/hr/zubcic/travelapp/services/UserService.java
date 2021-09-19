package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.UserDTO;
import hr.zubcic.travelapp.dto.command.UserCommand;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {
    Optional<UserDTO> findByUsername(String username);
    Optional<UserDTO> save(UserCommand command);
    Optional<UserDTO> update(Long id, UserCommand updateUser);
    Optional<UserDTO> bookTravel(Long id, Long travelId);
    Optional<UserDTO> cancelTravel(Long id);
}
