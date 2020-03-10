package bend.library.data;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@NoArgsConstructor
public class ApplicationData extends BaseData<String> {
    private String name;
    private int port;
    private String currentTime;

    public ApplicationData(String name, int port) {
        this(null, name, port);
    }

    public ApplicationData(String id, String name, int port) {
        super(id);
        this.name = name;
        this.port = port;
        this.currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("DD-MMM-YYYY HH:MM:SS"));
    }
}
