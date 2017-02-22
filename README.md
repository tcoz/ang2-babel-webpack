# ang2-babel-webpack2
Seed for ang2-babel-webpack2 using ES6 project
Includes simple examples of webpack 2 chunking, etc.

You do this, it just works:

- download/clone repo.
- go to root directory.
- npm install (installs all node modules, e.g. angular, babel, webpack, etc).
- npm run watch (sets up watcher on your files for hot reload)
- npm run serve (starts dev serve on localhost:8080
- npm run dist (does bundling of JS for production)

You deploy index file, any assets (unless you loaded them already with the file loaders etc, for example, your CSS is already bundled), you might have to edit the base href in index.html depending on where you put the app, and that's that. 

There are a variety of other modules and plugins that can do a variety of other bootstrapping, file and bundle generation/cleanup, etc. I have deliberately left them out, you can discover them over time to extend this project seed's capabilities. The one exception I do include is Bootstrap, since I use that in pretty much every project. 

NOTE: This uses ES6, and does it as simply as possible for this example. However, feel free to use Typescript, though if you are using TypeScript, I'd probably just go with the Angular CLI and run "ng new myproject". It sets up everything for you. 
