import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    //Ref: https://github.com/nestjs/nest/issues/964#issuecomment-413563009

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        const request = context.switchToHttp().getRequest<any>();
        if(request.route && request.route.path === '/auth/login'){
            console.log('JwtAuthGuard: Skipping login route');
            return true;
        }
        return super.canActivate(context);
    }
}
