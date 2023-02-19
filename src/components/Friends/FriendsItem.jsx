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
