import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './api/auth/auth.module'
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { ResponseInterceptor } from './interceptor/response.interceptor'
import { RequestInterceptor } from './interceptor/request.interceptor'
import { RouterMiddleware } from './middleware/router.middleware'
import { LoginGuard } from './guards/auth.guard'
import { PrismaModule } from './global/prisma/prisma.module'
import { RedisModule } from './global/redis/redis.module'
import { StoreModule } from './global/store/store.module'
import { LoggerModule } from './global/logger/logger.module'
import { AxiosModule } from './global/axios/axios.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    LoggerModule,
    PrismaModule,
    RedisModule,
    StoreModule,
    AxiosModule,
    // api
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor, // 响应拦截器
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestInterceptor, // 请求拦截器
    },
    {
      provide: APP_GUARD,
      useClass: LoginGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RouterMiddleware).forRoutes('*') // 对所有路由生效
  }
}
