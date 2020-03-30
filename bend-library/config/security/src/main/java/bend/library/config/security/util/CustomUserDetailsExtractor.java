package bend.library.config.security.util;

import bend.library.config.security.data.CustomUserDetails;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public class CustomUserDetailsExtractor<T> {
    private final CustomUserDetails customUserDetails;
    private final List<T> tList = new ArrayList<>();

    public CustomUserDetailsExtractor(final CustomUserDetails customUserDetails, final Class<T> returnType) {
        this.customUserDetails = customUserDetails;
    }

    public CustomUserDetailsExtractor<T> and(Function<CustomUserDetails, T> function) {
        if(this.customUserDetails == null) return this;
        this.tList.add(function.apply(this.customUserDetails));
        return this;
    }

    public List<T> extract() {
        return this.tList.isEmpty() ? null : this.tList;
    }
}
