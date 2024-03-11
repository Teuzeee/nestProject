import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LogginMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        //Middleware vus en cours, facile et vissible, pour afficher l'url dans le terminal de commande lorsque l'utilisateur rafraichis la page.
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next();
    }
}