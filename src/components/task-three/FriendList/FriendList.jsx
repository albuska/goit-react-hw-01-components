import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'; 
import {
  Section,
  List,
  Item,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendListItem friend={friend} />
        </Item>
      ))}
      </List>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
