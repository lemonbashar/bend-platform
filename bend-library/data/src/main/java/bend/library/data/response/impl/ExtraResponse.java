package bend.library.data.response.impl;

import bend.library.data.response.BendStatus;
import bend.library.data.response.IExtraResponse;
import lombok.Getter;

@Getter
public class ExtraResponse<Extra,Data> extends DataResponse<Data> implements IExtraResponse<Extra,Data> {
    private final Extra extra;

    public ExtraResponse(Data data, Extra extra) {
        super(data);
        this.extra = extra;
        super.dataTypes().add("IExtraResponse");
    }

    public ExtraResponse(BendStatus status, Data data, Extra extra) {
        super(status, data);
        super.dataTypes().add("IExtraResponse");
        this.extra = extra;
    }

    @Override
    public Extra extra() {
        return this.extra;
    }
}
