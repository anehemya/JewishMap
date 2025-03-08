import { scholars, scholarCategories, scholarRegions } from './scholars.js';

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

function getScholarRegion(scholar) {
    // Implement the logic to determine the region based on the scholar's coordinates
    // This is a placeholder and should be replaced with the actual implementation
    return "Unknown Region";
}

function getLocationName(scholar) {
    // Return the locationName if it exists, otherwise return a formatted coordinate string
    return scholar.locationName || `${scholar.coordinates.note || formatCoordinates(scholar.coordinates)}`;
}

// Helper function to format coordinates nicely if we don't have a location name
function formatCoordinates(coordinates) {
    return `${coordinates.lat.toFixed(4)}°${coordinates.lat >= 0 ? 'N' : 'S'}, ${coordinates.lng.toFixed(4)}°${coordinates.lng >= 0 ? 'E' : 'W'}`;
}

function createCustomIcon(scholar, isActive = true) {
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
            box-shadow: 0 0 4px rgba(0,0,0,0.5);
            opacity: ${isActive ? 1 : 0.4};"
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

            // Add tooltip that shows on hover
            const yearsText = scholar.deathYear === null ? 
                `${scholar.birthYear} - Present` : 
                `${scholar.birthYear} - ${scholar.deathYear}`;
            marker.bindTooltip(`${scholar.name}<br>${yearsText}`, {
                direction: 'top',
                offset: [0, -10],
                className: 'scholar-tooltip'
            });

            // Toggle bio panel on click
            marker.on('click', () => toggleScholarInfo(scholar));
            
            markers.push(marker);
            activeScholars.add(scholar);
        }
    });
}

// New function to toggle the bio panel
function toggleScholarInfo(scholar) {
    const infoPanel = document.getElementById('scholar-info');
    const currentScholar = infoPanel.dataset.currentScholar;
    
    // If clicking the same scholar, close the panel
    if (currentScholar === scholar.name && !infoPanel.classList.contains('hidden')) {
        hideScholarInfo();
        return;
    }
    
    // Show info for the new scholar
    showScholarInfo(scholar);
    infoPanel.dataset.currentScholar = scholar.name;
}

function showScholarInfo(scholar) {
    const infoPanel = document.getElementById('scholar-info');
    
    // Create structured content
    infoPanel.innerHTML = `
        <button id="close-info">×</button>
        <div class="scholar-header">
            <div class="scholar-image">
                ${scholar.image ? 
                    `<img src="${scholar.image}" alt="${scholar.name}">` : 
                    `<div class="placeholder-image">
                        <i class="fas fa-user"></i>
                    </div>`
                }
            </div>
            <div class="scholar-title">
                <h2>${scholar.name}</h2>
                <p class="years">${scholar.deathYear === null ? 
                    `${scholar.birthYear} - Present` : 
                    `${scholar.birthYear} - ${scholar.deathYear}`}</p>
            </div>
        </div>
        <div class="scholar-content">
            <div class="scholar-details">
                <div class="detail-item">
                    <span class="label">Period:</span>
                    <span class="value">${getScholarCategory(scholar)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Region:</span>
                    <span class="value">${getScholarRegion(scholar)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Location:</span>
                    <span class="value">${getLocationName(scholar)}</span>
                </div>
            </div>
            <div class="scholar-description">
                <p>${scholar.description}</p>
            </div>
            <div class="scholar-works">
                <h3>Notable Works:</h3>
                <ul>
                    ${scholar.works ? 
                        scholar.works.map(work => `<li>${work}</li>`).join('') :
                        '<li>Information not available</li>'
                    }
                </ul>
            </div>
            <a href="${scholar.link}" target="_blank" class="learn-more">
                Learn More
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
    
    // Add click handler to close button after creating it
    document.getElementById('close-info').addEventListener('click', hideScholarInfo);
    
    infoPanel.classList.remove('hidden');
    infoPanel.dataset.currentScholar = scholar.name;
}

function hideScholarInfo() {
    const infoPanel = document.getElementById('scholar-info');
    infoPanel.classList.add('hidden');
    // Clear the current scholar data
    infoPanel.dataset.currentScholar = '';
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
    
    // Get active filters
    const activeFilters = {
        periods: Object.keys(scholarCategories).filter(
            category => document.getElementById(category).checked
        ),
        regions: Object.keys(scholarRegions).filter(
            region => document.getElementById(region).checked
        )
    };

    // Search through scholars with filters
    const matchingScholars = scholars.filter(scholar => {
        // Check if matches search term
        const matchesSearch = 
            scholar.name.toLowerCase().includes(searchTerm) ||
            (scholar.description && scholar.description.toLowerCase().includes(searchTerm)) ||
            (scholar.locationName && scholar.locationName.toLowerCase().includes(searchTerm));

        // Check if matches active filters
        const matchesFilters = 
            activeFilters.periods.includes(scholar.period) &&
            activeFilters.regions.includes(scholar.region);

        return matchesSearch && matchesFilters;
    });

    // Update map with matching scholars
    updateMapWithResults(matchingScholars);
}

function updateMapWithResults(filteredScholars) {
    // Clear existing markers
    markers.forEach(marker => marker.remove());
    markers = [];
    activeScholars.clear();

    const currentYear = parseInt(document.getElementById('timeline').value);

    // Add markers for all matching scholars, but style them differently based on timeline
    filteredScholars.forEach(scholar => {
        const isAlive = scholar.deathYear === null;
        const wasAliveInYear = currentYear >= scholar.birthYear && 
            (isAlive || currentYear <= scholar.deathYear);
        
        // Create marker with different opacity based on if they were alive
        const marker = L.marker([scholar.coordinates.lat, scholar.coordinates.lng], {
            icon: createCustomIcon(scholar, wasAliveInYear),
            opacity: wasAliveInYear ? 1 : 0.4
        }).addTo(map);

        // Add tooltip
        const yearsText = scholar.deathYear === null ? 
            `${scholar.birthYear} - Present` : 
            `${scholar.birthYear} - ${scholar.deathYear}`;
        marker.bindTooltip(`${scholar.name}<br>${yearsText}`, {
            direction: 'top',
            offset: [0, -10],
            className: 'scholar-tooltip'
        });

        marker.on('click', () => toggleScholarInfo(scholar));
        
        markers.push(marker);
        if (wasAliveInYear) {
            activeScholars.add(scholar);
        }
    });
}

// Add filter change handlers
function initFilters() {
    // Period filters
    Object.keys(scholarCategories).forEach(period => {
        const checkbox = document.getElementById(period);
        checkbox.addEventListener('change', () => {
            const searchBox = document.getElementById('search-box');
            handleSearch({ target: searchBox }); // Reuse search logic
        });
    });

    // Region filters
    Object.keys(scholarRegions).forEach(region => {
        const checkbox = document.getElementById(region);
        checkbox.addEventListener('change', () => {
            const searchBox = document.getElementById('search-box');
            handleSearch({ target: searchBox }); // Reuse search logic
        });
    });
}

// Update the timeline container creation in initSearchAndFilters
function initTimelineControls() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    // Clear existing content
    timelineContainer.innerHTML = '';
    
    // Add year input
    const yearControl = document.createElement('div');
    yearControl.className = 'year-control';
    yearControl.innerHTML = `
        <span>Year</span>
        <input type="number" 
            id="year-input" 
            min="800" 
            max="2024" 
            value="1000"
            class="year-input"
        >
    `;
    
    // Add slider
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.id = 'timeline';
    slider.min = '800';
    slider.max = '2024';
    slider.value = '1000';
    
    timelineContainer.appendChild(yearControl);
    timelineContainer.appendChild(slider);
    
    // Rest of the event listeners remain the same
    const timeline = document.getElementById('timeline');
    const yearInput = document.getElementById('year-input');

    timeline.addEventListener('input', (e) => {
        const year = parseInt(e.target.value);
        yearInput.value = year;
        updateMap(year);
    });

    yearInput.addEventListener('input', (e) => {
        let year = parseInt(e.target.value);
        if (year < 800) year = 800;
        if (year > 2024) year = 2024;
        timeline.value = year;
        updateMap(year);
    });
}

// Update the initialization
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initSearchAndFilters();
    initTimelineControls();
    initFilters();

    const timeline = document.getElementById('timeline');
    const yearDisplay = document.getElementById('year-display');

    timeline.addEventListener('input', (e) => {
        const year = parseInt(e.target.value);
        yearDisplay.textContent = `Year: ${year}`;
        updateMap(year);
    });

    updateMap(parseInt(timeline.value));
}); 