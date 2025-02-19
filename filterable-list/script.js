const search = document.getElementById('filterInput');
const namesUl = document.getElementById('names');

search.addEventListener('keyup', searchList);

function searchList() {
    let searchValue = search.value.toLowerCase();

    const namesLi = namesUl.querySelectorAll('li.collection-item');

    namesLi.forEach((name) => {
        if (name.innerText.toLowerCase().includes(searchValue)) {
            name.style.display = '';
        } else {
            name.style.display = 'none';
        }
    })

}