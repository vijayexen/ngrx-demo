import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './authtoken.interceptor';
import { ApiResponseInterceptor } from './apiresponse.interceptor';
import { ErrorResponseInterceptor } from './error-response.interceptor';

export const interceptors = [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthTokenInterceptor,
  multi: true
},
{
  provide: HTTP_INTERCEPTORS,
  useClass: ApiResponseInterceptor,
  multi: true
},
{
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorResponseInterceptor,
  multi: true
}];
