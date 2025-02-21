import styles from "./SideNavigation.module.css";

export const SideNavigation = () => {
    
    return ( <div className={styles.sidenavigation}>
        <h2>Sidebar</h2>
        <ul>
            <li className={styles.active}>Home</li>
            <li>Post</li>
        </ul>
    </div>  
    )
}      