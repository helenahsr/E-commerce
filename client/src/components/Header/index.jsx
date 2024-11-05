import userIcon from '../../assets/user.svg';
import cartIcon from '../../assets/shopping-cart.svg'

function Header() {
    return(
        <>
            <header class="flex justify-between items-center p-6 text-gray">
                <div class='text-xl italic font-bold'>E-COMMERCE</div>
                <div class="flex items-center">
                    <div class="flex items-center">
                        <span><img src={userIcon} class='w-6 mr-3' alt="Login Icon" /></span>
                        <span><a href="#">Login</a></span>
                    </div>
                    <div class='flex items-center'>
                        <span class='mx-6'>|</span>
                    </div>
                    <div class="flex items-center">
                        <span><img src={cartIcon} class='w-6 mr-3' alt="Cart Icon" /></span>
                        <span><a href="#">Cart</a></span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header