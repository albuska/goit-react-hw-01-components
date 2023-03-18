import PropTypes from 'prop-types';
import { List, Item, ItemTitle, ItemStats } from './ProfileStatsList.styled';

export const ProfileStatsList = ({ stats }) => {
  return (
    <List>
      <Item>
        <ItemTitle>Followers</ItemTitle>
        <ItemStats>{stats.followers}</ItemStats>
      </Item>
      <Item>
        <ItemTitle>Views</ItemTitle>
        <ItemStats>{stats.views}</ItemStats>
      </Item>
      <Item>
        <ItemTitle>Likes</ItemTitle>
        <ItemStats>{stats.likes}</ItemStats>
      </Item>
    </List>
  );
};

ProfileStatsList.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
