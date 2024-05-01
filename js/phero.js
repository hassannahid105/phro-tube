const loadData = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const information = await response.json();
  const data = information.data;
  displayButton(data);
};

const displayButton = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  // categoryContainer.innerHTML = "";
  categories.forEach((cate) => {
    const button = document.createElement("button");
    button.innerHTML = ` 
    <button
    class="bg-green-400 px-4 py-1 font-semibold rounded-md text-white uppercase"      onclick="videoData(${cate.category_id})">
    ${cate.category}
    </button>
  `;
    categoryContainer.appendChild(button);
  });
};

//! video container
const videoData = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const information = await response.json();
  const data = information.data;
  displayVideo(data);
};

const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  videos.forEach((video) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl h-96">
    <figure>
      <img
        src="${video.thumbnail}"
        alt="video for youtube"
        class="h-72"
      />
    </figure>
    <div class="p-6">
    
      <!-- video time -->
      <div class=" absolute">
      <p class="bg-black text-white py-1 px-4 rounded-lg text-sm inline-block relative -top-16 left-44">10hrs 50min ago</p>
      </div>
      <!-- thanbnile and avatar -->
      <div class="flex  gap-2 items-center mb-3">
        <div class="avatar">
          <div class="w-10 rounded-full ">
            <img
              src="${video?.authors[0]?.profile_picture}"
             
            />
          </div>
        </div>
        <h4 class="font-semibold text-lg leading-1">
          ${video?.title}
        </h4>
      </div>
      <!-- author -->
      <div class="flex items-center gap-2 ml-5">
        <p>${video?.authors[0]?.profile_name}</p>
        <p> ${
          video?.authors[0]?.verified
            ? '<i class="fa-solid fa-circle-check text-blue-600 text-xl"></i>'
            : ""
        }</p>
       
      </div>
      <p class="ml-5">${video?.others?.views}</p>
    </div>
  </div>
    `;
    videoContainer.appendChild(div);
  });
};
loadData();
videoData("1000");
