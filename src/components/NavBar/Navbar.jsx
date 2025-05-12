import styled from 'styled-components'

const NavBarContainer = styled.div`
    display: flex;
    width: 100vw;
    height:4rem;
    background: orange;

`

function Navbar(){
    return (
        <>
         <NavBarContainer>
            <h1>
                NAVBAR
            </h1>
         </NavBarContainer>
        </>
    )
}

export default Navbar