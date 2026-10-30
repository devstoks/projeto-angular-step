
import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import { map, catchError, of } from 'rxjs';

import { Auth } from '../services/auth';

export const adminGuard: CanActivateFn = () => {

  const authService = inject(Auth);

  const router = inject(Router);

  return authService.getMe().pipe(

    map((user: any) => {

      if (user.role === 'admin') {

        return true;
      }

      router.navigate(['/produtos']);

      return false;
    }),

    catchError(() => {

      router.navigate(['/login']);

      return of(false);
    })
  );
};
