
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateStudentInput {
    name?: string;
    age?: number;
}

export interface IQuery {
    getStudents(): Student[] | Promise<Student[]>;
    student(id: string): Student | Promise<Student>;
}

export interface IMutation {
    createStudent(createStudentInput?: CreateStudentInput): Student | Promise<Student>;
}

export interface ISubscription {
    studentCreated(): Student | Promise<Student>;
}

export interface Student {
    name?: string;
    birthday?: number;
}
