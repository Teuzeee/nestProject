import { Module } from '@nestjs/common';
import { TaskController } from '../controllers/task.controller';
import { TaskService } from '../services/task.service';

//Initialisation des modules utiliser.
@Module({
    controllers: [TaskController],
    providers: [TaskService],
})
export class StaticModule {
    constructor(private readonly taskService: TaskService) {
        //Appel simple de la fonction juste en dessous
        this.initializeTasks();
    }

    private initializeTasks() {
        //On mes des tâches de base dans le projet pour pouvoir facillement tester notre projet
        if (this.taskService.findAll().length === 0) {
            this.taskService.create({ id: '1', title: 'Tâche 1', description: 'Description de la tâche 1', completed: false });
            this.taskService.create({ id: '2', title: 'Tâche 2', description: 'Description de la tâche 2', completed: false });
        }
    }
}