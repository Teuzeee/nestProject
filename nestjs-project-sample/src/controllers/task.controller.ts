import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { Task } from './task.interface';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    //API pour récupérer toutes les tâche, on pourrait rajouter une API qui récupère toutes les tâches d'un utilisateur mais cela voudrait dire une gestion d'utilisateur.
    @Get()
    findAll(): Task[] {
        return this.taskService.findAll();
    }

    //API pour récupérer une seule tâche a l'aide de l'identifiant unique de cette dernière.
    @Get(':id')
    findOne(@Param('id') id: string): Task {
        return this.taskService.findOne(id);
    }

    //API pour créer une tâche
    @Post()
    create(@Body() task: Task): Task {
        return this.taskService.create(task);
    }

    //API pour modifier une tâche
    @Put(':id')
    update(@Param('id') id: string, @Body() task: Task): Task {
        return this.taskService.update(id, task);
    }

    //API pour supprimer une tâche 
    @Delete(':id')
    delete(@Param('id') id: string): Task {
        return this.taskService.delete(id);
    }
}