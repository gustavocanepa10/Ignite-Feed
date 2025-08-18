import styles from "./Post.module.css"
import { Comment } from "../Comment/Comment"
import { Avatar } from "../Avatar/Avatar"
import {format, formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"


export function Post({author, published, content}) {


    const [comments, setComments] = useState([])

    const [commentText, setCommentText] = useState("")

    function handleSubmit(event) {
        event.preventDefault()


       

        setComments([...comments, commentText])
        setCommentText("")
    }

    

    const publishedFormatted = format(published, "d 'de' LLLL 'às' HH:mm'h'", {
        locale : ptBR
    })

    const publishedDateRelative = formatDistanceToNow(published, {
        locale : ptBR,
        addSuffix : true
    })
    
    return (
        <article className= {styles.post}>
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

            <time title={publishedFormatted} dateTime={published.toISOString()}>{publishedDateRelative}</time>

            </header>


             <div className= {styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.text}>
                            {line.text}
                        </p>
                    } else if (line.type === 'link') {
                        return <p key={line.text}><a href="">{line.text}</a></p>
                    }
                })}


            
            




            </div>
            

        <form onSubmit={handleSubmit} className= {styles.commentForm}>
            <strong>
                Deixe seu feedback
            </strong>
            <textarea value={commentText}  onChange={(e) => setCommentText(e.target.value)}  placeholder="Deixe seu comentário"/>
            <footer>
                 <button  type="submit">Publicar</button>
            </footer>
           
        </form>


         <div className={styles.commentList}>
            {comments.map((comment) => <Comment key={comment} content = {comment} />)}
            
            

        </div> 
          
        
        
        
            
           
        </article>
    )
}