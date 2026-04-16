package com.liamnet.server;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JerseyConfig extends ResourceConfig {

    @SuppressWarnings("PMD.ConstructorCallsOverridableMethod")
    public JerseyConfig() {
        register(CorsFilter.class);
        register(ServiceExceptionMapper.class);
    }
}
