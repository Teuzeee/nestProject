//Definition d'une structure très simple pour la gestion d'une tache.
export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}