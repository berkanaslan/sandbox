package io.berkan.sandbox.ping;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ping")
@RequiredArgsConstructor
public class PingController {

    private final PingRepository pingRepository;

    @GetMapping
    public Iterable<Ping> ping() {
        return pingRepository.findAll();
    }
}