import styles from "./App.module.css"
import { SideNavigation } from './components/SideNavigation'
import { Navbar } from './components/Navbar'
import { MainPage } from "./components/MainPage"
import { useState } from 'react'

function App() {
  const [Tab, setTab] = useState("Home")

  return (
    <div className={styles.page}>
      <SideNavigation  tab= {Tab} onTabChange= {setTab}  ></SideNavigation>
      <div className={styles.navmain}>
      <Navbar></Navbar>
      <MainPage tab= {Tab} ></MainPage>
      </div>
    </div>
  )
}

export default App
