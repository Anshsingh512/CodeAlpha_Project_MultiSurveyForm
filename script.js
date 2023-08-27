let currentPage = 1;
const pages = document.querySelectorAll('.page');
pages[currentPage - 1].style.display = 'block';

function nextPage(next) {
  pages[currentPage - 1].style.display = 'none';
  pages[next - 1].style.display = 'block';
  currentPage = next;
}

function prevPage(prev) {
  pages[currentPage - 1].style.display = 'none';
  pages[prev - 1].style.display = 'block';
  currentPage = prev;
}

function submitForm() {
  alert("Survey submitted! Thank you for participating.");
}

document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // You can add code here to collect and process the survey data
  nextPage(3); // Move to the next page after form submission
});
