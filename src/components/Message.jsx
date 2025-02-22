import {Container} from './Container.jsx'
import styles from "./SideNavigation.module.css";
export const Message = () => {

    return (
        <Container>
        <h2 className={styles.message}>No Post Available</h2>
        </Container>
    )
}