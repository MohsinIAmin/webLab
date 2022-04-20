import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { UserShowComponent } from './user-show/user-show.component';

const routes: Routes = [
  { path: '', component: FormSubmitComponent },
  { path: 'userShow', component: UserShowComponent },
  { path: 'form', component: FormSubmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
