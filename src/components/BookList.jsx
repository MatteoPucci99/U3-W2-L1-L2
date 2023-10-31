
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react'

const BookList = (props)=> {
  // state = {
  //   searchQuery: '',
  //   selected: false,
  //   bookId: '',
  // }

  const [searchQuery, setSearchQuery] = useState('')
  const [selected, setSelected] = useState(false)
  const [bookId, setBookId] = useState('')

  const handleClickSingleBook = (newSelected,bookId)=>{
    // this.setState({
    //   selected: newSelected,
    //   bookId: bookId,
    // })
    setSelected(
      newSelected
    )
    setBookId(bookId)

  }
  
    return (
      <>
      
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Container className='d-flex' fluid>

        <Row className="g-2 mt-3">
          <Col xs={10} md={8} lg={6}>
            <Row>
            {props.books
            .filter((b) =>
              b.title.toLowerCase().includes(searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} lg={3} key={b.asin} className=''>
                <SingleBook book={b} handleClickSingleBook={handleClickSingleBook} selectedState={selected} isSelected={bookId === b.asin}/>
              </Col>
              
            ))}
            </Row>
          </Col>
     
            
          <Col>
          
            {selected && <CommentArea bookId={bookId}/>}
            
          </Col>
        </Row>
        
        
        </Container>
        </>
    )
  
}

export default BookList
