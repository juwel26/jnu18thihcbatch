// for video api
async function logMovies() {
  const response = await fetch(
    "https://juwel26.github.io/jnu18thihc/studentApi.json"
  );
  const movies = await response.json();
  const realDAta = movies.video;
  let show = document.querySelector(".show");

  show.innerHTML = `${realDAta
    .map(function (video) {
      return `
      <div class="flex justify-center my-2 ">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
        <iframe class="w-full aspect-video ..." width="560" height="315" src="${video.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </a>
        <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-1">${video.headline} </h5>
            <p class="text-gray-700 text-base mb-2">
               Jagannath University Department of IHC
            </p>
            
        </div>
    </div>
</div>  `;
    })
    .join(" ")}`;

  // for photos
  const PhotosData = movies.Photos;
  // console.log(videoData);
  let showPhotos = document.querySelector(".photos");
  showPhotos.innerHTML = `${PhotosData.map((photos) => {
    return `
<div class="xl:w-1/3 md:w-1/2 p-1 shadow-md my-4  ">
<div class="bg-white p-1 rounded-lg">
  <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src=" src="https://lh3.google.com/u/0/d/${photos.img} " alt="Image Size 720x400">
  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${photos.title}</h2>
  <p class="leading-relaxed text-base">${photos.discription}</p>
</div>
</div> `;
  }).join(" ")}`;
}

logMovies();
