package bend.library.config.service;

public interface EncoderService {
    String encode(String text);

    String decode(String encodedText);
}
