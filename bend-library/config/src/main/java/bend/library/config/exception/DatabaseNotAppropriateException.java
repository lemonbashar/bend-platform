package bend.library.config.exception;

public class DatabaseNotAppropriateException extends RuntimeException {
    public DatabaseNotAppropriateException() {
        this("");
    }

    public DatabaseNotAppropriateException(String message) {
        super("Database Not persisted perfectly:" + message);
    }
}
