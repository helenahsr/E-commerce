import PropTypes from 'prop-types'

function Container({ children }) {
    return (
        <section>
            {children}
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.any
  }.isRequired  

export default Container