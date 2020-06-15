package bend.library.config.security.jwt.service;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.jwt.jwt.TokenProvider;
import bend.library.config.security.service.AuthenticationManager;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.config.security.service.UserService;
import bend.library.data.JwtAccountInfo;
import bend.library.data.JwtLogoutInfo;
import bend.library.data.LoginInfo;
import bend.library.data.LogoutInfo;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@RequiredArgsConstructor
@Service
public class JwtAuthenticationManager implements AuthenticationManager {
    private final @NonNull TokenProvider tokenProvider;
    private final @NonNull UserDetailsService customUserDetailsService;
    private final @NonNull SaltedPasswordEncoder saltedPasswordEncoder;
    private final @NonNull UserService userService;


    @Override
    public JwtAccountInfo authenticate(LoginInfo loginInfo) {
        return BendOptional.of(customUserDetailsService.loadUserByUsername(loginInfo.getUsername()))
                .mustTrue(user -> saltedPasswordEncoder.matches(loginInfo.getPassword(), user.getUsername(), user.getPassword()))
                .map(userDetails -> {
                    loginInfo.setId(((CustomUserDetails) userDetails).getId());
                    final Set<String> auths = userService.getAuthoritiesByUid(loginInfo.getId());
                    ((CustomUserDetails)userDetails).setAuthorities(auths.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toSet()));
                    Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, userDetails.getUsername(), userDetails.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    return JwtAccountInfo.builder().authenticated(true).authorities(auths)
                            .token(tokenProvider.createToken(authentication, loginInfo)).username(userDetails.getUsername()).build();
                }).get();
    }

    @Override
    public void logout(LogoutInfo logoutInfo) {
        if (logoutInfo instanceof JwtLogoutInfo)
            tokenProvider.deleteToken(((JwtLogoutInfo) logoutInfo).getToken());
    }
}
