package bend.library.data;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
public class BaseData<ID> {
    protected ID id;
    protected String currentTime;

    public BaseData() {
        this.currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("DD-MMM-YYYY HH:MM:SS"));
    }

    public BaseData(ID id) {
        this();
        this.id = id;
    }
}
