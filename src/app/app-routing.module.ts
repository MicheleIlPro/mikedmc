import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './mains/home/home.component';
import { BotsComponent } from './mains/bots/bots.component';
import { ServerComponent } from './mains/server/server.component';
import { NullaComponent } from './mains/nulla/nulla.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bots', component: BotsComponent },
  { path: 'server', component: ServerComponent },
  { path: 'nulla', component: NullaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
