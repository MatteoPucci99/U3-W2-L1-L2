import { Component } from 'react'
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'

class SingleBook extends Component {

  render() {
    return (
      <>
        <Card
          onClick={() => this.props.handleClickSingleBook(!this.props.selectedState,this.props.book.asin)}
          style={{ border: this.props.isSelected && this.props.selectedState ? '3px solid red' : 'none' }}
          
        >
          <Card.Img variant="top" src={this.props.book.img} 
          style={{height:'400px'}}/>
          <Card.Body>
            <Card.Title style={{ color: 'black' }} className='text-truncate'>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea bookId={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
