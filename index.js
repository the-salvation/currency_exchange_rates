/* eslint-disable semi */
const country = document.querySelector('#country')
const city = document.querySelector('#city')
const result = document.querySelector('.result')

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

const showCities = (e) => {
  let target = e.value
  let strUser = e.target.options
  console.log("🚀 ~ file: index.js ~ line 16 ~ showCities ~ strUser", strUser)
  const vals = [...country.options].map(el => el.value)
  if (vals[0]) {
    city.style.display = 'flex'

  }
  console.log()
  cityArr.forEach(el => console.log(el))
}

country.addEventListener('change', showCities)
