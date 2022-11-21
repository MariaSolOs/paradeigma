import type { GraphQLResolveInfo } from 'graphql';
import type { MikroDocument } from '@paradeigma/mongoose';
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

/** A mikro. */
export type Mikro = {
    __typename?: 'Mikro';
    content: Scalars['String'];
    description: Scalars['String'];
    id: Scalars['ID'];
    language: ProgrammingLanguage;
    name: Scalars['String'];
    rating: Scalars['Float'];
    style: MikroStyle;
};

/** Supported styles to use in a mikro code block. */
export enum MikroStyle {
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

export type Mutation = {
    __typename?: 'Mutation';
    /** Create a new mikro. */
    createMikro: Mikro;
};

export type MutationCreateMikroArgs = {
    content: Scalars['String'];
    description: Scalars['String'];
    language: ProgrammingLanguage;
    name: Scalars['String'];
    style: MikroStyle;
};

/** Supported programming languages for a mikro. */
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
    /** Get a mikro by ID. */
    mikro: Mikro;
    /**
     * Get mikros filtered by language and with a title or code content
     * matching the given text query.
     */
    mikros: Array<Mikro>;
};

export type QueryMikroArgs = {
    id: Scalars['ID'];
};

export type QueryMikrosArgs = {
    languageFilter?: InputMaybe<Array<ProgrammingLanguage>>;
    textFilter?: InputMaybe<Scalars['String']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

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
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Mikro: ResolverTypeWrapper<MikroDocument>;
    MikroStyle: MikroStyle;
    Mutation: ResolverTypeWrapper<{}>;
    ProgrammingLanguage: ProgrammingLanguage;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Boolean: Scalars['Boolean'];
    Float: Scalars['Float'];
    ID: Scalars['ID'];
    Mikro: MikroDocument;
    Mutation: {};
    Query: {};
    String: Scalars['String'];
};

export type MikroResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mikro'] = ResolversParentTypes['Mikro']
> = {
    content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    language?: Resolver<ResolversTypes['ProgrammingLanguage'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    style?: Resolver<ResolversTypes['MikroStyle'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
    createMikro?: Resolver<
        ResolversTypes['Mikro'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateMikroArgs, 'content' | 'description' | 'language' | 'name' | 'style'>
    >;
};

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
    mikro?: Resolver<ResolversTypes['Mikro'], ParentType, ContextType, RequireFields<QueryMikroArgs, 'id'>>;
    mikros?: Resolver<Array<ResolversTypes['Mikro']>, ParentType, ContextType, Partial<QueryMikrosArgs>>;
};

export type Resolvers<ContextType = any> = {
    Mikro?: MikroResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
};
