import { Module } from '@nestjs/common';
import { StudentSchema } from './schemas/student.schema';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentsResolvers } from './students.resolvers';
import { TenancyModule } from 'src/tenancy';

@Module({
  imports: [TenancyModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  controllers: [StudentsController],
  providers: [StudentsService, StudentsResolvers],
})
export class StudentsModule {}
