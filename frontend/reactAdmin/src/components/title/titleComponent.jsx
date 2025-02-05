import Time from "../../utils/time";
import { useTheme } from "../../context/themeContext";
import "./titleComponent.css"
export default function Title (){
    const { activeTheme } = useTheme();
    return (
        <>
            <div id="titleComponent" className={`${activeTheme ? "colorWhite" : "colorBlack"}`}>
                <h1>Dash Board</h1>
                <Time style={{display: "block"}}/>
            </div>
        </>
    )
}