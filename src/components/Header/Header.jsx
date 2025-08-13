
import Logo from "../../assets/ignite-logo.png"
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className= {styles.header}>
            <img src= {Logo} alt="LogoTipo do Ignite" />
            <span>
                Ignite Feed
            </span>
        </header>   
        
    )
}