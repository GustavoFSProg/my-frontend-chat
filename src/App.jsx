import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'

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

 &:hover{
  background: yellow;
  color: black;

  }

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        APP PAGE - LOGIN
        <br />
        <br />
        <form>
        <Input placeholder='Email'/>
        <br />
        <Input placeholder='Senha'/>
        
        <Button type="submit">
          Logan
        </Button>
        </form>

      </Container>
    </>
  )
}

export default App
