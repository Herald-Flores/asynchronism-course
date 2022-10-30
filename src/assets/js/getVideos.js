const API =
  'https://youtube-v31.p.rapidapi.com/search?channelId=UCgVjdxflkNOnn6FWPONXpIQ&part=snippet%2Cid&order=date&maxResults=10'
const videosContainer = null || document.getElementById('english-academy')
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPIAPIKEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options)
  const data = await response.json()
  return data
}

;(async () => {
  try {
    const videos = await fetchData(API)
    let view = `${videos.items
      .map(
        (video) => `
          <article class="w-full">
            <a target="_blank" href="https://www.youtube.com/watch?v=${video?.id?.videoId}" class="relative h-40 block">
              <img alt="${video?.snippet?.description}" class="block h-full w-full object-cover object-center cursor-pointer rounded-xl" src="${video?.snippet?.thumbnails?.high?.url}" />
            </a>
            <div class="mt-2">
              <h3 class="mb-1 leading-none text-xl text-secondary-100 font-bold">
                <a target="_blank" href="https://www.youtube.com/watch?v=${video?.id?.videoId}" class="relative block">
                  ${video?.snippet?.title}
                </a>
              </h3>
              <p class="mt-1 text-secondary-100 font-medium">${video?.snippet?.description}</p>
            </div>
          </article>
        `
      )
      .slice(0, 4)
      .join('')}`

    videosContainer.innerHTML = view
  } catch (error) {
    console.log(error)
  }
})()
