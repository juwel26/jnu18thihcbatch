
// async function logMovies() {
//     const response = await fetch("https://juwel26.github.io/jnu18thihc/studentApi.json");
//     const movies = await response.json();
//     const realDAta = movies.students ;
//     let  show = document.querySelector(".show")
//     show.innerHTML = `${realDAta.map(function(students){
//       return`

//       <div class="show h-auto w-full bg-slate-100 border-2 border-orange-400 mt-2 ">
      
    
//       <img src="${students.img}"  alt="" class="rounded-full w-20 h-20" />
//       <h1 class="text-2xl font-bold text-slate-900  "> Name : ${students.name}</h1>
//       <p class="font-semibold text-lg text-indigo-500"> ID Number: ${students.id} </p>
//       <p class="font-semibold text-lg text-gray-500"> Dept: ${students.Dept} </p>
//       <p class="font-semibold text-lg text-gray-500"> session: ${students.session} </p>
//       <p class="font-semibold text-lg text-gray-500"> Number: ${students.number} </p>
//       <a class="font-semibold text-lg text-indigo-500 underline" href="${students.facebook}">contact by facebook</a>
      
//        </div> `

//     }).join(" ")}`


//   }

//    logMovies()