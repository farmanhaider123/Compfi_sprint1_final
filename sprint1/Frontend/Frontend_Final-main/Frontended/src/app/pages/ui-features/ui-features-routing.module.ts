import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisComponent } from './regis/regis.component';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { LoginComponent } from './login/login.component';
ForgotpassComponent
ChangepassComponent
ManageroleandperComponent
import { OtpPageComponent } from './otp-page/otp-page.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { FormsModule } from '@angular/forms';
import { Accordion1Component } from './accordion1/accordion1.component';
import { AcordinComponent } from './acordin/acordin.component';
import { ManageroleandperComponent } from './manageroleandper/manageroleandper.component';
AcordinComponent
const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ {
    path: 'grid',
    component: GridComponent,
  }, {
    path: 'icons',
    component: IconsComponent,
  }, {
    path: 'typography',
    component: TypographyComponent,
  }, {
    path: 'search-fields',
    component: SearchComponent,
    },
     {
    path:"addrole",
    component:AcordinComponent
  },
  {
    path:"rolelist",
    component:Accordion1Component
  },
{
      path:'managerole/:id'
      ,component:ManageroleandperComponent
    },
  {
    path: 'regis',
    component: RegisComponent,
    },{
    path: 'login',
    component:LoginComponent,
    },
  {
    path: 'otp-page',
    component:OtpPageComponent,
    },
   {
    path: 'forgotpass',
    component:ForgotpassComponent,
    },
   {
    path: 'changepass/:id',
    component:ChangepassComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormsModule],
})
export class UiFeaturesRoutingModule { }
