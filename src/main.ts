import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');

  const config = new DocumentBuilder()
  .setTitle('On Health')
  .setDescription('farm \n\n ▪️ Manuela Giraldo Arango')
  .setVersion('1.0')
  .addTag('Heath')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
  console.log(`Access to the project via Swagger: localhost:${port}/api-doc`);
}
bootstrap();
