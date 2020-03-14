package bend.library.data.fetch;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class FieldDefinition {
    private String id;
    private String domainName;
    private String fieldName;
    private String value;
}
