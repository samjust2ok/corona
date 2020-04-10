Compiled by Adams Paul and DSC - University of Ibadan.

Please Note: State breakdown APIs is not available for nigeria anymore.

## COVID19 APIs

A full documentation of the API

### EndPoints

All Data Endpoint (Global): https://corona.lmao.ninja/all

All Countries Data Endpoint (Global): https://corona.lmao.ninja/countries

Specific Country Data Endpoint (Global): https://corona.lmao.ninja/countries/Nigeria

All Data Endpoint (Global): https://corona.lmao.ninja/all

Time Series Endpoint: https://coviddata.github.io/coviddata/v1/countries/stats.json

### Response formats

All Data Endpoint (Global): [https://corona.lmao.ninja/all](https://corona.lmao.ninja/all)

`````

{
  "updated": 1586471401810,
  "cases": 1598177,
  "todayCases": 80154,
  "deaths": 95403,
  "todayDeaths": 6946,
  "recovered": 355401,
  "active": 1147373,
  "critical": 48953,
  "casesPerOneMillion": 205,
  "deathsPerOneMillion": 12,
  "tests": 12651063,
  "testsPerOneMillion": 1622.8,
  "affectedCountries": 211
}
``````

All Countries Data Endpoint (Global): [https://corona.lmao.ninja/countries](https://corona.lmao.ninja/countries)

`````

[
  {
    "updated": 1586471401816,
    "country": "USA",
    "countryInfo": {
      "_id": 840,
      "iso2": "US",
      "iso3": "USA",
      "lat": 38,
      "long": -97,
      "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png"
    },
    "cases": 465088,
    "todayCases": 30161,
    "deaths": 16510,
    "todayDeaths": 1722,
    "recovered": 25139,
    "active": 423439,
    "critical": 9823,
    "casesPerOneMillion": 1405,
    "deathsPerOneMillion": 50,
    "tests": 2350377,
    "testsPerOneMillion": 7101
  },
  `````

Specific Country Data Endpoint (Global): [https://corona.lmao.ninja/countries/Nigeria](https://corona.lmao.ninja/countries/Nigeria)

`````

{
  "updated": 1586471401834,
  "country": "Nigeria",
  "countryInfo": {
    "_id": 566,
    "iso2": "NG",
    "iso3": "NGA",
    "lat": 10,
    "long": 8,
    "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ng.png"
  },
  "cases": 288,
  "todayCases": 12,
  "deaths": 7,
  "todayDeaths": 1,
  "recovered": 51,
  "active": 230,
  "critical": 2,
  "casesPerOneMillion": 1,
  "deathsPerOneMillion": 0,
  "tests": 5000,
  "testsPerOneMillion": 24
}
`````

Time Series Endpoint: [https://coviddata.github.io/coviddata/v1/countries/stats.json](https://coviddata.github.io/coviddata/v1/countries/stats.json)

`````
{
    "country": {
      "key": "nigeria",
      "name": "Nigeria"
    },
    "dates": {
      "2020-02-28": {
        "new": {
          "cases": 1,
          "deaths": 0,
          "recoveries": 0
        },
        "cumulative": {
          "cases": 1,
          "deaths": 0,
          "recoveries": 0
        }
      },
      "2020-02-29": {
        "new": {
          "cases": 0,
          "deaths": 0,
          "recoveries": 0
        },
        "cumulative": {
          "cases": 1,
          "deaths": 0,
          "recoveries": 0
        }
      },
      "2020-03-01": {
        "new": {
          "cases": 0,
          "deaths": 0,
          "recoveries": 0
        },
        "cumulative": {
          "cases": 1,
          "deaths": 0,
          "recoveries": 0
        }
      },....
``````

### JS Query Sample Code For Single Nigeria Data

``````
<script>
    $.getJSON('https://corona.lmao.ninja/countries/Nigeria', function(data) {
        var output = document.getElementById('output');
        output.innerHTML = `
        <div class="">
            <h1 class="post-title">
                # Nigeria Live Stats
            </h1>
            <div>
                <font style="font-size: 20px;">🤪 No of Recovered Cases: <b>${data.recovered}</b></font>
            </div>
            <div>
                <font style="font-size: 20px;">🤢 No of New Cases Today: <b>${data.todayCases}</b></font>
            </div>
            <div>
                <font style="font-size: 20px;">🤒 No of Confirmed Cases: <b>${data.cases}</b></font>
            </div>
            <div>
                <font style="font-size: 20px;">😭 No of Death: <b>${data.deaths}</b></font>
            </div>
        
        </div>
        `;

    });
</script>
``````
### JS Query Sample Code For Time Series Nigeria Data

````
fetch("https://coviddata.github.io/coviddata/v1/countries/stats.json")
  .then(response => response.json())
  .then(data => {
    const country = data.find(country => country.country.name == "Nigeria");
    for (date in country.dates) {
      console.log(`${date} - ${country.dates[date].cumulative.cases} cases`);
    }
  })
  
````
