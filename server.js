const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Start the server
app.prepare().then(() => {
  const server = express();

  // Custom dynamic route (e.g., /admin/posts/1)
  server.get('/admin/posts/:id', (req, res) => {
    const actualPage = '/admin/posts/[id]';
    const queryParams = { id: req.params.id };

    app.render(req, res, actualPage, queryParams);
  });

  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
