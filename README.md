# breaking-news
Breaking news app using React, Flux, Firebase, Browersify, and Babel

The project uses the aforementioned technologies plus [Babelify](https://github.com/babel/babelify) to share the same ECMAScript 6 React components, Flux components, and the Firebase SDK code across the client and server. This approach permits the server to render the `NewsList` component with initial data for improved caching and SEO; said component can then act upon deltas for updating in the browser.

## Setting Up

Clone the repository or, if you wish to use your own Firebase instance, fork it. It's then simply a case of running `npm i`.

## Tasks

* `npm run build` - Babelifies and Browersifies the code and required third party modules
* `npm run dev` - Runs the build task and then kicks off the server on port 3000

## Going forward

I want to write a tutorial on this, but there are a couple of points to which I must attend first. Watch this space!