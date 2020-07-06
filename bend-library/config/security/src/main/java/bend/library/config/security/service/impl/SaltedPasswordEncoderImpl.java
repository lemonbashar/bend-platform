package bend.library.config.security.service.impl;

import bend.framework.properties.springproperties.SpringProperties;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Base64;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@RequiredArgsConstructor
@Service
public class SaltedPasswordEncoderImpl implements bend.library.config.security.service.SaltedPasswordEncoder {
    private final @NonNull SpringProperties properties;

    public String encode(String password, String usernameSalt) {
        return new String(Base64.getEncoder().encode((properties.getSettings().getSecurity().getSecretKey() + password + usernameSalt).getBytes()));
    }

    public boolean matches(String rawPassword, String salt, String encodedPassword) {
        return this.encode(rawPassword, salt).equals(encodedPassword);
    }
}
