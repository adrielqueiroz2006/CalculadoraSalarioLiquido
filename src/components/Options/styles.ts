import styled from "styled-components"

export const Container = styled.div`
  width: 58.7rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Wrapper = styled.form`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const OptionsContainer = styled.div`
  width: 28rem;
  height: 6.35rem;

  border-radius: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  margin-bottom: 1.72rem;

  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.1), -5px -5px 3px 2px rgba(255, 255, 255, 0.868);
`
//

export const InputTitle = styled.p`
  color: #9aa1ab;
  font-size: 1.5rem;
  font-weight: bold;

  margin: 0 0 1rem 1rem;
`

export const InputGroup = styled.div`
  height: 4.9rem;
  width: 28rem;

  border: none;
  border-radius: 1rem;

  padding: 1rem 1.5rem;
  margin-bottom: 1.72rem;

  display: flex;
  align-items: center;

  box-shadow: inset 3px 3px 3px 2px rgba(0, 0, 0, 0.1),
    inset -5px -5px 3px 2px rgba(255, 255, 255, 0.868);
`

export const Real = styled.p`
  color: #9aa1ab;

  font-weight: bold;
  font-size: 1.92rem;
  margin: 0;
`

export const InputSalario = styled.input`
  width: 23.85rem;
  height: 2.9rem;

  font-size: 1.92rem;
  font-weight: bold;

  border: none;

  padding: 1px 2px;
  margin-top: 0.2rem;

  color: #9aa1ab;
  caret-color: #c9ccd2;

  &:focus {
    border-color: transparent;
    outline: none;
  }
  &::placeholder {
    color: #c9ccd2;
  }
`

export const Valor = styled.p`
  width: 23.85rem;
  height: 2.9rem;

  font-size: 1.92rem;
  font-weight: bold;

  text-align: left;

  padding: 1px 2px;
  margin-top: 0.1rem;

  color: #9aa1ab;
`

export const Separator = styled.div`
  height: 7.9rem;
  margin-bottom: 1.75rem;
`

export const Button = styled.button`
  height: 5.7rem;
  width: 28rem;

  color: #fff;
  font-size: larger;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;

  border: none;
  border-radius: 1rem;

  padding: 1.5rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background: linear-gradient(to right, #9ae0a2, #48c9be);

  &:focus {
    outline: transparent;
  }
`
