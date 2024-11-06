import Header from '../../components/Header/index'
// import Footer from '../../components/Footer'
import Container from '../../components/Container/index'
import { Outlet } from 'react-router-dom'

function Base() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            {/* <Footer /> */}
        </main>
    )
}

export default Base