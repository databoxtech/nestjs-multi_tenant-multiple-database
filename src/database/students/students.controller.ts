import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './schemas/student.schema';

@Controller('students')
export class StudentsController {
    
    constructor(private readonly studentsService: StudentsService) {}

    @Post()
    async create(@Body() createStudentDto: CreateStudentDto) {
        await this.studentsService.create(createStudentDto);
    }

    @Get()
    async findAll(): Promise<Student[]> {
        return this.studentsService.findAll();
    }
}
