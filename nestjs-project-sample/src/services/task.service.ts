import { Injectable } from '@nestjs/common';
import { Task } from '../controllers/task.interface';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    //Récupération de toutes les tâches. Fonction appelée derrière dans une API GED
    findAll(): Task[] {
        return this.tasks;
    }

    //Récupération d'une tâche. Fonciton appelée derrière dans une API GET e donnat un identifiant
    findOne(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    //Création d'une tâche. Fonction apellée derière dans une API POST
    create(task: Task): Task {
        task.id = Date.now().toString();
        this.tasks.push(task);
        return task;
    }

    //Modification d'une tâche. Cette tâche doit logiquement déjà être présente en vérifiant avec sont identifiant. Fonction appelée dans une API PUT
    update(id: string, task: Task): Task {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks[index] = task;
            return task;
        }
        return null;
    }

    //Suppression d'une tâche. Cette tâche doit logiquement déjà être présente en vérifiant avec sont identifiant. Fonction appelée dans une API DELETE
    delete(id: string)id: string {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const deletedTask = this.tasks.splice(index, 1)[0];
            return index;
        }
        return index;
    }
}