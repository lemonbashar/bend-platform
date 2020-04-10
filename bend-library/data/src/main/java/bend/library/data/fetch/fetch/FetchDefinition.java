package bend.library.data.fetch.fetch;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Setter
@Getter
public class FetchDefinition {
    private String key = "DEFAULT_KEY.PLEASE_CHANGE";
    @NotNull
    private String domain;
}
