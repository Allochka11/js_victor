class User {
    #name = '';

    constructor(name, site, dob) {
        this.#name = name
        this.site = site
        this.dob = dob
        this.counter = 0
    }

    get name() {
        return this.#name
    }

    set name(name) {
        if (name === 'Ann') throw new Error('name Ann is bed name')
        return this.#name = name
    }

    hello() {
        this.counter++
        // debugger
        // console.log(`This ${this.#name} counter = ${this.counter}`)
        console.log(`Hi ${this.#name} from ${this.site} ! Your dob is ${this.dob}!`)
    }

}

let u1 = new User('Alla', 'it-incubator', new Date(1992, 1, 26))
let u2 = new User('ANN', 'it-incubator', new Date(1992, 1, 26))
u2.name = 'Igor'


// users.forEach(u => u.hello())

class Programmer extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob);
        this.tech = tech
    }

    code() {
        console.log(`My name is ${this.name} and i can code on ${this.tech}`)
    }

    hello() {
        super.hello();
        console.log('And you go away')
    }
}

let programmer = new Programmer('Vova', 'dating', new Date(1991, 0, 25), 'php')

// console.log(programmer.hello())

class Hacker extends Programmer {
    constructor() {
        super();
        this.name = 'XXX'
        this.tech = 'XXXX'
    }

    code() {
        console.log(`My hame is ${this.name} and I can hack everything by ${this.tech}!`)
    }
}

let hacker = new Hacker('Vova', 'dating', new Date(1991, 0, 25), 'php');
// hacker.code()


let usersPolymorphism = [u1, u2, programmer, hacker];
usersPolymorphism.forEach(u => u.hello())