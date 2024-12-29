package io.berkan.sandbox.ping;

import jakarta.persistence.Transient;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Ping {

    @Transient
    private LocalDateTime timestamp = LocalDateTime.now();
}
