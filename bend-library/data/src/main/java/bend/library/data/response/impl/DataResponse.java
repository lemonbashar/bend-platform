package bend.library.data.response.impl;

import bend.library.data.response.BendStatus;
import bend.library.data.response.IDataResponse;
import lombok.Getter;

@Getter
public class DataResponse<Data> extends BendResponse implements IDataResponse<Data> {
    private final Data data;

    public DataResponse(Data data) {
        this.data = data;
        super.dataTypes().add("IDataResponse");
    }

    public DataResponse(BendStatus status, Data data) {
        super(status);
        super.dataTypes().add("IDataResponse");
        this.data = data;
    }

    @Override
    public Data data() {
        return this.data;
    }

}
