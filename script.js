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
    name: "Bilal Masjid",
    area: "Muradnagar, Ghaziabad",
    address: "Muradnagar, Ghaziabad, Uttar Pradesh",
    jummah: "1:00 PM",
    distance: "~ 4km",
    image:
      "Bilal Masjid.jpeg",
    locationUrl:
     " https://www.google.com/maps/search/?api=1&query=Bilal+Masjid%2C+Rawli+Road%2C+Muradnagar%2C+Uttar+Pradesh+201206"
  },

  {
    id: 2,
    name: "Mehmudia masjid ",
    area: "Muradnagar, Ghaziabad",
    address: "Main Market, Muradnagar, Ghaziabad, Uttar Pradesh",
    jummah: "1:00 PM",
    distance: "~4 km ",
    image:
      "Mehmudia masjid .jpeg",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Masjid+Mahmudia%2C+Muradnagar%2C+Uttar+Pradesh+201206"

  },
   {
    id: 3,
    name: "Sunheri masjid",
    area: "Ghaziabad",
    address: "Ghaziabad, Uttar Pradesh",
    jummah: "1:10 PM",
    distance: "~3.2 km",
    image:
      "Sunheri masjid.jpeg",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Sunheri+Masjid%2C+1006%2C+Brij+Vihar+Colony%2C+Old+Muradnagar%2C+Muradnagar%2C+Uttar+Pradesh+201206"
  },
   {
    id: 4,
    name: "Padao vali masid",
    area: "Modinagar Road",
    address: "Modinagar rrts Road, Ghaziabad, Uttar Pradesh",
    jummah: "1:20 PM",
    distance: "~3 km",
    image:
      "padao vali masjid.png",
    locationUrl:"https://www.google.com/maps/search/?api=1&query=Padao+Wali+Masjid%2C+QGC6%2B44P%2C+Bus+Stand%2C+GT+Road%2C+Brij+Vihar+Colony%2C+Muradnagar%2C+Uttar+Pradesh+201206"  },
    {
    id: 5,
    name: "Madarsa  Maintul uloom masjid",
    area: "Muradnagar, Ghaziabad",
    address: "Main Market, Muradnagar, Ghaziabad, Uttar Pradesh",
    jummah: "1:40 PM",
    distance: "~3.5 km",
    image:
      "WhatsApp Image 2026-08-19 at 9.50.55 AM.jpeg",
    locationUrl:"https://www.google.com/maps/search/?api=1&query=Madarsa+Madintul+Uloom%2C+64%2C+Gali+Number+2%2F4%2C+Malik+Nagar%2C+Muradnagar%2C+Uttar+Pradesh+201206" },


  {
    id: 6,
    name: "Ek minar masjid",
    area: "Muradnagar, Ghaziabad",
    address: "Main Market, Muradnagar, Ghaziabad, Uttar Pradesh",
    jummah: "2:00",
    distance: "~4 km",
    image:
      "Ek minar masjid.jpeg",
    locationUrl:"https://www.google.com/maps/search/?api=1&query=444%2C+Sitara+Masjid+Rd%2C+Mohalla+Kot%2C+Malik+Nagar%2C+Muradnagar%2C+Uttar+Pradesh%2C+India"
      
  },
      // {
  //   id: 6,
  //   name: "Masjid Bilal",
  //   area: "Kadrabad, Ghaziabad",
  //   address: "Kadrabad, Ghaziabad, Uttar Pradesh",
  //   jummah: "1:15 PM",
  //   distance: "Sample distance",
  //   image:
  //     "https://images.unsplash.com/photo-1542816417-0983672d7c9a?auto=format&fit=crop&w=900&q=80",
  //   locationUrl:
  //     "https://www.google.com/maps/search/?api=1&query=Masjid+Kadrabad+Ghaziabad"
  // },

 

  {
    id: 8,
    name: "Abdullah masjid",
    area: "Ghaziabad, Uttar Pradesh",
    address: "Ghaziabad, Uttar Pradesh",
    jummah: "Unknown",
    distance: "~4 km",
    image:
      "Abdullah masjid.jpeg",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Abdullah+Masjid%2C+QGF6%2BW7P%2C+Maulana+Azad+Road%2C+Malik+Nagar%2C+Muradnagar%2C+Uttar+Pradesh+201206"
  },
   {
    id: 9,
    name: "Tayyab masjid(Chappar Wali)",
    area: "Ghaziabad, Uttar Pradesh",
    address: "Ghaziabad, Uttar Pradesh",
    jummah: "Unknown",
    distance: "~3.5 km",
    image:
      "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=900&q=80",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Tayyab+Masjid+%28Chappar+Wali+Masjid%29%2C+QGC4%2B5FM%2C+Muradnagar%2C+Uttar+Pradesh+201206"
  },
   {
    id: 10,
    name: "Jheel waali(Fatima) masjid",
    area: "Ghaziabad, Uttar Pradesh",
    address: "Ghaziabad, Uttar Pradesh",
    jummah: "Unknown",
    distance: "~4 km",
    image:
      "Jheel waali(Fatima) masjid.jpeg",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=Jheel+Wali+Masjid+%28Fatima+Masjid%29%2C+QGH2%2BC89%2C+Near+Rashtriya+Ekta+Park%2C+Muradnagar+Main+Rd%2C+Muradnagar%2C+Uttar+Pradesh+201206"
  },
  //  {
  //   id: 8,
  //   name: "Abdullah masjid",
  //   area: "Ghaziabad, Uttar Pradesh",
  //   address: "Ghaziabad, Uttar Pradesh",
  //   jummah: "Unknown",
  //   distance: "Sample distance",
  //   image:
  //     "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=900&q=80",
  //   locationUrl:
  //     "https://www.google.com/maps/search/?api=1&query=Abdullah+Masjid%2C+QGF6%2BW7P%2C+Maulana+Azad+Road%2C+Malik+Nagar%2C+Muradnagar%2C+Uttar+Pradesh+201206"
  // },

];
// Prayer times from Ummah API for Ghaziabad.
const prayerTableBody = document.getElementById("prayerTableBody");
const prayerApiKeyFile = "prayer-timings-api-key-ummahapi.txt";
const ghaziabadLocation = {
  lat: 28.6692,
  lng: 77.4538,
  timezone: "Asia/Kolkata"
};

function renderPrayerRows(prayerTimes) {
  prayerTableBody.innerHTML = "";

  prayerTimes.forEach(function(time) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <strong class="prayer-name">${time.prayer}</strong>
      </td>

      <td>
        <span class="prayer-time">${time.start}</span>
      </td>
    `;

    prayerTableBody.appendChild(row);
  });
}

function renderPrayerMessage(message) {
  prayerTableBody.innerHTML = `
    <tr>
      <td colspan="2" class="prayer-message">${message}</td>
    </tr>
  `;
}

function formatPrayerTime(time) {
  const parts = time.split(":");
  const date = new Date();

  date.setHours(Number(parts[0]), Number(parts[1]), 0, 0);

  return date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}

function buildPrayerSchedule(times) {
  return [
    { prayer: "Fajr", start: formatPrayerTime(times.fajr) },
    { prayer: "Sunrise", start: formatPrayerTime(times.sunrise) },
    { prayer: "Dhuhr", start: formatPrayerTime(times.dhuhr) },
    { prayer: "Asr", start: formatPrayerTime(times.asr) },
    { prayer: "Maghrib", start: formatPrayerTime(times.maghrib) },
    { prayer: "Isha", start: formatPrayerTime(times.isha) }
  ];
}

async function loadPrayerTimes() {
  renderPrayerMessage("Loading prayer times...");

  try {
    const keyResponse = await fetch(prayerApiKeyFile);

    if (!keyResponse.ok) {
      throw new Error("Could not read the Ummah API key file.");
    }

    const apiKey = (await keyResponse.text()).trim();
    const params = new URLSearchParams({
      lat: ghaziabadLocation.lat,
      lng: ghaziabadLocation.lng,
      timezone: ghaziabadLocation.timezone,
      method: "MWL",
      madhab: "Hanafi",
      apikey: apiKey
    });

    const response = await fetch(
      `https://ummahapi.com/api/prayer-times?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Ummah API did not return prayer times.");
    }

    const result = await response.json();
    const times = result && result.data && result.data.prayer_times;

    if (!result.success || !times) {
      throw new Error("Prayer times were missing from the Ummah API response.");
    }

    renderPrayerRows(buildPrayerSchedule(times));
  } catch (error) {
    console.error(error);
    renderPrayerMessage("Prayer times could not be loaded right now.");
  }
}


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
loadPrayerTimes();
