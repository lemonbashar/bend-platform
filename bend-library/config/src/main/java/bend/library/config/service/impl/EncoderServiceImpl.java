package bend.library.config.service.impl;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.service.EncoderService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Base64;

@RequiredArgsConstructor
@Service("encoderService")
public class EncoderServiceImpl implements EncoderService {
    private static final char DELIMITER = '-';
    private final @NonNull SpringProperties properties;

    @Override
    public String encode(String text) {
        return Base64.getEncoder().encodeToString((text + DELIMITER + properties.getSettings().getSecurity().getSecretKey()).getBytes());
    }

    @Override
    public String decode(String encodedText) {
        String decoded = new String(Base64.getDecoder().decode(encodedText));
        return decoded.substring(0, decoded.indexOf(DELIMITER));
    }
}
