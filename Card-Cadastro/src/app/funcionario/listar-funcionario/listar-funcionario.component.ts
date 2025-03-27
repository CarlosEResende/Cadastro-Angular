import { Component } from '@angular/core';

export interface Funcionario {
  nome: string;
  cargo: string;
  departamento: string;
}
@Component({
  selector: 'app-listar-funcionario',
  standalone: false,
  templateUrl: './listar-funcionario.component.html',
  styleUrl: './listar-funcionario.component.css'
})


export class ListarFuncionarioComponent {
  displayedColumns: string[] = ['nome', 'cargo', 'departamento', 'turno', 'beneficios'];  
  dataSource = [
    { nome: 'João Silva', cargo: 'Analista', departamento: 'TI', turno: 'Manhã', beneficios: 'Vale-transporte' },
    { nome: 'Maria Oliveira', cargo: 'Gerente', departamento: 'RH', turno: 'Tarde', beneficios: 'Vale-transporte' },
    { nome: 'Carlos Souza', cargo: 'Designer', departamento: 'Marketing', turno: 'Noite', beneficios: 'Vale-transporte' },
  ];
}
