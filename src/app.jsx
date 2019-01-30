import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Components/Post';
import Posts from './Components/Posts';
import NewPost from './Components/NewPost';
import Global from './UI/Elements';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Global />
          <header className='App-header'>
            <Link to='/'>
              <h1 className='App-title'>Graphql is Great</h1>
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path='/' component={Posts} />
              <Route exact path='/post/new' component={NewPost} />
              <Route path={'/post/:id'} component={Post} />
            </Switch>
          </main>

        </div>
      </Router>

    );
  }
}

export default App;
