package bend.library.data.response;

public interface IOnlyExtraResponse<Extra> extends IBendResponse {
    /**Sometimes we need some extra things to return. then we can use it there
     * @return Extra
     */
    Extra extra();
}
