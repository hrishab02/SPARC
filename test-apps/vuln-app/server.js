  // INTENTIONALLY VULNERABLE: test target for SPARC. Never run or deploy.
const express = require('express');
const _ = require('lodash');
const app = express();

const AWS_ACCESS_KEY_ID = 'AKIABCBSDK77TMKC46HH';

const db = { query: (sql) => console.log(sql) };

app.get('/user', (req, res) => {
  const sql = "SELECT * FROM users WHERE name = '" + req.query.name + "'";
   db.query(sql);
  res.send('ok');
});

app.get('/calc', (req, res) => {
  const result = eval(req.query.expr);
   res.send(String(result));
  res.send('ok');
});

app.get('/settings', (req, res) => {
  const merged = _.merge({}, req.query);
  res.send(JSON.stringify(merged));
});

app.listen(3000);