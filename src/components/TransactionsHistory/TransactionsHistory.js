import TransactionsHistoryList from './TransactionsHistoryItem';
import PropTypes from 'prop-types';
import s from './TransactionsHistory.module.css';

export default function TransactionsHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.tableHead}>Type</th>
          <th className={s.tableHead}>Amount</th>
          <th className={s.tableHead}>Currency</th>
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
