import { Produto } from "./Produto";

export class Bola extends Produto {
  private _futebol: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    futebol: string
  ) {
    super(id, nome, tipo, preco);
    this._futebol = futebol;
  }

  public get futebol(): string {
    return this._futebol;
  }

  public set futebol(value: string) {
    this._futebol = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`\nMarca: ${this._futebol}`);
  }
}
