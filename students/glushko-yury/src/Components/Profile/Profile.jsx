import style from './Profile.module.scss';

const Profile = ({ userName }) => {
  return <div className={style.profile}>name: {userName}</div>;
};

export default Profile;
