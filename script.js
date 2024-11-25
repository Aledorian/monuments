// DOM variable 
const monumentName = document.querySelector("section:last-of-type h2")
const town = document.querySelector("section:last-of-type h3")
const country = document.querySelector("section:last-of-type strong")
const description = document.querySelector("section:last-of-type p")
const dataSection = document.querySelector("section:last-of-type")
const images = document.querySelectorAll("section:nth-of-type(2) div")
const mapCanva = document.querySelector("section:last-of-type div:first-of-type")

// Map creation
let map = L.map('map').setView([46.60, 1], 6);

// Map Marker creation and addition to the map
L.marker([48.63, -1.51], {title: "Mont Saint-Michel"}).addTo(map);
L.marker([48.852937, 2.349536], {title: "Notre-Dame"}).addTo(map);
L.marker([48.858260, 2.294498],{title: "Tour Eiffel"}).addTo(map);
L.marker([48.804425, 2.121576], {title: "Versailles"}).addTo(map);
L.marker([48.873778, 2.295035],{title: "Arc de triomphe"}).addTo(map);

//Map layout integration
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Funtion to write and display monument infos

let showInfo = (monument) => {
    
    //add animation class to the section containing description
    dataSection.classList.toggle('animateData')
    
    
    setTimeout(() => { // Allow the animation to be launch each time the function is call.

        //condition to write the correct information for each monument
        if (monument == "eiffelTower") {
            monumentName.textContent = "Tour Eiffel"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "La tour Eiffel est un monument emblématique de Paris, construit par Gustave Eiffel pour l'Exposition universelle de 1889. Mesurant 330 mètres de hauteur, elle est faite de fer et a été initialement critiquée, mais elle est devenues un symbole mondial de la France et de l'ingénierie moderne. Elle attire des millions de visiteurs chaque année pour sa vue panoramique sur la ville"
            //Add a class that change the saturation to 0 on the images which are not clicked and remove this class to the image clicked
            for (let i = 0; i < images.length; i++) {
                if (i != 0) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }
            }
        }else if(monument === "notreDame"){
            monumentName.textContent = "Notre Dame"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "Paris est une célèbre cathédrale gothique située sur l'île de la Cité, au cœur de Paris. Sa construction a débuté en 1163 et s'est achevée au 14e siècle. Elle est connue pour son architecture remarquable, ses vitraux, et ses sculptures détaillées."
            //Add a class that change the saturation to 0 on the images which are not clicked and remove this class to the image clicked
            for (let i = 0; i < images.length; i++) {
                if (i != 1) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }
                
            }
        }else if (monument == "triumph"){
            //Add a class that change the saturation to 0 on the images which are not clicked and remove this class to the image clicked
                for (let i = 0; i < images.length; i++) {
                if (i != 2) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }

            }
            monumentName.textContent = "L'arc de triomphe"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "L'Arc de Triomphe est un monument emblématique situé sur la Place Charles de Gaulle, à Paris. Commandé par Napoléon Bonaparte en 1806 pour honorer les soldats français ayant combattu lors des guerres révolutionnaires et napoléoniennes, il a été achevé en 1836."

        }else if (monument == "saintMichel"){
            //Add a class that change the saturation to 0 on the images which are not clicked and remove this class to the image clicked
            for (let i = 0; i < images.length; i++) {
                if (i != 3) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }
            }
            monumentName.textContent = "Le Mont Saint-Michel"
            town.textContent = "Le mont Saint-Michel, "
            country.textContent ="France"
            description.textContent = "Le Mont Saint-Michel est une île rocheuse située en Normandie, en France, célèbre pour son abbaye médiévale perchée au sommet. C’est un site emblématique, classé au patrimoine mondial de l’UNESCO."

        }else if (monument == "versailles"){
            //Add a class that change the saturation to 0 on the images which are not clicked and remove this class to the image clicked
            for (let i = 0; i < images.length; i++) {
                if (i != 4) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }
            }

            monumentName.textContent = "Versailles"
            town.textContent = "Versailles, "
            country.textContent ="France"
            description.textContent = "Le Château de Versailles est un symbole de la monarchie française et un chef-d'œuvre de l'architecture classique. Situé à environ 20 kilomètres à l'ouest de Paris, il a été construit à l'origine comme un pavillon de chasse pour Louis XIII au 17e siècle, mais Louis XIV a transformé et agrandi le site pour en faire sa résidence principale à partir de 1682."
        }
        
        dataSection.classList.toggle('animateData') // remove the class that animate the section after 1s
        mapCanva.classList.add('show') //add a class to display the map 
    }, 1000)
}