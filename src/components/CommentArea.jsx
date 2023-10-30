import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  componentDidMount = () => {
    // viene eseguito una volta sola, all'avvio del componente!
    // ora faremo la fetch per recuperare i commenti
    this.getComments()
  }

  componentDidUpdate = (prevProps, prevState)=>{
    if(prevProps.bookId !== this.props.bookId){
      this.getComments()
    }
  }

  getComments = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.bookId,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTYyZmY2ZTNkZDAwMTQ5NWU0M2EiLCJpYXQiOjE2OTgzNDI0NDQsImV4cCI6MTY5OTU1MjA0NH0.sXEBMyMJoCYTQiBh4uMmQhuL8gXFjjdb0RP-_NToh-4',
          },
        }
      )
      if (response.ok) {
        const arrayOfComments = await response.json()
        console.log(arrayOfComments)
        this.setState({
          comments: arrayOfComments,
        })
      } else {
        throw new Error('errore nel recupero dei commenti')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  render() {
    return (
      <div>
        <div>
          <CommentsList reviews={this.state.comments} />
        </div>
        <div>
          <AddComment bookId={this.props.bookId} />
        </div>
      </div>
    )
  }
}

export default CommentArea
