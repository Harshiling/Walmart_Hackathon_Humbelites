import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
  font-family: 'Kiwi Maru', serif;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>Wallmart Hackathon</h1>
        </HeaderWrapper>
    )
}

export default Header;