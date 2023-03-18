import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor';

export const Section = styled.section`
  margin: 100px auto;
  background-color: #ffffff;
  width: 600px;
  box-shadow: 10px 10px 5px 0px rgba(163, 150, 150, 0.75);
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
`;

export const Item = styled.li`
  padding: 20px 0;
  width: calc(100% / 5);
  background-color: ${getRandomHexColor};
`;

export const Title = styled.h2`
  padding-top: 40px;
  font-size: 20px;
  text-transform: uppercase;
  color: #808080;
`;

export const SpanLabel = styled.span`
  display: block;
  color: #ffffff;
  font-size: 20px;
`;

export const SpanPercentage = styled.span`
  margin-top: 10px;
  color: #ffffff;
  font-size: 30px;
`;
