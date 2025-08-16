import styles from "./Post.module.css"
import { Comment } from "../Comment/Comment"
import { Avatar } from "../Avatar/Avatar"
import {format, formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"


export function Post({author, hasComment, publishedAt}) {

    const publishedFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm:'h' ", {
        locale : ptBR
    })

    const publishedDateRelative = formatDistanceToNow(publishedAt, {
        locale : ptBR,
        addSuffix : true
    })
    
    return (
        <article className= {styles.author}>
            <header className={styles.header}>    
            <div className={styles.authorInfo}>

                <Avatar src={author.avatarUrl}/>
                <div className={styles.info}>
                <strong>
                   {author.name}
                </strong>

                <span>
                   {author.role}
                </span>

                </div>
                
            </div>

            <time title={publishedFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelative}</time>

            </header>


             <div className= {styles.content}>
            
            <p>Fala galera</p>

            <p>Acabei de subir um novo projeto no meu portfólio feito no NLW da Rocketseat</p>

            <p>Confiram!</p>

            <p>
                <a target="_blank" href="https://github.com/gustavocanepa10">https://github.com/gustavocanepa10</a>
            </p>





            </div>
            

        <form className= {styles.commentForm}>
            <strong>
                Deixe seu feedback
            </strong>
            <textarea placeholder="Deixe seu comentário"/>
            <footer>
                 <button  type="submit">Publicar</button>
            </footer>
           
        </form>


        {hasComment && <div className={styles.commentList}>
            <Comment/>
            

        </div> }
          
        
        
        
            
           
        </article>
    )
}