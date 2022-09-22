// --- Handlerbars engine ------ 
const hbs = require('express-handlebars');
const handlebars = hbs.create({
  layoutsDir: __dirname + '/views/',
  defaultLayout: 'main',
  extname: 'hbs',
  partialsDir: '/views/partials',
  viewsDir: '/views/pages',
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', 'views/pages');
// ----------------------------------------------