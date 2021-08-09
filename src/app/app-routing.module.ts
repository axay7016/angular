import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',component: UserLoginComponent
  },
  {
    path:'register',component: UserRegisterComponent
  },
  {
    path:'users',component: UserComponent
  },
  {
    path:'author',component: AuthorComponent
  },
  {
    path:'admin',component: AdminComponent
  },
  {
    path:'**',component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
