
async function logMovies() {
    const response = await fetch("https://juwel26.github.io/jnu18thihc/studentApi.json");
    const movies = await response.json();
    const realDAta = movies.students ;
    let  show = document.querySelector(".show")
     console.log(realDAta)
    show.innerHTML = `${realDAta.map(function(students){
      return`

      <div class="w-10/12 m-2 justify-center items-center mx-auto  ">
      <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
              <img class="w-24 h-24 rounded-full mx-auto ring-2 shadow-2xl ring-orange-500" src="${students.img}" alt="${students.name}">
          </div>
          <div class="p-2 ">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8 "> ${students.name}</h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                  <p class="text-indigo-500">${students.id}</p>
              </div>
              <table class="text-xs my-3 font-semibold">
                  <tbody><tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">Email :</td>
                      <td class="px-2 py-2">${students.email}</td>
                  </tr>
                  <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">Phone :</td>
                      <td class="px-2 py-2">${students.number}</td>
                  </tr>
                  <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Batch :</td>
                  <td class="px-2 py-2">${students.Batch}</td>
              </tr>
                  <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">session :</td>
                      <td class="px-2 py-2">${students.session}</td>
                  </tr>
              </tbody></table>
               <hr>
              <div class="text-center my-3">
                  <a class="text-xs text-indigo-500 italic bg-indigo-100 p-2 rounded-md pa hover:underline hover:text-indigo-600 font-medium" href="${students.facebook}">Facebook Profile</a>
              </div>
  
          </div>
      </div>
  </div>  `
  
  
   }).join(" ")}`

  }

   logMovies()