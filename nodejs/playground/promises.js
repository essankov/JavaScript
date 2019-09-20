const doWorkPromises = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject('Things went wrong!')
        //resolve([7, 4, 1])
    }, 2000)
})


doWorkPromises.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})