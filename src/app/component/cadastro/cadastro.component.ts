import { CadastroService } from "./../../service/cadastro.service";
import { Usuario } from "../../model/usuario";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  senhaForte: boolean;
  confirmacaoSenha: string = ''
  senhasConferem: boolean = false
  novo: boolean = false;
  usuario: Usuario = new Usuario(0, "", "", "", "");

  formularioDeUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cadastroService: CadastroService
  ) {}

  ngOnInit(): void {
    this.criarFormularioDeUsuario();

    let id: number = this.route.snapshot.params["id"];

    if (id === undefined) {
      this.novo = true;
    } else {
      this.findById(id);
      this.novo = false;
    }
  }

  findById(id: number) {
    this.cadastroService.getById(id).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    });
  }

  // Cadastro API
  // TODO refatorar metodo e alertas
  cadastrar() {
    if (this.novo) {
      this.cadastroService
        .insert(this.usuario)
        .subscribe((usuario: Usuario) => {
          this.usuario = usuario;
          this.novo = false;
        });
      alert("Cadastrado");
    } else {
      this.cadastroService
        .update(this.usuario)
        .subscribe((usuario: Usuario) => {
          this.usuario = usuario;
        });
      alert("Atualizado");
    }
  }

  enviarDados() {
    console.log(this.formularioDeUsuario.value);
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
      nome: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.email])],
      telefone: ["", Validators.compose([Validators.required])],
      senha: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ],
      confirmarSenha: ["", Validators.compose([Validators.required])]
    });
  }

  /**
   * Classificação da força da senha ---> Mayara
   */
  forcaDaSenha(): void {
    // listagem dos caracteres considerados "especiais"
    const caracteresEspeciais: string[] = ["@", "#", "$", "%", "&"];

    const contemCaracterEspecial: boolean = this.usuario.senha
      .split("") // transforma a senha em um array separado por ''
      .some((caracter: string): boolean => {
        return caracteresEspeciais.includes(caracter); // retorna verdadeiro se o caracter existir no array caracteresEspeciais
      });

    const contemMaisDeDezCaracteres: boolean = this.usuario.senha.length > 10;

    this.senhaForte = contemCaracterEspecial && contemMaisDeDezCaracteres;
  }

  verificaSenhasConferem(): void {
    this.senhasConferem = this.usuario.senha === this.confirmacaoSenha;
  }
}
