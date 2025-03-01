import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search users..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

const mapStateToProps = (state) => {
  console.log('Filter получает state:', state); // ✅ Должен показать Redux state
  return { filter: state.filter };
};

const mapDispatchToProps = { setFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
