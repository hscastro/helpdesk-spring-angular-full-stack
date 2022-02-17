import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent, children:[
<<<<<<< HEAD
      {path: 'home', component: HomeComponent },
      {path: 'tecnicos', component: TecnicoListComponent }
=======
      {path: 'home', component: HomeComponent }
>>>>>>> d36df437f25bc1d96bc9c572325e525578321695
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
