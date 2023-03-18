import PropTypes from 'prop-types';
import {
    Image,
    Username,
    SpanIsOnline,
  } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <SpanIsOnline isOnline={isOnline}></SpanIsOnline>
      <Image src={avatar} alt="User avatar" width="48"/>
      <Username>{name}</Username>
    </>
  );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
  };