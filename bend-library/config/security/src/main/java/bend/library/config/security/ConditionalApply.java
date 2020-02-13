package bend.library.config.security;

public interface ConditionalApply<T> {
    void apply(T t) throws Exception;
}