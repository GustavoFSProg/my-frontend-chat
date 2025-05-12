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

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        APP PAGE
      </Container>
    </>
  )
}

export default App
