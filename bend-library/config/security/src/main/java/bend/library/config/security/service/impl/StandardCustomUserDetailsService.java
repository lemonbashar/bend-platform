package bend.library.config.security.service.impl;

import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.service.CustomUserDetailsService;
import bend.library.domain.repositories.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */

@RequiredArgsConstructor
@Service
public class StandardCustomUserDetailsService implements CustomUserDetailsService {
    private final @NonNull UserRepository userRepository;

    @Override
    public CustomUserDetails findUserDetails(String username) {
        return userRepository.findByUsernameAndActive(username, true).map(CustomUserDetails::of).get();
    }
}
