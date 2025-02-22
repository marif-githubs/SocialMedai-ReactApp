import styles from "./SideNavigation.module.css";


export const Container = ({ children }) => {
    return (
        <div className= {styles.container}>
            {children}
        </div>
    )
}