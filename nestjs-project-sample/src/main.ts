import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoginMiddleware } from './middleware/logger.middleware';
import { AuthMiddleware } from './middleware/auth.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    //Middleware pour l'aurtorisation et pour le login. Authentification regarder juste un booléen true ou fasle, faudrait faire un front qui puisser gérer l'authentification. Second repris du cours parcequ'il est simple et visuel
    app.use(new AuthMiddleware().use);
    app.use(new LoginMiddleware().use);
    
    //On mes notre application sur le port 3000
    await app.listen(3000);
}
bootstrap();