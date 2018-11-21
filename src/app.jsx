import React, { Component } from 'react';
import ApolloCLient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';


const client = new ApolloCLient({
    uri: 'https://api-apeast.graphcms.com/v1/cjoli4udf1o2r01g5j2wdam9s/master'
    
});

const POSTS_QUERY = gql `
    {
        posts {
            id
            title
            body
    }
}
`;

// client.query({
//     query: POSTS_QUERY
// }).then(res => console.log(res));

class App extends Component {
    

    render(){
        return(
            <ApolloProvider client={client}>
            <div>
                <div>
                  <Query query={POSTS_QUERY}>
                        {({loading, data}) =>{
                            if(loading) return 'Loading...';
                            const { posts } = data;
                           return posts.map(post => <h1>{post.title}</h1>)
                        }}
                   </Query> 
                </div>
            </div>
            </ApolloProvider>
        )
    }
}



export default App;
