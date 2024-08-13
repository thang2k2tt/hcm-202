const zoomButton = document.getElementById("zoom");
const currentPage = document.getElementById("current_page");
const viewer = document.querySelector(".pdf-viewer");
let currentPDF = {};

// Function to reset current PDF state
function resetCurrentPDF() {
  currentPDF = {
    file: null,
    countOfPages: 0,
    currentPage: 1,
    zoom: 4.0,
  };
}

// Function to load the PDF from a file path
function loadPDF(filePath) {
  const pdfFile = pdfjsLib.getDocument(filePath);
  resetCurrentPDF();
  pdfFile.promise.then((doc) => {
    currentPDF.file = doc;
    currentPDF.countOfPages = doc.numPages;
    renderCurrentPage();
  });
}

// Function to render the current page
function renderCurrentPage() {
  currentPDF.file.getPage(currentPDF.currentPage).then((page) => {
    var context = viewer.getContext("2d");
    var viewport = page.getViewport({ scale: currentPDF.zoom });
    viewer.height = viewport.height;
    viewer.width = viewport.width;

    var renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    page.render(renderContext);
  });
  currentPage.innerHTML =
    currentPDF.currentPage + " of " + currentPDF.countOfPages;
}

// Add an event listener for zoom changes
zoomButton.addEventListener("input", () => {
  if (currentPDF.file) {
    document.getElementById("zoomValue").innerHTML = zoomButton.value + "%";
    currentPDF.zoom = parseInt(zoomButton.value) / 100;
    renderCurrentPage();
  }
});

// Add event listeners for navigation
document.getElementById("next").addEventListener("click", () => {
  const isValidPage = currentPDF.currentPage < currentPDF.countOfPages;
  if (isValidPage) {
    currentPDF.currentPage += 1;
    renderCurrentPage();
  }
});

document.getElementById("previous").addEventListener("click", () => {
  const isValidPage = currentPDF.currentPage - 1 > 0;
  if (isValidPage) {
    currentPDF.currentPage -= 1;
    renderCurrentPage();
  }
});

// Load the PDF when the page loads
window.addEventListener("load", () => {
  // Provide the path to your PDF file here
  const pdfPath = `/files/giaotrinh.pdf`;

  loadPDF(pdfPath);
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  // URL của file cần tải xuống
  const fileId = "1nEYtrxsvIWr-kafk7b4h6Ay42qH5E-VX"; 
  const apiKey = "AIzaSyDoQl-bgPLcPh7cus33QksS4iffjQ2xXg4";
  const fileUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
  const fileName = "giaotrinh.pdf";

  // Tạo một thẻ <a> ẩn để kích hoạt tải file
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const contentItems = document.querySelectorAll(".content-item");

  timelineItems.forEach(item => {
    item.addEventListener("click", function() {
      // Remove active class from all timeline items
      timelineItems.forEach(ti => {
        ti.classList.remove("active");
      });

      // Add active class to the clicked item
      this.classList.add("active");

      // Hide all content items
      contentItems.forEach(content => {
        content.classList.remove("active");
      });

      // Show the content corresponding to the clicked item
      const targetId = this.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});

