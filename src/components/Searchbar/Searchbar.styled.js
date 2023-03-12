import styled from 'styled-components';


export const Header = styled.header`
min-height: 64px;
background-color: #2196f3;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`

export const Input = styled.input`
  display: inline-block;
  width: 600px;
  height: 28px;
  font: inherit;
  font-size: 15px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`

export const SearchButton = styled.button`
 display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: white;
`