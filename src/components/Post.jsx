import styles from "./Post.module.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Message } from './Message.jsx'
import { useContext ,useEffect, useState } from "react";
import { PostList } from "../store/functions.jsx";
import { Loadings } from './Loading.jsx'
export const Post = () => {
    const { postList , deletePost, initialPost } = useContext(PostList)
    const [loading, setloading ] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        setloading(true)
        fetch('https://dummyjson.com/posts', {signal})
       .then(res => res.json())
       .then(obj => {initialPost(obj.posts)
       setloading(false)
    });
        return (() => {
            controller.abort()
        } )
    },[])
   
    return (
        <>
            { loading ? <Loadings/> :
            
            postList.length === 0  ? <Message/> :
            postList.map((post) => (
            <div className={styles.postcard} key={post.id}>

                <button className={styles.delete} onClick={() => deletePost(post.id)}><MdOutlineDeleteOutline /></button>

                <h3 className={styles.title}>{post.title}</h3>
                
                <p className={styles.desc}>{post.body}</p>
                
                <div className={styles.tagsdiv}>
                {post.tags.map((tag) => (<span className={styles.tag} key={tag}>{tag}</span>))}
                </div>
                
                
                <div className={styles.reactiondiv}>
                    {/* <p>This post got {post.reactions} reactions</p> */}
                </div>
            </div>
            ))}
            
        </>
    )
} 