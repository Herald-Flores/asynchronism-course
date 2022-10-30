const channelSection =
  null || document.querySelector('#suggested-channels-content')

const fetchDataChannels = async () => {
  const URLS = [
    'https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UC8LeXCWOalN8SxlrPcG-PaQ',
    'https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCHRp19HU7Y2LwfI0Ai6WAGQ',
    'https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCJZv4d5rbIKd4QHMPkcABCw',
    'https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCw05fUBPwmpu-ehXFMqfdMw'
  ]
  const APIKEY = '85888d94acmshd5891289e10b3bap1fa039jsn62ae81abbc20'

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': APIKEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }

  try {
    const response = await Promise.all(
      URLS.map((url) => fetch(url, options).then((res) => res.json()))
    )
    return response
  } catch (error) {
    console.log('Error', error)
  }
}

;(async () => {
  try {
    const channels = await fetchDataChannels()
    let channelsView = ''
    channels.map((channel) => {
      channel.items.map((item) => {
        channelsView += `<section class="gap-4 items-center shadow-lg w-full xl:gap-4 md:grid md:grid-cols-2 rounded-lg">
            <img class="w-full rounded-md lg:rounded-none lg:rounded-l-lg" src="${item?.snippet?.thumbnails?.high?.url}" alt="${item?.snippet?.description}">
            <div class="mt-4 md:mt-0 p-4 pt-0">
                <h2 class="mb-2 text-2xl tracking-tight font-bold text-secondary-800">
                  ${item?.snippet?.title}
                </h2>
                <p class="mb-6 font-normal text-primary-900 truncate md:text-lg">
                  ${item?.snippet?.description}
                </p>
                <a 
                  href="https://www.youtube.com/channel/${item?.id}" 
                  class="inline-flex items-center text-primary-50 bg-primary-900 hover:shadow-lg focus:ring-4 font-bold rounded-md text-md px-5 py-2.5 text-center focus:ring-primary-900"
                >
                    View Channel
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
          </section>
        `
      })
    })
    channelSection.innerHTML = channelsView
  } catch (error) {
    console.log(error)
  }
})()
