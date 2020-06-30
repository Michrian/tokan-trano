export interface Ienfant {
    nom : string,
    datenaissance :Date,
    checked ?:boolean
}

export interface INoteEnfant {
    date?:Date,
    heure?:Date,
    biberon?:number,
    temperature?:number,
    selles?:boolean,
    urine?:boolean,
    commentaire?:string

}