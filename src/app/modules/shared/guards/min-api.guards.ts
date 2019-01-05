import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MinApiService } from '../services/min-api/min-api.service';




/**
*AdminUser
*/
@Injectable()
export class IsAdminUserGuard implements CanActivate {
	constructor(
    private client:MinApiService,
    private Rout:Router,


    ){}
	async canActivate():  Promise<boolean>
	{
		const response = await this.client.CurrentUserInformation_Public().toPromise();

    if(response.CurrentUserType == 'AdminUser'){
    return response.CurrentUserType == 'AdminUser';
    }else{
      this.Rout.navigate(['Welcome'])
      return response.CurrentUserType == 'AdminUser';
    }


  }
}
/**
*السماح بالمشاركة في القواعد العامة
*/
@Injectable()
export class PrivilegedToPrticipateInRulePollGuard implements CanActivate {
	constructor(private client:MinApiService){}
	async canActivate():  Promise<boolean>
	{
		const response = await this.client.CurrentUserInformation_Public().toPromise();
		return response.CurrentUserPrivileges.PrticipateInRulePoll==true ;
	}
}
/**
*ParticipantUser
*/
@Injectable()
export class IsParticipantUserGuard implements CanActivate {
	constructor(
    private client:MinApiService,
    private Rout:Router
    ){}
	async canActivate():  Promise<boolean>
	{
		const response = await this.client.CurrentUserInformation_Public().toPromise();
    if(response.CurrentUserType == 'ParticipantUser'){
      return response.CurrentUserType == 'ParticipantUser';
      }else{
        this.Rout.navigate(['Welcome'])
        return response.CurrentUserType == 'ParticipantUser';
      }

	}
}
