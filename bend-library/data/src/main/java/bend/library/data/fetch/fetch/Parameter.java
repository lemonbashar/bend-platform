package bend.library.data.fetch.fetch;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class Parameter {
    private String name;
    private String value;
}
