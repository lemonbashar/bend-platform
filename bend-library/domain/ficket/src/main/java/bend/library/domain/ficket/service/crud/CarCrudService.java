package bend.library.domain.ficket.service.crud;

import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.crud.flexible.FlexibleIndex;
import bend.library.domain.AbstractBaseCrudService;
import bend.library.domain.ficket.data.CarCrudData;
import bend.library.domain.ficket.entity.Car;
import bend.library.domain.ficket.repositories.CarRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigInteger;

@Service
public class CarCrudService extends AbstractBaseCrudService<CarCrudData, Car> {

    @Autowired
    public CarCrudService(@NonNull CarRepository repository) {
        super(repository);
    }

    @Override
    protected Page<Object[]> flexiblePageData(Pageable pageable) {
        return ((CarRepository) repository).findAllFlexible(pageable);
    }

    @Override
    protected String[] flexibleColumns() {
        return new String[]{"NAME", "LICENCE", "NUMBER_PLATE"};
    }

    @Override
    protected int idIndexOfFlexibility() {
        return 3;
    }

    @Override
    protected FlexibleIndex[] flexibleIndices() {
        return new FlexibleIndex[]{
                FlexibleIndex.of(0),
                FlexibleIndex.of(1),
                FlexibleIndex.of(2)
        };
    }

    @Override
    public BaseFlexibleCrudeViewData findOneFlexible(BigInteger id) {
        return null;
    }


}
