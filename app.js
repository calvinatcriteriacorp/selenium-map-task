require('dotenv').config();

console.log("Ready...");

let count = 0;
let maxCount = process.env.MAX_COUNT;
let state = process.env.STATE;

let lat, lng;
let latLow, latUpper, lngLow, lngUpper;
let startTime = new Date();
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    //driver.manage().window().maximize();

// http://boundingbox.klokantech.com/
switch(state){
  case 'DC':
    latLow = 38.791645;
    latUpper = 38.995548;
    lngLow = -77.119759;
    lngUpper = -76.909393;
    break;
  case 'GA':
    latLow = 30.3556;
    latUpper = 35.0007;
    lngLow = -85.6052;
    lngUpper = -80.7514;
    break;
  case 'VA':
    latLow = 36.5408;
    latUpper = 39.466;
    lngLow = -83.6754;
    lngUpper = -75.1664;
    break;
  case 'MA':
    latLow = 41.1871;
    latUpper = 42.8868;
    lngLow = -73.5081;
    lngUpper = -69.8589;
    break;
  case 'OH':
    latLow = 38.4034;
    latUpper = 42.3271;
    lngLow = -84.8203;
    lngUpper = -80.5182;
    break;
  case 'NC':
    latLow = 33.7529;
    latUpper = 36.5882;
    lngLow = -84.3219;
    lngUpper = -75.4001;
    break;
  case 'WA':
    latLow = 45.5435;
    latUpper = 49.0024;
    lngLow = -124.849;
    lngUpper = -116.9156;
    break;
  case 'MI':
    latLow = 41.7;
    latUpper = 48.31;
    lngLow = -90.42;
    lngUpper = -82.12;
    break;
  case 'CO':
    latLow = 36.9924;
    latUpper = 41.0034;
    lngLow = -109.0603;
    lngUpper = -102.0409;
    break;
  case 'MD':
    latLow = 37.8866;
    latUpper = 39.723;
    lngLow = -79.4877;
    lngUpper = -74.9863;
    break;
  case 'TN':
    latLow = 34.9829;
    latUpper = 36.6781;
    lngLow = -90.3103;
    lngUpper = -81.6469;
    break;
  case 'AZ':
    latLow = 31.3322;
    latUpper = 37.0043;
    lngLow = -114.8166;
    lngUpper = -109.0452;
    break;
  case 'IN':
    latLow = 37.7717;
    latUpper = 41.7614;
    lngLow = -88.0979;
    lngUpper = -84.7847;
    break;
  case 'MN':
    latLow = 43.5;
    latUpper = 49.38;
    lngLow = -97.24;
    lngUpper = -89.48;
    break;
  case 'OR':
    latLow = 41.9918;
    latUpper = 46.2991;
    lngLow = -124.7035;
    lngUpper = -116.4633;
    break;
  case 'MO':
    latLow = 35.9957;
    latUpper = 40.6136;
    lngLow = -95.7747;
    lngUpper = -89.0995;
    break;
  case 'WI':
    latLow = 42.4917;
    latUpper = 47.3098;
    lngLow = -92.8894;
    lngUpper = -86.2495;
    break;
  case 'SC':
    latLow = 32.0335;
    latUpper = 35.2155;
    lngLow = -83.3539;
    lngUpper = -78.4993;
    break;
  case 'KY':
    latLow = 36.4971;
    latUpper = 39.1475;
    lngLow = -89.5715;
    lngUpper = -81.965;
    break;
  case 'UT':
    latLow = 36.9979;
    latUpper = 42.0016;
    lngLow = -114.053;
    lngUpper = -109.0411;
    break;
  case 'LA':
    latLow = 28.8551;
    latUpper = 33.0195;
    lngLow = -94.0434;
    lngUpper = -88.7584;
    break;
  case 'AL':
    latLow = 30.1444;
    latUpper = 35.008;
    lngLow = -88.4732;
    lngUpper = -84.8882;
    break;
  case 'OK':
    latLow = 33.6158;
    latUpper = 37.0023;
    lngLow = -103.0025;
    lngUpper = -94.4307;
    break;
  case 'IA':
    latLow = 40.3754;
    latUpper = 43.5012;
    lngLow = -96.6395;
    lngUpper = -90.1401;
    break;
  case 'KS':
    latLow = 36.993;
    latUpper = 40.0045;
    lngLow = -102.0518;
    lngUpper = -94.5884;
    break;
  case 'AR':
    latLow = 33.0041;
    latUpper = 36.4997;
    lngLow = -94.6179;
    lngUpper = -89.6448;
    break;
  case 'MS':
    latLow = 30.1461;
    latUpper = 34.9961;
    lngLow = -91.655;
    lngUpper = -88.0979;
    break;
  case 'WV':
    latLow = 37.2015;
    latUpper = 40.6388;
    lngLow = -82.6444;
    lngUpper = -77.719;
    break;
  case 'CA':
    latLow = 32.3;
    latUpper = 42.013;
    lngLow = -124.69;
    lngUpper = -114.146;
    break;
  case 'CT':
    latLow = 40.97;
    latUpper = 42.103;
    lngLow = -73.77;
    lngUpper = -71.75;
    break;
  case 'FL':
    latLow = 24.331;
    latUpper = 31.331;
    lngLow = -87.758;
    lngUpper = -79.56;
    break;
  case 'IL':
    latLow = 36.925;
    latUpper = 42.514;
    lngLow = -91.838;
    lngUpper = -87.44;
    break;
  case 'NJ':
    latLow = 38.83;
    latUpper = 41.42;
    lngLow = -75.72;
    lngUpper = -73.83;
    break;
  case 'NV':
    latLow = 34.05;
    latUpper = 42.05;
    lngLow = -120.105;
    lngUpper = -113.95;
    break;
  case 'NY':
    latLow = 40.432;
    latUpper = 45.021;
    lngLow = -80.1222;
    lngUpper = -71.5197;
    break;
  case 'TX':
    latLow = 25.59;
    latUpper = 36.659;
    lngLow = -106.66;
    lngUpper = -93.39;
    break;
  case 'PA':
    latLow = 39.715;
    latUpper = 42.248;
    lngLow = -80.533;
    lngUpper = -74.76;
    break;
  case 'RI':
    latLow = 41.0958;
    latUpper = 42.0188;
    lngLow = -71.9073;
    lngUpper = -71.0886;
    break;
  case 'NE':
    latLow = 39.9999;
    latUpper = 43.0017;
    lngLow = -104.0535;
    lngUpper = -95.3083;
    break;
  case 'ID':
    latLow = 41.99;
    latUpper = 49.0;
    lngLow = -117.24;
    lngUpper = -111.04;
    break;
  case 'NH':
    latLow = 42.697;
    latUpper = 45.3055;
    lngLow = -72.5572;
    lngUpper = -70.5751;
    break;
  case 'HI':
    latLow = 18.87;
    latUpper = 28.52;
    lngLow = -178.44;
    lngUpper = -154.76;
    break;
  case 'ME':
    latLow = 42.9171;
    latUpper = 47.4597;
    lngLow = -71.0843;
    lngUpper = -66.8851;
    break;
  case 'NM':
    latLow = 31.3322;
    latUpper = 37.0003;
    lngLow = -109.0502;
    lngUpper = -103.002;
    break;
  case 'DE':
    latLow = 38.451;
    latUpper = 39.8395;
    lngLow = -75.7891;
    lngUpper = -74.9842;
    break;
  case 'MT':
    latLow = 44.3582;
    latUpper = 49.0014;
    lngLow = -116.05;
    lngUpper = -104.0396;
    break;
  case 'VT':
    latLow = 42.7268;
    latUpper = 45.0167;
    lngLow = -73.4379;
    lngUpper = -71.465;
    break;
  case 'ND':
    latLow = 45.9351;
    latUpper = 49.0007;
    lngLow = -104.05;
    lngUpper = -96.5545;
    break;
  case 'SD':
    latLow = 42.4797;
    latUpper = 45.9457;
    lngLow = -104.0577;
    lngUpper = -96.4366;
    break;
  case 'SD':
    latLow = 40.9947;
    latUpper = 45.0059;
    lngLow = -111.0569;
    lngUpper = -104.0522;
    break;
  case 'AK':
    latLow = 51.18;
    latUpper = 71.44;
    lngLow = -179.56;
    lngUpper = -129.98;
    break;
  default:
    console.log('No coordinates for selected state');
    process.exit();
}

driver.get('http://localhost/intranet/updateUserCoordinates2').then(start);

function start(){
  console.log('starting');
  var promiseChain = [];

  for (var i =0; i<maxCount; i++){
    promiseChain.push(clicking(driver, i));
  }

  Promise.all([promiseChain]).then(finished(driver));
}


function clicking(driver, i){
  //driver.wait()sleep(1*1000);
  driver.findElement( By.id('clickme') ).click()
  .then(function(){

    latElem = driver.findElement( By.id('lat') );
    lngElem = driver.findElement( By.id('lng') );

    driver.wait(until.elementIsEnabled(latElem), 10000);
    driver.wait(until.elementIsEnabled(lngElem), 10000);

  }).then(function(){
    driver.findElement( By.id('lng') ).getAttribute('value').then(function(value){
      lng = value;
    });
    driver.findElement( By.id('lat') ).getAttribute('value').then(function(value){
      lat = value;
    });

  }).then(function(){
    if(latLow < lat  && lat < latUpper &&  lngLow < lng && lng < lngUpper  )
    {
      console.log(i);
    }
    else{
      console.log("coordinates out of state bounds");
      process.exit();
    }


  }, function(err){
    if(err.name == 'NoSuchElementError' || err.name == 'StaleElementReferenceError'){

      console.log("sleep delay");
      driver.sleep(2*1000);
      //driver.get('http://localhost/jf/updateUserCoordinates2');
      //clicking(driver);
    }else if ( err.name == 'UnexpectedAlertOpenError') {
      console.log("alert box message");

      driver.sleep(5*1000);
      process.exit();
    }else{
      console.log(err);
      driver.sleep(5*1000);
      process.exit();
    }

  }).then(function(){
    driver.findElement( By.id('update') ).click();
  }).then(function(){
    driver.wait(until.elementLocated(By.id('ready')), 30000);
    let ready = driver.findElement(By.id('ready'));
    driver.wait(until.elementIsVisible(ready), 30000);

  });



}

function finished(driver){

  driver.sleep(1*1000).then(function(){
    let endTime = new Date();
    let time = (endTime - startTime);
    if(time > 60*1000){
      msg = Math.round(time/60/1000) + " minutes  ";
      msg += Math.round(time % 60) + " seconds ";
    }else{
      msg = Math.round(time/1000) + " seconds";
    }
    console.log('Time elapsed: ' + msg );
    console.log("Finished!")
  }, null);
  driver.quit();
}
