import { useEffect } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import { useState } from 'react'

const CommentArea = (props)=>{
  // state = {
  //   comments: [],
  // }

  const [comments, setComments] = useState([])

  // componentDidMount = () => {
  //   // viene eseguito una volta sola, all'avvio del componente!
  //   // ora faremo la fetch per recuperare i commenti
  //   this.getComments()
  // }

  // componentDidUpdate = (prevProps, prevState)=>{
  //   if(prevProps.bookId !== this.props.bookId){
  //     this.getComments()
  //   }
  // }

  useEffect(()=>{
    getComments()
  },[props.bookId])



  const getComments = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          props.bookId,
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
        // this.setState({
        //   comments: arrayOfComments,
        // })
        setComments(arrayOfComments)
      } else {
        throw new Error('errore nel recupero dei commenti')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  
    return (
      <div>
        <div>
          <CommentsList reviews={comments} />
        </div>
        <div>
          <AddComment bookId={props.bookId} />
        </div>
      </div>
    )
  
}

export default CommentArea
