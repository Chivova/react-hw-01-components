import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.png';
import s from './FriendListItem.module.css';

export default function FriendListItem({
  avatar = defaultAvatar,
  name,
  status,
}) {
  return (
    <li className={s.item}>
      <span className={status ? s.status : s.offline}>{status}</span>
      <img className={s.avatar} src={avatar} alt="аватар" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
