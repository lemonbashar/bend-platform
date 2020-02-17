package bend.library.config.security.service.impl;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@RequiredArgsConstructor
@Service
public class SaltedPasswordEncoderImpl implements bend.library.config.security.service.SaltedPasswordEncoder {
    private final @NonNull PasswordEncoder passwordEncoder;

    public String encode(String password, String salt) {
        return this.passwordEncoder.encode(password+salt);
    }

    public boolean matches(String rawPassword, String salt, String encodedPassword) {
        return this.passwordEncoder.matches(rawPassword+salt, encodedPassword);
    }
}
