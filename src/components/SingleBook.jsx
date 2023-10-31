
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'

const SingleBook = (props)=> {

  
    return (
      <>
        <Card
          onClick={() => props.handleClickSingleBook(!props.selectedState,props.book.asin)}
          style={{ border: props.isSelected && props.selectedState ? '3px solid red' : 'none' }}
          
        >
          <Card.Img variant="top" src={props.book.img} 
          style={{height:'400px'}}/>
          <Card.Body>
            <Card.Title style={{ color: 'black' }} className='text-truncate'>
              {props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea bookId={this.props.book.asin} />} */}
      </>
    )
  
}

export default SingleBook
