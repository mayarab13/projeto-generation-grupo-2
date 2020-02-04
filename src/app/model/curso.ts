export class Curso {
    constructor(
        public id: number,
        public nome: string,
        public imagem: string,
        public descricao: string,
        public valor: number,
        public duracao: number
    ) {}
}