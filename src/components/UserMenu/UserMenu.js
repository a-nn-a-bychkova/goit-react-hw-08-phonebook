import React from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
    </div>
  );
}
