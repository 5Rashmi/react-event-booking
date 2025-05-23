
import { useEffect, useState } from "react";
import type { seatGrid } from "../interface/SeatGrid"
import type { SeatProps } from "../interface/Seat";
import { Seat } from "./Seat";
import "./book-seat.css";
import type CategoryMap from "../interface/CategoryMap";

export const BookSeat: React.FC<seatGrid> = ({rows, cols}) => {
    const [seatsArr, setSeatsArr] = useState<SeatProps[]>([]);
    const [categorizedSeats, setCategorizedSeats] = useState<CategoryMap>({});
    
    useEffect(() => {
    let seatNo: number = 0;
    const newSeats: SeatProps[] = [];

    const newCategorizedSeats: CategoryMap = {
        "VIP - $550": {seats: []},
        "Exclusive - $350": {seats: []},
        "Regular - $150": {seats: []}
    };

    for(let i=1; i<=rows; i++) {
            for(let j=1; j<=cols; j++) {
                seatNo++;

                let category: string = '';
                let price: string = '';
                
                if(i===1) {
                    category = 'VIP';
                    price = '550';
                } else if(i<=3) {
                    category = 'Exclusive';
                    price = '350';
                } else {
                    category = 'Regular';
                    price = '150';
                }
                
                newSeats.push({
                    id: `${i}-${j}`,
                    row: i,
                    col: j,
                    seatNo,
                    availablity: true,
                    category,
                    price
                });
            }
        }

        setSeatsArr(newSeats);

    newSeats.forEach((seat) => {
        const key = `${seat.category} - $${seat.price}`;
        newCategorizedSeats[key].seats.push(seat);
    });
    setCategorizedSeats(newCategorizedSeats);

    }, [rows, cols]);
    console.log(categorizedSeats);

    return(
        <div>
            {Object.entries(categorizedSeats).map(([category, data]) => (
                <div key={category}>
                    <h3>{category}</h3>
                    <div className="container" style={{gridTemplateColumns:`repeat(${cols}, 2fr)`, gridTemplateRows:`repeat(${rows / cols},30px)`}}>
                        {data.seats.map((seat) => (
                        <Seat 
                        key={seat.id}
                        id={seat.id} 
                        row={seat.row}
                        col={seat.col}
                        seatNo={seat.seatNo} 
                        availablity={seat.availablity}
                        category={seat.category}
                        price={seat.price}/>
                    ))}
                    </div>   
                </div>
            ))}
        </div>
    )
}