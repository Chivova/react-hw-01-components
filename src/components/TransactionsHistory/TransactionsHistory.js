import TransactionsHistoryList from './TransactionsHistoryItem';
import PropTypes from 'prop-types';

export default function TransactionsHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionsHistoryList
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
