const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

/////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! 💥');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//       })
//       console.log('THAI');
//     });
//     console.log('yyy');
//   });
//   console.log('xxx');
//   fs.readFile('./txt/a.txt', 'utf-8', (err, data) => {
//     console.log(data);
//   })
//   console.log('zzz');
// });
// console.log('Will read file!');

// fs.readFile('./txt/a.txt', 'utf-8', (err, data) => {
//   console.log(data);
// })


//XXXXXXXXXXXXXXXXXXXXXXXXX
const x = (a,b,callback) => {
  c = a+b;
  callback(c);
}
const callback2 = () => {
  console.log('THANH NHI');
  fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
    fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
      console.log(data);
    });
    console.log("RRRRR");
  });
  console.log("X");
};
const b = (callback) => {
  callback();
  console.log('NGUYEN');
  fs.readFile('./txt/a.txt', 'utf-8', (err, data) => {
  console.log(data);
  fs.readFile('./txt/output.txt', 'utf-8', (err, data) => {
    console.log(data);
  });
  }
  );
  console.log('DINH');
};
x(5,7, (data) => {
  console.log(data);
  console.log('A');
  fs.readFile('./txt/a.txt', 'utf-8', (err, data) => {
  console.log(data);
  });
  b(callback2);
  console.log("THAI");
});
console.log('10');



/////////////////////////////////
// SERVER
// const tempOverview = fs.readFileSync(
//   `${__dirname}/templates/template-overview.html`,
//   'utf-8'
// );
// const tempCard = fs.readFileSync(
//   `${__dirname}/templates/template-card.html`,
//   'utf-8'
// );
// const tempProduct = fs.readFileSync(
//   `${__dirname}/templates/template-product.html`,
//   'utf-8'
// );

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);
// console.log(dataObj);

// const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
// console.log(slugs);

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//   console.log(query);
//   console.log(pathname);

//   // Overview page
//   if (pathname === '/' || pathname === '/overview') {
//     res.writeHead(200, {
//       'Content-type': 'text/html'
//     });

//     const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
//     const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
//     res.end(output);

//     // Product page
//   } else if (pathname === '/product') {
//     res.writeHead(200, {
//       'Content-type': 'text/html'
//     });
//     const product = dataObj[query.id];
//     const output = replaceTemplate(tempProduct, product);
//     res.end(output);

//     // API
//   } else if (pathname === '/api') {
//     res.writeHead(200, {
//       'Content-type': 'application/json'
//     });
//     res.end(data);

//     // Not found
//   } else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'my-own-header': 'hello-world'
//     });
//     res.end('<h1>Page not found!</h1>');
//   }
// });

// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to requests on port 8000');
// });
