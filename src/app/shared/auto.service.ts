import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
})
export class AutosService {
    obtenListaAutos(): Auto[] {
        let listaAutos = this._determinaListaAutos();
        return listaAutos;
    }
    private _determinaListaAutos(): Auto[] {
        let listaAutos = []
    }

    public obtenAuto( id: number ): Auto {
        return this.listaAutos.find( auto => auto.id == id )!;
    }
}  