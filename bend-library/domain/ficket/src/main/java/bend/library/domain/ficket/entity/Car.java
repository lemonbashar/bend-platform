package bend.library.domain.ficket.entity;


import bend.library.domain.ficket.enumeretion.CarType;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

public class Car {
    private String name;
    private String licence;
    private String numberPlate;
    @Enumerated(EnumType.STRING)
    private CarType carType;
    @ManyToOne
    private TravelAgencies travelAgencies;
    private CarConfig carConfig;
}
