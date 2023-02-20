import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './Friends.styled';

export const FriendsItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Item key={id}>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};