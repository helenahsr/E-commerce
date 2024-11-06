import Header from '../../components/Header/index';

function Register() {
    return (
        <>
            <main class='flex justify-center items-center flex-col'>
                <form class='flex flex-col text-gray font-bold w-2/4'>
                    <label class='mt-4'>
                        Nome <br />
                        <input type="text" class='border-gray rounded-xl font-normal w-full' />
                    </label>
                    <label class='mt-4'>
                        E-mail <br />
                        <input type="text" class='border-gray rounded-xl font-normal w-full' />
                    </label>
                    <label class='mt-4'>
                        Senha <br />
                        <input type="password" class='border-gray rounded-xl font-normal w-full' />
                    </label>
                    <label class='mt-4'>
                        Tipo usuário <br />
                        <label htmlFor="">
                            <span class='font-normal mr-1'>Cliente</span>
                            <input type="radio" />
                        </label>
                        <label htmlFor="">
                            <span class='font-normal ml-5 mr-1'>Admin</span>
                            <input type="radio" />
                        </label>
                    </label>
                    <button class='bg-metal mt-4 rounded-xl py-2'>Cadastrar</button>
                </form>
            </main>
        </>
    )
}

export default Register