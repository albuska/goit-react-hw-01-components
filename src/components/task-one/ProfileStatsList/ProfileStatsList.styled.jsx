import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 0;
  margin-top: 40px;
  list-style: none;
`;

export const Item = styled.li`
  text-align: center;
  padding: 20px;
  min-width: calc(100% / 3);
  border: 1px solid #c0c0c0;
  background-color: #faf0e6;
`;

export const ItemTitle = styled.span`
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: #a9a9a9;
`;

export const ItemStats = styled.span`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-top: 5px;
`;
