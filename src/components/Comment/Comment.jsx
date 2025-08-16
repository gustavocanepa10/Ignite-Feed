import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "../Avatar/Avatar"

export function Comment() {
    return (
        <div className={styles.comment}>

            <Avatar  src="https://github.com/gustavocanepa10.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Gustavo Canepa
                            </strong>

                            <span>
                                <time title="11 de agosto ás 08:13" datetime="2025-08-11">Cerca de 1h atrás</time>
                            </span>

                        </div>

                        <button className={styles.buttonDelete} title="Apagar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        Muito bom, parabéns!
                    </p>
                </div>


                <footer>
                   <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                   </button>
                </footer>


            </div>



        </div>
    )
}