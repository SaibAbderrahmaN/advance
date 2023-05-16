import { Controller, Get, Post, Res, Req, Body, UsePipes, ValidationPipe, Param, Delete, InternalServerErrorException, HttpException, HttpCode, HttpStatus, Query, Bind } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto, TaskParamDto, QueryParamDto } from './dto/task.dto';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @Bind(Res())
  async getAlltask(res) {
      const data = await this.taskService.getAllTasks();
      return res.status(200).send(data)
  }

  @Get('/filter/data')
  @Bind(Res())
  @UsePipes(new ValidationPipe({ whitelist: false, transform: true}))
  async FilterTaskById( res ,@Query() reqParam: QueryParamDto) {
      console.log(reqParam.filter);
      const data = await this.taskService.filterTask(reqParam.filter);
      return res.status(200).send(data)
  }
  
  @Get('/:id')
  @UsePipes(new ValidationPipe())
  async getTaskById(@Param() reqParam: TaskParamDto) {
    return await this.taskService.getTask(reqParam.id);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  async deleteTaskById(@Param() reqParam: TaskParamDto) {
      return await this.taskService.deleteTask(reqParam.id);
  }

  @Post()
  @Bind(Res())
  @UsePipes(new ValidationPipe())
  async createTask( res,@Body()  task: TaskDto ) {
      const data = await this.taskService.addTask(task);
      return res.status(200).send(data)
  }
}
