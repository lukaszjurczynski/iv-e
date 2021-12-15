"use strict";

const containerEL = document.querySelector('.container');

//Render items
function createItemHTML(e) {
    e.forEach(element => {
        containerEL.insertAdjacentHTML('beforeend', (
            `
        <figure class="item">
            <h3 class="description">
                ${element.alt_description}
            </h3>
            <div class="item__text-content">
                    <p class="author"><span class="indicator">By:</span><a href="${element.links.html}" class="link" target="self">${element.user.name}</a></p>
                    <p class="date"><span class="indicator">On:</span>${element.created_at}</p>
            </div>
            <img src="${element.urls.small}" alt="image" class="item__background-image">
        </figure>
        `
        ))
    });
}

//Get data from user
const createData = (word) => {
    word = prompt('What images do you want to see? (For example: "eclipse"');
    const promiseResult = fetch(`https://api.unsplash.com/search/photos?client_id=1TVmlW6RlL7ed_OZtwhC9zmr4JyI-rBmLQPjn6O4aDU&orientation=portrait&page=1&query=${word}&per_page=8`).then(function (response) {
        return response.json();
    }).then(function (data) {
        createItemHTML(data.results)
    });
}

createData();
