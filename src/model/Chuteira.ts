﻿import { Produto } from "./Produto";

export class Chuteira extends Produto{
    
    private _chuteira: string;

	constructor(id: number, nome: string, tipo: number, preco: number, chuteira: string) {
        super(id, nome, tipo, preco);
		this._chuteira = chuteira;
	}

	public get generico(): string {
		return this._chuteira;
	}

	public set generico(value: string) {
		this._chuteira = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nMarca: ${this._chuteira}`);
    }
}