import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  console.log('App props: ', props);
  const { postData, newPostText} = props.state.profilePage;
  const { dialogData, messageData } = props.state.dialogsPage;
  const { addPostMessage, updateNewPost  } = props;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                postData={postData}
                addPostMessage={addPostMessage}
                newPostText={newPostText}
                updateNewPost={updateNewPost}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs dialog={dialogData} message={messageData} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
