const transactionData = []
const coin = getInnerText("coin")
function getInnerText(id) {
    const innerNumber = parseInt(document.getElementById(id).innerText)
    return innerNumber
}

function setInnerText(value) {
    document.getElementById("coin").innerText = value
}

// Call Section
// For Emergency Section
document.getElementById("emergency-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For National Emergency 999")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("emergency-h"),
        number: getInnerText("emergency-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

// For Police
document.getElementById("police-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For Police 999")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("police-h"),
        number: getInnerText("police-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

// Fire Service
document.getElementById("fire-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For Fire Service 999")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("fire-h"),
        number: getInnerText("fire-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})
// Fire Ambulance Service
document.getElementById("ab-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For Ambulance Service 1994-999999")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("ab-h"),
        number: getInnerText("ab-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})
// Fire Women & Child Helpline
document.getElementById("wc-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For Fire Women & Child Helpline 109")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("wc-h"),
        number: getInnerText("wc-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})
// Anti-Corruption Helpline
document.getElementById("ac-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For Anti-Corruption Helpline 106")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("ac-h"),
        number: getInnerText("ac-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})
// Electricity Helpline
document.getElementById("eh-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For Electricity Helpline 16216")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("eh-h"),
        number: getInnerText("eh-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})
// Brac Helpline
document.getElementById("bc-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For Brac Helpline 16445")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("bc-h"),
        number: getInnerText("bc-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})
// Bangladesh Railway Helpline
document.getElementById("br-btn").addEventListener("click", function (e) {
    e.preventDefault()

    if (coin <= 0) {
        alert("You have at last 20 coin for call")
        return;
    }
    alert("Calling For Bangladesh Railway Helpline 163")
    const newBalance = coin - 20
    setInnerText(newBalance)

    const data = {
        name: getInnerText("br-h"),
        number: getInnerText("br-number"),
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})