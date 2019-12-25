import gql from 'graphql-tag';

export const CREATE_INTERACTION_MUTATION = gql`
mutation CreateInteraction($nendoroidId: ID!, $userId: ID!, $type: InteractionType!){
  createInteraction(nendoroidId: $nendoroidId , userId: $userId, type: $type) {
    id
  }
}
`;

export const DELETE_INTERACTION_MUTATION = gql`
mutation DeleteInteraction($interaction: ID!){
  deleteInteraction(interaction: $interaction) {
    id
  }
}
`;

export const GET_INTERACTION_LIKE_QUERY = gql`
query GetNendoroidsLikedBy($id: ID!){
  getNendoroidsLikedBy(id: $id) {
    nendoroids {
      id
      name
      number
    }
    count
  }
}
`;
export const GET_INTERACTION_WISH_QUERY = gql`
query GetNendoroidsWishedBy($id: ID!) {
  getNendoroidsWishedBy(id: $id) {
    nendoroids {
      id
      name
      number
    }
    count
  }
}
`;

export const GET_INTERACTION_OWN_QUERY = gql`
query GetNendoroidsOwnedBy($id: ID!){
  getNendoroidsOwnedBy(id: $id) {
    nendoroids {
      id
      name
      number
    }
    count
  }
}
`;

export const GET_NENDOROIDS_QUERY = gql`
query {
  getNendoroids {
    nendoroids {
      formattedName
      number
      id
      images
      interactions {
        id
        type
        user {
          pseudo
          avatar
          id
        }
      }
    }
  }
}
`;

export const SIGNUP_MUTATION = gql`
  mutation SignUp($email: String!, $password: String!, $pseudo: String!) {
    signup(email: $email, password: $password, pseudo: $pseudo) {
      token
      user {
        id
        pseudo
        avatar
      }
    }
  }
`;

export const SIGNIN_MUTATION = gql`
mutation Login($pseudo: String!, $password: String!) {
    login(pseudo: $pseudo, password: $password) {
      token
      user {
        id
        avatar
        pseudo
      }
    }
  }
`;
