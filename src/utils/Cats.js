import {api_key} from '.././../api.js'
const urlRandomCats = "https://api.thecatapi.com/v1/images/search?limit=3"
const urlUploadCats = "https://api.thecatapi.com/v1/images/upload"
const urlFavouriteCats = "https://api.thecatapi.com/v1/favourites"




const errorPeticion = document.getElementById("errorPeticion")

const favouritesCats = document.getElementById("favouritesCats")
const randomCats = document.getElementById("randomCats")

export async function getRandomCats() {
    const res = await fetch(`${urlRandomCats}&api_key=${api_key}`);
    const data = await res.json()
    

    randomCats.textContent = ""
    data.forEach((aCat, i) => {
       
        const card = document.createElement("article")
        const cardImgContent = document.createElement("div")
        const cardImg = document.createElement("img")
        const cardBtn = document.createElement("button")
    //     <section id="randomCats"
    //     class="w-auto  h-80 items-center justify-center  py-12  bg-slate-900 space-x-6 overflow-x-auto  flex ">



    //   </section>

        card.className = "relative min-w-72 rounded-md overflow-hidden"
        cardImg.className = "w-72  h-72"
        cardImg.setAttribute("id", aCat.id)
        cardImg.setAttribute("src", aCat.url)
        cardImg.alt = "Una foto de gatos"
        cardBtn.className = "absolute top-2 right-2 bg-white rounded-xl px-4 shadow-2xl"
        cardBtn.textContent = "Fav 🖤"
        cardImgContent.className="w-full"
        cardImgContent.append(cardBtn, cardImg)
        card.appendChild(cardImgContent)
if(aCat){
   
    randomCats.appendChild(card)
}
    
    
        cardBtn.addEventListener("click", () => {
            cardBtn.textContent = "Fav 🧡"
            
            addFavouritesCats(aCat.id)

        })


        //    console.log(aCat.image_id)
    })


}

export async function getFavouritesCats() {

    const res = await fetch(`${urlFavouriteCats}`, {
        method: 'GET',
        headers: {
            "x-api-key": api_key
        }
    });


    if (res.status !== 200) {
        errorPeticion.innerHTML = "Hubo un error " + res.status;
    } else {
        const data = await res.json()

        favouritesCats.textContent = ""
        data.reverse().forEach((aCat) => {

            // *    <article class="w-1/3 h-full relative">
            // *  <button  class="absolute top-2 right-2 bg-white rounded-xl px-4 shadow-2xl ">Fav 🧡</button>
            //*   <img id="cats4" class="w-full h-full" alt="Una foto de gatos">
            // *</article>

            const card = document.createElement("article")
            const cardImg = document.createElement("img")
            const cardBtn = document.createElement("button")

            card.className = " h-64 min-w-80 relative rounded-md overflow-hidden"
            cardImg.className = "w-80  h-full"
            cardImg.setAttribute("id", aCat.id)
            cardImg.setAttribute("src", aCat.image.url)
            cardImg.alt = "Una foto de gatos"
            cardBtn.className = "absolute top-2 right-2 bg-white rounded-xl px-4 shadow-2xl"
            cardBtn.textContent = "Fav 🧡"
            card.append(cardBtn, cardImg)

            cardBtn.addEventListener("click", () => {
                deleteFavouritesCats(aCat.id)
            })

            favouritesCats.appendChild(card)


            // console.log(card)
            // console.log(aCat)
            //    console.log(aCat.image_id)
        })

    }



}
export async function addFavouritesCats(id) {
    const res = await fetch(`${urlFavouriteCats}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "x-api-key": api_key
        },
        body: JSON.stringify({
            image_id: id
        })
    })
    console.log(res)
    const data = await res.json()
    console.log(data)
    if (res.status === 200) {
        console.log("Status: " + res.status + " Mensaje: " + data.message)
    }

    getFavouritesCats()
}

export async function deleteFavouritesCats(id) {
    const res = await fetch(`${urlFavouriteCats}/${id}`, {
        method: 'DELETE',
        headers: {
            "x-api-key": api_key
        }
    })
    const data = await res.json()
    if (res.status === 200) {
        console.log("Status: " + res.status + " Mensaje: " + data.message)

        getFavouritesCats()

    } else {
        console.log("Status: " + res.status + " Mensaje: " + data.message)

    }
}

export async function uploadCatsPhotos(){
    const form = document.getElementById("uploadingForm")
 
    const formData=new FormData(form)
    console.log(formData.get("file"))
    const res = await fetch(`${urlUploadCats}`, {
        method: 'POST',
        headers: {
            "x-api-key": api_key
        },
        body: formData
    }
    )
    const data = await res.json()
    addFavouritesCats(data.id)
}