package bend.library.domain.ficket.service;

import bend.library.domain.ficket.entity.SeatConfig;

import java.util.List;

public interface SeatService {
    String SEAT_SEPARATOR_REGEX = "-";
    String LINE_SEPARATOR_REGEX = "[|]";
    String ROW_SEPARATOR_REGEX = ":";
    void printSeatStructure(SeatConfig seatConfig);
}
