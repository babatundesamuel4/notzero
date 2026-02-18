const postsContainer = document.getElementById("posts");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");

const API_URL = "https://dev.to/api/articles?per_page=9";

async function fetchPosts() {
    try {
        loading.style.display = "block";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        loading.style.display = "none";
        displayPosts(data);

    } catch (error) {
        loading.style.display = "none";
        errorDiv.textContent = "Something went wrong. Please try again.";
        console.error(error);
    }
}

function displayPosts(posts) {
    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const {
            title,
            description,
            cover_image,
            url,
            user
        } = post;

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${cover_image || 'https://via.placeholder.com/300'}" alt="${title}">
            <div class="card-content">
                <h2>${title}</h2>
                <p>${description || "No description available."}</p>
                <a href="${url}" target="_blank">Read More</a>
                
                <div class="card-footer">
                    <img src="${user.profile_image}" alt="${user.name}">
                    <span>${user.name}</span>
                </div>
            </div>
        `;

        postsContainer.appendChild(card);
    });
}

fetchPosts();
