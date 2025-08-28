const transactionData = []

// History Function
function setHistory() {
    const historyContainer = document.getElementById("history-container")
    historyContainer.innerText = ""
    for (const data of transactionData) {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex items-center justify-between mt-5 p-2 bg-gray-100 rounded-lg">
                    <div>
                        <h2 class="font-semibold text-lg">${data.name}</h2>
                        <p>${data.number}</p>
                    </div>
                    <div>
                        <p>${data.date}</p>
                    </div>
                </div>
        `
        historyContainer.appendChild(div)
    }
}
function getInnerTextValue(id) {
    const innerNumber = parseInt(document.getElementById(id).innerText)
    return innerNumber
}
function getInnerText(id) {
    const innerText = document.getElementById(id).innerText
    return innerText
}

function setInnerText(value) {
    document.getElementById("coin").innerText = value
}
// Hart Function
let hearts = document.getElementsByClassName("fa-heart")
for (const heart of hearts) {
    heart.addEventListener("click", function (e) {
        e.preventDefault()
        const heartReact = getInnerTextValue("heart-count")
        totalReacts = heartReact + 1
        document.getElementById("heart-count").innerText = totalReacts
    }
    )
}

// Copy Count
let copys = document.getElementsByClassName("copy")
for (const copy of copys) {
    copy.addEventListener("click", function (e) {
        e.preventDefault()
        const copyCount = getInnerTextValue("copy-count")
        totalCopys = copyCount + 1
        document.getElementById("copy-count").innerText = totalCopys
        
    }
    )}

//Clear Section
document.getElementById("clear-btn").addEventListener("click", function () {
    const historyContainer = document.getElementById("history-container")
    historyContainer.innerText = ""
    transactionData.length = 0
})
//copy section
function copyToClipBoard(id, nm_id){
    document.getElementById(id).addEventListener("click", function () {
    const copyText = document.getElementById(nm_id).innerText
    navigator.clipboard.writeText(copyText)
})
}
copyToClipBoard("emergency-copy-btn", "emergency-number")
copyToClipBoard("police-copy-btn", "police-number")
copyToClipBoard("fire-copy-btn", "fire-number")
copyToClipBoard("ab-copy-btn", "ab-number")
copyToClipBoard("wc-copy-btn", "wc-number")
copyToClipBoard("ac-copy-btn", "ac-number")
copyToClipBoard("bc-copy-btn", "bc-number")
copyToClipBoard("eh-copy-btn", "eh-number")
copyToClipBoard("br-copy-btn", "br-number")


// Call Section
// For Emergency Section
document.getElementById("emergency-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()

})

// For Police
document.getElementById("police-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()
})

// Fire Service
document.getElementById("fire-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()
})
// Fire Ambulance Service
document.getElementById("ab-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()
})
// Fire Women & Child Helpline
document.getElementById("wc-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()
})
// Anti-Corruption Helpline
document.getElementById("ac-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()
})
// Electricity Helpline
document.getElementById("eh-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()
})
// Brac Helpline
document.getElementById("bc-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()
})
// Bangladesh Railway Helpline
document.getElementById("br-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const coin = getInnerTextValue("coin")
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
    setHistory()
})





