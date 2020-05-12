package bend.library.domain.ficket.service;

import bend.library.domain.ficket.entity.SeatConfig;

import java.util.List;
import java.util.Set;

public interface SeatService {
    String SEAT_SEPARATOR_REGEX = "-";
    String LINE_SEPARATOR_REGEX = "[|]";
    String ROW_SEPARATOR_REGEX = ":";
    void printSeatStructure(final SeatConfig seatConfig);

    Set<String> extractSetsFromStructure(final SeatConfig seatConfig);
    Set<String> extractSetsFromStructure(final String seatStructure);
}
