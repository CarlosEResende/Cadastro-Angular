import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './funcionario/listar-funcionario/listar-funcionario.component';


const routes: Routes = [
  { path: 'Funcionario/Cadastrar', component: CadastrarFuncionarioComponent },
  { path: 'Funcionario/Listar', component: ListarFuncionarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
