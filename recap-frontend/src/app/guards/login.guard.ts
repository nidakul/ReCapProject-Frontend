import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService : AuthService = inject(AuthService);
  const toastrService:ToastrService = inject(ToastrService);
  if(authService.isAuthenticated()){
    return true;
  }else{
    toastrService.info("Please Login!");
  }
};
