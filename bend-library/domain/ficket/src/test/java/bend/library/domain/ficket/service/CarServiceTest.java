package bend.library.domain.ficket.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.exception.DataNotFoundException;
import bend.library.config.security.SecurityConfig;
import bend.library.constant.ProfileConstants;
import bend.library.domain.DomainConfig;
import bend.library.domain.ficket.FicketConfig;
import bend.library.domain.place.PlaceConfig;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.math.BigInteger;


@Tag(ProfileConstants.TestInclude.NOT_RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, FicketConfig.class, PlaceConfig.class, DomainConfig.class, SecurityConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class CarServiceTest {
    @Autowired
    private SeatService seatService;
    @Autowired
    private CarService carService;

    @Test
    public void extractSetsFromCar() {
        seatService.printSeatStructure(carService.findCarById(BigInteger.ONE).getCarConfig().getSeatConfig());
    }

    @Test
    public void extractSetsFromCarSeats() {
        seatService.printSeatStructure(seatService.findSeatConfigByCarId(BigInteger.ONE).orElseThrow(DataNotFoundException::new));
    }
}
