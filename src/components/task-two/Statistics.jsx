import PropTypes from 'prop-types';
import {
  Section,
  List,
  Item,
  Title,
  SpanLabel,
  SpanPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ label, percentage, id }) => (
          <Item key={id}>
            <SpanLabel>{label}</SpanLabel>
            <SpanPercentage>{percentage}%</SpanPercentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};


