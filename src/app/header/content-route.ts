import { Routes } from '@angular/router';
import { AccountsModule } from 'src/app/accounts/accounts.module';
import { IsAccountHeadGuard } from '../guard/is-account-head.guard';
import { IsLoggedInGuard } from '../guard/is-logged-in.guard';
import { IsRelationshipExecutiveGuard } from '../guard/is-relationship-executive.guard';


export const contentroutes: Routes = [
  {path:'',redirectTo:'applicant',pathMatch:'full'},
    {path:'accounts',loadChildren:() => import('src/app/accounts/accounts.module').then(m => m.AccountsModule),canActivate:[IsLoggedInGuard,IsAccountHeadGuard]},
    {path:'admin',loadChildren:() => import('src/app/admin/admin.module').then(m => m.AdminModule),},
    {path:'applicant',loadChildren:() => import('src/app/applicant/applicant.module').then(m => m.ApplicantModule),canActivate:[IsLoggedInGuard]},
    {path:'credit-manager',loadChildren:() => import('src/app/credit-manager/credit-manager.module').then(m => m.CreditManagerModule),canActivate:[IsLoggedInGuard]},
    {path:'operation',loadChildren:() => import('src/app/operation/operation.module').then(m => m.OperationModule),canActivate:[IsLoggedInGuard]},
    {path:'relation',loadChildren:() => import('src/app/relation/relation.module').then(m => m.RelationModule),canActivate:[IsLoggedInGuard,IsRelationshipExecutiveGuard]},

    
    
  
  ];