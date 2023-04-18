const table = document.querySelector('.four .table')
const button = document.querySelector(".four__button-add")
const template = document.querySelector('.row-template').content.querySelector('tr')

const providerNameInput = document.querySelector('.legalName')
const innInput = document.querySelector('.inn-input  ')
const bankAccountInput = document.querySelector('.bankAccount')
const corrAccountInput = document.querySelector('.corrAccount')
const phoneInput = document.querySelector('.phone-input')
const providerAddressInput = document.querySelector('.adress-input')

const consumerNameInput = document.querySelector('.consumerName')
//const consumerAddressInput = document.querySelector('.')

const orderNumberInput = document.querySelector('.orderNumber')
const orderDateInput = document.querySelector('.orderDate')



//console.log(template)

function assignRowNumbers() {
    const rows = table.querySelectorAll('tr')
    for (i = 1; i < rows.length; i++) {
        rows[i].childNodes[1].textContent = i
    }
}
function createRow() {
    let newRow = template.cloneNode(true)
    table.append(newRow)
}

function assignRowTotal() {
    let itemName = event.target
    let parent = itemName.parentNode.parentNode
    let price = parent.querySelector('.price-input').value
    let quantity = parent.querySelector('.quantity-input').value
    let total = parent.querySelector('.itemTotal')
    total.innerText = `${(price * quantity).toFixed(2)}`
}
function assignTableTotal() {
    let total = document.querySelector('.net-sum')
    total.innerText = ""
    let rows = document.querySelectorAll('.itemTotal')
    for (i = 0; i < rows.length; i++) {
        let text = (Number(total.innerText) + Number(rows[i].innerText)).toFixed(2)
        //console.log(typeof (text))
        //if () {}
        total.innerText = `${text}`
    }
}



button.addEventListener('click', () => {
    event.preventDefault()
    createRow()
    assignRowNumbers()
})

table.addEventListener('keyup', () => {
    assignRowTotal()
    assignTableTotal()
})
assignRowNumbers()