"use strict";
class CityDirectory {
    constructor() {
        this.cities = [];
        this.cityListElement = document.getElementById('cityList');
        this.searchInputElement = document.getElementById('searchInput');
        this.loadCities();
        this.bindEvents();
        this.renderCities();
    }
    bindEvents() {
        const cityForm = document.getElementById('cityForm');
        cityForm.addEventListener('submit', (e) => this.addCity(e));
        this.searchInputElement.addEventListener('input', () => this.renderCities());
    }
    addCity(event) {
        event.preventDefault();
        const cityName = document.getElementById('cityName').value.trim();
        const country = document.getElementById('country').value.trim();
        const population = parseInt(document.getElementById('population').value.trim(), 10);
        if (cityName && country && !isNaN(population)) {
            this.cities.push({ cityName, country, population });
            this.saveCities();
            this.renderCities();
            document.getElementById('cityForm').reset();
        }
    }
    renderCities() {
        this.cityListElement.innerHTML = '';
        const searchTerm = this.searchInputElement.value.toLowerCase();
        const filteredCities = this.cities.filter(city => city.cityName.toLowerCase().includes(searchTerm) ||
            city.country.toLowerCase().includes(searchTerm));
        filteredCities.forEach(city => {
            const li = document.createElement('li');
            li.textContent = `${city.cityName}, ${city.country} - Population: ${city.population}`;
            this.cityListElement.appendChild(li);
        });
    }
    saveCities() {
        localStorage.setItem('cities', JSON.stringify(this.cities));
    }
    loadCities() {
        const savedCities = localStorage.getItem('cities');
        if (savedCities) {
            this.cities = JSON.parse(savedCities);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new CityDirectory();
});
