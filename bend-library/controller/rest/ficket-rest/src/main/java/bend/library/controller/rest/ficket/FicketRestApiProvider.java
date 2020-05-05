package bend.library.controller.rest.ficket;

import bend.library.constant.APiConstants;

public final class FicketRestApiProvider {
    public static final class CarApi {
        public static final String CAR_PUBLIC_ROOT_API = APiConstants.PUBLIC_ROOT + "/car";
        public static final String CAR_API = APiConstants.PRIVATE_ROOT + "/car";
        public static final String EXTRACT_SEAT_FROM_CAR = "/extract-seat-from-car/{carId}";
    }

    public static final class TicketApi {
        public static final String TICKET_PUBLIC_ROOT_API = APiConstants.PUBLIC_ROOT + "/ticket";
    }
}
