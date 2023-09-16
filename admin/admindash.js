var dashboard = document.getElementById('dashboard');
var dashboardLink = document.getElementById('dashboard-link');
window.onload = function() {
  dashboard.style.display = 'block';
}

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [{
      label: 'Orders',
      data: [1200, 1900, 300, 500, 200, 300, 1890],
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let table = new DataTable('#myTable');

var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(dropdownToggle => {
  dropdownToggle.onclick = function() {
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
  }
})

var sections = document.querySelectorAll('.admin-section');
var links = document.querySelectorAll('.admin-link');

function addActive(alink) {
  links.forEach(function(link) {
    link.classList.remove('active');
    alink.classList.add('active');
  })
}

function showSection(sectionId) {
  sections.forEach(function(section) {
    section.style.display = section.id === sectionId ? 'block' : 'none';
  })
}

links.forEach(function(link) {
  link.onclick = () => {
    var sectionId = link.getAttribute('data-admin-section');
    addActive(link);
    showSection(sectionId);
  }
})

var view = document.getElementById('view');
var customerReview = document.getElementById('Customers-review')
var dashboard = document.getElementById('dashboard');
view.onclick = () => {
  customerReview.style.display = 'block';
  dashboard.style.display = 'none';
}

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var date = new Date();
var month = monthsOfTheYear[date.getMonth()];
var day = daysOfTheWeek[date.getDay()];
var numericDay = date.getDate();
var year = date.getFullYear();

var orderDateContainers = document.querySelectorAll('.order-date');
orderDateContainers.forEach(order => {
  order.textContent = `${day} ${numericDay} ${month}, ${year}`;
})