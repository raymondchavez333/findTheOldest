const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const people2 = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const people3 = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

function findTheOldest (people){
    let improvedArray = people.map(function (item){
        const d = new Date();
        let currentYear = d.getFullYear();

        if (!("yearOfBirth" in item)){

            item.yearOfBirth = currentYear;
        }

        if (!("yearOfDeath" in item)){

            item.yearOfDeath = currentYear;
        }

        return item;
    });

    let sortedArray = improvedArray.sort(function(a, b){

      return (Math.abs(a.yearOfBirth - a.yearOfDeath)) - (Math.abs(b.yearOfBirth - b.yearOfDeath));
    });

    let oldestObjectPerson = sortedArray[sortedArray.length - 1];
    return oldestObjectPerson;
}

console.log(findTheOldest(people3));