import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const GoBackBtn = ({ path }) => {
  return <Link to={path}>go back</Link>;
};

GoBackBtn.propTypes = {
  path: PropTypes.object.isRequired,
};
