1) Install Live Server
yarn global add live-server
npm install -g live-server

2) Install Babel plugin to get  ES6 compiled code
a) Install babel cli
yarn global add babel-cli
npm install -g babel-cli

b) Install presets
yarn add babel-preset-env babel-preset-react

3) Trasformation
babel src/app.js --out-file=public/scripts/app.js --preset=env,react --watch
