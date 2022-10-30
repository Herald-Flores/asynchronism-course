(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const i=document.querySelector("#suggested-channels-content"),c=async()=>{const s=["https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UC8LeXCWOalN8SxlrPcG-PaQ","https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCHRp19HU7Y2LwfI0Ai6WAGQ","https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCJZv4d5rbIKd4QHMPkcABCw","https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCw05fUBPwmpu-ehXFMqfdMw"],n={method:"GET",headers:{"X-RapidAPI-Key":process.env.RAPIAPIKEY,"X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}};try{return await Promise.all(s.map(r=>fetch(r,n).then(e=>e.json())))}catch(t){console.log("Error",t)}};(async()=>{try{const s=await c();let n="";s.map(t=>{t.items.map(r=>{n+=`<section class="gap-4 items-center shadow-lg w-full xl:gap-4 md:grid md:grid-cols-2 rounded-lg">
            <img class="w-full rounded-md lg:rounded-none lg:rounded-l-lg" src="${r?.snippet?.thumbnails?.high?.url}" alt="${r?.snippet?.description}">
            <div class="mt-4 md:mt-0 p-4 pt-0">
                <h2 class="mb-2 text-2xl tracking-tight font-bold text-secondary-800">
                  ${r?.snippet?.title}
                </h2>
                <p class="mb-6 font-normal text-primary-900 truncate md:text-lg">
                  ${r?.snippet?.description}
                </p>
                <a 
                  href="https://www.youtube.com/channel/${r?.id}" 
                  class="inline-flex items-center text-primary-50 bg-primary-900 hover:shadow-lg focus:ring-4 font-bold rounded-md text-md px-5 py-2.5 text-center focus:ring-primary-900"
                >
                    View Channel
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
          </section>
        `})}),i.innerHTML=n}catch(s){console.log(s)}})();const l="https://youtube-v31.p.rapidapi.com/search?channelId=UCgVjdxflkNOnn6FWPONXpIQ&part=snippet%2Cid&order=date&maxResults=10",p=document.getElementById("english-academy"),d={method:"GET",headers:{"X-RapidAPI-Key":process.env.RAPIAPIKEY,"X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}};async function u(s){return await(await fetch(s,d)).json()}(async()=>{try{let n=`${(await u(l)).items.map(t=>`
          <article class="w-full">
            <a target="_blank" href="https://www.youtube.com/watch?v=${t?.id?.videoId}" class="relative h-40 block">
              <img alt="${t?.snippet?.description}" class="block h-full w-full object-cover object-center cursor-pointer rounded-xl" src="${t?.snippet?.thumbnails?.high?.url}" />
            </a>
            <div class="mt-2">
              <h3 class="mb-1 leading-none text-xl text-secondary-100 font-bold">
                <a target="_blank" href="https://www.youtube.com/watch?v=${t?.id?.videoId}" class="relative block">
                  ${t?.snippet?.title}
                </a>
              </h3>
              <p class="mt-1 text-secondary-100 font-medium">${t?.snippet?.description}</p>
            </div>
          </article>
        `).slice(0,4).join("")}`;p.innerHTML=n}catch(s){console.log(s)}})();
