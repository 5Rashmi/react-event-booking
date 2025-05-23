import type { SeatProps } from "../interface/Seat";
import "./seat.css";

export const Seat: React.FC<SeatProps> = ({id, seatNo, isSelected, seatSelection}) => {
    return(
        <div className={`seat ${isSelected ? "selected" : ""}`} onClick={() => seatSelection?.(id)}>
            {seatNo}
        </div>
    )
}