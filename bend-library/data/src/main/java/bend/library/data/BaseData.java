package bend.library.data;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
public class BaseData<ID> {
    private ID subject;
    private String currentTime;

    public BaseData() {
        this.currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("DD-MMM-YYYY HH:MM:SS"));
    }
}
