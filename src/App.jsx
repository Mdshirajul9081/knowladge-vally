
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/blogs'
import BookMarks from './component/bookmarks/BookMarks'
import Header from './component/Header/Header'

function App() {
 const [bookmarks,setBookMarks]=useState([])
 const[readingTime,setReadingTime]=useState(0)

 const handelAddToBookMark=blog=>{
  const newBookMarks=[...bookmarks,blog]
  setBookMarks(newBookMarks)
 }
 const handelAddMarkReadingTime=time=>{
 const newReadingTime= readingTime + parseInt(time); 
   setReadingTime(newReadingTime)
 }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handelAddToBookMark={handelAddToBookMark}
         handelAddMarkReadingTime={handelAddMarkReadingTime}
         ></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
     
    </>
  )
}

export default App
