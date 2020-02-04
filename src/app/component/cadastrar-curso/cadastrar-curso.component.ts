import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {

  novo: boolean = false;
  curso: Curso = new Curso(null, null, null, null, null, null);

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {

    let id: number = this.route.snapshot.params["id"];

    if (id === undefined) {
      this.novo = true;
    } else {
      this.findById(id);
      this.novo = false;
    }

  }
  findById(id: number) {
    this.cursoService.getById(id).subscribe((curso: Curso) => {
      this.curso = curso;
    });
  }

  cadastrarCurso() {
    if (this.novo) {
      this.cursoService
        .insert(this.curso)
        .subscribe((curso: Curso) => {
          this.curso = curso;
          this.novo = false;
        });
      alert("Cadastrado");
    } else {
      alert("Curso já existe!");
    }
  }

}
