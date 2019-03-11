const companies = [{
        name: "Company One",
        category: "Finance",
        start: 1921,
        end: 2003
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010
    },
    {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014
    },
    {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010
    },
    {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996
    },
    {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016
    },
    {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989
    }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//foreach

/*for (let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}*/

companies.forEach(function (company) {
    console.log(company.name);
})

//filter

/*let canDrink = [];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}*/


/*const canDrink = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
})*/

//get 21 and over



const canDrink = ages.filter(age => age >= 21);

console.log("These are the ages that can drink " + canDrink);




const retailCompanies_ = companies.filter(function (company) {
    if (company.category === "Retail") {
        return true;

    }
});

const retailCompanies = companies.filter(company => company.category === "Retail")
console.log(retailCompanies);





const millennial_ = companies.filter(function (company) {
    if (company.start > 2000) {
        return true;
    }
})

const millennial = companies.filter(company => company.start > 2000)
console.log(millennial);


const retro = companies.filter(company => (company.start>1979 && company.start<1990))
console.log(retro);


const powerHouse = companies.filter(company => (company.end - company.start) >=10  )
console.log(powerHouse);
//map
//create array of company names

const companyNames = companies.map(function (company) {
    return company.names;

})

console.log(companyNames);
// will return a 1 for every elememt in the array. map will parse through the whole array.

const test = companies.map(function (company) {
    return 1;

})

console.log(test)

const testMap = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end} ];`

})

//shortHand

const testMap_shortHand = companies.map(company=> `${company.name} [${company.start}-${company.end}]`)


console.log(testMap_shortHand)

//adding two maps together
//now age is squared, then multiplied by 2
const agesSquare = ages.map(age => Math.sqrt(age)).map(age => age * 2);

const futureAge = ages.map(age => age + 10);

console.log("these are the ages first squared, then mulitplied by 2 using two map functions together" + agesSquare);
console.log(futureAge);


//sort


// const sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

const alphabet = companies.sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1));
console.log(alphabet);

const sortAges = ages.sort((a, b) => (a > b) ? 1 : -1);
console.log(sortAges);
//reduce


// let ageSum = 0;

// for (let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }


const ageSum = ages.reduce((total, age) => total + age,0)



console.log("this is the sum of all the ages:" + ageSum);

// const totalYears = companies.reduce((total, company) =>
//     total + (company.end - company.start), 0)

const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);

console.log("this is the sum of all the companies years active" + totalYears);


const combinedTest = ages.map(age => age * 2).filter(age => age > 30).sort((a, b) => a + b, 0);
console.log(combinedTest);

const lineupAtBar = ages.filter(age => age >= 21).sort((a, b) => a > b, 0);

console.log("everyone lined up at the bar by age" + lineupAtBar);