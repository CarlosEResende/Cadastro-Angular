import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cadastrar-funcionario',
  standalone: false,
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css'],
})
export class CadastrarFuncionarioComponent {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      cargo: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(40)]],
      departamento: ['', [Validators.required]],
      turno: ['', [Validators.required]],
      beneficios: ['', [Validators.required]]
    });
  }

  salvar() {
    if (this.formGroup.invalid) {
      this.snackBar.open('Campo Vazio ou Não Preenchido', 'Fechar', { duration: 3000 });

    } else {
      console.log('Dados do Funcionário:', this.formGroup.value);
      this.snackBar.open('Funcionário cadastrado com sucesso!', 'Fechar', { duration: 3000 });
    }
  }

  cancelar() {
    this.router.navigate(['/Listar']); 
  }

  errorMessage(campo: string) {
    const campoGroup = this.formGroup.get(campo);
  
    if (campoGroup?.hasError('required')) {
      return 'Campo obrigatório';
    }
  
    if (campoGroup?.hasError('minlength')) {
      return 'O campo precisa ter no mínimo 3 caracteres';
    }
  
    if (campoGroup?.hasError('maxlength')) {
      return 'O campo pode ter no máximo 40 caracteres';
    }
  
    return;
  }
  
}
