package bend.library.config.exception;

public class DataNotFoundException extends RuntimeException {
    public DataNotFoundException() {
        this("Data Not Found By Given Sql Identity");
    }

    public DataNotFoundException(String message) {
        super(message);
    }
}
