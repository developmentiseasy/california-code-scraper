const Xray = require('x-ray')
const request = require('request')
const shortid = require('shortid')
const fs = require('fs')

const xray = new Xray()

const URL = 'http://leginfo.legislature.ca.gov/faces/codes.xhtml'

const selectorsList = {
  californiaConst: {
    selector: 'div.displaycodeleftmargin div div',
    body: {
      title: 'a',
      url: 'a@href',
    }
  },
  codesCategory: {
    selector: 'form#codestreeForm2 div.codes_toc_list',
    body: {
      title: 'a.portletNav span',
      url: 'a@href',
    }
  },
  generalProvisions: {
    selector:'div.manylawsections div font div@align=left',
    body: {
      code: 'p$style=margin',
      description: 'a@href',
    }
  },
}

let selector

getResult = (err, results) => {
  if (results.length === 0) {
    selector = selectorsList.codesCategory
  } else {
    selector = selectorsList.generalProvisions
  }
  console.log(results)

  results.forEach(item => {
    xray(item.url, selector, [{
      title: 'a',
      url: 'a@href',
    }])(getResult)
  })
}

xray(URL, selectorsList.californiaConst, [selectorsList.californiaConst.body])(getResult)
