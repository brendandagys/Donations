// THIS IS A GENERATED FILE
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Represents a donation that can be made by a user */
export type Donation = {
  __typename?: 'Donation';
  amount: Scalars['Float'];
  id: Scalars['Int'];
  tip: Scalars['Float'];
  user?: Maybe<User>;
};

/** Root Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a donation */
  createDonation?: Maybe<Donation>;
  /** Creates a user */
  createUser?: Maybe<User>;
  /** Deletes a donation */
  deleteDonation?: Maybe<Donation>;
  /** Deletes a user */
  deleteUser?: Maybe<User>;
  /** Updates a donation */
  updateDonation?: Maybe<Donation>;
  /** Updates a user */
  updateUser?: Maybe<User>;
};


/** Root Mutation */
export type MutationCreateDonationArgs = {
  amount: Scalars['Float'];
  tip: Scalars['Float'];
  userId: Scalars['Int'];
};


/** Root Mutation */
export type MutationCreateUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


/** Root Mutation */
export type MutationDeleteDonationArgs = {
  id: Scalars['Int'];
};


/** Root Mutation */
export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


/** Root Mutation */
export type MutationUpdateDonationArgs = {
  amount?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  tip?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['Int']>;
};


/** Root Mutation */
export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: InputMaybe<Scalars['String']>;
};

/** Root Query */
export type Query = {
  __typename?: 'Query';
  /** A single donation based on the ID */
  donation?: Maybe<Donation>;
  /** List of all donations */
  donations?: Maybe<Array<Maybe<Donation>>>;
  /** A single book based on the ID */
  user?: Maybe<User>;
  /** List of all users */
  users?: Maybe<Array<Maybe<User>>>;
};


/** Root Query */
export type QueryDonationArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


/** Root Query */
export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

/** Represents a user than can make donations */
export type User = {
  __typename?: 'User';
  donations?: Maybe<Array<Maybe<Donation>>>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
};

export type CreateDonationMutationVariables = Exact<{
  userId: Scalars['Int'];
  amount: Scalars['Float'];
  tip: Scalars['Float'];
}>;


export type CreateDonationMutation = { __typename?: 'Mutation', createDonation?: { __typename?: 'Donation', id: number, amount: number, tip: number, user?: { __typename?: 'User', id: number } | null | undefined } | null | undefined };

export type UpdateDonationMutationVariables = Exact<{
  id: Scalars['Int'];
  userId?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['Float']>;
  tip?: InputMaybe<Scalars['Float']>;
}>;


export type UpdateDonationMutation = { __typename?: 'Mutation', updateDonation?: { __typename?: 'Donation', id: number, amount: number, tip: number, user?: { __typename?: 'User', id: number } | null | undefined } | null | undefined };

export type DeleteDonationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteDonationMutation = { __typename?: 'Mutation', deleteDonation?: { __typename?: 'Donation', id: number, amount: number, tip: number, user?: { __typename?: 'User', id: number } | null | undefined } | null | undefined };

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string } | null | undefined };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string } | null | undefined };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', firstName: string, lastName: string, email: string } | null | undefined };

export type AllDonationsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDonationsQuery = { __typename?: 'Query', donations?: Array<{ __typename?: 'Donation', id: number, amount: number, tip: number, user?: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string } | null | undefined } | null | undefined> | null | undefined };

export type OneDonationQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type OneDonationQuery = { __typename?: 'Query', donation?: { __typename?: 'Donation', id: number, amount: number, tip: number, user?: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string } | null | undefined } | null | undefined };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: number, firstName: string, lastName: string, email: string, donations?: Array<{ __typename?: 'Donation', amount: number, tip: number } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type AllUsersSelectInputQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersSelectInputQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: number, firstName: string, lastName: string } | null | undefined> | null | undefined };

export type OneUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type OneUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string } | null | undefined };


export const CreateDonationDocument = gql`
    mutation CreateDonation($userId: Int!, $amount: Float!, $tip: Float!) {
  createDonation(userId: $userId, amount: $amount, tip: $tip) {
    id
    user {
      id
    }
    amount
    tip
  }
}
    `;
export type CreateDonationMutationFn = Apollo.MutationFunction<CreateDonationMutation, CreateDonationMutationVariables>;

/**
 * __useCreateDonationMutation__
 *
 * To run a mutation, you first call `useCreateDonationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDonationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDonationMutation, { data, loading, error }] = useCreateDonationMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      amount: // value for 'amount'
 *      tip: // value for 'tip'
 *   },
 * });
 */
export function useCreateDonationMutation(baseOptions?: Apollo.MutationHookOptions<CreateDonationMutation, CreateDonationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDonationMutation, CreateDonationMutationVariables>(CreateDonationDocument, options);
      }
export type CreateDonationMutationHookResult = ReturnType<typeof useCreateDonationMutation>;
export type CreateDonationMutationResult = Apollo.MutationResult<CreateDonationMutation>;
export type CreateDonationMutationOptions = Apollo.BaseMutationOptions<CreateDonationMutation, CreateDonationMutationVariables>;
export const UpdateDonationDocument = gql`
    mutation UpdateDonation($id: Int!, $userId: Int, $amount: Float, $tip: Float) {
  updateDonation(id: $id, userId: $userId, amount: $amount, tip: $tip) {
    id
    user {
      id
    }
    amount
    tip
  }
}
    `;
export type UpdateDonationMutationFn = Apollo.MutationFunction<UpdateDonationMutation, UpdateDonationMutationVariables>;

/**
 * __useUpdateDonationMutation__
 *
 * To run a mutation, you first call `useUpdateDonationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDonationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDonationMutation, { data, loading, error }] = useUpdateDonationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *      amount: // value for 'amount'
 *      tip: // value for 'tip'
 *   },
 * });
 */
export function useUpdateDonationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDonationMutation, UpdateDonationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDonationMutation, UpdateDonationMutationVariables>(UpdateDonationDocument, options);
      }
export type UpdateDonationMutationHookResult = ReturnType<typeof useUpdateDonationMutation>;
export type UpdateDonationMutationResult = Apollo.MutationResult<UpdateDonationMutation>;
export type UpdateDonationMutationOptions = Apollo.BaseMutationOptions<UpdateDonationMutation, UpdateDonationMutationVariables>;
export const DeleteDonationDocument = gql`
    mutation DeleteDonation($id: Int!) {
  deleteDonation(id: $id) {
    id
    user {
      id
    }
    amount
    tip
  }
}
    `;
export type DeleteDonationMutationFn = Apollo.MutationFunction<DeleteDonationMutation, DeleteDonationMutationVariables>;

/**
 * __useDeleteDonationMutation__
 *
 * To run a mutation, you first call `useDeleteDonationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDonationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDonationMutation, { data, loading, error }] = useDeleteDonationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDonationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDonationMutation, DeleteDonationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDonationMutation, DeleteDonationMutationVariables>(DeleteDonationDocument, options);
      }
export type DeleteDonationMutationHookResult = ReturnType<typeof useDeleteDonationMutation>;
export type DeleteDonationMutationResult = Apollo.MutationResult<DeleteDonationMutation>;
export type DeleteDonationMutationOptions = Apollo.BaseMutationOptions<DeleteDonationMutation, DeleteDonationMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($firstName: String!, $lastName: String!, $email: String!) {
  createUser(firstName: $firstName, lastName: $lastName, email: $email) {
    id
    firstName
    lastName
    email
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $firstName: String, $lastName: String, $email: String) {
  updateUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email) {
    id
    firstName
    lastName
    email
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: Int!) {
  deleteUser(id: $id) {
    firstName
    lastName
    email
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const AllDonationsDocument = gql`
    query AllDonations {
  donations {
    id
    user {
      id
      firstName
      lastName
      email
    }
    amount
    tip
  }
}
    `;

/**
 * __useAllDonationsQuery__
 *
 * To run a query within a React component, call `useAllDonationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDonationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDonationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDonationsQuery(baseOptions?: Apollo.QueryHookOptions<AllDonationsQuery, AllDonationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllDonationsQuery, AllDonationsQueryVariables>(AllDonationsDocument, options);
      }
export function useAllDonationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllDonationsQuery, AllDonationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllDonationsQuery, AllDonationsQueryVariables>(AllDonationsDocument, options);
        }
export type AllDonationsQueryHookResult = ReturnType<typeof useAllDonationsQuery>;
export type AllDonationsLazyQueryHookResult = ReturnType<typeof useAllDonationsLazyQuery>;
export type AllDonationsQueryResult = Apollo.QueryResult<AllDonationsQuery, AllDonationsQueryVariables>;
export const OneDonationDocument = gql`
    query OneDonation($id: Int!) {
  donation(id: $id) {
    id
    user {
      id
      firstName
      lastName
      email
    }
    amount
    tip
  }
}
    `;

/**
 * __useOneDonationQuery__
 *
 * To run a query within a React component, call `useOneDonationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneDonationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneDonationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOneDonationQuery(baseOptions: Apollo.QueryHookOptions<OneDonationQuery, OneDonationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OneDonationQuery, OneDonationQueryVariables>(OneDonationDocument, options);
      }
export function useOneDonationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OneDonationQuery, OneDonationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OneDonationQuery, OneDonationQueryVariables>(OneDonationDocument, options);
        }
export type OneDonationQueryHookResult = ReturnType<typeof useOneDonationQuery>;
export type OneDonationLazyQueryHookResult = ReturnType<typeof useOneDonationLazyQuery>;
export type OneDonationQueryResult = Apollo.QueryResult<OneDonationQuery, OneDonationQueryVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  users {
    id
    firstName
    lastName
    email
    donations {
      amount
      tip
    }
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const AllUsersSelectInputDocument = gql`
    query AllUsersSelectInput {
  users {
    id
    firstName
    lastName
  }
}
    `;

/**
 * __useAllUsersSelectInputQuery__
 *
 * To run a query within a React component, call `useAllUsersSelectInputQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersSelectInputQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersSelectInputQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersSelectInputQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersSelectInputQuery, AllUsersSelectInputQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersSelectInputQuery, AllUsersSelectInputQueryVariables>(AllUsersSelectInputDocument, options);
      }
export function useAllUsersSelectInputLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersSelectInputQuery, AllUsersSelectInputQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersSelectInputQuery, AllUsersSelectInputQueryVariables>(AllUsersSelectInputDocument, options);
        }
export type AllUsersSelectInputQueryHookResult = ReturnType<typeof useAllUsersSelectInputQuery>;
export type AllUsersSelectInputLazyQueryHookResult = ReturnType<typeof useAllUsersSelectInputLazyQuery>;
export type AllUsersSelectInputQueryResult = Apollo.QueryResult<AllUsersSelectInputQuery, AllUsersSelectInputQueryVariables>;
export const OneUserDocument = gql`
    query OneUser($id: Int!) {
  user(id: $id) {
    id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useOneUserQuery__
 *
 * To run a query within a React component, call `useOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOneUserQuery(baseOptions: Apollo.QueryHookOptions<OneUserQuery, OneUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OneUserQuery, OneUserQueryVariables>(OneUserDocument, options);
      }
export function useOneUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OneUserQuery, OneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OneUserQuery, OneUserQueryVariables>(OneUserDocument, options);
        }
export type OneUserQueryHookResult = ReturnType<typeof useOneUserQuery>;
export type OneUserLazyQueryHookResult = ReturnType<typeof useOneUserLazyQuery>;
export type OneUserQueryResult = Apollo.QueryResult<OneUserQuery, OneUserQueryVariables>;