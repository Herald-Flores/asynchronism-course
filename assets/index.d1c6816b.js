(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const i=document.querySelector("#suggested-channels-content"),c=async()=>{const n=["https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UC8LeXCWOalN8SxlrPcG-PaQ","https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCHRp19HU7Y2LwfI0Ai6WAGQ","https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCJZv4d5rbIKd4QHMPkcABCw","https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCw05fUBPwmpu-ehXFMqfdMw"],t={method:"GET",headers:{"X-RapidAPI-Key":{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_APIKEY,"X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}};try{return await Promise.all(n.map(e=>fetch(e,t).then(s=>s.json())))}catch(o){console.log("Error",o)}};(async()=>{try{const n=await c();let r="";n.map(t=>{t.items.map(o=>{r+=`<section class="gap-4 items-center shadow-lg w-full xl:gap-4 md:grid md:grid-cols-2 rounded-lg">
            <img class="w-full rounded-md lg:rounded-none lg:rounded-l-lg" src="${o?.snippet?.thumbnails?.high?.url}" alt="${o?.snippet?.description}">
            <div class="mt-4 md:mt-0 p-4 pt-0">
                <h2 class="mb-2 text-2xl tracking-tight font-bold text-secondary-800">
                  ${o?.snippet?.title}
                </h2>
                <p class="mb-6 font-normal text-primary-900 truncate md:text-lg">
                  ${o?.snippet?.description}
                </p>
                <a 
                  href="https://www.youtube.com/channel/${o?.id}" 
                  class="inline-flex items-center text-primary-50 bg-primary-900 hover:shadow-lg focus:ring-4 font-bold rounded-md text-md px-5 py-2.5 text-center focus:ring-primary-900"
                >
                    View Channel
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
          </section>
        `})}),i.innerHTML=r}catch(n){console.log(n)}})();const l="https://youtube-v31.p.rapidapi.com/search?channelId=UCgVjdxflkNOnn6FWPONXpIQ&part=snippet%2Cid&order=date&maxResults=10",p=document.getElementById("english-academy"),d={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_APIKEY,u={method:"GET",headers:{"X-RapidAPI-Key":d,"X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}};async function h(n){return await(await fetch(n,u)).json()}(async()=>{try{let r=`${(await h(l)).items.map(t=>`
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
        `).slice(0,4).join("")}`;p.innerHTML=r}catch(n){console.log(n)}})();
