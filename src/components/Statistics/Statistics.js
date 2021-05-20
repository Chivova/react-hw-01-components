import StatisticsList from './StatisticsList';
import PropTypes from 'prop-types';

export default function Statistics({ title, statistics }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <StatisticsList stats={statistics} />
    </section>
  );
}

Statistics.defaultTypes = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.shape),
};
