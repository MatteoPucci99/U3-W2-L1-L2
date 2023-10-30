import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    commentObject: {
      comment: '',
      rate: '1',
      elementId: this.props.bookId,
    },
  }

  sendNewReview = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.commentObject),
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTYyZmY2ZTNkZDAwMTQ5NWU0M2EiLCJpYXQiOjE2OTgzNDI0NDQsImV4cCI6MTY5OTU1MjA0NH0.sXEBMyMJoCYTQiBh4uMmQhuL8gXFjjdb0RP-_NToh-4",
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.ok) {
        // il commento è stato inviato!
        alert('commento salvato!')
      } else {
        throw new Error('errore nel salvataggio del commento')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  render() {
    return (
      <Form onSubmit={this.sendNewReview}>
        <Form.Group className="mb-1 mt-4">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            value={this.state.commentObject.comment}
            onChange={(e) => {
              this.setState({
                commentObject: {
                  ...this.state.commentObject,
                  comment: e.target.value,
                },
              })
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            aria-label="comment rating"
            value={this.state.commentObject.rate}
            onChange={(e) => {
              this.setState({
                commentObject: {
                  ...this.state.commentObject,
                  rate: e.target.value,
                },
              })
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    )
  }
}

export default AddComment
