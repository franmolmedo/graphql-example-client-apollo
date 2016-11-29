import React, { Component } from 'react';
import { graphql  } from 'react-apollo';
import { connect } from 'react-redux';

import { UserItem } from './user-item';

import GET_USERS from './master.data';

import masterStyles from './master.sass';

class Master extends Component{
  render(){
    const { loading, error, users } = this.props.data;

    if (loading) return <div>loading...</div>;
    if (error) return <div>Error!!!!</div>;
    const usersList = users.map((user) => {
      return <UserItem key={user.id} user={user} />
    });

    return (
      <ul className={masterStyles.list}>
        {usersList}
      </ul>
    )
  }
}

Master.propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      users: React.PropTypes.array,
      error: React.PropTypes.bool
    })
};

const MasterContainer = connect(null, null)(graphql(GET_USERS)(Master))

export { MasterContainer };
