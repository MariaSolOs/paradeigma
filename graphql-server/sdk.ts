import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  /** Snippets filtered by the given parameters. */
  snippets: Array<Snippet>;
};


export type QuerySnippetsArgs = {
  language?: InputMaybe<ProgrammingLanguage>;
  name?: InputMaybe<Scalars['String']>;
};

/** A code snippet. */
export type Snippet = {
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



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;