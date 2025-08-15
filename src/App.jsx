
import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import "./global.css"
import styles from "../src/App.module.css"
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {
 
  return (
    <div>
      {/* <Header/> */}
      <div className = {styles.wrapper}>
      <Sidebar/>
      <main>
        <Post/>
        

      
      </main>

      </div>

    </div>
  )
}

export default App
