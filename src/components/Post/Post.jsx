import styles from "./Post.module.css"
import { Comment } from "../Comment/Comment"
import { Avatar } from "../Avatar/Avatar"


export function Post({post}) {
    
    return (
        <article className= {styles.post}>
            <header className={styles.header}>    
            <div className={styles.authorInfo}>

                <Avatar src={post.author.avatarUrl}/>
                <div className={styles.info}>
                <strong>
                   {post.author.name}
                </strong>

                <span>
                   {post.author.role}
                </span>

                </div>
                
            </div>

            <time title="11 de agosto ás 08:13" datetime="2025-08-11">Publicado há 1h</time>

            </header>



            <div className= {styles.content}>

            <p>Fala galera 😁</p>

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


        {post.hasComment && <div className={styles.commentList}>
            <Comment/>
            

        </div> }
          
        
        
        
            
           
        </article>
    )
}