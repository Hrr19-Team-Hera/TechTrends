const inquirer = require('inquirer');
const request = require('request');
const async = require('async');
const cheerio = require('cheerio');
const keysMethods = require('./keys.js');
const promise = require('bluebird');

const api = 'http://localhost:8000/raw-postings';

//============== utilities =================
//==========================================

parseTechnologies = (str, tech) => {
  Object.keys(technologyPatterns).forEach((technology) => {
    hasTechnologies[technology] = technologyPatterns[technology].test(str);
  });
  return hasTechnologies;
};

//================ result ==================
//==========================================


//========= js frameworks crunch ===========
//==========================================
const cruncherJSFrameworks = () => {

  // define a records object to hold the data to be stored in prod
  var records = tempGetHubs();
  // var records = keysMethods.getHubs(); // TODO

  // store a reference to the view currently being operated on
  const view = 'javascriptFrameworks';

  // attach this view to each hub in records
  for (var hub in records) records[hub][view] = [];

  console.log(records);

  // store a list of all the tech tracked for this view
  const tech = keysMethods.getTech(view);

  // create array to store fetched date id's
  const dateIds = [1477411263456]; // TODO: dynamic
  // get all data id's and populate
  
  // for each date in the dateIds array:
  dateIds.forEach((dateId) => {
    
    // for each date slice, build a temp storage bin to keep a count attached to a hub
    var bins = {};

    // bin storage constructor
    const BinInit = () => {
      var bin = {};
      for (var item in tech) {
        bin[item] = 0;
      }
      return bin;
    };

    // initialize data points in each bin
    for (var hub in records) bins[hub] = BinInit();
    
    // request length (number of records) for the current date slice and store it
    const numberOfRecords = ;
    // request all records for the current date slice
    for (var i = 0; i < numberOfRecords; i++) {
      request
        // TODO: need the real url to continue
        .get('http://localhost:8000/raw-postings?' + dateId) 
        .on('error', (err) => {
          console.log('[X] error fetching record', err);
        })
        .on('response', (response) => {
          console.log('[ ] record fetched successfully');
          parseTechnologies(JSON.stringify(response, tech));
          // parse the response for keywords, increment count if found
        });
    }
      
      // var view = {};
      // for (var item in tech) { view[item] = 0; }
      
  });

  // phoenix: {
  //   javascriptFrameworks: [
  //     { date: 123456789,
  //       data: {
  //         angular: 7,
  //         backbone: 5,
  //         react: 6,
  //         ember: 3,
  //         knockout: 2,
  //         aurelia: 1,
  //         meteor: 0,
  //         polymer: 1,
  //         vue: 0,
  //         mercury: 1
  //       }
  //     },
  //     { date: 987654321,
  //       data: {...}
  //     }
  //   ],
  //   serverTechnologies: [...],
  //   databases: [...]
  // },
  // colorado: {...}

};

cruncherJSFrameworks();
