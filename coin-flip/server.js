// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const figlet = require('figlet');

// http.createServer((req, res) => {
//   const page = url.parse(req.url).pathname;
//   fs.readFile('coinflip.html', (err, data) => {
//     if (page == '/') {
//       fs.readFile('index.html', function(data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//       });
//     } else if (page == '/api') {
//       const randomChoice = Math.round(Math.random()); // 0 or 1
//       const outcome = randomChoice === 0 ? 'Heads' : 'Tails';
//       const objToJson = {
//         value: outcome
//       }
//       res.end(JSON.stringify(objToJson));
//     } else {
//       figlet('404!!', function(err, data) {
//         if (err) {
//             console.log('Something went wrong...');
//             console.dir(err);
//             return;
//         }
//         res.write(data);
//         res.end();
//       });
//     }
//   })
// }).listen(8000)


const http = require('http');
const fs = require('fs')
const url = require('url');
// const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  console.log(page);
  if (page == '/') {
    fs.readFile('coinflip.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      console.log(typeof(data))
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    const randomChoice = Math.round(Math.random()); // 0 or 1
    const outcome = randomChoice === 0 ? 'Heads' : 'Tails';
    const objToJson = {
      value: outcome
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(objToJson));
    res.end();
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
