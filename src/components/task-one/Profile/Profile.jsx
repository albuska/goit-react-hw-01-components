import { ProfileStatsList } from 'components/task-one/ProfileStatsList/ProfileStatsList';
import PropTypes from 'prop-types';
import {
  Container,
  Image,
  ProfileBox,
  ProfileName,
  ProfileText,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <ProfileBox>
        <Image src={avatar} alt="User avatar" />

        <ProfileName>{username}</ProfileName>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileBox>

      <ProfileStatsList stats={stats} />
    </Container>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
