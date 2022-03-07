import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsViewComponent } from './about-us-view/about-us-view.component';
import { CandidatesViewComponent } from './candidates-view/candidates-view.component';
import { HomeRootComponent } from './home-root/home-root.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';

const routes: Routes = [
  {path:'',component:HomeRootComponent},
  {path:'about-us',component:AboutUsViewComponent},
  {path:'candidates',component:CandidatesViewComponent},
  {path:'user-details',component:UserDetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutUsViewComponent,CandidatesViewComponent,UserDetailViewComponent,HomeRootComponent]
