API_KEY = 'cade44b45b574245a8d165325231812 ';

// Kaliningrad
URL= 'http://api.weatherapi.com/v1/current.json?key=cade44b45b574245a8d165325231812&q=Kaliningrad&lang=ru';

const form = document.querySelector('.header__form');
const cardList = document.querySelector('.card-list');

// fetch(URL)
//   .then((response) => {
//     // Проверяем успешность запроса и выкидываем ошибку
//     if (!response.ok) {
//       throw new Error('Error occurred!')
//     }
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.location.name);
//     const card = createElem(data);
//     cardList.append(card);

//     return data;
//   })
//   .catch((err) => {
//     console.error(err)
//   })


  /* Получаем название города */

  const loadData = async(cb) => {
    const result = await fetch(URL);
    const data = await result.json();
    console.log('data: ', data);
    cb(data);
  };



  const renderElem = (data) => { 
    const card = document.createElement('li');
    card.classList = 'card';

    console.log('data.location.name: ', data.location.name);
    card.innerHTML = `
        <h2 class="card__city card__city-1">${data.location.name}<span>${data.location.country}</span></h2>
        <div class="card__weather">
          <div class="card__value">${data.current.temp_c}<sup>&degС</sup></div>
          <img class="card__img" src="${data.current.condition.icon}" alt="Изображение погоды">
        </div>
        <div class="card__desc">${data.current.condition.text}</div>
    `;

    cardList.append(card);
    return card;
  };

  loadData(renderElem);

  // console.log(createElem());