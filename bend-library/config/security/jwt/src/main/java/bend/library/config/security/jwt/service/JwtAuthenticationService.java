package bend.library.config.security.jwt.service;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.data.AccountInfo;
import bend.library.config.security.data.LoginInfo;
import bend.library.config.security.data.LogoutInfo;
import bend.library.config.security.jwt.data.JwtAccountInfo;
import bend.library.config.security.jwt.data.JwtLogoutInfo;
import bend.library.config.security.jwt.jwt.TokenProvider;
import bend.library.config.security.service.AuthenticationManager;
import bend.library.config.security.service.SaltedPasswordEncoder;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@RequiredArgsConstructor
@Service
public class JwtAuthenticationService implements AuthenticationManager {
    private final @NonNull TokenProvider tokenProvider;
    private final @NonNull UserDetailsService customUserDetailsService;
    private final @NonNull SaltedPasswordEncoder saltedPasswordEncoder;


    @Override
    public JwtAccountInfo authenticate(LoginInfo loginInfo) {
        return BendOptional.of(customUserDetailsService.loadUserByUsername(loginInfo.getUsername()))
                .mustTrue(user->saltedPasswordEncoder.matches(loginInfo.getPassword(),user.getUsername(), user.getPassword()))
                .map(userDetails -> {
                    Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, userDetails.getUsername(),userDetails.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    return JwtAccountInfo.builder().authorities(userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toSet()))
                            .token(tokenProvider.createToken(authentication, loginInfo)).username(userDetails.getUsername()).build();
                }).get();
    }

    @Override
    public void logout(LogoutInfo logoutInfo) {
        if(logoutInfo instanceof JwtLogoutInfo)
            tokenProvider.deleteToken(((JwtLogoutInfo)logoutInfo).getToken());
    }
}
