let popupoverlay=document.querySelector('.popup-overlay')
let popupbox=document.querySelector('.popup-box')
let popupbutton=document.getElementById('add-popup-button')
popupbutton.addEventListener('click', function(){
    popupbox.style.display='block'
    popupoverlay.style.display='block'

}) 
//select cancel-button
// let addbook=document.getElementById('add-book')
let cancelpopup=document.getElementById('cancel-popup')
cancelpopup.addEventListener('click',function(event){
    event.preventDefault()
    popupbox.style.display='none'
    popupoverlay.style.display='none'

    
})
//select add-button
// let cancelpopup=document.getElementById('cancel-popup')
let addbook=document.getElementById('add-book')
addbook.addEventListener('click',function(event){
    event.preventDefault()
    popupbox.style.display='none'
    popupoverlay.style.display='none'

})
 //select container ,add-book,book-title-input,book-Author-input,book-description-input//

 let container=document.querySelector('.container')
 let addBook=document.getElementById('add-book')
 let bookTitileInput=document.getElementById('book-title-input')
 let bookAuthorInput=document.getElementById('book-Author-input')
 let bookDescriptionInput=document.getElementById('book-description-input')

 addBook.addEventListener('click', function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute('class','book-container')
    div.innerHTML=`<h2>${bookTitileInput.value}</h2>
    <h5>${bookAuthorInput.value}</h5>
    <p>${bookDescriptionInput.value}</p>
    <button onclick='deletebook(event)'>Delete</button>`
    container.append(div)
    popupbox.style.display='none'
    popupoverlay.style.display='none'

 })

 function deletebook(event){
    event.target.parentElement.remove()
 }