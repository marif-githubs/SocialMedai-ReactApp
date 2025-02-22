import { Post } from "./Post";
import styles from "./SideNavigation.module.css";

export const SideNavigation = ({tab ,onTabChange}) => {
    
    return ( <div className={styles.sidenavigation}>
        <h2 className={styles.sidehead}>Sidebar</h2>
        <ul>
            <li className={`${tab === 'Home' && styles.active}`} onClick={() => onTabChange('Home')}>Home</li>
            <li className={`${tab === 'Post' && styles.active}`} onClick={() => onTabChange('Post')}>Post</li>
        </ul>
    </div>  
    )
}      