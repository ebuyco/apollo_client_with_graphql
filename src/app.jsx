import React, { Component } from 'react';
import ApolloCLient, { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloCLient({
    uri: 'https://api-apeast.graphcms.com/v1/cjoli4udf1o2r01g5j2wdam9s/master'
    
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
