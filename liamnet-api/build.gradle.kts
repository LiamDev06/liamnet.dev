import org.gradle.kotlin.dsl.withGroovyBuilder

plugins {
    `java-library`
    id("com.palantir.conjure") version "5.64.0"
}

conjure {
    withGroovyBuilder {
        "java" {
            setProperty("jakartaPackages", true)
            setProperty("useImmutableBytes", true)
        }
        "typescript" {
            setProperty("packageName", "@liamnet/liamnet-api")
            setProperty("version", project.version.toString())
        }
    }
}
