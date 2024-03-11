import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TaskController } from '../controllers/task.controller';
import { TaskService } from '../services/task.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
})
export class DynamicModule implements OnApplicationBootstrap {
    private isLoginMiddlewareEnabled: boolean = false; 

    constructor(private readonly taskService: TaskService) {}

    async onApplicationBootstrap() {
        // Vérifiez si le middleware de connexion doit être activé, mis a false de base. Faudrait qu'en front un admin puisse le désactivé.
        if (this.isLoginMiddlewareEnabled) {
            console.log('Login middleware is enabled');
        } else {
            console.log('Login middleware is disabled');
        }
    }
}