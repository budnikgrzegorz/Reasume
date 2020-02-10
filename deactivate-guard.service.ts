import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DeactivateService } from './deactivate.service';
import { PermissionsComponent } from './permissions/permissions.component';
import { SkillsComponent } from './skills/skills.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<PermissionsComponent | SkillsComponent>  {
  // tslint:disable-next-line:max-line-length
  canDeactivate(component: PermissionsComponent | SkillsComponent, currentRoute: import('@angular/router').ActivatedRouteSnapshot, currentState: import('@angular/router').RouterStateSnapshot, nextState?: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {

  return component.change;
  }

  constructor(private deactivateService: DeactivateService) { }

}
