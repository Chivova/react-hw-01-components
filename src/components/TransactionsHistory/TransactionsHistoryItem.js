import PropTypes from 'prop-types';
import s from './TransactionsHistoryItem.module.css';

export default function TransactionsHistoryItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={s.tableData}>{type}</td>
      <td className={s.tableData}>{amount}</td>
      <td className={s.tableData}>{currency}</td>
    </tr>
  );
}

TransactionsHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
