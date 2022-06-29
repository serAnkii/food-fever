import {Sidebar} from "./components/Sidebar"
import {Main} from './components/Main'

const styles = {
  main:`flex`
}


export default function Home() {
  return (
    <div className={styles.main}>
      <Sidebar/>
      <Main/>
    </div>
  )
}
