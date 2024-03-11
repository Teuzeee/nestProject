import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogginMiddleware } from './middleware/loggin.middleware';
import { AuthMiddleware } from './middleware/authorization.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    //Middleware pour l'aurtorisation et pour le login. Authentification regarder juste un booléen true ou fasle, faudrait faire un front qui puisser gérer l'authentification. Second repris du cours parcequ'il est simple et visuel
    app.use(new AuthMiddleware().use);
    app.use(new LogginMiddleware().use);
    
    //On mes notre application sur le port 3000
    await app.listen(3000);
}
bootstrap();