let pets = [ "Kaiser", "Aaron", "Freya"];
// let pets = [];
let count = 0;
let petsDelayed = () => {
    return new Promise((resolve, reject) => {
        // count++;
        // if(count == 2) reject('Error');
        if(pets.length > 0) {
            setTimeout(() => {
                resolve(pets)
                // return pets;
            }, 2000);
        } else {
            reject("No pets left");
        }
    });
}
// console.log(petsDelayed());
// Promise THEN/CATCH
// petsDelayed().then(response => {
//     console.log(response);
//     // response.user.id
// }).then(() => {
//     console.log("success");
// }).then(() => {
//     console.log("success");
// }).then(() => {
//     console.log("success");
// })
// .catch(error => {
//     console.log('Error: ', error);
// });
async function getPets(){
    try{
        let userPets = await petsDelayed();
        console.log('Esperando');
        let userPets2 = await petsDelayed();
        let userPets3 = await petsDelayed();
        console.log('Esperando');
        console.log(userPets);
    }
    catch(error){
        console.log(error);
    }
}

getPets();


// console.log('Método syncrono', pets);
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(pets);
//     }, 1000);
// });
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(pets);
//     }, 500);
// });
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(pets);
//     }, 3000);
// });

// Promise.race([promise1, promise2, promise3]).then(response => {
//     console.log(response);
// });