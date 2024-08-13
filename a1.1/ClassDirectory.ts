interface City {
    cityName: string;
    country: string;
    population: number;
}

class CityDirectory {
    private cities: City[] = [];
    private cityListElement: HTMLUListElement;
    private searchInputElement: HTMLInputElement;

    constructor() {
        this.cityListElement = document.getElementById('cityList') as HTMLUListElement;
        this.searchInputElement = document.getElementById('searchInput') as HTMLInputElement;

        this.loadCities();
        this.bindEvents();
        this.renderCities();
    }

    private bindEvents(): void {
        const cityForm = document.getElementById('cityForm') as HTMLFormElement;
        cityForm.addEventListener('submit', (e) => this.addCity(e));
        this.searchInputElement.addEventListener('input', () => this.renderCities());
    }

    private addCity(event: Event): void {
        event.preventDefault();

        const cityName = (document.getElementById('cityName') as HTMLInputElement).value.trim();
        const country = (document.getElementById('country') as HTMLInputElement).value.trim();
        const population = parseInt((document.getElementById('population') as HTMLInputElement).value.trim(), 10);

        if (cityName && country && !isNaN(population)) {
            this.cities.push({ cityName, country, population });
            this.saveCities();
            this.renderCities();
            (document.getElementById('cityForm') as HTMLFormElement).reset();
        }
    }

    private renderCities(): void {
        this.cityListElement.innerHTML = '';
        const searchTerm = this.searchInputElement.value.toLowerCase();

        const filteredCities = this.cities.filter(city =>
            city.cityName.toLowerCase().includes(searchTerm) ||
            city.country.toLowerCase().includes(searchTerm)
        );

        filteredCities.forEach(city => {
            const li = document.createElement('li');
            li.textContent = `${city.cityName}, ${city.country} - Population: ${city.population}`;
            this.cityListElement.appendChild(li);
        });
    }

    private saveCities(): void {
        localStorage.setItem('cities', JSON.stringify(this.cities));
    }

    private loadCities(): void {
        const savedCities = localStorage.getItem('cities');
        if (savedCities) {
            this.cities = JSON.parse(savedCities);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CityDirectory();
});
