import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import api from './api'

const Container = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #c1f5cf;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`


const Input = styled.input `
  display: flex;
  width: 25rem;
  height:auto;
  background: #8de6a5;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;

`


const Button = styled.button `
  display: flex;
  width: 26.5rem;
  height:auto;
  background: #7dad8a;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 18px;
  cursor: pointer;
  transition: ease 1s;
  color: blue;

 &:hover{
  background: yellow;
  color: black;

  }

`

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function HandleLogin(e){
    e.preventDefault()
    try {

      const dados = {email, password}

      const login = await api.post('/api/auth/login', {email, password})

      console.log(`TOKEN: ${login.data.token}`)

      return alert("login sucesso!")

      
    } catch (error) {
      return alert(error)
      
    }
  }

  return (
    <>
      <Container>
      <h2>
          APP PAGE - LOGIN
        </h2>
        <br />
        <br />
        <form onSubmit={HandleLogin}>
        <Input type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}  placeholder='Email'/>
        <br />
        <Input 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        type="password"
        placeholder='Senha'/>
        
        <Button type="submit">
          LOGIN
        </Button>
        </form>

      </Container>
    </>
  )
}

export default App
