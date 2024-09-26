import PropTypes from 'prop-types'
const getMessage = () => 'Hola Mijo'

export const FirstApp = ( { title, subtitle = 'vamos' } ) => {

  if ( !title )
  throw new Error( 'prueba')
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p> { subtitle } </p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

// FirstApp.defaultProps = {
//   title: 'No hay titulo'
// }
// defaultProps Deprecated