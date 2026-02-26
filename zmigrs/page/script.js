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

// Pagination states to keep track of offsets and loading status for each content type. This allows us to manage infinite scroll and loading states separately for news, resolutions, and reports.
const paginationState = {
    news: { offset: 0, loading: false },
    resolutions: { offset: 0, loading: false },
    reports: { offset: 0, loading: false }
};

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
    if (!dateString) return "";
    const date = new Date(dateString);

    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("pl-PL", options).format(date);
}

// Change base64 to blob
function base64ToBlob(base64, mimeType) {
    const base64Data = base64.replace(/\s/g, "");
    // console.log({ base64, base64Data });
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

function setupInfiniteScroll(type, sentinelId, containerId) {
    const sentinel = document.getElementById(sentinelId);
    if (!sentinel) return;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !paginationState[type].loading) {
            observer.unobserve(sentinel);
            if (type === 'news') {
                generateNews(containerId, false);
            } else {
                generateDataList(type, containerId, false);
            }
        }
    }, { rootMargin: '200px' });

    observer.observe(sentinel);
}

// Helper function to check if gallery has enough items to scroll and show or hide buttons if needed.
function checkGalleryNavigation() {
    const container = document.getElementById("article-gallery-div");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!container || !prevBtn || !nextBtn) return;
    const hasItems = container.querySelectorAll("a").length > 0;

    // If enough width to scroll, show buttons
    if (hasItems && container.scrollWidth > container.clientWidth) {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    }
}

// Gallery scroll functionality, moves the gallery left or right by the width of one item.
function moveGallery(direction) {
    const container = document.getElementById("article-gallery-div");
    const itemWidth = container.querySelector("a").offsetWidth + 15;

    container.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}

// Load full content of the article in the database.
async function loadArticle(id) {
    const articleContainer = document.getElementById("article-text-div");
    const galleryContainer = document.getElementById("article-gallery-div");

    // Clear previous content
    galleryContainer.innerHTML = "";
    document.querySelectorAll(".prev-btn, .next-btn").forEach(btn => btn.style.display = "none");

    try {
        const response = await fetch(`${api_url}/article/${id}`);
        const item = await response.json();
        const [article] = item.items;

        if (!article) return;

        const {
            name = "Brak tytułu",
            publication_date,
            author,
            description,
            content
        } = article;

        articleContainer.innerHTML = `
            <div class="about-text">
                <article>
                    <h2>${name}</h2>
                    <p><small>${formatDateToPolish(publication_date)}</small></p>
                    <p>${description ?? ""}</p>
                    <p>${content ?? ""}</p>
                    <p>${author ?? "Zarząd ZMiGRS"}</p>
                </article>
            </div>`;

        if (article.attachments_count > 0) {
            await fetchAttachmentsRecursive(id, galleryContainer);
        }

        // Display the content through page system.
        showPage("article");
        initLightbox();
    } catch (e) {
        console.error("Błąd ładowania artykułu:", e);
    }
}

async function fetchAttachmentsRecursive(id, container, offset = 0) {
    const res = await fetch(`${api_url}/attachments/news/${id}?offset=${offset}`);
    const data = await res.json();

    for (const item of data.items) {
        if (!item.mime_type.startsWith("image/")) continue;
        const fileIdMatch = item.file_path.match(/[-\w]{25,}/);
        if (!fileIdMatch) continue;

        const directImageUrl = `https://lh3.googleusercontent.com/d/${fileIdMatch[0]}`;

        // Helper functions to try accessing image dimensions
        const getImageSize = (url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
                img.onerror = () => resolve({ width: 1600, height: 900 }); // Fallback
                img.src = url;
            });
        };

        // Try to pull image dimensions
        const dimensions = await getImageSize(directImageUrl);

        const a = document.createElement("a");
        a.href = directImageUrl;
        a.dataset.pswpWidth = dimensions.width;
        a.dataset.pswpHeight = dimensions.height;

        const img = document.createElement("img");
        img.src = directImageUrl;
        img.alt = item.file_name;
        img.loading = "lazy";

        a.appendChild(img);
        container.appendChild(a);
    }

    if (data.hasMore) {
        await fetchAttachmentsRecursive(id, container, offset + data.items.length);
    } else {
        setTimeout(checkGalleryNavigation, 200);
    }
}

// Generate news from the database.
let newsOffset = 0;
let isNewsLoading = false;

async function generateNews(containerId, isInitialLoad = true) {
    const container = document.getElementById(containerId);
    const state = paginationState.news;
    if (!container || state.loading) return;

    // Reset przy pierwszym ładowaniu
    if (isInitialLoad) {
        state.offset = 0;
        container.innerHTML = `<h2 style="grid-column:1/-1">Aktualności:</h2>
                               <div id="article-list-content" class="grid-list"></div>`;
    }

    const contentDiv = document.getElementById("article-list-content");
    state.loading = true;

    try {
        const response = await fetch(`${api_url}/articles?offset=${state.offset}`);
        const data = await response.json();
        const list = data.items || [];

        if (list.length === 0 && state.offset === 0) {
            contentDiv.innerHTML = "<p>Brak aktualności do wyświetlenia.</p>";
            state.loading = false;
            return;
        }

        let html = "";
        for (const item of list) {
            const { news_id, name, publication_date, author, description } = item;
            html += `
            <div class="about-text glass">
                <h3><a href="#" onclick="loadArticle('${news_id}')">${name ?? "Brak tytułu"}</a></h3>
                <p><small>${formatDateToPolish(publication_date)}</small></p>
                <p style="white-space: pre-line">${description ?? ""}</p>
                <p>${author ?? "Zarząd ZMiGRS"}</p>
            </div>`;
        }

        // InsertAdjacent to avoid removing previous content
        contentDiv.insertAdjacentHTML('beforeend', html);

        const oldSentinel = document.getElementById("news-sentinel");
        if (oldSentinel) oldSentinel.remove();

        // Update offset for the next batch
        state.offset += list.length;

        if (data.hasMore) {
            contentDiv.insertAdjacentHTML('afterend', `<div id="news-sentinel" style="grid-column:1/-1; height:20px;"></div>`);
            setupInfiniteScroll('news', 'news-sentinel', containerId);
        }

    } catch (e) {
        console.error("Błąd ładowania newsów:", e);
    } finally {
        state.loading = false;
    }
}

async function generateDataList(type, containerId, isInitialLoad = true) {
    const container = document.getElementById(containerId);
    const state = paginationState[type];
    if (!container || state.loading) return;

    const listContentId = `${type}-list-content`;

    if (isInitialLoad) {
        state.offset = 0;
        const title = type === 'resolutions' ? 'Uchwały' : 'Sprawozdania';
        container.innerHTML = `<h2 style="grid-column:1/-1">${title}:</h2>
                               <div id="${listContentId}" class="grid-list"></div>`;
    }

    const contentDiv = document.getElementById(listContentId);
    state.loading = true;

    try {
        const response = await fetch(`${api_url}/${type}?offset=${state.offset}`);
        const data = await response.json();
        const list = data.items || [];

        let html = "";
        list.forEach((item) => {
            const itemId = item[`${type}_id`];
            const { name, description, attachments_count, publication_date } = item;

            html += `
                <div class="about-text glass">
                    <h3><a title="${name}">${name}</a></h3>
                    <p>${description ?? ""}</p>
                    <p>${attachments_count > 0 ? 
                        `<a href="#" class="link-button" onclick="event.preventDefault(); openAttachmentModal('${itemId}', '${type}')">Załączniki</a>` 
                        : ""}</p>
                    <p><small>${formatDateToPolish(publication_date)}</small></p>
                </div>
            `;
        });

        contentDiv.insertAdjacentHTML('beforeend', html);

        const sentinelId = `${type}-sentinel`;
        const oldSentinel = document.getElementById(sentinelId);
        if (oldSentinel) oldSentinel.remove();

        state.offset += list.length;

        if (data.hasMore) {
            container.insertAdjacentHTML('beforeend', `<div id="${sentinelId}" style="grid-column:1/-1; height:10px;"></div>`);
            setupInfiniteScroll(type, sentinelId, containerId);
        }
    } catch (e) {
        console.error(`Błąd ${type}:`, e);
    } finally {
        state.loading = false;
    }
}

async function downloadFile(fileId, type) {
    const res = await fetch(`${api_url}/attachments/${type}/file/${fileId}`);
    const data = await res.json();
    const item = data.items[0];
    // console.log("downloadFile File data:", item);

    if (item) {
        const a = document.createElement("a");
        a.href = item.file_path;
        a.download = item.file_name;
        a.click();
    }
}

async function openAttachmentModal(contentId, type) {
    const modalButtons = document.getElementById("modal-buttons");
    modalButtons.innerHTML = "";
    if (!contentId) return;

    document.getElementById("modal").style.display = "block";
    modalButtons.innerHTML = "<p>Ładowanie załączników...</p>";

    async function fetchAll(offset = 0) {
        try {
            const response = await fetch(`${api_url}/attachments/${type}/${contentId}?offset=${offset}`);
            const data = await response.json();
            const items = data.items || [];
            modalButtons.innerHTML = ""; // Clear loading text

            if (offset === 0) modalButtons.innerHTML = "";

            if (items.length === 0) {
                modalButtons.innerHTML = "<p>Brak załączników do wyświetlenia.</p>";
                return;
            }

            items.forEach((file, index) => {
                // Grab the data from item object (np. file_id, name)
                const {
                    file_id: itemId,
                    file_name: fileName,
                    date_created: file_created_date,
                } = file;

                const btn = document.createElement("a");
                btn.href = "#";
                btn.classList = "link-button no-flex";

                // Try to use file name from the database, otherwise "Plik X"
                const label = fileName ? fileName : `Plik ${offset + index + 1}`;
                btn.innerHTML = `${label}<p><small>${formatDateToPolish(file_created_date)}</small></p>`;

                btn.onclick = (e) => {
                    e.preventDefault();
                    downloadFile(itemId, type);
                };

                modalButtons.appendChild(btn);
            });

            if (data.hasMore) await fetchAll(offset + items.length);
        } catch (error) {
            console.error("Błąd pobierania załączników:", error);
            modalButtons.innerHTML = "<p>Wystąpił błąd podczas pobierania załączników.</p>";
        }
    }
    await fetchAll();
}

async function generateResolutions(containerId) { await generateDataList('resolutions', containerId, true); }
async function generateReports(containerId) { await generateDataList('reports', containerId, true); }

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
        if (successMsg.classList.contains("hide")) return; // Zabezpieczenie przed podwójnym kliknięciem

        successMsg.classList.remove("show");
        successMsg.classList.add("hide");

        // Usuwamy z DOM dopiero po zakończeniu animacji CSS (400ms)
        setTimeout(() => {
            successMsg.remove();
        }, 400);
    };

    // Automatyczne zamknięcie po 3 sekundach
    const autoCloseTimeout = setTimeout(closeToast, 3000);

    // OPCJONALNIE: Zamknięcie po kliknięciu w komunikat
    successMsg.addEventListener("click", () => {
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
