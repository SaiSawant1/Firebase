import React from 'react'
import { useAuth } from './context/AuthContext'
import { Card, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

 const UpdateProfile = () => {
  const userNameRef=React.useRef()
  const emailRef=React.useRef()
  const passwordRef=React.useRef()
  const [updatePermission,setUpdatePermission]=React.useState(false)
  const { currentUser } = useAuth()
  


  const handleAccess = () => (setUpdatePermission(true))
  const handleSubmit=(e)=>{
    e.preventDefault();
  }


  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4"> Update Profile Profile</h2>
        <Form>
          <Form.Group id='UserName'>
            <Form.Label>UserName</Form.Label>
            <Form.Control type='text' ref={userNameRef} placeholder={currentUser.displayName? currentUser.displayName : 'no user names'} disabled={!updatePermission}/>
          </Form.Group>
          <Form.Group id='email'>
            <Form.Label>User Email</Form.Label>
            <Form.Control type='text' ref={emailRef}placeholder={currentUser.email} disabled={!updatePermission}/>
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>User Password</Form.Label>
            <Form.Control type='text' ref={passwordRef} placeholder='enter new password' disabled={!updatePermission}/>
          </Form.Group>
          <div>Do you want to update Profile? <Button onClick={handleAccess} className='btn btn-light bg-white border-none'>Yes</Button></div>
          <button onClick={handleSubmit} disabled={!updatePermission} className='btn btn-primary w-100'>update profile</button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default UpdateProfile
