/*
Internationalization (i18n) System for Haluzator Website
Default language: English
*/

(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Meta
            'meta.title': 'Haluzator - Conductor of Your Visual Universe',
            'meta.description': 'Free application for home projection. Upload your photos and videos and create amazing visual shows with professional effects.',

            // Navigation
            'nav.download': 'Download standalone exe',
            'nav.try': 'Try it in browser',

            // Hero section
            'hero.title': 'Show effects in rhythm with your music',
            'hero.subtitle': 'Simple application for home projection. Upload your photos and videos, add effects and create amazing visual shows. Free for Windows and web.',
            'hero.download': 'Download standalone exe',
            'hero.try': 'Try in browser',
            'hero.testmode': 'Functional prototype in test mode',

            // Intro section
            'intro.title': 'What is Haluzator',
            'intro.text': 'Haluzator is a <strong>free application for everyone</strong> who wants to project their own photos and videos with amazing effects. Perfect for <strong>home projection, parties or creative projects</strong>. Upload your media, choose an effect and let the graphics pulse to the rhythm of music.',

            // Features section
            'features.title': 'Why you\'ll love it?',
            'features.upload.title': 'Upload your photos and videos',
            'features.upload.text': 'Main purpose of the application: <strong>project your own content</strong>. Upload vacation photos, celebration videos or any other content and transform it into an amazing visual show.',
            'features.upload.item1': 'Support for all common formats (JPG, PNG, MP4, WebM)',
            'features.upload.item2': 'Simple upload by dragging files',
            'features.upload.item3': 'Instant preview: See everything in real time',

            'features.effects.title': '150+ visual effects',
            'features.effects.text': 'Add professional effects with dynamic shaders – advanced GPU filters for real-time image transformation. Kaleidoscopes, audio-reactive effects and abstract visuals, all smooth and without slowdown.',
            'features.effects.item1': '<strong>Shaders:</strong> More than 150 pre-made effects for every taste',
            'features.effects.item2': '<strong>3D Models:</strong> Optionally add 3D objects (.obj)',
            'features.effects.item3': '<strong>HTML Overlay:</strong> Add texts or custom graphics',

            'features.mixer.title': 'Visual Show Mixer',
            'features.mixer.text': 'Create smooth transitions between your media with crossfade effects, layering and various blend modes. Mix videos, photos and shaders in real time for professional visual flow.',
            'features.mixer.item1': '<strong>8 Pages:</strong> Switch between different parts of your show',
            'features.mixer.item2': '<strong>Rhythmic steps:</strong> Synchronize with music',
            'features.mixer.item3': '<strong>Looping:</strong> Loop your favorite moments',

            // Controls section
            'controls.title': 'Controls and features',
            'controls.subtitle': 'Complete overview of all buttons and functions in the main application panel. Each button gives you control over the visual show:',
            'controls.fps': 'FPS',
            'controls.fps.desc': 'Display of current frames per second. Monitor rendering performance in real time and optimize settings for smooth visualization.',
            'controls.play': 'Play / Pause',
            'controls.play.desc': 'Start or pause visual playback. Keyboard shortcut: <strong>Spacebar</strong>',
            'controls.microphone': 'Microphone',
            'controls.microphone.desc': 'Turn audio input from microphone on or off for audio-reactive effects. Visuals react to music in real time.',
            'controls.fullscreen': 'Fullscreen',
            'controls.fullscreen.desc': 'Switch to fullscreen mode for perfect VJ show without distracting elements.',
            'controls.projection': 'Projection window',
            'controls.projection.desc': 'Open a separate window for projector while controlling from the main window. Perfect for live performance.',
            'controls.save': 'Save',
            'controls.save.desc': 'Save your entire session including all effects, media and settings to a single file. All data stays on your device.',
            'controls.load': 'Load',
            'controls.load.desc': 'Load a previously saved session. Restore all your effects, sequences and settings with one click.',
            'controls.ui-toggle': 'Hide UI elements',
            'controls.ui-toggle.desc': 'Hide or show control panels (Controls, Sequencer, Right Panel). Ideal for clean fullscreen mode or dual screen setup.',
            'controls.midi': 'MIDI IN',
            'controls.midi.desc': 'Selection of MIDI input device for connecting MIDI controller or keyboard. After connection, you can map MIDI signals to application controls.',

            // Sequencer
            'sequencer.title': 'Sequencer',
            'sequencer.intro': 'Powerful sequencer for creating complex visual compositions:',
            'sequencer.item1': '<strong>8 Pages:</strong> Switch between different moods and scenes of the entire show',
            'sequencer.item2': '<strong>Flexible steps:</strong> Set 2, 4, 8, or 16 steps according to your needs',
            'sequencer.item3': '<strong>Drag & Drop:</strong> Simply drag shaders, videos, 3D models or HTML onto individual steps',
            'sequencer.item4': '<strong>Looping:</strong> Loop any part of the sequence for repeating effects',
            'sequencer.item5': '<strong>Live VJ Mode:</strong> Activate steps in real time using keyboard or MIDI',
            'sequencer.item6': '<strong>Media combinations:</strong> Each step can contain shader, video, 3D model and HTML overlay simultaneously',
            'sequencer.item7': '<strong>Smooth transitions:</strong> Automatic fade effects between steps',

            // Tuning Controls
            'tuning.title': 'Tuning Controls',
            'tuning.intro': 'Complete set of controls for fine-tuning visuals in real time:',
            'tuning.item1': '<strong>TEMPO:</strong> Set playback speed (6-120 BPM)',
            'tuning.item2': '<strong>OVERLAY:</strong> Transparency of HTML overlay layers',
            'tuning.item3': '<strong>AUDIO:</strong> Strength of audio-reactive effects',
            'tuning.item4': '<strong>Blur & Glow:</strong> Blur and glowing effects',
            'tuning.item5': '<strong>Chroma & Hue Shift:</strong> Color transformations',
            'tuning.item6': '<strong>Mandala Segments:</strong> Symmetric effects',
            'tuning.item7': '<strong>Particles:</strong> Particle systems',
            'tuning.item8': '<strong>Saturation:</strong> Color intensity and saturation',
            'tuning.item9': '<strong>Speed, Zoom:</strong> Dynamic parameters',
            'tuning.item10': '<strong>Levels:</strong> Shadows, Midtones, Highlights for professional color grading',

            // Shaders Library
            'shaders.title': 'Shader Library',
            'shaders.intro': 'Extensive collection of professional visual effects:',
            'shaders.item1': '<strong>150+ pre-made shaders:</strong> From abstract fractals through particle storms to retro glitch art',
            'shaders.item2': '<strong>Categorization:</strong> Easy search by effect type',
            'shaders.item3': '<strong>Instant preview:</strong> See the result before applying',
            'shaders.item4': '<strong>Custom shaders:</strong> Create your own effects in GLSL code',
            'shaders.item5': '<strong>Monaco Editor:</strong> Professional editor with syntax highlighting and autocomplete',
            'shaders.item6': '<strong>Shader combinations:</strong> Combine multiple shaders for unique effects',
            'shaders.item7': '<strong>Export & Import:</strong> Share your shaders with the community',

            // Media Library
            'media.title': 'Media Library',
            'media.intro': 'Upload your own photos and videos - this is the main purpose of the application:',
            'media.item1': '<strong>Your photos:</strong> Upload photos from vacation, celebrations or any other moments. Support for all common formats (JPG, PNG, GIF, WebP).',
            'media.item2': '<strong>Your videos:</strong> Load your own video clips and apply visual effects to them in real time. Perfect for home projection.',
            'media.item3': '<strong>3D Models (.obj):</strong> Optionally add 3D models for even more interesting effects.',
            'media.item4': '<strong>HTML Overlay:</strong> Add custom HTML content with CSS and JavaScript for interactive layers.',
            'media.item5': '<strong>Simple upload:</strong> Simply drag files into the application or use the button to select.',
            'media.item6': '<strong>Local storage:</strong> All your media is stored locally - no uploading to servers.',
            'media.item7': '<strong>Free for everyone:</strong> The application is completely free and available to everyone.',

            // Performance section
            'performance.title': 'Simple controls for everyone',
            'performance.subtitle': 'Haluzator is designed so that anyone can use it - from beginners to advanced users.',
            'performance.simple.title': 'Simple controls',
            'performance.simple.desc': 'Drag files, select effect and play. No complicated setup.',
            'performance.audio.title': 'Audio reactivity',
            'performance.audio.desc': 'Connect microphone or music and let effects react to sound.',
            'performance.home.title': 'Home projection',
            'performance.home.desc': 'Perfect for projection on wall at home, at parties or when meeting with friends.',

            // How it works
            'howitworks.title': 'How it works?',
            'howitworks.step1.title': 'Upload',
            'howitworks.step1.desc': 'Upload your photos or videos - simply drag files into the application.',
            'howitworks.step2.title': 'Choose effect',
            'howitworks.step2.desc': 'Choose one of 150+ visual effects and apply it to your media.',
            'howitworks.step3.title': 'Project',
            'howitworks.step3.desc': 'Start with <em>Spacebar</em> and project your amazing show!',

            // Users section
            'users.card1.title': 'For everyone with photos and videos',
            'users.card1.subtitle': 'Project your memories with amazing effects',
            'users.card1.story': 'Do you have hundreds of photos from vacation, videos from celebrations or family gatherings? Haluzator allows you to transform these memories into an amazing visual show. Upload your photos and videos, apply professional effects and project them on the wall during family evenings or celebrations. Create your own digital gallery that comes alive thanks to dynamic transitions and audio-reactive effects. Your memories thus gain a new dimension and become part of unforgettable moments.',

            'users.card2.title': 'For home users',
            'users.card2.subtitle': 'Create amazing atmosphere at home celebrations',
            'users.card2.story': 'Want to create an unforgettable atmosphere at a birthday party, wedding or just when meeting with friends? Haluzator is the ideal solution for home projection. Connect a projector or use a large TV, upload photos of guests or thematic videos and let them pulse to the rhythm of music. With audio-reactive effects, your show automatically synchronizes with the music you play. Create a professional atmosphere without the need for complicated setup - everything works simply and intuitively.',

            'users.card3.title': 'For creatives and experimenters',
            'users.card3.subtitle': 'Experiment with graphics without limits - free and simple',
            'users.card3.story': 'Are you an artist, designer or just someone who loves experimenting with graphics? Haluzator opens endless possibilities for creative expression. Create your own shaders in GLSL, combine effects, experiment with 3D models and HTML overlay layers. With the professional Monaco editor, you have full control over every aspect of visuals. Everything is free, without restrictions and without the need for complicated setup. Share your creations with the community or use them for your own projects. The limits exist only in your imagination.',

            // Download section
            'download.title': 'Start projecting your photos and videos',
            'download.text': 'Download the application for free, upload your photos and videos and create an amazing visual show. All settings and media are stored locally on your computer.',
            'download.box.title': 'Download Haluzator for free',
            'download.box.subtitle': 'Windows version | Web version - available to everyone',
            'download.button': 'Download now',

            // Footer
            'footer.copyright': '© 2025 Haluzator. All rights reserved.',
            'footer.facebook': 'Facebook',
            'footer.email': 'Email'
        },
        cs: {
            // Meta
            'meta.title': 'Haluzator - Dirigent vašeho vizuálního vesmíru',
            'meta.description': 'Zdarma dostupná aplikace pro domácí promítání. Nahrajte své fotky a videa a vytvořte úžasnou vizuální show s profesionálními efekty.',

            // Navigation
            'nav.download': 'Stáhnout exe soubor',
            'nav.try': 'Vyzkoušet v prohlížeči',

            // Hero section
            'hero.title': 'Show efekty v rytmu vaší hudby',
            'hero.subtitle': 'Jednoduchá aplikace pro domácí promítání. Nahrajte své fotky a videa, přidejte efekty a vytvořte úžasnou vizuální show. Zdarma pro Windows i web.',
            'hero.download': 'Stáhnout exe soubor',
            'hero.try': 'Vyzkoušet v prohlížeči',
            'hero.testmode': 'Funkční prototyp v testovacím režimu',

            // Intro section
            'intro.title': 'Co je to haluzator',
            'intro.text': 'Haluzator je <strong>zdarma dostupná aplikace pro každého</strong>, kdo chce promítat své vlastní fotky a videa s úžasnými efekty. Ideální pro <strong>domácí promítání, party nebo kreativní projekty</strong>. Nahrajte své médium, vyberte efekt a nechte grafiku pulzovat do rytmu hudby.',

            // Features section
            'features.title': 'Proč si ho zamilujete?',
            'features.upload.title': 'Nahrajte své fotky a videa',
            'features.upload.text': 'Hlavní účel aplikace: <strong>promítat vaše vlastní obsahy</strong>. Nahrajte fotky z dovolené, videa z oslav nebo jakýkoliv jiný obsah a proměňte ho v úžasnou vizuální show.',
            'features.upload.item1': 'Podpora všech běžných formátů (JPG, PNG, MP4, WebM)',
            'features.upload.item2': 'Jednoduché nahrání přetažením souboru',
            'features.upload.item3': 'Okamžitý náhled: Vše vidíte v reálném čase',

            'features.effects.title': '150+ vizuálních efektů',
            'features.effects.text': 'Přidejte profesionální efekty díky dynamickým shaderům – pokročilým GPU filtrům pro real-time transformaci obrazu. Kaleidoskopy, audio-reaktivní efekty a abstraktní vizuály, vše plynule a bez zpomalení.',
            'features.effects.item1': '<strong>Shadery:</strong> Více než 150 předpřipravených efektů pro každý vkus',
            'features.effects.item2': '<strong>3D Modely:</strong> Volitelně přidejte 3D objekty (.obj)',
            'features.effects.item3': '<strong>HTML Overlay:</strong> Přidejte texty nebo vlastní grafiku',

            'features.mixer.title': 'Visual Show Mixer',
            'features.mixer.text': 'Vytvářejte plynulé přechody mezi vašimi médii s crossfade efekty, vrstvením a různými blend režimy. Mixujte videa, fotky a shadery v reálném čase pro profesionální vizuální flow.',
            'features.mixer.item1': '<strong>8 Stránek:</strong> Přepínejte mezi různými částmi vaší show',
            'features.mixer.item2': '<strong>Rytmické kroky:</strong> Synchronizujte s hudbou',
            'features.mixer.item3': '<strong>Looping:</strong> Zacyklete své oblíbené momenty',

            // Controls section
            'controls.title': 'Ovládací prvky a funkce',
            'controls.subtitle': 'Kompletní přehled všech tlačítek a funkcí v hlavním panelu aplikace. Každé tlačítko vám dává kontrolu nad vizuální show:',
            'controls.fps': 'FPS',
            'controls.fps.desc': 'Zobrazení aktuálního počtu snímků za sekundu. Sledujte výkon renderování v reálném čase a optimalizujte nastavení pro plynulou vizualizaci.',
            'controls.play': 'Play / Pause',
            'controls.play.desc': 'Spusťte nebo pozastavte přehrávání vizuálů. Klávesová zkratka: <strong>Mezerník</strong>',
            'controls.microphone': 'Mikrofon',
            'controls.microphone.desc': 'Zapněte nebo vypněte audio vstup z mikrofonu pro audio-reaktivní efekty. Vizuály reagují na hudbu v reálném čase.',
            'controls.fullscreen': 'Fullscreen',
            'controls.fullscreen.desc': 'Přepněte do celoobrazovkového režimu pro perfektní VJ show bez rušivých prvků.',
            'controls.projection': 'Projekční okno',
            'controls.projection.desc': 'Otevřete samostatné okno pro projektor, zatímco ovládáte z hlavního okna. Perfektní pro živé vystoupení.',
            'controls.save': 'Uložit',
            'controls.save.desc': 'Uložte celou vaši session včetně všech efektů, médií a nastavení do jednoho souboru. Všechna data zůstávají na vašem zařízení.',
            'controls.load': 'Načíst',
            'controls.load.desc': 'Načtěte dříve uloženou session. Obnovte všechny vaše efekty, sekvence a nastavení jedním kliknutím.',
            'controls.ui-toggle': 'Skrýt UI prvky',
            'controls.ui-toggle.desc': 'Skryjte nebo zobrazte ovládací panely (Controls, Sequencer, Right Panel). Ideální pro čistý fullscreen režim nebo dual screen setup.',
            'controls.midi': 'MIDI IN',
            'controls.midi.desc': 'Výběr MIDI vstupního zařízení pro připojení MIDI kontroleru nebo kláves. Po připojení můžete mapovat MIDI signály na ovládací prvky aplikace.',

            // Sequencer
            'sequencer.title': 'Sekvencer',
            'sequencer.intro': 'Výkonný sekvencer pro vytváření komplexních vizuálních kompozic:',
            'sequencer.item1': '<strong>8 Stránek:</strong> Přepínejte mezi různými náladami a scénami celé show',
            'sequencer.item2': '<strong>Flexibilní kroky:</strong> Nastavte 2, 4, 8, nebo 16 kroků podle vašich potřeb',
            'sequencer.item3': '<strong>Drag & Drop:</strong> Jednoduše přetáhněte shadery, videa, 3D modely nebo HTML na jednotlivé kroky',
            'sequencer.item4': '<strong>Looping:</strong> Zacyklete libovolnou část sekvence pro opakující se efekty',
            'sequencer.item5': '<strong>Live VJ Mode:</strong> Aktivujte kroky v reálném čase pomocí klávesnice nebo MIDI',
            'sequencer.item6': '<strong>Kombinace médií:</strong> Každý krok může obsahovat shader, video, 3D model a HTML overlay současně',
            'sequencer.item7': '<strong>Plynulé přechody:</strong> Automatické fade efekty mezi kroky',

            // Tuning Controls
            'tuning.title': 'Tuning Controls',
            'tuning.intro': 'Kompletní sada ovládacích prvků pro jemné doladění vizuálů v reálném čase:',
            'tuning.item1': '<strong>TEMPO:</strong> Nastavte rychlost přehrávání (6-120 BPM)',
            'tuning.item2': '<strong>OVERLAY:</strong> Průhlednost HTML overlay vrstev',
            'tuning.item3': '<strong>AUDIO:</strong> Síla audio-reaktivních efektů',
            'tuning.item4': '<strong>Blur & Glow:</strong> Rozmazání a svítivé efekty',
            'tuning.item5': '<strong>Chroma & Hue Shift:</strong> Barevné transformace',
            'tuning.item6': '<strong>Mandala Segments:</strong> Symetrické efekty',
            'tuning.item7': '<strong>Particles:</strong> Částicové systémy',
            'tuning.item8': '<strong>Saturation:</strong> Intenzita barev a jejich sytost',
            'tuning.item9': '<strong>Speed, Zoom:</strong> Dynamické parametry',
            'tuning.item10': '<strong>Levels:</strong> Shadows, Midtones, Highlights pro profesionální color grading',

            // Shaders Library
            'shaders.title': 'Knihovna Shaderů',
            'shaders.intro': 'Rozsáhlá kolekce profesionálních vizuálních efektů:',
            'shaders.item1': '<strong>150+ předpřipravených shaderů:</strong> Od abstraktních fraktálů přes částicové bouře až po retro glitch art',
            'shaders.item2': '<strong>Kategorizace:</strong> Snadné vyhledávání podle typu efektu',
            'shaders.item3': '<strong>Okamžitý náhled:</strong> Vidíte výsledek ještě před aplikováním',
            'shaders.item4': '<strong>Vlastní shadery:</strong> Vytvářejte si vlastní efekty v GLSL kódu',
            'shaders.item5': '<strong>Monaco Editor:</strong> Profesionální editor s syntax highlighting a autocomplete',
            'shaders.item6': '<strong>Shader kombinace:</strong> Kombinujte více shaderů pro unikátní efekty',
            'shaders.item7': '<strong>Export & Import:</strong> Sdílejte své shadery s komunitou',

            // Media Library
            'media.title': 'Knihovna Médií',
            'media.intro': 'Nahrajte své vlastní fotky a videa - to je hlavní účel aplikace:',
            'media.item1': '<strong>Vaše fotky:</strong> Nahrajte fotky z dovolené, oslav nebo jakékoliv jiné momenty. Podpora všech běžných formátů (JPG, PNG, GIF, WebP).',
            'media.item2': '<strong>Vaše videa:</strong> Načtěte vlastní video klipy a aplikujte na ně vizuální efekty v reálném čase. Perfektní pro promítání doma.',
            'media.item3': '<strong>3D Modely (.obj):</strong> Volitelně přidejte 3D modely pro ještě zajímavější efekty.',
            'media.item4': '<strong>HTML Overlay:</strong> Přidejte vlastní HTML obsah s CSS a JavaScriptem pro interaktivní vrstvy.',
            'media.item5': '<strong>Jednoduché nahrání:</strong> Jednoduše přetáhněte soubory do aplikace nebo použijte tlačítko pro výběr.',
            'media.item6': '<strong>Lokální úložiště:</strong> Všechna vaše média se ukládají lokálně - žádné nahrávání na servery.',
            'media.item7': '<strong>Zdarma pro každého:</strong> Aplikace je kompletně zdarma a dostupná pro všechny.',

            // Performance section
            'performance.title': 'Jednoduché ovládání pro každého',
            'performance.subtitle': 'Haluzator je navržen tak, aby ho mohl používat kdokoliv - od začátečníků po pokročilé uživatele.',
            'performance.simple.title': 'Jednoduché ovládání',
            'performance.simple.desc': 'Přetáhněte soubory, vyberte efekt a hrajte. Žádné složité nastavení.',
            'performance.audio.title': 'Audio reaktivita',
            'performance.audio.desc': 'Připojte mikrofon nebo hudbu a nechte efekty reagovat na zvuk.',
            'performance.home.title': 'Domácí promítání',
            'performance.home.desc': 'Perfektní pro promítání na zeď doma, na party nebo při setkání s přáteli.',

            // How it works
            'howitworks.title': 'Jak to funguje?',
            'howitworks.step1.title': 'Nahrajte',
            'howitworks.step1.desc': 'Nahrajte své fotky nebo videa - jednoduše přetáhněte soubory do aplikace.',
            'howitworks.step2.title': 'Vyberte efekt',
            'howitworks.step2.desc': 'Vyberte jeden z 150+ vizuálních efektů a aplikujte ho na vaše médium.',
            'howitworks.step3.title': 'Promítejte',
            'howitworks.step3.desc': 'Spusťte <em>Spacebarem</em> a promítejte svou úžasnou show!',

            // Users section
            'users.card1.title': 'Pro každého s fotkami a videi',
            'users.card1.subtitle': 'Promítněte své vzpomínky s úžasnými efekty',
            'users.card1.story': 'Máte stovky fotek z dovolené, videa z oslav nebo rodinných setkání? Haluzator vám umožní proměnit tyto vzpomínky v úžasnou vizuální show. Nahrajte své fotky a videa, aplikujte profesionální efekty a promítejte je na zeď během rodinných večerů nebo oslav. Vytvořte si vlastní digitální galerii, která ožije díky dynamickým přechodům a audio-reaktivním efektům. Vaše vzpomínky tak získají nový rozměr a stanou se součástí nezapomenutelných momentů.',

            'users.card2.title': 'Pro domácí uživatele',
            'users.card2.subtitle': 'Vytvořte úžasnou atmosféru na domácích oslavách',
            'users.card2.story': 'Chcete vytvořit nezapomenutelnou atmosféru na narozeninové oslavě, svatbě nebo jen tak při setkání s přáteli? Haluzator je ideálním řešením pro domácí promítání. Připojte projektor nebo použijte velkou televizi, nahrajte fotky hostů nebo tematické videa a nechte je pulzovat do rytmu hudby. S audio-reaktivními efekty se vaše show automaticky synchronizuje s hudbou, kterou hrajete. Vytvořte profesionální atmosféru bez nutnosti složitého nastavení – vše funguje jednoduše a intuitivně.',

            'users.card3.title': 'Pro kreativce a experimentátory',
            'users.card3.subtitle': 'Experimentujte s grafikou bez hranic - zdarma a jednoduše',
            'users.card3.story': 'Jste umělec, designér nebo prostě někdo, kdo miluje experimentování s grafikou? Haluzator vám otevírá nekonečné možnosti kreativního vyjádření. Vytvářejte vlastní shadery v GLSL, kombinujte efekty, experimentujte s 3D modely a HTML overlay vrstvami. S profesionálním Monaco editorem máte plnou kontrolu nad každým aspektem vizuálů. Všechno je zdarma, bez omezení a bez nutnosti složitého nastavení. Sdílejte své kreace s komunitou nebo je používejte pro vlastní projekty. Hranice existují jen ve vaší představivosti.',

            // Download section
            'download.title': 'Začněte promítat své fotky a videa',
            'download.text': 'Stáhněte si aplikaci zdarma, nahrajte své fotky a videa a vytvořte úžasnou vizuální show. Všechna nastavení a média se ukládají lokálně na vašem počítači.',
            'download.box.title': 'Stáhněte si Haluzator zdarma',
            'download.box.subtitle': 'Verze pro Windows | Webová verze - dostupné pro každého',
            'download.button': 'Stáhnout nyní',

            // Footer
            'footer.copyright': '© 2025 Haluzator. Všechna práva vyhrazena.',
            'footer.facebook': 'Facebook',
            'footer.email': 'Email'
        }
    };

    // Get current language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('haluzator-lang') || 'en';

    // Function to set language
    function setLanguage(lang) {
        if (!translations[lang]) {
            console.warn('Language not found:', lang);
            return;
        }

        currentLang = lang;
        localStorage.setItem('haluzator-lang', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update meta title and description
        const title = translations[lang]['meta.title'];
        const description = translations[lang]['meta.description'];
        document.title = title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }

        // Update data-text attribute for liquid effect H1
        const h1Liquid = document.querySelector('h1.liquid[data-i18n]');
        if (h1Liquid) {
            const h1Text = translations[lang][h1Liquid.getAttribute('data-i18n')];
            if (h1Text) {
                h1Liquid.setAttribute('data-text', h1Text);
            }
        }

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translations[lang][key];
                } else {
                    // Special handling for elements with data-text attribute (like H1 liquid effect)
                    if (element.hasAttribute('data-text')) {
                        element.setAttribute('data-text', translations[lang][key]);
                    }
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update language switcher button - show flag of current language
        const langSwitcher = document.getElementById('lang-switcher');
        const langFlag = document.getElementById('lang-flag');
        if (langSwitcher && langFlag) {
            // Set flag based on current language
            if (lang === 'en') {
                langFlag.src = 'img/001-united-kingdom.svg';
                langFlag.alt = 'English';
                langSwitcher.setAttribute('aria-label', 'Switch to Czech');
            } else {
                langFlag.src = 'img/002-czech-republic.svg';
                langFlag.alt = 'Čeština';
                langSwitcher.setAttribute('aria-label', 'Switch to English');
            }
        }
    }

    // Initialize language on page load
    document.addEventListener('DOMContentLoaded', () => {
        setLanguage(currentLang);

        // Add click handler to language switcher button
        const langSwitcher = document.getElementById('lang-switcher');
        if (langSwitcher) {
            langSwitcher.addEventListener('click', () => {
                // Toggle between languages
                const newLang = currentLang === 'en' ? 'cs' : 'en';
                setLanguage(newLang);
            });
        }
    });

    // Export for external use
    window.i18n = {
        setLanguage: setLanguage,
        getLanguage: () => currentLang,
        t: (key) => translations[currentLang][key] || key
    };
})();

