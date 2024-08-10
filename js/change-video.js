// Select all video list items
const videoLinks = document.querySelectorAll('.video-list ul li a');
const mainVideo = document.querySelector('.main-video');
const videoTitle = document.querySelector('.video-title');

// Add event listener to each video link
videoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Get the href attribute (new video src)
        const newSrc = link.getAttribute('href');

        // Get the text content of the link (new video title)
        const newTitle = link.textContent.trim();

        // Update the iframe src and video title
        mainVideo.src = newSrc;
        videoTitle.textContent = newTitle;
    });
});
