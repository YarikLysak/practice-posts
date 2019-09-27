import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderList() {
    return this.props.posts.map(({ id, title, body }) => {
      return (
        <div className="item" key={id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostList);
