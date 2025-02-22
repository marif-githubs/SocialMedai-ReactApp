import { createContext, useEffect, useReducer } from "react";

export const PostList = createContext({
    postlist : [],
    addpost : () => {},
    deletepost : () => {},
})

const PostListReducer = (currState , action) =>{
    let newList = currState
    if(action.type === 'ADD_POST'){
        newList = [action.payload, ...newList]
    }else if(action.type === "DELETE_POST"){
        newList = newList.filter((post) => post.id !== action.payload.id)
    }else{
        newList = action.payload.posts
    }
    return newList
}



const PostListProvider = ({ children }) => {
    const list = []

    const [postList , dispactPostList] = useReducer(
        PostListReducer,
        []
    )

    const initialPost = (posts) => {
        dispactPostList({
            type: 'ADD_INITIAL_POSTS',
            payload:{
                posts,
            },
        })    
    }
    
    const addPost = (userId, postTitle, postBody, tags) => {
        dispactPostList({
            type : 'ADD_POST',
            payload : {
                id: Math.ceil(Math.random()*1000000),
                title: postTitle,
                body: postBody,
                reactions: Math.ceil(Math.random()*100),
                userId : userId,
                tags: tags
            } 
        })
    }

    const deletePost = (id) => {
        dispactPostList({
            type: "DELETE_POST",
            payload: {
                id
            }
        })  
    }

    return (
        <PostList.Provider value={{ postList, addPost, deletePost, initialPost }}>
          {children}
        </PostList.Provider>
    );
} 

export default PostListProvider    
// {
//     id: "8",
//     title: "Lorem, ipsum dolor.",
//     body: "Lorem, ipsum dolor sit am\ rem nat exercitationem. Amt fugit? Molestias .",
//     reactions: 15,
//     userId: "user-13",
//     tags: ["Graduating", "Unbelievable"],
// },
// {
//     id: "3",
//     title: "Lorem, ipsum dolor.",
//     body: "Lorem, ipsum dolor sit am\ rem nat exercitationem. Amt fugit? Molestias .",
//     reactions: 15,
//     userId: "user-13",
//     tags: ["Graduating", "Unbelievable"],
// }