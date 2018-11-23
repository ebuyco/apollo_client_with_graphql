import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';

const client = new ApolloClient({
    uri: ''
})

class App extends Component{
    render(){
        return(
            <ApolloProvider client={client}>
                <Router>
                    <div>
                        <Switch>
                          <Route exact path="/" component={Posts} />
                          <Route path="/post/:id" component={Post} />
                        </Switch>
                    </div>    
               </Router>
            </ApolloProvider>
           
        )
    }
}

export default App;