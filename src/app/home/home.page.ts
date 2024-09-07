import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  aluno = {
    nome: 'João Pedro Braga Gomes',
    mat: '22201613',
    cod: 'ADS0301M',
    curso: 'Análise e Desenvolvimento de Sistemas - Manhã',
    uni: 'Bonsucesso'
  }

  constructor() {}

}
