package bend.library.config.util;

import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

/**
 * @author lemon
 * 3/14/2020
 * khairul@impelitsolutions.com
 */

public final class DatabaseUtil {
    public static String makeString(Object value) {
        String sValue = null;
        StringBuilder stringBuilder=new StringBuilder();
        if(value instanceof Object[]) {
            stringBuilder.setLength(0);
            for(Object item:(Object[])value)
                stringBuilder.append(":").append(item.toString());
            sValue = stringBuilder.substring(1);
        }
        else if(value instanceof Collection) {
            stringBuilder.setLength(0);
            ((Collection)value).forEach(item->stringBuilder.append(":").append(item.toString()));
            sValue = stringBuilder.substring(1);
        }
        else sValue = value.toString();
        return sValue;
    }
}
