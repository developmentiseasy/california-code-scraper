const Xray = require('x-ray')
const request = require('request')
const shortid = require('shortid')
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient

const xray = new Xray()

const URL = 'http://leginfo.legislature.ca.gov/faces/codes.xhtml'
const DB_URL = 'mongodb://localhost:27017/californiaScraperDb'

const selectorsList = [
  {
    selector: '#codestocheader div.displaycodeleftmargin div div',
    body: {
      catogoryName: 'a',
      url: 'a@href',
    }
  },
  {
    selector: '#codestreeForm2 div.codes_toc_list',
    body: {
      codeName: 'a.portletNav span',
      url: 'a@href',
    }
  },
  {
    selector: 'div#manylawsections div font div',
    body: {
      idInList: 'h6 a',
      code: 'p:nth-child(3)',
      description: 'p:nth-child(5)',
    }
  },
]

insertDataToDB = (data) => {}

getResult = (err, results) => {
  if (err) throw err
  if (results.length === 0) {return}

  // results.forEach(item => {
  //   selectorsList.forEach(selector => {
  //     xray(item.url, selector.selector, [selector.body])(getResult)
  //   })
  // })
  console.log(results)
  //
  // MongoClient.connect(DB_URL, function (err, db) {
  //   if (err) throw err
  //   db.collection('scrapedData').insertMany(results, function (err, res) {
  //     if (err) throw err
  //     console.log(res)
  //     db.close()
  //   })
  // })
}

xray(URL, selectorsList[0].selector, [
  selectorsList[0].body
])(getResult)

// xray('http://google.com', {
//   main: 'title',
//   image: xray('#gbar a@href', 'title'),
// })((err, obj) => {
//   console.log(obj)
// })