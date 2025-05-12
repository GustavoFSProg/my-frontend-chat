import styled from 'styled-components'

const SidebarContainer = styled.div`
    display: flex;
    width: 300px;
    height:93%;
    background: #25744d;
    margin-top: 64px;

`

function Sidebar(){
    return (
        <>
         <SidebarContainer>
            <h1>
                SIDEBAR
            </h1>
         </SidebarContainer>
         <div>
            meio
         </div>
        </>
    )
}

export default Sidebar