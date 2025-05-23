import type { SelectedCountProps } from "./ui-interface/i-selected-count";
import "./selected-count.css";

export const SelectedCount: React.FC<SelectedCountProps> = ({count}) => {
    return(
        <div className="count">
            <p><span style={{color: "green"}}>{count}</span> seats selected</p>
        </div>
    )
}