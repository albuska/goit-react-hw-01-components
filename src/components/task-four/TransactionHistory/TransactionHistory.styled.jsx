import styled from 'styled-components';

export const Section = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
`;
export const Table = styled.table`
  box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  width: 100%;
  margin: 0 auto;
  background-color: #faebd7;
`;

export const TBody = styled.tbody`
  :nth-child(odd) {
    background-color: #deb887;
  }
`;

export const THead = styled.thead`
  background-color: #8b4513;
  color: #ffffff;
`;

export const Td = styled.td`
  padding: 20px;
  border: 3px solid white;
`;

export const Th = styled.th`
  text-transform: uppercase;
  padding: 20px;
  border: 3px solid white;
`;
