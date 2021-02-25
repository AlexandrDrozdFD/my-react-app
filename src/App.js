import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { UsersContainer } from './components/Users/UsersContainer';

const App = (props) => {
  console.log('App props: ', props);

  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
        <Route path="/users" component={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
