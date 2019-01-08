import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import PostForm from './PostForm';
import NEW_POST from '../mutations/New.graphql';
export default class NewPost extends Component {
  render() {
    return (
      <div>
        <h1 className='new-post-header'>NEW POST</h1>
        <Mutation
          mutation={NEW_POST}
        >
          {createPost => <PostForm onSubmit={createPost} />
              }
        </Mutation>
      </div>
    );
  }
}

