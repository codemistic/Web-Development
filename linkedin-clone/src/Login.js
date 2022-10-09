import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(
      userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profilePic: userAuth.user.displayName,
        }))
      }
    )
    .then((error) => alert(error))

  }
  const register = () => {
    if (!name) {
      return alert('Please enter a full name!');
    }

    auth.createUserWithEmailAndPassword(email, password).then(
      (userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
            )
          })
      })
      .catch((error) => alert(error))
  }
  return (
    <div className='login'>
      <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png" alt="" />

      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Full name(required if registering)'
          type='text'
        />

        <input
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder='Profile pic URl (optional)'
          type="text"
        />

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
          type="email"
        />

        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          type="password"
        />

        <button
          type='submit'
          onClick={loginToApp}>
          Sign In
        </button>

      </form>
      <p>
        Not a member?
        {" "}
        <span
          className='login__register'
          onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login