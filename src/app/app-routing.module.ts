import { ListaCadastradosComponent } from './component/lista-cadastrados/lista-cadastrados.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ContatoComponent } from './component/contato/contato.component';
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CentralDeAjudaComponent } from './component/central-de-ajuda/central-de-ajuda.component';
import { CursoComponent } from './component/curso/curso.component';
import { CursoIdComponent } from './component/curso-id/curso-id.component';
import { CadastrarCursoComponent } from './component/cadastrar-curso/cadastrar-curso.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'busca-curso', component: CursoIdComponent},
  {path: 'cadastra-curso', component: CadastrarCursoComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'lista-cadastrados', component: ListaCadastradosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'central-de-ajuda', component: CentralDeAjudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
