package bend.library.controller.util;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.function.Function;

public class ResponseUtil<T> {
    private final T body;
    private HttpStatus httpStatus;
    private final HttpHeaders httpHeaders;

    private ResponseUtil(T body) {
        this.body = body;
        this.httpStatus = HttpStatus.OK;
        this.httpHeaders = new HttpHeaders();
    }

    public static <T> ResponseUtil<T> of(T body) {
        return new ResponseUtil<>(body);
    }

    public <K> ResponseUtil<K> map(Function<T, K> tkFunction) {
        return new ResponseUtil<>(tkFunction.apply(body));
    }

    public ResponseUtil<T> status(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
        return this;
    }

    public ResponseUtil<T> header(HttpHeaders httpHeaders) {
        this.httpHeaders.addAll(httpHeaders);
        return this;
    }

    public ResponseUtil<T> header(String key, String value) {
        this.httpHeaders.add(key, value);
        return this;
    }

    public ResponseEntity<T> response(Function<ResponseType<T>, ResponseEntity<T>> responseType) {
        return responseType.apply(new ResponseType<>(body, httpStatus, httpHeaders));
    }
}
