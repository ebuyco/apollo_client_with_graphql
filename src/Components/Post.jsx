import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
import UpdatePost from './UpdatePost';
import EditMode from './EditMode';
import UPDATE_POST from '../queries/Update.graphql';
import POST_QUERY from '../queries/Post.graphql';

export default class Post extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query
        query={POST_QUERY}
        variables={{
          id: match.params.id
        }}
      >
        {({ data, loading }) => {
          if (loading) return 'loading...';
          const { post, isEditMode } = data;
          return (
            <div>
              <EditMode isEditMode={isEditMode} />
              {isEditMode ? (
                <section>
                  <h1>Edit Post</h1>
                  <UpdatePost post={post} />
                </section>
              ) : (
                <section>
                  <h1 className='new-post-header'>{post.title}</h1>
                  <Mutation
                    mutation={UPDATE_POST}
                    variables={{
                      id: post.id,
                      check: !post.check
                    }}
                    optimisticResponse={{
                      __typename: 'Mutation',
                      updatePost: {
                        __typename: 'Post',
                        check: !post.check
                      }
                    }}
                    update={(cache, { data: { updatePost } }) => {
                      const data = cache.readQuery({
                        query: POST_QUERY,
                        variables: {
                          id: post.id
                        }
                      });
                      data.post.check = updatePost.check;
                      cache.writeQuery({
                        query: POST_QUERY,
                        data: {
                          ...data,
                          post: data.post

                        }
                      });
                    }}
                  >
                    {updatePost => (
                      <input
                        type='checkbox'
                        checked={post.check}
                        onChange={updatePost}
                      />
                    )}
                  </Mutation>
                </section>
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}
