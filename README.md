# Web toolkit builder

The goal of this is to help test the web components and to serve as a training module for new users. 

You can run the following commands to build the test site:

````
npm install
npm rebuild
npm run build-homepage
````

````
npm install
npm rebuild
npm run build-environment
````

This will generate a static site under _site. You can use a live server tool to run this from your local machine. 

## Adding components

All of the components are driven through a .md file and a .json file in the /components folder. The json file is used to handle the technical requirements, and the md file is for free-form text. If you add both, the component should show up on both the menu and the individual file system for each environment. 

## Environment

This is being retooled and simplified so it builds a single environment instead of trying to contain all the information for all the environments. Therefore, you can now put in version-specific informati.
* https://builder2.toolkit.illinois.edu: the archived builder for version 2 (cdn.toolkit.illinois.edu/2). This contains all the available versions for the toolkit for v2. 

## Running on local hoston like upgrades and depreciated components. The build process will take the release tag and create the environment for you, and also add this to the main page. 

## Deployment

There are three sites this deploys to:
* https://builder.toolkit.illinois.edu: the main builder site. This is just the table of contents, color contrast checker, and helpful tools. 
* https://builder2.toolkit.illinois.edu: the old builder site. 
* https://builder3.toolkit.illinois.edu/{release}: the individual environment for a version 3 build. This is for both development (dev.toolkit.illinois.edu) and production (cdn.toolkit.illinois.edu)

If you want to run both this and the toolkit, run the following command on the toolkit repo
````
npx vite build
````
````
npx vite serve dist
````

This will serve the toolkit on https://localhost/5173. Then, you can use Visual Studio code LiveServe to run the toolkit builder (npm run build-environment). Make sure the currentEnvironment.json file under /site/_data is using the localhost with the proper port.  