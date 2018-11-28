import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UpdatePost from './UpdatePost';


export default class Post extends Component{
    render(){
        const { match } = this.props;
        return(
          <Query
           query={POST_QUERY}
           variables={{id: match.params.id}}>
             {({data, loading}) => {
                 if ( loading ) return 'loading...';
                 const { post } = data;
                 return (
                     <div>
                     <section>
                         <h1>{post.title}</h1>
                     </section>
                     <section>
                         <h1>Edit Post</h1>
                         <UpdatePost post={post}/>
                     </section>
                     </div>
                                  
                 )
             }}
          </Query>
        );
    }
}

const POST_QUERY = gql `
    query post ($id: ID!) {
        post( where: { id: $id }){
        id
        title
        body
        }
    }

`;