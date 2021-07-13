package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.dto.UserDTO;

import java.util.Optional;

public interface UserService {
    Optional<UserDTO> findByUsername(String username);
}
