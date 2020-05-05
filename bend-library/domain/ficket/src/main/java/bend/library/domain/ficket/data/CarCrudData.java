package bend.library.domain.ficket.data;

import bend.library.data.crud.BaseCrudData;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CarCrudData extends BaseCrudData {
    private String name;
    private String licence;
    private String numberPlate;
}
