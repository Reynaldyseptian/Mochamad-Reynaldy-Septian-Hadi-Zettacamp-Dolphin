import { AddressType } from "./addresses.type"
import { BandMember } from "./bandMember.type"
export interface BandType {
    id: number,
    img: string,
    bandName: string,
    manager: string,
    email: string,
    addresses: AddressType[],
    genre: string,
    registerDate: string,
    payment: boolean,
    personnel: BandMember[]
}