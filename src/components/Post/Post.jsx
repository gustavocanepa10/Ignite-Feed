import styles from "./Post.module.css"
import { Comment } from "../Comment/Comment"
import { Avatar } from "../Avatar/Avatar"
import {format, formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"


export function Post({author, published, content}) {


    const [comments, setComments] = useState([])

    const [commentName, setCommentName] = useState("")

    function handleSubmit(event) {
        event.preventDefault()


       

        setComments([...comments, commentName])
        setCommentName("")
    }


    function handleDeleteComment(commentID) {

        setComments(prevComments => prevComments.filter(comment => comment.id !== commentID ))

    }

    function handleNewCommentName() {
        event.target.setCustomValidity('');
        setCommentName(event.target.value);
    }

    

    

    const publishedFormatted = format(published, "d 'de' LLLL 'às' HH:mm'h'", {
        locale : ptBR
    })

    const publishedDateRelative = formatDistanceToNow(published, {
        locale : ptBR,
        addSuffix : true
    })
    

    const isCommentEmpty = commentName.length === 0

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
            <textarea 
            required 
            value={commentName}  
            onChange={handleNewCommentName}  
            placeholder="Deixe seu comentário"
            
            
            />
            
            <footer>
                 <button 
                 disabled = {isCommentEmpty}  
                 type="submit">Publicar</button>
            </footer>
           
        </form>


         <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                    <Comment key={comment} onDeleteComment = {handleDeleteComment} author = {author}  comment = {comment}  />)}

            )
        }
            
            

        </div> 
          
        
        
        
            
           
        </article>
    )
}