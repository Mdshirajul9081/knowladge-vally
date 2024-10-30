
import PropTypes from 'prop-types'

const BookMark = ({bookmark})=> {
    const{title}=bookmark;
  return (
    <div className='bg-slate-700 p-4 m-4 rounded-lg'>
        
        <h2 className='text-xl'> bookmark blog:{title}</h2>
    </div>
  )
}

BookMark.propTypes = {
    bookmark:PropTypes.object,
    
}

export default BookMark