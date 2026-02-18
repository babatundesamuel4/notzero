const postsContainer = document.getElementById("posts");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const API_URL = "https://dev.to/api/articles?per_page=6";

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const posts = await response.json();
    displayPosts(posts);
  } catch (err) {
    error.textContent = "Error loading articles.";
    console.error(err);
  } finally {
    loading.style.display = "none";
  }
}

function displayPosts(posts) {
  postsContainer.innerHTML = "";

  posts.forEach(post => {
    const {
      title,
      social_image,
      tag_list,
      user,
      published_at,
      reading_time_minutes,
      url
    } = post;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <a href="${url}" target="_blank">
        <img src="${social_image}" alt="${title}" />
      </a>
      <div class="card-content">
        <div class="tags">${tag_list.join(" • ")}</div>
        <h3>${title}</h3>

        <div class="meta">
          <img src="${user.profile_image}" alt="${user.name}" />
          <div>
            <div>${user.name}</div>
            <div>${new Date(published_at).toLocaleDateString()} • ${reading_time_minutes} min read</div>
          </div>
        </div>
      </div>
    `;

    postsContainer.appendChild(card);
  });
}

fetchPosts();
