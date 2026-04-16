package com.liamnet.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// Cannot be final: Spring Boot requires CGLIB subclassing via @SpringBootApplication
@SuppressWarnings("PMD.ClassWithOnlyPrivateConstructorsShouldBeFinal")
public class LiamnetServer {

    private LiamnetServer() {}

    public static void main(final String[] args) {
        SpringApplication.run(LiamnetServer.class, args);
    }
}
