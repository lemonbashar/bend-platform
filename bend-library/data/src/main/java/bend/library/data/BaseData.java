package bend.library.data;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
public class BaseData<ID> {
    private ID subject;
    private String currentTime;
    private LocalDate createDate;
    private LocalDate updateDate;
    private BigInteger createBy;
    private BigInteger updateBy;

    public BaseData() {
        this.currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("DD-MMM-YYYY HH:MM:SS"));
    }
}
