const PROGRAMS_DATA: IProgram[] = [
  {
    id: 1,
    name: "SDNE",
    startingTerm: [
      "Fall",
      "Winter"
    ],
    noOfYears: 3,
    years: [
      {
        id: 1,
        name: "First",
        time: "2019-2020",
        terms: [
          {
            id: 1,
            name: "First Term",
            time: "September to December",
            courses: 6,
            coop: false
          },
          {
            id: 2,
            name: "Second Term",
            time: "January to April",
            courses: 6,
            coop: false
          },
          {
            id: 3,
            name: "Break",
            time: "May to August",
            courses: 0,
            coop: false
          }
        ]
      },
      {
        id: 2,
        name: "Second",
        time: "2020-2021",
        terms: [
          {
            id: 1,
            name: "third",
            time: "September to December",
            courses: 6,
            coop: false
          },
          {
            id: 2,
            name: "co-op",
            time: "January to April",
            courses: 0,
            coop: true
          },
          {
            id: 3,
            name: "fourth",
            time: "May to August",
            courses: 6,
            coop: false
          }
        ]
      },
      {
        id: 3,
        name: "Third",
        time: "2020-2021",
        terms: [
          {
            id: 1,
            name: "third",
            time: "September to December",
            courses: 6,
            coop: false
          },
          {
            id: 2,
            name: "co-op",
            time: "January to April",
            courses: 0,
            coop: true
          },
          {
            id: 3,
            name: "fourth",
            time: "May to August",
            courses: 6,
            coop: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Not SDNE",
    startingTerm: [
      "Fall",
      "Summer"
    ],
    noOfYears: 3,
    years: [
      {
        id: 1,
        name: "First",
        time: "2019-2020",
        terms: [
          {
            id: 1,
            name: "First Term",
            time: "September to December",
            courses: 6,
            coop: false
          },
          {
            id: 2,
            name: "Second Term",
            time: "January to April",
            courses: 6,
            coop: false
          },
          {
            id: 3,
            name: "Break",
            time: "May to August",
            courses: 0,
            coop: false
          }
        ]
      },
      {
        id: 2,
        name: "Second",
        time: "2020-2021",
        terms: [
          {
            id: 1,
            name: "third",
            time: "September to December",
            courses: 6,
            coop: false
          },
          {
            id: 2,
            name: "co-op",
            time: "January to April",
            courses: 0,
            coop: true
          },
          {
            id: 3,
            name: "fourth",
            time: "May to August",
            courses: 6,
            coop: false
          }
        ]
      }
    ]
  }
]

export default PROGRAMS_DATA;