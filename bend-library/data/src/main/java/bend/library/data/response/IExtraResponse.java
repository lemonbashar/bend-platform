package bend.library.data.response;

public interface IExtraResponse<Extra, Data> extends IDataResponse<Data> {
    /**
     * Sometimes we need some extra things to return besides data and dto. then we can use it there
     *
     * @return Extra
     */
    Extra extra();
}
