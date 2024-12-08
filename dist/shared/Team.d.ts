import { Player } from "./Player";
export interface Team {
    name: string;
    homeLocation: string;
    address: string;
    players: Player[];
}
