const list = document.querySelectorAll('ul#categories li.item')

console.log(`Number of categories: ${list.length}` )

list.forEach((item) => {
    const name = item.querySelector('h2').innerText
    const elementsNumber = item.querySelectorAll('li').length
    console.log(`Category: ${name}`)
    console.log(`Elements: ${elementsNumber}`)
})
