## Boiler Plate - Admin

```
Directory Structure:
--------------------

├── admin
   ├── public           // index.html etc
   └── src              // Main Source directory
       ├── actions      // Redux Actions
       ├── assets       // Styling Assets
       │   ├── css
       │   ├── fonts
       │   └── images
       ├── components   // Components Directory
       │   └── data     // Main Data directory holding template index.js (heart of your portal !!)
       ├── containers   // Containers directory holding components - redux state mapping
       ├── lib          // External Libraries like Socket or any 3rd party libraries
       ├── reducers     // Redux Reducers
       └── routes       // React Router routing

```

## Steps:
* After you downloaded or cloned this boilerplate
* Run middleware using `npm start`
* Run admin using `npm start`
* Without middleware running, you will get socket error
* For Production, Run `npm build` inside admin directory to package and distribute your react project, it will be available under admin/build directory

  
