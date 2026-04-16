pluginManagement {
    repositories {
        gradlePluginPortal()
        mavenCentral()
    }

    plugins {
        id("org.springframework.boot") version "4.0.5"
        id("io.spring.dependency-management") version "1.1.7"
    }
}

rootProject.name = "liamnet"

include("liamnet-server")
include("liamnet-api")
include("liamnet-api:liamnet-api-typescript")
include("liamnet-api:liamnet-api-objects")
include("liamnet-api:liamnet-api-jersey")
