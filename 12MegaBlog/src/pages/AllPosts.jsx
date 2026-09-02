import React,{useState,useEffect} from "react";
import appwriteService from "../appwrite/config";
import { Container,PostCard } from "../components";

function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div classname ="w-full py-8">
            <Container>
                {posts.map((post) => (
                    <postCard key = {post.$id} post={post}/>
                ))}
            </Container>
        </div>
    )
}

export default AllPosts