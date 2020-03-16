package bend.library.controller;

import bend.library.data.response.IBendResponse;
import bend.library.data.response.IDataResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public abstract class BaseController<Data,ID> extends AbstractBaseController<Data, ID> {
    public abstract ResponseEntity<? extends IDataResponse<Data>> save();
    public abstract ResponseEntity<? extends IDataResponse<Data>> update();
    public abstract ResponseEntity<? extends IDataResponse<List<Data>>> fetchAll();
    public abstract ResponseEntity<? extends IBendResponse> delete();
    public abstract ResponseEntity<? extends IBendResponse> findOne();
}
