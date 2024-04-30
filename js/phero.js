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
  categories.forEach((cate) => {
    const button = document.createElement("button");
    button.innerHTML = ` 
    <button
    class="bg-green-400 px-4 py-1 font-semibold rounded-md text-white uppercase">
    ${cate.category}
    </button>
  `;
    categoryContainer.appendChild(button);
  });
};

loadData();
