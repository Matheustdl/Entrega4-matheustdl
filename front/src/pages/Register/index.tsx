import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import {
  Btnbrown,
  Btnwhite,
  ContainerLogin,
  DivLogin,
  DivLogincontainer,
  FormLogin,
  HeaderLogin,
} from "./styles";
import Logo from "../../assets/Logo.jpg";
import BackGround from "../../assets/BackGround.jpg";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });
  const { registerUser } = useAuth();
  return (
    <>
      <HeaderLogin>
        <img src={Logo} alt="" />
      </HeaderLogin>
      <ContainerLogin>
        <img src={BackGround} alt="" />
        <DivLogincontainer>
          <DivLogin>
            <h1>Cadastre-se</h1>

            <p>Preencha os campos para realizar o cadastro</p>

            <FormLogin onSubmit={handleSubmit(registerUser)}>
              <label htmlFor="name">Digite seu nome</label>
              <input
                type="name"
                id="name"
                placeholder="Seu nome completo"
                {...register("name")}
              />
              {errors.name && <span>{errors.name.message}</span>}
              <label htmlFor="email">Digite seu email</label>
              <input
                type="email"
                id="email"
                placeholder="Seu e-mail"
                {...register("email")}
              />
              {errors.email && <span>{errors.email.message}</span>}
              <label htmlFor="password">Digite seu senha</label>
              <input
                type="password"
                id="password"
                placeholder="Sua senha"
                {...register("password")}
              />
              {errors.password && <span>{errors.password.message}</span>}
              <label htmlFor="telephone">Digite seu telephone</label>
              <input
                type="telephone"
                id="telephone"
                placeholder="Seu telephone"
                {...register("phone")}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
              <Btnbrown type="submit">Cadastrar</Btnbrown>

              <p>ou</p>
            </FormLogin>
            <Btnwhite>
              <Link className="linkToRegister" to="/">
                Retornar
              </Link>
            </Btnwhite>
          </DivLogin>
        </DivLogincontainer>
      </ContainerLogin>
    </>
  );
};

export default Register;
