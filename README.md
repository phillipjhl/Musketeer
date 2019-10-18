# Musketeer 
This app includes build scripts and setup for a ReactJS front-end and an ExpressJS back-end with integrated MySQL database connection.

### Careful!
Make sure you are always working within the front-end or back-end `src` directory. Stay out of the `dist` and `lib` directories, as their contents will be erased each time the source code is transpiled.

### Setup
Init submodule for api - 'musketeer-api'

Remember to run `npm install` to install all necessary dependencies.

Creat a development.js file in the 'src/config/env' directory that exports local env variables for database connections, api-keys, etc.

```js
let cfg = {
  MAILGUN_API_KEY: "",
  STRIPE_SK: "",
  DB_PASS: "",
  DB_NAME: "",
  DB_USER: "",
  DB_HOST: "",
  DB_CONN_LIMIT: 10,
  MAILGUN_DOMAIN: ""
};

export { cfg };
```

### Running
* To run the project during development (for automatic transpile and server restart), use `npm run dev`.
* `npm start` will be used in a production environment. It transpiles once and does not look for changes.

### Importing Images and Documents
* This boilerplate sets up `file-loader` in the the `webpack.config.js` file.
* By using `file-loader`, you can keep your images/documents in logical folders within your components, and then import them using their relative paths. During the build process, webpack will copy the files into the `client/dist` folder, giving them a hash-based name and updating your html to use the correct name and path.
* Usage:
  * Files with `png`, `jpg`, and `gif` extensions can be imported into your Component and used as follows (note the braces used in the `src` attribute):

  ```js
  import myLogo from '../relativePath/to/logo.png';

  render() {
      ...
      <img src={myLogo} alt="My Company Logo" />
      // Final html may look like: <img src="/dist/images/1aecb1718293a.png" alt="My Company Logo>
      ...
  }
  ```
  
  * Files with `pdf` extensions can be imported into your Component and used as follows (note the braces used in the `href` attribute):

  ```js
  import myDoc from '../relativePath/to/doc.pdf';

  render() {
      ...
      <a href={myDoc}>Click here!</a>
        // Final html may look like: <a href="/dist/docs/38923afdbc.pdf">Click here!</a>
      ...
  }
  ```
* If you need to support additional file types, feel free to modify the `webpack.config.js`. You should be able to discern the sections for image handling vs document handling."# Blog" 

### TO DO:
- [ ] More complex admin page
  - [ ] This should be one 'page' that handles blog inputs, edits, deletes
  - [ ] View live traffic?
- [ ] Better handling of context
- [ ] Integrate OAUTH
- [ ] More integrted Stripe service
- [ ] Use templates for mailgun service