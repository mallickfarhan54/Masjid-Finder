// ==========================================
// JUMU'AH NEAR KIET - JAVASCRIPT
// ==========================================

// 1. Sample Masjid data
// ------------------------------------------
// These are demo records for the project.
// Later, you can replace this array with data
// from a database or API.

const masjids = [
  {
    id: 1,
    name: "Masjid Al-Noor",
    area: "Muradnagar, Ghaziabad",
    address: "Muradnagar, Ghaziabad, Uttar Pradesh",
    jummah: "1:30 PM",
    distance: "Sample distance",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80",
    locationUrl:
      https:"//www.google.com/maps/dir/KIET+Group+of+Institutions,+Delhi-NCR,+Meerut+Rd,+Ghaziabad,+Uttar+Pradesh+201206/Padao+wali+masjid,+QGC6%2B44P,+Bus+Stand,+GT+Rd,+Brij+Vihar+Colony,+Muradnagar,+Uttar+Pradesh+201206/@28.7606065,77.4913168,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x390cf574d18f2b6f:0x4a65c0bc0122eb2f!2m2!1d77.4970664!2d28.7531817!1m5!1m1!1s0x390cf45c1e04c9af:0x89791d5ea3ee4749!2m2!1d77.5103357!2d28.770318?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D"

  {
    id: 2,
    name: "Jama Masjid",
    area: "Muradnagar, Ghaziabad",
    address: "Main Market, Muradnagar, Ghaziabad, Uttar Pradesh",
    jummah: "1:45 PM",
    distance: "Sample distance",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Jama+Masjid+Muradnagar+Ghaziabad"
  },

  {
    id: 3,
    name: "Masjid Umar",
    area: "Modinagar Road",
    address: "Modinagar Road, Ghaziabad, Uttar Pradesh",
    jummah: "2:00 PM",
    distance: "Sample distance",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=900&q=80",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Masjid+Modinagar+Road+Ghaziabad"
  },

  {
    id: 4,
    name: "Masjid Bilal",
    area: "Kadrabad, Ghaziabad",
    address: "Kadrabad, Ghaziabad, Uttar Pradesh",
    jummah: "1:15 PM",
    distance: "Sample distance",
    image:
      "https://images.unsplash.com/photo-1542816417-0983672d7c9a?auto=format&fit=crop&w=900&q=80",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Masjid+Kadrabad+Ghaziabad"
  },

  {
    id: 5,
    name: "Masjid-e-Rahman",
    area: "Ghaziabad",
    address: "Ghaziabad, Uttar Pradesh",
    jummah: "1:30 PM",
    distance: "Sample distance",
    image:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=900&q=80",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Masjid+Ghaziabad"
  },

  {
    id: 6,
    name: "Masjid Ibrahim",
    area: "Ghaziabad, Uttar Pradesh",
    address: "Ghaziabad, Uttar Pradesh",
    jummah: "2:15 PM",
    distance: "Sample distance",
    image:
      "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=900&q=80",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Masjid+Ghaziabad"
  }
];


// 2. Get HTML elements
// ------------------------------------------

const masjidGrid = document.getElementById("masjidGrid");
const masjidCount = document.getElementById("masjidCount");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// 3. Create one Masjid card
// ------------------------------------------
// This function receives one Masjid object
// and returns its HTML card.

function createMasjidCard(masjid) {
  return `
    <article class="masjid-card">

      <img
        class="masjid-image"
        src="${masjid.image}"
        alt="${masjid.name}"
        loading="lazy"
      >

      <div class="card-content">

        <h3>${masjid.name}</h3>

        <div class="info">
          <span>📍</span>
          <span>${masjid.area}</span>
        </div>

        <div class="jummah-box">
          <span class="jummah-label">Jumu'ah • Friday</span>
          <span class="jummah-time">🕐 ${masjid.jummah}</span>
        </div>

        <div class="info">
          <span>📏</span>
          <span class="distance">${masjid.distance}</span>
        </div>

        <div class="card-buttons">
          <a
            class="location-btn"
            href="${masjid.locationUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            🗺️ View Location
          </a>

          <a
            class="direction-btn"
            href="${masjid.locationUrl}&travelmode=driving"
            target="_blank"
            rel="noopener noreferrer"
          >
            🧭 Directions
          </a>
        </div>

      </div>
    </article>
  `;
}


// 4. Display all Masjids
// ------------------------------------------

function displayMasjids() {
  masjidGrid.innerHTML = "";

  masjids.forEach(function(masjid) {
    masjidGrid.innerHTML += createMasjidCard(masjid);
  });

  masjidCount.textContent =
    `${masjids.length} Masjid${masjids.length !== 1 ? "s" : ""}`;
}


// 5. Mobile navigation
// ------------------------------------------
// Shows/hides the menu on small screens.

menuBtn.addEventListener("click", function() {
  navMenu.classList.toggle("show");
});


// Close mobile menu after clicking a link.
navMenu.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function() {
    navMenu.classList.remove("show");
  });
});


// 6. Start the website
// ------------------------------------------

displayMasjids();
