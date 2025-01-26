import { ThemeProvider } from "../../context/themeContext"
import Navbar from "./navbar/navbar"

export default function Dashboard() {
    return(
    <>
        <ThemeProvider>
            <Navbar/>
        </ThemeProvider>
    </>
    )
}