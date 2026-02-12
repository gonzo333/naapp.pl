let currentPage = "home";
let api_url = "https://oracleapex.com/ords/zmigrs/api";

const cities = [
    {
        name: "Ostrowiec Świętokrzyski",
        path: "https://um.ostrowiec.pl",
    },
    { name: "Sandomierz", path: "https://sandomierz.eu" },
    { name: "Skarzysko-Kamienna", path: "https://um.skarzysko.pl" },
    { name: "Starachowice", path: "https://starachowice.eu" },
];

const cities_and_municipalities = [
    { name: "Bodzentyn", path: "https://e-bodzentyn.pl" },
    { name: "Bogoria", path: "https://www.bogoria.pl" },
    { name: "Busko-Zdrój", path: "https://busko.com.pl" },
    { name: "Chęciny", path: "https://www.checiny.pl" },
    { name: "Chmielnik", path: "https://www.chmielnik.com" },
    { name: "Ćmielów", path: "https://www.cmielow.pl" },
    { name: "Daleszyce", path: "https://www.daleszyce.pl" },
    { name: "Działoszyce", path: "https://dzialoszyce.pl" },
    { name: "Gowarczów", path: "https://gowarczow.pl" },
    { name: "Iwaniska", path: "https://www.iwaniska.eu" },
    { name: "Kazimierza Wielka", path: "https://www.kazimierzawielka.pl" },
    { name: "Klimontóww", path: "https://klimontow.pl" },
    { name: "Końskie", path: "https://umkonskie.pl" },
    { name: "Koprzywnica", path: "https://koprzywnica.eu" },
    { name: "Kunów", path: "https://www.kunow.pl" },
    { name: "Łagów", path: "https://www.lagowgmina.pl" },
    { name: "Łopuszno", path: "https://www.lopuszno.pl" },
    { name: "Małogoszcz", path: "https://www.malogoszcz.pl" },
    { name: "Morawica", path: "https://www.morawica.pl" },
    { name: "Nowa Słupia", path: "https://nowaslupia.pl" },
    { name: "Nowy Korczyn", path: "https://ug.nowykorczyn.pl" },
    { name: "Oleśnica", path: "https://gminaolesnica.pl" },
    { name: "Opatów", path: "https://www.umopatow.pl" },
    { name: "Opatowiec", path: "https://umig.opatowiec.pl" },
    { name: "Ożarów", path: "https://www.ozarow.pl" },
    { name: "Pacanów", path: "https://pacanow.pl" },
    { name: "Piekoszów", path: "https://www.piekoszow.pl" },
    { name: "Pierzchnica", path: "https://www.pierzchnica.pl" },
    { name: "Pinczów", path: "https://pinczow.com.pl" },
    { name: "Polaniec", path: "https://polaniec.com.pl" },
    { name: "Radoszyce", path: "https://www.radoszyce.pl" },
    { name: "Sędziszów", path: "https://sedziszow.pl" },
    { name: "Skalbmierz", path: "https://www.skalbmierz.eu" },
    { name: "Stąporków", path: "https://staporkow.pl" },
    { name: "Staszów", path: "https://staszow.pl" },
    { name: "Stopnica", path: "https://umig.stopnica.pl" },
    { name: "Suchedniów", path: "https://suchedniow.pl" },
    { name: "Szydłów", path: "https://www.szydlow.pl" },
    { name: "Wąchock", path: "https://wachock.pl" },
    { name: "Wodzisław", path: "https://ugwodzislaw.pl" },
    { name: "Włoszczowa", path: "https://wloszczowa.pl" },
    { name: "Zawichost", path: "https://www.zawichost.pl" },
];

const municipalities = [
    { name: "Baćkowice", path: "http://www.backowice-gmina.pl" },
    { name: "Bałtów", path: "https://www.gminabaltow.pl" },
    { name: "Bejsce", path: "https://bejsce.eu" },
    { name: "Bieliny", path: "https://www.bieliny.pl" },
    { name: "Bliżyn", path: "https://www.blizyn.pl" },
    { name: "Bodzechów", path: "https://samorzad.gov.pl/web/gmina-bodzechow" },
    { name: "Brody", path: "https://brody.info.pl" },
    { name: "Czarnocin", path: "https://czarnocin.com.pl" },
    { name: "Dwikozy", path: "https://dwikozy.gmina.pl" },
    { name: "Falków", path: "https://www.falkow.pl" },
    { name: "Gnojno", path: "https://gnojno.com.pl" },
    { name: "Górno", path: "https://www.gorno.pl" },
    { name: "Imielno", path: "https://imielno.pl" },
    { name: "Kije", path: "https://kije.pl" },
    { name: "Kluczewsko", path: "https://kluczewsko.pl" },
    { name: "Krasocin", path: "https://www.krasocin.com.pl" },
    { name: "Łączna", path: "https://www.laczna.pl" },
    { name: "Lipnik", path: "https://www.lipnik.pl" },
    { name: "Łoniów", path: "https://loniow.pl" },
    { name: "Łubnice", path: "https://www.lubnice.eu" },
    { name: "Masłów", path: "https://www.maslow.pl" },
    { name: "Michałów", path: "https://www.michalow.pl" },
    { name: "Miedziana Góra", path: "https://miedziana-gora.pl" },
    { name: "Mirzec", path: "https://mirzec.pl" },
    { name: "Mniów", path: "https://www.mniow.pl" },
    { name: "Moskorzew", path: "https://moskorzew.pl" },
    { name: "Nagłowice", path: "https://naglowice.pl" },
    { name: "Nowiny", path: "https://www.nowiny.com.pl" },
    { name: "Obrazów", path: "https://www.obrazow.pl" },
    { name: "Oksa", path: "https://oksa.pl" },
    { name: "Pawłów", path: "https://gmina.pawlow.pl" },
    { name: "Radków", path: "https://radkow.pl" },
    { name: "Raków", path: "https://rakow.pl" },
    { name: "Ruda Maleniecka", path: "https://samorzad.gov.pl/web/gmina-ruda-maleniecka" },
    { name: "Rytwiany", path: "https://www.rytwiany.com.pl" },
    { name: "Sadowie", path: "https://sadowie.pl" },
    { name: "Samborzec", path: "https://www.samborzec.pl" },
    { name: "Secemin", path: "https://www.secemin.pl" },
    { name: "Skarżysko-Kościelne", path: "https://www.skarzysko.com.pl" },
    { name: "Smyków", path: "https://samorzad.gov.pl/web/gmina-smykow" },
    { name: "Sobków", path: "https://www.sobkow.pl" },
    { name: "Solec Zdrój", path: "https://solec-zdroj.pl" },
    { name: "Strawczyn", path: "https://www.strawczyn.pl" },
    { name: "Słupia", path: "https://slupia.pl" },
    { name: "Słupia Jędrzejowska", path: "https://slupia.pl" },
    { name: "Tarłów", path: "https://tarlow.pl" },
    { name: "Tuczępy", path: "https://www.tuczepy.pl" },
    { name: "Waśniów", path: "https://www.wasniow.pl" },
    { name: "Wilczyce", path: "https://wilczyce.pl" },
    { name: "Wojciechowice", path: "https://www.wojciechowice.com.pl" },
    { name: "Zagnańsk", path: "https://www.zagnansk.pl" },
    { name: "Złota", path: "https://gminazlota.pl" },
];

// Generate Members links from static tables for now. Will be moved to the database if requested.
function generateLinks(list, containerId) {
    const container = document.getElementById(containerId);
    let html = "";
    list.forEach((item) => {
        html += `<a href="${item.path}" class="link-button" target="_blank" title="${item.name}">${item.name}</a>`;
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
    const base64Data = base64.replace(/\s/g, '');
    console.log({ base64, base64Data });
    const byteChars = atob(base64Data);
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
    const articleContainer = document.getElementById("article-text-div");

    const response = await fetch(`${api_url}/article/${id}`);
    const item = await response.json();
    console.log("Article data:", item);

    const article = item.items[0];

    articleContainer.innerHTML = `<div class="about-text">
        <article>
            <h2>${article.name}</h2>
            <p><small>${formatDateToPolish(article.publication_date)}</small></p>
            <p>${article.description}</p>
            <p>${article.content}</p>
            <p>${article.author || ""}</p>
        </article>
    </div>`;

    // Load attachments (if any)
    if (article.attachmentsCount > 0){
    fetch(`${api_url}/attachments/${id}`)
        .then((res) => res.json())
        .then((data) => {
            const galleryContainer = document.getElementById("article-gallery-div");
            data.items.forEach((item) => {
                // Just images for now
                if (!item.mime_type.startsWith("image/")) return;

                const blob = base64ToBlob(item.file_content, item.mime_type);
                const objectUrl = URL.createObjectURL(blob);

                const a = document.createElement("a");
                const img = document.createElement("img");

                a.href = objectUrl;
                a.target = "_blank";

                // Fallback image size
                a.dataset.pswpWidth = 1600;
                a.dataset.pswpHeight = 900;

                img.src = objectUrl;
                img.alt = item.file_name;
                img.loading = "lazy";

                a.appendChild(img);
                galleryContainer.appendChild(a);
            });
        })
        .catch((err) => console.error("Attachments couldn't load:", err));
    }

    // Display the content through page system.
    showPage("article");
    initLightbox();
}

// Generate news from the database.
async function generateNews(containerId) {
    const container = document.getElementById(containerId);
    let html = `<h2 style="grid-column:1/-1">Aktualności:</h2>`;

    let data = await fetch(`${api_url}/articles`).then((r) => r.json());
    let list = data.items;
    console.log(list);
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

async function downloadFile(fileId, type) {
    const res = await fetch(`${api_url}/attachments/${type}/file/${fileId}`);
    const data = await res.json();
    const item = data.items[0];
    console.log("downloadFile File data:", item);

    const a = document.createElement('a');
    a.href = item.file_path;
    a.download = item.file_name;
    a.click();
}

function openAttachmentModal(contentId, type) {
    const modalButtons = document.getElementById("modal-buttons");
    modalButtons.innerHTML = "";
    if (!contentId) return;

    document.getElementById("modal").style.display = "block";
    modalButtons.innerHTML = "<p>Ładowanie załączników...</p>";

    fetch(`${api_url}/attachments/${type}/${contentId}`)
        .then((res) => {
            if (!res.ok) throw new Error("Błąd sieci");
            return res.json();
        })
        .then((data) => {
            const items = data.items || [];
            console.log("Attachments data:", items);
            modalButtons.innerHTML = ""; // Clear loading text

            if (items.length === 0) {
                modalButtons.innerHTML = "<p>Brak załączników do wyświetlenia.</p>";
                return;
            }

            items.forEach((file, index) => {
                // Grab the data from item object (np. file_id, name)
                const { file_id: itemId, file_name: fileName, date_created: file_created_date } = file;

                const btn = document.createElement("a");
                btn.href = "#";
                btn.classList = "link-button no-flex";
                
                // Try to use file name from the database, otherwise "Plik X"
                if (fileName) {
                    btn.innerHTML = `${fileName}<p><small>${formatDateToPolish(file_created_date)}</small></p>`;
                } else {
                    btn.innerHTML = `Plik ${index + 1}<p><small>${formatDateToPolish(file_created_date)}</small></p>`;
                }
                
                btn.onclick = (e) => {
                    e.preventDefault();
                    downloadFile(itemId, type);
                };

                modalButtons.appendChild(btn);
                modalButtons.appendChild(document.createElement("br"));
            });
        })
        .catch((e) => {
            console.error("Błąd pobierania załączników:", e);
            modalButtons.innerHTML = "<p>Wystąpił błąd podczas pobierania plików.</p>";
        });
}

// Generate resolutions from the database.
async function generateResolutions(containerId) {
    const container = document.getElementById(containerId);

    try {
        const response = await fetch(`${api_url}/resolutions`);
        const data = await response.json();
        const list = data.items;
        console.log(list);

        if (!list || list.length === 0) {
            container.innerHTML = "<p>Brak sprawozdań do wyświetlenia.</p>";
            return;
        }

        list.forEach((item) => {
            const { 
                resolutions_id: item_id, 
                name, 
                description, 
                attachments_count
            } = item;

            // Create each element of the list
            const div = document.createElement("div");
            div.className = "about-text glass";

            const h3 = document.createElement("h3");
            const link = document.createElement("a");
            link.title = name;
            link.textContent = name;
            h3.appendChild(link);

            const p1 = document.createElement("p");
            p1.textContent = description;

            // Attachments (if any)
            const p2 = document.createElement("p");
            if (attachments_count > 0) {
                
                const btn = document.createElement("a");
                btn.href = "#";
                btn.textContent = "Załączniki";
                btn.style.marginLeft = "10px";
                btn.classList = "link-button";

                btn.onclick = (e) => {
                    e.preventDefault();
                    openAttachmentModal(item_id, "resolutions");
                };

                p2.appendChild(btn);
            }

            const p3 = document.createElement("p");
            const small = document.createElement("small");
            small.textContent = formatDateToPolish(item.publication_date);
            p3.appendChild(small);

            // Put all elements together
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);

            container.appendChild(div);
        });
    } catch (error) {
        console.error("Błąd podczas ładowania sprawozdań:", error);
        container.innerHTML = "<p>Wystąpił błąd podczas ładowania danych.</p>";
    }
}   

// Generate reports from the database.
async function generateReports(containerId) {
    const container = document.getElementById(containerId);

    try {
        const response = await fetch(`${api_url}/reports`);
        const data = await response.json();
        const list = data.items;
        console.log(list);

        if (!list || list.length === 0) {
            container.innerHTML = "<p>Brak sprawozdań do wyświetlenia.</p>";
            return;
        }

        list.forEach((item) => {
            const { 
                reports_id: item_id, 
                name, 
                description, 
                attachments_count
            } = item;

            // Create each element of the list
            const div = document.createElement("div");
            div.className = "about-text glass";

            const h3 = document.createElement("h3");
            const link = document.createElement("a");
            link.title = name;
            link.textContent = name;
            h3.appendChild(link);

            const p1 = document.createElement("p");
            p1.textContent = description;

            // Attachments (if any)
            const p2 = document.createElement("p");
            if (attachments_count > 0) {
                
                const btn = document.createElement("a");
                btn.href = "#";
                btn.textContent = "Załączniki";
                btn.style.marginLeft = "10px";
                btn.classList = "link-button";

                btn.onclick = (e) => {
                    e.preventDefault();
                    openAttachmentModal(item_id, "reports");
                };

                p2.appendChild(btn);
            }

            const p3 = document.createElement("p");
            const small = document.createElement("small");
            small.textContent = formatDateToPolish(item.publication_date);
            p3.appendChild(small);

            // Put all elements together
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);

            container.appendChild(div);
        });
    } catch (error) {
        console.error("Błąd podczas ładowania sprawozdań:", error);
        container.innerHTML = "<p>Wystąpił błąd podczas ładowania danych.</p>";
    }
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

    document.getElementById("close-modal").onclick = () => {
        document.getElementById("modal").style.display = "none";
    };

    window.onclick = (e) => {
        const modal = document.getElementById("modal");
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };

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

    const successMsg = document.createElement("div");
    successMsg.className = "success-toast show"; // Dodajemy klasę bazową i wejściową
    successMsg.textContent = "Wiadomość wysłana! Odezwiemy się tak szybko jak to możliwe.";

    document.body.appendChild(successMsg);

    // Funkcja zamykająca z animacją
    const closeToast = () => {
        if (successMsg.classList.contains('hide')) return; // Zabezpieczenie przed podwójnym kliknięciem
        
        successMsg.classList.remove('show');
        successMsg.classList.add('hide');

        // Usuwamy z DOM dopiero po zakończeniu animacji CSS (400ms)
        setTimeout(() => {
            successMsg.remove();
        }, 400);
    };

    // Automatyczne zamknięcie po 3 sekundach
    const autoCloseTimeout = setTimeout(closeToast, 3000);

    // OPCJONALNIE: Zamknięcie po kliknięciu w komunikat
    successMsg.addEventListener('click', () => {
        clearTimeout(autoCloseTimeout); // Anuluj auto-zamykanie, jeśli użytkownik kliknął sam
        closeToast();
    });

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
