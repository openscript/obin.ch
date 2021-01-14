# r.obin.ch

Feel free to checkout how my website is built, but don't copy my content and brand.

## Getting started

1. Clone repository
1. Install dependencies `yarn install`
1. Run `yarn start`
1. Go to http://localhost:8000

## Conventions

All the following conventions should be met:

- React according to the Airbnb rules: https://github.com/airbnb/javascript/tree/master/react
- Content file names follow the lower case Kebab case style: https://www.theserverside.com/definition/Kebab-case

## Tips and tricks

- When the dev container configuration changes, it's sometimes not detected by VSCode. It can be rebuilt manually `Remote-Containers: Rebuild Container`.
- Sometimes deployment is easy as `git checkout master && git pull && git merge --ff - && git push && git checkout -`

## Resources

- [Configure `Internal Status Port`](https://github.com/gatsbyjs/gatsby/pull/25862)
- [Create a blog with Gatsby](https://blog.logrocket.com/creating-a-gatsby-blog-from-scratch/)
