let wrap = document.createElement("div")
wrap.setAttribute("class", "container")
document.body.appendChild(wrap)

let title = document.createElement("h1")
title.setAttribute("class", "text-center")
title.innerText = ("திருக்குறள்")
title.setAttribute("id", "title")
wrap.appendChild(title)


let row = document.createElement("div")
row.setAttribute("class", "row")
row.setAttribute("id", "row1")
wrap.appendChild(row)



let col1 = document.createElement("div")
col1.setAttribute("class", "col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2");
col1.setAttribute("id","main")
row.appendChild(col1)

let card = document.createElement("div")
card.setAttribute("class", "card h-100 ")
col1.appendChild(card)

let cardhead = document.createElement("div")
cardhead.setAttribute("class", "card-header bg-dark")
card.appendChild(cardhead)

let select1 = document.createElement("input");
select1.setAttribute("type", "text")
select1.setAttribute("id", "thirukkuralselection")
select1.setAttribute("placeholder", "Enter between 1-1330")
select1.setAttribute("class", "bg-dark border-0 text-light  fs-6 ")
cardhead.appendChild(select1)

let cardbody = document.createElement("div")
cardbody.setAttribute("class", "card-body cardbg")
card.appendChild(cardbody)

let countryimage = document.createElement("img")
countryimage.setAttribute("class", " card-img-top my-5")
countryimage.setAttribute("id", "thirukural")
countryimage.setAttribute("src", "thiruvalluvar3.png")
// countryimage.setAttribute("alt", "Please Select the Country in the above Drop dow👆🏻")
cardbody.appendChild(countryimage)

let cardnative = document.createElement("div")
cardnative.setAttribute("class", "card-text")
// cardnative.innerText = ("line1 :")
cardbody.appendChild(cardnative)

let spann1 = document.createElement("span")
spann1.setAttribute("id", "line1")
spann1.setAttribute("class","text-dark fs-5")
cardnative.appendChild(spann1)

let cardregion = document.createElement("div")
cardregion.setAttribute("class", "card-text ")
// cardregion.innerText = ("line 2:")
cardbody.appendChild(cardregion)


let spanr1 = document.createElement("span")
spanr1.setAttribute("id", "line2")
spanr1.setAttribute("class","text-dark fs-5 ")
cardregion.appendChild(spanr1)


let te = document.createElement("div")
te.setAttribute("class", "card-text my-3")
te.innerText = ("TAMIL MEANING:")
cardbody.appendChild(te)


let spanp1 = document.createElement("span")
spanp1.setAttribute("id", "meaning")
spanp1.setAttribute("class","text-muted")
te.appendChild(spanp1)

let em = document.createElement("div")
em.setAttribute("class", "card-text")
em.innerText = ("ENGLISH MEANING:")
cardbody.appendChild(em)


let spanp2 = document.createElement("span")
spanp2.setAttribute("id", "meaning1")
spanp2.setAttribute("class","text-muted")
em.appendChild(spanp2)


let cardfooter = document.createElement("div")
cardfooter.setAttribute("class", "card-footer cardbg")
card.appendChild(cardfooter)

let thankyou=document.createElement("div")
thankyou.setAttribute("id","thankyou")
thankyou.innerHTML=("நன்றி")
thankyou.setAttribute("class","fs-2 text-center text-dark")
cardfooter.appendChild(thankyou)


let button=document.createElement("button")
button.setAttribute("id","Bu")
button.setAttribute("onclick","th()")
button.innerHTML=("SUBMIT")
button.setAttribute("class", "btn text-light btn-outline-light btn-primary")
cardhead.appendChild(button)




function th(){

let va = document.getElementById('thirukkuralselection').value
console.log(va)

for (i = 0; i < 1330; i++) {
    if (i == va) {
        fetch(`https://api-thirukkural.vercel.app/api?num=${i}`)
            .then((d) => d.json())
            .then((data) => {
                document.getElementById("line1").innerHTML = data.line1
                document.getElementById("line2").innerHTML = data.line2
                document.getElementById("meaning").innerHTML = data.tam_exp
                document.getElementById("meaning1").innerHTML = data.eng_exp
            })
    }
}
}