# Sandbox Project

## Overview
Sandbox is a comprehensive playground project designed to explore and demonstrate various modern software development technologies and architectural patterns. This project serves as a practical implementation showcase, incorporating multiple components and frameworks.

## Purpose
This sandbox environment provides developers with a hands-on experience to:
- Experiment with different technologies in a controlled setting
- Understand integration patterns between various components
- Learn best practices for modern application development
- Test new features and implementations safely

## Technologies
- Spring Boot
- Spring Modulith
- Angular
- Docker
- Keycloak
- PostgreSQL
- Will be added more technologies in the future.

### Key Features
- **Keycloak Integration**: Implementation of secure authentication and authorization
- **Spring Modulith**: Demonstration of modular monolithic architecture
- **API Implementation**: RESTful API endpoints with comprehensive documentation
- **Various Technology Implementations**: Showcase of different technical solutions and best practices

### Requirements
- Java 23
- Node v20
- Angular CLI v18
- Docker v27.1.1



### Docker
Run the docker compose file to start PostgreSQL and Keycloak. Import sandbox realm from the scripts/keycloak/sandbox_realm.json file if it is not imported by Docker.

```sh
docker exec -it keycloak /opt/keycloak/bin/kc.sh import --file /opt/keycloak/data/import/sandbox_realm.json
```

### Run the client 
Run the client with the following command:

```
ng serve
```

### Run the server
Run the server with the following command:

```
./mvnw spring-boot:run
```

