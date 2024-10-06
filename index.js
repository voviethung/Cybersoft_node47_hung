import express from 'express';

// tao object tong cua express
const app = express();

// them middleware de convert string ve JSON voi API POST va PUT
app.use(express.json());

// viet API Hello world
app.get("/hello-world", (req, res) => {
    res.send("hello world");
});
app.get("/health-check", (req, res) => {
    res.send("health check");
});

// lay thong tin tu params, query string, headers, body
// Vi du lay thong tin tu https://localhost:8080/get-user/1
// define API get-user
app.get("/get-user/:id/:hoTen", (req, res) => {
    // lay id tu URL
    let { id, hoTen } = req.params;
    let { queryString } = req.query;
    let { token, authorization } = req.headers;
    // let headers = req.headers;
    res.send({ id, hoTen, queryString, token, authorization });
    // res.send({id, hoTen, queryString, headers});

});

// lay body tu API POST (create) va PUT (update)
app.post("/create-user", (req, res) => {
    let body = req.body;
    res.send(body);
 })


// define port cho backend, range port cua localhost trong pham vi tu 0 den 65535 (tra cuu range port cua localhost tren chatGPT)
app.listen(8080, () => {
    console.log("BE starting with port 8080");

});



