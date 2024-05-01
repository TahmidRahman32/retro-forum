const searchDataLoader = async (category) => {
   const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
   const data = await res.json();
   searchDataDisplay(data.posts);
};

const searchDataDisplay = (posts) => {
   //  console.log(posts);

   const cardContainer = document.getElementById("card-contain");
   cardContainer.innerText = "";

   // console.log(cardContainer);
   posts.forEach((post) => {
      console.log(post);
      const { category, title, description, posted_time, comment_count, author, image, isActive, view_count, id } = post;

      const div = document.createElement("div");
      div.classList = "card bg-base-100 shadow-xl col-span-2";
      div.innerHTML = `
      
    <div class="card card-side bg-base-100 shadow-xl p-2 ">
    
              <div class='indicator'>
              <span id="active-card" class="indicator-item badge bg-green-600"></span>
               <img class='w-16 rounded-3xl h-16 grid  bg-base-300 place-items-center' src=${image} alt="Movie" />
              </div>
               <div class="card-body ">
               <div class="flex gap-3">
                     <p class='flex-grow-0 '># ${category}</p>
                     <p>Author: ${author?.name}</p>
               </div>
                  <h2 class="card-title">${title}</h2>
                  <p>${description}</p>
                  <hr />
                    
                  <div class="card-actions justify-between">
                       <div class="flex justify-around gap-8">
                       <div class="flex items-center gap-2 text-gray-400">
                       <i class="fa-solid fa-comment-dots"></i>
                       <p>${comment_count}</p>
                       </div>
                       <div class="flex items-center gap-2 text-gray-400">
                       <i class="fa-solid fa-eye"></i>
                       <p>${view_count}</p>
                       </div>
                       <div class="flex items-center gap-2 text-gray-400">
                       <i class="fa-regular fa-clock"></i>
                       <p>${posted_time} min</p>
                       </div>
                       </div>
                     <button onclick="readCount(${id})" class="bg-[#10B981] px-2 py-1 rounded-full"><i class="fa-solid fa-envelope"></i></button>
                  </div>
               </div>
            </div>
      `;
      cardContainer.appendChild(div);

      if (isActive) {
         const active = document.getElementById("active-card");
         active.classList.add("bg-green-600");
      } else {
         const active = document.getElementById("active-card");
         active.classList.add("bg-red-500");
      }
   });
};

const allDataLoader = () => {
   const addDetails = document.getElementById("count-read");
   const div = document.createElement("div");
   div.classList = "flex justify-between px-3 py-4 bg-gray-200 rounded my-3";
   div.innerHTML = `
      <h2 class="font-bold text-xl">10 Kids Unaware of Their Costume</h2>
      <p><i class="fa-solid fa-eye"></i> 1568 </p>
       `;
   addDetails.appendChild(div);
};

let count = 0;
const readCount = (id) => {
   count = count + 1;
   const IdField = document.getElementById("mark-count");
   IdField.innerText = count;
   // add();
   allDataLoader();

   console.log(id);
};

const searchHandle = () => {
   const inputField = document.getElementById("search-field").value;
   // console.log(typeof inputField);
   inputField.innerHTML = "";
   if (isNaN(inputField) || (!isNaN(inputField) && inputField > 9)) {
      console.log("string");
      searchDataLoader(inputField);
   } else {
      console.log("add");
      alert("please existing category");
   }
};

const latestCardData = async () => {
   const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
   const data = await res.json();
   latestDataDisplay(data);
};

latestDataDisplay = (items) => {
   const latestCard = document.getElementById("latest-card");
   items.forEach((item) => {
      // console.log(item);

      const div = document.createElement("div");

      div.innerHTML = `
      <div class="card  bg-base-100 shadow-xl">
  <figure><img src=${item.cover_image} alt="Shoes" /></figure>
  <div class="card-body">
  <p class="text-gray-400"><i class="fa-solid fa-calendar-week"></i> ${item.author?.posted_date ? item.author?.posted_date : "No publish date"}</p>
    <h2 class="card-title">${item.title}</h2>
    <p>${item.description}</p>
    <div class="card-actions mt-2">
     <div class="flex items-center gap-3">
      <img class='w-12 rounded-full' src=${item.profile_image} alt="" />
      <div>
      <p class='font-medium'>${item.author?.name}</p>
      <p><small>${item.author?.designation || "Unknown"}</small></p>
      
      </div>
     </div>
    </div>
  </div>
</div>
      `;
      latestCard.appendChild(div);
   });
};
latestCardData();
searchDataLoader("comedy");
