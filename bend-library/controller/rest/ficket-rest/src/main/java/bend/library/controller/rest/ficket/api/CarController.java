package bend.library.controller.rest.ficket.api;

import bend.library.controller.CrudController;
import bend.library.controller.rest.ficket.FicketRestApiProvider;
import bend.library.domain.ficket.data.CarCrudData;
import bend.library.domain.ficket.entity.Car;
import bend.library.domain.ficket.service.crud.CarCrudService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(FicketRestApiProvider.CarApi.CAR_API)
public class CarController extends CrudController<CarCrudData, Car> {

    @Autowired
    public CarController(@NonNull CarCrudService carCrudService) {
        super(carCrudService);
    }
}
