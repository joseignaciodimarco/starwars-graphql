module.exports = `
  "A Starship"
  type Starship {
    "The number of non-essential people the starship can transport."
    passengers: String!
    "An array of People URL Resources that the starship has been piloted by."
    pilots: [Character]!
    "The name of the starship. The common name, such as Death Star."
    name: String!
    "The class of the starships hyperdrive."
    hyperdrive_rating: String!
    "The hypermedia URL of the resource."
    url: String!
    "The maximum number of kilograms that the starship can transport."
    cargo_capacity: String!
    "the ISO 8601 date format of the time that the resource was edited."
    edited: String!
    "The maximum length of time that the starship can provide consumables for its entire crew without having to resupply."
    consumables: String!
    "The maximum speed of the starship in atmosphere. n/a if the starship is incapable of atmosphering flight."
    max_atmosphering_speed: String!
    "The number of personnel needed to run or pilot the starship."
    crew: String!
    "The length of the starship in meters."
    length: String!
    "The Maximum number of Megalights the starship can travel in a standard hour. A Megalight is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth."
    MGLT: String!
    "The class of the starship, such as Starfighter or Deep Space Mobile Battlestation."
    starship_class: String!
    "The ISO 8601 date format of the time that the resource was created."
    created: String!
    "An array of Film URL Resources that the starship has appeared in."
    films: [Film]!
    "The model or official name of the starship. Such as T-65 X-wing or DS-1 Orbital Battle Station."
    model: String!
    "The cost of the starship new, in galactic credits."
    cost_in_credits: String!
    "The manufacturer of the starship. Comma seperated if more than one."
    manufacturer: String!
  }
`;