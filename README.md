# ang2-babel-webpack2
Seed for ang2-babel-webpack2 using ES6 project
Includes simple examples of webpack 2 chunking, etc.

You do this, it just works:

- download/clone repo.
- go to root directory.
- npm install (installs all node modules, e.g. angular, babel, webpack, etc).
- npm run serve (starts watchers webpack dev server on localhost:8080)
- when ready, npm run prodbuild (does webpack "-p" bundling/build etc)

You deploy index file, any assets (unless you loaded them already with the file loaders etc, for example, your CSS is already bundled), and the bundled stuff, and there you go. You might have to edit the base href in index.html depending on where you put the app. 

There are a variety of other modules and plugins that can do a variety of other bootstrapping, file and bundle generation/cleanup, etc. Also, the webpack dev server has a lot of capability not used here (as does webpack in general). It's fair to say this is pretty naive; that's deliberate. I personally dislike seeds that introduce a lot of structure and capability that aren't needed for the bare-metal run. You can discover more robust features over time to extend these basic capabilities. The one exception: I include Bootstrap, since I use that in pretty much every project. 

NOTE: This uses vanilla ES6, and does it as simply as possible for this example. However, feel free to use Typescript, though if you are using TypeScript, I'd probably just go with the Angular CLI and run "ng new myproject". It sets up everything for you. If you want to use Angular 4, go to "http://www.tcoz.com/#/errata and click on the "Angular 4 Webpack Babel Seed" article link. 
