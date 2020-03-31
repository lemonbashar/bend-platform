package bend.library.data.response;

import java.util.List;

public interface IBendResponse {
    /**
     * Http Status
     */
    BendStatus status();

    /**
     * @return Data-type, like it may Bend-Response/Data-Response/Extra-Response so we need to detect it from UI
     */
    List<String> dataTypes();
}
