import PropTypes from "prop-types";
import BookMark from "../bookmark/BookMark";


const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className=" md:w-1/3 ml-4  bg-slate-300 rounded-xl mt-5">
            <div className="text-center text-3xl">
                <h2>Reading Total time:{readingTime}</h2>
            </div>
            <h2 className="text-3xl text-center mt-4 bg-slate-300 ">BooksMarks booked: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><BookMark key={bookmark.id}
                    readingTime={readingTime}
                    bookmark={bookmark}></BookMark>)
            }
        </div>
    );
}
BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
   readingTime:PropTypes.number
};

export default BookMarks;