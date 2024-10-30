import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handelAddToBookMark, handelAddMarkReadingTime}) => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2>blogs:{blogs.length}</h2>
            {
                blogs.map(blog=><Blog key={blog.id}
                    handelAddToBookMark={handelAddToBookMark}
                    handelAddMarkReadingTime={ handelAddMarkReadingTime}
                    blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    
    handelAddToBookMark:PropTypes.func.isRequired,
    handelAddMarkReadingTime:PropTypes.func
}


export default Blogs;