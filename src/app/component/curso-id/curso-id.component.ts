import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-curso-id',
  templateUrl: './curso-id.component.html',
  styleUrls: ['./curso-id.component.css']
})
export class CursoIdComponent implements OnInit {

  id: number;
  curso: Curso = new Curso(0, '','','',0,0);
  constructor(private cursoService:CursoService) { }

  ngOnInit() {
  }

  findIdCursos(){
    this.cursoService.getById(this.id).subscribe((cursoOut: Curso)=>{
      this.curso = cursoOut;
    })
  }

}
