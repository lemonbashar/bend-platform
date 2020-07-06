package bend.library.domain.ficket.entity;

import bend.library.constant.ProfileConstants;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
class SeatConfigTest {

    @Test
    public void seatsExtract() {
        String seats = "" +
                "A1, | ,A2" +
                ":B1,B2|B3,B4" +
                ":C1,C2|C3,C4" +
                ":D1,D2|D3,D4" +
                ":E1,E2|E3,E4" +
                ":F1,F2|F3,F4" +
                ":G1,G2|G3,G4" +
                ":H1,H2|H3,H4" +
                ":I1,I2|I3,I4" +
                ":J1,J2|J3,J4" +
                ":K1,K2|K3,K4" +
                ":L1,L2|L3,L4";

        String[] rows = seats.split(":");
        for (String row : rows) {
            String[] plays = row.split("[|]");
            String[] seat = plays[0].split(",");
            System.out.print(String.format("%2s %2s", seat[0], seat[1]));
            System.out.print(" |  | ");
            seat = plays[1].split(",");
            System.out.print(String.format("%2s %2s", seat[0], seat[1]));
            System.out.println();
        }

    }
}