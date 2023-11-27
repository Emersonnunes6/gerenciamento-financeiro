import { useForm } from "react-hook-form"
import Header from "../../components/Header"
import * as C from '../../components/Login/Form/styles'
import axiosInstance from "../../services/axios-instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingComponent from "../../components/Loading";
import { useState } from 'react';

interface IFormInput {
  email: string;
  password: string;
}

interface AuthProps {
  setIsAuthenticated: any;
}

function Login({ setIsAuthenticated }: AuthProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const navigate = useNavigate();

  const onSubmit = (data: IFormInput) => {
    setIsLoading(!isLoading)
    axiosInstance.post('auth/login', data)
      .then((res) => {
        setIsAuthenticated(res.data.token);
        localStorage.setItem('token', res.data.token);
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
        navigate('/');
        setIsLoading(false);
      }).catch((err) => {
        toast.error(err.response.data.msg);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      <Header />
      <C.ContainerForm>
        <C.ContainerLogin>
          <C.Header>
            <C.Title>Login</C.Title>
          </C.Header>
          <C.Form onSubmit={handleSubmit(onSubmit)}>
            <C.Input {...register('email')} placeholder='E-mail' type='email' />
            <C.Input {...register('password')} placeholder='Senha' type='password' />
            <C.Button type="submit">ENTRAR</C.Button>
          </C.Form>
          <C.NewUser>Ainda não é usuário?</C.NewUser>
          <C.Button onClick={() => navigate('/register')} $backgroundcolor='orange' color='black' $width='150px' $margintop='5px'>REGISTRAR-SE</C.Button>
        </C.ContainerLogin>
      </C.ContainerForm>
    </>
  )
}

export default Login