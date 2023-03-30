let axios = {
    get() {
        let pr = new Promise((resolve, rej) => {

            setTimeout(() => {
                // console.log('I am promise in timeout');
                resolve({d: 1, g: 4, message: "Yoyoyo"})

            }, 3000)
            // console.log('I am promise out of timeout')

        })
        return pr;
    }
}
//
// axios.get()
//     .then((res) => {
//         return res.message
//     })
//     .then((message) => {
//         console.log(message)
//     })
//
//     .catch((err) => {
//         console.error(err)
//     })

let obj = {
    res: 0,
    sum(a) {
        this.res += a;
        return this
    }, min(a) {
        this.res -= a;
        return this
    }, mult(a) {
        this.res *= a;
        return this
    }
}

obj
    .sum(2)
    .sum(3)
    .min(1)
    .mult(2)
// console.log(obj.res)


let fetch = (url) => {
    return new Promise((resolve) => {
        switch (url) {
            case 'microsoft': {
                setTimeout(() => {
                    // console.log(url)
                    return resolve({data: 'microsoft'})
                }, 3000)
                break;
            }
            case 'google': {
                setTimeout(() => {
                    // console.log(url)
                    return resolve({data: 'google'})
                }, 2000)
                break;
            }
            case 'it-kamasutra': {
                setTimeout(() => {
                    // console.log(url)
                    return resolve({data: 'it-kamasutra'})
                }, 500)
                break;
            }
            default: {
                return resolve({data: 'unknown'})
            }
        }
    })
}


let makeRequests2 = () => {
    fetch('microsoft')
        .then((data) => {//don't make new Promise
            console.log(data)
            return fetch('google');//new
        })
        .then((data) => {
            console.log(data)
            return fetch('it-kamasutra');//new
        })
        .then(data => {
            console.log(data)
        })
}
//
let makeRequests = async () => {
    await fetch('microsoft');
    await fetch('google');
    await fetch('it-kamasutra');
}
let makeRequestsAllAtTheMoment = async () => {
    // let p1 = fetch('microsoft');
    // let p2 = fetch('google');
    // let p3 = fetch('it-kamasutra');
    // Promise.all([p1, p2, p3]).then(data => {
    //     console.log(data)
    // })

    let promises = [fetch('microsoft'),
        fetch('google'),
        fetch('it-kamasutra')]
    let data = await Promise.all(promises)
    console.log(data)


}

makeRequestsAllAtTheMoment()


// makeRequests();

