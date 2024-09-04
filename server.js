import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 5000;

// Loads all routes routes/index.js
app.use('/', routes);

// Starts the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
