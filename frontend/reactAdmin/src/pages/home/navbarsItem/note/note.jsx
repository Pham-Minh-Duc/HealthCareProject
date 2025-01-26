import { useTheme } from "../../../../context/themeContext";
import './note.css';
import Time from "../../../../utils/time";

export default function Note() {
   const { activeTheme } = useTheme();
       return (
           <>
            <div className={`frame ${activeTheme ? 'bgBlack' : 'bgWhite'}`}>
                <div id="admin--title" className={`${activeTheme ? "colorWhite" : "colorBlack"}`}>
                    <h1>Dash Board</h1>
                    <Time style={{display: "block"}}/>
                </div>
                <div id="note--overview">
                    <div className = "section-1">
                    </div>
                    <div className = "section-2">
                    </div>
                    <div className = "section-3">
                    </div>
                    <div className = "section-4">
                    </div>
                    <div className = "section-5">
                    </div>
                    <div className = "section-6">
                    </div>
                </div>
            </div>
           </>
       )
}