import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5"
const Blog = ({blog,handelAddToBookMark, handelAddMarkReadingTime}) => {
    const{cover_img,title,author_img,reading_time,author,posted_date,hashtags}=blog
    return (
        <div className="mb-20">
            
            
           <img className="w-full mb-8 rounded-xl border-2 border-sky-500" src={cover_img} ></img>
           <div className="flex justify-between mt-2">
               <div className="flex">
                  <img className="w-12 " src={author_img} alt="" />
                  <div className="ml-6 ">
                    <h6 className="text-2xl">{author}</h6>
                    <p>{posted_date}</p>
                  </div>
               </div>
               <div>
                <span>{reading_time}  read</span>
                <button 
                onClick={()=>handelAddToBookMark(blog)}
                className="ml-4 text-2xl text-red-600"><IoBookmarksOutline></IoBookmarksOutline></button>
               </div>
           </div>
           <h1 className="text-4xl">{title}</h1>
           <p>
            {
                hashtags.map((hash ,idx)=> <span key={idx}><a  href="">#{hash}</a></span>)
            }
           </p>
          <button className="text-blue-600 underline"
           onClick={()=> handelAddMarkReadingTime(reading_time)}>
            mark as read
          </button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handelAddToBookMark:PropTypes.func.isRequired,
    handelAddMarkReadingTime:PropTypes.func.isRequired
}

export default Blog;