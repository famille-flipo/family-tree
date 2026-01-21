    // NOTE: ENCRYPTED_GEDCOM_DATA is now loaded from gedcom-data.js
    // See gedcom-data.js to add your encrypted GEDCOM data

    // --- TRANSLATION ENGINE ---
    const TRANSLATIONS = {
        it: {
            subtitle: "Esplora il tuo passato. Carica un file GEDCOM.",
            btnUpload: "Apri File",
            stats: "Persone:",
            search: "Cerca persona...",
            favHeader: "Preferiti Salvati",
            favEmpty: "Nessun preferito salvato",
            favClear: "Cancella tutto",
            today: "OGGI",
            coffee: "Offrimi un caffè",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            calHeaders: ["Giorno", "Nascite", "Matrimoni", "Morti"],
            cols: {
                ggp: "Bisnonni", gp: "Nonni", p: "Genitori", c: "Figli", gc: "Nipoti", ggc: "Bisnipoti", sib: "Fratelli e Sorelle"
            },
            card: {
                birt: "Nascita", deat: "Morte", marr: "Matrimonio", spouses: "Coniugi", noSpouse: "Nessun coniuge registrato"
            },
            tooltips: {
                back: "Indietro", home: "Torna all'inizio", calendar: "Vista Calendario", tree: "Torna all'Albero", 
                fav: "Preferiti", theme: "Cambia Tema", today: "Vai a Oggi", fs: "Vedi su FamilySearch", 
                calendarView: "Vedi nel calendario", profileView: "Vai al profilo"
            },
            dateMap: { "JAN":"gennaio", "FEB":"febbraio", "MAR":"marzo", "APR":"aprile", "MAY":"maggio", "JUN":"giugno", "JUL":"luglio", "AUG":"agosto", "SEP":"settembre", "OCT":"ottobre", "NOV":"novembre", "DEC":"dicembre", "ABT":"circa", "BEF":"prima del", "AFT":"dopo il" }
        },
        en: {
            subtitle: "Explore your past. Upload a GEDCOM file.",
            btnUpload: "Open File",
            stats: "People:",
            search: "Search person...",
            favHeader: "Saved Favorites",
            favEmpty: "No favorites saved",
            favClear: "Clear all",
            today: "TODAY",
            coffee: "Buy me a Coffee",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            calHeaders: ["Day", "Births", "Marriages", "Deaths"],
            cols: {
                ggp: "Great-grandparents", gp: "Grandparents", p: "Parents", c: "Children", gc: "Grandchildren", ggc: "Great-grandchildren", sib: "Siblings"
            },
            card: {
                birt: "Birth", deat: "Death", marr: "Marriage", spouses: "Spouses", noSpouse: "No spouse registered"
            },
            tooltips: {
                back: "Back", home: "Back to start", calendar: "Calendar View", tree: "Back to Tree", 
                fav: "Favorites", theme: "Change Theme", today: "Go to Today", fs: "View on FamilySearch", 
                calendarView: "View in calendar", profileView: "Go to profile"
            },
            dateMap: { "JAN":"January", "FEB":"February", "MAR":"March", "APR":"April", "MAY":"May", "JUN":"June", "JUL":"July", "AUG":"August", "SEP":"September", "OCT":"October", "NOV":"November", "DEC":"December", "ABT":"about", "BEF":"before", "AFT":"after" }
        },
        es: {
            subtitle: "Explora tu pasado. Sube un archivo GEDCOM.",
            btnUpload: "Abrir Archivo",
            stats: "Personas:",
            search: "Buscar persona...",
            favHeader: "Favoritos guardados",
            favEmpty: "Sin favoritos guardados",
            favClear: "Borrar todo",
            today: "HOY",
            coffee: "Invítame un café",
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            calHeaders: ["Día", "Nacimientos", "Matrimonios", "Defunciones"],
            cols: {
                ggp: "Bisabuelos", gp: "Abuelos", p: "Padres", c: "Hijos", gc: "Nietos", ggc: "Bisnietos", sib: "Hermanos"
            },
            card: {
                birt: "Nacimiento", deat: "Defunción", marr: "Matrimonio", spouses: "Cónyuges", noSpouse: "Ningún cónyuge registrado"
            },
            tooltips: {
                back: "Atrás", home: "Volver al inicio", calendar: "Vista Calendario", tree: "Volver al Árbol", 
                fav: "Favoritos", theme: "Cambiar Tema", today: "Ir a Hoy", fs: "Ver en FamilySearch", 
                calendarView: "Ver en el calendario", profileView: "Ir al perfil"
            },
            dateMap: { "JAN":"Enero", "FEB":"Febrero", "MAR":"Marzo", "APR":"Abril", "MAY":"Mayo", "JUN":"Junio", "JUL":"Julio", "AUG":"Agosto", "SEP":"Septiembre", "OCT":"Octubre", "NOV":"Noviembre", "DEC":"Diciembre", "ABT":"aprox", "BEF":"antes de", "AFT":"después de" }
        },
        fr: {
            subtitle: "Explorez votre passé. Téléchargez un fichier GEDCOM.",
            btnUpload: "Ouvrir Fichier",
            stats: "Personnes:",
            search: "Chercher une personne...",
            favHeader: "Favoris enregistrés",
            favEmpty: "Aucun favori enregistré",
            favClear: "Tout effacer",
            today: "AUJOURD'HUI",
            coffee: "Offrez-moi un café",
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            shortMonths: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
            calHeaders: ["Jour", "Naissances", "Mariages", "Décès"],
            cols: {
                ggp: "Arrière-grands-parents", gp: "Grands-parents", p: "Parents", c: "Enfants", gc: "Petits-enfants", ggc: "Arrière-petits-enfants", sib: "Frères et Sœurs"
            },
            card: {
                birt: "Naissance", deat: "Décès", marr: "Mariage", spouses: "Conjoints", noSpouse: "Aucun conjoint enregistré"
            },
            tooltips: {
                back: "Retour", home: "Retour au début", calendar: "Vue Calendrier", tree: "Retour à l'Arbre", 
                fav: "Favoris", theme: "Changer de Thème", today: "Aller à Aujourd'hui", fs: "Voir sur FamilySearch", 
                calendarView: "Voir dans le calendrier", profileView: "Aller au profil"
            },
            dateMap: { "JAN":"janvier", "FEB":"février", "MAR":"mars", "APR":"avril", "MAY":"mai", "JUN":"juin", "JUL":"juillet", "AUG":"août", "SEP":"septembre", "OCT":"octobre", "NOV":"novembre", "DEC":"décembre", "ABT":"env.", "BEF":"avant", "AFT":"après" }
        },
        de: {
            subtitle: "Erforschen Sie Ihre Vergangenheit. Laden Sie eine GEDCOM-Datei hoch.",
            btnUpload: "Datei öffnen",
            stats: "Personen:",
            search: "Person suchen...",
            favHeader: "Gespeicherte Favoriten",
            favEmpty: "Keine Favoriten gespeichert",
            favClear: "Alles löschen",
            today: "HEUTE",
            coffee: "Kauf mir einen Kaffee",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            shortMonths: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            calHeaders: ["Tag", "Geburten", "Hochzeiten", "Sterbefälle"],
            cols: {
                ggp: "Urgroßeltern", gp: "Großeltern", p: "Eltern", c: "Kinder", gc: "Enkel", ggc: "Urenkel", sib: "Geschwister"
            },
            card: {
                birt: "Geburt", deat: "Tod", marr: "Hochzeit", spouses: "Ehepartner", noSpouse: "Kein Ehepartner registriert"
            },
            tooltips: {
                back: "Zurück", home: "Zurück zum Start", calendar: "Kalenderansicht", tree: "Zurück zum Baum", 
                fav: "Favoriten", theme: "Thema ändern", today: "Gehe zu Heute", fs: "Auf FamilySearch ansehen", 
                calendarView: "Im Kalender anzeigen", profileView: "Zum Profil gehen"
            },
            dateMap: { "JAN":"Januar", "FEB":"Februar", "MAR":"März", "APR":"April", "MAY":"Mai", "JUN":"Juni", "JUL":"Juli", "AUG":"August", "SEP":"September", "OCT":"Oktober", "NOV":"November", "DEC":"Dezember", "ABT":"ca.", "BEF":"vor", "AFT":"nach" }
        }
    };

    let currentLang = 'fr';

    function t(key) {
        const keys = key.split('.');
        let val = TRANSLATIONS[currentLang];
        for(let k of keys) {
            val = val ? val[k] : null;
        }
        return val || key;
    }

    function setLanguage(lang) {
        currentLang = lang;
        
        // Update active buttons
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        const activeBtn = document.querySelector(`.lang-btn[onclick="setLanguage('${lang}')"]`);
        if(activeBtn) activeBtn.classList.add('active');

        updateStaticUI();
        
        if(CURRENT_ID) {
            render7GenView(CURRENT_ID);
        }
        
        updateCalendarHeaders();
        if(IS_CALENDAR_MODE) {
            renderCalendar();
            setupCalendarObserver(); 
        }
        
        document.getElementById('searchInput').placeholder = t('search');
        document.getElementById('txtFavHeader').innerText = t('favHeader');
        document.getElementById('btnFavClear').innerText = t('favClear');
        if(document.querySelector('.fav-empty')) {
            document.querySelector('.fav-empty').innerText = t('favEmpty');
        }
    }

    function updateStaticUI() {
        document.getElementById('txtSubtitle').innerText = t('subtitle');
        document.getElementById('txtBtnUpload').innerText = t('btnUpload');
        document.getElementById('txtStats').innerText = t('stats');
        document.getElementById('btnToday').innerText = t('today');

        document.getElementById('btnBack').title = t('tooltips.back');
        document.getElementById('btnHome').title = t('tooltips.home');
        document.getElementById('btnFav').title = t('tooltips.fav');
        document.getElementById('btnTheme').title = t('tooltips.theme');
        document.getElementById('btnToday').title = t('tooltips.today');

        const btnCalendar = document.getElementById('btnCalendar');
        if(IS_CALENDAR_MODE) {
            btnCalendar.title = t('tooltips.tree');
        } else {
            btnCalendar.title = t('tooltips.calendar');
        }

        const wrapper = document.getElementById('monthNavWrapper');
        wrapper.innerHTML = '';
        TRANSLATIONS[currentLang].shortMonths.forEach((m, i) => {
            const btn = document.createElement('button');
            btn.className = 'month-btn';
            btn.onclick = () => scrollToMonth(i);
            btn.innerText = m;
            wrapper.appendChild(btn);
        });

        // Update search placeholder
        document.getElementById('searchInput').placeholder = t('search');
    }

    function updateCalendarHeaders() {
        document.getElementById('calHeadDay').innerText = t('calHeaders.0');
        document.getElementById('calHeadBirth').innerText = t('calHeaders.1');
        document.getElementById('calHeadMarr').innerText = t('calHeaders.2');
        document.getElementById('calHeadDeath').innerText = t('calHeaders.3');
    }

    // --- CORE LOGIC ---

    let DATA = { inds: {}, fams: {} };
    let HISTORY_STACK = [];
    let CURRENT_ID = null;
    let INITIAL_ID = null;
    let IS_NAVIGATING_BACK = false;
    let FAVORITES = new Set();
    
    const AVATAR_ICONS = {
        M: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"/></svg>`,
        F: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"/></svg>`,
        U: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>`
    };

    let calendarObserver = null; 

    function getAvatarSVG(sex) {
        if(sex === 'M') return AVATAR_ICONS.M;
        if(sex === 'F') return AVATAR_ICONS.F;
        return AVATAR_ICONS.U;
    }

    function loadFavorites() {
        const stored = localStorage.getItem('genealogy_favs');
        if(stored) {
            try {
                const arr = JSON.parse(stored);
                FAVORITES = new Set(arr);
            } catch(e) { console.error("Error loading favs", e); }
        }
    }

    function saveFavorites() {
        localStorage.setItem('genealogy_favs', JSON.stringify([...FAVORITES]));
    }

    function toggleFavorite(id) {
        if(FAVORITES.has(id)) {
            FAVORITES.delete(id);
        } else {
            FAVORITES.add(id);
        }
        saveFavorites();
        updateProfileStar(id); 
        renderFavoritesList(); 
    }

    function updateProfileStar(id) {
        const btn = document.getElementById('profileFavBtn');
        if(!btn) return;
        
        if(id === CURRENT_ID) {
            if(FAVORITES.has(id)) {
                btn.classList.add('active');
                btn.innerText = '★';
            } else {
                btn.classList.remove('active');
                btn.innerText = '☆';
            }
        }
    }

    function clearAllFavorites() {
        if(confirm("Sei sicuro di voler cancellare tutti i preferiti?")) {
            FAVORITES.clear();
            saveFavorites();
            renderFavoritesList();
            if(CURRENT_ID) updateProfileStar(CURRENT_ID); 
        }
    }

    const btnFav = document.getElementById('btnFav');
    const favDropdown = document.getElementById('favDropdown');
    
    btnFav.onclick = () => {
        favDropdown.classList.toggle('show');
        renderFavoritesList();
    };

    document.addEventListener('click', function(event) {
        if (!btnFav.contains(event.target) && !favDropdown.contains(event.target)) {
            favDropdown.classList.remove('show');
        }
    });

    function renderFavoritesList() {
        const listContainer = document.getElementById('favList');
        const footerContainer = document.getElementById('favFooter');
        listContainer.innerHTML = '';
        
        if(FAVORITES.size === 0) {
            listContainer.innerHTML = `<div class="fav-empty">${t('favEmpty')}</div>`;
            footerContainer.style.display = 'none'; 
            return;
        }

        FAVORITES.forEach(id => {
            const p = DATA.inds[id];
            if(p) {
                const div = document.createElement('div');
                div.className = 'fav-item';
                div.innerHTML = `
                    <span>${toTitleCase(p.name)}</span>
                    <span class="remove-fav" onclick="event.stopPropagation(); toggleFavorite('${id}')">×</span>
                `;
                div.onclick = () => {
                    render7GenView(id);
                    favDropdown.classList.remove('show');
                };
                listContainer.appendChild(div);
            }
        });
        
        footerContainer.style.display = 'flex'; 
    }

    const btnTheme = document.getElementById('btnTheme');
    function toggleTheme() {
        const html = document.documentElement;
        if (html.getAttribute('data-theme') === 'dark') {
            html.setAttribute('data-theme', 'light');
            btnTheme.innerText = '☾';
        } else {
            html.setAttribute('data-theme', 'dark');
            btnTheme.innerText = '☀';
        }
    }
    btnTheme.onclick = toggleTheme;

    function parseGEDCOM(text) {
        const lines = text.split(/\r?\n/);
        const inds = {}; const fams = {};
        let cid = null, ctype = null, ctag = null;
        // Regex adjusted to be slightly more permissive
        const regex = /^\s*(\d+)\s+(@\w+@|\w+)(\s+(.*))?$/;

        lines.forEach(line => {
            const m = line.match(regex);
            if (!m) return;
            const lvl = m[1], tag = m[2], val = m[4] || "";

            if (lvl === '0') {
                if (val.trim() === 'INDI') {
                    cid = tag.replace(/@/g, ''); ctype = 'INDI';
                    inds[cid] = { id: cid, name: 'Sconosciuto', given: '', surname: '', sex: 'U', birth: {}, death: {}, fams: [], famc: null, notes: [], parents: [], fsId: null };
                } else if (val.trim() === 'FAM') {
                    cid = tag.replace(/@/g, ''); ctype = 'FAM';
                    fams[cid] = { id: cid, husb: null, wife: null, children: [], marr: { date: null, place: null } };
                } else cid = null;
                ctag = null; return;
            }
            if (!cid) return;

            if (lvl === '1') {
                if (ctype === 'INDI') {
                    if (tag === 'NAME') {
                        inds[cid].name = val.replace(/\//g, '');
                        const parts = val.split('/');
                        if (parts.length > 1) {
                            inds[cid].given = parts[0].trim();
                            inds[cid].surname = parts[1].trim();
                        } else {
                            inds[cid].given = inds[cid].name;
                            inds[cid].surname = '';
                        }
                    }
                    if (tag === 'SEX') inds[cid].sex = val;
                    if (tag === 'FAMS') inds[cid].fams.push(val.replace(/@/g, ''));
                    if (tag === 'FAMC') inds[cid].famc = val.replace(/@/g, '');
                    if (tag === '_FSFTID') inds[cid].fsId = val; 
                    if (['BIRT','DEAT','NOTE'].includes(tag)) ctag = tag;
                    if (tag === 'NOTE' && val) inds[cid].notes.push(val);
                }
                if (ctype === 'FAM') {
                    const v = val.replace(/@/g, '');
                    if (tag === 'HUSB') fams[cid].husb = v;
                    if (tag === 'WIFE') fams[cid].wife = v;
                    if (tag === 'CHIL') fams[cid].children.push(v);
                    if (tag === 'MARR') ctag = 'MARR';
                }
            }
            
            if (lvl === '2') {
                if (ctype === 'INDI' && ctag) {
                    const target = ctag === 'BIRT' ? inds[cid].birth : (ctag === 'DEAT' ? inds[cid].death : null);
                    if (target) {
                        if (tag === 'DATE') target.date = val;
                        if (tag === 'PLAC') target.place = val;
                    }
                    if (ctag === 'NOTE' && ['CONT','CONC'].includes(tag)) inds[cid].notes.push((tag==='CONT'?'\n':'') + val);
                }
                if (ctype === 'FAM' && ctag === 'MARR') {
                    if (tag === 'DATE') fams[cid].marr.date = val;
                    if (tag === 'PLAC') fams[cid].marr.place = val;
                }
            }
        });

        Object.values(inds).forEach(p => {
            if (p.famc && fams[p.famc]) {
                const f = fams[p.famc];
                if (f.husb && inds[f.husb]) p.parents.push(inds[f.husb]);
                if (f.wife && inds[f.wife]) p.parents.push(inds[f.wife]);
            }
        });

        return { inds, fams };
    }

    function formatDateLocalized(dateStr) {
        if (!dateStr) return null;
        // Map for current language
        const map = TRANSLATIONS[currentLang].dateMap;
        return dateStr.toUpperCase().replace(/[A-Z]{3}/g, (match) => map[match] || match);
    }

    function formatPlace(placeStr) {
        if (!placeStr) return '<span class="vital-place-sub">-</span>';
        const parts = placeStr.split(',');
        const main = parts.shift().trim(); 
        const rest = parts.map(s => s.trim()).join('<br>');
        let html = `<span class="vital-place-main">${main}</span>`;
        if(rest) html += `<span class="vital-place-sub">${rest}</span>`;
        return html;
    }

    function getYear(d) { return (d && d.match(/\d{4}/)) ? d.match(/\d{4}/)[0] : ""; }

    function toTitleCase(str) {
        if(!str) return "";
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    function getNextGen(peopleList) {
        let nextGen = [];
        peopleList.forEach(p => {
            p.fams.forEach(fid => {
                const f = DATA.fams[fid];
                if (f && f.children) {
                    f.children.forEach(cid => { if (DATA.inds[cid]) nextGen.push(DATA.inds[cid]); });
                }
            });
        });
        const unique = [...new Map(nextGen.map(item => [item.id, item])).values()];
        return unique.sort((a,b) => (parseInt(getYear(a.birth.date))||9999) - (parseInt(getYear(b.birth.date))||9999));
    }

    function getPrevGen(peopleList) {
        let prevGen = [];
        peopleList.forEach(p => { if (p.parents) prevGen.push(...p.parents); });
        return [...new Map(prevGen.map(item => [item.id, item])).values()];
    }

    function hasChildren(p) {
        for(let fid of p.fams) {
            if(DATA.fams[fid] && DATA.fams[fid].children && DATA.fams[fid].children.length > 0) return true;
        }
        return false;
    }

    function getSiblings(person) {
        if (!person.famc) return [];
        const f = DATA.fams[person.famc];
        if (!f || !f.children) return [];
        let siblings = [];
        f.children.forEach(cid => {
            if(cid !== person.id && DATA.inds[cid]) siblings.push(DATA.inds[cid]);
        });
        return siblings.sort((a,b) => (parseInt(getYear(a.birth.date))||9999) - (parseInt(getYear(b.birth.date))||9999));
    }

    function toggleDotHighlight(id, active) {
        if(!id) return;
        const dot = document.getElementById('tldot-' + id);
        if(dot) {
            if(active) dot.classList.add('active-hover');
            else dot.classList.remove('active-hover');
        }
    }

    // IMPROVED DATE PARSER FOR ITALIAN/ENGLISH COMPATIBILITY
    function parseGedDateDayMonth(dateStr) {
        if (!dateStr) return null;
        const parts = dateStr.split(' ');
        let day = null, monthStr = null, year = '';
        
        parts.forEach(p => {
            if (!day && /^\d{1,2}$/.test(p)) day = parseInt(p);
            else if (!monthStr && /^[A-Za-z]{3}$/.test(p)) monthStr = p.toUpperCase();
            else if (/^\d{4}$/.test(p)) year = p;
        });

        if (day && monthStr) {
            const monthsEng = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            const monthsIta = ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DIC"];
            const monthsEsp = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
            
            let mIndex = monthsEng.indexOf(monthStr);
            if (mIndex < 0) mIndex = monthsIta.indexOf(monthStr);
            if (mIndex < 0) mIndex = monthsEsp.indexOf(monthStr);

            if (mIndex >= 0) return { d: day, m: mIndex, y: year };
        }
        return null; 
    }

    function navigateToCalendarDate(dateStr) {
        if(!dateStr) return;
        dateStr = dateStr.replace(/\\'/g, "'");
        const dateObj = parseGedDateDayMonth(dateStr); 
        if(!dateObj) return; 

        IS_CALENDAR_MODE = true;

        document.getElementById('btnBack').style.display = 'none';
        document.getElementById('btnHome').style.display = 'none';
        document.getElementById('statsBadge').style.display = 'none'; 
        document.getElementById('btnToday').style.display = 'block'; 

        const searchWrapper = document.getElementById('searchWrapper');
        const monthNavWrapper = document.getElementById('monthNavWrapper');
        searchWrapper.style.display = 'none';
        monthNavWrapper.style.display = 'flex';
        
        const dynTitle = document.getElementById('dynamicMonthTitle');
        dynTitle.style.display = 'block';

        const titleSuffix = document.getElementById('appTitleSuffix');
        titleSuffix.innerText = 'Calendar';
        titleSuffix.style.color = 'var(--fav-gold)';

        const btnCalendar = document.getElementById('btnCalendar');
        btnCalendar.innerText = '🌳';
        btnCalendar.title = t('tooltips.tree'); 

        document.getElementById('stageContainer').style.display = 'none';
        document.getElementById('timelineUI').style.display = 'none';
        document.getElementById('calendarStage').style.display = 'flex';

        renderCalendar();
        setupCalendarObserver();

        setTimeout(() => {
            const targetId = `cal-row-${dateObj.m}-${dateObj.d}`;
            const targetEl = document.getElementById(targetId);
            if(targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetEl.classList.add('flash-highlight');
                setTimeout(() => { targetEl.classList.remove('flash-highlight'); }, 2000);
            } else {
                scrollToMonth(dateObj.m); 
            }
        }, 100);
    }

    function renderTimeline(allVisiblePeople, currentFocusId) {
        const track = document.getElementById('tlTrack');
        track.innerHTML = '<div class="timeline-line"></div>';

        const validPeople = allVisiblePeople.filter(p => {
            const y = parseInt(getYear(p.birth.date));
            return !isNaN(y);
        }).map(p => ({...p, year: parseInt(getYear(p.birth.date))}));

        if (validPeople.length === 0) {
            document.getElementById('timelineUI').style.display = 'none';
            return;
        }

        document.getElementById('timelineUI').style.display = 'flex';

        const years = validPeople.map(p => p.year);
        let minYear = Math.min(...years);
        let maxYear = Math.max(...years);
        minYear = Math.floor(minYear / 10) * 10 - 10;
        maxYear = Math.ceil(maxYear / 10) * 10 + 10;

        document.getElementById('tlStart').innerText = minYear;
        document.getElementById('tlEnd').innerText = maxYear;

        const range = maxYear - minYear;

        let startCentury = Math.ceil(minYear / 100) * 100;
        if(startCentury === minYear) startCentury += 100;

        for (let c = startCentury; c < maxYear; c += 100) {
            const percent = ((c - minYear) / range) * 100;
            const line = document.createElement('div');
            line.className = 'timeline-century';
            line.style.left = `${percent}%`;
            const label = document.createElement('div');
            label.className = 'timeline-century-label';
            label.innerText = c;
            label.style.left = `${percent}%`;
            track.appendChild(line);
            track.appendChild(label);
        }
        
        validPeople.forEach(p => {
            const dot = document.createElement('div');
            dot.className = 'timeline-dot';
            dot.id = 'tldot-' + p.id;
            
            if (p.id === currentFocusId) dot.classList.add('is-focus');

            const percent = ((p.year - minYear) / range) * 100;
            dot.style.left = `${percent}%`;
            
            if(p.sex === 'M') dot.style.backgroundColor = 'var(--accent-m-text)';
            else if(p.sex === 'F') dot.style.backgroundColor = 'var(--accent-f-text)';
            else dot.style.backgroundColor = 'var(--text-sub)';

            dot.innerHTML = `<div class="timeline-label">${toTitleCase(p.name)} (${p.year})</div>`;
            dot.onclick = () => render7GenView(p.id);
            track.appendChild(dot);
        });
    }

    function render7GenView(focusId) {
        if (!IS_NAVIGATING_BACK && CURRENT_ID && CURRENT_ID !== focusId) {
            HISTORY_STACK.push(CURRENT_ID);
        }
        CURRENT_ID = focusId;
        IS_NAVIGATING_BACK = false; 
        document.getElementById('btnBack').disabled = HISTORY_STACK.length === 0;

        const stage = document.getElementById('stage');
        const container = document.getElementById('stageContainer');
        stage.style.opacity = 0;

        setTimeout(() => {
            stage.innerHTML = '';
            const focus = DATA.inds[focusId];
            if (!focus) return;

            const gen0 = [focus];
            const genM1 = getPrevGen(gen0);
            const genM2 = getPrevGen(genM1);
            const genM3 = getPrevGen(genM2);
            const genP1 = getNextGen(gen0);
            const genP2 = getNextGen(genP1);
            const genP3 = getNextGen(genP2);

            const siblings = getSiblings(focus);
            const allPeople = [...genM3, ...genM2, ...genM1, ...gen0, ...siblings, ...genP1, ...genP2, ...genP3];
            renderTimeline(allPeople, focus.id);

            // Check if on mobile to hide empty sections
            const isMobile = window.innerWidth <= 768;

            // Only show sections with people on mobile, show all on desktop
            if (!isMobile || genM3.length > 0) {
                stage.appendChild(createColumn(genM3, t('cols.ggp'), "w-3 g-minus-3"));
            }
            if (!isMobile || genM2.length > 0) {
                stage.appendChild(createColumn(genM2, t('cols.gp'), "w-2 g-minus-2"));
            }
            
            const parentsCol = document.createElement('div');
            parentsCol.className = "column w-1 g-minus-1 parents-col-fix";
            const fixedArea = document.createElement('div');
            fixedArea.className = "parents-fixed-area";
            const pHead = document.createElement('div');
            pHead.className = 'col-header';
            pHead.innerHTML = `${t('cols.p')} <span class="col-count">(${genM1.length})</span>`;
            fixedArea.appendChild(pHead);

            if(genM1.length === 0) {
                fixedArea.innerHTML += `<div style="text-align:center; opacity:0.2; font-size:20px; margin: 10px 0;">•</div>`;
            } else {
                genM1.forEach(p => {
                    const card = document.createElement('div');
                    const hasP = p.parents && p.parents.length > 0;
                    const hasC = hasChildren(p);
                    card.className = `card`;
                    card.onmouseenter = () => toggleDotHighlight(p.id, true);
                    card.onmouseleave = () => toggleDotHighlight(p.id, false);
                    const leftIndicator = hasP ? '<div class="indicator-box indicator-active left">‹</div>' : '<div class="indicator-box"></div>';
                    const rightIndicator = hasC ? '<div class="indicator-box indicator-active right">›</div>' : '<div class="indicator-box"></div>';
                    const bYear = getYear(p.birth.date);
                    const dYear = getYear(p.death.date);
                    const lifeSpan = dYear ? `${bYear} - ${dYear}` : bYear;
                    card.innerHTML = `
                        ${leftIndicator}
                        <div class="card-content">
                            <div class="mini-avatar ${getAvatarClass(p.sex)}">${getAvatarSVG(p.sex)}</div>
                            <div class="mini-info">
                                <span class="mini-name">${toTitleCase(p.name)}</span>
                                <span class="mini-date">${lifeSpan}</span>
                            </div>
                        </div>
                        ${rightIndicator}
                    `;
                    card.onclick = () => render7GenView(p.id);
                    fixedArea.appendChild(card);
                });
            }
            
            parentsCol.appendChild(fixedArea);

            // Only show siblings section if there are siblings
            if (siblings.length > 0) {
                const scrollArea = document.createElement('div');
                scrollArea.className = "parents-scroll-area g-siblings";
                const subHeader = document.createElement('div');
                subHeader.className = 'sub-col-header';
                if(siblings.length > 0) subHeader.innerHTML = `${t('cols.sib')} <span class="col-count">(${siblings.length})</span>`;
                else subHeader.innerHTML = t('cols.sib');
                scrollArea.appendChild(subHeader);

                if(siblings.length > 0) {
                    siblings.forEach(sib => {
                        const sCard = document.createElement('div');
                        const hasP = sib.parents && sib.parents.length > 0;
                        const hasC = hasChildren(sib);
                        sCard.className = `card`;
                        sCard.onmouseenter = () => toggleDotHighlight(sib.id, true);
                        sCard.onmouseleave = () => toggleDotHighlight(sib.id, false);
                        const leftIndicator = hasP ? '<div class="indicator-box indicator-active left">‹</div>' : '<div class="indicator-box"></div>';
                        const rightIndicator = hasC ? '<div class="indicator-box indicator-active right">›</div>' : '<div class="indicator-box"></div>';
                        const bYear = getYear(sib.birth.date);
                        const dYear = getYear(sib.death.date);
                        const lifeSpan = dYear ? `${bYear} - ${dYear}` : bYear;
                        sCard.innerHTML = `
                            ${leftIndicator}
                            <div class="card-content">
                                <div class="mini-avatar ${getAvatarClass(sib.sex)}">${getAvatarSVG(sib.sex)}</div>
                                <div class="mini-info">
                                    <span class="mini-name">${toTitleCase(sib.name)}</span>
                                    <span class="mini-date">${lifeSpan}</span>
                                </div>
                            </div>
                            ${rightIndicator}
                        `;
                        sCard.onclick = () => render7GenView(sib.id);
                        scrollArea.appendChild(sCard);
                    });
                } else {
                     scrollArea.innerHTML += `<div style="text-align:center; opacity:0.3; font-size:11px; margin-top:5px;">Nessuno trovato</div>`;
                }

                parentsCol.appendChild(scrollArea);
            }

            // Only show parents/siblings column if there are parents or siblings on mobile
            if (!isMobile || genM1.length > 0 || siblings.length > 0) {
                stage.appendChild(parentsCol);
            }

            stage.appendChild(createFocusCard(focus));

            // Only show descendant sections with people on mobile, show all on desktop
            if (!isMobile || genP1.length > 0) {
                stage.appendChild(createColumn(genP1, t('cols.c'), "w-1 g-plus-1"));
            }
            if (!isMobile || genP2.length > 0) {
                stage.appendChild(createColumn(genP2, t('cols.gc'), "w-2 g-plus-2"));
            }
            if (!isMobile || genP3.length > 0) {
                stage.appendChild(createColumn(genP3, t('cols.ggc'), "w-3 g-plus-3"));
            }

            // Adding a additional div at the bottom to avoid having the last
            // card touching the bottom of the screen.
            const mobileScrollPaddingDiv = document.createElement('div');
            mobileScrollPaddingDiv.id = "mobile-scroll-padding";
            console.log("creating mobileScrollPaddingDiv", mobileScrollPaddingDiv)
            stage.appendChild(mobileScrollPaddingDiv);

            stage.style.opacity = 1;
            setTimeout(() => {
                const focusEl = stage.querySelector('.w-0');
                if(focusEl) {
                    // Use the same isMobile check from above
                    if (isMobile) {
                        // Mobile: scroll vertically to focus card
                        const topPos = focusEl.offsetTop - (container.clientHeight / 2) + (focusEl.clientHeight / 2);
                        container.scrollTo({ top: topPos, behavior: 'smooth' });
                    } else {
                        // Desktop: scroll horizontally to center
                        const centerPos = focusEl.offsetLeft - (container.clientWidth / 2) + (focusEl.clientWidth / 2);
                        container.scrollTo({ left: centerPos, behavior: 'smooth' });
                    }
                }
            }, 100);
        }, 200);
    }

    function getAvatarClass(sex) {
        if(sex === 'M') return 'avatar-m';
        if(sex === 'F') return 'avatar-f';
        return 'avatar-u';
    }

    function createColumn(list, title, classes) {
        const col = document.createElement('div');
        col.className = `column ${classes}`;
        
        const head = document.createElement('div');
        head.className = 'col-header';
        head.innerHTML = `${title} <span class="col-count">(${list.length})</span>`;
        col.appendChild(head);

        if(list.length === 0) {
            col.innerHTML += `<div style="text-align:center; opacity:0.2; font-size:20px; margin-top:20px;">•</div>`;
            return col;
        }

        list.forEach(p => {
            const card = document.createElement('div');
            const hasP = p.parents && p.parents.length > 0;
            const hasC = hasChildren(p);
            card.className = `card`;
            card.onmouseenter = () => toggleDotHighlight(p.id, true);
            card.onmouseleave = () => toggleDotHighlight(p.id, false);
            
            const leftIndicator = hasP ? '<div class="indicator-box indicator-active left">‹</div>' : '<div class="indicator-box"></div>';
            const rightIndicator = hasC ? '<div class="indicator-box indicator-active right">›</div>' : '<div class="indicator-box"></div>';

            const bYear = getYear(p.birth.date);
            const dYear = getYear(p.death.date);
            const lifeSpan = dYear ? `${bYear} - ${dYear}` : bYear;

            card.innerHTML = `
                ${leftIndicator}
                <div class="card-content">
                    <div class="mini-avatar ${getAvatarClass(p.sex)}">${getAvatarSVG(p.sex)}</div>
                    <div class="mini-info">
                        <span class="mini-name">${toTitleCase(p.name)}</span>
                        <span class="mini-date">${lifeSpan}</span>
                    </div>
                </div>
                ${rightIndicator}
            `;
            card.onclick = () => render7GenView(p.id);
            col.appendChild(card);
        });
        return col;
    }

    function createFocusCard(p) {
        const col = document.createElement('div');
        col.className = `column w-0`;
        const card = document.createElement('div');
        card.className = 'focus-card';
        const initials = p.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
        const notes = p.notes.join("\n").trim();
        let spouseList = [];
        p.fams.forEach(fid => {
            const f = DATA.fams[fid];
            if(f) {
                const sId = (f.husb === p.id) ? f.wife : f.husb;
                if(sId && DATA.inds[sId]) {
                    const spouse = DATA.inds[sId];
                    const mDate = formatDateLocalized(f.marr.date);
                    const mPlace = f.marr.place;
                    let metaParts = [];
                    if(mDate) metaParts.push(mDate);
                    if(mPlace) metaParts.push(`a ${mPlace}`);
                    const metaStr = metaParts.length > 0 ? `${t('card.marr')}: ${metaParts.join(' ')}` : '';
                    const sortYear = f.marr.date ? (parseInt(getYear(f.marr.date)) || 9999) : 9999;
                    spouseList.push({ id: spouse.id, name: spouse.name, info: metaStr, year: sortYear });
                }
            }
        });
        spouseList.sort((a,b) => a.year - b.year);

        let spousesHTML = '';
        if (spouseList.length > 0) {
            spousesHTML = `
                <div class="spouse-section">
                    <div class="spouse-title">${t('card.spouses')}</div>
                    ${spouseList.map(s => `
                        <div class="spouse-row" onclick="render7GenView('${s.id}')" title="${t('tooltips.profileView')}">
                            <span class="spouse-name">${toTitleCase(s.name)}</span> 
                            ${s.info ? `<span class="spouse-meta">${s.info}</span>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        const bDate = formatDateLocalized(p.birth.date) || '-';
        const dDate = formatDateLocalized(p.death.date) || '-';
        const avClass = getAvatarClass(p.sex);
        const isFav = FAVORITES.has(p.id);
        const favIcon = isFav ? '★' : '☆';
        const favClass = isFav ? 'active' : '';

        // Check if person has any death information
        const hasDeath = p.death && (p.death.date || p.death.place);

        const fsHtml = p.fsId ? `<a href="https://www.familysearch.org/tree/person/details/${p.fsId}" target="_blank" class="focus-fsid" title="${t('tooltips.fs')}">Familysearch: ${p.fsId} ↗</a>` : '';
        let nameHtml = p.surname ? `<span class="name-given">${toTitleCase(p.given)}</span><span class="name-surname">${toTitleCase(p.surname)}</span>` : `<span class="name-given">${toTitleCase(p.name)}</span>`;

        // Build death column HTML only if person has death information
        const deathColumnHtml = hasDeath ? `
            <div class="vital-column" onclick="navigateToCalendarDate('${p.death.date ? p.death.date.replace(/'/g, "\\'") : ''}')" title="${t('tooltips.calendarView')}">
                <span class="vital-label">${t('card.deat')}</span>
                <span class="vital-date">${dDate}</span>
                <div class="vital-place">${formatPlace(p.death.place)}</div>
            </div>
        ` : '';

        card.innerHTML = `
            <div class="focus-banner">
                <div class="focus-fav-btn ${favClass}" id="profileFavBtn" onclick="toggleFavorite('${p.id}')">${favIcon}</div>
                <div class="focus-avatar-large ${avClass}">${getAvatarSVG(p.sex)}</div>
            </div>
            <div class="focus-body">
                <div class="focus-name">${nameHtml}</div>
                <div class="name-separator"></div>
                ${fsHtml}
                <div style="margin-top:4px; margin-bottom: 20px;">
                    <span class="focus-id">GED: ${p.id}</span>
                </div>
                <div class="vital-stats">
                    <div class="vital-column" onclick="navigateToCalendarDate('${p.birth.date ? p.birth.date.replace(/'/g, "\\'") : ''}')" title="${t('tooltips.calendarView')}">
                        <span class="vital-label">${t('card.birt')}</span>
                        <span class="vital-date">${bDate}</span>
                        <div class="vital-place">${formatPlace(p.birth.place)}</div>
                    </div>
                    ${deathColumnHtml}
                </div>
                ${spousesHTML}
                ${notes ? `<div class="focus-note">${notes}</div>` : ''}
            </div>
        `;
        col.appendChild(card);
        return col;
    }

    function initData(gedContent) {
        try {
            const parsed = parseGEDCOM(gedContent);
            DATA = parsed.inds ? parsed : {inds:{}, fams:{}};
            if(Object.keys(DATA.inds).length === 0) throw new Error("No Data");
            document.getElementById('uploadLayer').style.display='none';
            
            const count = Object.keys(DATA.inds).length;
            document.querySelector('#statsBadge strong').innerText = count;
            document.getElementById('statsBadge').style.display = 'block';

            updateStaticUI();
            loadFavorites();
            INITIAL_ID = Object.keys(DATA.inds)[0];
            render7GenView(INITIAL_ID);
        } catch(err) {
            console.error(err);
            document.getElementById('errorMsg').innerText = "Errore nel caricamento. Assicurati sia un file GEDCOM valido (.ged).";
            document.getElementById('uploadLayer').style.display = 'flex';
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        updateStaticUI();

        // Check if embedded encrypted data exists
        if (ENCRYPTED_GEDCOM_DATA && ENCRYPTED_GEDCOM_DATA.trim().length > 0) {
            // Show password prompt modal
            showPasswordPrompt();
        }
    });

    // Password prompt functionality
    function showPasswordPrompt() {
        const modal = document.getElementById('passwordModal');
        const input = document.getElementById('passwordInput');
        const submitBtn = document.getElementById('passwordSubmit');
        const errorMsg = document.getElementById('passwordError');
        const spinner = document.getElementById('passwordSpinner');

        modal.style.display = 'flex';

        // Focus password input after animation
        setTimeout(() => input.focus(), 300);

        // Handle Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        });

        submitBtn.addEventListener('click', async () => {
            const password = input.value;

            if (!password) {
                errorMsg.textContent = 'Please enter a password';
                return;
            }

            // Disable input and show spinner
            input.disabled = true;
            submitBtn.disabled = true;
            errorMsg.textContent = '';
            spinner.style.display = 'flex';

            try {
                // Decrypt the embedded data
                const decryptedGEDCOM = await decryptGEDCOM(ENCRYPTED_GEDCOM_DATA, password);

                // Hide modal
                modal.style.display = 'none';

                // Initialize the app with decrypted data
                initData(decryptedGEDCOM);

            } catch (error) {
                // Wrong password or corrupted data
                errorMsg.textContent = 'Incorrect password. Please try again.';
                input.value = '';
                input.disabled = false;
                submitBtn.disabled = false;
                spinner.style.display = 'none';
                input.focus();
            }
        });
    }

    const fileIn = document.getElementById('fileInput');
    fileIn.addEventListener('change', (e) => {
        const f = e.target.files[0];
        if(!f) return;
        
        const r = new FileReader();
        r.onload = (ev) => initData(ev.target.result);
        r.onerror = () => {
             document.getElementById('errorMsg').innerText = "Errore di lettura file.";
        };
        // Use default Text reading (UTF-8). Most modern browsers handle BOM automatically.
        // If file is very old ANSI, symbols might break, but logic will hold.
        r.readAsText(f);
    });

    document.getElementById('btnBack').onclick = () => {
        if(HISTORY_STACK.length > 0) {
            const prevId = HISTORY_STACK.pop();
            IS_NAVIGATING_BACK = true; 
            render7GenView(prevId);
        }
    };

    document.getElementById('btnHome').onclick = () => {
        if(INITIAL_ID) {
            HISTORY_STACK = [];
            IS_NAVIGATING_BACK = true;
            document.getElementById('searchInput').value = '';
            render7GenView(INITIAL_ID);
        }
    };

    document.getElementById('btnToday').onclick = () => {
        const now = new Date();
        const d = now.getDate();
        const m = now.getMonth();
        const todayId = `cal-row-${m}-${d}`;
        const todayEl = document.getElementById(todayId);
        if (todayEl) {
            todayEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            todayEl.classList.add('flash-highlight');
            setTimeout(() => todayEl.classList.remove('flash-highlight'), 2000);
        } else {
            scrollToMonth(m);
        }
    };

    const searchIn = document.getElementById('searchInput');
    const resBox = document.getElementById('searchResults');
    
    searchIn.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        resBox.innerHTML = '';
        if(q.length < 2) { resBox.style.display='none'; return; }
        
        const matches = Object.values(DATA.inds).filter(p => p.name.toLowerCase().includes(q));
        matches.slice(0, 15).forEach(p => {
            const d = document.createElement('div');
            d.className = 'result-item';
            const bY = getYear(p.birth.date);
            const dY = getYear(p.death.date);
            const time = dY ? `${bY} - ${dY}` : bY;
            d.innerHTML = `<span>${toTitleCase(p.name)}</span> <span style="opacity:0.6">${time}</span>`;
            d.onclick = () => {
                render7GenView(p.id);
                resBox.style.display='none';
                searchIn.value = '';
            };
            resBox.appendChild(d);
        });
        resBox.style.display = matches.length ? 'block' : 'none';
    });

    /* --- LOGICA CALENDARIO & NAVIGAZIONE --- */
    const btnCalendar = document.getElementById('btnCalendar');
    const stageContainer = document.getElementById('stageContainer');
    const calendarStage = document.getElementById('calendarStage');
    const timelineUI = document.getElementById('timelineUI'); 
    
    // Toggle Elements
    const searchWrapper = document.getElementById('searchWrapper');
    const monthNavWrapper = document.getElementById('monthNavWrapper');

    let IS_CALENDAR_MODE = false;

    // --- SETUP CALENDAR OBSERVER ---
    function setupCalendarObserver() {
        if(calendarObserver) calendarObserver.disconnect();
        const options = { root: calendarStage, rootMargin: '-70px 0px -70% 0px', threshold: 0 };
        calendarObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const mName = entry.target.dataset.name;
                    const titleEl = document.getElementById('dynamicMonthTitle');
                    if(titleEl && mName) titleEl.innerText = mName;
                }
            });
        }, options);
        document.querySelectorAll('.cal-month-block').forEach(el => calendarObserver.observe(el));
    }

    btnCalendar.onclick = () => {
        IS_CALENDAR_MODE = !IS_CALENDAR_MODE;
        const titleSuffix = document.getElementById('appTitleSuffix');
        const dynTitle = document.getElementById('dynamicMonthTitle');
        
        if (IS_CALENDAR_MODE) {
            stageContainer.style.display = 'none';
            timelineUI.style.display = 'none'; 
            calendarStage.style.display = 'flex';
            
            document.getElementById('btnBack').style.display = 'none';
            document.getElementById('btnHome').style.display = 'none';
            document.getElementById('statsBadge').style.display = 'none'; 
            document.getElementById('btnToday').style.display = 'block'; 

            searchWrapper.style.display = 'none';
            monthNavWrapper.style.display = 'flex';
            dynTitle.style.display = 'block'; 
            
            titleSuffix.innerText = 'Calendar';
            titleSuffix.style.color = 'var(--fav-gold)'; 

            btnCalendar.innerText = '🌳'; 
            btnCalendar.title = t('tooltips.tree'); 

            renderCalendar();
            setupCalendarObserver(); 

            setTimeout(() => {
                const now = new Date();
                const d = now.getDate();
                const m = now.getMonth();
                const todayId = `cal-row-${m}-${d}`;
                const todayEl = document.getElementById(todayId);
                if(todayEl) {
                    todayEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    todayEl.classList.add('flash-highlight');
                    setTimeout(() => todayEl.classList.remove('flash-highlight'), 2000);
                } else {
                     scrollToMonth(m);
                }
            }, 100);

        } else {
            calendarStage.style.display = 'none';
            stageContainer.style.display = 'flex';
            timelineUI.style.display = 'flex'; 
            
            document.getElementById('btnBack').style.display = '';
            document.getElementById('btnHome').style.display = '';
            document.getElementById('statsBadge').style.display = 'block'; 
            document.getElementById('btnToday').style.display = 'none'; 

            searchWrapper.style.display = 'flex';
            monthNavWrapper.style.display = 'none';
            dynTitle.style.display = 'none'; 
            
            titleSuffix.innerText = 'Explorer';
            titleSuffix.style.color = ''; 

            btnCalendar.innerText = '📅';
            btnCalendar.title = t('tooltips.calendar'); 
            
            if(CURRENT_ID) render7GenView(CURRENT_ID);
        }
    };

    function renderCalendar() {
        const content = document.getElementById('calendarContent');
        content.innerHTML = '';
        const now = new Date();
        const todayDay = now.getDate();
        const todayMonth = now.getMonth(); 

        const monthNames = TRANSLATIONS[currentLang].monthNames;

        const events = Array(12).fill(null).map(() => Array(32).fill(null).map(() => ({ b: [], m: [], d: [] })));
        
        Object.values(DATA.inds).forEach(p => {
            const b = parseGedDateDayMonth(p.birth.date);
            if (b) events[b.m][b.d].b.push({ name: p.name, year: b.y, id: p.id });
            const d = parseGedDateDayMonth(p.death.date);
            if (d) events[d.m][d.d].d.push({ name: p.name, year: d.y, id: p.id });
        });
        Object.values(DATA.fams).forEach(f => {
            const m = parseGedDateDayMonth(f.marr.date);
            if (m) {
                const h = DATA.inds[f.husb] ? DATA.inds[f.husb].name : '?';
                const w = DATA.inds[f.wife] ? DATA.inds[f.wife].name : '?';
                events[m.m][m.d].m.push({ name: `${h} & ${w}`, year: m.y, id: f.husb || f.wife });
            }
        });
        
        monthNames.forEach((mName, mIdx) => {
            let hasEventsInMonth = false;
            let monthRows = '';
            for (let day = 1; day <= 31; day++) {
                const dayEv = events[mIdx][day];
                if (!dayEv) continue; 
                const isToday = (mIdx === todayMonth && day === todayDay);
                const hasEvents = (dayEv.b.length > 0 || dayEv.m.length > 0 || dayEv.d.length > 0);
                if (!hasEvents && !isToday) continue;
                hasEventsInMonth = true;

                const rowClass = isToday ? 'cal-row is-today cal-grid-def' : 'cal-row cal-grid-def';
                const specificRowId = `cal-row-${mIdx}-${day}`;

                const sortByYear = (a, b) => (parseInt(a.year) || 9999) - (parseInt(b.year) || 9999);
                dayEv.b.sort(sortByYear); dayEv.m.sort(sortByYear); dayEv.d.sort(sortByYear);

                const makeBadges = (list, typeClass) => list.map(e => `
                    <div class="cal-event ${typeClass}" onclick="openFromCalendar('${e.id}')">
                        <span>${toTitleCase(e.name)}</span><span class="cal-year">${e.year}</span>
                    </div>`).join('');

                monthRows += `
                    <div class="${rowClass}" id="${specificRowId}">
                        <div class="cal-day cal-col-center">${day}</div>
                        <div class="cal-cell cal-col-left">${makeBadges(dayEv.b, 'type-birth')}</div>
                        <div class="cal-cell cal-col-left">${makeBadges(dayEv.m, 'type-marr')}</div>
                        <div class="cal-cell cal-col-left">${makeBadges(dayEv.d, 'type-death')}</div>
                    </div>
                `;
            }
            if (hasEventsInMonth) {
                content.innerHTML += `<div class="cal-month-block" id="cal-month-${mIdx}" data-name="${mName}"><div class="cal-month-title">${mName}</div>${monthRows}</div>`;
            }
        });
        if (content.innerHTML === '') content.innerHTML = '<div style="padding:40px; text-align:center; opacity:0.6;">Nessun evento visualizzabile.</div>';
    }

    function scrollToMonth(monthIndex) {
        const el = document.getElementById(`cal-month-${monthIndex}`);
        if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function openFromCalendar(id) {
        if (!id) return;
        IS_CALENDAR_MODE = false;
        if(calendarObserver) calendarObserver.disconnect();
        calendarStage.style.display = 'none';
        stageContainer.style.display = 'flex';
        timelineUI.style.display = 'flex';
        
        document.getElementById('btnBack').style.display = '';
        document.getElementById('btnHome').style.display = '';
        document.getElementById('statsBadge').style.display = 'block'; 
        document.getElementById('btnToday').style.display = 'none'; 

        searchWrapper.style.display = 'flex';
        monthNavWrapper.style.display = 'none';
        document.getElementById('dynamicMonthTitle').style.display = 'none'; 
        
        const titleSuffix = document.getElementById('appTitleSuffix');
        titleSuffix.innerText = 'Explorer';
        titleSuffix.style.color = ''; 

        btnCalendar.innerText = '📅';
        btnCalendar.title = t('tooltips.calendar'); 
        render7GenView(id);
    }
