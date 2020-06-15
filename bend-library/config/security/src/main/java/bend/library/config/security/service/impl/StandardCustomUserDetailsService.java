package bend.library.config.security.service.impl;

import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.service.CustomUserDetailsService;
import bend.library.constant.jdbc.JdbcParam;
import bend.library.domain.data.UserCrudData;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */

@RequiredArgsConstructor
@Service
public class StandardCustomUserDetailsService implements CustomUserDetailsService {
    private final @NonNull NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public static final String QUERY_FOR_USER = "SELECT dmbu.id, dmbu.username, dmbu.password, dmbu.email FROM db_main_bend_user dmbu \n" +
            "WHERE dmbu.active_status IS TRUE AND dmbu.username=:userIdentity OR dmbu.email=:userIdentity";

    @Override
    public CustomUserDetails findUserDetails(String username) {
        return CustomUserDetails.of(Objects.requireNonNull(this.namedParameterJdbcTemplate.queryForObject(QUERY_FOR_USER, JdbcParam.of("userIdentity", username).build(), UserCrudData::mapRowBasic)));
    }
}
