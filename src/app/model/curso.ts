export class Curso {
    constructor(
        public id: number,
        public nome: string,
        public descricao: string,
        public valor: number,
        public duracao: number
    ) {}
}