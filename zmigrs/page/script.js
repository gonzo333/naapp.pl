let currentPage = "home";
let api_url = "https://oracleapex.com/ords/zmigrs/api";

const cities = [
    {
        name: "Ostrowiec Swietokrzyski",
        path: "czlonkowie/miasta_i_gminy/ostrowiec_swietokrzyski.html",
    },
    { name: "Sandomierz", path: "czlonkowie/miasta_i_gminy/sandomierz.html" },
    { name: "Skarzysko-Kamienna", path: "czlonkowie/miasta_i_gminy/skarzysko-kamienna.html" },
    { name: "Starachowice", path: "czlonkowie/miasta_i_gminy/starachowice.html" },
];

const cities_and_municipalities = [
    { name: "Bodzentyn", path: "czlonkowie/miasta_i_gminy/bodzentyn.html" },
    { name: "Bogoria", path: "czlonkowie/miasta_i_gminy/bogoria.html" },
    { name: "Busko-Zdrój", path: "czlonkowie/miasta_i_gminy/busko_zdroj.html" },
    { name: "Chęciny", path: "czlonkowie/miasta_i_gminy/checiny.html" },
    { name: "Chmielnik", path: "czlonkowie/miasta_i_gminy/chmielnik.html" },
    { name: "Ćmielów", path: "czlonkowie/miasta_i_gminy/cmielow.html" },
    { name: "Daleszyce", path: "czlonkowie/miasta_i_gminy/daleszyce.html" },
    { name: "Działoszyce", path: "czlonkowie/miasta_i_gminy/dzialoszyce.html" },
    { name: "Gowarczów", path: "czlonkowie/miasta_i_gminy/gowarczow.html" },
    { name: "Iwaniska", path: "czlonkowie/miasta_i_gminy/iwaniska.html" },
    { name: "Kazimierza Wielka", path: "czlonkowie/miasta_i_gminy/kazimierza_wielka.html" },
    { name: "Klimontóww", path: "czlonkowie/miasta_i_gminy/klimontow.html" },
    { name: "Końskie", path: "czlonkowie/miasta_i_gminy/konskie.html" },
    { name: "Koprzywnica", path: "czlonkowie/miasta_i_gminy/koprzywnica.html" },
    { name: "Kunów", path: "czlonkowie/miasta_i_gminy/kunow.html" },
    { name: "Łagów", path: "czlonkowie/miasta_i_gminy/lagow.html" },
    { name: "Łopuszno", path: "czlonkowie/miasta_i_gminy/lopuszno.html" },
    { name: "Małogoszcz", path: "czlonkowie/miasta_i_gminy/malogoszcz.html" },
    { name: "Morawica", path: "czlonkowie/miasta_i_gminy/morawica.html" },
    { name: "Nowa Słupia", path: "czlonkowie/miasta_i_gminy/nowa_slupia.html" },
    { name: "Nowy Korczyn", path: "czlonkowie/miasta_i_gminy/nowy_korczyn.html" },
    { name: "Oleśnica", path: "czlonkowie/miasta_i_gminy/olesnica.html" },
    { name: "Opatów", path: "czlonkowie/miasta_i_gminy/opatow.html" },
    { name: "Opatowiec", path: "czlonkowie/miasta_i_gminy/opatowiec.html" },
    { name: "Ożarów", path: "czlonkowie/miasta_i_gminy/ozarow.html" },
    { name: "Pacanóww", path: "czlonkowie/miasta_i_gminy/pacanow.html" },
    { name: "Piekoszów", path: "czlonkowie/miasta_i_gminy/piekoszow.html" },
    { name: "Pierzchnica", path: "czlonkowie/miasta_i_gminy/pierzchnica.html" },
    { name: "Pinczów", path: "czlonkowie/miasta_i_gminy/pinczow.html" },
    { name: "Polaniec", path: "czlonkowie/miasta_i_gminy/polaniec.html" },
    { name: "Radoszyce", path: "czlonkowie/miasta_i_gminy/radoszyce.html" },
    { name: "Sędziszów", path: "czlonkowie/miasta_i_gminy/sedziszow.html" },
    { name: "Skalbmierz", path: "czlonkowie/miasta_i_gminy/skalbmierz.html" },
    { name: "Stąporków", path: "czlonkowie/miasta_i_gminy/staporkow.html" },
    { name: "Staszów", path: "czlonkowie/miasta_i_gminy/staszow.html" },
    { name: "Stopnica", path: "czlonkowie/miasta_i_gminy/stopnica.html" },
    { name: "Suchedniów", path: "czlonkowie/miasta_i_gminy/suchedniow.html" },
    { name: "Szydłów", path: "czlonkowie/miasta_i_gminy/szydlow.html" },
    { name: "Wąchock", path: "czlonkowie/miasta_i_gminy/wachock.html" },
    { name: "Wodzisław", path: "czlonkowie/miasta_i_gminy/wodzislaw.html" },
    { name: "Włoszczowa", path: "czlonkowie/miasta_i_gminy/wloszczowa.html" },
    { name: "Zawichost", path: "czlonkowie/miasta_i_gminy/zawichost.html" },
];

const municipalities = [
    { name: "Baćkowice", path: "czlonkowie/miasta_i_gminy/backowice.html" },
    { name: "Bałtów", path: "czlonkowie/miasta_i_gminy/baltow.html" },
    { name: "Bejsce", path: "czlonkowie/miasta_i_gminy/bejsce.html" },
    { name: "Bieliny", path: "czlonkowie/miasta_i_gminy/bieliny.html" },
    { name: "Bliżyn", path: "czlonkowie/miasta_i_gminy/blizyn.html" },
    { name: "Bodzechów", path: "czlonkowie/miasta_i_gminy/bodzechow.html" },
    { name: "Brody", path: "czlonkowie/miasta_i_gminy/brody.html" },
    { name: "Czarnocin", path: "czlonkowie/miasta_i_gminy/czarnocin.html" },
    { name: "Dwikozy", path: "czlonkowie/miasta_i_gminy/dwikozy.html" },
    { name: "Falków", path: "czlonkowie/miasta_i_gminy/falkow.html" },
    { name: "Gnojno", path: "czlonkowie/miasta_i_gminy/gnojno.html" },
    { name: "Górno", path: "czlonkowie/miasta_i_gminy/gorno.html" },
    { name: "Imielno", path: "czlonkowie/miasta_i_gminy/imielno.html" },
    { name: "Kije", path: "czlonkowie/miasta_i_gminy/kije.html" },
    { name: "Kluczewsko", path: "czlonkowie/miasta_i_gminy/kluczewsko.html" },
    { name: "Krasocin", path: "czlonkowie/miasta_i_gminy/krasocin.html" },
    { name: "Łączna", path: "czlonkowie/miasta_i_gminy/laczna.html" },
    { name: "Lipnik", path: "czlonkowie/miasta_i_gminy/lipnik.html" },
    { name: "Łoniów", path: "czlonkowie/miasta_i_gminy/loniow.html" },
    { name: "Łubnice", path: "czlonkowie/miasta_i_gminy/lubnice.html" },
    { name: "Masłów", path: "czlonkowie/miasta_i_gminy/maslow.html" },
    { name: "Michałów", path: "czlonkowie/miasta_i_gminy/michalow.html" },
    { name: "Miedziana Góra", path: "czlonkowie/miasta_i_gminy/miedziana_gora.html" },
    { name: "Mirzec", path: "czlonkowie/miasta_i_gminy/mirzec.html" },
    { name: "Mniów", path: "czlonkowie/miasta_i_gminy/mniow.html" },
    { name: "Moskorzew", path: "czlonkowie/miasta_i_gminy/moskorzew.html" },
    { name: "Nagłowice", path: "czlonkowie/miasta_i_gminy/naglowice.html" },
    { name: "Nowiny", path: "czlonkowie/miasta_i_gminy/nowiny.html" },
    { name: "Obrazów", path: "czlonkowie/miasta_i_gminy/obrazow.html" },
    { name: "Oksa", path: "czlonkowie/miasta_i_gminy/oksa.html" },
    { name: "Pawłów", path: "czlonkowie/miasta_i_gminy/pawlow.html" },
    { name: "Radków", path: "czlonkowie/miasta_i_gminy/radkow.html" },
    { name: "Raków", path: "czlonkowie/miasta_i_gminy/rakow.html" },
    { name: "Ruda Maleniecka", path: "czlonkowie/miasta_i_gminy/ruda_malieniecka.html" },
    { name: "Rytwiany", path: "czlonkowie/miasta_i_gminy/rytwiany.html" },
    { name: "Sadowie", path: "czlonkowie/miasta_i_gminy/sadowie.html" },
    { name: "Samborzec", path: "czlonkowie/miasta_i_gminy/samborzec.html" },
    { name: "Secemin", path: "czlonkowie/miasta_i_gminy/secemin.html" },
    { name: "Skarżysko-Kościelne", path: "czlonkowie/miasta_i_gminy/skarzysko-koscielne.html" },
    { name: "Smyków", path: "czlonkowie/miasta_i_gminy/smykow.html" },
    { name: "Sobków", path: "czlonkowie/miasta_i_gminy/sobkow.html" },
    { name: "Solec Zdrój", path: "czlonkowie/miasta_i_gminy/solec_zdroj.html" },
    { name: "Strawczyn", path: "czlonkowie/miasta_i_gminy/strawczyn.html" },
    { name: "Słupia", path: "czlonkowie/miasta_i_gminy/slupia.html" },
    { name: "Słupia Jędrzejowska", path: "czlonkowie/miasta_i_gminy/slupia_jedrzejowska.html" },
    { name: "Tarłów", path: "czlonkowie/miasta_i_gminy/tarlow.html" },
    { name: "Tuczępy", path: "czlonkowie/miasta_i_gminy/tuczepy.html" },
    { name: "Waśniów", path: "czlonkowie/miasta_i_gminy/wasniow.html" },
    { name: "Wilczyce", path: "czlonkowie/miasta_i_gminy/wilczyce.html" },
    { name: "Wojciechowice", path: "czlonkowie/miasta_i_gminy/wojciechowice.html" },
    { name: "Zagnańsk", path: "czlonkowie/miasta_i_gminy/zagansk.html" },
    { name: "Złota", path: "czlonkowie/miasta_i_gminy/zlota.html" },
];

// Generate Members links from static tables for now. Will be moved to the database if requested.
function generateLinks(list, containerId) {
    const container = document.getElementById(containerId);
    let html = "";
    list.forEach((item) => {
        html += `<a href="${item.path}" class="link-button" title="${item.name}">${item.name}</a>`;
    });
    container.innerHTML += html;
}

// Change the date MM/DD/YYYY to Polish format.
function formatDateToPolish(dateString) {
    const date = new Date(dateString);

    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("pl-PL", options).format(date);
}

// Change base64 to blob
function base64ToBlob(base64, mimeType) {
    const byteChars = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteChars.length; offset += 512) {
        const slice = byteChars.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: mimeType });
}

// Load full content of the article in the database.
async function loadArticle(id) {
    const articleContainer = document.getElementById("article-div");

    const response = await fetch(`${api_url}/article/${id}`);
    const item = await response.json();
    console.log("item:", item);

    const article = item.items[0];

    articleContainer.innerHTML = `<div class="about-text glass">
        <article>
            <h2>${article.name}</h2>
            <p><small>${formatDateToPolish(article.publication_date)}</small></p>
            <p>${article.content}</p>
            <p>${article.author || ""}</p>
            <div id="article-gallery-div"></div>
        </article>
    </div>`;

    fetch(`${api_url}/attachments/${id}`)
        .then((res) => res.json())
        .then((data) => {
            const galleryContainer = document.getElementById("article-gallery-div");
            data.items.forEach((item) => {
                // Just images for now
                if (!item.mime_type.startsWith("image/")) return;

                const blob = base64ToBlob(item.file_content, item.mime_type);
                const objectUrl = URL.createObjectURL(blob);

                const div = document.createElement("div");
                const a = document.createElement("a");
                const img = document.createElement("img");

                a.href = objectUrl;
                a.target = "_blank";

                // Fallback image size
                a.dataset.pswpWidth = 600;
                a.dataset.pswpHeight = 800;

                img.src = objectUrl;
                img.alt = item.file_name;
                img.loading = "lazy";

                a.appendChild(img);
                div.appendChild(a);
                galleryContainer.appendChild(div);
            });
        })
        .catch((err) => console.error("API error:", err));

    // Display the content through page system.
    showPage("article");
}

// Generate news from the database.
async function generateNews(containerId) {
    const container = document.getElementById(containerId);
    let html = "";

    let data = await fetch(`${api_url}/articles`).then((r) => r.json());
    let list = data.items;
    if (list == null || list.length == 0) {
        container.innerHTML = "<p>Brak aktualności do wyświetlenia.</p>";
        return;
    }

    for (const item of list) {
        const id = item.news_id;
        const title = item.name;
        const date = item.publication_date;
        const desc = item.description;
        const author = item.author || "Unknown";

        html += `<div class="about-text glass">
            <h3><a href="#" onclick="loadArticle('${id}')">${title}</a></h3>
            <p><small>${formatDateToPolish(date)}</small></p>
            <p style="white-space: pre-line">${desc}</p>
            <p>${author}</p>
        </div>`;
    }

    container.innerHTML = html;
}

// Generate resolutions from the database.
async function generateResolutions(containerId) {
    const container = document.getElementById(containerId);
    let html = "";

    let data = await fetch(`${api_url}/resolutions`).then((r) => r.json());
    let list = data.items;
    // If no records will be returned it will display placeholder instead of throwing error.
    if (list == null || list.length == 0) {
        container.innerHTML = "<p>Brak uchwał do wyświetlenia.</p>";
        return;
    }

    // Files to be downloaded are stored in assets/resolutions/<resolutions id>/<file name>
    list.forEach((item) => {
        html += `<div class="about-text glass">
        <h3><a href="assets/resolutions/${item.resolutions_id}/${item.path}" title="${item.name}">${item.name}</a></h3>
        <p>${item.description}</p><p><small>${formatDateToPolish(item.publication_date)}</small></p>
        </div>`;
    });
    container.innerHTML += html;
}

// Generate reports from the database.
async function generateReports(containerId) {
    const container = document.getElementById(containerId);
    let html = "";

    let data = await fetch(`${api_url}/reports`).then((r) => r.json());
    let list = data.items;
    // If no records will be returned it will display placeholder instead of throwing error.
    if (list == null || list.length == 0) {
        container.innerHTML = "<p>Brak sprawozdań do wyświetlenia.</p>";
        return;
    }

    // Files to be downloaded are stored in assets/reports/<reports id>/<file name>
    list.forEach((item) => {
        html += `<div class="about-text glass">
        <h3><a href="assets/reports/${item.reports_id}/${item.path}" title="${item.name}">${item.name}</a></h3>
        <p>${item.description}</p><p><small>${formatDateToPolish(item.publication_date)}</small></p>
        </div>`;
    });
    container.innerHTML += html;
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach((page) => {
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById(pageId).classList.add("active");

    // Update navigation
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("onclick") === `showPage('${pageId}')`) {
            link.classList.add("active");
        }
    });

    currentPage = pageId;

    // Move footer to the active page
    const footer = document.getElementById("footer");
    const activePage = document.getElementById(pageId);
    activePage.appendChild(footer);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Initialize footer position
window.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    const homePage = document.getElementById("home");
    generateLinks(cities, "cities");
    generateLinks(cities_and_municipalities, "cities-and-municipalities");
    generateLinks(municipalities, "municipalities");
    generateNews("news-div");
    generateResolutions("resolutions-div");
    generateReports("reports-div");
    homePage.appendChild(footer);
});

// Add interactive parallax effect to background shapes
document.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".shape");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = (x - 0.5) * speed * 20;
        const yPos = (y - 0.5) * speed * 20;
        shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Add scroll-based animations
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector(".bg-shapes");
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
});

// Add click ripple effect to glass elements
document.querySelectorAll(".glass").forEach((element) => {
    element.addEventListener("click", function (e) {
        const ripple = document.createElement("div");
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                    z-index: 1000;
                `;

        this.style.position = "relative";
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Form submission handling
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Create success message
    const successMsg = document.createElement("div");
    successMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(46, 204, 113, 0.9);
                color: white;
                padding: 20px 40px;
                border-radius: 10px;
                backdrop-filter: blur(20px);
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            `;
    successMsg.textContent = "Message sent successfully! We'll get back to you soon.";

    document.body.appendChild(successMsg);

    // Remove message after 3 seconds
    setTimeout(() => {
        successMsg.remove();
    }, 3000);

    // Reset form
    this.reset();
});

// Add fade in animation
const fadeStyle = document.createElement("style");
fadeStyle.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
        `;
document.head.appendChild(fadeStyle);
