import express from 'express';
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../../../build')));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../../build/index.html'));
});  
 
app.get('/api', (req, res) => {
  res.send('Hello from the API!'); 
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});