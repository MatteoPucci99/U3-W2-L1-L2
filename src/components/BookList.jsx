import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    selected: false,
    bookId: '',
  }

  handleClickSingleBook = (newSelected,bookId)=>{
    this.setState({
      selected: newSelected,
      bookId: bookId,
    })
  }
  
  render() {
    return (
      <>
      
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>

      <Container className='d-flex' fluid>

        <Row className="g-2 mt-3">
          <Col xs={10} md={8} lg={6}>
            <Row>
            {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} lg={3} key={b.asin} className=''>
                <SingleBook book={b} handleClickSingleBook={this.handleClickSingleBook} selectedState={this.state.selected} isSelected={this.state.bookId === b.asin}/>
              </Col>
              
            ))}
            </Row>
          </Col>
     
            
          <Col>
          
            {this.state.selected && <CommentArea bookId={this.state.bookId}/>}
            
          </Col>
        </Row>
        
        
        </Container>
        </>
    )
  }
}

export default BookList
