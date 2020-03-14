package bend.library.config.exception;

public class PrePersistException extends SecurityException {
    public PrePersistException() {
    }

    public PrePersistException(String s) {
        super(s);
    }

    public PrePersistException(String message, Throwable cause) {
        super(message, cause);
    }

    public PrePersistException(Throwable cause) {
        super(cause);
    }
}
