import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 20px auto 0 auto;
  width: 700px;
  border-collapse: collapse;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  overflow: hidden;
`;

export const TableHead = styled.tr`
  height: 40px;
  background-color: #00bcd5;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;

  th {
    width: calc(100% / 3);

    :not(:last-child) {
      border-right: 1px solid #ccc;
    }
  }
`;

export const TableItem = styled.tr`
  height: 40px;
  text-align: center;
  color: #888d93;

  /* text-align: center; */
  text-transform: capitalize;

  &:nth-of-type(even) {
    background-color: #ecf1f4;
  }

  td {
    :not(:last-child) {
      border-right: 1px solid #ccc;
    }
  }
`;
