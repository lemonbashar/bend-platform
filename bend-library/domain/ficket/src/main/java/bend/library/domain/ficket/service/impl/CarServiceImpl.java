package bend.library.domain.ficket.service.impl;

import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.crud.flexible.FlexibleIndex;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.AbstractBaseService;
import bend.library.domain.ficket.repositories.CarRepository;
import bend.library.domain.ficket.service.CarService;
import bend.library.domain.ficket.service.SeatService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.LinkedHashSet;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class CarServiceImpl extends AbstractBaseService implements CarService {
    private final @NonNull SeatService seatService;
    private final @NonNull CarRepository carRepository;

    @Override
    public Set<String> extractSetsFromCar(BigInteger carId) {
        return carRepository.findById(carId).map(car -> seatService.extractSetsFromStructure(car.getCarConfig().getSeatConfig())).orElse(null);
    }

    @Override
    public PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexibleOnlyActive(Pageable pageable) {
        return makeFlexible(carRepository.findAllFlexibleOnlyActive(pageable));
    }

    @Override
    protected String[] flexibleColumns() {
        return new String[] {"Name"};
    }

    @Override
    protected int idIndexOfFlexibility() {
        return 1;
    }

    @Override
    protected FlexibleIndex[] flexibleIndices() {
        return new FlexibleIndex[] {FlexibleIndex.of(0)};
    }
}
