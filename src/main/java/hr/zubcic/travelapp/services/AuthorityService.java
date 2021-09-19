package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.model.Authority;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface AuthorityService {
    Optional<Authority> findByName(String name);
}
