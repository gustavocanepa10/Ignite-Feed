
import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"
import { Avatar } from "../Avatar/Avatar"


export function Sidebar() {
    return (
        <aside className= {styles.sidebar}>
        <img className={styles.imagem} src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
        <div className= {styles.profile}>

            <Avatar hasBorder src = "https://github.com/gustavocanepa10.png"
            alt = "Avatar personalizado" title = "Foto de perfil"/>

            <strong>
                João Gustavo
            </strong>

            <span>
                Web Developer
            </span>

            <footer>
               
                <a href="#">
                     <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>

        </div>
        </aside>

    )
}