import gql from 'graphql-tag';

export const GET_NENDOROIDS = gql`
  query GetUsers($name: String, $orderBy: NendoroidOrderByInput) {
    getUsers(name: $name, orderBy: $orderBy) {
      count
      nendoroids {
        id
        formattedName
        number
        images
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers($pseudo: String, $orderBy: UserOrderByInput, $skip: Int, $first: Int) {
    getUsers(pseudo: $pseudo, orderBy: $orderBy, skip: $skip, first: $first) {
      count
      users {
        id
        pseudo
        avatar
      }
    }
  }
`;

export const GET_SERIES = gql`
  query GetSerie($name: String, $orderBy: SerieOrderByInput){
    getSeries(name: $name, orderBy: $orderBy) {
      count
      series {
        id
        name
      }
    }
  }
`;

export const GET_MANUFACTURERS = gql`
  query GetManufacturers($name: String, $orderBy: ManufacturerOrderByInput){
    getManufacturers(name: $name, orderBy: $orderBy) {
      count
      manufacturers {
        id
        name
      }
    }
  }
`;

export const GET_SCULPTORS = gql`
  query GetSculptors($name: String, $orderBy: SculptorOrderByInput){
    getSculptors(name: $name, orderBy: $orderBy) {
      count
      sculptors {
        id
        name
      }
    }
  }
`;
