import { useTheme } from "../../../../context/themeContext"
import './overview.css'
import Download from "./sections/download/download";
import Rate from "./sections/rate/rate";
import Booking from "./sections/booking/booking";
import Doctor from "./sections/doctor/doctor";
import Hospital from "./sections/hospital/hospital"
import Feedback from "./sections/feedback/feedback";
import Time from "../../../../utils/time";


export default function Admin() {

    const { activeTheme } = useTheme();

    return (
        <>
        <div className={`frame ${activeTheme ? 'bgBlack' : 'bgWhite'}`}>
                <div id="admin--title" className={`${activeTheme ? "colorWhite" : "colorBlack"}`}>
                    <h1>Dash Board</h1>
                    <Time style={{display: "block"}}/>
                </div>
                <div id="admin--overview">
                    <div className = "section-1">
                        <Download/>
                    </div>
                    <div className = "section-2">
                        <Rate/>
                    </div>
                    <div className = "section-3">
                        <Booking/>
                    </div>
                    <div className = "section-4">
                        <Doctor/>
                    </div>
                    <div className = "section-5">
                        <Hospital/>
                    </div>
                    <div className = "section-6">
                        <Feedback/>
                    </div>
                </div>
        </div>
        </>
    )
}