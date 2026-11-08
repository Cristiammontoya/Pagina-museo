
import { initializeMap } from "./map/map.js";

console.log("Museo interactivo iniciado");

const coinCounter = document.getElementById("coin-counter");

let coins = 0;

coinCounter.textContent = coins;

initializeMap();