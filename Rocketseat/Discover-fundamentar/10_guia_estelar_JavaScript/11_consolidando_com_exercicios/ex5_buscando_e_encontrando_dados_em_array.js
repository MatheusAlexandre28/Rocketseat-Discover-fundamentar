/*
    * Buscando e contando dados em Arrays *

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        - Contar o nummero de categorias e o numero de livros em cada categoria
        - Contar o numero de autores
        - Mostrar livros do autor auguto cury
        - Transformar a função acima em uma função que irá receber o nome do autor e devolver os liros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title:  'Os segredos da mente milionaria',
                author: 'T. harv eker',
            },
            {
                title: "O homem mais rico da babilonia",
                author: "George S. Clason",
            },
            {
                title: "plai rico, pai pobre",
                author: "robert T. kiyosaki e sharon Ç. lechter"
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce é insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                title: "os 7 habitos das pessoas altamente eficazes",
                author: "stephen R. coveyy",
            },
        ],
    },
];

/* - meu codigo

function calcCategoryAndBooks(){
    calcCategory = booksByCategory.length
    calcBookcategory0 = booksByCategory[0].books.length
    calcBookcategory1 = booksByCategory[1].books.length 
    
    console.log(`O numero de categoria é ${calcCategory}, de livros na primeira é ${calcBookcategory0}, e na segunda é ${calcBookcategory1}`)
}

// calcCategoryAndBooks()


function booksToAugustCury(){
    nameAuthor = booksByCategory[1].books[0].author
    fistbook = booksByCategory[1].books[0].title
    segundarybook = booksByCategory[1].books[1].title

    console.log(`O primeiro livro na lista de "${nameAuthor}" é o "${fistbook}" e o segundo é o "${segundarybook}"`)
}

booksToAugustCury()
*/

// Codigo professor

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory){
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
           if(authors.indexOf(book.author) == -1){
               authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors()

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
                if(book.author === author){
                    books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('T. harv eker')