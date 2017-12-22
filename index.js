const Xray = require('x-ray')
const request = require('request')
const shortid = require('shortid')
const fs = require('fs')

const xray = new Xray()

getResult = (err, results) => {


  results.id = shortid.generate()
  results.write('results.json')
  console.log(results)
}

xray('http://jedicode.co', 'div.post.py3', [{
  title: 'h3.h1',
  created_date: 'p',
  description: 'span.post-summary',
  url: 'a.post-link@href',
}])(getResult)

// console.log(xray.paginate())
