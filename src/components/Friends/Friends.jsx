import { FriendsItem } from './FriendsItem';
import { Container } from './Friends.styled';

export const Friends = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </Container>
  );
};

export default Friends;
