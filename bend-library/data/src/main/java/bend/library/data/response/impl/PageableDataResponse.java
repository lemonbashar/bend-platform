package bend.library.data.response.impl;

import bend.library.data.response.BendStatus;
import lombok.Getter;

@Getter
public class PageableDataResponse<Data> extends DataResponse<Data> {
    private final long totalPages;
    private final long totalElements;


    public PageableDataResponse(Data data, BendStatus bendStatus, long totalPages, long totalElements) {
        super(bendStatus, data);
        this.totalPages = totalPages;
        this.totalElements = totalElements;
    }
}
