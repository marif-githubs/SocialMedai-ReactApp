import styles from "./App.module.css"
import { SideNavigation } from './components/SideNavigation'
import { Navbar } from './components/Navbar'
import { MainPage } from "./components/MainPage"

function App() {

  return (
    <div className={styles.page}>
      <SideNavigation></SideNavigation>
      <div className={styles.navmain}>
      <Navbar></Navbar>
      <MainPage></MainPage>
      </div>
    </div>
  )
}

export default App
