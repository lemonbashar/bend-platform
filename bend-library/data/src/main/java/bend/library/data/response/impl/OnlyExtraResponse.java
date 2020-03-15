package bend.library.data.response.impl;

import bend.library.data.response.BendStatus;
import bend.library.data.response.IOnlyExtraResponse;
import lombok.Getter;

@Getter
public class OnlyExtraResponse<Extra> extends BendResponse implements IOnlyExtraResponse<Extra> {
    private final Extra extra;

    public OnlyExtraResponse(Extra extra) {
        this.extra = extra;
        super.dataTypes().add("IOnlyExtraResponse");
    }

    public OnlyExtraResponse(BendStatus status, Extra extra) {
        super(status);
        super.dataTypes().add("IOnlyExtraResponse");
        this.extra = extra;
    }

    @Override
    public Extra extra() {
        return this.extra;
    }
}
