import type { SeatProps } from "../interface/Seat";
import "./seat.css";

export const Seat: React.FC<SeatProps> = ({seatNo}) => {
    return(
        <div className="seat">
            {seatNo}
        </div>
    )
}