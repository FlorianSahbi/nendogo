import gql from 'graphql-tag';

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
`
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
`
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
`

export const GET_NENDOROIDS_QUERY = gql`
query {
  getNendoroids {
    nendoroids {
      name
      number
      id
      interactions {
        id
        type
        user {
          pseudo
          id
        }
      }
    }
  }
}
`