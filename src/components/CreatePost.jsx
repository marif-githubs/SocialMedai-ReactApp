import { useContext, useRef } from "react";
import { Container } from "./Container";
import styles from "./CreatePost.module.css";
import { PostList } from "../store/functions";


export const CreatePost = () => {
    const { addPost } = useContext(PostList)
    
    
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        tagsElement.current.value = "";

        addPost(userId, postTitle, postBody, tags);
    }

    return (
        <Container>
            <h2 className={styles.message}>Create your Post</h2>
        <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="userNamr">User Name</label>
            <input type="text" name="userName" id="name" placeholder="User Name" ref={userIdElement}/>

            <label htmlFor="title">Post Title</label>
            <input type="text" name="title" id="title" placeholder="Enter Post Title" ref={postTitleElement}/>

            <label htmlFor="desc">Post Content</label>
            <input type="textarea" name="desc" id="desc" placeholder="Enter your post content here..." ref={postBodyElement}/>

            <label htmlFor="tags">Tags</label>
            <input type="text" name="tags" id="tags" placeholder="Enter related tags here" ref={tagsElement}/>

            <button>Post</button>
        </form>
        </Container>
    )
}