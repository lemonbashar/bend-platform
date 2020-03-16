package bend.library.data.fetch.fetch;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class FetchResponse {
    private String key;
    private FetchResponseType fetchResponseType;
    private FetchResponseDataType fetchResponseDataType;
    private Object data;
}
