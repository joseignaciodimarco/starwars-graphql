# Star Wars - Rest API to GraphQL

Get information about Star Wars world with GraphQL API.

<em>Star Wars rest API: https://swapi.dev/</em>

## Run the project

1. Clone the repository
2. run `npm install`
3. run `npm run start`
4. open `localhost:4000` in the browser

## How to use it
### Queries examples
#### Get Planets' information
Query
```graphql
query getPlanets {
  planets {
    name
    rotation_period
    orbital_period
    diameter
    climate
    gravity
  }
}
```
Result
```graphql
{
  "data": {
    "planets": [
      {
        "name": "Tatooine",
        "rotation_period": "23",
        "orbital_period": "304",
        "diameter": "10465",
        "climate": "arid",
        "gravity": "1 standard"
      },
      {
        "name": "Alderaan",
        "rotation_period": "24",
        "orbital_period": "364",
        "diameter": "12500",
        "climate": "temperate",
        "gravity": "1 standard"
      },
      {
        "name": "Yavin IV",
        "rotation_period": "24",
        "orbital_period": "4818",
        "diameter": "10200",
        "climate": "temperate, tropical",
        "gravity": "1 standard"
      },
      {
        "name": "Hoth",
        "rotation_period": "23",
        "orbital_period": "549",
        "diameter": "7200",
        "climate": "frozen",
        "gravity": "1.1 standard"
      },
      {
        "name": "Dagobah",
        "rotation_period": "23",
        "orbital_period": "341",
        "diameter": "8900",
        "climate": "murky",
        "gravity": "N/A"
      },
      {
        "name": "Bespin",
        "rotation_period": "12",
        "orbital_period": "5110",
        "diameter": "118000",
        "climate": "temperate",
        "gravity": "1.5 (surface), 1 standard (Cloud City)"
      },
      {
        "name": "Endor",
        "rotation_period": "18",
        "orbital_period": "402",
        "diameter": "4900",
        "climate": "temperate",
        "gravity": "0.85 standard"
      },
      {
        "name": "Naboo",
        "rotation_period": "26",
        "orbital_period": "312",
        "diameter": "12120",
        "climate": "temperate",
        "gravity": "1 standard"
      },
      {
        "name": "Coruscant",
        "rotation_period": "24",
        "orbital_period": "368",
        "diameter": "12240",
        "climate": "temperate",
        "gravity": "1 standard"
      },
      {
        "name": "Kamino",
        "rotation_period": "27",
        "orbital_period": "463",
        "diameter": "19720",
        "climate": "temperate",
        "gravity": "1 standard"
      }
    ]
  }
}
```
#### Get Film information for a given ID
Query
```graphql
query getFilmById {
  film(id: 1) {
    title,
    director,
    edited,
    characters {
      name
    }
  }
}
```
Result
```graphql
{
  "data": {
    "film": {
      "title": "A New Hope",
      "director": "George Lucas",
      "edited": "2014-12-20T19:49:45.256000Z",
      "characters": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "C-3PO"
        },
        {
          "name": "R2-D2"
        },
        {
          "name": "Darth Vader"
        },
        {
          "name": "Leia Organa"
        },
        {
          "name": "Owen Lars"
        },
        {
          "name": "Beru Whitesun lars"
        },
        {
          "name": "R5-D4"
        },
        {
          "name": "Biggs Darklighter"
        },
        {
          "name": "Obi-Wan Kenobi"
        },
        {
          "name": "Wilhuff Tarkin"
        },
        {
          "name": "Chewbacca"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Greedo"
        },
        {
          "name": "Jabba Desilijic Tiure"
        },
        {
          "name": "Wedge Antilles"
        },
        {
          "name": "Jek Tono Porkins"
        },
        {
          "name": "Raymus Antilles"
        }
      ]
    }
  }
}
```
#### A list of queries can be found on the right side of the playground once it is running. 
* <em>DOCS > QUERIES</em>

## Run ESLint rules and unit tests
* `npm run lint`
* `npm run test`
