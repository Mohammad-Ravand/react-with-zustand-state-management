import PropTypes from 'prop-types';
import Header from '../components/Header/Header'
const DefaultLayout = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}
DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
export default DefaultLayout
