import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const numAleatorio = Math.random();
      if (numAleatorio > 0.4) {
        console.log('Num Aleatorio mayor que parámetro 0.4: ', numAleatorio);
        return true;
      } else {
        console.log("Num Aleatorio menor que parámetro 0.4: ", numAleatorio);
        return false;

      }
  }

}
