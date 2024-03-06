/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const app = express();

const path = require('path');

const publicPath = path.join(__dirname, 'storybook-static');
app.use(express.static(publicPath));

app.listen(3000, () =>
{
	console.log('server is running at http://localhost:3000');
});