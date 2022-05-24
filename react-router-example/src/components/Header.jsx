import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function Header() {
    return(
        <Head>
            <Title>
                <h1>RoutesExample</h1>
            </Title>
            <ListItems>
                <Item><Link to="/" style={linkStyle}>Home</Link></Item>
                <Item><Link to="/about" style={linkStyle}>About</Link></Item>
                <Item><Link to="/servicos" style={linkStyle}>Servicos</Link></Item>
            </ListItems>
        </Head>
    )
}

const Head = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 320px;
    justify-content: space-between;
    background-color: #122A57;
    height: 100px;
    align-items: center;
    color: #fff;
`

const Title = styled.div`
    justify-content: center;
    padding: 1rem;
`

const ListItems = styled.ul`
    display: flex;
    max-width: 260px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`

const linkStyle = {
    textDecoration: "none",
    color: "#fff"
}