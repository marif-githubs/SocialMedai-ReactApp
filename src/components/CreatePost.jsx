import styles from "./CreatePost.module.css";

export const CreatePost = () => {
    return (
        <form className={styles.form}>
            <label htmlFor="userNamr">User Name</label>
            <input type="text" name="userName" id="name" placeholder="User Name"/>

            <label htmlFor="title">Post Title</label>
            <input type="text" name="title" id="title" placeholder="Enter Post Title" />

            <label htmlFor="desc">Post Content</label>
            <input type="textarea" name="desc" id="desc" placeholder="Enter your post content here..."/>

            <label htmlFor="tags">Tags</label>
            <input type="text" name="tags" id="tags" placeholder="Enter related tags here" />

            <button>Post</button>
        </form>
    )
}