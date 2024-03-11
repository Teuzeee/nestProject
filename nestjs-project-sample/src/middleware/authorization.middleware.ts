import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        //Récupération d'un header 'authorization'
        const authHeader = req.headers['authorization'];
        
        //Utilisateur autoriser a ce connecter ?
        if (authHeader) {
            console.log('Authorization header:', authHeader);
        } else {
            console.log('No Authorization header found');
        }
        next();
    }
}