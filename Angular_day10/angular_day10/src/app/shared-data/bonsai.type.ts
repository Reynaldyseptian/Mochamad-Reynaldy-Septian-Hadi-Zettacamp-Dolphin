import { DokumentType } from "./document.type";
import { IncludeType } from "./includeItem.type";

export interface BonsaiType {
    id: number,
    img: string,
    name: string,
    nickname: string,
    species: string,
    from: string,
    stock: number,
    price: number,
    document: DokumentType[],
    includeItem: IncludeType[]
}