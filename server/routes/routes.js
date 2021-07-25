const phoneRoutes = require('./phones');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('Welcome to your rest API');
  });
  phoneRoutes(app, fs);
};

module.exports = appRouter;




