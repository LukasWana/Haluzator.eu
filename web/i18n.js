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
            'download.warning': 'Note: The application is not digitally signed. When Windows shows a security warning, click "More info" or "More" and then "Run anyway" to proceed.',

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
            'download.warning': 'Poznámka: Aplikace není digitálně podepsaná. Když Windows zobrazí bezpečnostní varování, klikněte na "Další informace" nebo "Více" a poté na "Přesto spustit" pro pokračování.',

            // Footer
            'footer.copyright': '© 2025 Haluzator. Všechna práva vyhrazena.',
            'footer.facebook': 'Facebook',
            'footer.email': 'Email'
        },
        sk: {
            // Meta
            'meta.title': 'Haluzator - Dirigent vášho vizuálneho vesmíru',
            'meta.description': 'Zdarma dostupná aplikácia pre domáce premietanie. Nahrajte svoje fotky a videá a vytvorte úžasnú vizuálnu show s profesionálnymi efektmi.',

            // Navigation
            'nav.download': 'Stiahnuť exe súbor',
            'nav.try': 'Vyskúšať v prehliadači',

            // Hero section
            'hero.title': 'Show efekty v rytme vašej hudby',
            'hero.subtitle': 'Jednoduchá aplikácia pre domáce premietanie. Nahrajte svoje fotky a videá, pridajte efekty a vytvorte úžasnú vizuálnu show. Zdarma pre Windows aj web.',
            'hero.download': 'Stiahnuť exe súbor',
            'hero.try': 'Vyskúšať v prehliadači',
            'hero.testmode': 'Funkčný prototyp v testovacom režime',

            // Intro section
            'intro.title': 'Čo je to haluzator',
            'intro.text': 'Haluzator je <strong>zdarma dostupná aplikácia pre každého</strong>, kto chce premietať svoje vlastné fotky a videá s úžasnými efektmi. Ideálne pre <strong>domáce premietanie, party alebo kreatívne projekty</strong>. Nahrajte svoje médium, vyberte efekt a nechajte grafiku pulzovať do rytmu hudby.',

            // Features section
            'features.title': 'Prečo si ho zamilujete?',
            'features.upload.title': 'Nahrajte svoje fotky a videá',
            'features.upload.text': 'Hlavný účel aplikácie: <strong>premietať váš vlastný obsah</strong>. Nahrajte fotky z dovolenky, videá zo osláv alebo akýkoľvek iný obsah a premieňte ho v úžasnú vizuálnu show.',
            'features.upload.item1': 'Podpora všetkých bežných formátov (JPG, PNG, MP4, WebM)',
            'features.upload.item2': 'Jednoduché nahratie pretiahnutím súboru',
            'features.upload.item3': 'Okamžitý náhľad: Všetko vidíte v reálnom čase',

            'features.effects.title': '150+ vizuálnych efektov',
            'features.effects.text': 'Pridajte profesionálne efekty vďaka dynamickým shaderom – pokročilým GPU filtrom pre real-time transformáciu obrazu. Kaleidoskopy, audio-reaktívne efekty a abstraktné vizuály, všetko plynule a bez spomalenia.',
            'features.effects.item1': '<strong>Shadery:</strong> Viac ako 150 predpripravených efektov pre každý vkus',
            'features.effects.item2': '<strong>3D Modely:</strong> Voliteľne pridajte 3D objekty (.obj)',
            'features.effects.item3': '<strong>HTML Overlay:</strong> Pridajte texty alebo vlastnú grafiku',

            'features.mixer.title': 'Visual Show Mixer',
            'features.mixer.text': 'Vytvárajte plynulé prechody medzi vašimi médiami s crossfade efektmi, vrstvením a rôznymi blend režimami. Mixujte videá, fotky a shadery v reálnom čase pre profesionálny vizuálny flow.',
            'features.mixer.item1': '<strong>8 Stránok:</strong> Prepínajte medzi rôznymi časťami vašej show',
            'features.mixer.item2': '<strong>Rytmické kroky:</strong> Synchronizujte s hudbou',
            'features.mixer.item3': '<strong>Looping:</strong> Zacyklite svoje obľúbené momenty',

            // Controls section
            'controls.title': 'Ovládacie prvky a funkcie',
            'controls.subtitle': 'Kompletný prehľad všetkých tlačidiel a funkcií v hlavnom paneli aplikácie. Každé tlačidlo vám dáva kontrolu nad vizuálnou show:',
            'controls.fps': 'FPS',
            'controls.fps.desc': 'Zobrazenie aktuálneho počtu snímkov za sekundu. Sledujte výkon renderovania v reálnom čase a optimalizujte nastavenia pre plynulú vizualizáciu.',
            'controls.play': 'Play / Pause',
            'controls.play.desc': 'Spustite alebo pozastavte prehrávanie vizuálov. Klávesová skratka: <strong>Medzerník</strong>',
            'controls.microphone': 'Mikrofón',
            'controls.microphone.desc': 'Zapnite alebo vypnite audio vstup z mikrofónu pre audio-reaktívne efekty. Vizuály reagujú na hudbu v reálnom čase.',
            'controls.fullscreen': 'Fullscreen',
            'controls.fullscreen.desc': 'Prepnite do celoobrazovkového režimu pre perfektnú VJ show bez rušivých prvkov.',
            'controls.projection': 'Projekčné okno',
            'controls.projection.desc': 'Otvorte samostatné okno pre projektor, zatiaľ čo ovládate z hlavného okna. Perfektné pre živé vystúpenie.',
            'controls.save': 'Uložiť',
            'controls.save.desc': 'Uložte celú vašu session vrátane všetkých efektov, médií a nastavení do jedného súboru. Všetky dáta zostávajú na vašom zariadení.',
            'controls.load': 'Načítať',
            'controls.load.desc': 'Načítajte predtým uloženú session. Obnovte všetky vaše efekty, sekvencie a nastavenia jedným kliknutím.',
            'controls.ui-toggle': 'Skryť UI prvky',
            'controls.ui-toggle.desc': 'Skryjte alebo zobrazte ovládacie panely (Controls, Sequencer, Right Panel). Ideálne pre čistý fullscreen režim alebo dual screen setup.',
            'controls.midi': 'MIDI IN',
            'controls.midi.desc': 'Výber MIDI vstupného zariadenia pre pripojenie MIDI kontrolera alebo kláves. Po pripojení môžete mapovať MIDI signály na ovládacie prvky aplikácie.',

            // Sequencer
            'sequencer.title': 'Sekvencer',
            'sequencer.intro': 'Výkonný sekvencer pre vytváranie komplexných vizuálnych kompozícií:',
            'sequencer.item1': '<strong>8 Stránok:</strong> Prepínajte medzi rôznymi náladami a scénami celej show',
            'sequencer.item2': '<strong>Flexibilné kroky:</strong> Nastavte 2, 4, 8, alebo 16 krokov podľa vašich potrieb',
            'sequencer.item3': '<strong>Drag & Drop:</strong> Jednoducho pretiahnite shadery, videá, 3D modely alebo HTML na jednotlivé kroky',
            'sequencer.item4': '<strong>Looping:</strong> Zacyklite ľubovoľnú časť sekvencie pre opakujúce sa efekty',
            'sequencer.item5': '<strong>Live VJ Mode:</strong> Aktivujte kroky v reálnom čase pomocou klávesnice alebo MIDI',
            'sequencer.item6': '<strong>Kombinácie médií:</strong> Každý krok môže obsahovať shader, video, 3D model a HTML overlay súčasne',
            'sequencer.item7': '<strong>Plynulé prechody:</strong> Automatické fade efekty medzi krokmi',

            // Tuning Controls
            'tuning.title': 'Tuning Controls',
            'tuning.intro': 'Kompletná sada ovládacích prvkov pre jemné doladenie vizuálov v reálnom čase:',
            'tuning.item1': '<strong>TEMPO:</strong> Nastavte rýchlosť prehrávania (6-120 BPM)',
            'tuning.item2': '<strong>OVERLAY:</strong> Priehľadnosť HTML overlay vrstiev',
            'tuning.item3': '<strong>AUDIO:</strong> Sila audio-reaktívnych efektov',
            'tuning.item4': '<strong>Blur & Glow:</strong> Rozmazanie a svietivé efekty',
            'tuning.item5': '<strong>Chroma & Hue Shift:</strong> Farebné transformácie',
            'tuning.item6': '<strong>Mandala Segments:</strong> Symetrické efekty',
            'tuning.item7': '<strong>Particles:</strong> Časticové systémy',
            'tuning.item8': '<strong>Saturation:</strong> Intenzita farieb a ich sýtosť',
            'tuning.item9': '<strong>Speed, Zoom:</strong> Dynamické parametre',
            'tuning.item10': '<strong>Levels:</strong> Shadows, Midtones, Highlights pre profesionálny color grading',

            // Shaders Library
            'shaders.title': 'Knižnica Shaderov',
            'shaders.intro': 'Rozsiahla kolekcia profesionálnych vizuálnych efektov:',
            'shaders.item1': '<strong>150+ predpripravených shaderov:</strong> Od abstraktných fraktálov cez časticové búrky až po retro glitch art',
            'shaders.item2': '<strong>Kategorizácia:</strong> Ľahké vyhľadávanie podľa typu efektu',
            'shaders.item3': '<strong>Okamžitý náhľad:</strong> Vidíte výsledok ešte pred aplikovaním',
            'shaders.item4': '<strong>Vlastné shadery:</strong> Vytvárajte si vlastné efekty v GLSL kóde',
            'shaders.item5': '<strong>Monaco Editor:</strong> Profesionálny editor s syntax highlighting a autocomplete',
            'shaders.item6': '<strong>Shader kombinácie:</strong> Kombinujte viac shaderov pre unikátne efekty',
            'shaders.item7': '<strong>Export & Import:</strong> Zdieľajte svoje shadery s komunitou',

            // Media Library
            'media.title': 'Knižnica Médií',
            'media.intro': 'Nahrajte svoje vlastné fotky a videá - to je hlavný účel aplikácie:',
            'media.item1': '<strong>Vaše fotky:</strong> Nahrajte fotky z dovolenky, osláv alebo akékoľvek iné momenty. Podpora všetkých bežných formátov (JPG, PNG, GIF, WebP).',
            'media.item2': '<strong>Vaše videá:</strong> Načítajte vlastné video klipy a aplikujte na ne vizuálne efekty v reálnom čase. Perfektné pre premietanie doma.',
            'media.item3': '<strong>3D Modely (.obj):</strong> Voliteľne pridajte 3D modely pre ešte zaujímavejšie efekty.',
            'media.item4': '<strong>HTML Overlay:</strong> Pridajte vlastný HTML obsah s CSS a JavaScriptom pre interaktívne vrstvy.',
            'media.item5': '<strong>Jednoduché nahratie:</strong> Jednoducho pretiahnite súbory do aplikácie alebo použite tlačidlo pre výber.',
            'media.item6': '<strong>Lokálne úložisko:</strong> Všetky vaše médiá sa ukladajú lokálne - žiadne nahrávanie na servery.',
            'media.item7': '<strong>Zdarma pre každého:</strong> Aplikácia je kompletne zdarma a dostupná pre všetkých.',

            // Performance section
            'performance.title': 'Jednoduché ovládanie pre každého',
            'performance.subtitle': 'Haluzator je navrhnutý tak, aby ho mohol používať ktokoľvek - od začiatočníkov po pokročilých používateľov.',
            'performance.simple.title': 'Jednoduché ovládanie',
            'performance.simple.desc': 'Pretiahnite súbory, vyberte efekt a hrajte. Žiadne zložité nastavenie.',
            'performance.audio.title': 'Audio reaktivita',
            'performance.audio.desc': 'Pripojte mikrofón alebo hudbu a nechajte efekty reagovať na zvuk.',
            'performance.home.title': 'Domáce premietanie',
            'performance.home.desc': 'Perfektné pre premietanie na stenu doma, na party alebo pri stretnutí s priateľmi.',

            // How it works
            'howitworks.title': 'Ako to funguje?',
            'howitworks.step1.title': 'Nahrajte',
            'howitworks.step1.desc': 'Nahrajte svoje fotky alebo videá - jednoducho pretiahnite súbory do aplikácie.',
            'howitworks.step2.title': 'Vyberte efekt',
            'howitworks.step2.desc': 'Vyberte jeden z 150+ vizuálnych efektov a aplikujte ho na vaše médium.',
            'howitworks.step3.title': 'Premietajte',
            'howitworks.step3.desc': 'Spustite <em>Spacebarom</em> a premietajte svoju úžasnú show!',

            // Users section
            'users.card1.title': 'Pre každého s fotkami a videami',
            'users.card1.subtitle': 'Premietnite svoje spomienky s úžasnými efektmi',
            'users.card1.story': 'Máte stovky fotiek z dovolenky, videá zo osláv alebo rodinných stretnutí? Haluzator vám umožní premieňať tieto spomienky v úžasnú vizuálnu show. Nahrajte svoje fotky a videá, aplikujte profesionálne efekty a premietajte ich na stenu počas rodinných večerov alebo osláv. Vytvorte si vlastnú digitálnu galériu, ktorá ožije vďaka dynamickým prechodom a audio-reaktívnym efektom. Vaše spomienky tak získajú nový rozmer a stanú sa súčasťou nezabudnuteľných momentov.',

            'users.card2.title': 'Pre domácich používateľov',
            'users.card2.subtitle': 'Vytvorte úžasnú atmosféru na domácich oslavách',
            'users.card2.story': 'Chcete vytvoriť nezabudnuteľnú atmosféru na narodeninovej oslave, svadbe alebo len tak pri stretnutí s priateľmi? Haluzator je ideálnym riešením pre domáce premietanie. Pripojte projektor alebo použite veľkú televíziu, nahrajte fotky hostí alebo tematické videá a nechajte ich pulzovať do rytmu hudby. S audio-reaktívnymi efektmi sa vaša show automaticky synchronizuje s hudbou, ktorú hráte. Vytvorte profesionálnu atmosféru bez nutnosti zložitého nastavenia – všetko funguje jednoducho a intuitívne.',

            'users.card3.title': 'Pre kreatívcov a experimentátorov',
            'users.card3.subtitle': 'Experimentujte s grafikou bez hraníc - zdarma a jednoducho',
            'users.card3.story': 'Ste umelec, dizajnér alebo jednoducho niekto, kto miluje experimentovanie s grafikou? Haluzator vám otvára nekonečné možnosti kreatívneho vyjadrenia. Vytvárajte vlastné shadery v GLSL, kombinujte efekty, experimentujte s 3D modelmi a HTML overlay vrstvami. S profesionálnym Monaco editorom máte plnú kontrolu nad každým aspektom vizuálov. Všetko je zdarma, bez obmedzení a bez nutnosti zložitého nastavenia. Zdieľajte svoje kreácie s komunitou alebo ich používajte pre vlastné projekty. Hranice existujú len vo vašej predstavivosti.',

            // Download section
            'download.title': 'Začnite premietať svoje fotky a videá',
            'download.text': 'Stiahnite si aplikáciu zdarma, nahrajte svoje fotky a videá a vytvorte úžasnú vizuálnu show. Všetky nastavenia a médiá sa ukladajú lokálne na vašom počítači.',
            'download.box.title': 'Stiahnite si Haluzator zdarma',
            'download.box.subtitle': 'Verzia pre Windows | Webová verzia - dostupné pre každého',
            'download.button': 'Stiahnuť teraz',
            'download.warning': 'Poznámka: Aplikácia nie je digitálne podpísaná. Keď Windows zobrazí bezpečnostné varovanie, kliknite na "Ďalšie informácie" alebo "Viac" a potom na "Napriek tomu spustiť" pre pokračovanie.',

            // Footer
            'footer.copyright': '© 2025 Haluzator. Všetky práva vyhradené.',
            'footer.facebook': 'Facebook',
            'footer.email': 'Email'
        },
        de: {
            // Meta
            'meta.title': 'Haluzator - Dirigent Ihres visuellen Universums',
            'meta.description': 'Kostenlose Anwendung für Heimprojektion. Laden Sie Ihre Fotos und Videos hoch und erstellen Sie erstaunliche visuelle Shows mit professionellen Effekten.',

            // Navigation
            'nav.download': 'Standalone exe herunterladen',
            'nav.try': 'Im Browser ausprobieren',

            // Hero section
            'hero.title': 'Zeigen Sie Effekte im Rhythmus Ihrer Musik',
            'hero.subtitle': 'Einfache Anwendung für Heimprojektion. Laden Sie Ihre Fotos und Videos hoch, fügen Sie Effekte hinzu und erstellen Sie erstaunliche visuelle Shows. Kostenlos für Windows und Web.',
            'hero.download': 'Standalone exe herunterladen',
            'hero.try': 'Im Browser ausprobieren',
            'hero.testmode': 'Funktionsprototyp im Testmodus',

            // Intro section
            'intro.title': 'Was ist Haluzator',
            'intro.text': 'Haluzator ist eine <strong>kostenlose Anwendung für alle</strong>, die ihre eigenen Fotos und Videos mit erstaunlichen Effekten projizieren möchten. Perfekt für <strong>Heimprojektion, Partys oder kreative Projekte</strong>. Laden Sie Ihre Medien hoch, wählen Sie einen Effekt und lassen Sie die Grafik im Rhythmus der Musik pulsieren.',

            // Features section
            'features.title': 'Warum werden Sie es lieben?',
            'features.upload.title': 'Laden Sie Ihre Fotos und Videos hoch',
            'features.upload.text': 'Hauptzweck der Anwendung: <strong>Projizieren Sie Ihre eigenen Inhalte</strong>. Laden Sie Urlaubsfotos, Feiervideos oder andere Inhalte hoch und verwandeln Sie sie in eine erstaunliche visuelle Show.',
            'features.upload.item1': 'Unterstützung für alle gängigen Formate (JPG, PNG, MP4, WebM)',
            'features.upload.item2': 'Einfaches Hochladen durch Ziehen von Dateien',
            'features.upload.item3': 'Sofortige Vorschau: Sehen Sie alles in Echtzeit',

            'features.effects.title': '150+ visuelle Effekte',
            'features.effects.text': 'Fügen Sie professionelle Effekte mit dynamischen Shadern hinzu – erweiterte GPU-Filter für Echtzeit-Bildtransformation. Kaleidoskope, audio-reaktive Effekte und abstrakte Visuals, alles flüssig und ohne Verzögerung.',
            'features.effects.item1': '<strong>Shader:</strong> Mehr als 150 vorgefertigte Effekte für jeden Geschmack',
            'features.effects.item2': '<strong>3D-Modelle:</strong> Optional 3D-Objekte (.obj) hinzufügen',
            'features.effects.item3': '<strong>HTML Overlay:</strong> Texte oder benutzerdefinierte Grafiken hinzufügen',

            'features.mixer.title': 'Visual Show Mixer',
            'features.mixer.text': 'Erstellen Sie flüssige Übergänge zwischen Ihren Medien mit Crossfade-Effekten, Layering und verschiedenen Blend-Modi. Mischen Sie Videos, Fotos und Shader in Echtzeit für professionellen visuellen Flow.',
            'features.mixer.item1': '<strong>8 Seiten:</strong> Wechseln Sie zwischen verschiedenen Teilen Ihrer Show',
            'features.mixer.item2': '<strong>Rhythmische Schritte:</strong> Synchronisieren Sie mit Musik',
            'features.mixer.item3': '<strong>Looping:</strong> Loopen Sie Ihre Lieblingsmomente',

            // Controls section
            'controls.title': 'Steuerelemente und Funktionen',
            'controls.subtitle': 'Vollständige Übersicht über alle Schaltflächen und Funktionen im Hauptanwendungsbereich. Jede Schaltfläche gibt Ihnen Kontrolle über die visuelle Show:',
            'controls.fps': 'FPS',
            'controls.fps.desc': 'Anzeige der aktuellen Bilder pro Sekunde. Überwachen Sie die Rendering-Leistung in Echtzeit und optimieren Sie die Einstellungen für flüssige Visualisierung.',
            'controls.play': 'Play / Pause',
            'controls.play.desc': 'Visuelle Wiedergabe starten oder pausieren. Tastenkürzel: <strong>Leertaste</strong>',
            'controls.microphone': 'Mikrofon',
            'controls.microphone.desc': 'Audioeingang vom Mikrofon für audio-reaktive Effekte ein- oder ausschalten. Visuals reagieren in Echtzeit auf Musik.',
            'controls.fullscreen': 'Vollbild',
            'controls.fullscreen.desc': 'Wechseln Sie in den Vollbildmodus für eine perfekte VJ-Show ohne ablenkende Elemente.',
            'controls.projection': 'Projektionsfenster',
            'controls.projection.desc': 'Öffnen Sie ein separates Fenster für den Projektor, während Sie vom Hauptfenster aus steuern. Perfekt für Live-Performances.',
            'controls.save': 'Speichern',
            'controls.save.desc': 'Speichern Sie Ihre gesamte Sitzung einschließlich aller Effekte, Medien und Einstellungen in einer einzigen Datei. Alle Daten bleiben auf Ihrem Gerät.',
            'controls.load': 'Laden',
            'controls.load.desc': 'Laden Sie eine zuvor gespeicherte Sitzung. Stellen Sie alle Ihre Effekte, Sequenzen und Einstellungen mit einem Klick wieder her.',
            'controls.ui-toggle': 'UI-Elemente ausblenden',
            'controls.ui-toggle.desc': 'Steuerungsfelder ausblenden oder anzeigen (Controls, Sequencer, Right Panel). Ideal für den sauberen Vollbildmodus oder Dual-Screen-Setup.',
            'controls.midi': 'MIDI IN',
            'controls.midi.desc': 'Auswahl des MIDI-Eingabegeräts zum Anschließen eines MIDI-Controllers oder einer Tastatur. Nach dem Anschluss können Sie MIDI-Signale auf Anwendungssteuerungen mappen.',

            // Sequencer
            'sequencer.title': 'Sequencer',
            'sequencer.intro': 'Leistungsstarker Sequencer zum Erstellen komplexer visueller Kompositionen:',
            'sequencer.item1': '<strong>8 Seiten:</strong> Wechseln Sie zwischen verschiedenen Stimmungen und Szenen der gesamten Show',
            'sequencer.item2': '<strong>Flexible Schritte:</strong> Stellen Sie 2, 4, 8 oder 16 Schritte nach Ihren Bedürfnissen ein',
            'sequencer.item3': '<strong>Drag & Drop:</strong> Ziehen Sie einfach Shader, Videos, 3D-Modelle oder HTML auf einzelne Schritte',
            'sequencer.item4': '<strong>Looping:</strong> Loopen Sie jeden Teil der Sequenz für wiederholende Effekte',
            'sequencer.item5': '<strong>Live VJ-Modus:</strong> Aktivieren Sie Schritte in Echtzeit mit Tastatur oder MIDI',
            'sequencer.item6': '<strong>Medienkombinationen:</strong> Jeder Schritt kann gleichzeitig Shader, Video, 3D-Modell und HTML-Overlay enthalten',
            'sequencer.item7': '<strong>Flüssige Übergänge:</strong> Automatische Fade-Effekte zwischen Schritten',

            // Tuning Controls
            'tuning.title': 'Tuning Controls',
            'tuning.intro': 'Vollständiger Satz von Steuerelementen zur Feinabstimmung von Visuals in Echtzeit:',
            'tuning.item1': '<strong>TEMPO:</strong> Wiedergabegeschwindigkeit einstellen (6-120 BPM)',
            'tuning.item2': '<strong>OVERLAY:</strong> Transparenz von HTML-Overlay-Ebenen',
            'tuning.item3': '<strong>AUDIO:</strong> Stärke der audio-reaktiven Effekte',
            'tuning.item4': '<strong>Blur & Glow:</strong> Unschärfe- und Leuchteffekte',
            'tuning.item5': '<strong>Chroma & Hue Shift:</strong> Farbtransformationen',
            'tuning.item6': '<strong>Mandala Segments:</strong> Symmetrische Effekte',
            'tuning.item7': '<strong>Particles:</strong> Partikelsysteme',
            'tuning.item8': '<strong>Saturation:</strong> Farbintensität und Sättigung',
            'tuning.item9': '<strong>Speed, Zoom:</strong> Dynamische Parameter',
            'tuning.item10': '<strong>Levels:</strong> Schatten, Mitteltöne, Highlights für professionelles Color Grading',

            // Shaders Library
            'shaders.title': 'Shader-Bibliothek',
            'shaders.intro': 'Umfangreiche Sammlung professioneller visueller Effekte:',
            'shaders.item1': '<strong>150+ vorgefertigte Shader:</strong> Von abstrakten Fraktalen über Partikelstürme bis hin zu Retro-Glitch-Art',
            'shaders.item2': '<strong>Kategorisierung:</strong> Einfache Suche nach Effekttyp',
            'shaders.item3': '<strong>Sofortige Vorschau:</strong> Sehen Sie das Ergebnis vor dem Anwenden',
            'shaders.item4': '<strong>Benutzerdefinierte Shader:</strong> Erstellen Sie Ihre eigenen Effekte in GLSL-Code',
            'shaders.item5': '<strong>Monaco Editor:</strong> Professioneller Editor mit Syntax-Hervorhebung und Autovervollständigung',
            'shaders.item6': '<strong>Shader-Kombinationen:</strong> Kombinieren Sie mehrere Shader für einzigartige Effekte',
            'shaders.item7': '<strong>Export & Import:</strong> Teilen Sie Ihre Shader mit der Community',

            // Media Library
            'media.title': 'Medienbibliothek',
            'media.intro': 'Laden Sie Ihre eigenen Fotos und Videos hoch - das ist der Hauptzweck der Anwendung:',
            'media.item1': '<strong>Ihre Fotos:</strong> Laden Sie Fotos aus dem Urlaub, von Feiern oder anderen Momenten hoch. Unterstützung für alle gängigen Formate (JPG, PNG, GIF, WebP).',
            'media.item2': '<strong>Ihre Videos:</strong> Laden Sie Ihre eigenen Videoclips hoch und wenden Sie visuelle Effekte in Echtzeit darauf an. Perfekt für Heimprojektion.',
            'media.item3': '<strong>3D-Modelle (.obj):</strong> Optional 3D-Modelle für noch interessantere Effekte hinzufügen.',
            'media.item4': '<strong>HTML Overlay:</strong> Fügen Sie benutzerdefinierten HTML-Inhalt mit CSS und JavaScript für interaktive Ebenen hinzu.',
            'media.item5': '<strong>Einfaches Hochladen:</strong> Ziehen Sie Dateien einfach in die Anwendung oder verwenden Sie die Schaltfläche zur Auswahl.',
            'media.item6': '<strong>Lokaler Speicher:</strong> Alle Ihre Medien werden lokal gespeichert - kein Hochladen auf Server.',
            'media.item7': '<strong>Kostenlos für alle:</strong> Die Anwendung ist vollständig kostenlos und für alle verfügbar.',

            // Performance section
            'performance.title': 'Einfache Steuerung für alle',
            'performance.subtitle': 'Haluzator ist so konzipiert, dass jeder es verwenden kann - vom Anfänger bis zum fortgeschrittenen Benutzer.',
            'performance.simple.title': 'Einfache Steuerung',
            'performance.simple.desc': 'Dateien ziehen, Effekt auswählen und abspielen. Keine komplizierte Einrichtung.',
            'performance.audio.title': 'Audio-Reaktivität',
            'performance.audio.desc': 'Schließen Sie ein Mikrofon oder Musik an und lassen Sie Effekte auf den Sound reagieren.',
            'performance.home.title': 'Heimprojektion',
            'performance.home.desc': 'Perfekt für Projektion an der Wand zu Hause, bei Partys oder beim Treffen mit Freunden.',

            // How it works
            'howitworks.title': 'Wie funktioniert es?',
            'howitworks.step1.title': 'Hochladen',
            'howitworks.step1.desc': 'Laden Sie Ihre Fotos oder Videos hoch - ziehen Sie einfach Dateien in die Anwendung.',
            'howitworks.step2.title': 'Effekt wählen',
            'howitworks.step2.desc': 'Wählen Sie einen von 150+ visuellen Effekten und wenden Sie ihn auf Ihre Medien an.',
            'howitworks.step3.title': 'Projizieren',
            'howitworks.step3.desc': 'Starten Sie mit <em>Leertaste</em> und projizieren Sie Ihre erstaunliche Show!',

            // Users section
            'users.card1.title': 'Für alle mit Fotos und Videos',
            'users.card1.subtitle': 'Projizieren Sie Ihre Erinnerungen mit erstaunlichen Effekten',
            'users.card1.story': 'Haben Sie Hunderte von Fotos aus dem Urlaub, Videos von Feiern oder Familientreffen? Haluzator ermöglicht es Ihnen, diese Erinnerungen in eine erstaunliche visuelle Show zu verwandeln. Laden Sie Ihre Fotos und Videos hoch, wenden Sie professionelle Effekte an und projizieren Sie sie an die Wand während Familienabenden oder Feiern. Erstellen Sie Ihre eigene digitale Galerie, die dank dynamischer Übergänge und audio-reaktiver Effekte zum Leben erweckt wird. Ihre Erinnerungen erhalten so eine neue Dimension und werden Teil unvergesslicher Momente.',

            'users.card2.title': 'Für Heimanwender',
            'users.card2.subtitle': 'Schaffen Sie erstaunliche Atmosphäre bei Heimfeiern',
            'users.card2.story': 'Möchten Sie eine unvergessliche Atmosphäre bei einer Geburtstagsfeier, Hochzeit oder einfach beim Treffen mit Freunden schaffen? Haluzator ist die ideale Lösung für Heimprojektion. Schließen Sie einen Projektor an oder verwenden Sie einen großen Fernseher, laden Sie Fotos von Gästen oder thematische Videos hoch und lassen Sie sie im Rhythmus der Musik pulsieren. Mit audio-reaktiven Effekten synchronisiert sich Ihre Show automatisch mit der Musik, die Sie abspielen. Schaffen Sie eine professionelle Atmosphäre ohne komplizierte Einrichtung - alles funktioniert einfach und intuitiv.',

            'users.card3.title': 'Für Kreative und Experimentierfreudige',
            'users.card3.subtitle': 'Experimentieren Sie ohne Grenzen mit Grafik - kostenlos und einfach',
            'users.card3.story': 'Sind Sie ein Künstler, Designer oder einfach jemand, der gerne mit Grafik experimentiert? Haluzator eröffnet endlose Möglichkeiten für kreativen Ausdruck. Erstellen Sie Ihre eigenen Shader in GLSL, kombinieren Sie Effekte, experimentieren Sie mit 3D-Modellen und HTML-Overlay-Ebenen. Mit dem professionellen Monaco-Editor haben Sie vollständige Kontrolle über jeden Aspekt der Visuals. Alles ist kostenlos, ohne Einschränkungen und ohne komplizierte Einrichtung. Teilen Sie Ihre Kreationen mit der Community oder verwenden Sie sie für Ihre eigenen Projekte. Die Grenzen existieren nur in Ihrer Vorstellungskraft.',

            // Download section
            'download.title': 'Beginnen Sie, Ihre Fotos und Videos zu projizieren',
            'download.text': 'Laden Sie die Anwendung kostenlos herunter, laden Sie Ihre Fotos und Videos hoch und erstellen Sie eine erstaunliche visuelle Show. Alle Einstellungen und Medien werden lokal auf Ihrem Computer gespeichert.',
            'download.box.title': 'Laden Sie Haluzator kostenlos herunter',
            'download.box.subtitle': 'Windows-Version | Web-Version - für alle verfügbar',
            'download.button': 'Jetzt herunterladen',
            'download.warning': 'Hinweis: Die Anwendung ist nicht digital signiert. Wenn Windows eine Sicherheitswarnung anzeigt, klicken Sie auf "Weitere Informationen" oder "Mehr" und dann auf "Trotzdem ausführen", um fortzufahren.',

            // Footer
            'footer.copyright': '© 2025 Haluzator. Alle Rechte vorbehalten.',
            'footer.facebook': 'Facebook',
            'footer.email': 'Email'
        },
        pl: {
            // Meta
            'meta.title': 'Haluzator - Dyrygent Twojego wizualnego wszechświata',
            'meta.description': 'Darmowa aplikacja do projekcji domowej. Prześlij swoje zdjęcia i filmy oraz twórz niesamowite pokazy wizualne z profesjonalnymi efektami.',

            // Navigation
            'nav.download': 'Pobierz samodzielny plik exe',
            'nav.try': 'Wypróbuj w przeglądarce',

            // Hero section
            'hero.title': 'Pokazuj efekty w rytmie swojej muzyki',
            'hero.subtitle': 'Prosta aplikacja do projekcji domowej. Prześlij swoje zdjęcia i filmy, dodaj efekty i twórz niesamowite pokazy wizualne. Darmowa dla Windows i sieci.',
            'hero.download': 'Pobierz samodzielny plik exe',
            'hero.try': 'Wypróbuj w przeglądarce',
            'hero.testmode': 'Funkcjonalny prototyp w trybie testowym',

            // Intro section
            'intro.title': 'Czym jest Haluzator',
            'intro.text': 'Haluzator to <strong>darmowa aplikacja dla każdego</strong>, kto chce wyświetlać swoje własne zdjęcia i filmy z niesamowitymi efektami. Idealna do <strong>projekcji domowej, imprez lub projektów kreatywnych</strong>. Prześlij swoje media, wybierz efekt i pozwól grafice pulsować w rytmie muzyki.',

            // Features section
            'features.title': 'Dlaczego pokochasz tę aplikację?',
            'features.upload.title': 'Prześlij swoje zdjęcia i filmy',
            'features.upload.text': 'Główny cel aplikacji: <strong>wyświetlaj własną zawartość</strong>. Prześlij zdjęcia z wakacji, filmy z uroczystości lub inną zawartość i przekształć je w niesamowity pokaz wizualny.',
            'features.upload.item1': 'Obsługa wszystkich popularnych formatów (JPG, PNG, MP4, WebM)',
            'features.upload.item2': 'Proste przesyłanie przez przeciąganie plików',
            'features.upload.item3': 'Natychmiastowy podgląd: Zobacz wszystko w czasie rzeczywistym',

            'features.effects.title': '150+ efektów wizualnych',
            'features.effects.text': 'Dodaj profesjonalne efekty dzięki dynamicznym shaderom – zaawansowanym filtrom GPU do transformacji obrazu w czasie rzeczywistym. Kalejdoskopy, efekty reagujące na dźwięk i abstrakcyjne wizualizacje, wszystko płynnie i bez spowolnienia.',
            'features.effects.item1': '<strong>Shadery:</strong> Ponad 150 gotowych efektów na każdy gust',
            'features.effects.item2': '<strong>Modele 3D:</strong> Opcjonalnie dodaj obiekty 3D (.obj)',
            'features.effects.item3': '<strong>HTML Overlay:</strong> Dodaj teksty lub niestandardową grafikę',

            'features.mixer.title': 'Mikser pokazów wizualnych',
            'features.mixer.text': 'Twórz płynne przejścia między swoimi mediami dzięki efektom crossfade, warstwom i różnym trybom mieszania. Mieszaj filmy, zdjęcia i shadery w czasie rzeczywistym dla profesjonalnego przepływu wizualnego.',
            'features.mixer.item1': '<strong>8 Stron:</strong> Przełączaj się między różnymi częściami swojego pokazu',
            'features.mixer.item2': '<strong>Rytmiczne kroki:</strong> Synchronizuj z muzyką',
            'features.mixer.item3': '<strong>Zapętlanie:</strong> Zapętlaj swoje ulubione momenty',

            // Controls section
            'controls.title': 'Elementy sterujące i funkcje',
            'controls.subtitle': 'Pełny przegląd wszystkich przycisków i funkcji w głównym panelu aplikacji. Każdy przycisk daje kontrolę nad pokazem wizualnym:',
            'controls.fps': 'FPS',
            'controls.fps.desc': 'Wyświetlanie aktualnej liczby klatek na sekundę. Monitoruj wydajność renderowania w czasie rzeczywistym i optymalizuj ustawienia dla płynnej wizualizacji.',
            'controls.play': 'Odtwarzaj / Pauza',
            'controls.play.desc': 'Rozpocznij lub wstrzymaj odtwarzanie wizualne. Skrót klawiszowy: <strong>Spacja</strong>',
            'controls.microphone': 'Mikrofon',
            'controls.microphone.desc': 'Włącz lub wyłącz wejście audio z mikrofonu dla efektów reagujących na dźwięk. Wizualizacje reagują na muzykę w czasie rzeczywistym.',
            'controls.fullscreen': 'Pełny ekran',
            'controls.fullscreen.desc': 'Przełącz się w tryb pełnoekranowy dla idealnego pokazu VJ bez rozpraszających elementów.',
            'controls.projection': 'Okno projekcji',
            'controls.projection.desc': 'Otwórz oddzielne okno dla projektora, kontrolując z głównego okna. Idealne do występów na żywo.',
            'controls.save': 'Zapisz',
            'controls.save.desc': 'Zapisz całą sesję, w tym wszystkie efekty, media i ustawienia w jednym pliku. Wszystkie dane pozostają na Twoim urządzeniu.',
            'controls.load': 'Załaduj',
            'controls.load.desc': 'Załaduj wcześniej zapisaną sesję. Przywróć wszystkie swoje efekty, sekwencje i ustawienia jednym kliknięciem.',
            'controls.ui-toggle': 'Ukryj elementy interfejsu',
            'controls.ui-toggle.desc': 'Ukryj lub pokaż panele sterowania (Controls, Sequencer, Right Panel). Idealne do czystego trybu pełnoekranowego lub konfiguracji podwójnego ekranu.',
            'controls.midi': 'MIDI IN',
            'controls.midi.desc': 'Wybór urządzenia wejściowego MIDI do podłączenia kontrolera MIDI lub klawiatury. Po podłączeniu możesz mapować sygnały MIDI na kontrolki aplikacji.',

            // Sequencer
            'sequencer.title': 'Sekwencer',
            'sequencer.intro': 'Potężny sekwencer do tworzenia złożonych kompozycji wizualnych:',
            'sequencer.item1': '<strong>8 Stron:</strong> Przełączaj się między różnymi nastrojami i scenami całego pokazu',
            'sequencer.item2': '<strong>Elastyczne kroki:</strong> Ustaw 2, 4, 8 lub 16 kroków według potrzeb',
            'sequencer.item3': '<strong>Drag & Drop:</strong> Po prostu przeciągnij shadery, filmy, modele 3D lub HTML na poszczególne kroki',
            'sequencer.item4': '<strong>Zapętlanie:</strong> Zapętlaj dowolną część sekwencji dla powtarzających się efektów',
            'sequencer.item5': '<strong>Tryb VJ na żywo:</strong> Aktywuj kroki w czasie rzeczywistym za pomocą klawiatury lub MIDI',
            'sequencer.item6': '<strong>Kombinacje mediów:</strong> Każdy krok może zawierać jednocześnie shader, film, model 3D i nakładkę HTML',
            'sequencer.item7': '<strong>Płynne przejścia:</strong> Automatyczne efekty zanikania między krokami',

            // Tuning Controls
            'tuning.title': 'Kontrolki strojenia',
            'tuning.intro': 'Kompletny zestaw kontrolek do precyzyjnego dostrajania wizualizacji w czasie rzeczywistym:',
            'tuning.item1': '<strong>TEMPO:</strong> Ustaw prędkość odtwarzania (6-120 BPM)',
            'tuning.item2': '<strong>OVERLAY:</strong> Przezroczystość warstw nakładki HTML',
            'tuning.item3': '<strong>AUDIO:</strong> Siła efektów reagujących na dźwięk',
            'tuning.item4': '<strong>Blur & Glow:</strong> Efekty rozmycia i świecenia',
            'tuning.item5': '<strong>Chroma & Hue Shift:</strong> Transformacje kolorów',
            'tuning.item6': '<strong>Mandala Segments:</strong> Efekty symetryczne',
            'tuning.item7': '<strong>Particles:</strong> Systemy cząsteczek',
            'tuning.item8': '<strong>Saturation:</strong> Intensywność i nasycenie kolorów',
            'tuning.item9': '<strong>Speed, Zoom:</strong> Parametry dynamiczne',
            'tuning.item10': '<strong>Levels:</strong> Cienie, średnie tony, światła dla profesjonalnej korekty kolorów',

            // Shaders Library
            'shaders.title': 'Biblioteka shaderów',
            'shaders.intro': 'Obszerna kolekcja profesjonalnych efektów wizualnych:',
            'shaders.item1': '<strong>150+ gotowych shaderów:</strong> Od abstrakcyjnych fraktali przez burze cząsteczek po retro glitch art',
            'shaders.item2': '<strong>Kategoryzacja:</strong> Łatwe wyszukiwanie według typu efektu',
            'shaders.item3': '<strong>Natychmiastowy podgląd:</strong> Zobacz wynik przed zastosowaniem',
            'shaders.item4': '<strong>Niestandardowe shadery:</strong> Twórz własne efekty w kodzie GLSL',
            'shaders.item5': '<strong>Monaco Editor:</strong> Profesjonalny edytor z podświetlaniem składni i autouzupełnianiem',
            'shaders.item6': '<strong>Kombinacje shaderów:</strong> Łącz wiele shaderów dla unikalnych efektów',
            'shaders.item7': '<strong>Eksport i import:</strong> Udostępniaj swoje shadery społeczności',

            // Media Library
            'media.title': 'Biblioteka mediów',
            'media.intro': 'Prześlij swoje własne zdjęcia i filmy - to jest główny cel aplikacji:',
            'media.item1': '<strong>Twoje zdjęcia:</strong> Prześlij zdjęcia z wakacji, uroczystości lub inne momenty. Obsługa wszystkich popularnych formatów (JPG, PNG, GIF, WebP).',
            'media.item2': '<strong>Twoje filmy:</strong> Załaduj własne klipy wideo i zastosuj na nich efekty wizualne w czasie rzeczywistym. Idealne do projekcji domowej.',
            'media.item3': '<strong>Modele 3D (.obj):</strong> Opcjonalnie dodaj modele 3D dla jeszcze ciekawszych efektów.',
            'media.item4': '<strong>HTML Overlay:</strong> Dodaj niestandardową zawartość HTML z CSS i JavaScriptem dla interaktywnych warstw.',
            'media.item5': '<strong>Proste przesyłanie:</strong> Po prostu przeciągnij pliki do aplikacji lub użyj przycisku do wyboru.',
            'media.item6': '<strong>Lokalne przechowywanie:</strong> Wszystkie Twoje media są przechowywane lokalnie - bez przesyłania na serwery.',
            'media.item7': '<strong>Darmowe dla wszystkich:</strong> Aplikacja jest całkowicie darmowa i dostępna dla wszystkich.',

            // Performance section
            'performance.title': 'Proste sterowanie dla wszystkich',
            'performance.subtitle': 'Haluzator jest zaprojektowany tak, aby każdy mógł go używać - od początkujących po zaawansowanych użytkowników.',
            'performance.simple.title': 'Proste sterowanie',
            'performance.simple.desc': 'Przeciągnij pliki, wybierz efekt i odtwarzaj. Bez skomplikowanej konfiguracji.',
            'performance.audio.title': 'Reaktywność audio',
            'performance.audio.desc': 'Podłącz mikrofon lub muzykę i pozwól efektom reagować na dźwięk.',
            'performance.home.title': 'Projekcja domowa',
            'performance.home.desc': 'Idealne do projekcji na ścianie w domu, na imprezach lub podczas spotkań z przyjaciółmi.',

            // How it works
            'howitworks.title': 'Jak to działa?',
            'howitworks.step1.title': 'Prześlij',
            'howitworks.step1.desc': 'Prześlij swoje zdjęcia lub filmy - po prostu przeciągnij pliki do aplikacji.',
            'howitworks.step2.title': 'Wybierz efekt',
            'howitworks.step2.desc': 'Wybierz jeden z 150+ efektów wizualnych i zastosuj go na swoich mediach.',
            'howitworks.step3.title': 'Projektuj',
            'howitworks.step3.desc': 'Rozpocznij <em>Spacją</em> i projektuj swój niesamowity pokaz!',

            // Users section
            'users.card1.title': 'Dla wszystkich ze zdjęciami i filmami',
            'users.card1.subtitle': 'Projektuj swoje wspomnienia z niesamowitymi efektami',
            'users.card1.story': 'Masz setki zdjęć z wakacji, filmy z uroczystości lub spotkań rodzinnych? Haluzator pozwala przekształcić te wspomnienia w niesamowity pokaz wizualny. Prześlij swoje zdjęcia i filmy, zastosuj profesjonalne efekty i projektuj je na ścianie podczas rodzinnych wieczorów lub uroczystości. Stwórz własną cyfrową galerię, która ożyje dzięki dynamicznym przejściom i efektom reagującym na dźwięk. Twoje wspomnienia zyskają w ten sposób nowy wymiar i staną się częścią niezapomnianych chwil.',

            'users.card2.title': 'Dla użytkowników domowych',
            'users.card2.subtitle': 'Stwórz niesamowitą atmosferę na domowych uroczystościach',
            'users.card2.story': 'Chcesz stworzyć niezapomnianą atmosferę na przyjęciu urodzinowym, weselu lub po prostu podczas spotkania z przyjaciółmi? Haluzator jest idealnym rozwiązaniem do projekcji domowej. Podłącz projektor lub użyj dużego telewizora, prześlij zdjęcia gości lub tematyczne filmy i pozwól im pulsować w rytmie muzyki. Dzięki efektom reagującym na dźwięk Twój pokaz automatycznie synchronizuje się z muzyką, którą odtwarzasz. Stwórz profesjonalną atmosferę bez potrzeby skomplikowanej konfiguracji - wszystko działa prosto i intuicyjnie.',

            'users.card3.title': 'Dla kreatywnych i eksperymentatorów',
            'users.card3.subtitle': 'Eksperymentuj z grafiką bez granic - za darmo i prosto',
            'users.card3.story': 'Jesteś artystą, projektantem lub po prostu kimś, kto uwielbia eksperymentować z grafiką? Haluzator otwiera nieskończone możliwości kreatywnego wyrażania się. Twórz własne shadery w GLSL, łącz efekty, eksperymentuj z modelami 3D i warstwami nakładki HTML. Dzięki profesjonalnemu edytorowi Monaco masz pełną kontrolę nad każdym aspektem wizualizacji. Wszystko jest darmowe, bez ograniczeń i bez potrzeby skomplikowanej konfiguracji. Udostępniaj swoje kreacje społeczności lub używaj ich do własnych projektów. Granice istnieją tylko w Twojej wyobraźni.',

            // Download section
            'download.title': 'Zacznij projektować swoje zdjęcia i filmy',
            'download.text': 'Pobierz aplikację za darmo, prześlij swoje zdjęcia i filmy i stwórz niesamowity pokaz wizualny. Wszystkie ustawienia i media są przechowywane lokalnie na Twoim komputerze.',
            'download.box.title': 'Pobierz Haluzator za darmo',
            'download.box.subtitle': 'Wersja Windows | Wersja internetowa - dostępna dla wszystkich',
            'download.button': 'Pobierz teraz',
            'download.warning': 'Uwaga: Aplikacja nie jest podpisana cyfrowo. Gdy Windows wyświetli ostrzeżenie bezpieczeństwa, kliknij "Więcej informacji" lub "Więcej", a następnie "Uruchom mimo to", aby kontynuować.',

            // Footer
            'footer.copyright': '© 2025 Haluzator. Wszelkie prawa zastrzeżone.',
            'footer.facebook': 'Facebook',
            'footer.email': 'Email'
        },
        fr: {
            // Meta
            'meta.title': 'Haluzator - Chef d\'orchestre de votre univers visuel',
            'meta.description': 'Application gratuite pour la projection à domicile. Téléchargez vos photos et vidéos et créez des spectacles visuels étonnants avec des effets professionnels.',

            // Navigation
            'nav.download': 'Télécharger l\'exe autonome',
            'nav.try': 'Essayer dans le navigateur',

            // Hero section
            'hero.title': 'Affichez des effets au rythme de votre musique',
            'hero.subtitle': 'Application simple pour la projection à domicile. Téléchargez vos photos et vidéos, ajoutez des effets et créez des spectacles visuels étonnants. Gratuit pour Windows et le web.',
            'hero.download': 'Télécharger l\'exe autonome',
            'hero.try': 'Essayer dans le navigateur',
            'hero.testmode': 'Prototype fonctionnel en mode test',

            // Intro section
            'intro.title': 'Qu\'est-ce que Haluzator',
            'intro.text': 'Haluzator est une <strong>application gratuite pour tous</strong> qui souhaitent projeter leurs propres photos et vidéos avec des effets étonnants. Parfait pour <strong>la projection à domicile, les fêtes ou les projets créatifs</strong>. Téléchargez vos médias, choisissez un effet et laissez les graphiques pulser au rythme de la musique.',

            // Features section
            'features.title': 'Pourquoi vous allez l\'adorer ?',
            'features.upload.title': 'Téléchargez vos photos et vidéos',
            'features.upload.text': 'Objectif principal de l\'application : <strong>projeter votre propre contenu</strong>. Téléchargez des photos de vacances, des vidéos de célébrations ou tout autre contenu et transformez-les en un spectacle visuel étonnant.',
            'features.upload.item1': 'Support de tous les formats courants (JPG, PNG, MP4, WebM)',
            'features.upload.item2': 'Téléchargement simple par glisser-déposer',
            'features.upload.item3': 'Aperçu instantané : Voyez tout en temps réel',

            'features.effects.title': '150+ effets visuels',
            'features.effects.text': 'Ajoutez des effets professionnels avec des shaders dynamiques – filtres GPU avancés pour la transformation d\'image en temps réel. Kaléidoscopes, effets audio-réactifs et visuels abstraits, le tout fluide et sans ralentissement.',
            'features.effects.item1': '<strong>Shaders :</strong> Plus de 150 effets préfabriqués pour tous les goûts',
            'features.effects.item2': '<strong>Modèles 3D :</strong> Ajoutez optionnellement des objets 3D (.obj)',
            'features.effects.item3': '<strong>HTML Overlay :</strong> Ajoutez des textes ou des graphiques personnalisés',

            'features.mixer.title': 'Mixeur de spectacle visuel',
            'features.mixer.text': 'Créez des transitions fluides entre vos médias avec des effets de fondu, des calques et différents modes de fusion. Mélangez vidéos, photos et shaders en temps réel pour un flux visuel professionnel.',
            'features.mixer.item1': '<strong>8 Pages :</strong> Basculez entre différentes parties de votre spectacle',
            'features.mixer.item2': '<strong>Pas rythmiques :</strong> Synchronisez avec la musique',
            'features.mixer.item3': '<strong>Boucle :</strong> Répétez vos moments favoris',

            // Controls section
            'controls.title': 'Contrôles et fonctionnalités',
            'controls.subtitle': 'Vue d\'ensemble complète de tous les boutons et fonctions du panneau principal de l\'application. Chaque bouton vous donne le contrôle sur le spectacle visuel :',
            'controls.fps': 'FPS',
            'controls.fps.desc': 'Affichage du nombre d\'images par seconde actuel. Surveillez les performances de rendu en temps réel et optimisez les paramètres pour une visualisation fluide.',
            'controls.play': 'Lecture / Pause',
            'controls.play.desc': 'Démarrer ou mettre en pause la lecture visuelle. Raccourci clavier : <strong>Barre d\'espace</strong>',
            'controls.microphone': 'Microphone',
            'controls.microphone.desc': 'Activez ou désactivez l\'entrée audio du microphone pour les effets audio-réactifs. Les visuels réagissent à la musique en temps réel.',
            'controls.fullscreen': 'Plein écran',
            'controls.fullscreen.desc': 'Passez en mode plein écran pour un spectacle VJ parfait sans éléments distrayants.',
            'controls.projection': 'Fenêtre de projection',
            'controls.projection.desc': 'Ouvrez une fenêtre séparée pour le projecteur tout en contrôlant depuis la fenêtre principale. Parfait pour les performances en direct.',
            'controls.save': 'Enregistrer',
            'controls.save.desc': 'Enregistrez toute votre session, y compris tous les effets, médias et paramètres dans un seul fichier. Toutes les données restent sur votre appareil.',
            'controls.load': 'Charger',
            'controls.load.desc': 'Chargez une session précédemment enregistrée. Restaurez tous vos effets, séquences et paramètres en un clic.',
            'controls.ui-toggle': 'Masquer les éléments de l\'interface',
            'controls.ui-toggle.desc': 'Masquez ou affichez les panneaux de contrôle (Contrôles, Séquenceur, Panneau droit). Idéal pour le mode plein écran propre ou la configuration à double écran.',
            'controls.midi': 'MIDI IN',
            'controls.midi.desc': 'Sélection du périphérique d\'entrée MIDI pour connecter un contrôleur MIDI ou un clavier. Après connexion, vous pouvez mapper les signaux MIDI sur les contrôles de l\'application.',

            // Sequencer
            'sequencer.title': 'Séquenceur',
            'sequencer.intro': 'Séquenceur puissant pour créer des compositions visuelles complexes :',
            'sequencer.item1': '<strong>8 Pages :</strong> Basculez entre différentes ambiances et scènes de tout le spectacle',
            'sequencer.item2': '<strong>Pas flexibles :</strong> Définissez 2, 4, 8 ou 16 pas selon vos besoins',
            'sequencer.item3': '<strong>Glisser-déposer :</strong> Glissez simplement des shaders, vidéos, modèles 3D ou HTML sur des pas individuels',
            'sequencer.item4': '<strong>Boucle :</strong> Répétez n\'importe quelle partie de la séquence pour des effets répétitifs',
            'sequencer.item5': '<strong>Mode VJ en direct :</strong> Activez les pas en temps réel à l\'aide du clavier ou du MIDI',
            'sequencer.item6': '<strong>Combinaisons de médias :</strong> Chaque pas peut contenir simultanément un shader, une vidéo, un modèle 3D et un overlay HTML',
            'sequencer.item7': '<strong>Transitions fluides :</strong> Effets de fondu automatiques entre les pas',

            // Tuning Controls
            'tuning.title': 'Contrôles de réglage',
            'tuning.intro': 'Ensemble complet de contrôles pour affiner les visuels en temps réel :',
            'tuning.item1': '<strong>TEMPO :</strong> Définissez la vitesse de lecture (6-120 BPM)',
            'tuning.item2': '<strong>OVERLAY :</strong> Transparence des calques overlay HTML',
            'tuning.item3': '<strong>AUDIO :</strong> Intensité des effets audio-réactifs',
            'tuning.item4': '<strong>Flou et lueur :</strong> Effets de flou et de lueur',
            'tuning.item5': '<strong>Chroma et décalage de teinte :</strong> Transformations de couleur',
            'tuning.item6': '<strong>Segments Mandala :</strong> Effets symétriques',
            'tuning.item7': '<strong>Particules :</strong> Systèmes de particules',
            'tuning.item8': '<strong>Saturation :</strong> Intensité et saturation des couleurs',
            'tuning.item9': '<strong>Vitesse, Zoom :</strong> Paramètres dynamiques',
            'tuning.item10': '<strong>Niveaux :</strong> Ombres, tons moyens, hautes lumières pour l\'étalonnage des couleurs professionnel',

            // Shaders Library
            'shaders.title': 'Bibliothèque de shaders',
            'shaders.intro': 'Collection étendue d\'effets visuels professionnels :',
            'shaders.item1': '<strong>150+ shaders préfabriqués :</strong> Des fractales abstraites aux tempêtes de particules en passant par l\'art glitch rétro',
            'shaders.item2': '<strong>Catégorisation :</strong> Recherche facile par type d\'effet',
            'shaders.item3': '<strong>Aperçu instantané :</strong> Voyez le résultat avant d\'appliquer',
            'shaders.item4': '<strong>Shaders personnalisés :</strong> Créez vos propres effets en code GLSL',
            'shaders.item5': '<strong>Éditeur Monaco :</strong> Éditeur professionnel avec coloration syntaxique et autocomplétion',
            'shaders.item6': '<strong>Combinaisons de shaders :</strong> Combinez plusieurs shaders pour des effets uniques',
            'shaders.item7': '<strong>Export et import :</strong> Partagez vos shaders avec la communauté',

            // Media Library
            'media.title': 'Bibliothèque de médias',
            'media.intro': 'Téléchargez vos propres photos et vidéos - c\'est l\'objectif principal de l\'application :',
            'media.item1': '<strong>Vos photos :</strong> Téléchargez des photos de vacances, de célébrations ou d\'autres moments. Support de tous les formats courants (JPG, PNG, GIF, WebP).',
            'media.item2': '<strong>Vos vidéos :</strong> Chargez vos propres clips vidéo et appliquez des effets visuels en temps réel. Parfait pour la projection à domicile.',
            'media.item3': '<strong>Modèles 3D (.obj) :</strong> Ajoutez optionnellement des modèles 3D pour des effets encore plus intéressants.',
            'media.item4': '<strong>HTML Overlay :</strong> Ajoutez du contenu HTML personnalisé avec CSS et JavaScript pour des calques interactifs.',
            'media.item5': '<strong>Téléchargement simple :</strong> Glissez simplement des fichiers dans l\'application ou utilisez le bouton pour sélectionner.',
            'media.item6': '<strong>Stockage local :</strong> Tous vos médias sont stockés localement - aucun téléchargement sur les serveurs.',
            'media.item7': '<strong>Gratuit pour tous :</strong> L\'application est entièrement gratuite et disponible pour tous.',

            // Performance section
            'performance.title': 'Contrôles simples pour tous',
            'performance.subtitle': 'Haluzator est conçu pour que tout le monde puisse l\'utiliser - des débutants aux utilisateurs avancés.',
            'performance.simple.title': 'Contrôles simples',
            'performance.simple.desc': 'Glissez des fichiers, sélectionnez un effet et jouez. Pas de configuration compliquée.',
            'performance.audio.title': 'Réactivité audio',
            'performance.audio.desc': 'Connectez un microphone ou de la musique et laissez les effets réagir au son.',
            'performance.home.title': 'Projection à domicile',
            'performance.home.desc': 'Parfait pour la projection sur le mur à la maison, lors de fêtes ou lors de rencontres avec des amis.',

            // How it works
            'howitworks.title': 'Comment ça fonctionne ?',
            'howitworks.step1.title': 'Téléchargez',
            'howitworks.step1.desc': 'Téléchargez vos photos ou vidéos - glissez simplement des fichiers dans l\'application.',
            'howitworks.step2.title': 'Choisissez un effet',
            'howitworks.step2.desc': 'Choisissez l\'un des 150+ effets visuels et appliquez-le à vos médias.',
            'howitworks.step3.title': 'Projetez',
            'howitworks.step3.desc': 'Démarrez avec la <em>Barre d\'espace</em> et projetez votre spectacle étonnant !',

            // Users section
            'users.card1.title': 'Pour tous avec des photos et vidéos',
            'users.card1.subtitle': 'Projetez vos souvenirs avec des effets étonnants',
            'users.card1.story': 'Vous avez des centaines de photos de vacances, des vidéos de célébrations ou de réunions familiales ? Haluzator vous permet de transformer ces souvenirs en un spectacle visuel étonnant. Téléchargez vos photos et vidéos, appliquez des effets professionnels et projetez-les sur le mur lors de soirées familiales ou de célébrations. Créez votre propre galerie numérique qui prend vie grâce aux transitions dynamiques et aux effets audio-réactifs. Vos souvenirs gagnent ainsi une nouvelle dimension et deviennent partie intégrante de moments inoubliables.',

            'users.card2.title': 'Pour les utilisateurs à domicile',
            'users.card2.subtitle': 'Créez une atmosphère étonnante lors des célébrations à domicile',
            'users.card2.story': 'Vous voulez créer une atmosphère inoubliable lors d\'une fête d\'anniversaire, d\'un mariage ou simplement lors d\'une rencontre avec des amis ? Haluzator est la solution idéale pour la projection à domicile. Connectez un projecteur ou utilisez une grande télévision, téléchargez des photos d\'invités ou des vidéos thématiques et laissez-les pulser au rythme de la musique. Avec les effets audio-réactifs, votre spectacle se synchronise automatiquement avec la musique que vous jouez. Créez une atmosphère professionnelle sans configuration compliquée - tout fonctionne simplement et intuitivement.',

            'users.card3.title': 'Pour les créatifs et expérimentateurs',
            'users.card3.subtitle': 'Expérimentez avec les graphiques sans limites - gratuit et simple',
            'users.card3.story': 'Vous êtes un artiste, un designer ou simplement quelqu\'un qui aime expérimenter avec les graphiques ? Haluzator ouvre des possibilités infinies d\'expression créative. Créez vos propres shaders en GLSL, combinez des effets, expérimentez avec des modèles 3D et des calques overlay HTML. Avec l\'éditeur Monaco professionnel, vous avez un contrôle total sur chaque aspect des visuels. Tout est gratuit, sans restrictions et sans configuration compliquée. Partagez vos créations avec la communauté ou utilisez-les pour vos propres projets. Les limites n\'existent que dans votre imagination.',

            // Download section
            'download.title': 'Commencez à projeter vos photos et vidéos',
            'download.text': 'Téléchargez l\'application gratuitement, téléchargez vos photos et vidéos et créez un spectacle visuel étonnant. Tous les paramètres et médias sont stockés localement sur votre ordinateur.',
            'download.box.title': 'Téléchargez Haluzator gratuitement',
            'download.box.subtitle': 'Version Windows | Version Web - disponible pour tous',
            'download.button': 'Télécharger maintenant',
            'download.warning': 'Note: L\'application n\'est pas signée numériquement. Lorsque Windows affiche un avertissement de sécurité, cliquez sur "Plus d\'infos" ou "Plus" puis sur "Exécuter quand même" pour continuer.',

            // Footer
            'footer.copyright': '© 2025 Haluzator. Tous droits réservés.',
            'footer.facebook': 'Facebook',
            'footer.email': 'Email'
        },
        es: {
            // Meta
            'meta.title': 'Haluzator - Director de tu universo visual',
            'meta.description': 'Aplicación gratuita para proyección doméstica. Sube tus fotos y videos y crea espectáculos visuales increíbles con efectos profesionales.',

            // Navigation
            'nav.download': 'Descargar exe independiente',
            'nav.try': 'Probar en el navegador',

            // Hero section
            'hero.title': 'Muestra efectos al ritmo de tu música',
            'hero.subtitle': 'Aplicación simple para proyección doméstica. Sube tus fotos y videos, agrega efectos y crea espectáculos visuales increíbles. Gratis para Windows y web.',
            'hero.download': 'Descargar exe independiente',
            'hero.try': 'Probar en el navegador',
            'hero.testmode': 'Prototipo funcional en modo de prueba',

            // Intro section
            'intro.title': '¿Qué es Haluzator?',
            'intro.text': 'Haluzator es una <strong>aplicación gratuita para todos</strong> que quieren proyectar sus propias fotos y videos con efectos increíbles. Perfecto para <strong>proyección doméstica, fiestas o proyectos creativos</strong>. Sube tus medios, elige un efecto y deja que los gráficos pulsen al ritmo de la música.',

            // Features section
            'features.title': '¿Por qué te encantará?',
            'features.upload.title': 'Sube tus fotos y videos',
            'features.upload.text': 'Propósito principal de la aplicación: <strong>proyectar tu propio contenido</strong>. Sube fotos de vacaciones, videos de celebraciones o cualquier otro contenido y transfórmalo en un espectáculo visual increíble.',
            'features.upload.item1': 'Soporte para todos los formatos comunes (JPG, PNG, MP4, WebM)',
            'features.upload.item2': 'Carga simple arrastrando archivos',
            'features.upload.item3': 'Vista previa instantánea: Ve todo en tiempo real',

            'features.effects.title': '150+ efectos visuales',
            'features.effects.text': 'Agrega efectos profesionales con shaders dinámicos: filtros GPU avanzados para transformación de imagen en tiempo real. Caleidoscopios, efectos reactivos al audio y visuales abstractos, todo fluido y sin ralentización.',
            'features.effects.item1': '<strong>Shaders:</strong> Más de 150 efectos prefabricados para todos los gustos',
            'features.effects.item2': '<strong>Modelos 3D:</strong> Opcionalmente agrega objetos 3D (.obj)',
            'features.effects.item3': '<strong>HTML Overlay:</strong> Agrega textos o gráficos personalizados',

            'features.mixer.title': 'Mezclador de espectáculo visual',
            'features.mixer.text': 'Crea transiciones suaves entre tus medios con efectos de fundido cruzado, capas y varios modos de mezcla. Mezcla videos, fotos y shaders en tiempo real para un flujo visual profesional.',
            'features.mixer.item1': '<strong>8 Páginas:</strong> Cambia entre diferentes partes de tu espectáculo',
            'features.mixer.item2': '<strong>Pasos rítmicos:</strong> Sincroniza con la música',
            'features.mixer.item3': '<strong>Bucle:</strong> Repite tus momentos favoritos',

            // Controls section
            'controls.title': 'Controles y funciones',
            'controls.subtitle': 'Vista completa de todos los botones y funciones en el panel principal de la aplicación. Cada botón te da control sobre el espectáculo visual:',
            'controls.fps': 'FPS',
            'controls.fps.desc': 'Visualización de los fotogramas por segundo actuales. Monitorea el rendimiento de renderizado en tiempo real y optimiza la configuración para una visualización fluida.',
            'controls.play': 'Reproducir / Pausar',
            'controls.play.desc': 'Inicia o pausa la reproducción visual. Atajo de teclado: <strong>Barra espaciadora</strong>',
            'controls.microphone': 'Micrófono',
            'controls.microphone.desc': 'Activa o desactiva la entrada de audio del micrófono para efectos reactivos al audio. Los visuales reaccionan a la música en tiempo real.',
            'controls.fullscreen': 'Pantalla completa',
            'controls.fullscreen.desc': 'Cambia al modo de pantalla completa para un espectáculo VJ perfecto sin elementos distractores.',
            'controls.projection': 'Ventana de proyección',
            'controls.projection.desc': 'Abre una ventana separada para el proyector mientras controlas desde la ventana principal. Perfecto para actuaciones en vivo.',
            'controls.save': 'Guardar',
            'controls.save.desc': 'Guarda toda tu sesión incluyendo todos los efectos, medios y configuraciones en un solo archivo. Todos los datos permanecen en tu dispositivo.',
            'controls.load': 'Cargar',
            'controls.load.desc': 'Carga una sesión previamente guardada. Restaura todos tus efectos, secuencias y configuraciones con un clic.',
            'controls.ui-toggle': 'Ocultar elementos de la interfaz',
            'controls.ui-toggle.desc': 'Oculta o muestra los paneles de control (Controles, Secuenciador, Panel derecho). Ideal para modo de pantalla completa limpio o configuración de doble pantalla.',
            'controls.midi': 'MIDI IN',
            'controls.midi.desc': 'Selección del dispositivo de entrada MIDI para conectar un controlador MIDI o teclado. Después de la conexión, puedes mapear señales MIDI a los controles de la aplicación.',

            // Sequencer
            'sequencer.title': 'Secuenciador',
            'sequencer.intro': 'Secuenciador potente para crear composiciones visuales complejas:',
            'sequencer.item1': '<strong>8 Páginas:</strong> Cambia entre diferentes estados de ánimo y escenas de todo el espectáculo',
            'sequencer.item2': '<strong>Pasos flexibles:</strong> Establece 2, 4, 8 o 16 pasos según tus necesidades',
            'sequencer.item3': '<strong>Arrastrar y soltar:</strong> Simplemente arrastra shaders, videos, modelos 3D o HTML a pasos individuales',
            'sequencer.item4': '<strong>Bucle:</strong> Repite cualquier parte de la secuencia para efectos repetitivos',
            'sequencer.item5': '<strong>Modo VJ en vivo:</strong> Activa pasos en tiempo real usando teclado o MIDI',
            'sequencer.item6': '<strong>Combinaciones de medios:</strong> Cada paso puede contener shader, video, modelo 3D y overlay HTML simultáneamente',
            'sequencer.item7': '<strong>Transiciones suaves:</strong> Efectos de desvanecimiento automáticos entre pasos',

            // Tuning Controls
            'tuning.title': 'Controles de ajuste',
            'tuning.intro': 'Conjunto completo de controles para afinar visuales en tiempo real:',
            'tuning.item1': '<strong>TEMPO:</strong> Establece la velocidad de reproducción (6-120 BPM)',
            'tuning.item2': '<strong>OVERLAY:</strong> Transparencia de las capas overlay HTML',
            'tuning.item3': '<strong>AUDIO:</strong> Intensidad de los efectos reactivos al audio',
            'tuning.item4': '<strong>Desenfoque y resplandor:</strong> Efectos de desenfoque y resplandor',
            'tuning.item5': '<strong>Croma y cambio de tono:</strong> Transformaciones de color',
            'tuning.item6': '<strong>Segmentos Mandala:</strong> Efectos simétricos',
            'tuning.item7': '<strong>Partículas:</strong> Sistemas de partículas',
            'tuning.item8': '<strong>Saturación:</strong> Intensidad y saturación del color',
            'tuning.item9': '<strong>Velocidad, Zoom:</strong> Parámetros dinámicos',
            'tuning.item10': '<strong>Niveles:</strong> Sombras, tonos medios, luces altas para corrección de color profesional',

            // Shaders Library
            'shaders.title': 'Biblioteca de shaders',
            'shaders.intro': 'Amplia colección de efectos visuales profesionales:',
            'shaders.item1': '<strong>150+ shaders prefabricados:</strong> Desde fractales abstractos hasta tormentas de partículas y arte glitch retro',
            'shaders.item2': '<strong>Categorización:</strong> Búsqueda fácil por tipo de efecto',
            'shaders.item3': '<strong>Vista previa instantánea:</strong> Ve el resultado antes de aplicar',
            'shaders.item4': '<strong>Shaders personalizados:</strong> Crea tus propios efectos en código GLSL',
            'shaders.item5': '<strong>Editor Monaco:</strong> Editor profesional con resaltado de sintaxis y autocompletado',
            'shaders.item6': '<strong>Combinaciones de shaders:</strong> Combina múltiples shaders para efectos únicos',
            'shaders.item7': '<strong>Exportar e importar:</strong> Comparte tus shaders con la comunidad',

            // Media Library
            'media.title': 'Biblioteca de medios',
            'media.intro': 'Sube tus propias fotos y videos - este es el propósito principal de la aplicación:',
            'media.item1': '<strong>Tus fotos:</strong> Sube fotos de vacaciones, celebraciones o cualquier otro momento. Soporte para todos los formatos comunes (JPG, PNG, GIF, WebP).',
            'media.item2': '<strong>Tus videos:</strong> Carga tus propios clips de video y aplica efectos visuales en tiempo real. Perfecto para proyección doméstica.',
            'media.item3': '<strong>Modelos 3D (.obj):</strong> Opcionalmente agrega modelos 3D para efectos aún más interesantes.',
            'media.item4': '<strong>HTML Overlay:</strong> Agrega contenido HTML personalizado con CSS y JavaScript para capas interactivas.',
            'media.item5': '<strong>Carga simple:</strong> Simplemente arrastra archivos a la aplicación o usa el botón para seleccionar.',
            'media.item6': '<strong>Almacenamiento local:</strong> Todos tus medios se almacenan localmente - sin subir a servidores.',
            'media.item7': '<strong>Gratis para todos:</strong> La aplicación es completamente gratuita y disponible para todos.',

            // Performance section
            'performance.title': 'Controles simples para todos',
            'performance.subtitle': 'Haluzator está diseñado para que cualquiera pueda usarlo - desde principiantes hasta usuarios avanzados.',
            'performance.simple.title': 'Controles simples',
            'performance.simple.desc': 'Arrastra archivos, selecciona un efecto y reproduce. Sin configuración complicada.',
            'performance.audio.title': 'Reactividad de audio',
            'performance.audio.desc': 'Conecta un micrófono o música y deja que los efectos reaccionen al sonido.',
            'performance.home.title': 'Proyección doméstica',
            'performance.home.desc': 'Perfecto para proyectar en la pared en casa, en fiestas o al reunirse con amigos.',

            // How it works
            'howitworks.title': '¿Cómo funciona?',
            'howitworks.step1.title': 'Sube',
            'howitworks.step1.desc': 'Sube tus fotos o videos - simplemente arrastra archivos a la aplicación.',
            'howitworks.step2.title': 'Elige un efecto',
            'howitworks.step2.desc': 'Elige uno de los 150+ efectos visuales y aplícalo a tus medios.',
            'howitworks.step3.title': 'Proyecta',
            'howitworks.step3.desc': '¡Inicia con la <em>Barra espaciadora</em> y proyecta tu espectáculo increíble!',

            // Users section
            'users.card1.title': 'Para todos con fotos y videos',
            'users.card1.subtitle': 'Proyecta tus recuerdos con efectos increíbles',
            'users.card1.story': '¿Tienes cientos de fotos de vacaciones, videos de celebraciones o reuniones familiares? Haluzator te permite transformar estos recuerdos en un espectáculo visual increíble. Sube tus fotos y videos, aplica efectos profesionales y proyéctalos en la pared durante veladas familiares o celebraciones. Crea tu propia galería digital que cobra vida gracias a transiciones dinámicas y efectos reactivos al audio. Tus recuerdos así ganan una nueva dimensión y se convierten en parte de momentos inolvidables.',

            'users.card2.title': 'Para usuarios domésticos',
            'users.card2.subtitle': 'Crea una atmósfera increíble en celebraciones domésticas',
            'users.card2.story': '¿Quieres crear una atmósfera inolvidable en una fiesta de cumpleaños, boda o simplemente al reunirte con amigos? Haluzator es la solución ideal para proyección doméstica. Conecta un proyector o usa una televisión grande, sube fotos de invitados o videos temáticos y déjalos pulsar al ritmo de la música. Con efectos reactivos al audio, tu espectáculo se sincroniza automáticamente con la música que reproduces. Crea una atmósfera profesional sin necesidad de configuración complicada - todo funciona de manera simple e intuitiva.',

            'users.card3.title': 'Para creativos y experimentadores',
            'users.card3.subtitle': 'Experimenta con gráficos sin límites - gratis y simple',
            'users.card3.story': '¿Eres un artista, diseñador o simplemente alguien que ama experimentar con gráficos? Haluzator abre posibilidades infinitas de expresión creativa. Crea tus propios shaders en GLSL, combina efectos, experimenta con modelos 3D y capas overlay HTML. Con el editor profesional Monaco, tienes control total sobre cada aspecto de los visuales. Todo es gratis, sin restricciones y sin necesidad de configuración complicada. Comparte tus creaciones con la comunidad o úsalas para tus propios proyectos. Los límites solo existen en tu imaginación.',

            // Download section
            'download.title': 'Comienza a proyectar tus fotos y videos',
            'download.text': 'Descarga la aplicación gratis, sube tus fotos y videos y crea un espectáculo visual increíble. Todas las configuraciones y medios se almacenan localmente en tu computadora.',
            'download.box.title': 'Descarga Haluzator gratis',
            'download.box.subtitle': 'Versión Windows | Versión Web - disponible para todos',
            'download.button': 'Descargar ahora',
            'download.warning': 'Nota: La aplicación no está firmada digitalmente. Cuando Windows muestre una advertencia de seguridad, haga clic en "Más información" o "Más" y luego en "Ejecutar de todos modos" para continuar.',

            // Footer
            'footer.copyright': '© 2025 Haluzator. Todos los derechos reservados.',
            'footer.facebook': 'Facebook',
            'footer.email': 'Email'
        },
        uk: {
            // Meta
            'meta.title': 'Haluzator - Диригент вашого візуального всесвіту',
            'meta.description': 'Безкоштовний додаток для домашньої проекції. Завантажте свої фото та відео та створюйте дивовижні візуальні шоу з професійними ефектами.',

            // Navigation
            'nav.download': 'Завантажити окремий exe',
            'nav.try': 'Спробувати в браузері',

            // Hero section
            'hero.title': 'Показуйте ефекти в ритмі вашої музики',
            'hero.subtitle': 'Простий додаток для домашньої проекції. Завантажте свої фото та відео, додайте ефекти та створюйте дивовижні візуальні шоу. Безкоштовно для Windows та веб.',
            'hero.download': 'Завантажити окремий exe',
            'hero.try': 'Спробувати в браузері',
            'hero.testmode': 'Функціональний прототип у тестовому режимі',

            // Intro section
            'intro.title': 'Що таке Haluzator',
            'intro.text': 'Haluzator — це <strong>безкоштовний додаток для всіх</strong>, хто хоче проектувати свої власні фото та відео з дивовижними ефектами. Ідеально підходить для <strong>домашньої проекції, вечірок або творчих проектів</strong>. Завантажте свої медіа, оберіть ефект і дозвольте графіці пульсувати в ритмі музики.',

            // Features section
            'features.title': 'Чому ви полюбите його?',
            'features.upload.title': 'Завантажте свої фото та відео',
            'features.upload.text': 'Головна мета додатку: <strong>проектувати ваш власний контент</strong>. Завантажте фото з відпустки, відео зі святкувань або будь-який інший контент і перетворіть його на дивовижне візуальне шоу.',
            'features.upload.item1': 'Підтримка всіх поширених форматів (JPG, PNG, MP4, WebM)',
            'features.upload.item2': 'Просте завантаження перетягуванням файлів',
            'features.upload.item3': 'Миттєвий попередній перегляд: Дивіться все в реальному часі',

            'features.effects.title': '150+ візуальних ефектів',
            'features.effects.text': 'Додайте професійні ефекти за допомогою динамічних шейдерів — розширених GPU фільтрів для трансформації зображення в реальному часі. Калейдоскопи, аудіо-реактивні ефекти та абстрактні візуали, все плавно та без сповільнення.',
            'features.effects.item1': '<strong>Шейдери:</strong> Більше ніж 150 готових ефектів на будь-який смак',
            'features.effects.item2': '<strong>3D Моделі:</strong> За бажанням додайте 3D об\'єкти (.obj)',
            'features.effects.item3': '<strong>HTML Overlay:</strong> Додайте тексти або власну графіку',

            'features.mixer.title': 'Міксер візуального шоу',
            'features.mixer.text': 'Створюйте плавні переходи між вашими медіа з ефектами crossfade, накладанням та різними режимами змішування. Змішуйте відео, фото та шейдери в реальному часі для професійного візуального потоку.',
            'features.mixer.item1': '<strong>8 Сторінок:</strong> Перемикайтеся між різними частинами вашого шоу',
            'features.mixer.item2': '<strong>Ритмічні кроки:</strong> Синхронізуйте з музикою',
            'features.mixer.item3': '<strong>Зациклення:</strong> Зациклюйте свої улюблені моменти',

            // Controls section
            'controls.title': 'Елементи керування та функції',
            'controls.subtitle': 'Повний огляд усіх кнопок та функцій на головній панелі додатку. Кожна кнопка дає вам контроль над візуальним шоу:',
            'controls.fps': 'FPS',
            'controls.fps.desc': 'Відображення поточної кількості кадрів на секунду. Відстежуйте продуктивність рендерингу в реальному часі та оптимізуйте налаштування для плавної візуалізації.',
            'controls.play': 'Відтворення / Пауза',
            'controls.play.desc': 'Запустіть або призупиніть візуальне відтворення. Гаряча клавіша: <strong>Пробіл</strong>',
            'controls.microphone': 'Мікрофон',
            'controls.microphone.desc': 'Увімкніть або вимкніть аудіо вхід з мікрофона для аудіо-реактивних ефектів. Візуали реагують на музику в реальному часі.',
            'controls.fullscreen': 'Повноекранний режим',
            'controls.fullscreen.desc': 'Перемкніть у повноекранний режим для ідеального VJ шоу без відволікаючих елементів.',
            'controls.projection': 'Вікно проекції',
            'controls.projection.desc': 'Відкрийте окреме вікно для проектора, керуючи з головного вікна. Ідеально для живих виступів.',
            'controls.save': 'Зберегти',
            'controls.save.desc': 'Збережіть всю вашу сесію, включаючи всі ефекти, медіа та налаштування в один файл. Всі дані залишаються на вашому пристрої.',
            'controls.load': 'Завантажити',
            'controls.load.desc': 'Завантажте раніше збережену сесію. Відновіть усі ваші ефекти, послідовності та налаштування одним кліком.',
            'controls.ui-toggle': 'Приховати елементи інтерфейсу',
            'controls.ui-toggle.desc': 'Приховайте або покажіть панелі керування (Controls, Sequencer, Right Panel). Ідеально для чистого повноекранного режиму або налаштування подвійного екрана.',
            'controls.midi': 'MIDI IN',
            'controls.midi.desc': 'Вибір MIDI вхідного пристрою для підключення MIDI контролера або клавіатури. Після підключення ви можете зіставляти MIDI сигнали з елементами керування додатку.',

            // Sequencer
            'sequencer.title': 'Секвенсер',
            'sequencer.intro': 'Потужний секвенсер для створення складних візуальних композицій:',
            'sequencer.item1': '<strong>8 Сторінок:</strong> Перемикайтеся між різними настроями та сценами всього шоу',
            'sequencer.item2': '<strong>Гнучкі кроки:</strong> Встановіть 2, 4, 8 або 16 кроків відповідно до ваших потреб',
            'sequencer.item3': '<strong>Drag & Drop:</strong> Просто перетягніть шейдери, відео, 3D моделі або HTML на окремі кроки',
            'sequencer.item4': '<strong>Зациклення:</strong> Зациклюйте будь-яку частину послідовності для повторюваних ефектів',
            'sequencer.item5': '<strong>Режим Live VJ:</strong> Активуйте кроки в реальному часі за допомогою клавіатури або MIDI',
            'sequencer.item6': '<strong>Комбінації медіа:</strong> Кожен крок може містити шейдер, відео, 3D модель та HTML overlay одночасно',
            'sequencer.item7': '<strong>Плавні переходи:</strong> Автоматичні fade ефекти між кроками',

            // Tuning Controls
            'tuning.title': 'Елементи налаштування',
            'tuning.intro': 'Повний набір елементів керування для точного налаштування візуалів в реальному часі:',
            'tuning.item1': '<strong>TEMPO:</strong> Встановіть швидкість відтворення (6-120 BPM)',
            'tuning.item2': '<strong>OVERLAY:</strong> Прозорість HTML overlay шарів',
            'tuning.item3': '<strong>AUDIO:</strong> Сила аудіо-реактивних ефектів',
            'tuning.item4': '<strong>Blur & Glow:</strong> Ефекти розмиття та свічення',
            'tuning.item5': '<strong>Chroma & Hue Shift:</strong> Кольорові трансформації',
            'tuning.item6': '<strong>Mandala Segments:</strong> Симетричні ефекти',
            'tuning.item7': '<strong>Particles:</strong> Системи часток',
            'tuning.item8': '<strong>Saturation:</strong> Інтенсивність та насиченість кольорів',
            'tuning.item9': '<strong>Speed, Zoom:</strong> Динамічні параметри',
            'tuning.item10': '<strong>Levels:</strong> Тіні, середні тони, світлі для професійного кольорового градієнту',

            // Shaders Library
            'shaders.title': 'Бібліотека шейдерів',
            'shaders.intro': 'Велика колекція професійних візуальних ефектів:',
            'shaders.item1': '<strong>150+ готових шейдерів:</strong> Від абстрактних фракталів через часткові бурі до ретро glitch мистецтва',
            'shaders.item2': '<strong>Категоризація:</strong> Легкий пошук за типом ефекту',
            'shaders.item3': '<strong>Миттєвий попередній перегляд:</strong> Дивіться результат перед застосуванням',
            'shaders.item4': '<strong>Власні шейдери:</strong> Створюйте свої власні ефекти в коді GLSL',
            'shaders.item5': '<strong>Monaco Editor:</strong> Професійний редактор з підсвічуванням синтаксису та автодоповненням',
            'shaders.item6': '<strong>Комбінації шейдерів:</strong> Комбінуйте кілька шейдерів для унікальних ефектів',
            'shaders.item7': '<strong>Експорт та імпорт:</strong> Діліться своїми шейдерами з спільнотою',

            // Media Library
            'media.title': 'Бібліотека медіа',
            'media.intro': 'Завантажте свої власні фото та відео - це головна мета додатку:',
            'media.item1': '<strong>Ваші фото:</strong> Завантажте фото з відпустки, святкувань або будь-які інші моменти. Підтримка всіх поширених форматів (JPG, PNG, GIF, WebP).',
            'media.item2': '<strong>Ваші відео:</strong> Завантажте власні відео кліпи та застосуйте до них візуальні ефекти в реальному часі. Ідеально для домашньої проекції.',
            'media.item3': '<strong>3D Моделі (.obj):</strong> За бажанням додайте 3D моделі для ще цікавіших ефектів.',
            'media.item4': '<strong>HTML Overlay:</strong> Додайте власний HTML контент з CSS та JavaScript для інтерактивних шарів.',
            'media.item5': '<strong>Просте завантаження:</strong> Просто перетягніть файли в додаток або використайте кнопку для вибору.',
            'media.item6': '<strong>Локальне зберігання:</strong> Всі ваші медіа зберігаються локально - без завантаження на сервери.',
            'media.item7': '<strong>Безкоштовно для всіх:</strong> Додаток повністю безкоштовний та доступний для всіх.',

            // Performance section
            'performance.title': 'Прості елементи керування для всіх',
            'performance.subtitle': 'Haluzator розроблений так, щоб кожен міг його використовувати - від початківців до досвідчених користувачів.',
            'performance.simple.title': 'Прості елементи керування',
            'performance.simple.desc': 'Перетягніть файли, оберіть ефект та грайте. Без складної налаштування.',
            'performance.audio.title': 'Аудіо реактивність',
            'performance.audio.desc': 'Підключіть мікрофон або музику та дозвольте ефектам реагувати на звук.',
            'performance.home.title': 'Домашня проекція',
            'performance.home.desc': 'Ідеально для проекції на стіну вдома, на вечірках або при зустрічі з друзями.',

            // How it works
            'howitworks.title': 'Як це працює?',
            'howitworks.step1.title': 'Завантажте',
            'howitworks.step1.desc': 'Завантажте свої фото або відео - просто перетягніть файли в додаток.',
            'howitworks.step2.title': 'Оберіть ефект',
            'howitworks.step2.desc': 'Оберіть один з 150+ візуальних ефектів та застосуйте його до ваших медіа.',
            'howitworks.step3.title': 'Проектуйте',
            'howitworks.step3.desc': 'Запустіть <em>Пробілом</em> та проектуйте своє дивовижне шоу!',

            // Users section
            'users.card1.title': 'Для всіх з фото та відео',
            'users.card1.subtitle': 'Проектуйте свої спогади з дивовижними ефектами',
            'users.card1.story': 'У вас є сотні фото з відпустки, відео зі святкувань або сімейних зустрічей? Haluzator дозволяє вам перетворити ці спогади на дивовижне візуальне шоу. Завантажте свої фото та відео, застосуйте професійні ефекти та проектуйте їх на стіну під час сімейних вечорів або святкувань. Створіть власну цифрову галерею, яка оживає завдяки динамічним переходам та аудіо-реактивним ефектам. Ваші спогади таким чином набувають нового виміру та стають частиною незабутніх моментів.',

            'users.card2.title': 'Для домашніх користувачів',
            'users.card2.subtitle': 'Створіть дивовижну атмосферу на домашніх святкуваннях',
            'users.card2.story': 'Хочете створити незабутню атмосферу на дні народження, весіллі або просто при зустрічі з друзями? Haluzator є ідеальним рішенням для домашньої проекції. Підключіть проектор або використайте великий телевізор, завантажте фото гостей або тематичні відео та дозвольте їм пульсувати в ритмі музики. З аудіо-реактивними ефектами ваше шоу автоматично синхронізується з музикою, яку ви граєте. Створіть професійну атмосферу без необхідності складної налаштування - все працює просто та інтуїтивно.',

            'users.card3.title': 'Для творчих та експериментаторів',
            'users.card3.subtitle': 'Експериментуйте з графікою без меж - безкоштовно та просто',
            'users.card3.story': 'Ви художник, дизайнер або просто хтось, хто любить експериментувати з графікою? Haluzator відкриває безкінечні можливості для творчого вираження. Створюйте власні шейдери в GLSL, комбінуйте ефекти, експериментуйте з 3D моделями та HTML overlay шарами. З професійним редактором Monaco ви маєте повний контроль над кожним аспектом візуалів. Все безкоштовно, без обмежень та без необхідності складної налаштування. Діліться своїми творами зі спільнотою або використовуйте їх для власних проектів. Межі існують лише у вашій уяві.',

            // Download section
            'download.title': 'Почніть проектувати свої фото та відео',
            'download.text': 'Завантажте додаток безкоштовно, завантажте свої фото та відео та створіть дивовижне візуальне шоу. Всі налаштування та медіа зберігаються локально на вашому комп\'ютері.',
            'download.box.title': 'Завантажте Haluzator безкоштовно',
            'download.box.subtitle': 'Версія Windows | Веб-версія - доступна для всіх',
            'download.button': 'Завантажити зараз',
            'download.warning': 'Примітка: Додаток не має цифрового підпису. Коли Windows відображає попередження безпеки, натисніть "Докладніше" або "Більше", а потім "Все одно запустити", щоб продовжити.',

            // Footer
            'footer.copyright': '© 2025 Haluzator. Всі права захищені.',
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
        const langSwitcherContainer = document.querySelector('.language-switcher');

        // Language flags mapping
        const langFlags = {
            'en': { src: 'img/001-united-kingdom.svg', alt: 'English' },
            'cs': { src: 'img/002-czech-republic.svg', alt: 'Čeština' },
            'sk': { src: 'img/003-slovak.svg', alt: 'Slovenčina' },
            'de': { src: 'img/004-detsch.svg', alt: 'Deutsch' },
            'pl': { src: 'img/006-polski.svg', alt: 'Polski' },
            'fr': { src: 'img/005-france.svg', alt: 'Français' },
            'es': { src: 'img/008-spain.svg', alt: 'Español' },
            'uk': { src: 'img/009-ukrain.svg', alt: 'Українська' }
        };

        if (langSwitcher && langFlag && langFlags[lang]) {
            langFlag.src = langFlags[lang].src;
            langFlag.alt = langFlags[lang].alt;
            langSwitcher.setAttribute('aria-label', 'Switch language');
        }

        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    // Initialize language on page load
    document.addEventListener('DOMContentLoaded', () => {
        setLanguage(currentLang);

        const langSwitcher = document.getElementById('lang-switcher');
        const langDropdown = document.getElementById('lang-dropdown');
        const langSwitcherContainer = document.querySelector('.language-switcher');

        // Toggle dropdown on button click
        if (langSwitcher) {
            langSwitcher.addEventListener('click', (e) => {
                e.stopPropagation();
                langSwitcherContainer.classList.toggle('active');
                langSwitcher.setAttribute('aria-expanded',
                    langSwitcherContainer.classList.contains('active') ? 'true' : 'false');
            });
        }

        // Handle language option clicks
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const newLang = option.getAttribute('data-lang');
                if (newLang && translations[newLang]) {
                    setLanguage(newLang);
                    langSwitcherContainer.classList.remove('active');
                    langSwitcher.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (langSwitcherContainer && !langSwitcherContainer.contains(e.target)) {
                langSwitcherContainer.classList.remove('active');
                langSwitcher.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Export for external use
    window.i18n = {
        setLanguage: setLanguage,
        getLanguage: () => currentLang,
        t: (key) => translations[currentLang][key] || key
    };
})();

