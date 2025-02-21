import styles from "./Post.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const Post = () => {
    return (
            <div className={styles.postcard}>
                <button className={styles.delete}><MdOutlineDeleteOutline /></button>
                <h3 className={styles.title}>This is title</h3>
                <p className={styles.desc}>i am making post card for my social media application   </p>
                <div className={styles.tagsdiv}>
                    <span className={styles.tag}>coding</span>
                </div>
                <div className={styles.reactiondiv}>
                    <p>may be no one will watch this</p>
                </div>
            </div>
    )
} 