package bend.library.controller;

import bend.library.constant.APiConstants;

public final class ApiProvider {
    public static class AppUtilApi {
        public static final String APP_UTIL_PRIVATE_ROOT_API = APiConstants.PRIVATE_ROOT + "/app-util";
        public static final String APP_UTIL_PUBLIC_ROOT_API = APiConstants.PUBLIC_ROOT + "/app-util";
        public static final String SINGLE_FIELD_EXISTENCE_CHECK = "/single-field-existence-check/{table}/{field}/{value}";
        public static final String FIELD_EDIT = "/field-edit";
    }

    public static final class SqlFetchApi {
        public static final String SQL_FETCH_PUBLIC_ROOT = APiConstants.PUBLIC_ROOT + "/sql-fetch";
    }
}
