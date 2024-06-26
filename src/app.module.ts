import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PacksModule } from './packs/packs.module';
import { CardsModule } from './cards/cards.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { ReviewHistoryModule } from './review-history/review-history.module';
import * as path from 'path';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
            isGlobal: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configSevice: ConfigService) => ({

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
        PacksModule,
        CardsModule,
        FilesModule,
        ReviewHistoryModule
    ],

})
export class AppModule {

}