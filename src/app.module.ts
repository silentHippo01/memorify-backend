import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PacksModule } from './packs/packs.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configSevice: ConfigService) => ({
                // type: 'postgres',
                // host: process.env.POSTGRES_HOST,
                // port: Number(process.env.POSTGRES_PORT),
                // username: process.env.POSTGRES_USER,
                // password: process.env.POSTGRES_PASSWORD,
                // database: process.env.POSTGRES_DB,
                // autoLoadEntities: true,
                // synchronize: true,
                // entities: [__dirname + '/**/*.entity{.ts,.js}'],
                type: 'postgres',
                host: configSevice.get('POSTGRES_HOST'),
                port: configSevice.get('POSTGRES_PORT'),
                username: configSevice.get('POSTGRES_USER'),
                password: configSevice.get('POSTGRES_PASSWORD'),
                database: configSevice.get('POSTGRES_DB'),
                autoLoadEntities: true,
                // synchronize: true,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        UsersModule,
        PacksModule
    ],

})
export class AppModule {

}