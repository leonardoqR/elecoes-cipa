import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {

  candidatos: any[] = [];

  constructor() { }

  ngOnInit() {}
  cardClick(valor){
    alert('clicou em: '+valor.nome)
  }
  carregar(){
    this.candidatos = [
      {nome: 'Matheus Maia', setor: 'Senai', imagem: 'https://api.adorable.io/avatars/200/matheusmaia.png'},
      {nome: 'Caique Santos', setor: 'Piloto', imagem: 'https://api.adorable.io/avatars/200/caiquesantos.png'},
      {nome: 'walter Gandarella', setor: 'Professor', imagem: 'https://api.adorable.io/avatars/200/waltergandarella.png'},
      {nome: 'Joao Carlos', setor: 'Viadão', imagem: 'https://api.adorable.io/avatars/200/joaocarlos.png'}
    ];
  }  

}
