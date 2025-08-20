import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "../Avatar/Avatar"
import { useState } from "react"

export function Comment({content, onDeleteComment, comment, author}) {


    const [likeCount, setLikeCount] = useState(0)


    return (
        <div className={styles.comment}>

            <Avatar  src="https://github.com/gustavocanepa10.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                              {author.name}
                            </strong>

                            {/* <span>
                                <time title="11 de agosto ás 08:13" datetime="2025-08-11">Cerca de 1h atrás</time>
                            </span> */}

                        </div>

                        <button onClick={() => onDeleteComment(comment.id)} className={styles.buttonDelete} title="Apagar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {comment}
                    </p>
                </div>


                <footer>
                   <button onClick={() => setLikeCount(count => count + 1)}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>


            </div>



        </div>
    )
}