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
  childImageSharp: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark: Maybe<MarkdownRemark>;
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
  childImageSharp___fixed___base64 = 34,
  childImageSharp___fixed___tracedSVG = 35,
  childImageSharp___fixed___aspectRatio = 36,
  childImageSharp___fixed___width = 37,
  childImageSharp___fixed___height = 38,
  childImageSharp___fixed___src = 39,
  childImageSharp___fixed___srcSet = 40,
  childImageSharp___fixed___srcWebp = 41,
  childImageSharp___fixed___srcSetWebp = 42,
  childImageSharp___fixed___originalName = 43,
  childImageSharp___resolutions___base64 = 44,
  childImageSharp___resolutions___tracedSVG = 45,
  childImageSharp___resolutions___aspectRatio = 46,
  childImageSharp___resolutions___width = 47,
  childImageSharp___resolutions___height = 48,
  childImageSharp___resolutions___src = 49,
  childImageSharp___resolutions___srcSet = 50,
  childImageSharp___resolutions___srcWebp = 51,
  childImageSharp___resolutions___srcSetWebp = 52,
  childImageSharp___resolutions___originalName = 53,
  childImageSharp___fluid___base64 = 54,
  childImageSharp___fluid___tracedSVG = 55,
  childImageSharp___fluid___aspectRatio = 56,
  childImageSharp___fluid___src = 57,
  childImageSharp___fluid___srcSet = 58,
  childImageSharp___fluid___srcWebp = 59,
  childImageSharp___fluid___srcSetWebp = 60,
  childImageSharp___fluid___sizes = 61,
  childImageSharp___fluid___originalImg = 62,
  childImageSharp___fluid___originalName = 63,
  childImageSharp___fluid___presentationWidth = 64,
  childImageSharp___fluid___presentationHeight = 65,
  childImageSharp___sizes___base64 = 66,
  childImageSharp___sizes___tracedSVG = 67,
  childImageSharp___sizes___aspectRatio = 68,
  childImageSharp___sizes___src = 69,
  childImageSharp___sizes___srcSet = 70,
  childImageSharp___sizes___srcWebp = 71,
  childImageSharp___sizes___srcSetWebp = 72,
  childImageSharp___sizes___sizes = 73,
  childImageSharp___sizes___originalImg = 74,
  childImageSharp___sizes___originalName = 75,
  childImageSharp___sizes___presentationWidth = 76,
  childImageSharp___sizes___presentationHeight = 77,
  childImageSharp___gatsbyImageData = 78,
  childImageSharp___original___width = 79,
  childImageSharp___original___height = 80,
  childImageSharp___original___src = 81,
  childImageSharp___resize___src = 82,
  childImageSharp___resize___tracedSVG = 83,
  childImageSharp___resize___width = 84,
  childImageSharp___resize___height = 85,
  childImageSharp___resize___aspectRatio = 86,
  childImageSharp___resize___originalName = 87,
  childImageSharp___id = 88,
  childImageSharp___parent___id = 89,
  childImageSharp___parent___parent___id = 90,
  childImageSharp___parent___parent___children = 91,
  childImageSharp___parent___children = 92,
  childImageSharp___parent___children___id = 93,
  childImageSharp___parent___children___children = 94,
  childImageSharp___parent___internal___content = 95,
  childImageSharp___parent___internal___contentDigest = 96,
  childImageSharp___parent___internal___description = 97,
  childImageSharp___parent___internal___fieldOwners = 98,
  childImageSharp___parent___internal___ignoreType = 99,
  childImageSharp___parent___internal___mediaType = 100,
  childImageSharp___parent___internal___owner = 101,
  childImageSharp___parent___internal___type = 102,
  childImageSharp___children = 103,
  childImageSharp___children___id = 104,
  childImageSharp___children___parent___id = 105,
  childImageSharp___children___parent___children = 106,
  childImageSharp___children___children = 107,
  childImageSharp___children___children___id = 108,
  childImageSharp___children___children___children = 109,
  childImageSharp___children___internal___content = 110,
  childImageSharp___children___internal___contentDigest = 111,
  childImageSharp___children___internal___description = 112,
  childImageSharp___children___internal___fieldOwners = 113,
  childImageSharp___children___internal___ignoreType = 114,
  childImageSharp___children___internal___mediaType = 115,
  childImageSharp___children___internal___owner = 116,
  childImageSharp___children___internal___type = 117,
  childImageSharp___internal___content = 118,
  childImageSharp___internal___contentDigest = 119,
  childImageSharp___internal___description = 120,
  childImageSharp___internal___fieldOwners = 121,
  childImageSharp___internal___ignoreType = 122,
  childImageSharp___internal___mediaType = 123,
  childImageSharp___internal___owner = 124,
  childImageSharp___internal___type = 125,
  id = 126,
  parent___id = 127,
  parent___parent___id = 128,
  parent___parent___parent___id = 129,
  parent___parent___parent___children = 130,
  parent___parent___children = 131,
  parent___parent___children___id = 132,
  parent___parent___children___children = 133,
  parent___parent___internal___content = 134,
  parent___parent___internal___contentDigest = 135,
  parent___parent___internal___description = 136,
  parent___parent___internal___fieldOwners = 137,
  parent___parent___internal___ignoreType = 138,
  parent___parent___internal___mediaType = 139,
  parent___parent___internal___owner = 140,
  parent___parent___internal___type = 141,
  parent___children = 142,
  parent___children___id = 143,
  parent___children___parent___id = 144,
  parent___children___parent___children = 145,
  parent___children___children = 146,
  parent___children___children___id = 147,
  parent___children___children___children = 148,
  parent___children___internal___content = 149,
  parent___children___internal___contentDigest = 150,
  parent___children___internal___description = 151,
  parent___children___internal___fieldOwners = 152,
  parent___children___internal___ignoreType = 153,
  parent___children___internal___mediaType = 154,
  parent___children___internal___owner = 155,
  parent___children___internal___type = 156,
  parent___internal___content = 157,
  parent___internal___contentDigest = 158,
  parent___internal___description = 159,
  parent___internal___fieldOwners = 160,
  parent___internal___ignoreType = 161,
  parent___internal___mediaType = 162,
  parent___internal___owner = 163,
  parent___internal___type = 164,
  children = 165,
  children___id = 166,
  children___parent___id = 167,
  children___parent___parent___id = 168,
  children___parent___parent___children = 169,
  children___parent___children = 170,
  children___parent___children___id = 171,
  children___parent___children___children = 172,
  children___parent___internal___content = 173,
  children___parent___internal___contentDigest = 174,
  children___parent___internal___description = 175,
  children___parent___internal___fieldOwners = 176,
  children___parent___internal___ignoreType = 177,
  children___parent___internal___mediaType = 178,
  children___parent___internal___owner = 179,
  children___parent___internal___type = 180,
  children___children = 181,
  children___children___id = 182,
  children___children___parent___id = 183,
  children___children___parent___children = 184,
  children___children___children = 185,
  children___children___children___id = 186,
  children___children___children___children = 187,
  children___children___internal___content = 188,
  children___children___internal___contentDigest = 189,
  children___children___internal___description = 190,
  children___children___internal___fieldOwners = 191,
  children___children___internal___ignoreType = 192,
  children___children___internal___mediaType = 193,
  children___children___internal___owner = 194,
  children___children___internal___type = 195,
  children___internal___content = 196,
  children___internal___contentDigest = 197,
  children___internal___description = 198,
  children___internal___fieldOwners = 199,
  children___internal___ignoreType = 200,
  children___internal___mediaType = 201,
  children___internal___owner = 202,
  children___internal___type = 203,
  internal___content = 204,
  internal___contentDigest = 205,
  internal___description = 206,
  internal___fieldOwners = 207,
  internal___ignoreType = 208,
  internal___mediaType = 209,
  internal___owner = 210,
  internal___type = 211,
  childMarkdownRemark___id = 212,
  childMarkdownRemark___frontmatter___title = 213,
  childMarkdownRemark___frontmatter___tags = 214,
  childMarkdownRemark___excerpt = 215,
  childMarkdownRemark___rawMarkdownBody = 216,
  childMarkdownRemark___fileAbsolutePath = 217,
  childMarkdownRemark___fields___language = 218,
  childMarkdownRemark___fields___filename = 219,
  childMarkdownRemark___fields___kind = 220,
  childMarkdownRemark___fields___slug = 221,
  childMarkdownRemark___fields___path = 222,
  childMarkdownRemark___fields___publishedAt = 223,
  childMarkdownRemark___fields___modifiedAt = 224,
  childMarkdownRemark___fields___tags = 225,
  childMarkdownRemark___fields___tags___value = 226,
  childMarkdownRemark___fields___tags___path = 227,
  childMarkdownRemark___html = 228,
  childMarkdownRemark___htmlAst = 229,
  childMarkdownRemark___excerptAst = 230,
  childMarkdownRemark___headings = 231,
  childMarkdownRemark___headings___id = 232,
  childMarkdownRemark___headings___value = 233,
  childMarkdownRemark___headings___depth = 234,
  childMarkdownRemark___timeToRead = 235,
  childMarkdownRemark___tableOfContents = 236,
  childMarkdownRemark___wordCount___paragraphs = 237,
  childMarkdownRemark___wordCount___sentences = 238,
  childMarkdownRemark___wordCount___words = 239,
  childMarkdownRemark___parent___id = 240,
  childMarkdownRemark___parent___parent___id = 241,
  childMarkdownRemark___parent___parent___children = 242,
  childMarkdownRemark___parent___children = 243,
  childMarkdownRemark___parent___children___id = 244,
  childMarkdownRemark___parent___children___children = 245,
  childMarkdownRemark___parent___internal___content = 246,
  childMarkdownRemark___parent___internal___contentDigest = 247,
  childMarkdownRemark___parent___internal___description = 248,
  childMarkdownRemark___parent___internal___fieldOwners = 249,
  childMarkdownRemark___parent___internal___ignoreType = 250,
  childMarkdownRemark___parent___internal___mediaType = 251,
  childMarkdownRemark___parent___internal___owner = 252,
  childMarkdownRemark___parent___internal___type = 253,
  childMarkdownRemark___children = 254,
  childMarkdownRemark___children___id = 255,
  childMarkdownRemark___children___parent___id = 256,
  childMarkdownRemark___children___parent___children = 257,
  childMarkdownRemark___children___children = 258,
  childMarkdownRemark___children___children___id = 259,
  childMarkdownRemark___children___children___children = 260,
  childMarkdownRemark___children___internal___content = 261,
  childMarkdownRemark___children___internal___contentDigest = 262,
  childMarkdownRemark___children___internal___description = 263,
  childMarkdownRemark___children___internal___fieldOwners = 264,
  childMarkdownRemark___children___internal___ignoreType = 265,
  childMarkdownRemark___children___internal___mediaType = 266,
  childMarkdownRemark___children___internal___owner = 267,
  childMarkdownRemark___children___internal___type = 268,
  childMarkdownRemark___internal___content = 269,
  childMarkdownRemark___internal___contentDigest = 270,
  childMarkdownRemark___internal___description = 271,
  childMarkdownRemark___internal___fieldOwners = 272,
  childMarkdownRemark___internal___ignoreType = 273,
  childMarkdownRemark___internal___mediaType = 274,
  childMarkdownRemark___internal___owner = 275,
  childMarkdownRemark___internal___type = 276
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
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
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
  WEBP = 4
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
  frontmatter___tags = 2,
  excerpt = 3,
  rawMarkdownBody = 4,
  fileAbsolutePath = 5,
  fields___language = 6,
  fields___filename = 7,
  fields___kind = 8,
  fields___slug = 9,
  fields___path = 10,
  fields___publishedAt = 11,
  fields___modifiedAt = 12,
  fields___tags = 13,
  fields___tags___value = 14,
  fields___tags___path = 15,
  html = 16,
  htmlAst = 17,
  excerptAst = 18,
  headings = 19,
  headings___id = 20,
  headings___value = 21,
  headings___depth = 22,
  timeToRead = 23,
  tableOfContents = 24,
  wordCount___paragraphs = 25,
  wordCount___sentences = 26,
  wordCount___words = 27,
  parent___id = 28,
  parent___parent___id = 29,
  parent___parent___parent___id = 30,
  parent___parent___parent___children = 31,
  parent___parent___children = 32,
  parent___parent___children___id = 33,
  parent___parent___children___children = 34,
  parent___parent___internal___content = 35,
  parent___parent___internal___contentDigest = 36,
  parent___parent___internal___description = 37,
  parent___parent___internal___fieldOwners = 38,
  parent___parent___internal___ignoreType = 39,
  parent___parent___internal___mediaType = 40,
  parent___parent___internal___owner = 41,
  parent___parent___internal___type = 42,
  parent___children = 43,
  parent___children___id = 44,
  parent___children___parent___id = 45,
  parent___children___parent___children = 46,
  parent___children___children = 47,
  parent___children___children___id = 48,
  parent___children___children___children = 49,
  parent___children___internal___content = 50,
  parent___children___internal___contentDigest = 51,
  parent___children___internal___description = 52,
  parent___children___internal___fieldOwners = 53,
  parent___children___internal___ignoreType = 54,
  parent___children___internal___mediaType = 55,
  parent___children___internal___owner = 56,
  parent___children___internal___type = 57,
  parent___internal___content = 58,
  parent___internal___contentDigest = 59,
  parent___internal___description = 60,
  parent___internal___fieldOwners = 61,
  parent___internal___ignoreType = 62,
  parent___internal___mediaType = 63,
  parent___internal___owner = 64,
  parent___internal___type = 65,
  children = 66,
  children___id = 67,
  children___parent___id = 68,
  children___parent___parent___id = 69,
  children___parent___parent___children = 70,
  children___parent___children = 71,
  children___parent___children___id = 72,
  children___parent___children___children = 73,
  children___parent___internal___content = 74,
  children___parent___internal___contentDigest = 75,
  children___parent___internal___description = 76,
  children___parent___internal___fieldOwners = 77,
  children___parent___internal___ignoreType = 78,
  children___parent___internal___mediaType = 79,
  children___parent___internal___owner = 80,
  children___parent___internal___type = 81,
  children___children = 82,
  children___children___id = 83,
  children___children___parent___id = 84,
  children___children___parent___children = 85,
  children___children___children = 86,
  children___children___children___id = 87,
  children___children___children___children = 88,
  children___children___internal___content = 89,
  children___children___internal___contentDigest = 90,
  children___children___internal___description = 91,
  children___children___internal___fieldOwners = 92,
  children___children___internal___ignoreType = 93,
  children___children___internal___mediaType = 94,
  children___children___internal___owner = 95,
  children___children___internal___type = 96,
  children___internal___content = 97,
  children___internal___contentDigest = 98,
  children___internal___description = 99,
  children___internal___fieldOwners = 100,
  children___internal___ignoreType = 101,
  children___internal___mediaType = 102,
  children___internal___owner = 103,
  children___internal___type = 104,
  internal___content = 105,
  internal___contentDigest = 106,
  internal___description = 107,
  internal___fieldOwners = 108,
  internal___ignoreType = 109,
  internal___mediaType = 110,
  internal___owner = 111,
  internal___type = 112
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
  path: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsTagsFilterInput = {
  value: Maybe<StringQueryOperatorInput>;
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

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title: Maybe<Scalars['String']>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
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
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
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
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
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
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  context: Maybe<SitePageContext>;
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
  componentPath: Maybe<Scalars['String']>;
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
  id = 5,
  parent___id = 6,
  parent___parent___id = 7,
  parent___parent___parent___id = 8,
  parent___parent___parent___children = 9,
  parent___parent___children = 10,
  parent___parent___children___id = 11,
  parent___parent___children___children = 12,
  parent___parent___internal___content = 13,
  parent___parent___internal___contentDigest = 14,
  parent___parent___internal___description = 15,
  parent___parent___internal___fieldOwners = 16,
  parent___parent___internal___ignoreType = 17,
  parent___parent___internal___mediaType = 18,
  parent___parent___internal___owner = 19,
  parent___parent___internal___type = 20,
  parent___children = 21,
  parent___children___id = 22,
  parent___children___parent___id = 23,
  parent___children___parent___children = 24,
  parent___children___children = 25,
  parent___children___children___id = 26,
  parent___children___children___children = 27,
  parent___children___internal___content = 28,
  parent___children___internal___contentDigest = 29,
  parent___children___internal___description = 30,
  parent___children___internal___fieldOwners = 31,
  parent___children___internal___ignoreType = 32,
  parent___children___internal___mediaType = 33,
  parent___children___internal___owner = 34,
  parent___children___internal___type = 35,
  parent___internal___content = 36,
  parent___internal___contentDigest = 37,
  parent___internal___description = 38,
  parent___internal___fieldOwners = 39,
  parent___internal___ignoreType = 40,
  parent___internal___mediaType = 41,
  parent___internal___owner = 42,
  parent___internal___type = 43,
  children = 44,
  children___id = 45,
  children___parent___id = 46,
  children___parent___parent___id = 47,
  children___parent___parent___children = 48,
  children___parent___children = 49,
  children___parent___children___id = 50,
  children___parent___children___children = 51,
  children___parent___internal___content = 52,
  children___parent___internal___contentDigest = 53,
  children___parent___internal___description = 54,
  children___parent___internal___fieldOwners = 55,
  children___parent___internal___ignoreType = 56,
  children___parent___internal___mediaType = 57,
  children___parent___internal___owner = 58,
  children___parent___internal___type = 59,
  children___children = 60,
  children___children___id = 61,
  children___children___parent___id = 62,
  children___children___parent___children = 63,
  children___children___children = 64,
  children___children___children___id = 65,
  children___children___children___children = 66,
  children___children___internal___content = 67,
  children___children___internal___contentDigest = 68,
  children___children___internal___description = 69,
  children___children___internal___fieldOwners = 70,
  children___children___internal___ignoreType = 71,
  children___children___internal___mediaType = 72,
  children___children___internal___owner = 73,
  children___children___internal___type = 74,
  children___internal___content = 75,
  children___internal___contentDigest = 76,
  children___internal___description = 77,
  children___internal___fieldOwners = 78,
  children___internal___ignoreType = 79,
  children___internal___mediaType = 80,
  children___internal___owner = 81,
  children___internal___type = 82,
  internal___content = 83,
  internal___contentDigest = 84,
  internal___description = 85,
  internal___fieldOwners = 86,
  internal___ignoreType = 87,
  internal___mediaType = 88,
  internal___owner = 89,
  internal___type = 90,
  isCreatedByStatefulCreatePages = 91,
  context___slug = 92,
  context___language = 93,
  context___alternativeLanguagePaths = 94,
  context___alternativeLanguagePaths___language = 95,
  context___alternativeLanguagePaths___path = 96,
  context___limit = 97,
  context___skip = 98,
  context___pageCount = 99,
  context___currentPage = 100,
  context___tag = 101,
  pluginCreator___id = 102,
  pluginCreator___parent___id = 103,
  pluginCreator___parent___parent___id = 104,
  pluginCreator___parent___parent___children = 105,
  pluginCreator___parent___children = 106,
  pluginCreator___parent___children___id = 107,
  pluginCreator___parent___children___children = 108,
  pluginCreator___parent___internal___content = 109,
  pluginCreator___parent___internal___contentDigest = 110,
  pluginCreator___parent___internal___description = 111,
  pluginCreator___parent___internal___fieldOwners = 112,
  pluginCreator___parent___internal___ignoreType = 113,
  pluginCreator___parent___internal___mediaType = 114,
  pluginCreator___parent___internal___owner = 115,
  pluginCreator___parent___internal___type = 116,
  pluginCreator___children = 117,
  pluginCreator___children___id = 118,
  pluginCreator___children___parent___id = 119,
  pluginCreator___children___parent___children = 120,
  pluginCreator___children___children = 121,
  pluginCreator___children___children___id = 122,
  pluginCreator___children___children___children = 123,
  pluginCreator___children___internal___content = 124,
  pluginCreator___children___internal___contentDigest = 125,
  pluginCreator___children___internal___description = 126,
  pluginCreator___children___internal___fieldOwners = 127,
  pluginCreator___children___internal___ignoreType = 128,
  pluginCreator___children___internal___mediaType = 129,
  pluginCreator___children___internal___owner = 130,
  pluginCreator___children___internal___type = 131,
  pluginCreator___internal___content = 132,
  pluginCreator___internal___contentDigest = 133,
  pluginCreator___internal___description = 134,
  pluginCreator___internal___fieldOwners = 135,
  pluginCreator___internal___ignoreType = 136,
  pluginCreator___internal___mediaType = 137,
  pluginCreator___internal___owner = 138,
  pluginCreator___internal___type = 139,
  pluginCreator___resolve = 140,
  pluginCreator___name = 141,
  pluginCreator___version = 142,
  pluginCreator___pluginOptions___plugins = 143,
  pluginCreator___pluginOptions___plugins___resolve = 144,
  pluginCreator___pluginOptions___plugins___id = 145,
  pluginCreator___pluginOptions___plugins___name = 146,
  pluginCreator___pluginOptions___plugins___version = 147,
  pluginCreator___pluginOptions___plugins___nodeAPIs = 148,
  pluginCreator___pluginOptions___plugins___browserAPIs = 149,
  pluginCreator___pluginOptions___plugins___pluginFilepath = 150,
  pluginCreator___pluginOptions___name = 151,
  pluginCreator___pluginOptions___short_name = 152,
  pluginCreator___pluginOptions___start_url = 153,
  pluginCreator___pluginOptions___background_color = 154,
  pluginCreator___pluginOptions___theme_color = 155,
  pluginCreator___pluginOptions___display = 156,
  pluginCreator___pluginOptions___icon = 157,
  pluginCreator___pluginOptions___icons = 158,
  pluginCreator___pluginOptions___icons___src = 159,
  pluginCreator___pluginOptions___icons___sizes = 160,
  pluginCreator___pluginOptions___icons___type = 161,
  pluginCreator___pluginOptions___cache_busting_mode = 162,
  pluginCreator___pluginOptions___include_favicon = 163,
  pluginCreator___pluginOptions___legacy = 164,
  pluginCreator___pluginOptions___theme_color_in_head = 165,
  pluginCreator___pluginOptions___cacheDigest = 166,
  pluginCreator___pluginOptions___path = 167,
  pluginCreator___pluginOptions___maxWidth = 168,
  pluginCreator___pluginOptions___quality = 169,
  pluginCreator___pluginOptions___linkImagesToOriginal = 170,
  pluginCreator___pluginOptions___configDir = 171,
  pluginCreator___pluginOptions___tsNode = 172,
  pluginCreator___pluginOptions___pathCheck = 173,
  pluginCreator___pluginOptions___allExtensions = 174,
  pluginCreator___pluginOptions___isTSX = 175,
  pluginCreator___pluginOptions___jsxPragma = 176,
  pluginCreator___nodeAPIs = 177,
  pluginCreator___browserAPIs = 178,
  pluginCreator___ssrAPIs = 179,
  pluginCreator___pluginFilepath = 180,
  pluginCreator___packageJson___name = 181,
  pluginCreator___packageJson___description = 182,
  pluginCreator___packageJson___version = 183,
  pluginCreator___packageJson___main = 184,
  pluginCreator___packageJson___license = 185,
  pluginCreator___packageJson___dependencies = 186,
  pluginCreator___packageJson___dependencies___name = 187,
  pluginCreator___packageJson___dependencies___version = 188,
  pluginCreator___packageJson___devDependencies = 189,
  pluginCreator___packageJson___devDependencies___name = 190,
  pluginCreator___packageJson___devDependencies___version = 191,
  pluginCreator___packageJson___peerDependencies = 192,
  pluginCreator___packageJson___peerDependencies___name = 193,
  pluginCreator___packageJson___peerDependencies___version = 194,
  pluginCreator___packageJson___keywords = 195,
  pluginCreatorId = 196,
  componentPath = 197
}

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
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
  pluginOptions___path = 116,
  pluginOptions___maxWidth = 117,
  pluginOptions___quality = 118,
  pluginOptions___linkImagesToOriginal = 119,
  pluginOptions___configDir = 120,
  pluginOptions___tsNode = 121,
  pluginOptions___pathCheck = 122,
  pluginOptions___allExtensions = 123,
  pluginOptions___isTSX = 124,
  pluginOptions___jsxPragma = 125,
  nodeAPIs = 126,
  browserAPIs = 127,
  ssrAPIs = 128,
  pluginFilepath = 129,
  packageJson___name = 130,
  packageJson___description = 131,
  packageJson___version = 132,
  packageJson___main = 133,
  packageJson___license = 134,
  packageJson___dependencies = 135,
  packageJson___dependencies___name = 136,
  packageJson___dependencies___version = 137,
  packageJson___devDependencies = 138,
  packageJson___devDependencies___name = 139,
  packageJson___devDependencies___version = 140,
  packageJson___peerDependencies = 141,
  packageJson___peerDependencies___name = 142,
  packageJson___peerDependencies___version = 143,
  packageJson___keywords = 144
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
          & Pick<MarkdownRemarkFieldsTags, 'value' | 'path'>
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
            & Pick<MarkdownRemarkFieldsTags, 'value' | 'path'>
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
    )> }
  )> }
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
            & Pick<MarkdownRemarkFieldsTags, 'value' | 'path'>
          )>>> }
        )>, frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title'>
        )> }
      ) }
    )> }
  ) }
);
