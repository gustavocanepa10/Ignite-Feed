
import { Post } from './Post'
import { Header } from './components/Header/Header'
import "./global.css"
import styles from "../src/App.module.css"
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {
 
  return (
    <div>
      <Header/>
      

      <div className = {styles.wrapper}>

      <Sidebar/>
        <main>
      <Post author = "Gustavo" content = "Novo post"  />
      <Post author = "Pedro" content = "Novo post 2"  />
        </main>

      </div>

    </div>
  )
}

export default App
