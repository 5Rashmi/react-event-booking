import type { SeatProps } from "./Seat"

export default interface CategoryMap {
    [category: string] : {
        seats: SeatProps[];
    };
}