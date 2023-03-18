import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 75px;
  height: auto;
  object-fit: contain;
  margin-left: 10px;
`;

export const Username = styled.p`
  margin-left: 10px;
  font-size: 30px;
  font-weight: 500;
`;

export const SpanIsOnline = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;