package hr.zubcic.travelapp.services;

import hr.zubcic.travelapp.model.Authority;
import hr.zubcic.travelapp.repositories.AuthorityRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthorityServiceImpl implements AuthorityService {

    private final AuthorityRepository authorityRepository;

    public AuthorityServiceImpl(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    @Override
    public Optional<Authority> findByName(String name) {
        return authorityRepository.findAuthorityByName(name);
    }
}
