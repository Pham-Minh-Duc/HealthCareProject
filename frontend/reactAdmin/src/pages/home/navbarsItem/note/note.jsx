import { useTheme } from "../../../../context/themeContext";
import './note.css';
import Title from "../../../../components/title/titleComponent";

export default function Note() {
   const { activeTheme } = useTheme();
       return (
           <>
            <div className={`frame ${activeTheme ? 'bgBlack' : 'bgWhite'}`}>
                <Title/>

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