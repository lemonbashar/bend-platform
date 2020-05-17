package bend.library.config.security.service.impl;

import bend.library.config.security.service.AuthorityService;
import bend.library.domain.entity.Authority;
import bend.library.domain.repositories.AuthorityRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@RequiredArgsConstructor
@Service
public class AuthorityServiceImpl implements AuthorityService {
    private final @NonNull AuthorityRepository authorityRepository;

    @Override
    public Set<Authority> validRawAuthorities(String... authorities) {
        return Stream.of(authorities)
                .map(authority -> authorityRepository.findAuthorityByName(authority).orElseGet(() -> authorityRepository.save(new Authority(authority))))
                .collect(Collectors.toSet());
    }
}
