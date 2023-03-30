const doAfter = (seconds) => {

    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    });
    return myPromise
}