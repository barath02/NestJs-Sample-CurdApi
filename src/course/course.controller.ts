import { Controller, Get, Param, Post, Body, Delete, Query} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Get()
    async getCourses() {
        const course = await this.courseService.getCourses();
        return course;
    }

    @Get(':courseId')
    async getCourse(@Param('courseId') courseId) {
        const course = await this.courseService.getCourse(courseId);
        return course;
    }
    

    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const course = await this.courseService.addCourse(createCourseDto);
        return course;
    }



    @Delete()
    async deleteCourse(@Query() query) {
        const course = await this.courseService.deleteCourse(query.courseId);
        return course;
    }
}
