let currentPage = 'home';

const cities = [
    { name: "Ostrowiec Swietokrzyski", path: "czlonkowie/miasta_i_gminy/ostrowiec_swietokrzyski.html" },
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
    { name: "Złota", path: "czlonkowie/miasta_i_gminy/zlota.html" }
];

function generateLinks(list, containerId) {
    const container = document.getElementById(containerId);
    let html = '';
    list.forEach(item => {
        html += `<a href="${item.path}" class="link-button" title="${item.name}">${item.name}</a>`;
    });
    container.innerHTML += html;
}

async function loadArticle(path) {
    const articleContainer = document.getElementById('article-div');

    const response = await fetch(path);

    const html = await response.text();

    const doc = new DOMParser().parseFromString(html, 'text/html');
    const content = doc.querySelector('article');

    articleContainer.innerHTML = content.innerHTML;
    showPage('article');
}


const newsList = [
    "2026-01-20_1.html"
];

async function generateNews(list, containerId) {
    const container = document.getElementById(containerId);
    let html = '';

    for (const item of list) {
        const response = await fetch(`assets/news/${item}`)
            .then(r => r.text());
        const doc = new DOMParser().parseFromString(response, 'text/html');

        const title = doc.querySelector('meta[name="article:title"]')?.content;
        const date = doc.querySelector('meta[name="article:date"]')?.content;
        const desc = doc.querySelector('meta[name="article:desc"]')?.content;
        const author = doc.querySelector('meta[name="article:author"]')?.content;

        html += `<div class="about-text glass">
            <h3><a href="#" onclick="loadArticle('assets/news/${item}')">${title}</a></h3>
            <p><small>${date}</small></p>
            <p style="white-space: pre-line">${desc}</p>
            <p>${author}</p>
        </div>`;
    }

    container.innerHTML = html;
}

const resolutionsList = [
    {
        name: "Uchwała Nr 2/2023 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 24 lutego 2023r.",
        desc: "Uchwała Nr 2/2023 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 24 lutego 2023r. w sprawie ustalenia wysokości składki członkowskiej na 2023 rok oraz przyjęcia planu dochodów i wydatków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego.",
        date: "2023-05-11",
        path: "uchwała składka czł. 2023r.pdf"
    },
    {
        name: "Uchwała Nr 1/2023 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 24 lutego 2023r.",
        desc: "Uchwała Nr 1/2023 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 24 lutego 2023r. w sprawie przyjęcia sprawozdania z działalności Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego za 2022 rok.",
        date: "2023-05-11",
        path: "uchwała Nr 1 w spr.przyjęcia sprawozdania.pdf"
    },
    {
        name: "Uchwała Nr 4/2022 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 22.02.2022 r.",
        desc: "Uchwała Nr 4/2022 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 22.02.2022 r. w sprawie poparcia stanowiska Zarządu Związku Gmin Wiejskich RP w sprawie wdrożenia działań osłonowych chroniących samorządy przed drastycznym wzrostem cen energii i gazu.",
        date: "2022-04-12",
        path: "Uchwała Nr 42022.png"
    },
    {
        name: "Uchwała Nr 3/2022 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 22 lutego 2022r.",
        desc: "Uchwała Nr 3/2022 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 22 lutego 2022r. w sprawie zmiany Statutu Stowarzyszenia.",
        date: "2022-04-12",
        path: ""
    },
    {
        name: "Uchwała Nr 2/2022 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 22.02.2022 r.",
        desc: "Uchwała Nr 2/2022 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 22.02.2022 r. w sprawie ustalenia wysokości składki członkowskiej na 2022 rok oraz przyjęcia planu dochodów i wydatków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego.",
        date: "2022-04-12",
        path: ""
    },
    {
        name: "Uchwała Nr 1/2022 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 22 lutego 2022r.",
        desc: "Uchwała Nr 1/2022 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 22.02.2020r. w sprawie przyjęcia sprawozdania z działalności Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego za 2021 rok.",
        date: "2022-04-12",
        path: ""
    },
    {
        name: "Uchwała Nr 3/2021 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia lutego 2021r.",
        desc: "Uchwała Nr 3/2021 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia lutego 2021r. w sprawie ustalenia wysokości składki członkowskiej na 2021 rok oraz przyjęcia planu dochodów i wydatków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego.",
        date: "2021-03-17",
        path: ""
    },
    {
        name: "Uchwała Nr 2/2021 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 24 lutego 2021r.",
        desc: "Uchwała Nr 2/2021 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 24 lutego 2021r. w sprawie przyjęcia sprawozdania z działalności Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego za 2020 rok.",
        date: "2021-03-17",
        path: ""
    },
    {
        name: "Uchwała Nr 2/2020 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 12.02.2020 r.",
        desc: "Uchwała Nr 2/2020 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 12.02.2020 r. w sprawie ustalenia wysokości składki członkowskiej na 2020 rok oraz przyjęcia planu dochodów i wydatków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego.",
        date: "2020-02-14",
        path: ""
    },
    {
        name: "Uchwała Nr 1/2020 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 12.02.2020",
        desc: "Uchwała Nr 1/2020 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 12.02.2020r. w sprawie przyjęcia sprawozdania z działalności Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego za 2019 rok.",
        date: "2020-02-14",
        path: ""
    },
    {
        name: "Uchwała Nr 5/2019 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 5 lutego 2019",
        desc: "Uchwała Nr 5/2019 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 5 lutego 2019r. w sprawie ustalenia wysokości składki członkowskiej na 2019 rok oraz przyjęcia planu dochodów i wydatków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego",
        date: "2019-04-18",
        path: ""
    },
    {
        name: "Uchwała Nr 1/2019 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 5 lutego 2019",
        desc: "Uchwała Nr 1/2019 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 5 lutego 2019r. w sprawie przyjęcia sprawozdania z działalności Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego za 2018 rok",
        date: "2019-04-18",
        path: ""
    },
    {
        name: "Uchwała Nr 11/2018 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 20 lutego 2018",
        desc: "Uchwała Nr 11/2018 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 20 lutego 2018r. w sprawie ustalenia wysokości składki członkowskiej na 2018 rok oraz przyjęcia planu dochodów i wydatków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego.",
        date: "2018-05-02",
        path: ""
    },
    {
        name: "Uchwała Nr 10/2018 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 20 lutego 2018",
        desc: "Uchwała Nr 10/2018 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 20 lutego 2018r. w sprawie przyjęcia sprawozdania z działalności Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego za 2017 rok.",
        date: "2018-05-02",
        path: ""
    },
    {
        name: "Uchwała Nr 9/2017 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 14 lutego 2017",
        desc: "Uchwała Nr 9/2017 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 14 lutego 2017r. w sprawie ustalenia wysokości składki członkowskiej na 2017 rok oraz przyjęcia planu dochodów i wydatków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego.",
        date: "2018-05-02",
        path: ""
    },
    {
        name: "Uchwała Nr 8/2017 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 14 lutego 2017",
        desc: "Uchwała Nr 8/2017 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 14 lutego 2017r. w sprawie przyjęcia sprawozdania z działalności Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego za 2016 rok.",
        date: "2018-05-02",
        path: ""
    },
    {
        name: "Uchwała Nr 5/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015",
        desc: "Uchwała Nr 5/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015r. w sprawie ustalenia wysokości składki członkowskiej na 2015 rok oraz przyjęcia planu dochodów i wydatków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego",
        date: "2015-02-02",
        path: ""
    },
    {
        name: "Uchwała Nr 4/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015",
        desc: "Uchwała Nr 4/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015r. w sprawie wyboru Członków Komisji Rewizyjnej Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego",
        date: "2015-02-02",
        path: ""
    },
    {
        name: "Uchwała Nr 3/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015",
        desc: "Uchwała Nr 3/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015r. w sprawie wyboru Członków Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego",
        date: "2015-02-02",
        path: ""
    },
    {
        name: "Uchwała Nr 2/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015",
        desc: "Uchwała Nr 2/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015r. w sprawie wyboru Prezesa Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego",
        date: "2015-02-02",
        path: ""
    },
    {
        name: "Uchwała Nr 1/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015",
        desc: "Uchwała Nr 1/2015 Walnego Zebrania Członków Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego z dnia 2 lutego 2015r. w sprawie przyjęcia sprawozdania z działalności Zarządu Stowarzyszenia Związek Miast i Gmin Regionu Świętokrzyskiego za 2014 rok",
        date: "2015-02-02",
        path: ""
    }
];

function generateResolutions(list, containerId) {
    const container = document.getElementById(containerId);
    let html = '';
    list.forEach(item => {
        html += `<div class="about-text glass"><h3><a href="${item.path}" title="${item.name}">${item.name}</a></h3><p>${item.desc}</p><p><small>${item.date}</small></p></div>`;
    });
    container.innerHTML += html;
}

const stancesList = [
    {
        name: "Stanowisko Związku Miast i Gmin Regionu Świętokrzyskiego z dnia 2 września 2022r. w sprawie wdrożenia mechanizmów osłonowych zabezpieczających jednostki samorządu terytorialnego przed drastycznym wzrostem cen energii elektrycznej",
        date: "2022-10-11",
        path: ""
    },
    {
        name: "Stanowisko zał.nr 1 do uchwały Nr 5/2022 Związku Miast i Gmin Regionu Świętokrzyskiego z dnia 31 maja 2022r. w sprawie problemów finansowych oświaty",
        date: "2022-10-11",
        path: ""
    },
    {
        name: "Stanowisko zał.nr 1 do uchwały Nr 4/2022 Związku Miast i Gmin Regionu Świętokrzyskiego z dnia 31 maja 2022r. w sprawie ograniczenia możliwości rozwojowych ze względu na rosnący koszt obsługi długu publicznego",
        date: "2022-10-11",
        path: ""
    }
];

function generateStances(list, containerId) {
    const container = document.getElementById(containerId);
    let html = '';
    list.forEach(item => {
        html += `<div class="about-text glass"><h3><a href="${item.path}" title="${item.name}">${item.name}</a></h3><p><small>${item.date}</small></p></div>`;
    });
    container.innerHTML += html;
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === `showPage('${pageId}')`) {
            link.classList.add('active');
        }
    });

    currentPage = pageId;

    // Move footer to the active page
    const footer = document.getElementById('footer');
    const activePage = document.getElementById(pageId);
    activePage.appendChild(footer);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize footer position
window.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    const homePage = document.getElementById('home');
    generateLinks(cities, 'cities');
    generateLinks(cities_and_municipalities, 'cities-and-municipalities');
    generateLinks(municipalities, 'municipalities');
    generateNews(newsList, 'news-div');
    generateResolutions(resolutionsList, 'resolutions-div');
    generateStances(stancesList, 'stances-div');
    homePage.appendChild(footer);
});

// Add interactive parallax effect to background shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
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
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-shapes');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
});

// Add click ripple effect to glass elements
document.querySelectorAll('.glass').forEach(element => {
    element.addEventListener('click', function (e) {
        const ripple = document.createElement('div');
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

        this.style.position = 'relative';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
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
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Create success message
    const successMsg = document.createElement('div');
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
    successMsg.textContent = 'Message sent successfully! We\'ll get back to you soon.';

    document.body.appendChild(successMsg);

    // Remove message after 3 seconds
    setTimeout(() => {
        successMsg.remove();
    }, 3000);

    // Reset form
    this.reset();
});

// Add fade in animation
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
        `;
document.head.appendChild(fadeStyle);