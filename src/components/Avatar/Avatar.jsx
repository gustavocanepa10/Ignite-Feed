
import styles from "./Avatar.module.css"

export function Avatar({src, alt, title, hasBorder}) {

    return <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={src} 
    alt={alt} 
    title={title} />
}