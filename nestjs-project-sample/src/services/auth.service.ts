import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    private isAuthenticated = false;

    login(username: string, password: string): boolean {
        //service d'authentification simple pour ce connecter
        this.isAuthenticated = true;
        return true;
    }

    logout(): void {
        //Ici pour ce deconecter
        this.isAuthenticated = false;
    }

    isAuthenticatedUser(): boolean {
        //Et pour finir, on peux voir si l'utilisateur est authentifier ou non
        return this.isAuthenticated;
    }
}