import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    return !user ? null : <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = ({ users }, { userId }) => {
  return { user: users.find(({ id }) => id === userId) };
};

export default connect(mapStateToProps)(UserHeader);
