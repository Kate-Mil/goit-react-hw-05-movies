import PropTypes from 'prop-types';
import { StyledLink } from './GoBackBtn.styled';

export const GoBackBtn = ({ path }) => {
  return <StyledLink to={path}>Go back</StyledLink>;
};

GoBackBtn.propTypes = {
  path: PropTypes.object.isRequired,
};
