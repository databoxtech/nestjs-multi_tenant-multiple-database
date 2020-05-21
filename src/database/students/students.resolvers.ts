import { Resolver, Args, Query } from "@nestjs/graphql";
import { StudentsService } from "./students.service";
import { Student } from "./schemas/student.schema";


@Resolver('Student')
export class StudentsResolvers{

    constructor(private readonly studentssService: StudentsService) {}

    @Query()
    async getStudents() {
        return this.studentssService.findAll();
    }

    @Query('student')
  async findOneById(@Args('id') id: string): Promise<Student> {
    return this.studentssService.findOneById(id);
  }
}