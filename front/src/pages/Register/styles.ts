import styled from "styled-components";

export const HeaderLogin = styled.header`
  position: fixed;
  width: 100vw;
  background-color: #fff;
  padding: 10px;

  img {
    width: 200px;
    height: 100%;
    justify-content: center;
    display: flex;
  }
`;

export const ContainerLogin = styled.main`
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;
  img {
    width: 70%;
    height: 100vh;
  }
  @media (max-width: 768px) {
    img {
      width: 0px;
      height: 0px;
    }
    width: 100vw;
    height: 100vh;
  }
`;

export const DivLogincontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b97746;

  @media (max-width: 600px) {
  }
`;
export const DivLogin = styled.div`
  padding: 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #fff;
  opacity: 0.9;

  h1 {
    color: #000;
  }
  p {
    color: #000;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 15px;

  label {
    color: #000;
  }
  input {
    color: black;
    height: 35px;
    border-radius: 4px;
    border: 1px solid #616161bd;
    padding-left: 10px;
  }

  p {
    color: #000;
    text-align: center;
  }
  span {
    color: #000;
  }
`;

export const Btnbrown = styled.button`
  background-color: #b97746;
  color: white;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #b97746;
  font-size: 1.8rem;
`;
export const Btnwhite = styled.button`
  background-color: white;
  color: black;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #b97746;
  font-size: 1.8rem;
  a {
    width: 100%;
    text-decoration: none;
    color: #b97746;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
  }
`;
