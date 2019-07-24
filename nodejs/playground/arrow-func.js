// const square = function(x)
// {
//     return x * x
// }

// const square = (x) =>
// {
//     return x * x
// }

// const square = (x) => x * x 


// console.log(square(4))

const event = {
    name: 'Birthday Party',
    guestList: ['Essa', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((Guest) =>{
            console.log(Guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()