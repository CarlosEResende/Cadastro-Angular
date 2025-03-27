import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula-angular-3';

  constructor(private router: Router) {}
  
  telaInicial() {
    this.router.navigate(['/']); 
  }
  navegarCadastro() {
    this.router.navigate(['/Cadastrar']);
  }
  navegarLista() {
    this.router.navigate(['/Listar']);
  }
}