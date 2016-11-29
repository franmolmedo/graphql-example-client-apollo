import React from 'react';

const UserItem = ({user}) => {
  return (
    <li>
      <div>First Name: <span>{user.firstName}</span></div>
      <div>Last Name: <span>{user.lastName}</span></div>
    </li>
  )
}

UserItem.propTypes = {
    user: React.PropTypes.object,
};

export { UserItem }
