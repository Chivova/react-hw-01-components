import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.png';

export default function FriendListItem({
  avatar = defaultAvatar,
  name,
  status,
}) {
  return (
    <li className="item">
      <span className="status">{status}</span>
      <img className="avatar" src={avatar} alt="аватар" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
