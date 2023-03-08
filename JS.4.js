let myLeads = []
const inputEl = document.getElementById("input-el") 
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const container = document.getElementById("container")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


deleteBtn.addEventListener("click", function() {
    console.log("clicked")
    localStorage.clear()
    myLeads = []
    renderLeads()
})




inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = "" 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads()

    console.log(localStorage.getItem("myLeads"))
})



function renderLeads() {
        let listItems = ""
        for (let i = 0; i < myLeads.length; i++) {
           listItems += `
            <li>
                  ${myLeads[i]}
            </li>
            ` 
            console.log(listItems)
    }
ulEl.innerHTML = listItems
}










