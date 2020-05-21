import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './schemas/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {

    constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

    async create(createStudentDto: CreateStudentDto): Promise<Student> {
        const createdCat = new this.studentModel(createStudentDto);
        return createdCat.save();
    }

    async findAll(): Promise<Student[]> {
        return this.studentModel.find().exec();
    }

    async findOneById(id: any): Promise<Student> {
        return this.studentModel.findById(id);
    }
}
