import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TenancyGuard } from './tenancy/tenancy.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: console
  });
  app.useGlobalGuards(new JwtAuthGuard());
  app.useGlobalGuards(new TenancyGuard());
  await app.listen(3000);
}
bootstrap();
