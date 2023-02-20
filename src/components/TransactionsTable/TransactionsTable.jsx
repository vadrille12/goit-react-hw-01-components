import PropTypes from 'prop-types';
import { Table, TableHead, TableItem } from './TransactionsTable.styled';

const TransactionsTable = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHead>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableItem key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableItem>
        ))}
      </tbody>
    </Table>
  );
};

TransactionsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionsTable;
