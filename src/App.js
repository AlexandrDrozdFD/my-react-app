
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const dialogData = [
    {id: 1, name:'Dim'},
    {id: 2, name:'Andrey'},
    {id: 3, name:'Sveta'},
    {id: 4, name:'Sasha'},
    {id: 5, name:'Victor'},
    {id: 6, name:'Valera'}
  ];
  
  const messageData = [
    {id: 1, message:'hello !!!'},
    {id: 1, message:'Lord Fox@!!!!'}
  
  ]

  const postData = [
    { id: 1, message: 'Hi, how are you', counts: 4 },
    { id: 2, message: 'Boolean ||', counts: 42 },
    { id: 3, message: 'wwwwwoooooooofffff', counts: 2 }
  ]
  
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          
          <Route path='/profile' render={() => <Profile postData={postData}/>} />
          <Route path='/dialogs' render={() => <Dialogs dialog={dialogData} message={messageData} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        
        </div>
      </div>
    </BrowserRouter>
  );
}  

export default App;
