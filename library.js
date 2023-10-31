let bookshelf= document.querySelector('.bookshelf')
const myLibrary =[];

class Book {
    constructor(title, author, pages,status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status= false;
    }
}

Book.prototype.toggleStatus = function (){
    this.status = !this.status;
}



function populatePage(){
    for (let i of myLibrary){
        let newCard = document.createElement('div')
        newCard.classList.add('bookCard')
        let newText=document.createElement('p')
        newText.textContent= 'Title: '+ i.title
        let newText2 = document.createElement('p')
        newText2.textContent= 'Author: ' + i.author
        let newText3 = document.createElement('p')
        newText3.textContent= 'Number of pages: ' + i.pages
        let newText4= document.createElement('p')
        newText4.textContent= 'Have I read this book? : ' + i.status

        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Remove Book ):'
        deleteButton.addEventListener('click',()=>{
            const index= myLibrary.indexOf(i)
            myLibrary.splice(index,1)
            updateDisplay()
        })

        let readButton = document.createElement('button')
        readButton.textContent='Read'
        readButton.addEventListener('click',()=>{
            i.toggleStatus()
            updateDisplay()
        })
        newCard.appendChild(newText)
        newCard.appendChild(newText2)
        newCard.appendChild(newText3)
        newCard.appendChild(newText4)
        newCard.appendChild(readButton)
        newCard.appendChild(deleteButton)
        newCard.setAttribute('id',`book${myLibrary.indexOf(i)}`)
        bookshelf.appendChild(newCard)

    }
}

function clearPage(){
    bookshelf.textContent=''
}

function updateDisplay(){
    clearPage();
    populatePage();
}

const bookInputForm = document.querySelector('.bookInputForm')
const testButton = document.querySelector('#testbutton')
const cancelButton = document.querySelector('#cancel')
const submitButton = document.querySelector('#submit')
const authorInp = document.querySelector('#author')
const titleInp = document.querySelector('#title')
const pagesInp = document.querySelector('#pages')

submitButton.addEventListener('click',()=>{
    let title = titleInp.value
    let author =  authorInp.value
    let pages = pagesInp.value
    const haveRead = document.querySelector('input[name=read]:checked').value
    if(!haveRead){
        haveRead=false
    }
    newBook = new Book(title,author,pages,haveRead)
  
    myLibrary.push(newBook)
    console.log(haveRead)
    bookInputForm.close()
    updateDisplay()
})


cancelButton.addEventListener('click',()=>{
    bookInputForm.close()
})

testbutton.addEventListener('click',()=>{
    bookInputForm.showModal();
})
