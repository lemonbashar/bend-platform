package bend.library.data.response;

public interface IDataResponse<Data> extends IBendResponse {
    /**
     * Response data, like Dto of an entity, cause we never return entity, always associate data
     */
    Data data();
}
