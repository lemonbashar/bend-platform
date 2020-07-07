export declare const commonResource: {
    HOST_URL: string;
    CONTEXT: string;
    FICKET_CONTEXT: string;
};
export declare const BendCoreConstants: {
    production: boolean;
    API_URL: string;
    DEBUG_ENABLE: boolean;
    cookies: {
        ACCOUNT_INFO: string;
        TOKEN: string;
        AUTHENTICATION_STATE: string;
        AUTHORITIES: string;
        lifetime: {
            TOKEN_LIFETIME: number;
            TOKEN_LIFETIME_FOR_REMEMBER_ME: number;
        };
        TOKEN_LIFETIME: string;
        routingDatabase: {
            REGISTRY_TYPE: string;
            REGISTRY_VALUE: string;
            detectionTypes: {
                CLUSTER_KEY: string;
                LOCALE_KEY: string;
            };
        };
        lang: {
            DEFAULT_LANG_KEY: string;
            USE_LANG_KEY: string;
        };
    };
    jwt: {
        JSON_WEB_TOKEN: string;
        REFRESHED_JSON_WEB_TOKEN: string;
    };
    neighbourBaseUrls: {
        BEND_MAIN_APP: string;
        BEND_FICKET_APP: string;
    };
};
