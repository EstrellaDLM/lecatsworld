import './src/style/index.css'
import { getRandomCats, getFavouritesCats,uploadCatsPhotos } from './src/utils/Cats';

const newCat = document.getElementById("newCat")
const btnUpPhoto = document.getElementById("upBtn")

// const fragment = document.createDocumentFragment();
newCat.addEventListener("click", () => {
  getRandomCats()
})
btnUpPhoto.addEventListener("click", (e) => {
  e.preventDefault
  uploadCatsPhotos()
})
// btn1.addEventListener("click",()=>{

//   addFavouritesCats()
// })
getRandomCats()

getFavouritesCats()
// const laverga=document.getElementById("laverga")
// deleteFavouritesCats()
// const lol = () => {
//   //   main.innerHTML+=` <section class="flex overflow-x-auto">



//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article> 
//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article>
//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article>
//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article>
//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article>
//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article>
//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article>
//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article>
//   // <article>
//   //   <img src="" alt="" class="h-72 w-72 bg-slate-500">
//   // </article>
//   // </section>`
//   //
// const section = document.createElement('section')
// section.className = "flex overflow-x-auto"

  
//   for (let i = 0; i < 10; i++) {
//     const article = document.createElement('article')
//     const img = document.createElement('img')
//     img.className = " h-72 w-72 bg-slate-500"
//     article.appendChild(img)
//     fragment.appendChild(article)
//   }

//   laverga.appendChild(fragment)
//   console.log("algo")
  

// }
// lol()
//*funciones