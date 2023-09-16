var accountSettings = document.getElementById('account-settings');
var dropDownContainer = document.querySelector('.dropdown__container');

accountSettings.onclick = () => {
    dropDownContainer.classList.toggle('show');
}

var sections = document.querySelectorAll('.account-section');
var links = document.querySelectorAll('.account-link');

function showSection(sectionId) {
    sections.forEach(function (section) {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

links.forEach(function(link) {
    link.onclick = () => {
        var sectionId = link.getAttribute('data-section');
        showSection(sectionId);
    }
})