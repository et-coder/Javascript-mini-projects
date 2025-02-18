const result = document.getElementById('result');
const search = document.getElementById('search');
const listItems = [];

getUsers();

search.addEventListener('input', (e) => filterData(e.target.value));

async function getUsers() {
    const res = await fetch('https://randomuser.me/api?results=50');

    const { results } = await res.json();

    result.innerHTML = '';

    results.forEach((user) => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>`

        result.appendChild(li);
    })
}



function filterData(data) {
    listItems.forEach((usr) => {
        if (usr.innerText.toLowerCase().includes(data.toLowerCase())) {
            usr.classList.remove('hide');
        } else {
            usr.classList.add('hide');
        }
    })
}


