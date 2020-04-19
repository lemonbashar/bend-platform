package bend.library.domain.ficket.service.impl;

import bend.library.domain.ficket.entity.SeatConfig;
import bend.library.domain.ficket.service.SeatService;
import org.springframework.stereotype.Service;

@Service
public class SeatServiceImpl implements SeatService {
    @Override
    public void printSeatStructure(SeatConfig seatConfig) {
        String[] rows = seatConfig.getSeatStructure().split(ROW_SEPARATOR_REGEX);
        StringBuilder builder = new StringBuilder();
        for(String row: rows) {
            String[] plays = row.split(LINE_SEPARATOR_REGEX);
            String[] seats = plays[0].split(SEAT_SEPARATOR_REGEX);
            for(String seat: seats)
                builder.append(String.format("%2s ", seat));
            builder.append("|  | ");
            seats = plays[1].split(SEAT_SEPARATOR_REGEX);
            for(String seat: seats)
                builder.append(String.format("%2s ", seat));
            builder.deleteCharAt(builder.length()-1).append('\n');
        }
        System.out.print(builder);
    }
}
