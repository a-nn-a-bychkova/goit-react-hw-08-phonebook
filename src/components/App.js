import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from './AppBar';
import ContactsView from '../views/ContactsView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import Container from './Container';
import { phonebookOperations, phonebookSelectors } from '../redux';
import { fetchContacts } from '../redux/phonebook-operations';
// import {authOperations} from '../redux/auth';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // const contacts = useSelector(authOperations.fetchCurrentUser);
  const contacts = useSelector(phonebookSelectors.getContacts);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/contacts" component={ContactsView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
      </Switch>
    </Container>
  );
}

export default App;
