import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";


async function start() {
  const PORT = process.env.PORT || 5000;
  const app = NestFactory.create(AppModule)
    ; (await app).enableCors();

  await (await app).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })

    //использование глобальных гардов
    ; (await app).useGlobalGuards(
      //перечень определенных гардов
      //см. https://docs.nestjs.com/guards
    )
}

start()