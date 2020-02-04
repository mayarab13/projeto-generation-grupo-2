import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos: Array<Curso> = new Array<Curso>();

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.findAllProdutos();
  }

  findAllProdutos(){
    this.cursoService.getAll().subscribe((cursoOut: Curso[])=>{
      this.cursos = cursoOut;
    });
  }

  allProdutos(){
    this.cursoService.getAll().subscribe((cursoOut: Curso[])=>{
      this.cursos = new Array<Curso>();
      this.cursos.push(cursoOut[0]);
    });
  }


}
