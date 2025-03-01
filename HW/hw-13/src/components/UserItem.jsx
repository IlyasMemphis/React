import styles from '../styles/UserItem.module.css';

const UserItem = ({ user }) => {
  return <div className={styles.user}>{user.name}</div>;
};

export default UserItem;
