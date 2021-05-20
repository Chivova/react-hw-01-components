import StatisticsList from './StatisticsList';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <StatisticsList
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultTypes = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
