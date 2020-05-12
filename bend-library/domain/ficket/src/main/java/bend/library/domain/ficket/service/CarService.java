package bend.library.domain.ficket.service;

import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.response.impl.PageableDataResponse;
import org.springframework.data.domain.Pageable;

import java.math.BigInteger;
import java.util.Set;

public interface CarService {
    @Deprecated
    Set<String> extractSetsFromCar(final BigInteger carId);

    String findSeatStructure(final BigInteger carId);

    PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexibleOnlyActive(Pageable pageable);
}
