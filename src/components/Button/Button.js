import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ title, type = 'button', onBtnClick }) {
  return (
    <button className={styles.button} type={type} onClick={onBtnClick}>
      {title}
    </button>
  );
}

Button.propeTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onBtnClick: PropTypes.func,
};
