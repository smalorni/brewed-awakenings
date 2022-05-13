import { getEmployees } from "./database.js"
//needed to import getOrders to have access to array of orders
import { getOrders } from "./database.js"

const employees = getEmployees()
const orderLists = getOrders()

const soldProducts = (employee) => {
    let productOrders = [];

        for (const order of orderLists) {
            if(order.employeeId === employee.id)
                productOrders.push(order)
        }
        return productOrders
}


export const Employees = () => {
    document.addEventListener (
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
                if(itemClicked.id.startsWith("employee")) {
                const [ ,employeeId ] = itemClicked.id.split("--")
                    for(const employee of employees) {
                    if(employee.id === parseFloat(employeeId)) {
                        let completedOrders = soldProducts(employee)
                        //how do we get the length on an array - use .length method
                        window.alert(`${employee.name} sold ${completedOrders.length} products`)
                    }
                }
            }
        }
    )

    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

