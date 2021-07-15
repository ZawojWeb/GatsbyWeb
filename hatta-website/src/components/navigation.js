import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
    display: flex;
    align-content: center;
    position: absolute;
    top: 2rem;
    left: 1rem;
    justify-content: flex-start;
    font-family: 'Montserrat';
`
const Logo = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 30px;
    a{
        text-decoration: none;
        color: inherit;
    }
    
`
const NavigationList = styled.ul`
    list-style: none;
    display: flex;
    li{
        font-weight: 600;
        font-size: 15px;
        margin-left: 32px;
        a{
            text-decoration: none;
            color: inherit;
        }
    }
`

function Navigation() {
    return (
        <NavigationWrapper>
            <Logo><Link to="/">HATTA</Link></Logo>
            <NavigationList>
                <li>
                   <Link to="/articles" >articles</Link>
                </li>
                <li>
                   <Link to="/about" >about</Link>
                </li>
                <li>
                   <Link to="/gallery" >gallery</Link>
                </li>
                <li>
                   <Link to="/contact" >contact</Link>
                </li>
            </NavigationList>
        </NavigationWrapper>
    )
}



export default Navigation
