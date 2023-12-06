const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  fs.readFile('coinflip.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.write('Error reading file');
      res.end();
    } else {
      const randomChoice = Math.round(Math.random()); // 0 or 1
      const outcome = randomChoice === 0 ? 'Heads' : 'Tails';
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      // res.write(`<p>Outcome: ${outcome}</p>`); // Display the outcome on the page
      res.end();
    }
  })
}).listen(8000)
