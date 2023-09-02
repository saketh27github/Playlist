let videos = JSON.parse(localStorage.getItem('videos')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function addVideo() {
    const urlInput = document.getElementById('urlInput');
    const descriptionInput = document.getElementById('descriptionInput');

    const video = {
        url: urlInput.value,
        description: descriptionInput.value,
        timestamp: new Date().toLocaleString()
    };

    videos.push(video);
    localStorage.setItem('videos', JSON.stringify(videos));
    displayVideos();

    urlInput.value = "";
    descriptionInput.value = "";
}

function displayVideos() {
    const videosDiv = document.getElementById('videos');
    if (videosDiv) {  // Check if we're on the main page
        videosDiv.innerHTML = '';

        for (const video of videos) {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';

            videoItem.innerHTML = `
                <a href="${video.url}" target="_blank">${video.description}</a>
                <p>${video.timestamp}</p>
                <button onclick="toggleFavorite('${video.url}')">⭐</button>
                <button onclick="deleteVideo('${video.url}')">Delete</button>
            `;

            videosDiv.appendChild(videoItem);
        }
    }
}

function displayFavorites() {
    const favoritesDiv = document.getElementById('favoriteVideos');
    if (favoritesDiv) {  // Check if we're on the favorites page
        favoritesDiv.innerHTML = '';

        for (const video of favorites) {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';

            videoItem.innerHTML = `
                <a href="${video.url}" target="_blank">${video.description}</a>
                <p>${video.timestamp}</p>
                <button onclick="removeFavorite('${video.url}')">Remove from Favorites</button>
            `;

            favoritesDiv.appendChild(videoItem);
        }
    }
}

function toggleFavorite(url) {
    const video = videos.find(v => v.url === url);
    const favIndex = favorites.findIndex(v => v.url === url);

    if (favIndex === -1) {  // Video is not in favorites
        favorites.push(video);
    } else {
        favorites.splice(favIndex, 1);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayVideos();
    displayFavorites();
}

function deleteVideo(url) {
    videos = videos.filter(v => v.url !== url);
    localStorage.setItem('videos', JSON.stringify(videos));
    displayVideos();
}

function removeFavorite(url) {
    favorites = favorites.filter(v => v.url !== url);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

function searchVideos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.description.toLowerCase().includes(searchInput));
    videos = filteredVideos;
    displayVideos();
}

// Initial display of videos and favorites
displayVideos();
displayFavorites();











// let videos = JSON.parse(localStorage.getItem('videos')) || [];

// function addVideo() {
//     const urlInput = document.getElementById('urlInput');
//     const descriptionInput = document.getElementById('descriptionInput');

//     const video = {
//         url: urlInput.value,
//         description: descriptionInput.value,
//         favorite: false,
//         timestamp: new Date().toLocaleString()
//     };

//     videos.push(video);
//     // Save to localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();

//     // Clear the input fields
//     urlInput.value = "";
//     descriptionInput.value = "";
// }

// function displayVideos() {
//     const videosDiv = document.getElementById('videos');
//     videosDiv.innerHTML = '';

//     for (const video of videos) {
//         const videoItem = document.createElement('div');
//         videoItem.className = 'video-item';

//         videoItem.innerHTML = `
//             <a href="${video.url}" target="_blank">${video.description}</a>
//             <p>${video.timestamp}</p>
//             <div>
//                 <button onclick="toggleFavorite('${video.url}')">⭐</button>
//                 <button onclick="deleteVideo('${video.url}')">Delete</button>
//             </div>
//         `;

//         videosDiv.appendChild(videoItem);
//     }
// }

// function toggleFavorite(url) {
//     const video = videos.find(v => v.url === url);
//     video.favorite = !video.favorite;
//     // Update localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();
// }

// function deleteVideo(url) {
//     videos = videos.filter(v => v.url !== url);
//     // Update localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();
// }

// function searchVideos() {
//     const searchInput = document.getElementById('searchInput').value.toLowerCase();
//     const filteredVideos = videos.filter(video => video.description.toLowerCase().includes(searchInput));
//     videos = filteredVideos;
//     displayVideos();
// }

// // Initial display of videos
// displayVideos();
















// let videos = JSON.parse(localStorage.getItem('videos')) || [];

// function addVideo() {
//     const urlInput = document.getElementById('urlInput');
//     const descriptionInput = document.getElementById('descriptionInput');

//     const video = {
//         url: urlInput.value,
//         description: descriptionInput.value,
//         favorite: false
//     };

//     videos.push(video);
//     // Save to localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();

//     // Clear the input fields
//     urlInput.value = "";
//     descriptionInput.value = "";
// }

// function displayVideos() {
//     const videosDiv = document.getElementById('videos');
//     videosDiv.innerHTML = '';

//     for (const video of videos) {
//         const videoItem = document.createElement('div');
//         videoItem.className = 'video-item';

//         videoItem.innerHTML = `
//             <a href="${video.url}" target="_blank">${video.description}</a>
//             <div>
//                 <button onclick="toggleFavorite('${video.url}')">⭐</button>
//                 <button onclick="deleteVideo('${video.url}')">Delete</button>
//             </div>
//         `;

//         videosDiv.appendChild(videoItem);
//     }
// }



// function toggleFavorite(url) {
//     const video = videos.find(v => v.url === url);
//     video.favorite = !video.favorite;
//     // Update localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();
// }

// function deleteVideo(url) {
//     videos = videos.filter(v => v.url !== url);
//     // Update localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();
// }

// // Initial display of videos
// displayVideos();








// let videos = JSON.parse(localStorage.getItem('videos')) || [];

// function addVideo() {
//     const urlInput = document.getElementById('urlInput');
//     const descriptionInput = document.getElementById('descriptionInput');

//     const video = {
//         url: urlInput.value,
//         description: descriptionInput.value
//     };

//     // Basic check to ensure it's an .mp4 link (this isn't foolproof and should be enhanced for a real-world application)
//     if (video.url.slice(-4) !== '.mp4') {
//         alert('Please ensure the link is a direct .mp4 URL.');
//         return;
//     }

//     videos.push(video);

//     // Save to localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();

//     // Clear the input fields
//     urlInput.value = "";
//     descriptionInput.value = "";
// }

// function displayVideos() {
//     const videosDiv = document.getElementById('videos');
//     videosDiv.innerHTML = '';

//     for (const video of videos) {
//         const videoItem = document.createElement('div');
//         videoItem.className = 'video-item';

//         videoItem.innerHTML = `
//             <a href="${video.url}" target="_blank">
//                 <video controls preload="metadata">
//                     <source src="${video.url}" type="video/mp4">
//                 </video>
//             </a>
//             <p>${video.description}</p>
//             <button onclick="deleteVideo('${video.url}')">Delete</button>
//         `;

//         videosDiv.appendChild(videoItem);
//     }
// }

// function deleteVideo(url) {
//     videos = videos.filter(v => v.url !== url);
//     // Update localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();
// }

// // Initial display of videos
// displayVideos();








// let videos = JSON.parse(localStorage.getItem('videos')) || [];

// function addVideo() {
//     const urlInput = document.getElementById('urlInput');
//     const descriptionInput = document.getElementById('descriptionInput');

//     const video = {
//         url: urlInput.value,
//         description: descriptionInput.value
//     };

//     videos.push(video);
//     // Save to localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();

//     // Clear the input fields
//     urlInput.value = "";
//     descriptionInput.value = "";
// }

// function displayVideos() {
//     const videosDiv = document.getElementById('videos');
//     videosDiv.innerHTML = '';

//     for (const video of videos) {
//         const videoItem = document.createElement('div');
//         videoItem.className = 'video-item';

//         videoItem.innerHTML = `
//             <video controls>
//                 <source src="${video.url}" type="video/mp4">
//             </video>
//             <p>${video.description}</p>
//             <button onclick="deleteVideo('${video.url}')">Delete</button>
//         `;

//         videosDiv.appendChild(videoItem);
//     }
// }

// function deleteVideo(url) {
//     videos = videos.filter(v => v.url !== url);
//     // Update localStorage
//     localStorage.setItem('videos', JSON.stringify(videos));
//     displayVideos();
// }

// function searchVideos() {
//     const searchInput = document.getElementById('searchInput').value.toLowerCase();
//     const filteredVideos = videos.filter(video => video.description.toLowerCase().includes(searchInput));
//     const videosDiv = document.getElementById('videos');
//     videosDiv.innerHTML = '';

//     for (const video of filteredVideos) {
//         const videoItem = document.createElement('div');
//         videoItem.className = 'video-item';

//         videoItem.innerHTML = `
//             <video controls>
//                 <source src="${video.url}" type="video/mp4">
//             </video>
//             <p>${video.description}</p>
//             <button onclick="deleteVideo('${video.url}')">Delete</button>
//         `;

//         videosDiv.appendChild(videoItem);
//     }
// }

// // Initial display of videos
// displayVideos();
