package bend.library.domain.ficket.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.constant.ProfileConstants;
import bend.library.domain.DomainConfig;
import bend.library.domain.ficket.FicketConfig;
import bend.library.domain.ficket.entity.SeatConfig;
import bend.library.domain.ficket.service.impl.SeatServiceImpl;
import bend.library.domain.place.PlaceConfig;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@Tag(ProfileConstants.TestInclude.NOT_RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, FicketConfig.class, PlaceConfig.class, DomainConfig.class, SecurityConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class SeatServiceTest {
    @Autowired
    private SeatService seatService;
    private SeatConfig seatConfig;

    @BeforeEach
    public void setUp() {
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