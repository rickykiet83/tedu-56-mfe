## Microfrontend Angular Mastery Course:

- You can access the Microfrontends Angular Mastery Course on Tedu: [https://tedu.com.vn/khoa-hoc](https://tedu.com.vn/course-ref/56/C5D7O1.html)

# Micro Frontend Angular Application

This README provides instructions to configure the infrastructure for a Micro Frontend application using Docker

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [DBeaver Community](https://dbeaver.io/download/)
- [Compass](https://www.mongodb.com/products/tools/compass)


## STEP 1: Create https certificate for identity service:
- Create a .pfx file:
  - MacOS: `dotnet dev-certs https -ep ${HOME}/.aspnet/https/tedu-idp.pfx -p password!`
  - WindowsOS: `dotnet dev-certs https -ep $env:USERPROFILE\.aspnet\https\tedu-idp.pfx -p password!`
- Trust the file: `dotnet dev-certs https --trust`

## STEP 2: How to run microservices api:
- At the root folder,
  - Create an .env file and replace your Stripe API Key:
  ```dotenv
  COMPOSE_PROJECT_NAME=tedu_foody_microfrontend
  StripeConfig_ApiKey=YOUR_STRIPE_API_KEY
  ```
  - Re pull images command: `docker-compose pull` or `docker compose pull`
  - Run containers:
    - `docker compose -f docker-compose.yml -f docker-compose.override.yml -p tedu_foody_microfrontend up -d --remove-orphans`
- Open docker desktop and maker sure all the services are up and running
- Open browser and navigate to [Web Health Status](http://localhost:6010/healthchecks-ui#/healthchecks)
