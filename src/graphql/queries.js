/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBloodDonor = /* GraphQL */ `
  query GetBloodDonor($id: ID!) {
    getBloodDonor(id: $id) {
      id
      name
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBloodDonors = /* GraphQL */ `
  query ListBloodDonors(
    $filter: ModelBloodDonorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBloodDonors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bloodType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDonorRequest = /* GraphQL */ `
  query GetDonorRequest($id: ID!) {
    getDonorRequest(id: $id) {
      phone
      name
      id
      age
      fever
      bloodType
      adminApproval
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDonorRequests = /* GraphQL */ `
  query ListDonorRequests(
    $filter: ModelDonorRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonorRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        phone
        name
        id
        age
        fever
        bloodType
        adminApproval
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
