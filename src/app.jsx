import React, { Component } from 'react';
import ApolloCLient, { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloCLient({
    uri: ''
    
});



class App extends Component {

    render(){
        return(
            <ApolloProvider client={client}>
            <div>
                <div>
                   
                </div>
            </div>
            </ApolloProvider>
        )
    }
}



export default App;
