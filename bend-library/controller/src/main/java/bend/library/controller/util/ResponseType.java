package bend.library.controller.util;

import bend.framework.base.util.BendOptional;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

public class ResponseType<T> {
    private static final ResponseEntity<?> empty = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    private final BendOptional<T> body;
    private final HttpStatus httpStatus;
    private final HttpHeaders httpHeaders;

    @SuppressWarnings("unchecked")
    public ResponseType(T body, HttpStatus httpStatus, HttpHeaders httpHeaders) {
        this.body = body instanceof BendOptional ? (BendOptional<T>) body : BendOptional.of(body);
        this.httpStatus = httpStatus == null ? HttpStatus.OK : httpStatus;
        this.httpHeaders = httpHeaders == null ? new HttpHeaders() : httpHeaders;
    }

    public ResponseEntity<T> post() {
        return response();
    }

    public ResponseEntity<T> put() {
        return response();
    }

    public ResponseEntity<T> get() {
        return response();
    }

    public ResponseEntity<T> delete() {
        return response();
    }

    @SuppressWarnings("unchecked")
    public ResponseEntity<T> response() {
        return body.ifThenMap(Objects::nonNull, t -> new ResponseEntity<T>(t, this.httpHeaders, this.httpStatus)).map(obj -> (ResponseEntity<T>)obj)
                .orElse((ResponseEntity<T>) empty);
    }
}
