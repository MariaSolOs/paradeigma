import type { GraphQLResolveInfo } from 'graphql';
import type { SnippetDocument } from '@paradeigma-mongoose';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new code snippet. */
  createSnippet: Snippet;
};


export type MutationCreateSnippetArgs = {
  content: Scalars['String'];
  description: Scalars['String'];
  language: ProgrammingLanguage;
  name: Scalars['String'];
  style: SnippetStyle;
};

/** Supported programming languages for a snippet. */
export enum ProgrammingLanguage {
  Csharp = 'csharp',
  Css = 'css',
  Java = 'java',
  Javascript = 'javascript',
  Markdown = 'markdown',
  Python = 'python'
}

export type Query = {
  __typename?: 'Query';
  /**
   * Get snippets filtered by language and with a title or description
   * matching the given query.
   */
  snippets: Array<Snippet>;
};


export type QuerySnippetsArgs = {
  languages?: InputMaybe<Array<ProgrammingLanguage>>;
  query?: InputMaybe<Scalars['String']>;
};

/** A code snippet. */
export type Snippet = {
  __typename?: 'Snippet';
  content: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  language: ProgrammingLanguage;
  name: Scalars['String'];
  style: SnippetStyle;
};

/** Supported styles to use in a snippet code block. */
export enum SnippetStyle {
  A11yDark = 'a11yDark',
  AtomDark = 'atomDark',
  Base16AteliersulphurpoolLight = 'base16AteliersulphurpoolLight',
  ColdarkCold = 'coldarkCold',
  ColdarkDark = 'coldarkDark',
  Coy = 'coy',
  Dracula = 'dracula',
  DuotoneDark = 'duotoneDark',
  DuotoneSea = 'duotoneSea',
  Funky = 'funky',
  Ghcolors = 'ghcolors',
  MaterialDark = 'materialDark',
  MaterialLight = 'materialLight',
  MaterialOceanic = 'materialOceanic',
  Nord = 'nord',
  Okaidia = 'okaidia',
  Prism = 'prism',
  ShadesOfPurple = 'shadesOfPurple',
  Solarizedlight = 'solarizedlight',
  Synthwave84 = 'synthwave84',
  Tomorrow = 'tomorrow'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  ProgrammingLanguage: ProgrammingLanguage;
  Query: ResolverTypeWrapper<{}>;
  Snippet: ResolverTypeWrapper<SnippetDocument>;
  SnippetStyle: SnippetStyle;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  Snippet: SnippetDocument;
  String: Scalars['String'];
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createSnippet?: Resolver<ResolversTypes['Snippet'], ParentType, ContextType, RequireFields<MutationCreateSnippetArgs, 'content' | 'description' | 'language' | 'name' | 'style'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  snippets?: Resolver<Array<ResolversTypes['Snippet']>, ParentType, ContextType, Partial<QuerySnippetsArgs>>;
};

export type SnippetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Snippet'] = ResolversParentTypes['Snippet']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['ProgrammingLanguage'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  style?: Resolver<ResolversTypes['SnippetStyle'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Snippet?: SnippetResolvers<ContextType>;
};

