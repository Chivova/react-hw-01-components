import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline, key }) {
  return (
    <li key={key} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="аватар" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  key: PropTypes.string.isRequired,
};
