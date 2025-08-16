
import { Post } from './components/Post/Post'
import "./global.css"
import styles from "../src/App.module.css"
import { Sidebar } from './components/Sidebar/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      name: "Diego Fernandes",
      role: "Web Developer",
      avatarUrl: "https://github.com/diego3g.png"
    },
    content: [
      { type: "paragraph", text: "Fala galera 😁" },
      { type: "paragraph", text: "Acabei de subir um novo projeto no meu portfólio feito no NLW da Rocketseat" },
      { type: "paragraph", text: "Confiram!" },
      { type: "link", text: "https://github.com/gustavocanepa10" }
    ],
    publishedAt: new Date("2025-08-11 08:13:00"),
    hasComment: false

  },
  {
    id: 2,
    author: {
      name: "João Gustavo",
      role: "Front-End Developer",
      avatarUrl: "https://github.com/gustavocanepa10.png"
    },
    content: [
      { type: "paragraph", text: "Oi pessoal! 🚀" },
      { type: "paragraph", text: "Estou estudando React e fiz esse projeto de um blog para praticar." },
      { type: "link", text: "https://github.com/gustavocanepa10/Encurtador-Back" }
    ],
    publishedAt: new Date("2025-08-12 14:20:00"),
    hasComment: true
   
  }
]

function App() {
 
  return (
    <div>
      {/* <Header/> */}
      <div className = {styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map((post) => <Post key={post.id} post = {post}/>)}

        

      
      </main>

      </div>

    </div>
  )
}

export default App
