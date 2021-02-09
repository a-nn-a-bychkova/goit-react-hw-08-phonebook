import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar';
import PrivateRoute from '../components/UserMenu/PrivateRoute';
import PublicRoute from '../components/UserMenu/PublicRoute';
import ContactsView from '../views/ContactsView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import Container from './Container';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(phonebookOperations.fetchContacts());
  // }, [dispatch]);
  // const contacts = useSelector(phonebookSelectors.getContacts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <PrivateRoute path="/contacts">
          <ContactsView />
        </PrivateRoute>
        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute path="/login" restricted>
          <LoginView />
        </PublicRoute>
      </Switch>
    </Container>
  );
}

export default App;

// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   // const contacts = useSelector(authOperations.fetchCurrentUser);
//   const contacts = useSelector(phonebookSelectors.getContacts);

//   return (
//     <Container>
//       <AppBar />
//       <Switch>
//         <Route path="/contacts" component={ContactsView} />
//         <Route path="/register" component={RegisterView} />
//         <Route path="/login" component={LoginView} />
//       </Switch>
//     </Container>
//   );
// }
