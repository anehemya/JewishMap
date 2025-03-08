let map;
let markers = [];
const activeScholars = new Set();

function initMap() {
    map = L.map('map', {
        minZoom: 3,  // Prevents zooming out too far
        maxZoom: 18, // Standard max zoom level
        worldCopyJump: true, // Enables smooth transition when crossing the date line
        center: [31.7683, 35.2137],
        zoom: 4
    });

    // Using Carto's Voyager basemap - free, no API key required
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        continuousWorld: true
    }).addTo(map);
}

function getScholarCategory(scholar) {
    if (scholar.deathYear >= 1900) return "Modern";
    if (scholar.deathYear >= 1500) return "Acharonim";
    return "Rishonim";
}

function createCustomIcon(scholar) {
    const category = getScholarCategory(scholar);
    const color = scholarCategories[category].color;
    
    return L.divIcon({
        className: 'scholar-marker',
        html: `<div style="
            width: 12px;
            height: 12px;
            background: ${color};
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 4px rgba(0,0,0,0.5);"
        ></div>`
    });
}

function updateMap(year) {
    markers.forEach(marker => marker.remove());
    markers = [];
    activeScholars.clear();

    const activeFilters = Object.keys(scholarCategories).filter(
        category => document.getElementById(category).checked
    );

    scholars.forEach(scholar => {
        const isAlive = scholar.deathYear === null;
        const wasAliveInYear = year >= scholar.birthYear && (isAlive || year <= scholar.deathYear);
        
        if (wasAliveInYear && activeFilters.includes(getScholarCategory(scholar))) {
            const marker = L.marker([scholar.coordinates.lat, scholar.coordinates.lng], {
                icon: createCustomIcon(scholar)
            }).addTo(map);

            marker.on('mouseover', () => showScholarInfo(scholar));
            marker.on('mouseout', () => hideScholarInfo());
            
            markers.push(marker);
            activeScholars.add(scholar);
        }
    });
}

function showScholarInfo(scholar) {
    const infoPanel = document.getElementById('scholar-info');
    document.getElementById('scholar-name').textContent = scholar.name;
    const yearsText = scholar.deathYear === null ? 
        `${scholar.birthYear} - Present` : 
        `${scholar.birthYear} - ${scholar.deathYear}`;
    document.getElementById('scholar-years').textContent = yearsText;
    document.getElementById('scholar-description').textContent = scholar.description;
    document.getElementById('scholar-link').href = scholar.link;
    infoPanel.classList.remove('hidden');
}

function hideScholarInfo() {
    document.getElementById('scholar-info').classList.add('hidden');
}

function initSearchAndFilters() {
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container collapsed';
    
    // Create search input
    const searchInput = document.createElement('div');
    searchInput.className = 'search-input-container';
    searchInput.innerHTML = `
        <input type="text" id="search-box" placeholder="Search for a rabbi or location">
        <button class="search-button">
            <i class="fas fa-search"></i>
        </button>
    `;

    // Create filters panel
    const filtersPanel = document.createElement('div');
    filtersPanel.className = 'filters-panel';
    filtersPanel.innerHTML = `
        <div class="filter-group">
            <h3>Time Period</h3>
            <div class="filter-options">
                ${Object.keys(scholarCategories).map(category => `
                    <label class="filter-option">
                        <input type="checkbox" id="${category}" checked>
                        <span class="checkmark"></span>
                        <span class="label-text">${category}</span>
                    </label>
                `).join('')}
            </div>
        </div>
        <div class="filter-group">
            <h3>Region</h3>
            <div class="filter-options">
                ${Object.keys(scholarRegions).map(region => `
                    <label class="filter-option">
                        <input type="checkbox" id="${region}" checked>
                        <span class="checkmark"></span>
                        <span class="label-text">${region}</span>
                    </label>
                `).join('')}
            </div>
        </div>
        <div class="filter-group">
            <h3>Specialty</h3>
            <div class="filter-options">
                <label class="filter-option">
                    <input type="checkbox" checked>
                    <span class="checkmark"></span>
                    <span class="label-text">Talmudist</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" checked>
                    <span class="checkmark"></span>
                    <span class="label-text">Philosopher</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" checked>
                    <span class="checkmark"></span>
                    <span class="label-text">Kabbalist</span>
                </label>
                <label class="filter-option">
                    <input type="checkbox" checked>
                    <span class="checkmark"></span>
                    <span class="label-text">Halachist</span>
                </label>
            </div>
        </div>
    `;

    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(filtersPanel);
    document.querySelector('.container').appendChild(searchContainer);

    // Add click handlers for collapsing/expanding
    const searchBox = document.getElementById('search-box');
    
    // Expand when clicking the search box
    searchBox.addEventListener('click', (e) => {
        searchContainer.classList.remove('collapsed');
        e.stopPropagation();
    });

    // Collapse when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.add('collapsed');
            searchBox.blur(); // Remove focus from search box
        }
    });

    // Prevent collapse when clicking inside the container
    searchContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Add search functionality
    searchBox.addEventListener('input', handleSearch);
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    // Search through scholars
    const matchingScholars = scholars.filter(scholar => 
        scholar.name.toLowerCase().includes(searchTerm) ||
        (scholar.coordinates.lat + ',' + scholar.coordinates.lng).includes(searchTerm)
    );

    // For now, just console.log the matches
    console.log('Matching scholars:', matchingScholars);
}

// Update the initialization
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initSearchAndFilters();

    const timeline = document.getElementById('timeline');
    const yearDisplay = document.getElementById('year-display');

    timeline.addEventListener('input', (e) => {
        const year = parseInt(e.target.value);
        yearDisplay.textContent = `Year: ${year}`;
        updateMap(year);
    });

    updateMap(parseInt(timeline.value));
}); 