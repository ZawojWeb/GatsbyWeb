import React from 'react'
import styled from 'styled-components';

const ContactPage = () => {
    return (
        <ContactPageStyled>
            <h1>Contact</h1>
            <p>While artists work from real to the abstract, architects must work from the abstract to the real. </p>
            <form action="">
               <div className="rowForm">
                    <label htmlFor="text">Name</label>
                    <input type="text" name="text" id="" /> 
               </div>
                <div className="rowForm">
                    <label htmlFor="emial">E-mail</label>
                    <input type="datetime-local" name="emial" id="" />
                </div>
                
                <div className="rowForm">
                    <label htmlFor="area">Message</label>
                    <input type="text" name="area" className="textArea" />
                </div>
                <Buttton type="submit">Wyślij</Buttton>
            </form>
        </ContactPageStyled>
    )
}

const Buttton  = styled.button`
  border: none;
  padding: 0.6rem;
  background-color: black;
  color: white;
`;
const ContactPageStyled = styled.section`

    form{
        margin-top: 100px;
        .rowForm{
            display: flex;
            flex-direction: column;
            justify-content: space-space-around;
            align-items: flex-start;
            min-height: 80px;
            input{
                margin: 1rem 0rem;
                background-color: transparent;
                border: 2px solid black;
            };
            .textArea{
                min-height: 135px;
                width: 190px;
            }
        }
    }
`;
export default ContactPage
