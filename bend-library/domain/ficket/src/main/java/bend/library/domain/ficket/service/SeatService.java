package bend.library.domain.ficket.service;

import bend.library.domain.IBaseService;
import bend.library.domain.ficket.entity.SeatConfig;

import java.math.BigInteger;
import java.util.Optional;
import java.util.Set;

public interface SeatService extends IBaseService<SeatConfig> {
    String SEAT_SEPARATOR_REGEX = "-";
    String LINE_SEPARATOR_REGEX = "[|]";
    String ROW_SEPARATOR_REGEX = ":";

    void printSeatStructure(final SeatConfig seatConfig);

    Set<String> extractSetsFromStructure(final SeatConfig seatConfig);

    Set<String> extractSetsFromStructure(final String seatStructure);

    Optional<SeatConfig> findSeatConfigByCarId(BigInteger carId);
}
