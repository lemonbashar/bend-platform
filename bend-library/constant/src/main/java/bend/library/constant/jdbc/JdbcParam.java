package bend.library.constant.jdbc;

import java.util.HashMap;
import java.util.Map;

public class JdbcParam<V> {
    private final Map<String, V> paramsMap;

    private JdbcParam() {
        paramsMap = new HashMap<>();
    }

    public static <V> JdbcParam<V> of(String paramName, V paramValue) {
        JdbcParam<V> jdbcParam = new JdbcParam<>();
        jdbcParam.paramsMap.put(paramName, paramValue);
        return jdbcParam;
    }

    public JdbcParam<V> and(String paramName, V paramValue) {
        paramsMap.put(paramName, paramValue);
        return this;
    }

    public Map<String, V> build() {
        return paramsMap;
    }
}
