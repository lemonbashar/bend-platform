package bend.library.domain.ficket.service.impl;

import bend.library.domain.ficket.repositories.CarRepository;
import bend.library.domain.ficket.service.CarService;
import bend.library.domain.ficket.service.SeatService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.LinkedHashSet;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class CarServiceImpl implements CarService {
    private final @NonNull SeatService seatService;
    private final @NonNull CarRepository carRepository;

    @Override
    public Set<String> extractSetsFromCar(BigInteger carId) {
        return carRepository.findById(carId).map(car -> seatService.extractSetsFromStructure(car.getCarConfig().getSeatConfig())).orElse(null);
    }
}
