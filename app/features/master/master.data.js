import gql from 'graphql-tag';

const GET_USERS = gql`query users {
  users{
    firstName
    lastName
    id
  }
}`;

export default GET_USERS;
