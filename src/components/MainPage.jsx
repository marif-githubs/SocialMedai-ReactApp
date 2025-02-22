import { CreatePost } from './CreatePost.jsx'
import { Post } from './Post.jsx'
import  PostListProvider  from '../store/functions.jsx'
    

export const  MainPage = ({tab}) => {
    return (<>
            <PostListProvider>
                {(tab === 'Home') ? <Post/> : <CreatePost/> }
            </PostListProvider>

    </>
    )
}