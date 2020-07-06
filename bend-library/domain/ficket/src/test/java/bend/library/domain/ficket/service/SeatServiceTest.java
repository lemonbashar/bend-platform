package bend.library.domain.ficket.service;

import bend.library.constant.ProfileConstants;
import bend.library.domain.ficket.entity.SeatConfig;
import bend.library.domain.ficket.service.impl.SeatServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
public class SeatServiceTest {
    private SeatService seatService;
    private SeatConfig seatConfig;

    @BeforeEach
    public void setUp() {
        this.seatService = new SeatServiceImpl(null);
        this.seatConfig = new SeatConfig();
        this.seatConfig.setSeatStructure("A1- | -A2:B1-B2|B3-B4:C1-C2|C3-C4:D1-D2|D3-D4:E1-E2|E3-E4:F1-F2|F3-F4:G1-G2|G3-G4:H1-H2|H3-H4:I1-I2|I3-I4:J1-J2|J3-J4:K1-K2|K3-K4:L1-L2|L3-L4");
    }

    @Test
    public void printSeat() {
        this.seatService.printSeatStructure(this.seatConfig);
    }

    @Test
    public void extractSeat() {
        Set<String> set = this.seatService.extractSetsFromStructure(seatConfig);
        assertNotNull(set);
        set.forEach(System.out::print);
    }
}