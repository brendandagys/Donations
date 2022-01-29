import { GraphQLSchema, GraphQLObjectType, GraphQLUnionType } from 'graphql';
export declare const UserType: GraphQLObjectType;
export declare const DonationType: GraphQLObjectType<any, any>;
export declare const ErrorType: GraphQLObjectType<any, any>;
export declare const UserMutateType: GraphQLUnionType;
declare const schema: GraphQLSchema;
export default schema;
