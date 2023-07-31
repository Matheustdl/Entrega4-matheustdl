import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import {
  Btnbrown,
  Btnwhite,
  ContainerLogin,
  DivLogin,
  DivLogincontainer,
  FormLogin,
  HeaderLogin,
} from "./styles";
import BackGround from "../../assets/BackGround.jpg";
import Logo from "../../assets/Logo.jpg";

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  const { userLogin } = useAuth();
  return (
    <>
      <HeaderLogin>
        <img src={Logo} alt="" />
      </HeaderLogin>
      <ContainerLogin>
        <img src={BackGround} alt="" />
        <DivLogincontainer>
          <DivLogin>
            <h1>Login</h1>

            <p>Preencha os campos para realizar login</p>

            <FormLogin onSubmit={handleSubmit(userLogin)}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email aqui"
                {...register("email")}
              />
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite seu email aqui"
                {...register("password")}
              />

              <Btnbrown type="submit">Entrar</Btnbrown>

              <p>ou</p>

              <Btnwhite>
                <Link to="/register">Cadastre-se</Link>
              </Btnwhite>
            </FormLogin>
          </DivLogin>
        </DivLogincontainer>
      </ContainerLogin>
    </>
  );
};
