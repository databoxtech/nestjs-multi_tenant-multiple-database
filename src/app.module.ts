import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StudentsModule } from './database/students/students.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TenancyModule } from './tenancy';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './database/users/users.module';
import { AppConstants } from './constants';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://admin:abc123@127.0.0.1:27017/school-lms'),
    TenancyModule.forRoot({
      tenantIdentifier: AppConstants.tenantHeader,
      options: {},
      uri: (tenantId: string) => `mongodb://127.0.0.1:27017/school-${tenantId}`,
    }),
    StudentsModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      context: ({ req }) => ({ req })
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
