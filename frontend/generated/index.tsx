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
  userId: Scalars['Int'];
};

/** Contains errors that occur in GraphQL, such as improper arguments */
export type Error = {
  __typename?: 'Error';
  error?: Maybe<Scalars['String']>;
};

/** Root Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a user */
  createUser?: Maybe<User>;
  /** Deletes a user */
  deleteUser?: Maybe<UpdateUser>;
  /** Updates a user */
  updateUser?: Maybe<UpdateUser>;
};


/** Root Mutation */
export type MutationCreateUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


/** Root Mutation */
export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
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

export type UpdateUser = Error | User;

/** Represents a user than can make donations */
export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: number, firstName: string, lastName: string, email: string } | null | undefined> | null | undefined };

export type OneUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type OneUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', firstName: string, lastName: string, email: string } | null | undefined };


export const AllUsersDocument = gql`
    query AllUsers {
  users {
    id
    firstName
    lastName
    email
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
export const OneUserDocument = gql`
    query OneUser($id: Int!) {
  user(id: $id) {
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