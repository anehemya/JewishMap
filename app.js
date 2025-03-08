let map;
let markers = [];
const activeScholars = new Set();

function initMap() {
    map = L.map('map').setView([31.7683, 35.2137], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
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

// Add category filter UI
function addCategoryFilters() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';
    
    Object.keys(scholarCategories).forEach(category => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = category;
        checkbox.checked = true;
        checkbox.addEventListener('change', () => updateMap(parseInt(timeline.value)));
        
        const label = document.createElement('label');
        label.htmlFor = category;
        label.textContent = category;
        label.style.color = scholarCategories[category].color;
        
        filterContainer.appendChild(checkbox);
        filterContainer.appendChild(label);
    });
    
    document.querySelector('.container').insertBefore(filterContainer, document.getElementById('map'));
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    addCategoryFilters();

    const timeline = document.getElementById('timeline');
    const yearDisplay = document.getElementById('year-display');

    timeline.addEventListener('input', (e) => {
        const year = parseInt(e.target.value);
        yearDisplay.textContent = `Year: ${year}`;
        updateMap(year);
    });

    // Initial update
    updateMap(parseInt(timeline.value));
}); 