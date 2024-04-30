const allDataLoader = async () => {
   const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
   const data = await res.json();
   allDataDisplay(data.posts);
  
};

const allDataDisplay = (posts) => {
   console.log(posts);
   const cardContainer = document.getElementById("card-contain");

   // console.log(cardContainer);
   posts.forEach((post) => {
      console.log(post);
      const { category, title, description, posted_time, comment_count, author, image, isActive, view_count } = post;
         
     
      const div = document.createElement("div");
      div.classList = "card bg-base-100 shadow-xl col-span-2 ";
      div.innerHTML = `
      
    <div class="card card-side bg-base-100 shadow-xl p-2 ">
    
              <div class='indicator'>
              <span id="card-pin" class="indicator-item badge badge-secondary"></span>
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
                     <button  onclick="readCount()" class="bg-[#10B981] px-2 py-1 rounded-full"><i class="fa-solid fa-envelope"></i></button>
                  </div>
               </div>
            </div>

      `;
      cardContainer.appendChild(div);
      //   const add = document.getElementById("card-pin");
        
      //   console.log(add.classList);
      //   if (isActive) {
      //    add.classList = "badge-secondary";
      //      // isActiveId.classList.add("");
      //    //   console.log(add.classList.remove());
      //      //   add.classList.add("badge-secondary");
      //      // console.log(isActive);
      //   } 
      //   else{
      //    add.classList = "badge-red";
      //   }
      
   });
};

const readCount = (data) =>{
  const countContain = document.getElementById("count-read");
 console.log(data);
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="">
  <table class="table">
    <!-- head -->
    <thead>
      <div class="flex justify-between">
        <h3 class='text-xl'>Title</h3>
        <p><i class="fa-solid fa-check text-green-600"></i> Mark as read ()</p>
        
      </div>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr class="bg-base-200">
        <th>1</th>
        <td></td>
        <td>Quality Control Specialist</td>
       
      </tr>
     
     
    </tbody>
  </table>
</div>
  `;
  countContain.appendChild(div)
}

allDataLoader();
