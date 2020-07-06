package bend.library.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BaseData<ID> {
    public static final String PATTERN = "DD-MMM-YYYY HH:MM:SS";
    protected final String currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern(PATTERN));
    protected ID id;
    protected boolean active;
}
