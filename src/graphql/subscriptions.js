/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBloodDonor = /* GraphQL */ `
  subscription OnCreateBloodDonor(
    $filter: ModelSubscriptionBloodDonorFilterInput
  ) {
    onCreateBloodDonor(filter: $filter) {
      id
      name
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBloodDonor = /* GraphQL */ `
  subscription OnUpdateBloodDonor(
    $filter: ModelSubscriptionBloodDonorFilterInput
  ) {
    onUpdateBloodDonor(filter: $filter) {
      id
      name
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBloodDonor = /* GraphQL */ `
  subscription OnDeleteBloodDonor(
    $filter: ModelSubscriptionBloodDonorFilterInput
  ) {
    onDeleteBloodDonor(filter: $filter) {
      id
      name
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateDonorRequest = /* GraphQL */ `
  subscription OnCreateDonorRequest(
    $filter: ModelSubscriptionDonorRequestFilterInput
  ) {
    onCreateDonorRequest(filter: $filter) {
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
export const onUpdateDonorRequest = /* GraphQL */ `
  subscription OnUpdateDonorRequest(
    $filter: ModelSubscriptionDonorRequestFilterInput
  ) {
    onUpdateDonorRequest(filter: $filter) {
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
export const onDeleteDonorRequest = /* GraphQL */ `
  subscription OnDeleteDonorRequest(
    $filter: ModelSubscriptionDonorRequestFilterInput
  ) {
    onDeleteDonorRequest(filter: $filter) {
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
