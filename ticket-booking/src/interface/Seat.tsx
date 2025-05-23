export interface SeatProps {
    id: string;
    seatNo: number;
    availablity: boolean;
    category: string;
    price: string;
    isSelected?: boolean;
    seatSelection?: (id: string) => void;
}