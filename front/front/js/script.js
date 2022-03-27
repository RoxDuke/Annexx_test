function getContentBoxs(box) {
    return `<div id="boxs">

    <div id="box">
        <div class="head-box"><h3>Garde Meubles <p id="name">${box.name}</p></h3></div>
        <p id="address">${box.adress}</p>
        <p id="district">${box.district}<p id="postal_code">${box.postal_code}</p></p>
        <p id="contact">${box.contact}</p><br>
        <p>Horaires des bureaux:<p id="opening_hours">${box.opening_hours}</p></p>
    </div>
    
</div>`

};
let objBoxs = document.getElementById("boxs");
let button = document.getElementById('submit');

//Lors du clic utilisateur sur 'rechercher'
//En fonction du code postal OU du quartier 
button.addEventListener("click", button => {
    let content = document.getElementById('inputSearch').value;
    const regex = new RegExp("[0-9]{5}");
    const test = regex.test(content);

    if (test) {
        body_postal = '{"postal_code":"' + content + '"}'
        fetch("http://localhost:3000/api/box", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: body_postal })
            .then(function (response) {
                if (response.status == 200) {

                    response.json().then(box => {
                        objBoxs.innerHTML = "";
                        objBoxs.insertAdjacentHTML('beforeend', getContentBoxs(box))
                    })
                }
            })
    } else if (!test) {
        body_district = '{"district":"' + content + '"}'
        fetch("http://localhost:3000/api/box", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: body_district })
            .then(function (response) {
                if (response.status == 200) {

                    response.json().then(box => {
                        objBoxs.innerHTML = "";
                        objBoxs.insertAdjacentHTML('beforeend', getContentBoxs(box))
                    })
                }
            })
    }
});
//Insertion de toutes les boxs en fonction de la ville
//Substitution de la ville dans le corps du texte lors du clic sur les inputs

let allCity = document.getElementsByClassName("city-name")
Array.prototype.forEach.call(allCity, function (city) {

    city.addEventListener("click", city => {
        let content = city.path[0].innerHTML;
        let name = document.getElementById("name");
        last_name = document.getElementById("name").textContent;
        if (last_name == "") {
            last_name = "Toulouse"
        }
        let main_elt = document.getElementById("main");
        let footer_elt = document.getElementById("footer");
        console.log(last_name)
        main_elt.innerHTML = main_elt.innerHTML.replace(new RegExp(last_name, "g"), content);
        footer_elt.innerHTML = footer_elt.innerHTML.replace(new RegExp(last_name, "g"), content);
        name.innerHTML = content;

        body_city = '{"city":"' + content + '"}'
        fetch("http://localhost:3000/api/allboxs", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: body_city })
            .then(function (response) {
                if (response.ok) {
                    console.log(body_city)
                    return response.json()
                }
            })
            .then(function (allBoxs) {
                console.log(allBoxs)
                let objBoxs = document.getElementById("boxs");
                objBoxs.innerHTML = "";
                allBoxs.forEach(box => {
                    objBoxs.insertAdjacentHTML('beforeend', getContentBoxs(box))
                })
            })

    }
    );
});
//Afficher toutes les boxs de Toulouse par défaut 
let content = document.getElementById("city").textContent;
body_city = '{"city":"' + content + '"}'

console.log(content)
fetch("http://localhost:3000/api/allboxs", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: body_city })
    .then(function (response) {
        if (response.ok) {
            return response.json()
        }
    })

    .then(function (allBoxs) {
        objBoxs.innerHTML = "";
        allBoxs.forEach(box => {
            objBoxs.insertAdjacentHTML('beforeend', getContentBoxs(box))
        })
    })





