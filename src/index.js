'use strict'
const btnSubmit = document.querySelector('button[type="submit"]')

 class Person{
    constructor(firstName, lastName, nickName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.email = email;
    }
 }

function collectPropsFromForm(event){
    event.preventDefault();
    const collectionProps = Array.from(
    document.querySelectorAll('#outer-input-cont input[type="text"]'));
 const lastName = document.querySelector('input[name="lastName"]')
 const arrValues = collectionProps.map((item) => item.value);
 const person = new Person(...arrValues)

localStorage.setItem(`${lastName.value}`, JSON.stringify(person));
console.log(collectionProps)
console.log(arrValues)
}

const anna = JSON.parse(localStorage.getItem('Рязанцева'))
console.log(anna)

btnSubmit.addEventListener('click',collectPropsFromForm)






