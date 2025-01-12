package io.berkan.sandbox.ping;

import io.berkan.sandbox.security.SecurityConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ping")
@RequiredArgsConstructor
public class PingController {

    @GetMapping
    public Ping ping() {
        return new Ping();
    }

    /**
     * This endpoint is protected by the role named "owner".
     * The "owner" role is extracted from the realm_access and resource_access claims in the JWT.
     * <p>
     * authorizeHttpRequests() method in SecurityConfig class is used to define the security rules.
     * Alternatively, @PreAuthorize annotation can be used on the method level: <i>@PreAuthorize("hasRole('owner')")</i>
     *
     * @return Ping object
     * @see SecurityConfig
     */
    @GetMapping("/as-owner")
    public Ping pingAsOwner() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(authentication.getAuthorities());
        return new Ping();
    }
}
