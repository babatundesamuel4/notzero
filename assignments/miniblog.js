const postsContainer = document.getElementById("posts");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");

const API_URL = "https://dev.to/api/articles?per_page=10";

const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    displayPosts(data);
  } catch (error) {
    errorElement.textContent = "Something went wrong. Please try again.";
    console.error(error);
  } finally {
    loadingElement.style.display = "none";
  }
};

const displayPosts = (posts) => {
  postsContainer.innerHTML = "";

  posts.forEach(post => {
    const {
      title,
      description,
      url,
      social_image,
      user: { name },
      published_at
    } = post;

    const postCard = document.createElement("div");
    postCard.classList.add("card");

    postCard.innerHTML = `
      <img src="${social_image}" alt="${title}" />
      <div class="card-content">
        <h3>${title}</h3>
        <p>${description || "No description available."}</p>
        <small>By ${name} • ${new Date(published_at).toLocaleDateString()}</small>
        <a href="${url}" target="_blank">Read More →</a>
      </div>
    `;

    postsContainer.appendChild(postCard);
  });
};

fetchPosts();
