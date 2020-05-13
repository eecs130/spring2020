const remotePath = 'https://raw.githubusercontent.com/hci330/winter2020/master/course-files/assignments/studio04/06-gallery-ajax/data/';
const localPath = '../data';
    
const loadCards = (photos) => {
    document.querySelector('.cards').innerHTML = '';

    // load new ones (based on photos list)
    for (photo of photos) {
        const template = `
           <div class="card" style="background-image:url('${photo}')"></div>`;
        document.querySelector('.cards').innerHTML += template;
    }
    initCarousel();
};

const loadFlowers = () => {
    fetch(remotePath + 'flowers.json')
        .then((response) => {
            return response.json();
        })
        .then(loadCards);
};

const loadCars = () => {
    // your job:
    console.log('fetch data from', remotePath + 'cars.json', 'and display it...');
};

const loadBikes = () => {
    // your job:
    console.log('fetch data from', remotePath + 'bikes.json', 'and display it...');
};

document.querySelector('#flowers-button').onclick = loadFlowers;
document.querySelector('#cars-button').onclick = loadCars;
document.querySelector('#bikes-button').onclick = loadBikes;

// default to the flowers:
loadFlowers();
