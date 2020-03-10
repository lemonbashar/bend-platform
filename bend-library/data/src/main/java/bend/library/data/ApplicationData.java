package bend.library.data;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApplicationData extends BaseData<String> {
    private String name;
    private int port;

    public ApplicationData(String name, int port) {
        this.name = name;
        this.port = port;
    }

    public ApplicationData(String s, String name, int port) {
        super(s);
        this.name = name;
        this.port = port;
    }
}
