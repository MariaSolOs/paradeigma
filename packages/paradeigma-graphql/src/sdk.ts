import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import type { ClientError } from 'graphql-request/dist/types';
import type { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
import useSWR from 'swr';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  content: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  language: ProgrammingLanguage;
  name: Scalars['String'];
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
  /**
   * Get mikros filtered by language and with a title or description
   * matching the given query.
   */
  mikros: Array<Mikro>;
};


export type QueryMikrosArgs = {
  languages?: InputMaybe<Array<ProgrammingLanguage>>;
  query?: InputMaybe<Scalars['String']>;
};

export type MikroCardFragment = { id: string, name: string, description: string, content: string, language: ProgrammingLanguage, style: MikroStyle };

export type CreateMikroMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  content: Scalars['String'];
  language: ProgrammingLanguage;
  style: MikroStyle;
}>;


export type CreateMikroMutation = { createMikro: { id: string } };

export type GetMikrosQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Array<ProgrammingLanguage> | ProgrammingLanguage>;
}>;


export type GetMikrosQuery = { mikros: Array<{ id: string, name: string, description: string, content: string, language: ProgrammingLanguage, style: MikroStyle }> };

export const MikroCardFragmentDoc = gql`
    fragment MikroCard on Mikro {
  id
  name
  description
  content
  language
  style
}
    `;
export const CreateMikroDocument = gql`
    mutation createMikro($name: String!, $description: String!, $content: String!, $language: ProgrammingLanguage!, $style: MikroStyle!) {
  createMikro(
    name: $name
    description: $description
    content: $content
    language: $language
    style: $style
  ) {
    id
  }
}
    `;
export const GetMikrosDocument = gql`
    query getMikros($query: String, $languages: [ProgrammingLanguage!]) {
  mikros(query: $query, languages: $languages) {
    ...MikroCard
  }
}
    ${MikroCardFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createMikro(variables: CreateMikroMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateMikroMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateMikroMutation>(CreateMikroDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createMikro', 'mutation');
    },
    getMikros(variables?: GetMikrosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMikrosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMikrosQuery>(GetMikrosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMikros', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useGetMikros(key: SWRKeyInterface, variables?: GetMikrosQueryVariables, config?: SWRConfigInterface<GetMikrosQuery, ClientError>) {
      return useSWR<GetMikrosQuery, ClientError>(key, () => sdk.getMikros(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;