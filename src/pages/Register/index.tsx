import Header from "../../components/Header"
import * as C from '../../components/Login/Form/styles'
import { useForm } from "react-hook-form"
import axiosInstance from "../../services/axios-instance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../components/Loading";
import { useState } from 'react';

interface IFormInput {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const navigate = useNavigate()

    const onSubmit = (data: IFormInput) => {
        setIsLoading(!isLoading);
        axiosInstance.post('auth/register', data)
            .then((res: any) => {
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
                navigate('/login');
                setIsLoading(false);
            }).catch((err) => {
                toast.error(err.response.data.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setIsLoading(false);
            });
    };

    return (
        <>
            {isLoading && <LoadingComponent />}
            <Header />
            <C.ContainerForm $height="60vh">
                <C.ContainerLogin>
                    <C.Header>
                        <C.Title>Registrar</C.Title>
                    </C.Header>
                    <C.Form onSubmit={handleSubmit(onSubmit)}>
                        <C.Input {...register('email')} placeholder='E-mail' type='email' />
                        <C.Input {...register('username')} placeholder='Usuário' />
                        <C.Input {...register('password')} placeholder='Senha' type='password' />
                        <C.Input {...register('confirmPassword')} placeholder='Confirmar senha' type='password' />
                        <C.Button type="submit" $width='150px'>CONFIRMAR</C.Button>
                        <C.Button onClick={() => navigate('/login')} $backgroundcolor="white" color="black" $width='150px'>VOLTAR</C.Button>
                    </C.Form>
                </C.ContainerLogin>
            </C.ContainerForm>
        </>
    )
}

export default Register