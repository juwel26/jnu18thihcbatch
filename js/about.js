async function logMovies() {
  const response = await fetch(
    "https://juwel26.github.io/jnu18thihc/studentApi.json"
  );
  const movies = await response.json();
  const realDAta = movies.video;
  let show = document.querySelector(".show");
  console.log(realDAta);
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
}

logMovies();
