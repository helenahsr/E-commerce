import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
            <main class='flex justify-center items-center flex-col'>
                <form class='flex flex-col text-gray font-bold w-2/4'>
                    <label class='mt-4'>
                        E-mail <br />
                        <input type="text" class='border-gray rounded-xl font-normal w-full' />
                    </label>
                    <label class='mt-4'>
                        Senha <br />
                        <input type="password" class='border-gray rounded-xl font-normal w-full' />
                    </label>
                    <button class='bg-metal mt-4 rounded-xl py-2'>Entrar</button>
                </form>
                <span>Não tem uma conta? <Link class='text-purple' to='/register'>Cadastre-se.</Link></span>
            </main>
        </>
    )
}

export default Login