type FlightDetailType = {
  time: string
  date: string
  tag: string
  terminal: string
  airportName: string
}

export type RouteInfoType = {
  airline: string
  flight_number: string
  departure_airport: {
    code: string
    time: string
    date: string
    name: string
    terminal: string
    gate: string
  }
  duration: string
  changePlan?: boolean
  arrival_airport: {
    code: string
    time: string
    date: string
    name: string
    terminal: string
    gate: string
  }
}

const flightRoutes: RouteInfoType[] = [
  {
    airline: 'Phillippines Airline',
    flight_number: 'PA - 5620',
    departure_airport: {
      code: 'BOM',
      time: '14:50',
      date: 'Sun, 29 Jan 2023',
      name: 'Chhatrapati Shivaji International Airport',
      terminal: 'Terminal - 2',
      gate: 'Gate - 25',
    },
    changePlan: true,
    duration: '9hr 50min',
    arrival_airport: {
      code: 'CDG',
      time: '11:50',
      date: 'Sun, 29 Jan 2023',
      name: 'Ch. De Gaulle, Paris, France',
      terminal: 'Terminal - 2E',
      gate: 'Gate - 3',
    },
  },
  {
    airline: 'Phillippines Airline',
    flight_number: 'PA - 645',
    departure_airport: {
      code: 'CDG',
      time: '2:50',
      date: 'Sun, 30 Jan 2023',
      name: 'Ch. De Gaulle, Paris, France',
      terminal: 'Terminal - 2E',
      gate: 'Gate - 3',
    },
    duration: '5hr 50min',
    arrival_airport: {
      code: 'JFK',
      time: '7:35',
      date: 'Sun, 30 Jan 2023',
      name: 'John F Kennedy Intl-NY',
      terminal: 'Terminal - 4',
      gate: 'Gate - 08',
    },
  },
]

export { flightRoutes }
