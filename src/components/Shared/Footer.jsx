import "./Footer.css"
import twitter from "./../../assets/twitter.png"
import facebook from "./../../assets/facebook.png"
import instagram from "./../../assets/instagram.png"
import linkeldn from "./../../assets/linkeldn.png"
import github from "./../../assets/github.png"

export default function Footer(){
    return (
        <footer>
            <a href=""><img src={twitter} /></a>
            <a href=""><img src={facebook} /></a>
            <a href=""><img src={instagram} /></a>
            <a href=""><img src={linkeldn} /></a>
            <a href=""><img src={github} /></a>
        </footer>
    )
}