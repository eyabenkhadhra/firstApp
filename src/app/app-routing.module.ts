import { ArticleAffectComponent } from './article-affect/article-affect.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticleComponent } from './article/article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { EventCreateComponent } from './event-create/event-create.component';

//pathMatch:'full' ay harf ne9es mayemchych l route
const routes: Routes = [
  { path: 'members', pathMatch: 'full', component: MemberListComponent },
  { path: 'create', component: MemberFormComponent },
  { path: ':id/edit', pathMatch: 'full', component: MemberFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },//ken members
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'articles', pathMatch: 'full', component: ArticleComponent },
  { path: 'events', pathMatch: 'full', component: EventComponent },
  { path: 'tools', pathMatch: 'full', component: ToolsComponent },
  { path: ':id/affect', pathMatch: 'full', component: ArticleAffectComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'logout', pathMatch: 'full', component: LoginComponent },
  { path: 'event/create', pathMatch: 'full', component: EventCreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
