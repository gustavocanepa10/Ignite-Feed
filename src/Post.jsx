// retorna dentro dos parâmetros da função um objeto props : {author, content}
// desestruturando pegamos direto do objeto {author, content} = props


export function Post({author, content}) {
    
    return (
        <div>
            <strong>
                {author}
            </strong>
            <p>
                {content}
            </p>
        </div>
    )
}