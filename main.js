 console.log("Пекуш ")
  
let  myName = "Пекуш"

 console.log(myName)

 const objectA = {
    a: 10,
    b: true
 }

 const copyOfA = objectA
 copyOfA.a = 20
 copyOfA.c = 'abc'

 console.log(copyOfA)

 console.log(copyOfA.c)

//  function a () {
//     console.log ("Тэксуши")
// }
//  a ()

//  a = 10

//  a ()

 const myCats = {
    teksush : 'Temo4ka',
    ketush : 'Evo4ka',
    pekush : 'Buzik'
 }

 console.log (myCats.teksush)

 myCats.pekushi = 3

 console.log (myCats)

 myCats.teksush = 'Evo4ka'
 console.log (myCats)

 myCats.popular = true

 console.log (myCats)

 delete myCats.pekushi
 console.log (myCats)

 const catFeed = 'feed'
 myCats[catFeed] = 'Proplan'

 console.log (myCats)

 const myCatss = {
    teksush : {name:'Temo4ka',
               age: 10,
               nickname: 'tox',
            },
    ketush :  {name:'Evo4ka',
               age: 12
            },
    pekush :  {name:'Buzik',
               age: 3
            },

    katushi () {
        console.log ('Мои катуша : Темка, Ева, Пекуш')
    }        
 }

 console.log (myCatss.teksush.name)

 delete myCatss.teksush['nickname']

 console.log (myCatss.teksush)

 myCatss.katushi ()

 const myCatss2 = myCatss

 myCatss2.isAdult = 1
 myCatss2.isSenior = 2
 myCatss2.temy4IsSenior = true
 myCatss2.evaIsSenior = true
 myCatss2.buzyaIsAdult = true


 const myTeksushi = Object.assign ({},myCatss2)

 myTeksushi.buzyaIsAdult = false

 console.log(myCatss2)
 console.log(myTeksushi)


// const myCatss2 = {...myCats}
// myCatss2.temy4IsSenior = true
// myCatss2.evaIsSenior = true
// myCatss2.buzyaIsAdult = true
// myCatss2.feed = 'Royal Canin'

// console.log (myCats)
// console.log (myCatss2)


const myCatss2 = JSON.parse(JSON.stringify(myCats))
myCatss2.temy4IsSenior = true
myCatss2.evaIsSenior = true
myCatss2.buzyaIsAdult = true
myCatss2.feed = 'Royal Canin'

console.log (myCats)
console.log (myCatss2)

// let a = 5
// let b = 3

// function sum(a,b) {
//     const c = a + b
//     console.log(c)
// }

// sum(a,b)
 
function myFn(a,b) {
    let c
    a = a+1
    c = a+b
    return c
}


myFn(10,3)

d = myFn(10,3)

console.log (d)

const personCatPek = {
   namebyname : 'Pej',
   age : 3
}

// function increasePekAge (personCat) {
//     personCat.age += 1
//     return personCat
// }

// increasePekAge (personCatPek)
// console.log(personCatPek.age)

function increasePekAge (personCat) {
        updatedPersonCat = Object.assign({},personCat)
        updatedPersonCat.age += 1
        return updatedPersonCat
    }

    const updatedPersonCatPek = increasePekAge(personCatPek)

    console.log(personCatPek.age)
    console.log(updatedPersonCatPek.age)

    function printMyName () {
        console.log ('Ketushi')
    }

    console.log ('start')

    setTimeout (printMyName, 1000)

const arr = [1, '2', true]
arr.forEach(e => {
   console.log(e);
})