import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Components/Post';
import Posts from './Components/Posts';
import NewPost from './Components/NewPost';
import './App.css';

const defaultState = {
    isEditMode: false
};

const client = new ApolloClient({
    uri: '',
    clientState: {
        defaults: defaultState,
        resolvers: {}
    }
})

class App extends Component{
    render(){
        return(
            <ApolloProvider client={client}>
                <Router>
                <div className="App">
                <header className="App-header">
                    <Link to='/'>
                      <h1 className="App-title">Graphql is Great</h1>
                    </Link>            
                 </header>
                 <main>         
                      <Switch>
                          <Route exact path="/" component={Posts} />
                          <Route exact path="/post/new" component={NewPost} />
                          <Route path="/post/:id" component={Post} />
                        </Switch>
                 </main>
                
                    </div>    
               </Router>
            </ApolloProvider>
           
        )
    }
}

export default App;