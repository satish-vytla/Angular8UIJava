import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDBDataComponent } from './user-dbdata/user-dbdata.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [  {
  path: `dash`,  loadChildren:() => import(`./dashboard/dash-board.module`).then(d => d.DashBoardModule) },

// { path: `/student`, loadChildren: () => import(`./student/student.module`).then(s => s.StudentModule) }

/* {
  path: ' ',
  loadChildren: './dashboard/dash-board.module#DashBoardModule',
}, */
{
  path: 'userdetails',
  component: UserDetailsComponent
},
{
  path: 'userdbdata',
  component: UserDBDataComponent
},
{
  path: 'eventPage',
  component: EventsComponent
},
{
  path: '',
  component: WelcomeComponent
}/* ,
{
  path: '**',
  redirectTo: '/404'
} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
