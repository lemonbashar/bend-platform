package bend.library.controller.rest.ficket.api.pub;

import bend.framework.base.util.BendOptional;
import bend.library.controller.rest.ficket.FicketRestApiProvider;
import bend.library.controller.rest.ficket.api.CarController;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.response.BendStatus;
import bend.library.data.response.impl.DataResponse;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.ficket.service.CarService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;
import java.util.Objects;
import java.util.Set;

@RequiredArgsConstructor
@RestController
@RequestMapping(FicketRestApiProvider.CarApi.CAR_PUBLIC_ROOT_API)
public class CarPublicController {
    private final @NonNull CarService carService;
    private final @NonNull CarController carController;

    @GetMapping(FicketRestApiProvider.CarApi.EXTRACT_SEAT_FROM_CAR)
    public ResponseEntity<DataResponse<Set<String>>> extractSeatFromCar(@PathVariable BigInteger carId) {
        return BendOptional.ofNullable(this.carService.extractSetsFromCar(carId))
                .map(seats -> new DataResponse<>(Objects.isNull(seats)? BendStatus.NOT_FOUND: BendStatus.SUCCESS, seats))
                .map(ResponseUtil::of).get().response(ResponseType::get);
    }

    @GetMapping(FicketRestApiProvider.CarApi.CAR_LIST_FLEXIBLE)
    public ResponseEntity<PageableDataResponse<BaseFlexibleCrudeViewData>> findAllFlexibleData(Pageable pageable) {
        return carController.findAllFlexible(pageable);
    }
}
