/* eslint-disable semi */
const baseUrl = `http://api.exchangeratesapi.io/v1/`
const endPoint = `latest?`
const apiKey = `9ded7bcb3ad506b5714121e93877a9cd`
const querryURL = `${baseUrl}${endPoint}access_key=${apiKey}`

const input = document.getElementById('in')
const outUsd = document.getElementById('out')
const button = document.getElementById('button')
const buttonClear = document.getElementById('buttonClear')
const inputRub = document.getElementById('inRub')
const outInputRub = document.getElementById('outRub')
const inputs = [...document.getElementsByTagName('input')]
const parentButtons = document.querySelector('.parent')

let usd = null
let rub = null

async function getData() {
  return await fetch(querryURL)
}

const getRates = rates => {
  usd = rates.USD
  rub = rates.RUB
}

const calcRub = () => {
  const outRub = (+input.value / usd * rub).toFixed(2)
  outUsd.value = outRub + ' RUB'
}

const calcUsd = () => {
  const outInUsd = (+inputRub.value / rub * usd).toFixed(2)
  outInputRub.value = outInUsd + ' BUCKS'
}

const clearInputs = inputs => {
  inputs.forEach(el => el.value = '')
}

parentButtons.addEventListener('click', e => {
  const t = e.target
  if (t === button && input.value !== '') {
    calcRub()
  }
  if (t === button && inputRub.value !== '') {
    calcUsd()
  }
  if (t === buttonClear) {
    clearInputs(inputs)
  }
})

getData()
  .then(res => res.json())
  .then(res => getRates(res.rates))

