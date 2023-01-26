//Trial 1 - create a Manager array and return it
describe("Create a Manager array and return it - createManager", function() {
  it("Defines createManager -createManager", function() {
    expect(typeof createManager).toBe("function");
  });

  it("Defines createManager", function() {
    expect(typeof createManager()).toBe("object");
  });

  it("Add manager details and return it", function() {
    let actualResult = createManager("Alex Ferguson", 78, "Manchester FC", 27);

    let expectedResult = ["Alex Ferguson", 78, "Manchester FC", 27];

    expect(actualResult).toEqual(expectedResult);
  });

  it("Add manager details in the order [managerName, managerAge, currentTeam, trophiesWon]", function() {
    let actualResult = createManager("Alphonse", 68, "Arsenal FC", 15);

    var expectedResult = ["Alphonse", 68, "Arsenal FC", 15];

    expect(actualResult).toEqual(expectedResult);
  });

  it("Expects argument length: 4 ", function() {
    expect(createManager.length).toBe(4);
  });
});

//Trial 2 - create a formation object and return it
describe("Create a team formation object and return it - createFormation", function() {
  it("Defines createFormation", function() {
    expect(typeof createFormation).toBe("function");
  });

  it("Return the value as undefined for the elements missing in the array", function() {
    let expectedResult = {
      defender: 2,
      midfield: 3,
      forward: undefined
    };

    let actualResult = createFormation([2, 3]);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return null when called with an empty array", function() {
    let expectedResult = null;

    let actualResult = createFormation([]);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return football team's formation [2, 3, 1]", function() {
    let expectedResult = {
      defender: 2,
      midfield: 3,
      forward: 1
    };

    let actualResult = createFormation([2, 3, 1]);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return football team's formation [2, 4, 5]", function() {
    let expectedResult = {
      defender: 2,
      midfield: 4,
      forward: 5
    };

    let actualResult = createFormation([2, 4, 5]);

    expect(actualResult).toEqual(expectedResult);
  });
});

//Trial 3 - Filter players that debuted in ___ year
describe("Filter player details based on the debut year -filterByDebut", function() {
  it("Defines filterByDebut", function() {
    expect(typeof filterByDebut).toBe("function");
  });

  it("Defines filterByDebut()", function() {
    expect(typeof filterByDebut()).toBe("object");
  });

  it("Return players details debuted in the year 2005", function() {
    let expectedResult = [
      {
        name: "David Silva",
        age: 32,
        debut: 2005,
        team: "Manchester City",
        position: "Midfielder",
        country: "Spain",
        url:
          "https://media.guim.co.uk/cf0a8b9a85d5cab6f42e5a7172a056b2a2aff541/0_560_4618_2771/500.jpg",
        awards: [
          {
            name: "PFA Premier League Team of the Year",
            year: 2014
          }
        ]
      }
    ];

    let actualResult = filterByDebut(2005);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return all players that debuted in same year", function() {
    let expectedResult = [
      {
        name: "Cristiano Ronaldo",
        age: 33,
        debut: 2003,
        team: "Juventus",
        position: "Forward",
        country: "Portugal",
        url:
          "https://media.guim.co.uk/f53bba20898fef82548e3b8369d68b3c9b25b4c1/1_189_3919_2351/500.jpg",
        awards: [
          {
            name: "The Best FIFA Men's Player",
            year: 2017
          },
          {
            name: "European Golden Shoe",
            year: 2015
          },
          {
            name: "Ballon",
            year: 2018
          }
        ]
      },
      {
        name: "Lionel Messi",
        age: 31,
        debut: 2003,
        team: "Barcelona",
        position: "Forward",
        country: "Argentina",
        url:
          "https://media.guim.co.uk/b035e8f52c5b5612121fdcf8b54bf149be4f67e7/0_211_3846_2307/500.jpg",
        awards: [
          {
            name: "FIFA World Player of the Year",
            year: 2009
          },
          {
            name: "The Best FIFA Men's Player",
            year: 2019
          },
          {
            name: "European Golden Shoe",
            year: 2018
          }
        ]
      },
      {
        name: "Antoine Griezmann",
        age: 27,
        debut: 2003,
        team: "Atlético Madrid",
        position: "Forward",
        country: "France",
        url:
          "https://media.guim.co.uk/79e2559369595043915399ba8adfb55948412332/0_666_5077_3046/500.jpg",
        awards: [
          {
            name: "UEFA Euro adidas Golden Boot",
            year: 2017
          },
          {
            name: "The Best FIFA Men's Player",
            year: 2016
          }
        ]
      },
      {
        name: "Luis Suárez",
        age: 31,
        debut: 2003,
        team: "Barcelona",
        position: "Forward",
        country: "Uruguay",
        url:
          "https://media.guim.co.uk/2dcf66e61d70eb9e18807acb252d177108913677/0_80_3000_1801/500.jpg",
        awards: [
          {
            name: "European Golden Shoe",
            year: 2014
          },
          {
            name: "FIFA FIFPro World XI",
            year: 2017
          }
        ]
      }
    ];

    let actualResult = filterByDebut(2003);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return empty array if there no players debuted in the given year", function() {
    expect(filterByDebut(2000)).toEqual([]);
  });
});

//Trial 4 - Filter players that play at the position _______
describe("Filter players based on  position - filterByPosition", function() {
  it("Defines filterByPosition", function() {
    expect(typeof filterByPosition).toBe("function");
  });

  it("Return empty array when no parameters are passed", function() {
    expect(filterByPosition()).toEqual([]);
  });

  it("Return empty array if specfied position is not defined", function() {
    expect(filterByPosition("substitute")).toEqual([]);
  });

  it("Return all players at the specified position", function() {
    let expectedResult = [
      {
        name: "Raphaël Varane",
        age: 25,
        debut: 2010,
        team: "Real Madrid",
        position: "Defender",
        country: "France",
        url:
          "https://media.guim.co.uk/ca6b3b683136f68e87631092cc5fd5fbf809bc0d/83_565_3451_2071/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2018
          }
        ]
      },
      {
        name: "Sergio Ramos",
        age: 32,
        debut: 2004,
        team: "Real Madrid",
        position: "Defender",
        country: "Spain",
        url:
          "https://media.guim.co.uk/abdacdfe6cd56d03d49b7851926ceeab4f8a9314/176_128_2651_1591/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2019
          }
        ]
      },
      {
        name: "Marcelo",
        age: 30,
        debut: 2007,
        team: "Real Madrid",
        position: "Defender",
        country: "Brazil",
        url:
          "https://media.guim.co.uk/7247cfe16161d428218f34b5b0d7e5485bfa84a2/152_149_2221_1333/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2019
          }
        ]
      },
      {
        name: "Virgil van Dijk",
        age: 26,
        debut: 2011,
        team: "Liverpool",
        position: "Defender",
        country: "Netherlands",
        url:
          "https://media.guim.co.uk/e798a161e0ecd2b27895aa6e5e8f29351db0d98c/0_130_5472_3283/500.jpg",
        awards: [
          {
            name: "UEFA Men's Player of the Year Award",
            year: 2019
          },
          {
            name: "FIFA FIFPro World X",
            year: 2019
          }
        ]
      }
    ];

    let result = filterByPosition("Defender");

    expect(result).toEqual(expectedResult);
  });

  it("Validate the number of players with same position", function() {
    expect(filterByPosition("Forward").length).toEqual(13);
  });
});

// //Trial 5 - Filter players that have won ______ award
describe("Filter players based on award - filterByAward", function() {
  it("Defines filterByAward", function() {
    expect(typeof filterByAward).toBe("function");
  });

  it("Return empty array when no parameter is passed", function() {
    expect(filterByAward()).toEqual([]);
  });

  it("Return empty array if no player has won the given award", function() {
    expect(filterByAward("Golden Leg")).toEqual([]);
  });

  it("Return players who have won FIFA FIFPro World XI award", function() {
    let expectedResult = [
      {
        name: "NGolo Kanté",
        age: 27,
        debut: 2007,
        team: "Chelsea",
        position: "Midfielder",
        country: "France",
        url:
          "https://media.guim.co.uk/9aeaf1767280c511ff5295a293e9bafe20f35d65/0_129_4105_2463/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2018
          },
          {
            name: "French Player of the Year",
            year: 2017
          }
        ]
      },
      {
        name: "Kylian Mbappe",
        age: 20,
        debut: 2015,
        team: "Paris St-Germain",
        position: "Forward",
        country: "France",
        url:
          "https://media.guim.co.uk/740417015e9d2279928da7a46036d6ff050089fc/1162_672_5644_3387/500.jpg",
        awards: [
          {
            name: "Golden Boy",
            year: 2017
          },
          {
            name: "French Player of the Year",
            year: 2018
          },
          {
            name: "FIFA FIFPro World XI",
            year: 2018
          }
        ]
      },
      {
        name: "Neymar",
        age: 26,
        debut: 2009,
        team: "Paris St-Germain",
        position: "Forward",
        country: "Brazil",
        url:
          "https://media.guim.co.uk/2b6caa5d916bf2936e054f7294f020a500caa0fa/187_230_2734_1641/500.jpg",
        awards: [
          {
            name: "FIFA Puskás Award",
            year: 2012
          },
          {
            name: "FIFA FIFPro World XI",
            year: 2017
          },
          {
            name: "Samba Gold",
            year: 2017
          }
        ]
      },
      {
        name: "Raphaël Varane",
        age: 25,
        debut: 2010,
        team: "Real Madrid",
        position: "Defender",
        country: "France",
        url:
          "https://media.guim.co.uk/ca6b3b683136f68e87631092cc5fd5fbf809bc0d/83_565_3451_2071/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2018
          }
        ]
      },
      {
        name: "Luis Suárez",
        age: 31,
        debut: 2003,
        team: "Barcelona",
        position: "Forward",
        country: "Uruguay",
        url:
          "https://media.guim.co.uk/2dcf66e61d70eb9e18807acb252d177108913677/0_80_3000_1801/500.jpg",
        awards: [
          {
            name: "European Golden Shoe",
            year: 2014
          },
          {
            name: "FIFA FIFPro World XI",
            year: 2017
          }
        ]
      },
      {
        name: "Sergio Ramos",
        age: 32,
        debut: 2004,
        team: "Real Madrid",
        position: "Defender",
        country: "Spain",
        url:
          "https://media.guim.co.uk/abdacdfe6cd56d03d49b7851926ceeab4f8a9314/176_128_2651_1591/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2019
          }
        ]
      },
      {
        name: "Marcelo",
        age: 30,
        debut: 2007,
        team: "Real Madrid",
        position: "Defender",
        country: "Brazil",
        url:
          "https://media.guim.co.uk/7247cfe16161d428218f34b5b0d7e5485bfa84a2/152_149_2221_1333/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2019
          }
        ]
      },
      {
        name: "Toni Kroos",
        age: 28,
        debut: 2007,
        team: "Real Madrid",
        position: "Midfielder",
        country: "Germany",
        url:
          "https://media.guim.co.uk/facf1f1a9a6679715927fa622d63d6659b411ef8/67_447_3931_2359/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2017
          },
          {
            name: "Footballer of the Year in Germany",
            year: 2018
          }
        ]
      }
    ];

    let actualResult = filterByAward("FIFA FIFPro World XI");

    expect(actualResult).toEqual(expectedResult);
  });

  it("Validate the number of players with same awards", function() {
    expect(filterByAward("FIFA FIFPro World XI").length).toBe(8);
  });
});

//Trial 6 - Filter players that won ______ award ____ times
describe("Filter players based on awards and number of times - filterByAwardxTimes", function() {
  it("Defines filterByAwardxTimes", function() {
    expect(typeof filterByAwardxTimes).toBe("function");
  });

  it("Return empty array when no parameter is passed", function() {
    expect(filterByAwardxTimes()).toEqual([]);
  });

  it("Return empty array if no player has won the given award", function() {
    expect(filterByAwardxTimes("Golden Leg", 1)).toEqual([]);
  });

  it("Return players who have won The Best FIFA Men's Player, 2 times", function() {
    let expectedResult = [
      {
        name: "Luka Modric",
        age: 33,
        debut: 2006,
        team: "Real Madrid",
        position: "Midfielder",
        country: "Croatian",
        url:
          "https://media.guim.co.uk/737d9bde5b3cf33b0230c887acfadf9e68c427bd/169_141_3371_2023/500.jpg",
        awards: [
          {
            name: "The Best FIFA Men's Player",
            year: 2016
          },
          {
            name: "Ballon",
            year: 2018
          },
          {
            name: "The Best FIFA Men's Player",
            year: 2018
          }
        ]
      }
    ];

    let actualResult = filterByAwardxTimes("The Best FIFA Men's Player", 2);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return players than have won African Player of the Year, 2 times", function() {
    let expectedResult = [
      {
        name: "Mohamed Salah",
        age: 26,
        debut: 2008,
        team: "Liverpool",
        position: "Forward",
        country: "Egypt",
        url:
          "https://media.guim.co.uk/83a6c50f2b91abe0c1189dabfde3aab9838076ee/0_0_3897_2339/500.jpg",
        awards: [
          {
            name: "African Player of the Year",
            year: 2018
          },
          {
            name: "African Player of the Year",
            year: 2019
          },
          {
            name: "FWA Footballer of the Year",
            year: 2018
          }
        ]
      }
    ];

    let actualResult = filterByAwardxTimes("African Player of the Year", 2);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return players who have won PFA Premier League Team of the Year, 2 times", function() {
    let expectedResult = [
      {
        name: "Eden Hazard",
        age: 27,
        debut: 2008,
        team: "Chelsea",
        position: "Forward",
        country: "Belgium",
        url:
          "https://media.guim.co.uk/4bfc368ac31ecfe116bde1c8574a11849204932d/0_62_4768_2860/500.jpg",
        awards: [
          {
            name: "UNFP Young Player of the Year",
            year: 2009
          },
          {
            name: "PFA Premier League Team of the Year",
            year: 2011
          },
          {
            name: "PFA Premier League Team of the Year",
            year: 2015
          }
        ]
      },
      {
        name: "Kevin De Bruyne",
        age: 27,
        debut: 2010,
        team: "Manchester City",
        position: "Midfielder",
        country: "Belgium",
        url:
          "https://media.guim.co.uk/ec5c34110c99eeef9ac4fd8966b0e694bc5e8f89/0_107_3607_2164/500.jpg",
        awards: [
          {
            name: "PFA Premier League Team of the Year",
            year: 2016
          },
          {
            name: "PFA Premier League Team of the Year",
            year: 2018
          }
        ]
      }
    ];

    let actualResult = filterByAwardxTimes(
      "PFA Premier League Team of the Year",
      2
    );

    expect(actualResult).toEqual(expectedResult);
  });
});

// //Trial 7 - Filter players that won ______ award and belong to ______ country
describe("Filter players based on awards and country - filterByAwardxCountry", function() {
  it("Defines filterByAwardxCountry", function() {
    expect(typeof filterByAwardxCountry).toBe("function");
  });

  it("Return empty array when no parameters are passed", function() {
    expect(filterByAwardxCountry()).toEqual([]);
  });

  it("Return empty array if no player has won given award", function() {
    expect(filterByAwardxCountry("Golden Leg", "Belgium")).toEqual([]);
  });

  it("Return empty array if no player belongs to given country", function() {
    expect(
      filterByAwardxCountry("Premier League Golden Boot", "India")
    ).toEqual([]);
  });

  it("Return empty array if no player has won given award nor belongs to given country", function() {
    expect(filterByAwardxCountry("Golden Leg", "India")).toEqual([]);
  });

  it("Return all players that belong to England and have won Premier League Golden Boot", function() {
    let expectedResult = [
      {
        name: "Harry Kane",
        age: 25,
        debut: 2015,
        team: "Tottenham Hotspur",
        position: "Midfielder",
        country: "England",
        url:
          "https://media.guim.co.uk/4faf62e478fd264155e90a4578289f4cc5a602a9/0_79_4779_2867/500.jpg",
        awards: [
          {
            name: "Premier League Golden Boot",
            year: 2018
          },
          {
            name: "World Cup Golden Boot",
            year: 2018
          }
        ]
      }
    ];

    let actualResult = filterByAwardxCountry(
      "Premier League Golden Boot",
      "England"
    );

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return all players that belong to France and have won French Player of the Year", function() {
    expect().toEqual();
    let expectedResult = [
      {
        name: "NGolo Kanté",
        age: 27,
        debut: 2007,
        team: "Chelsea",
        position: "Midfielder",
        country: "France",
        url:
          "https://media.guim.co.uk/9aeaf1767280c511ff5295a293e9bafe20f35d65/0_129_4105_2463/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2018
          },
          {
            name: "French Player of the Year",
            year: 2017
          }
        ]
      },
      {
        name: "Kylian Mbappe",
        age: 20,
        debut: 2015,
        team: "Paris St-Germain",
        position: "Forward",
        country: "France",
        url:
          "https://media.guim.co.uk/740417015e9d2279928da7a46036d6ff050089fc/1162_672_5644_3387/500.jpg",
        awards: [
          {
            name: "Golden Boy",
            year: 2017
          },
          {
            name: "French Player of the Year",
            year: 2018
          },
          {
            name: "FIFA FIFPro World XI",
            year: 2018
          }
        ]
      }
    ];

    let actualResult = filterByAwardxCountry(
      "French Player of the Year",
      "France"
    );

    expect(actualResult).toEqual(expectedResult);
  });
});

// //Trial 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
describe("Filter players based on awards, team and age - filterByNoOfAwardsxTeamxAge", function() {
  it("Defines filterByNoOfAwardsxTeamxAge", function() {
    expect(typeof filterByNoOfAwardsxTeamxAge).toBe("function");
  });

  it("Return empty array when no parameters are passed", function() {
    expect(filterByNoOfAwardsxTeamxAge()).toEqual([]);
  });

  it("Return empty array if no match is found", function() {
    expect(filterByNoOfAwardsxTeamxAge(2, "Barcelona", 24)).toEqual([]);
  });

  it("Return players younger than 40 years of age who have won at least 1 award and play for Real Madrid", function() {
    let expectedResult = [
      {
        name: "Luka Modric",
        age: 33,
        debut: 2006,
        team: "Real Madrid",
        position: "Midfielder",
        country: "Croatian",
        url:
          "https://media.guim.co.uk/737d9bde5b3cf33b0230c887acfadf9e68c427bd/169_141_3371_2023/500.jpg",
        awards: [
          {
            name: "The Best FIFA Men's Player",
            year: 2016
          },
          {
            name: "Ballon",
            year: 2018
          },
          {
            name: "The Best FIFA Men's Player",
            year: 2018
          }
        ]
      },
      {
        name: "Raphaël Varane",
        age: 25,
        debut: 2010,
        team: "Real Madrid",
        position: "Defender",
        country: "France",
        url:
          "https://media.guim.co.uk/ca6b3b683136f68e87631092cc5fd5fbf809bc0d/83_565_3451_2071/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2018
          }
        ]
      },
      {
        name: "Sergio Ramos",
        age: 32,
        debut: 2004,
        team: "Real Madrid",
        position: "Defender",
        country: "Spain",
        url:
          "https://media.guim.co.uk/abdacdfe6cd56d03d49b7851926ceeab4f8a9314/176_128_2651_1591/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2019
          }
        ]
      },
      {
        name: "Marcelo",
        age: 30,
        debut: 2007,
        team: "Real Madrid",
        position: "Defender",
        country: "Brazil",
        url:
          "https://media.guim.co.uk/7247cfe16161d428218f34b5b0d7e5485bfa84a2/152_149_2221_1333/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2019
          }
        ]
      },
      {
        name: "Toni Kroos",
        age: 28,
        debut: 2007,
        team: "Real Madrid",
        position: "Midfielder",
        country: "Germany",
        url:
          "https://media.guim.co.uk/facf1f1a9a6679715927fa622d63d6659b411ef8/67_447_3931_2359/500.jpg",
        awards: [
          {
            name: "FIFA FIFPro World XI",
            year: 2017
          },
          {
            name: "Footballer of the Year in Germany",
            year: 2018
          }
        ]
      }
    ];

    let actualResult = filterByNoOfAwardsxTeamxAge(1, "Real Madrid", 40);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Validate the number of players based on awards,team and age", function() {
    expect(filterByAward("FIFA FIFPro World XI").length).toBe(8);
  });
});

// // //Challenge 2 - Sort players beloging to _____ team in descending order of awards won

// describe("Sort players of team in descending order of awards won - FilterByTeamxSortByNoOfAwards", function () {

//   it("Defines FilterByTeamxSortByNoOfAwards", function () {
//     expect(typeof FilterByTeamxSortByNoOfAwards).toBe("function");

//   });

//   it("Return empty array when no parameter is passed", function () {
//     expect(FilterByTeamxSortByNoOfAwards()).toEqual([]);
//   });

//   it("Return empty array if there is no specified parameteres are there", function () {
//     expect(FilterByTeamxSortByNoOfAwards("CSK")).toEqual([]);
//   });

//   it("Sorting players of team in descending order of awards won", function () {
//     let expectedResult = ([{ "name": "Luka Modric", "age": 33, "debut": 2006, "team": "Real Madrid", "position": "Midfielder", "country": "Croatian", "url": "https://media.guim.co.uk/737d9bde5b3cf33b0230c887acfadf9e68c427bd/169_141_3371_2023/500.jpg", "awards": [{ "name": "The Best FIFA Men's Player", "year": 2016 }, { "name": "Ballon", "year": 2018 }, { "name": "The Best FIFA Men's Player", "year": 2018 }] }, { "name": "Toni Kroos", "age": 28, "debut": 2007, "team": "Real Madrid", "position": "Midfielder", "country": "Germany", "url": "https://media.guim.co.uk/facf1f1a9a6679715927fa622d63d6659b411ef8/67_447_3931_2359/500.jpg", "awards": [{ "name": "FIFA FIFPro World XI", "year": 2017 }, { "name": "Footballer of the Year in Germany", "year": 2018 }] }, { "name": "Sergio Ramos", "age": 32, "debut": 2004, "team": "Real Madrid", "position": "Defender", "country": "Spain", "url": "https://media.guim.co.uk/abdacdfe6cd56d03d49b7851926ceeab4f8a9314/176_128_2651_1591/500.jpg", "awards": [{ "name": "FIFA FIFPro World XI", "year": 2019 }] }, { "name": "Marcelo", "age": 30, "debut": 2007, "team": "Real Madrid", "position": "Defender", "country": "Brazil", "url": "https://media.guim.co.uk/7247cfe16161d428218f34b5b0d7e5485bfa84a2/152_149_2221_1333/500.jpg", "awards": [{ "name": "FIFA FIFPro World XI", "year": 2019 }] }, { "name": "Raphaël Varane", "age": 25, "debut": 2010, "team": "Real Madrid", "position": "Defender", "country": "France", "url": "https://media.guim.co.uk/ca6b3b683136f68e87631092cc5fd5fbf809bc0d/83_565_3451_2071/500.jpg", "awards": [{ "name": "FIFA FIFPro World XI", "year": 2018 }] }]);

//     let actualResult = FilterByTeamxSortByNoOfAwards("Real Madrid");

//     expect(actualResult).toEqual(expectedResult);
//   });
// });

// // //Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

// describe("Sort player's names in alphabetical order  who have won certain awards certain times - FilterByTeamxSortByNoOfAwards", function () {
//   it("Defines SortByNamexAwardxTimes", function () {
//     expect(typeof SortByNamexAwardxTimes).toBe("function");
//   });

//   it("Return empty array when no parameter is passed", function () {
//     expect(SortByNamexAwardxTimes()).toEqual([]);
//   });

//   it("Return empty array if there is no specified parameteres are there", function () {
//     expect(SortByNamexAwardxTimes("IPL TROPHY", 1, "SRI LANKA")).toEqual([]);
//   });

//   it("Sort players name alphabetical order of names who have won certain awards certain times", function () {
//     let expectedResult = ([{ "name": "Marcelo", "age": 30, "debut": 2007, "team": "Real Madrid", "position": "Defender", "country": "Brazil", "url": "https://media.guim.co.uk/7247cfe16161d428218f34b5b0d7e5485bfa84a2/152_149_2221_1333/500.jpg", "awards": [{ "name": "FIFA FIFPro World XI", "year": 2019 }] }, { "name": "Neymar", "age": 26, "debut": 2009, "team": "Paris St-Germain", "position": "Forward", "country": "Brazil", "url": "https://media.guim.co.uk/2b6caa5d916bf2936e054f7294f020a500caa0fa/187_230_2734_1641/500.jpg", "awards": [{ "name": "FIFA Puskás Award", "year": 2012 }, { "name": "FIFA FIFPro World XI", "year": 2017 }, { "name": "Samba Gold", "year": 2017 }] }]);

//     let actualResult = SortByNamexAwardxTimes("FIFA FIFPro World XI", 1, "Brazil");

//     expect(actualResult).toEqual(expectedResult);

//   });

//   it("Return single array if only one array satisfies the condition", function () {
//     let expectedResult = ([{ "name": "Luka Modric", "age": 33, "debut": 2006, "team": "Real Madrid", "position": "Midfielder", "country": "Croatian", "url": "https://media.guim.co.uk/737d9bde5b3cf33b0230c887acfadf9e68c427bd/169_141_3371_2023/500.jpg", "awards": [{ "name": "The Best FIFA Men's Player", "year": 2016 }, { "name": "Ballon", "year": 2018 }, { "name": "The Best FIFA Men's Player", "year": 2018 }] }]);

//     let actualResult = SortByNamexAwardxTimes("The Best FIFA Men's Player", 2, "Croatian");

//     expect(actualResult).toEqual(expectedResult);
//   });

// });

// // /Judgement 2 - Sort players that are older than _____ years in alphabetical order
// // Sort the awards won by them in reverse chronological order*/

// describe("Sort players that are older than specified age in alphabetical order - SortByNamexOlderThan", function () {
//   it("Defines SortByNamexOlderThan", function () {
//     expect(typeof SortByNamexOlderThan).toBe("function");
//   });

//   it("Return empty array when no parameter is passed", function () {
//     expect(SortByNamexOlderThan()).toEqual([]);
//   });

//   it("Return empty array if there is no specified parameteres are there", function () {
//     expect(SortByNamexOlderThan(50)).toEqual([]);
//   });

//   it("Return empty array if there is no specified parameteres are there", function () {

//     let expectedResult = ([{ "name": "Cristiano Ronaldo", "age": 33, "debut": 2003, "team": "Juventus", "position": "Forward", "country": "Portugal", "url": "https://media.guim.co.uk/f53bba20898fef82548e3b8369d68b3c9b25b4c1/1_189_3919_2351/500.jpg", "awards": [{ "name": "Ballon", "year": 2018 }, { "name": "The Best FIFA Men's Player", "year": 2017 }, { "name": "European Golden Shoe", "year": 2015 }] }, { "name": "David Silva", "age": 32, "debut": 2005, "team": "Manchester City", "position": "Midfielder", "country": "Spain", "url": "https://media.guim.co.uk/cf0a8b9a85d5cab6f42e5a7172a056b2a2aff541/0_560_4618_2771/500.jpg", "awards": [{ "name": "PFA Premier League Team of the Year", "year": 2014 }] }, { "name": "Luka Modric", "age": 33, "debut": 2006, "team": "Real Madrid", "position": "Midfielder", "country": "Croatian", "url": "https://media.guim.co.uk/737d9bde5b3cf33b0230c887acfadf9e68c427bd/169_141_3371_2023/500.jpg", "awards": [{ "name": "Ballon", "year": 2018 }, { "name": "The Best FIFA Men's Player", "year": 2018 }, { "name": "The Best FIFA Men's Player", "year": 2016 }] }, { "name": "Sergio Ramos", "age": 32, "debut": 2004, "team": "Real Madrid", "position": "Defender", "country": "Spain", "url": "https://media.guim.co.uk/abdacdfe6cd56d03d49b7851926ceeab4f8a9314/176_128_2651_1591/500.jpg", "awards": [{ "name": "FIFA FIFPro World XI", "year": 2019 }] }]);

//     let actualResult = SortByNamexOlderThan(32)

//     expect(actualResult).toEqual(expectedResult);
//   });

// });
