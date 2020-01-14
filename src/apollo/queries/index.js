import gql from 'graphql-tag';

export const TEST = gql`
query getS($name: String!) {
  getNendoroidsBySerie(series: $name) {
    nendoroids {
      id
      formattedName
      images
      number
    }
    count
  }
}
`;

export const TEST_MANU = gql`
query getS($name: String!) {
  getNendoroidsByManufacturer(manufacturer: $name) {
    nendoroids {
      id
      formattedName
      images
      number
    }
    count
  }
}
`;

export const TEST_SCULPTOR = gql`
query getS($name: String!) {
  getNendoroidsBySculptor(sculptor: $name) {
    nendoroids {
      id
      formattedName
      images
      number
    }
    count
  }
}
`;

export const CREATE_INTERACTION_MUTATION = gql`
  mutation CreateInteraction($nendoroidId: ID!, $userId: ID!, $type: InteractionType!){
    createInteraction(nendoroidId: $nendoroidId , userId: $userId, type: $type) {
      id
    }
  }
`;

export const DELETE_INTERACTION_MUTATION = gql`
  mutation DeleteInteraction($interactionId: ID!){
    deleteInteraction(interactionId: $interactionId) {
      id
    }
  }
`;

export const GET_INTERACTION_LIKE_QUERY = gql`
  query GetNendoroidsLikedBy($id: ID!){
    getNendoroidsLikedBy(id: $id) {
      nendoroids {
        id
        formattedName
        images
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
        formattedName
        images
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
        formattedName
        images
        number
      }
      count
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

export const GET_INTERACTIONS_QUERY = gql`
  query GetNendoroids($id: ID!) {
    getNendoroid(id: $id) {
      interactions {
        type
        user {
          pseudo
          avatar
          id
        }
      }
    }
  }
`;

export const GET_USERS_QUERY = gql`
query {
    getUsers {
      users {
        pseudo
        avatar
        id
      }
    }
  }
`;


export const GET_NENDOROIDS_QUERY = gql`
  query {
    getNendoroids(orderBy: number_ASC) {
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

export const GET_NENDOROIDS_BY_RANGE_QUERY = gql`
  query GetNendoroidsByRange($min: Int!, $max: Int!, $orderBy: NendoroidOrderByInput!, $name: String){
    getNendoroidsByRange(min: $min, max: $max, orderBy: $orderBy, name: $name) {
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

export const GET_SERIES_QUERY = gql`
  query GetSeries {
  prisma {
    series(orderBy: name_ASC, skip: 0, first: 10) {
      name
      id
    }
  }
}
`;

export const GET_MANU_QUERRY = gql`
query GetManu($manuName: String) {
  prisma {
    nendoroids(where: {manufacturer_contains: "Good Smile Company"}) {
      id
      formattedName
      number
      images
    }
  }
}
`

export const GET_MANUFACTURERS_QUERY = gql`
  {
    getManufacturers {
      manufacturers {
        id
        name
      }
      count
    }
  }
`;

export const GET_SCULPTORS_QUERY = gql`
  {
    getSculptors {
      sculptors {
        id
        name
      }
      count
    }
  }
`;




export const UPLOAD_FILE = gql`
  mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

export const UPLOAD_FILE_STREAM = gql`
  mutation SingleUploadStream($file: Upload!) {
    singleUploadStream(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

export const uploadFileMutation = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export const GET_CLIENT_ONLY_USER = gql`
query getOneByPseudo($pseudo: String!) {
  getUserByPseudo(pseudo: $pseudo) {
    id
    pseudo
    avatar
  }
}
`

export const UPDATE_USER = gql`
mutation UpdateUser($id: ID!, $lastName: String, $firstName: String) {
  updateUser(id: $id, firstName: $firstName, lastName: $lastName) {
    id
    pseudo
    avatar
  }
}
`;





export const AFTER_UPLOAD = gql`
  mutation CreateImage($id: ID!) {
    createImage(id: $id) {
      id
      likes
      url
    }
  }
`;

export const S3_SIGN_MUTATION = gql`
  mutation($filename: String!, $filetype: String!) {
    signS3(filename: $filename, filetype: $filetype) {
      url
      signedRequest
    }
  }
`;