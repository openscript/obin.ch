export type Maybe<T> = T;
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
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  quality: Maybe<Scalars['Int']>;
  lossless: Maybe<Scalars['Boolean']>;
  speed: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>;
  ne: Maybe<Scalars['Boolean']>;
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>;
  ne: Maybe<Scalars['Date']>;
  gt: Maybe<Scalars['Date']>;
  gte: Maybe<Scalars['Date']>;
  lt: Maybe<Scalars['Date']>;
  lte: Maybe<Scalars['Date']>;
  in: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 0,
  absolutePath = 1,
  relativePath = 2,
  extension = 3,
  size = 4,
  prettySize = 5,
  modifiedTime = 6,
  accessTime = 7,
  changeTime = 8,
  birthTime = 9,
  root = 10,
  dir = 11,
  base = 12,
  ext = 13,
  name = 14,
  relativeDirectory = 15,
  dev = 16,
  mode = 17,
  nlink = 18,
  uid = 19,
  gid = 20,
  rdev = 21,
  ino = 22,
  atimeMs = 23,
  mtimeMs = 24,
  ctimeMs = 25,
  atime = 26,
  mtime = 27,
  ctime = 28,
  birthtime = 29,
  birthtimeMs = 30,
  blksize = 31,
  blocks = 32,
  id = 33,
  parent___id = 34,
  parent___parent___id = 35,
  parent___parent___parent___id = 36,
  parent___parent___parent___children = 37,
  parent___parent___children = 38,
  parent___parent___children___id = 39,
  parent___parent___children___children = 40,
  parent___parent___internal___content = 41,
  parent___parent___internal___contentDigest = 42,
  parent___parent___internal___description = 43,
  parent___parent___internal___fieldOwners = 44,
  parent___parent___internal___ignoreType = 45,
  parent___parent___internal___mediaType = 46,
  parent___parent___internal___owner = 47,
  parent___parent___internal___type = 48,
  parent___children = 49,
  parent___children___id = 50,
  parent___children___parent___id = 51,
  parent___children___parent___children = 52,
  parent___children___children = 53,
  parent___children___children___id = 54,
  parent___children___children___children = 55,
  parent___children___internal___content = 56,
  parent___children___internal___contentDigest = 57,
  parent___children___internal___description = 58,
  parent___children___internal___fieldOwners = 59,
  parent___children___internal___ignoreType = 60,
  parent___children___internal___mediaType = 61,
  parent___children___internal___owner = 62,
  parent___children___internal___type = 63,
  parent___internal___content = 64,
  parent___internal___contentDigest = 65,
  parent___internal___description = 66,
  parent___internal___fieldOwners = 67,
  parent___internal___ignoreType = 68,
  parent___internal___mediaType = 69,
  parent___internal___owner = 70,
  parent___internal___type = 71,
  children = 72,
  children___id = 73,
  children___parent___id = 74,
  children___parent___parent___id = 75,
  children___parent___parent___children = 76,
  children___parent___children = 77,
  children___parent___children___id = 78,
  children___parent___children___children = 79,
  children___parent___internal___content = 80,
  children___parent___internal___contentDigest = 81,
  children___parent___internal___description = 82,
  children___parent___internal___fieldOwners = 83,
  children___parent___internal___ignoreType = 84,
  children___parent___internal___mediaType = 85,
  children___parent___internal___owner = 86,
  children___parent___internal___type = 87,
  children___children = 88,
  children___children___id = 89,
  children___children___parent___id = 90,
  children___children___parent___children = 91,
  children___children___children = 92,
  children___children___children___id = 93,
  children___children___children___children = 94,
  children___children___internal___content = 95,
  children___children___internal___contentDigest = 96,
  children___children___internal___description = 97,
  children___children___internal___fieldOwners = 98,
  children___children___internal___ignoreType = 99,
  children___children___internal___mediaType = 100,
  children___children___internal___owner = 101,
  children___children___internal___type = 102,
  children___internal___content = 103,
  children___internal___contentDigest = 104,
  children___internal___description = 105,
  children___internal___fieldOwners = 106,
  children___internal___ignoreType = 107,
  children___internal___mediaType = 108,
  children___internal___owner = 109,
  children___internal___type = 110,
  internal___content = 111,
  internal___contentDigest = 112,
  internal___description = 113,
  internal___fieldOwners = 114,
  internal___ignoreType = 115,
  internal___mediaType = 116,
  internal___owner = 117,
  internal___type = 118
}

export type DirectoryFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 0,
  absolutePath = 1,
  relativePath = 2,
  extension = 3,
  size = 4,
  prettySize = 5,
  modifiedTime = 6,
  accessTime = 7,
  changeTime = 8,
  birthTime = 9,
  root = 10,
  dir = 11,
  base = 12,
  ext = 13,
  name = 14,
  relativeDirectory = 15,
  dev = 16,
  mode = 17,
  nlink = 18,
  uid = 19,
  gid = 20,
  rdev = 21,
  ino = 22,
  atimeMs = 23,
  mtimeMs = 24,
  ctimeMs = 25,
  atime = 26,
  mtime = 27,
  ctime = 28,
  birthtime = 29,
  birthtimeMs = 30,
  blksize = 31,
  blocks = 32,
  publicURL = 33,
  childrenImageSharp = 34,
  childrenImageSharp___fixed___base64 = 35,
  childrenImageSharp___fixed___tracedSVG = 36,
  childrenImageSharp___fixed___aspectRatio = 37,
  childrenImageSharp___fixed___width = 38,
  childrenImageSharp___fixed___height = 39,
  childrenImageSharp___fixed___src = 40,
  childrenImageSharp___fixed___srcSet = 41,
  childrenImageSharp___fixed___srcWebp = 42,
  childrenImageSharp___fixed___srcSetWebp = 43,
  childrenImageSharp___fixed___originalName = 44,
  childrenImageSharp___resolutions___base64 = 45,
  childrenImageSharp___resolutions___tracedSVG = 46,
  childrenImageSharp___resolutions___aspectRatio = 47,
  childrenImageSharp___resolutions___width = 48,
  childrenImageSharp___resolutions___height = 49,
  childrenImageSharp___resolutions___src = 50,
  childrenImageSharp___resolutions___srcSet = 51,
  childrenImageSharp___resolutions___srcWebp = 52,
  childrenImageSharp___resolutions___srcSetWebp = 53,
  childrenImageSharp___resolutions___originalName = 54,
  childrenImageSharp___fluid___base64 = 55,
  childrenImageSharp___fluid___tracedSVG = 56,
  childrenImageSharp___fluid___aspectRatio = 57,
  childrenImageSharp___fluid___src = 58,
  childrenImageSharp___fluid___srcSet = 59,
  childrenImageSharp___fluid___srcWebp = 60,
  childrenImageSharp___fluid___srcSetWebp = 61,
  childrenImageSharp___fluid___sizes = 62,
  childrenImageSharp___fluid___originalImg = 63,
  childrenImageSharp___fluid___originalName = 64,
  childrenImageSharp___fluid___presentationWidth = 65,
  childrenImageSharp___fluid___presentationHeight = 66,
  childrenImageSharp___sizes___base64 = 67,
  childrenImageSharp___sizes___tracedSVG = 68,
  childrenImageSharp___sizes___aspectRatio = 69,
  childrenImageSharp___sizes___src = 70,
  childrenImageSharp___sizes___srcSet = 71,
  childrenImageSharp___sizes___srcWebp = 72,
  childrenImageSharp___sizes___srcSetWebp = 73,
  childrenImageSharp___sizes___sizes = 74,
  childrenImageSharp___sizes___originalImg = 75,
  childrenImageSharp___sizes___originalName = 76,
  childrenImageSharp___sizes___presentationWidth = 77,
  childrenImageSharp___sizes___presentationHeight = 78,
  childrenImageSharp___gatsbyImageData = 79,
  childrenImageSharp___original___width = 80,
  childrenImageSharp___original___height = 81,
  childrenImageSharp___original___src = 82,
  childrenImageSharp___resize___src = 83,
  childrenImageSharp___resize___tracedSVG = 84,
  childrenImageSharp___resize___width = 85,
  childrenImageSharp___resize___height = 86,
  childrenImageSharp___resize___aspectRatio = 87,
  childrenImageSharp___resize___originalName = 88,
  childrenImageSharp___id = 89,
  childrenImageSharp___parent___id = 90,
  childrenImageSharp___parent___parent___id = 91,
  childrenImageSharp___parent___parent___children = 92,
  childrenImageSharp___parent___children = 93,
  childrenImageSharp___parent___children___id = 94,
  childrenImageSharp___parent___children___children = 95,
  childrenImageSharp___parent___internal___content = 96,
  childrenImageSharp___parent___internal___contentDigest = 97,
  childrenImageSharp___parent___internal___description = 98,
  childrenImageSharp___parent___internal___fieldOwners = 99,
  childrenImageSharp___parent___internal___ignoreType = 100,
  childrenImageSharp___parent___internal___mediaType = 101,
  childrenImageSharp___parent___internal___owner = 102,
  childrenImageSharp___parent___internal___type = 103,
  childrenImageSharp___children = 104,
  childrenImageSharp___children___id = 105,
  childrenImageSharp___children___parent___id = 106,
  childrenImageSharp___children___parent___children = 107,
  childrenImageSharp___children___children = 108,
  childrenImageSharp___children___children___id = 109,
  childrenImageSharp___children___children___children = 110,
  childrenImageSharp___children___internal___content = 111,
  childrenImageSharp___children___internal___contentDigest = 112,
  childrenImageSharp___children___internal___description = 113,
  childrenImageSharp___children___internal___fieldOwners = 114,
  childrenImageSharp___children___internal___ignoreType = 115,
  childrenImageSharp___children___internal___mediaType = 116,
  childrenImageSharp___children___internal___owner = 117,
  childrenImageSharp___children___internal___type = 118,
  childrenImageSharp___internal___content = 119,
  childrenImageSharp___internal___contentDigest = 120,
  childrenImageSharp___internal___description = 121,
  childrenImageSharp___internal___fieldOwners = 122,
  childrenImageSharp___internal___ignoreType = 123,
  childrenImageSharp___internal___mediaType = 124,
  childrenImageSharp___internal___owner = 125,
  childrenImageSharp___internal___type = 126,
  childImageSharp___fixed___base64 = 127,
  childImageSharp___fixed___tracedSVG = 128,
  childImageSharp___fixed___aspectRatio = 129,
  childImageSharp___fixed___width = 130,
  childImageSharp___fixed___height = 131,
  childImageSharp___fixed___src = 132,
  childImageSharp___fixed___srcSet = 133,
  childImageSharp___fixed___srcWebp = 134,
  childImageSharp___fixed___srcSetWebp = 135,
  childImageSharp___fixed___originalName = 136,
  childImageSharp___resolutions___base64 = 137,
  childImageSharp___resolutions___tracedSVG = 138,
  childImageSharp___resolutions___aspectRatio = 139,
  childImageSharp___resolutions___width = 140,
  childImageSharp___resolutions___height = 141,
  childImageSharp___resolutions___src = 142,
  childImageSharp___resolutions___srcSet = 143,
  childImageSharp___resolutions___srcWebp = 144,
  childImageSharp___resolutions___srcSetWebp = 145,
  childImageSharp___resolutions___originalName = 146,
  childImageSharp___fluid___base64 = 147,
  childImageSharp___fluid___tracedSVG = 148,
  childImageSharp___fluid___aspectRatio = 149,
  childImageSharp___fluid___src = 150,
  childImageSharp___fluid___srcSet = 151,
  childImageSharp___fluid___srcWebp = 152,
  childImageSharp___fluid___srcSetWebp = 153,
  childImageSharp___fluid___sizes = 154,
  childImageSharp___fluid___originalImg = 155,
  childImageSharp___fluid___originalName = 156,
  childImageSharp___fluid___presentationWidth = 157,
  childImageSharp___fluid___presentationHeight = 158,
  childImageSharp___sizes___base64 = 159,
  childImageSharp___sizes___tracedSVG = 160,
  childImageSharp___sizes___aspectRatio = 161,
  childImageSharp___sizes___src = 162,
  childImageSharp___sizes___srcSet = 163,
  childImageSharp___sizes___srcWebp = 164,
  childImageSharp___sizes___srcSetWebp = 165,
  childImageSharp___sizes___sizes = 166,
  childImageSharp___sizes___originalImg = 167,
  childImageSharp___sizes___originalName = 168,
  childImageSharp___sizes___presentationWidth = 169,
  childImageSharp___sizes___presentationHeight = 170,
  childImageSharp___gatsbyImageData = 171,
  childImageSharp___original___width = 172,
  childImageSharp___original___height = 173,
  childImageSharp___original___src = 174,
  childImageSharp___resize___src = 175,
  childImageSharp___resize___tracedSVG = 176,
  childImageSharp___resize___width = 177,
  childImageSharp___resize___height = 178,
  childImageSharp___resize___aspectRatio = 179,
  childImageSharp___resize___originalName = 180,
  childImageSharp___id = 181,
  childImageSharp___parent___id = 182,
  childImageSharp___parent___parent___id = 183,
  childImageSharp___parent___parent___children = 184,
  childImageSharp___parent___children = 185,
  childImageSharp___parent___children___id = 186,
  childImageSharp___parent___children___children = 187,
  childImageSharp___parent___internal___content = 188,
  childImageSharp___parent___internal___contentDigest = 189,
  childImageSharp___parent___internal___description = 190,
  childImageSharp___parent___internal___fieldOwners = 191,
  childImageSharp___parent___internal___ignoreType = 192,
  childImageSharp___parent___internal___mediaType = 193,
  childImageSharp___parent___internal___owner = 194,
  childImageSharp___parent___internal___type = 195,
  childImageSharp___children = 196,
  childImageSharp___children___id = 197,
  childImageSharp___children___parent___id = 198,
  childImageSharp___children___parent___children = 199,
  childImageSharp___children___children = 200,
  childImageSharp___children___children___id = 201,
  childImageSharp___children___children___children = 202,
  childImageSharp___children___internal___content = 203,
  childImageSharp___children___internal___contentDigest = 204,
  childImageSharp___children___internal___description = 205,
  childImageSharp___children___internal___fieldOwners = 206,
  childImageSharp___children___internal___ignoreType = 207,
  childImageSharp___children___internal___mediaType = 208,
  childImageSharp___children___internal___owner = 209,
  childImageSharp___children___internal___type = 210,
  childImageSharp___internal___content = 211,
  childImageSharp___internal___contentDigest = 212,
  childImageSharp___internal___description = 213,
  childImageSharp___internal___fieldOwners = 214,
  childImageSharp___internal___ignoreType = 215,
  childImageSharp___internal___mediaType = 216,
  childImageSharp___internal___owner = 217,
  childImageSharp___internal___type = 218,
  childrenMarkdownRemark = 219,
  childrenMarkdownRemark___id = 220,
  childrenMarkdownRemark___frontmatter___title = 221,
  childrenMarkdownRemark___frontmatter___category = 222,
  childrenMarkdownRemark___frontmatter___photo___sourceInstanceName = 223,
  childrenMarkdownRemark___frontmatter___photo___absolutePath = 224,
  childrenMarkdownRemark___frontmatter___photo___relativePath = 225,
  childrenMarkdownRemark___frontmatter___photo___extension = 226,
  childrenMarkdownRemark___frontmatter___photo___size = 227,
  childrenMarkdownRemark___frontmatter___photo___prettySize = 228,
  childrenMarkdownRemark___frontmatter___photo___modifiedTime = 229,
  childrenMarkdownRemark___frontmatter___photo___accessTime = 230,
  childrenMarkdownRemark___frontmatter___photo___changeTime = 231,
  childrenMarkdownRemark___frontmatter___photo___birthTime = 232,
  childrenMarkdownRemark___frontmatter___photo___root = 233,
  childrenMarkdownRemark___frontmatter___photo___dir = 234,
  childrenMarkdownRemark___frontmatter___photo___base = 235,
  childrenMarkdownRemark___frontmatter___photo___ext = 236,
  childrenMarkdownRemark___frontmatter___photo___name = 237,
  childrenMarkdownRemark___frontmatter___photo___relativeDirectory = 238,
  childrenMarkdownRemark___frontmatter___photo___dev = 239,
  childrenMarkdownRemark___frontmatter___photo___mode = 240,
  childrenMarkdownRemark___frontmatter___photo___nlink = 241,
  childrenMarkdownRemark___frontmatter___photo___uid = 242,
  childrenMarkdownRemark___frontmatter___photo___gid = 243,
  childrenMarkdownRemark___frontmatter___photo___rdev = 244,
  childrenMarkdownRemark___frontmatter___photo___ino = 245,
  childrenMarkdownRemark___frontmatter___photo___atimeMs = 246,
  childrenMarkdownRemark___frontmatter___photo___mtimeMs = 247,
  childrenMarkdownRemark___frontmatter___photo___ctimeMs = 248,
  childrenMarkdownRemark___frontmatter___photo___atime = 249,
  childrenMarkdownRemark___frontmatter___photo___mtime = 250,
  childrenMarkdownRemark___frontmatter___photo___ctime = 251,
  childrenMarkdownRemark___frontmatter___photo___birthtime = 252,
  childrenMarkdownRemark___frontmatter___photo___birthtimeMs = 253,
  childrenMarkdownRemark___frontmatter___photo___blksize = 254,
  childrenMarkdownRemark___frontmatter___photo___blocks = 255,
  childrenMarkdownRemark___frontmatter___photo___publicURL = 256,
  childrenMarkdownRemark___frontmatter___photo___childrenImageSharp = 257,
  childrenMarkdownRemark___frontmatter___photo___childrenMarkdownRemark = 258,
  childrenMarkdownRemark___frontmatter___photo___id = 259,
  childrenMarkdownRemark___frontmatter___photo___children = 260,
  childrenMarkdownRemark___frontmatter___date = 261,
  childrenMarkdownRemark___frontmatter___tags = 262,
  childrenMarkdownRemark___excerpt = 263,
  childrenMarkdownRemark___rawMarkdownBody = 264,
  childrenMarkdownRemark___fileAbsolutePath = 265,
  childrenMarkdownRemark___fields___language = 266,
  childrenMarkdownRemark___fields___filename = 267,
  childrenMarkdownRemark___fields___kind = 268,
  childrenMarkdownRemark___fields___slug = 269,
  childrenMarkdownRemark___fields___path = 270,
  childrenMarkdownRemark___fields___publishedAt = 271,
  childrenMarkdownRemark___fields___modifiedAt = 272,
  childrenMarkdownRemark___fields___tags = 273,
  childrenMarkdownRemark___fields___tags___value = 274,
  childrenMarkdownRemark___fields___tags___translation = 275,
  childrenMarkdownRemark___fields___tags___path = 276,
  childrenMarkdownRemark___html = 277,
  childrenMarkdownRemark___htmlAst = 278,
  childrenMarkdownRemark___excerptAst = 279,
  childrenMarkdownRemark___headings = 280,
  childrenMarkdownRemark___headings___id = 281,
  childrenMarkdownRemark___headings___value = 282,
  childrenMarkdownRemark___headings___depth = 283,
  childrenMarkdownRemark___timeToRead = 284,
  childrenMarkdownRemark___tableOfContents = 285,
  childrenMarkdownRemark___wordCount___paragraphs = 286,
  childrenMarkdownRemark___wordCount___sentences = 287,
  childrenMarkdownRemark___wordCount___words = 288,
  childrenMarkdownRemark___parent___id = 289,
  childrenMarkdownRemark___parent___parent___id = 290,
  childrenMarkdownRemark___parent___parent___children = 291,
  childrenMarkdownRemark___parent___children = 292,
  childrenMarkdownRemark___parent___children___id = 293,
  childrenMarkdownRemark___parent___children___children = 294,
  childrenMarkdownRemark___parent___internal___content = 295,
  childrenMarkdownRemark___parent___internal___contentDigest = 296,
  childrenMarkdownRemark___parent___internal___description = 297,
  childrenMarkdownRemark___parent___internal___fieldOwners = 298,
  childrenMarkdownRemark___parent___internal___ignoreType = 299,
  childrenMarkdownRemark___parent___internal___mediaType = 300,
  childrenMarkdownRemark___parent___internal___owner = 301,
  childrenMarkdownRemark___parent___internal___type = 302,
  childrenMarkdownRemark___children = 303,
  childrenMarkdownRemark___children___id = 304,
  childrenMarkdownRemark___children___parent___id = 305,
  childrenMarkdownRemark___children___parent___children = 306,
  childrenMarkdownRemark___children___children = 307,
  childrenMarkdownRemark___children___children___id = 308,
  childrenMarkdownRemark___children___children___children = 309,
  childrenMarkdownRemark___children___internal___content = 310,
  childrenMarkdownRemark___children___internal___contentDigest = 311,
  childrenMarkdownRemark___children___internal___description = 312,
  childrenMarkdownRemark___children___internal___fieldOwners = 313,
  childrenMarkdownRemark___children___internal___ignoreType = 314,
  childrenMarkdownRemark___children___internal___mediaType = 315,
  childrenMarkdownRemark___children___internal___owner = 316,
  childrenMarkdownRemark___children___internal___type = 317,
  childrenMarkdownRemark___internal___content = 318,
  childrenMarkdownRemark___internal___contentDigest = 319,
  childrenMarkdownRemark___internal___description = 320,
  childrenMarkdownRemark___internal___fieldOwners = 321,
  childrenMarkdownRemark___internal___ignoreType = 322,
  childrenMarkdownRemark___internal___mediaType = 323,
  childrenMarkdownRemark___internal___owner = 324,
  childrenMarkdownRemark___internal___type = 325,
  childMarkdownRemark___id = 326,
  childMarkdownRemark___frontmatter___title = 327,
  childMarkdownRemark___frontmatter___category = 328,
  childMarkdownRemark___frontmatter___photo___sourceInstanceName = 329,
  childMarkdownRemark___frontmatter___photo___absolutePath = 330,
  childMarkdownRemark___frontmatter___photo___relativePath = 331,
  childMarkdownRemark___frontmatter___photo___extension = 332,
  childMarkdownRemark___frontmatter___photo___size = 333,
  childMarkdownRemark___frontmatter___photo___prettySize = 334,
  childMarkdownRemark___frontmatter___photo___modifiedTime = 335,
  childMarkdownRemark___frontmatter___photo___accessTime = 336,
  childMarkdownRemark___frontmatter___photo___changeTime = 337,
  childMarkdownRemark___frontmatter___photo___birthTime = 338,
  childMarkdownRemark___frontmatter___photo___root = 339,
  childMarkdownRemark___frontmatter___photo___dir = 340,
  childMarkdownRemark___frontmatter___photo___base = 341,
  childMarkdownRemark___frontmatter___photo___ext = 342,
  childMarkdownRemark___frontmatter___photo___name = 343,
  childMarkdownRemark___frontmatter___photo___relativeDirectory = 344,
  childMarkdownRemark___frontmatter___photo___dev = 345,
  childMarkdownRemark___frontmatter___photo___mode = 346,
  childMarkdownRemark___frontmatter___photo___nlink = 347,
  childMarkdownRemark___frontmatter___photo___uid = 348,
  childMarkdownRemark___frontmatter___photo___gid = 349,
  childMarkdownRemark___frontmatter___photo___rdev = 350,
  childMarkdownRemark___frontmatter___photo___ino = 351,
  childMarkdownRemark___frontmatter___photo___atimeMs = 352,
  childMarkdownRemark___frontmatter___photo___mtimeMs = 353,
  childMarkdownRemark___frontmatter___photo___ctimeMs = 354,
  childMarkdownRemark___frontmatter___photo___atime = 355,
  childMarkdownRemark___frontmatter___photo___mtime = 356,
  childMarkdownRemark___frontmatter___photo___ctime = 357,
  childMarkdownRemark___frontmatter___photo___birthtime = 358,
  childMarkdownRemark___frontmatter___photo___birthtimeMs = 359,
  childMarkdownRemark___frontmatter___photo___blksize = 360,
  childMarkdownRemark___frontmatter___photo___blocks = 361,
  childMarkdownRemark___frontmatter___photo___publicURL = 362,
  childMarkdownRemark___frontmatter___photo___childrenImageSharp = 363,
  childMarkdownRemark___frontmatter___photo___childrenMarkdownRemark = 364,
  childMarkdownRemark___frontmatter___photo___id = 365,
  childMarkdownRemark___frontmatter___photo___children = 366,
  childMarkdownRemark___frontmatter___date = 367,
  childMarkdownRemark___frontmatter___tags = 368,
  childMarkdownRemark___excerpt = 369,
  childMarkdownRemark___rawMarkdownBody = 370,
  childMarkdownRemark___fileAbsolutePath = 371,
  childMarkdownRemark___fields___language = 372,
  childMarkdownRemark___fields___filename = 373,
  childMarkdownRemark___fields___kind = 374,
  childMarkdownRemark___fields___slug = 375,
  childMarkdownRemark___fields___path = 376,
  childMarkdownRemark___fields___publishedAt = 377,
  childMarkdownRemark___fields___modifiedAt = 378,
  childMarkdownRemark___fields___tags = 379,
  childMarkdownRemark___fields___tags___value = 380,
  childMarkdownRemark___fields___tags___translation = 381,
  childMarkdownRemark___fields___tags___path = 382,
  childMarkdownRemark___html = 383,
  childMarkdownRemark___htmlAst = 384,
  childMarkdownRemark___excerptAst = 385,
  childMarkdownRemark___headings = 386,
  childMarkdownRemark___headings___id = 387,
  childMarkdownRemark___headings___value = 388,
  childMarkdownRemark___headings___depth = 389,
  childMarkdownRemark___timeToRead = 390,
  childMarkdownRemark___tableOfContents = 391,
  childMarkdownRemark___wordCount___paragraphs = 392,
  childMarkdownRemark___wordCount___sentences = 393,
  childMarkdownRemark___wordCount___words = 394,
  childMarkdownRemark___parent___id = 395,
  childMarkdownRemark___parent___parent___id = 396,
  childMarkdownRemark___parent___parent___children = 397,
  childMarkdownRemark___parent___children = 398,
  childMarkdownRemark___parent___children___id = 399,
  childMarkdownRemark___parent___children___children = 400,
  childMarkdownRemark___parent___internal___content = 401,
  childMarkdownRemark___parent___internal___contentDigest = 402,
  childMarkdownRemark___parent___internal___description = 403,
  childMarkdownRemark___parent___internal___fieldOwners = 404,
  childMarkdownRemark___parent___internal___ignoreType = 405,
  childMarkdownRemark___parent___internal___mediaType = 406,
  childMarkdownRemark___parent___internal___owner = 407,
  childMarkdownRemark___parent___internal___type = 408,
  childMarkdownRemark___children = 409,
  childMarkdownRemark___children___id = 410,
  childMarkdownRemark___children___parent___id = 411,
  childMarkdownRemark___children___parent___children = 412,
  childMarkdownRemark___children___children = 413,
  childMarkdownRemark___children___children___id = 414,
  childMarkdownRemark___children___children___children = 415,
  childMarkdownRemark___children___internal___content = 416,
  childMarkdownRemark___children___internal___contentDigest = 417,
  childMarkdownRemark___children___internal___description = 418,
  childMarkdownRemark___children___internal___fieldOwners = 419,
  childMarkdownRemark___children___internal___ignoreType = 420,
  childMarkdownRemark___children___internal___mediaType = 421,
  childMarkdownRemark___children___internal___owner = 422,
  childMarkdownRemark___children___internal___type = 423,
  childMarkdownRemark___internal___content = 424,
  childMarkdownRemark___internal___contentDigest = 425,
  childMarkdownRemark___internal___description = 426,
  childMarkdownRemark___internal___fieldOwners = 427,
  childMarkdownRemark___internal___ignoreType = 428,
  childMarkdownRemark___internal___mediaType = 429,
  childMarkdownRemark___internal___owner = 430,
  childMarkdownRemark___internal___type = 431,
  id = 432,
  parent___id = 433,
  parent___parent___id = 434,
  parent___parent___parent___id = 435,
  parent___parent___parent___children = 436,
  parent___parent___children = 437,
  parent___parent___children___id = 438,
  parent___parent___children___children = 439,
  parent___parent___internal___content = 440,
  parent___parent___internal___contentDigest = 441,
  parent___parent___internal___description = 442,
  parent___parent___internal___fieldOwners = 443,
  parent___parent___internal___ignoreType = 444,
  parent___parent___internal___mediaType = 445,
  parent___parent___internal___owner = 446,
  parent___parent___internal___type = 447,
  parent___children = 448,
  parent___children___id = 449,
  parent___children___parent___id = 450,
  parent___children___parent___children = 451,
  parent___children___children = 452,
  parent___children___children___id = 453,
  parent___children___children___children = 454,
  parent___children___internal___content = 455,
  parent___children___internal___contentDigest = 456,
  parent___children___internal___description = 457,
  parent___children___internal___fieldOwners = 458,
  parent___children___internal___ignoreType = 459,
  parent___children___internal___mediaType = 460,
  parent___children___internal___owner = 461,
  parent___children___internal___type = 462,
  parent___internal___content = 463,
  parent___internal___contentDigest = 464,
  parent___internal___description = 465,
  parent___internal___fieldOwners = 466,
  parent___internal___ignoreType = 467,
  parent___internal___mediaType = 468,
  parent___internal___owner = 469,
  parent___internal___type = 470,
  children = 471,
  children___id = 472,
  children___parent___id = 473,
  children___parent___parent___id = 474,
  children___parent___parent___children = 475,
  children___parent___children = 476,
  children___parent___children___id = 477,
  children___parent___children___children = 478,
  children___parent___internal___content = 479,
  children___parent___internal___contentDigest = 480,
  children___parent___internal___description = 481,
  children___parent___internal___fieldOwners = 482,
  children___parent___internal___ignoreType = 483,
  children___parent___internal___mediaType = 484,
  children___parent___internal___owner = 485,
  children___parent___internal___type = 486,
  children___children = 487,
  children___children___id = 488,
  children___children___parent___id = 489,
  children___children___parent___children = 490,
  children___children___children = 491,
  children___children___children___id = 492,
  children___children___children___children = 493,
  children___children___internal___content = 494,
  children___children___internal___contentDigest = 495,
  children___children___internal___description = 496,
  children___children___internal___fieldOwners = 497,
  children___children___internal___ignoreType = 498,
  children___children___internal___mediaType = 499,
  children___children___internal___owner = 500,
  children___children___internal___type = 501,
  children___internal___content = 502,
  children___internal___contentDigest = 503,
  children___internal___description = 504,
  children___internal___fieldOwners = 505,
  children___internal___ignoreType = 506,
  children___internal___mediaType = 507,
  children___internal___owner = 508,
  children___internal___type = 509,
  internal___content = 510,
  internal___contentDigest = 511,
  internal___description = 512,
  internal___fieldOwners = 513,
  internal___ignoreType = 514,
  internal___mediaType = 515,
  internal___owner = 516,
  internal___type = 517
}

export type FileFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>;
  ne: Maybe<Scalars['Float']>;
  gt: Maybe<Scalars['Float']>;
  gte: Maybe<Scalars['Float']>;
  lt: Maybe<Scalars['Float']>;
  lte: Maybe<Scalars['Float']>;
  in: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 2,
  EAST = 3,
  SOUTHEAST = 4,
  SOUTH = 5,
  SOUTHWEST = 6,
  WEST = 7,
  NORTHWEST = 8,
  ENTROPY = 9,
  ATTENTION = 10
}

export enum ImageFit {
  COVER = 0,
  CONTAIN = 1,
  FILL = 2,
  INSIDE = 3,
  OUTSIDE = 4
}

export enum ImageFormat {
  NO_CHANGE = 0,
  AUTO = 1,
  JPG = 2,
  PNG = 3,
  WEBP = 4,
  AVIF = 5
}

export enum ImageLayout {
  FIXED = 0,
  FLUID = 1,
  CONSTRAINED = 2
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 0,
  TRACED_SVG = 1,
  BLURRED = 2,
  NONE = 3
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions: Maybe<ImageSharpResolutions>;
  fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original: Maybe<ImageSharpOriginal>;
  resize: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JpgOptions>;
  pngOptions: Maybe<PngOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AvifOptions>;
  transformOptions: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 0,
  fixed___tracedSVG = 1,
  fixed___aspectRatio = 2,
  fixed___width = 3,
  fixed___height = 4,
  fixed___src = 5,
  fixed___srcSet = 6,
  fixed___srcWebp = 7,
  fixed___srcSetWebp = 8,
  fixed___originalName = 9,
  resolutions___base64 = 10,
  resolutions___tracedSVG = 11,
  resolutions___aspectRatio = 12,
  resolutions___width = 13,
  resolutions___height = 14,
  resolutions___src = 15,
  resolutions___srcSet = 16,
  resolutions___srcWebp = 17,
  resolutions___srcSetWebp = 18,
  resolutions___originalName = 19,
  fluid___base64 = 20,
  fluid___tracedSVG = 21,
  fluid___aspectRatio = 22,
  fluid___src = 23,
  fluid___srcSet = 24,
  fluid___srcWebp = 25,
  fluid___srcSetWebp = 26,
  fluid___sizes = 27,
  fluid___originalImg = 28,
  fluid___originalName = 29,
  fluid___presentationWidth = 30,
  fluid___presentationHeight = 31,
  sizes___base64 = 32,
  sizes___tracedSVG = 33,
  sizes___aspectRatio = 34,
  sizes___src = 35,
  sizes___srcSet = 36,
  sizes___srcWebp = 37,
  sizes___srcSetWebp = 38,
  sizes___sizes = 39,
  sizes___originalImg = 40,
  sizes___originalName = 41,
  sizes___presentationWidth = 42,
  sizes___presentationHeight = 43,
  gatsbyImageData = 44,
  original___width = 45,
  original___height = 46,
  original___src = 47,
  resize___src = 48,
  resize___tracedSVG = 49,
  resize___width = 50,
  resize___height = 51,
  resize___aspectRatio = 52,
  resize___originalName = 53,
  id = 54,
  parent___id = 55,
  parent___parent___id = 56,
  parent___parent___parent___id = 57,
  parent___parent___parent___children = 58,
  parent___parent___children = 59,
  parent___parent___children___id = 60,
  parent___parent___children___children = 61,
  parent___parent___internal___content = 62,
  parent___parent___internal___contentDigest = 63,
  parent___parent___internal___description = 64,
  parent___parent___internal___fieldOwners = 65,
  parent___parent___internal___ignoreType = 66,
  parent___parent___internal___mediaType = 67,
  parent___parent___internal___owner = 68,
  parent___parent___internal___type = 69,
  parent___children = 70,
  parent___children___id = 71,
  parent___children___parent___id = 72,
  parent___children___parent___children = 73,
  parent___children___children = 74,
  parent___children___children___id = 75,
  parent___children___children___children = 76,
  parent___children___internal___content = 77,
  parent___children___internal___contentDigest = 78,
  parent___children___internal___description = 79,
  parent___children___internal___fieldOwners = 80,
  parent___children___internal___ignoreType = 81,
  parent___children___internal___mediaType = 82,
  parent___children___internal___owner = 83,
  parent___children___internal___type = 84,
  parent___internal___content = 85,
  parent___internal___contentDigest = 86,
  parent___internal___description = 87,
  parent___internal___fieldOwners = 88,
  parent___internal___ignoreType = 89,
  parent___internal___mediaType = 90,
  parent___internal___owner = 91,
  parent___internal___type = 92,
  children = 93,
  children___id = 94,
  children___parent___id = 95,
  children___parent___parent___id = 96,
  children___parent___parent___children = 97,
  children___parent___children = 98,
  children___parent___children___id = 99,
  children___parent___children___children = 100,
  children___parent___internal___content = 101,
  children___parent___internal___contentDigest = 102,
  children___parent___internal___description = 103,
  children___parent___internal___fieldOwners = 104,
  children___parent___internal___ignoreType = 105,
  children___parent___internal___mediaType = 106,
  children___parent___internal___owner = 107,
  children___parent___internal___type = 108,
  children___children = 109,
  children___children___id = 110,
  children___children___parent___id = 111,
  children___children___parent___children = 112,
  children___children___children = 113,
  children___children___children___id = 114,
  children___children___children___children = 115,
  children___children___internal___content = 116,
  children___children___internal___contentDigest = 117,
  children___children___internal___description = 118,
  children___children___internal___fieldOwners = 119,
  children___children___internal___ignoreType = 120,
  children___children___internal___mediaType = 121,
  children___children___internal___owner = 122,
  children___children___internal___type = 123,
  children___internal___content = 124,
  children___internal___contentDigest = 125,
  children___internal___description = 126,
  children___internal___fieldOwners = 127,
  children___internal___ignoreType = 128,
  children___internal___mediaType = 129,
  children___internal___owner = 130,
  children___internal___type = 131,
  internal___content = 132,
  internal___contentDigest = 133,
  internal___description = 134,
  internal___fieldOwners = 135,
  internal___ignoreType = 136,
  internal___mediaType = 137,
  internal___owner = 138,
  internal___type = 139
}

export type ImageSharpFilterInput = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>;
  ne: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality: Maybe<Scalars['Int']>;
  progressive: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars['JSON']>;
  ne: Maybe<Scalars['JSON']>;
  in: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex: Maybe<Scalars['JSON']>;
  glob: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  PLAIN = 0,
  HTML = 1,
  MARKDOWN = 2
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  depth: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  value: Maybe<StringQueryOperatorInput>;
  depth: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  h1 = 0,
  h2 = 1,
  h3 = 2,
  h4 = 3,
  h5 = 4,
  h6 = 5
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  excerpt: Maybe<Scalars['String']>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  fileAbsolutePath: Maybe<Scalars['String']>;
  fields: Maybe<MarkdownRemarkFields>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  excerptAst: Maybe<Scalars['JSON']>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead: Maybe<Scalars['Int']>;
  tableOfContents: Maybe<Scalars['String']>;
  wordCount: Maybe<MarkdownWordCount>;
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  language: Maybe<Scalars['String']>;
  filename: Maybe<Scalars['String']>;
  kind: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['Date']>;
  modifiedAt: Maybe<Scalars['Date']>;
  tags: Maybe<Array<Maybe<MarkdownRemarkFieldsTags>>>;
};


export type MarkdownRemarkFieldsPublishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFieldsModifiedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  id = 0,
  frontmatter___title = 1,
  frontmatter___category = 2,
  frontmatter___photo___sourceInstanceName = 3,
  frontmatter___photo___absolutePath = 4,
  frontmatter___photo___relativePath = 5,
  frontmatter___photo___extension = 6,
  frontmatter___photo___size = 7,
  frontmatter___photo___prettySize = 8,
  frontmatter___photo___modifiedTime = 9,
  frontmatter___photo___accessTime = 10,
  frontmatter___photo___changeTime = 11,
  frontmatter___photo___birthTime = 12,
  frontmatter___photo___root = 13,
  frontmatter___photo___dir = 14,
  frontmatter___photo___base = 15,
  frontmatter___photo___ext = 16,
  frontmatter___photo___name = 17,
  frontmatter___photo___relativeDirectory = 18,
  frontmatter___photo___dev = 19,
  frontmatter___photo___mode = 20,
  frontmatter___photo___nlink = 21,
  frontmatter___photo___uid = 22,
  frontmatter___photo___gid = 23,
  frontmatter___photo___rdev = 24,
  frontmatter___photo___ino = 25,
  frontmatter___photo___atimeMs = 26,
  frontmatter___photo___mtimeMs = 27,
  frontmatter___photo___ctimeMs = 28,
  frontmatter___photo___atime = 29,
  frontmatter___photo___mtime = 30,
  frontmatter___photo___ctime = 31,
  frontmatter___photo___birthtime = 32,
  frontmatter___photo___birthtimeMs = 33,
  frontmatter___photo___blksize = 34,
  frontmatter___photo___blocks = 35,
  frontmatter___photo___publicURL = 36,
  frontmatter___photo___childrenImageSharp = 37,
  frontmatter___photo___childrenImageSharp___gatsbyImageData = 38,
  frontmatter___photo___childrenImageSharp___id = 39,
  frontmatter___photo___childrenImageSharp___children = 40,
  frontmatter___photo___childImageSharp___gatsbyImageData = 41,
  frontmatter___photo___childImageSharp___id = 42,
  frontmatter___photo___childImageSharp___children = 43,
  frontmatter___photo___childrenMarkdownRemark = 44,
  frontmatter___photo___childrenMarkdownRemark___id = 45,
  frontmatter___photo___childrenMarkdownRemark___excerpt = 46,
  frontmatter___photo___childrenMarkdownRemark___rawMarkdownBody = 47,
  frontmatter___photo___childrenMarkdownRemark___fileAbsolutePath = 48,
  frontmatter___photo___childrenMarkdownRemark___html = 49,
  frontmatter___photo___childrenMarkdownRemark___htmlAst = 50,
  frontmatter___photo___childrenMarkdownRemark___excerptAst = 51,
  frontmatter___photo___childrenMarkdownRemark___headings = 52,
  frontmatter___photo___childrenMarkdownRemark___timeToRead = 53,
  frontmatter___photo___childrenMarkdownRemark___tableOfContents = 54,
  frontmatter___photo___childrenMarkdownRemark___children = 55,
  frontmatter___photo___childMarkdownRemark___id = 56,
  frontmatter___photo___childMarkdownRemark___excerpt = 57,
  frontmatter___photo___childMarkdownRemark___rawMarkdownBody = 58,
  frontmatter___photo___childMarkdownRemark___fileAbsolutePath = 59,
  frontmatter___photo___childMarkdownRemark___html = 60,
  frontmatter___photo___childMarkdownRemark___htmlAst = 61,
  frontmatter___photo___childMarkdownRemark___excerptAst = 62,
  frontmatter___photo___childMarkdownRemark___headings = 63,
  frontmatter___photo___childMarkdownRemark___timeToRead = 64,
  frontmatter___photo___childMarkdownRemark___tableOfContents = 65,
  frontmatter___photo___childMarkdownRemark___children = 66,
  frontmatter___photo___id = 67,
  frontmatter___photo___parent___id = 68,
  frontmatter___photo___parent___children = 69,
  frontmatter___photo___children = 70,
  frontmatter___photo___children___id = 71,
  frontmatter___photo___children___children = 72,
  frontmatter___photo___internal___content = 73,
  frontmatter___photo___internal___contentDigest = 74,
  frontmatter___photo___internal___description = 75,
  frontmatter___photo___internal___fieldOwners = 76,
  frontmatter___photo___internal___ignoreType = 77,
  frontmatter___photo___internal___mediaType = 78,
  frontmatter___photo___internal___owner = 79,
  frontmatter___photo___internal___type = 80,
  frontmatter___date = 81,
  frontmatter___tags = 82,
  excerpt = 83,
  rawMarkdownBody = 84,
  fileAbsolutePath = 85,
  fields___language = 86,
  fields___filename = 87,
  fields___kind = 88,
  fields___slug = 89,
  fields___path = 90,
  fields___publishedAt = 91,
  fields___modifiedAt = 92,
  fields___tags = 93,
  fields___tags___value = 94,
  fields___tags___translation = 95,
  fields___tags___path = 96,
  html = 97,
  htmlAst = 98,
  excerptAst = 99,
  headings = 100,
  headings___id = 101,
  headings___value = 102,
  headings___depth = 103,
  timeToRead = 104,
  tableOfContents = 105,
  wordCount___paragraphs = 106,
  wordCount___sentences = 107,
  wordCount___words = 108,
  parent___id = 109,
  parent___parent___id = 110,
  parent___parent___parent___id = 111,
  parent___parent___parent___children = 112,
  parent___parent___children = 113,
  parent___parent___children___id = 114,
  parent___parent___children___children = 115,
  parent___parent___internal___content = 116,
  parent___parent___internal___contentDigest = 117,
  parent___parent___internal___description = 118,
  parent___parent___internal___fieldOwners = 119,
  parent___parent___internal___ignoreType = 120,
  parent___parent___internal___mediaType = 121,
  parent___parent___internal___owner = 122,
  parent___parent___internal___type = 123,
  parent___children = 124,
  parent___children___id = 125,
  parent___children___parent___id = 126,
  parent___children___parent___children = 127,
  parent___children___children = 128,
  parent___children___children___id = 129,
  parent___children___children___children = 130,
  parent___children___internal___content = 131,
  parent___children___internal___contentDigest = 132,
  parent___children___internal___description = 133,
  parent___children___internal___fieldOwners = 134,
  parent___children___internal___ignoreType = 135,
  parent___children___internal___mediaType = 136,
  parent___children___internal___owner = 137,
  parent___children___internal___type = 138,
  parent___internal___content = 139,
  parent___internal___contentDigest = 140,
  parent___internal___description = 141,
  parent___internal___fieldOwners = 142,
  parent___internal___ignoreType = 143,
  parent___internal___mediaType = 144,
  parent___internal___owner = 145,
  parent___internal___type = 146,
  children = 147,
  children___id = 148,
  children___parent___id = 149,
  children___parent___parent___id = 150,
  children___parent___parent___children = 151,
  children___parent___children = 152,
  children___parent___children___id = 153,
  children___parent___children___children = 154,
  children___parent___internal___content = 155,
  children___parent___internal___contentDigest = 156,
  children___parent___internal___description = 157,
  children___parent___internal___fieldOwners = 158,
  children___parent___internal___ignoreType = 159,
  children___parent___internal___mediaType = 160,
  children___parent___internal___owner = 161,
  children___parent___internal___type = 162,
  children___children = 163,
  children___children___id = 164,
  children___children___parent___id = 165,
  children___children___parent___children = 166,
  children___children___children = 167,
  children___children___children___id = 168,
  children___children___children___children = 169,
  children___children___internal___content = 170,
  children___children___internal___contentDigest = 171,
  children___children___internal___description = 172,
  children___children___internal___fieldOwners = 173,
  children___children___internal___ignoreType = 174,
  children___children___internal___mediaType = 175,
  children___children___internal___owner = 176,
  children___children___internal___type = 177,
  children___internal___content = 178,
  children___internal___contentDigest = 179,
  children___internal___description = 180,
  children___internal___fieldOwners = 181,
  children___internal___ignoreType = 182,
  children___internal___mediaType = 183,
  children___internal___owner = 184,
  children___internal___type = 185,
  internal___content = 186,
  internal___contentDigest = 187,
  internal___description = 188,
  internal___fieldOwners = 189,
  internal___ignoreType = 190,
  internal___mediaType = 191,
  internal___owner = 192,
  internal___type = 193
}

export type MarkdownRemarkFieldsFilterInput = {
  language: Maybe<StringQueryOperatorInput>;
  filename: Maybe<StringQueryOperatorInput>;
  kind: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  publishedAt: Maybe<DateQueryOperatorInput>;
  modifiedAt: Maybe<DateQueryOperatorInput>;
  tags: Maybe<MarkdownRemarkFieldsTagsFilterListInput>;
};

export type MarkdownRemarkFieldsTags = {
  __typename?: 'MarkdownRemarkFieldsTags';
  value: Maybe<Scalars['String']>;
  translation: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsTagsFilterInput = {
  value: Maybe<StringQueryOperatorInput>;
  translation: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFieldsTagsFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFieldsTagsFilterInput>;
};

export type MarkdownRemarkFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title: Maybe<Scalars['String']>;
  category: Maybe<Scalars['String']>;
  photo: Maybe<File>;
  date: Maybe<Scalars['Date']>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  category: Maybe<StringQueryOperatorInput>;
  photo: Maybe<FileFilterInput>;
  date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>;
  sentences: Maybe<IntQueryOperatorInput>;
  words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality: Maybe<Scalars['Int']>;
  compressionSpeed: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>;
  turdSize: Maybe<Scalars['Float']>;
  alphaMax: Maybe<Scalars['Float']>;
  optCurve: Maybe<Scalars['Boolean']>;
  optTolerance: Maybe<Scalars['Float']>;
  threshold: Maybe<Scalars['Int']>;
  blackOnWhite: Maybe<Scalars['Boolean']>;
  color: Maybe<Scalars['String']>;
  background: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 0,
  TURNPOLICY_WHITE = 1,
  TURNPOLICY_LEFT = 2,
  TURNPOLICY_RIGHT = 3,
  TURNPOLICY_MINORITY = 4,
  TURNPOLICY_MAJORITY = 5
}

export type Query = {
  __typename?: 'Query';
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime: Maybe<Scalars['Date']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars['Int']>;
  host: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  pathPrefix: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = 0,
  parent___id = 1,
  parent___parent___id = 2,
  parent___parent___parent___id = 3,
  parent___parent___parent___children = 4,
  parent___parent___children = 5,
  parent___parent___children___id = 6,
  parent___parent___children___children = 7,
  parent___parent___internal___content = 8,
  parent___parent___internal___contentDigest = 9,
  parent___parent___internal___description = 10,
  parent___parent___internal___fieldOwners = 11,
  parent___parent___internal___ignoreType = 12,
  parent___parent___internal___mediaType = 13,
  parent___parent___internal___owner = 14,
  parent___parent___internal___type = 15,
  parent___children = 16,
  parent___children___id = 17,
  parent___children___parent___id = 18,
  parent___children___parent___children = 19,
  parent___children___children = 20,
  parent___children___children___id = 21,
  parent___children___children___children = 22,
  parent___children___internal___content = 23,
  parent___children___internal___contentDigest = 24,
  parent___children___internal___description = 25,
  parent___children___internal___fieldOwners = 26,
  parent___children___internal___ignoreType = 27,
  parent___children___internal___mediaType = 28,
  parent___children___internal___owner = 29,
  parent___children___internal___type = 30,
  parent___internal___content = 31,
  parent___internal___contentDigest = 32,
  parent___internal___description = 33,
  parent___internal___fieldOwners = 34,
  parent___internal___ignoreType = 35,
  parent___internal___mediaType = 36,
  parent___internal___owner = 37,
  parent___internal___type = 38,
  children = 39,
  children___id = 40,
  children___parent___id = 41,
  children___parent___parent___id = 42,
  children___parent___parent___children = 43,
  children___parent___children = 44,
  children___parent___children___id = 45,
  children___parent___children___children = 46,
  children___parent___internal___content = 47,
  children___parent___internal___contentDigest = 48,
  children___parent___internal___description = 49,
  children___parent___internal___fieldOwners = 50,
  children___parent___internal___ignoreType = 51,
  children___parent___internal___mediaType = 52,
  children___parent___internal___owner = 53,
  children___parent___internal___type = 54,
  children___children = 55,
  children___children___id = 56,
  children___children___parent___id = 57,
  children___children___parent___children = 58,
  children___children___children = 59,
  children___children___children___id = 60,
  children___children___children___children = 61,
  children___children___internal___content = 62,
  children___children___internal___contentDigest = 63,
  children___children___internal___description = 64,
  children___children___internal___fieldOwners = 65,
  children___children___internal___ignoreType = 66,
  children___children___internal___mediaType = 67,
  children___children___internal___owner = 68,
  children___children___internal___type = 69,
  children___internal___content = 70,
  children___internal___contentDigest = 71,
  children___internal___description = 72,
  children___internal___fieldOwners = 73,
  children___internal___ignoreType = 74,
  children___internal___mediaType = 75,
  children___internal___owner = 76,
  children___internal___type = 77,
  internal___content = 78,
  internal___contentDigest = 79,
  internal___description = 80,
  internal___fieldOwners = 81,
  internal___ignoreType = 82,
  internal___mediaType = 83,
  internal___owner = 84,
  internal___type = 85,
  buildTime = 86
}

export type SiteBuildMetadataFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 0,
  siteMetadata___title = 1,
  siteMetadata___description = 2,
  siteMetadata___siteUrl = 3,
  siteMetadata___email = 4,
  siteMetadata___phone = 5,
  siteMetadata___mainNavigation = 6,
  siteMetadata___mainNavigation___title = 7,
  siteMetadata___mainNavigation___path = 8,
  port = 9,
  host = 10,
  polyfill = 11,
  pathPrefix = 12,
  id = 13,
  parent___id = 14,
  parent___parent___id = 15,
  parent___parent___parent___id = 16,
  parent___parent___parent___children = 17,
  parent___parent___children = 18,
  parent___parent___children___id = 19,
  parent___parent___children___children = 20,
  parent___parent___internal___content = 21,
  parent___parent___internal___contentDigest = 22,
  parent___parent___internal___description = 23,
  parent___parent___internal___fieldOwners = 24,
  parent___parent___internal___ignoreType = 25,
  parent___parent___internal___mediaType = 26,
  parent___parent___internal___owner = 27,
  parent___parent___internal___type = 28,
  parent___children = 29,
  parent___children___id = 30,
  parent___children___parent___id = 31,
  parent___children___parent___children = 32,
  parent___children___children = 33,
  parent___children___children___id = 34,
  parent___children___children___children = 35,
  parent___children___internal___content = 36,
  parent___children___internal___contentDigest = 37,
  parent___children___internal___description = 38,
  parent___children___internal___fieldOwners = 39,
  parent___children___internal___ignoreType = 40,
  parent___children___internal___mediaType = 41,
  parent___children___internal___owner = 42,
  parent___children___internal___type = 43,
  parent___internal___content = 44,
  parent___internal___contentDigest = 45,
  parent___internal___description = 46,
  parent___internal___fieldOwners = 47,
  parent___internal___ignoreType = 48,
  parent___internal___mediaType = 49,
  parent___internal___owner = 50,
  parent___internal___type = 51,
  children = 52,
  children___id = 53,
  children___parent___id = 54,
  children___parent___parent___id = 55,
  children___parent___parent___children = 56,
  children___parent___children = 57,
  children___parent___children___id = 58,
  children___parent___children___children = 59,
  children___parent___internal___content = 60,
  children___parent___internal___contentDigest = 61,
  children___parent___internal___description = 62,
  children___parent___internal___fieldOwners = 63,
  children___parent___internal___ignoreType = 64,
  children___parent___internal___mediaType = 65,
  children___parent___internal___owner = 66,
  children___parent___internal___type = 67,
  children___children = 68,
  children___children___id = 69,
  children___children___parent___id = 70,
  children___children___parent___children = 71,
  children___children___children = 72,
  children___children___children___id = 73,
  children___children___children___children = 74,
  children___children___internal___content = 75,
  children___children___internal___contentDigest = 76,
  children___children___internal___description = 77,
  children___children___internal___fieldOwners = 78,
  children___children___internal___ignoreType = 79,
  children___children___internal___mediaType = 80,
  children___children___internal___owner = 81,
  children___children___internal___type = 82,
  children___internal___content = 83,
  children___internal___contentDigest = 84,
  children___internal___description = 85,
  children___internal___fieldOwners = 86,
  children___internal___ignoreType = 87,
  children___internal___mediaType = 88,
  children___internal___owner = 89,
  children___internal___type = 90,
  internal___content = 91,
  internal___contentDigest = 92,
  internal___description = 93,
  internal___fieldOwners = 94,
  internal___ignoreType = 95,
  internal___mediaType = 96,
  internal___owner = 97,
  internal___type = 98
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  context: Maybe<SitePageContext>;
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
  componentPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  alternativeLanguagePaths: Maybe<Array<Maybe<SitePageContextAlternativeLanguagePaths>>>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  pageCount: Maybe<Scalars['Int']>;
  currentPage: Maybe<Scalars['Int']>;
  tag: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SitePageContextAlternativeLanguagePaths = {
  __typename?: 'SitePageContextAlternativeLanguagePaths';
  language: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
};

export type SitePageContextAlternativeLanguagePathsFilterInput = {
  language: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextAlternativeLanguagePathsFilterListInput = {
  elemMatch: Maybe<SitePageContextAlternativeLanguagePathsFilterInput>;
};

export type SitePageContextFilterInput = {
  slug: Maybe<StringQueryOperatorInput>;
  language: Maybe<StringQueryOperatorInput>;
  alternativeLanguagePaths: Maybe<SitePageContextAlternativeLanguagePathsFilterListInput>;
  limit: Maybe<IntQueryOperatorInput>;
  skip: Maybe<IntQueryOperatorInput>;
  pageCount: Maybe<IntQueryOperatorInput>;
  currentPage: Maybe<IntQueryOperatorInput>;
  tag: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 0,
  component = 1,
  internalComponentName = 2,
  componentChunkName = 3,
  matchPath = 4,
  isCreatedByStatefulCreatePages = 5,
  context___slug = 6,
  context___language = 7,
  context___alternativeLanguagePaths = 8,
  context___alternativeLanguagePaths___language = 9,
  context___alternativeLanguagePaths___path = 10,
  context___limit = 11,
  context___skip = 12,
  context___pageCount = 13,
  context___currentPage = 14,
  context___tag = 15,
  context___title = 16,
  pluginCreator___id = 17,
  pluginCreator___parent___id = 18,
  pluginCreator___parent___parent___id = 19,
  pluginCreator___parent___parent___children = 20,
  pluginCreator___parent___children = 21,
  pluginCreator___parent___children___id = 22,
  pluginCreator___parent___children___children = 23,
  pluginCreator___parent___internal___content = 24,
  pluginCreator___parent___internal___contentDigest = 25,
  pluginCreator___parent___internal___description = 26,
  pluginCreator___parent___internal___fieldOwners = 27,
  pluginCreator___parent___internal___ignoreType = 28,
  pluginCreator___parent___internal___mediaType = 29,
  pluginCreator___parent___internal___owner = 30,
  pluginCreator___parent___internal___type = 31,
  pluginCreator___children = 32,
  pluginCreator___children___id = 33,
  pluginCreator___children___parent___id = 34,
  pluginCreator___children___parent___children = 35,
  pluginCreator___children___children = 36,
  pluginCreator___children___children___id = 37,
  pluginCreator___children___children___children = 38,
  pluginCreator___children___internal___content = 39,
  pluginCreator___children___internal___contentDigest = 40,
  pluginCreator___children___internal___description = 41,
  pluginCreator___children___internal___fieldOwners = 42,
  pluginCreator___children___internal___ignoreType = 43,
  pluginCreator___children___internal___mediaType = 44,
  pluginCreator___children___internal___owner = 45,
  pluginCreator___children___internal___type = 46,
  pluginCreator___internal___content = 47,
  pluginCreator___internal___contentDigest = 48,
  pluginCreator___internal___description = 49,
  pluginCreator___internal___fieldOwners = 50,
  pluginCreator___internal___ignoreType = 51,
  pluginCreator___internal___mediaType = 52,
  pluginCreator___internal___owner = 53,
  pluginCreator___internal___type = 54,
  pluginCreator___resolve = 55,
  pluginCreator___name = 56,
  pluginCreator___version = 57,
  pluginCreator___pluginOptions___plugins = 58,
  pluginCreator___pluginOptions___plugins___resolve = 59,
  pluginCreator___pluginOptions___plugins___id = 60,
  pluginCreator___pluginOptions___plugins___name = 61,
  pluginCreator___pluginOptions___plugins___version = 62,
  pluginCreator___pluginOptions___plugins___nodeAPIs = 63,
  pluginCreator___pluginOptions___plugins___browserAPIs = 64,
  pluginCreator___pluginOptions___plugins___pluginFilepath = 65,
  pluginCreator___pluginOptions___name = 66,
  pluginCreator___pluginOptions___short_name = 67,
  pluginCreator___pluginOptions___start_url = 68,
  pluginCreator___pluginOptions___background_color = 69,
  pluginCreator___pluginOptions___theme_color = 70,
  pluginCreator___pluginOptions___display = 71,
  pluginCreator___pluginOptions___icon = 72,
  pluginCreator___pluginOptions___icons = 73,
  pluginCreator___pluginOptions___icons___src = 74,
  pluginCreator___pluginOptions___icons___sizes = 75,
  pluginCreator___pluginOptions___icons___type = 76,
  pluginCreator___pluginOptions___cache_busting_mode = 77,
  pluginCreator___pluginOptions___include_favicon = 78,
  pluginCreator___pluginOptions___legacy = 79,
  pluginCreator___pluginOptions___theme_color_in_head = 80,
  pluginCreator___pluginOptions___cacheDigest = 81,
  pluginCreator___pluginOptions___trackingIds = 82,
  pluginCreator___pluginOptions___gtagConfig___anonymize_ip = 83,
  pluginCreator___pluginOptions___gtagConfig___cookie_expires = 84,
  pluginCreator___pluginOptions___pluginConfig___head = 85,
  pluginCreator___pluginOptions___path = 86,
  pluginCreator___pluginOptions___maxWidth = 87,
  pluginCreator___pluginOptions___quality = 88,
  pluginCreator___pluginOptions___linkImagesToOriginal = 89,
  pluginCreator___pluginOptions___configDir = 90,
  pluginCreator___pluginOptions___tsNode = 91,
  pluginCreator___pluginOptions___pathCheck = 92,
  pluginCreator___pluginOptions___allExtensions = 93,
  pluginCreator___pluginOptions___isTSX = 94,
  pluginCreator___pluginOptions___jsxPragma = 95,
  pluginCreator___nodeAPIs = 96,
  pluginCreator___browserAPIs = 97,
  pluginCreator___ssrAPIs = 98,
  pluginCreator___pluginFilepath = 99,
  pluginCreator___packageJson___name = 100,
  pluginCreator___packageJson___description = 101,
  pluginCreator___packageJson___version = 102,
  pluginCreator___packageJson___main = 103,
  pluginCreator___packageJson___license = 104,
  pluginCreator___packageJson___dependencies = 105,
  pluginCreator___packageJson___dependencies___name = 106,
  pluginCreator___packageJson___dependencies___version = 107,
  pluginCreator___packageJson___devDependencies = 108,
  pluginCreator___packageJson___devDependencies___name = 109,
  pluginCreator___packageJson___devDependencies___version = 110,
  pluginCreator___packageJson___peerDependencies = 111,
  pluginCreator___packageJson___peerDependencies___name = 112,
  pluginCreator___packageJson___peerDependencies___version = 113,
  pluginCreator___packageJson___keywords = 114,
  pluginCreatorId = 115,
  componentPath = 116,
  id = 117,
  parent___id = 118,
  parent___parent___id = 119,
  parent___parent___parent___id = 120,
  parent___parent___parent___children = 121,
  parent___parent___children = 122,
  parent___parent___children___id = 123,
  parent___parent___children___children = 124,
  parent___parent___internal___content = 125,
  parent___parent___internal___contentDigest = 126,
  parent___parent___internal___description = 127,
  parent___parent___internal___fieldOwners = 128,
  parent___parent___internal___ignoreType = 129,
  parent___parent___internal___mediaType = 130,
  parent___parent___internal___owner = 131,
  parent___parent___internal___type = 132,
  parent___children = 133,
  parent___children___id = 134,
  parent___children___parent___id = 135,
  parent___children___parent___children = 136,
  parent___children___children = 137,
  parent___children___children___id = 138,
  parent___children___children___children = 139,
  parent___children___internal___content = 140,
  parent___children___internal___contentDigest = 141,
  parent___children___internal___description = 142,
  parent___children___internal___fieldOwners = 143,
  parent___children___internal___ignoreType = 144,
  parent___children___internal___mediaType = 145,
  parent___children___internal___owner = 146,
  parent___children___internal___type = 147,
  parent___internal___content = 148,
  parent___internal___contentDigest = 149,
  parent___internal___description = 150,
  parent___internal___fieldOwners = 151,
  parent___internal___ignoreType = 152,
  parent___internal___mediaType = 153,
  parent___internal___owner = 154,
  parent___internal___type = 155,
  children = 156,
  children___id = 157,
  children___parent___id = 158,
  children___parent___parent___id = 159,
  children___parent___parent___children = 160,
  children___parent___children = 161,
  children___parent___children___id = 162,
  children___parent___children___children = 163,
  children___parent___internal___content = 164,
  children___parent___internal___contentDigest = 165,
  children___parent___internal___description = 166,
  children___parent___internal___fieldOwners = 167,
  children___parent___internal___ignoreType = 168,
  children___parent___internal___mediaType = 169,
  children___parent___internal___owner = 170,
  children___parent___internal___type = 171,
  children___children = 172,
  children___children___id = 173,
  children___children___parent___id = 174,
  children___children___parent___children = 175,
  children___children___children = 176,
  children___children___children___id = 177,
  children___children___children___children = 178,
  children___children___internal___content = 179,
  children___children___internal___contentDigest = 180,
  children___children___internal___description = 181,
  children___children___internal___fieldOwners = 182,
  children___children___internal___ignoreType = 183,
  children___children___internal___mediaType = 184,
  children___children___internal___owner = 185,
  children___children___internal___type = 186,
  children___internal___content = 187,
  children___internal___contentDigest = 188,
  children___internal___description = 189,
  children___internal___fieldOwners = 190,
  children___internal___ignoreType = 191,
  children___internal___mediaType = 192,
  children___internal___owner = 193,
  children___internal___type = 194,
  internal___content = 195,
  internal___contentDigest = 196,
  internal___description = 197,
  internal___fieldOwners = 198,
  internal___ignoreType = 199,
  internal___mediaType = 200,
  internal___owner = 201,
  internal___type = 202
}

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
  packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 0,
  parent___id = 1,
  parent___parent___id = 2,
  parent___parent___parent___id = 3,
  parent___parent___parent___children = 4,
  parent___parent___children = 5,
  parent___parent___children___id = 6,
  parent___parent___children___children = 7,
  parent___parent___internal___content = 8,
  parent___parent___internal___contentDigest = 9,
  parent___parent___internal___description = 10,
  parent___parent___internal___fieldOwners = 11,
  parent___parent___internal___ignoreType = 12,
  parent___parent___internal___mediaType = 13,
  parent___parent___internal___owner = 14,
  parent___parent___internal___type = 15,
  parent___children = 16,
  parent___children___id = 17,
  parent___children___parent___id = 18,
  parent___children___parent___children = 19,
  parent___children___children = 20,
  parent___children___children___id = 21,
  parent___children___children___children = 22,
  parent___children___internal___content = 23,
  parent___children___internal___contentDigest = 24,
  parent___children___internal___description = 25,
  parent___children___internal___fieldOwners = 26,
  parent___children___internal___ignoreType = 27,
  parent___children___internal___mediaType = 28,
  parent___children___internal___owner = 29,
  parent___children___internal___type = 30,
  parent___internal___content = 31,
  parent___internal___contentDigest = 32,
  parent___internal___description = 33,
  parent___internal___fieldOwners = 34,
  parent___internal___ignoreType = 35,
  parent___internal___mediaType = 36,
  parent___internal___owner = 37,
  parent___internal___type = 38,
  children = 39,
  children___id = 40,
  children___parent___id = 41,
  children___parent___parent___id = 42,
  children___parent___parent___children = 43,
  children___parent___children = 44,
  children___parent___children___id = 45,
  children___parent___children___children = 46,
  children___parent___internal___content = 47,
  children___parent___internal___contentDigest = 48,
  children___parent___internal___description = 49,
  children___parent___internal___fieldOwners = 50,
  children___parent___internal___ignoreType = 51,
  children___parent___internal___mediaType = 52,
  children___parent___internal___owner = 53,
  children___parent___internal___type = 54,
  children___children = 55,
  children___children___id = 56,
  children___children___parent___id = 57,
  children___children___parent___children = 58,
  children___children___children = 59,
  children___children___children___id = 60,
  children___children___children___children = 61,
  children___children___internal___content = 62,
  children___children___internal___contentDigest = 63,
  children___children___internal___description = 64,
  children___children___internal___fieldOwners = 65,
  children___children___internal___ignoreType = 66,
  children___children___internal___mediaType = 67,
  children___children___internal___owner = 68,
  children___children___internal___type = 69,
  children___internal___content = 70,
  children___internal___contentDigest = 71,
  children___internal___description = 72,
  children___internal___fieldOwners = 73,
  children___internal___ignoreType = 74,
  children___internal___mediaType = 75,
  children___internal___owner = 76,
  children___internal___type = 77,
  internal___content = 78,
  internal___contentDigest = 79,
  internal___description = 80,
  internal___fieldOwners = 81,
  internal___ignoreType = 82,
  internal___mediaType = 83,
  internal___owner = 84,
  internal___type = 85,
  resolve = 86,
  name = 87,
  version = 88,
  pluginOptions___plugins = 89,
  pluginOptions___plugins___resolve = 90,
  pluginOptions___plugins___id = 91,
  pluginOptions___plugins___name = 92,
  pluginOptions___plugins___version = 93,
  pluginOptions___plugins___pluginOptions___maxWidth = 94,
  pluginOptions___plugins___pluginOptions___quality = 95,
  pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 96,
  pluginOptions___plugins___nodeAPIs = 97,
  pluginOptions___plugins___browserAPIs = 98,
  pluginOptions___plugins___pluginFilepath = 99,
  pluginOptions___name = 100,
  pluginOptions___short_name = 101,
  pluginOptions___start_url = 102,
  pluginOptions___background_color = 103,
  pluginOptions___theme_color = 104,
  pluginOptions___display = 105,
  pluginOptions___icon = 106,
  pluginOptions___icons = 107,
  pluginOptions___icons___src = 108,
  pluginOptions___icons___sizes = 109,
  pluginOptions___icons___type = 110,
  pluginOptions___cache_busting_mode = 111,
  pluginOptions___include_favicon = 112,
  pluginOptions___legacy = 113,
  pluginOptions___theme_color_in_head = 114,
  pluginOptions___cacheDigest = 115,
  pluginOptions___trackingIds = 116,
  pluginOptions___gtagConfig___anonymize_ip = 117,
  pluginOptions___gtagConfig___cookie_expires = 118,
  pluginOptions___pluginConfig___head = 119,
  pluginOptions___path = 120,
  pluginOptions___maxWidth = 121,
  pluginOptions___quality = 122,
  pluginOptions___linkImagesToOriginal = 123,
  pluginOptions___configDir = 124,
  pluginOptions___tsNode = 125,
  pluginOptions___pathCheck = 126,
  pluginOptions___allExtensions = 127,
  pluginOptions___isTSX = 128,
  pluginOptions___jsxPragma = 129,
  nodeAPIs = 130,
  browserAPIs = 131,
  ssrAPIs = 132,
  pluginFilepath = 133,
  packageJson___name = 134,
  packageJson___description = 135,
  packageJson___version = 136,
  packageJson___main = 137,
  packageJson___license = 138,
  packageJson___dependencies = 139,
  packageJson___dependencies___name = 140,
  packageJson___dependencies___version = 141,
  packageJson___devDependencies = 142,
  packageJson___devDependencies___name = 143,
  packageJson___devDependencies___version = 144,
  packageJson___peerDependencies = 145,
  packageJson___peerDependencies___name = 146,
  packageJson___peerDependencies___version = 147,
  packageJson___keywords = 148
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  main: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  main: Maybe<StringQueryOperatorInput>;
  license: Maybe<StringQueryOperatorInput>;
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  plugins: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  name: Maybe<Scalars['String']>;
  short_name: Maybe<Scalars['String']>;
  start_url: Maybe<Scalars['String']>;
  background_color: Maybe<Scalars['String']>;
  theme_color: Maybe<Scalars['String']>;
  display: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  icons: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  cache_busting_mode: Maybe<Scalars['String']>;
  include_favicon: Maybe<Scalars['Boolean']>;
  legacy: Maybe<Scalars['Boolean']>;
  theme_color_in_head: Maybe<Scalars['Boolean']>;
  cacheDigest: Maybe<Scalars['String']>;
  trackingIds: Maybe<Array<Maybe<Scalars['String']>>>;
  gtagConfig: Maybe<SitePluginPluginOptionsGtagConfig>;
  pluginConfig: Maybe<SitePluginPluginOptionsPluginConfig>;
  path: Maybe<Scalars['String']>;
  maxWidth: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  configDir: Maybe<Scalars['String']>;
  tsNode: Maybe<Scalars['Boolean']>;
  pathCheck: Maybe<Scalars['Boolean']>;
  allExtensions: Maybe<Scalars['Boolean']>;
  isTSX: Maybe<Scalars['Boolean']>;
  jsxPragma: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  name: Maybe<StringQueryOperatorInput>;
  short_name: Maybe<StringQueryOperatorInput>;
  start_url: Maybe<StringQueryOperatorInput>;
  background_color: Maybe<StringQueryOperatorInput>;
  theme_color: Maybe<StringQueryOperatorInput>;
  display: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  icons: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  cache_busting_mode: Maybe<StringQueryOperatorInput>;
  include_favicon: Maybe<BooleanQueryOperatorInput>;
  legacy: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  cacheDigest: Maybe<StringQueryOperatorInput>;
  trackingIds: Maybe<StringQueryOperatorInput>;
  gtagConfig: Maybe<SitePluginPluginOptionsGtagConfigFilterInput>;
  pluginConfig: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  maxWidth: Maybe<IntQueryOperatorInput>;
  quality: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  configDir: Maybe<StringQueryOperatorInput>;
  tsNode: Maybe<BooleanQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
  allExtensions: Maybe<BooleanQueryOperatorInput>;
  isTSX: Maybe<BooleanQueryOperatorInput>;
  jsxPragma: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGtagConfig = {
  __typename?: 'SitePluginPluginOptionsGtagConfig';
  anonymize_ip: Maybe<Scalars['Boolean']>;
  cookie_expires: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsGtagConfigFilterInput = {
  anonymize_ip: Maybe<BooleanQueryOperatorInput>;
  cookie_expires: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginPluginOptionsPluginConfig = {
  __typename?: 'SitePluginPluginOptionsPluginConfig';
  head: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginConfigFilterInput = {
  head: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  maxWidth: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  linkImagesToOriginal: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth: Maybe<IntQueryOperatorInput>;
  quality: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  mainNavigation: Maybe<Array<Maybe<SiteSiteMetadataMainNavigation>>>;
};

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  siteUrl: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  phone: Maybe<StringQueryOperatorInput>;
  mainNavigation: Maybe<SiteSiteMetadataMainNavigationFilterListInput>;
};

export type SiteSiteMetadataMainNavigation = {
  __typename?: 'SiteSiteMetadataMainNavigation';
  title: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataMainNavigationFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataMainNavigationFilterListInput = {
  elemMatch: Maybe<SiteSiteMetadataMainNavigationFilterInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 0,
  DESC = 1
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>;
  ne: Maybe<Scalars['String']>;
  in: Maybe<Array<Maybe<Scalars['String']>>>;
  nin: Maybe<Array<Maybe<Scalars['String']>>>;
  regex: Maybe<Scalars['String']>;
  glob: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  rotate: Maybe<Scalars['Int']>;
  trim: Maybe<Scalars['Float']>;
  cropFocus: Maybe<ImageCropFocus>;
  fit: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality: Maybe<Scalars['Int']>;
};

export type CreateBlogPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type CreateBlogPagesQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'id'>
      ) }
    )> }
  ) }
);

export type CreateBlogPostPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type CreateBlogPostPagesQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & { fields: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'language' | 'filename' | 'path' | 'slug'>
        )> }
      ) }
    )> }
  ) }
);

export type CreateTagPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type CreateTagPagesQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { group: Array<(
      { __typename?: 'MarkdownRemarkGroupConnection' }
      & Pick<MarkdownRemarkGroupConnection, 'totalCount'>
      & { tag: MarkdownRemarkGroupConnection['fieldValue'] }
    )> }
  ) }
);

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = (
  { __typename?: 'ImageSharpFluid' }
  & { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] }
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type DefaultLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type DefaultLayoutQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & Pick<Site, 'buildTime'>
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'phone' | 'email'>
      & { mainNavigation: Maybe<Array<Maybe<(
        { __typename?: 'SiteSiteMetadataMainNavigation' }
        & Pick<SiteSiteMetadataMainNavigation, 'title' | 'path'>
      )>>> }
    )> }
  )> }
);

export type ImprintPageQueryVariables = Exact<{
  language: Maybe<Scalars['String']>;
}>;


export type ImprintPageQuery = (
  { __typename?: 'Query' }
  & { imprint: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
  )> }
);

export type IndexPageQueryVariables = Exact<{
  language: Maybe<Scalars['String']>;
}>;


export type IndexPageQuery = (
  { __typename?: 'Query' }
  & { welcomeSpotlight: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
  )>, recentArticles: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { nodes: Array<(
      { __typename?: 'MarkdownRemark' }
      & Pick<MarkdownRemark, 'excerpt'>
      & { fields: Maybe<(
        { __typename?: 'MarkdownRemarkFields' }
        & Pick<MarkdownRemarkFields, 'path' | 'modifiedAt'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'MarkdownRemarkFieldsTags' }
          & Pick<MarkdownRemarkFieldsTags, 'translation' | 'path'>
        )>>> }
      )>, frontmatter: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatter' }
        & Pick<MarkdownRemarkFrontmatter, 'title'>
      )> }
    )> }
  ) }
);

export type BlogPageQueryVariables = Exact<{
  language: Scalars['String'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type BlogPageQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { fields: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'path' | 'modifiedAt'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'MarkdownRemarkFieldsTags' }
            & Pick<MarkdownRemarkFieldsTags, 'translation' | 'path'>
          )>>> }
        )>, frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title'>
        )> }
      ) }
    )> }
  ) }
);

export type BlogPostPageQueryVariables = Exact<{
  language: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
}>;


export type BlogPostPageQuery = (
  { __typename?: 'Query' }
  & { blogPost: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title'>
    )>, fields: Maybe<(
      { __typename?: 'MarkdownRemarkFields' }
      & Pick<MarkdownRemarkFields, 'path' | 'modifiedAt'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'MarkdownRemarkFieldsTags' }
        & Pick<MarkdownRemarkFieldsTags, 'value' | 'path'>
      )>>> }
    )> }
  )> }
);

export type GalleryPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type GalleryPageQuery = (
  { __typename?: 'Query' }
  & { entries: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { group: Array<(
      { __typename?: 'MarkdownRemarkGroupConnection' }
      & Pick<MarkdownRemarkGroupConnection, 'fieldValue' | 'totalCount'>
      & { edges: Array<(
        { __typename?: 'MarkdownRemarkEdge' }
        & { node: (
          { __typename?: 'MarkdownRemark' }
          & { frontmatter: Maybe<(
            { __typename?: 'MarkdownRemarkFrontmatter' }
            & Pick<MarkdownRemarkFrontmatter, 'title'>
            & { photo: Maybe<(
              { __typename?: 'File' }
              & { childImageSharp: Maybe<(
                { __typename?: 'ImageSharp' }
                & { fixed: Maybe<(
                  { __typename?: 'ImageSharpFixed' }
                  & GatsbyImageSharpFixedFragment
                )> }
              )> }
            )> }
          )> }
        ) }
      )> }
    )> }
  ) }
);

export type TagPageQueryVariables = Exact<{
  language: Scalars['String'];
  tag: Scalars['String'];
}>;


export type TagPageQuery = (
  { __typename?: 'Query' }
  & { entries: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { fields: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'path' | 'modifiedAt'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'MarkdownRemarkFieldsTags' }
            & Pick<MarkdownRemarkFieldsTags, 'translation' | 'path'>
          )>>> }
        )>, frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title'>
        )> }
      ) }
    )> }
  ) }
);
