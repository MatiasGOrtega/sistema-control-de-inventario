import styled from 'styled-components';
import { GiPadlock } from 'react-icons/gi';

function FooterLogin() {
  return (
    <Container>
      <section className="lock">
        <GiPadlock />
        <span>
          Esta es una página fue creada con fines de auto-aprendizaje.
          <br />Por lo tanto, no se debe utilizar para fines comerciales.
          <br />Gracias por su comprensión.
        </span>
      </section>
      <section className="derechos">
        <span>Papulo Inventario S.A - RUC: 20100012345</span>
        <div className="separador"></div>
        <span>Todos los derechos reservados</span>
        <div className="separador"></div>
        <span>© 2025</span>
      </section>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12.2px;
  color: #91a4b7;
  gap:5px;

  .lock {
    border-bottom: 1px solid rgba(145, 164, 183,0.3);
    gap:5px;
    display:flex;
    align-items:center;
  }

  .derechos {
    display: flex;
    justify-content: space-between;
   .separador{
    width:1px;
    background-color:rgba(145, 164, 183,0.3);
    margin-top:4px;
    height:80%;
    align-items:center;
    display:flex;
   }
    span{
      margin-top:5px;
    }
  }
`;

export default FooterLogin