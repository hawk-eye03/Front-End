# To initialise npm

- `npm init`

# To install Parcel in dev mode

- `npm install -D parcel`

# To Run the app

- `npx parcel index.html`

# To Install anything

- `npm i react`
  OR
- `npm install react`

1. Package.json is a configuration file for npm
2. Dev dependencies - Generally required in development phase
3. npm install -D parcel (-D signifies dev dependency) [Parcel/Web-pack is a bundler for .css,.html and .js]
4. ^ (caret) signifies that it will automatically ugrade to minor versions
5. ~ (tilda) used for major upgrades (not recommended as it can be a breaking change)
6. package.json (keeps approx version) vs package-lock.json (very imp file) (keeps exact version) (integrity hash is to verify dev code with production code)
7. node_modules (collection of dependencies, every package has its own package.json) is a kind of database for npm (parcel is also a part of it, parcel in itself has a lot of dependencies and so on)
8. put node_modules in gitignore as it can be generated just by package-lock.json and package.json
9. npx means executing a package
10. CDN links are not preferred way to import React in our project
11. Need to define this inside script tag type="module" so that browser knows its not a normal js file script, it will consider it as module

# Parcel

- Dev Build
- Local server
- Hot Module Replacement (as soon as any file is saved it replaces in the server)
- File watching algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification (For building production code)
- Bundling
- Compress file (Remove all white spaces file)
- Consistent Hashing
- Code Splitting
- Differential Bundling (app can be done in different browsers, like older browsers, mobile browsers etc, different bundle for different browsers)
- Diagnostics
- Error handling
- also gives a way to host on HTTPS
- Tree Shaking - remove unused code from final bundle

* Note Any bundler like web-pack or Parcel will do the above things, parcel might also be using libraries inside it to get the work done
