import styled from 'styled-components';
import { Icon } from '../icons/Icon';

function ButtonSave({ handleSave, title, bgColor, icon, url }) {
  return (
    <Container type="submit" $bgcolor={bgColor}>
      <Icon>{icon}</Icon>
      <span className="btn" onClick={handleSave}>
        <a href={url} target="_blank">
          {title}
        </a>
      </span>
    </Container>
  )
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  gap: 10px;
  background-color:initial;
  z-index:2;

  .btn{
    background: ${(props) => props.$bgcolor};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;
    cursor: pointer;

    a{
      text-decoration:none;
      color: #000;
    }
      
    &:hover{
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }

    &:active{
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
  }
  
`;

export default ButtonSave