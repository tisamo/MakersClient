import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HeaderInterceptor} from './HeaderInterceptor';
/**
 * Created by tisamo on 2020. 01. 30..
 */
export const InterceptorConfig = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeaderInterceptor,
  multi: true
};
