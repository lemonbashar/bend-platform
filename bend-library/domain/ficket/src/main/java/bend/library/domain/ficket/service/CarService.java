package bend.library.domain.ficket.service;

import java.math.BigInteger;
import java.util.Set;

public interface CarService {
    Set<String> extractSetsFromCar(final BigInteger carId);
}
