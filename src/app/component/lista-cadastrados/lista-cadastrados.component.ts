import { Usuario } from '../../model/usuario';
import { CadastroService } from '../../service/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { MethodCall } from '@angular/compiler';


@Component({
  selector: 'app-lista-cadastrados',
  templateUrl: './lista-cadastrados.component.html',
  styleUrls: ['./lista-cadastrados.component.css']
})
export class ListaCadastradosComponent implements OnInit {


  cadastrados : Array<Usuario> = new  Array<Usuario>();

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.cadastroService.getAll().subscribe((cadastradosOut: Usuario[]) => {
      this.cadastrados = cadastradosOut;
    });
  }

    allUsers(){
      this.cadastroService.getAll().subscribe((cadastradosOut: Usuario[]) => {
        this.cadastrados = new Array<Usuario>();
        this.cadastrados.push(cadastradosOut[0]);
    });
  
}}
