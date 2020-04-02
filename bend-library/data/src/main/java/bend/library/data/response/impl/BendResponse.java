package bend.library.data.response.impl;

import bend.library.data.response.BendStatus;
import bend.library.data.response.IBendResponse;
import lombok.Getter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Getter
public class BendResponse implements IBendResponse {
    protected final String currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("DD-MMM-YYYY HH:MM:SS"));
    final private BendStatus status;
    private final List<String> dataTypes;

    public BendResponse() {
        this(BendStatus.SUCCESS);
    }

    public BendResponse(BendStatus status) {
        this.status = status;
        this.dataTypes = new ArrayList<>();
        this.dataTypes.add("IBendResponse");
    }

    @Override
    public BendStatus status() {
        return status;
    }

    @Override
    public List<String> dataTypes() {
        return dataTypes;
    }
}
