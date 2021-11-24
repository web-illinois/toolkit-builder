# Web toolkit builder

The goal of this is to help test the web components and to serve as a training module for new users.

You can run the following commands to build the test site:

````
npm install
npm rebuild
npm run build-full
````

This will generate a static site under _site. You can use a live server tool to run this from your local machine. 

## Adding components

All of the components are driven through a .md file and a .json file in the /components folder. The json file is used to handle the technical requirements, and the md file is for free-form text. If you add both, the component should show up on both the menu and the individual file system for each environment. 

## Adding environments

All of the environments are driven through a .json file in the /environments folder. If you add a new json file, it should add all the components to point to the new environment. The order of the environments is driven by the text file order (hence, the "aaaa" for production and development, so they show up first).