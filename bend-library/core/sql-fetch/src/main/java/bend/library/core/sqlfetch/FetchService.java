package bend.library.core.sqlfetch;


import bend.library.data.fetch.fetch.FetchDefinition;
import bend.library.data.fetch.fetch.FetchResponse;

/**
 * Used to fetch data from database
 *
 * @param <I> Fetch Definition
 * @param <O> FetchResponse
 */
public interface FetchService<I extends FetchDefinition, O extends FetchResponse> {
    /**
     * Fetch from single definition
     *
     * @param fetchDefinition Provided definition
     * @return Fetch Response
     */
    O fetch(I fetchDefinition);
}
