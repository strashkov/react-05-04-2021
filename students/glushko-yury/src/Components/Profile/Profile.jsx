import PropTypes from 'prop-types';
import style from './Profile.module.scss';

const Profile = ({ userName }) => {
  return <div className={style.profile}>User name: {userName}</div>;
};

Profile.propTypes = {
  userName: PropTypes.string,
};

export default Profile;
