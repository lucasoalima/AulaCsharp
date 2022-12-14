import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFolhaComponent } from './components/pages/folha/cadastrar-folha/cadastrar-folha.component';
import { CadastrarFuncionarioComponent } from './components/pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionariosComponent } from './components/pages/funcionario/listar-funcionarios/listar-funcionarios.component';

const routes: Routes = [
  {
    path: "pages/funcionario/cadastrar",
    component: CadastrarFuncionarioComponent
  },
  {
    path: "pages/funcionario/cadastrar/:id",
    component: CadastrarFuncionarioComponent
  },
  {
    path: "pages/funcionario/listar",
    component: ListarFuncionariosComponent
  },
  {
    path: "pages/folha/cadastrar",
    component: CadastrarFolhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
