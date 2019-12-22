import React, { useState } from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Upload as Uuu } from "../apollo/mutations/upload"
import File from "../apollo/mutations/files"

export let currentUser = null;

const Home = () => <p>Hi !</p>;
const Settings = () => <p>Settings</p>
const Upload = () => {
  return (
    <>
      <Uuu />
      <File />
    </>
  )
}
const LoginPage = () => {
  const [form, setForm] = useState({ pseudo: "", mail: "", password: "" });
  const [pseudo, setPseudo] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const LOGIN_MUTATION = gql`
    mutation login($pseudo: String!, $password: String!) {
      login(pseudo: $pseudo, password: $password) {
        token
        user {
          id
          pseudo
          avatar
        }
      }
    }
  `

  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      const { login: { token, user: { id, pseudo, avatar } } } = data;

      currentUser = {
        id: id,
        avatar: avatar,
        pseudo: pseudo,
        token: token,
      }
      localStorage.setItem("user", JSON.stringify(currentUser))
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "http://localhost:8000";
      console.log(currentUser)
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ pseudo, password: pass })
    login({ variables: { pseudo: pseudo, password: pass } })
  }

  const handleOnChangePseudo = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setPseudo(e.target.value)
  }
  const handleOnChangeMail = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setMail(e.target.value)
  }
  const handleOnChangePassword = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setPass(e.target.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input onChange={(e) => handleOnChangePseudo(e)} value={pseudo} type="text" placeholder="pseudo" />
      <input onChange={(e) => handleOnChangePassword(e)} value={pass} type="password" placeholder="pass" />
      <input onChange={(e) => handleOnChangeMail(e)} value={mail} type="mail" placeholder="mail" />
      <input type="submit" value="send" />
    </form>
  )
}

const Account = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/account/settings">Settings</Link>{" "}
        <Link to="/account/upload">Upload</Link>{" "}
        <Link to="/account/login">Login</Link>{" "}
        <a href="#logout" onClick={e => {
          e.preventDefault()
        }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/account" />
        <Settings path="/account/settings" />
        <Upload path="/account/upload" />
        <LoginPage path="/account/login" />
      </Router>
    </>
  )
}

export default Account