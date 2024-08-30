const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/ts-angular-gui-html-helloworld-env/browser')));

// Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ts-angular-gui-html-helloworld-env/browser/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});