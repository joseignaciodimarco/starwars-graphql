module.exports = `
  "A vehicle."
  type Vehicle {
    "The class of the vehicle, such as Wheeled."
    vehicle_class: String!
    "The number of non-essential people the vehicle can transport."
    passengers: String!
    "An array of People that the vehicle has been piloted by."
    pilots: [Character]!
    "The name of the vehicle. The common name, such as Sand Crawler."
    name: String!
    "The ISO 8601 date format of the time that the resource was created."
    created: String!
    "The hypermedia URL of the resource."
    url: String!
    "The maximum number of kilograms that the vehicle can transport."
    cargo_capacity: String!
    "the ISO 8601 date format of the time that the resource was edited."
    edited: String!
    "The maximum length of time that the vehicle can provide consumables for its entire crew without having to resupply."
    consumables: String!
    "The maximum speed of the vehicle in atmosphere."
    max_atmosphering_speed: String!
    "The number of personnel needed to run or pilot the vehicle."
    crew: String!
    "The length of the vehicle in meters."
    length: String!
    "An array of Film that the vehicle has appeared in."
    films: [Film]!
    "The model or official name of the vehicle. Such as All Terrain Attack Transport."
    model: String!
    "The cost of the vehicle new, in galactic credits."
    cost_in_credits: String!
    "The manufacturer of the vehicle. Comma seperated if more than one."
    manufacturer: String!
  }`;
