# NestJS Multi Tenent - database/ schema per client

## Description

Uses needle-innovision/nestjs-tenancy (https://github.com/needle-innovision/nestjs-tenancy). As some changes was required, module included


## How it works

Template relies on needle-innovision/nestjs-tenancy module to create mongoose connection (opened connections are re-used) based on client. Client is detected via header defined in constants.ts (tenantHeader). 

Two global AuthGuards are added for authentication and tenant security,
1. JwtAuthGuard: Simple manages jwt authentication. However since guard is configured globally, '/auth/login' path bypassed by processing route
2. TenancyGuard: This also bypass '/auth/login'. Basically '/auth/login' trusts defined tenantHeader. However as user can forge this header after authentication, this guard matches header value against the client id specified in the jwt. Upon authentication this value is injected to jwt token