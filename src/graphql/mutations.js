/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBloodDonor = /* GraphQL */ `
  mutation CreateBloodDonor(
    $input: CreateBloodDonorInput!
    $condition: ModelBloodDonorConditionInput
  ) {
    createBloodDonor(input: $input, condition: $condition) {
      id
      name
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBloodDonor = /* GraphQL */ `
  mutation UpdateBloodDonor(
    $input: UpdateBloodDonorInput!
    $condition: ModelBloodDonorConditionInput
  ) {
    updateBloodDonor(input: $input, condition: $condition) {
      id
      name
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBloodDonor = /* GraphQL */ `
  mutation DeleteBloodDonor(
    $input: DeleteBloodDonorInput!
    $condition: ModelBloodDonorConditionInput
  ) {
    deleteBloodDonor(input: $input, condition: $condition) {
      id
      name
      bloodType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDonorRequest = /* GraphQL */ `
  mutation CreateDonorRequest(
    $input: CreateDonorRequestInput!
    $condition: ModelDonorRequestConditionInput
  ) {
    createDonorRequest(input: $input, condition: $condition) {
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
export const updateDonorRequest = /* GraphQL */ `
  mutation UpdateDonorRequest(
    $input: UpdateDonorRequestInput!
    $condition: ModelDonorRequestConditionInput
  ) {
    updateDonorRequest(input: $input, condition: $condition) {
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
export const deleteDonorRequest = /* GraphQL */ `
  mutation DeleteDonorRequest(
    $input: DeleteDonorRequestInput!
    $condition: ModelDonorRequestConditionInput
  ) {
    deleteDonorRequest(input: $input, condition: $condition) {
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
