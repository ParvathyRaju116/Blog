import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
import { db, auth } from '../firebase-confiq';
import { useNavigate } from 'react-router-dom';






function CreatePost({ isAuth }) {

  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState("")
  const navigate = useNavigate()

  const postsCollectionRef = collection(db, "posts")
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
    navigate('/post')
  }

  

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")

    }

  }, [])

  return (
    <div className='createPostPage' style={{height:'600px'}}>
      <div className='cpContainer text-center'>
        <h1>Create a Post</h1>
        <Container className=''>

          <Row className='mb-3'>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Control
                className='w-100 mt-4'
                required
                type="text"
                placeholder="Title..."
                onChange={(e) => { setTitle(e.target.value) }}
              />
             

              <textarea
                name="" id=""
                placeholder='Post'
                className='mt-3 w-100 form-control'
                onChange={(e) => { setPostText(e.target.value) }}
              ></textarea>
              <Button className='m-5' onClick={createPost}>Submit</Button>

            </Form.Group>
          </Row>

        </Container>
      </div>
    </div>
  )
}

export default CreatePost


