import styled from 'styled-components'
import Navbar from '../components/NavBar/Navbar'

const Container = styled.div`
    display: flex;
    width: 100vw;
    height:100vh;
    background: lightgray;

`

function Home(){
    return (
        <>
         <Container>
          <Navbar />
         </Container>
        </>
    )
}

export default Home