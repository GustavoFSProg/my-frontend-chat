import styled from 'styled-components'
import Meio from '../Meio/Meio'

const NavBarContainer = styled.div`
    display: flex;
    width: 100vw;
    height:4rem;
    background: orange;
    margin-left: -300px;

`

function Navbar(){
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
         <NavBarContainer>
            <h1>
                NAVBAR
            </h1>
         </NavBarContainer>
         {/* <div style={{background: 'yellow',
            marginLeft: '-48px',
            width: '103%', height: '100%'}}>
MEIO
         </div> */}
         <Meio />
        </div>
    )
}

export default Navbar