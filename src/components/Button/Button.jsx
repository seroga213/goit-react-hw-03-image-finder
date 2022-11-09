import PropTypes from 'prop-types';
import {Button} from './Button.styled'

export const ButtonMore = ({ onShowMore }) => {
    return ( <Button type="button" onClick={onShowMore}>
              Load more
            </Button>
     
    );
  };
  
  ButtonMore.propTypes = {
    onShowMore: PropTypes.func.isRequired,
  };