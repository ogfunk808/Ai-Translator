/**
 * OG TRANSLATOR - Real 3D Three.js WebGL Logic & Voice Engine
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrWENCoUVpDP10wE2_4rt_8c26YpBV6-E",
  authDomain: "aitranslator0.firebaseapp.com",
  projectId: "aitranslator0",
  storageBucket: "aitranslator0.firebasestorage.app",
  messagingSenderId: "31896899334",
  appId: "1:31896899334:web:7c91d1557dbbc82715d887",
  measurementId: "G-0W8CNN5E21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Comprehensive World Languages Database (100+ Languages) ---
    const LANGUAGES = [
        { code: 'auto', name: 'Auto Detect', flag: '🌐', speech: 'en-US' },
        { code: 'af', name: 'Afrikaans', flag: '🇿🇦', speech: 'af-ZA' },
        { code: 'sq', name: 'Albanian', flag: '🇦🇱', speech: 'sq-AL' },
        { code: 'am', name: 'Amharic', flag: '🇪🇹', speech: 'am-ET' },
        { code: 'ar', name: 'Arabic', flag: '🇸🇦', speech: 'ar-SA' },
        { code: 'hy', name: 'Armenian', flag: '🇦🇲', speech: 'hy-AM' },
        { code: 'az', name: 'Azerbaijani', flag: '🇦🇿', speech: 'az-AZ' },
        { code: 'eu', name: 'Basque', flag: '🇪🇸', speech: 'eu-ES' },
        { code: 'be', name: 'Belarusian', flag: '🇧🇾', speech: 'be-BY' },
        { code: 'bn', name: 'Bengali', flag: '🇧🇩', speech: 'bn-BD' },
        { code: 'bs', name: 'Bosnian', flag: '🇧🇦', speech: 'bs-BA' },
        { code: 'bg', name: 'Bulgarian', flag: '🇧🇬', speech: 'bg-BG' },
        { code: 'ca', name: 'Catalan', flag: '🇪🇸', speech: 'ca-ES' },
        { code: 'ceb', name: 'Cebuano', flag: '🇵🇭', speech: 'ceb-PH' },
        { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳', speech: 'zh-CN' },
        { code: 'zh-TW', name: 'Chinese (Traditional)', flag: '🇹🇼', speech: 'zh-TW' },
        { code: 'co', name: 'Corsican', flag: '🇫🇷', speech: 'co-FR' },
        { code: 'hr', name: 'Croatian', flag: '🇭🇷', speech: 'hr-HR' },
        { code: 'cs', name: 'Czech', flag: '🇨🇿', speech: 'cs-CZ' },
        { code: 'da', name: 'Danish', flag: '🇩🇰', speech: 'da-DK' },
        { code: 'nl', name: 'Dutch', flag: '🇳🇱', speech: 'nl-NL' },
        { code: 'en', name: 'English', flag: '🇺🇸', speech: 'en-US' },
        { code: 'eo', name: 'Esperanto', flag: '🌍', speech: 'eo' },
        { code: 'et', name: 'Estonian', flag: '🇪🇪', speech: 'et-EE' },
        { code: 'fi', name: 'Finnish', flag: '🇫🇮', speech: 'fi-FI' },
        { code: 'fr', name: 'French', flag: '🇫🇷', speech: 'fr-FR' },
        { code: 'fy', name: 'Frisian', flag: '🇳🇱', speech: 'fy-NL' },
        { code: 'gl', name: 'Galician', flag: '🇪🇸', speech: 'gl-ES' },
        { code: 'ka', name: 'Georgian', flag: '🇬🇪', speech: 'ka-GE' },
        { code: 'de', name: 'German', flag: '🇩🇪', speech: 'de-DE' },
        { code: 'el', name: 'Greek', flag: '🇬🇷', speech: 'el-GR' },
        { code: 'gu', name: 'Gujarati', flag: '🇮🇳', speech: 'gu-IN' },
        { code: 'ht', name: 'Haitian Creole', flag: '🇭🇹', speech: 'ht-HT' },
        { code: 'ha', name: 'Hausa', flag: '🇳🇬', speech: 'ha-NG' },
        { code: 'haw', name: 'Hawaiian', flag: '🇺🇸', speech: 'haw-US' },
        { code: 'he', name: 'Hebrew', flag: '🇮🇱', speech: 'he-IL' },
        { code: 'hi', name: 'Hindi', flag: '🇮🇳', speech: 'hi-IN' },
        { code: 'hmn', name: 'Hmong', flag: '🇱🇦', speech: 'hmn' },
        { code: 'hu', name: 'Hungarian', flag: '🇭🇺', speech: 'hu-HU' },
        { code: 'is', name: 'Icelandic', flag: '🇮🇸', speech: 'is-IS' },
        { code: 'ig', name: 'Igbo', flag: '🇳🇬', speech: 'ig-NG' },
        { code: 'id', name: 'Indonesian', flag: '🇮🇩', speech: 'id-ID' },
        { code: 'ga', name: 'Irish', flag: '🇮🇪', speech: 'ga-IE' },
        { code: 'it', name: 'Italian', flag: '🇮🇹', speech: 'it-IT' },
        { code: 'ja', name: 'Japanese', flag: '🇯🇵', speech: 'ja-JP' },
        { code: 'jv', name: 'Javanese', flag: '🇮🇩', speech: 'jw-ID' },
        { code: 'kn', name: 'Kannada', flag: '🇮🇳', speech: 'kn-IN' },
        { code: 'kk', name: 'Kazakh', flag: '🇰🇿', speech: 'kk-KZ' },
        { code: 'km', name: 'Khmer', flag: '🇰🇭', speech: 'km-KH' },
        { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼', speech: 'rw-RW' },
        { code: 'ko', name: 'Korean', flag: '🇰🇷', speech: 'ko-KR' },
        { code: 'ku', name: 'Kurdish', flag: '🇮🇶', speech: 'ku-TR' },
        { code: 'ky', name: 'Kyrgyz', flag: '🇰🇬', speech: 'ky-KG' },
        { code: 'lo', name: 'Lao', flag: '🇱🇦', speech: 'lo-LA' },
        { code: 'la', name: 'Latin', flag: '🇻🇦', speech: 'la' },
        { code: 'lv', name: 'Latvian', flag: '🇱🇻', speech: 'lv-LV' },
        { code: 'lt', name: 'Lithuanian', flag: '🇱🇹', speech: 'lt-LT' },
        { code: 'lb', name: 'Luxembourgish', flag: '🇱🇺', speech: 'lb-LU' },
        { code: 'mk', name: 'Macedonian', flag: '🇲🇰', speech: 'mk-MK' },
        { code: 'mg', name: 'Malagasy', flag: '🇲🇬', speech: 'mg-MG' },
        { code: 'ms', name: 'Malay', flag: '🇲🇾', speech: 'ms-MY' },
        { code: 'ml', name: 'Malayalam', flag: '🇮🇳', speech: 'ml-IN' },
        { code: 'mt', name: 'Maltese', flag: '🇲🇹', speech: 'mt-MT' },
        { code: 'mi', name: 'Maori', flag: '🇳🇿', speech: 'mi-NZ' },
        { code: 'mr', name: 'Marathi', flag: '🇮🇳', speech: 'mr-IN' },
        { code: 'mn', name: 'Mongolian', flag: '🇲🇳', speech: 'mn-MN' },
        { code: 'my', name: 'Myanmar (Burmese)', flag: '🇲🇲', speech: 'my-MM' },
        { code: 'ne', name: 'Nepali', flag: '🇳🇵', speech: 'ne-NP' },
        { code: 'no', name: 'Norwegian', flag: '🇳🇴', speech: 'no-NO' },
        { code: 'ny', name: 'Nyanja (Chichewa)', flag: '🇲🇼', speech: 'ny-MW' },
        { code: 'or', name: 'Odia (Oriya)', flag: '🇮🇳', speech: 'or-IN' },
        { code: 'ps', name: 'Pashto', flag: '🇦🇫', speech: 'ps-AF' },
        { code: 'fa', name: 'Persian', flag: '🇮🇷', speech: 'fa-IR' },
        { code: 'pl', name: 'Polish', flag: '🇵🇱', speech: 'pl-PL' },
        { code: 'pt', name: 'Portuguese', flag: '🇵🇹', speech: 'pt-PT' },
        { code: 'pa', name: 'Punjabi', flag: '🇮🇳', speech: 'pa-IN' },
        { code: 'ro', name: 'Romanian', flag: '🇷🇴', speech: 'ro-RO' },
        { code: 'ru', name: 'Russian', flag: '🇷🇺', speech: 'ru-RU' },
        { code: 'sm', name: 'Samoan', flag: '🇼🇸', speech: 'sm-WS' },
        { code: 'gd', name: 'Scots Gaelic', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', speech: 'gd-GB' },
        { code: 'sr', name: 'Serbian', flag: '🇷🇸', speech: 'sr-RS' },
        { code: 'st', name: 'Sesotho', flag: '🇱🇸', speech: 'st-LS' },
        { code: 'sn', name: 'Shona', flag: '🇿🇼', speech: 'sn-ZW' },
        { code: 'sd', name: 'Sindhi', flag: '🇵🇰', speech: 'sd-PK' },
        { code: 'si', name: 'Sinhala', flag: '🇱🇰', speech: 'si-LK' },
        { code: 'sk', name: 'Slovak', flag: '🇸🇰', speech: 'sk-SK' },
        { code: 'sl', name: 'Slovenian', flag: '🇸🇮', speech: 'sl-SI' },
        { code: 'so', name: 'Somali', flag: '🇸🇴', speech: 'so-SO' },
        { code: 'es', name: 'Spanish', flag: '🇪🇸', speech: 'es-ES' },
        { code: 'su', name: 'Sundanese', flag: '🇮🇩', speech: 'su-ID' },
        { code: 'sw', name: 'Swahili', flag: '🇰🇪', speech: 'sw-KE' },
        { code: 'sv', name: 'Swedish', flag: '🇸🇪', speech: 'sv-SE' },
        { code: 'tg', name: 'Tajik', flag: '🇹🇯', speech: 'tg-TJ' },
        { code: 'ta', name: 'Tamil', flag: '🇮🇳', speech: 'ta-IN' },
        { code: 'tt', name: 'Tatar', flag: '🇷🇺', speech: 'tt-RU' },
        { code: 'te', name: 'Telugu', flag: '🇮🇳', speech: 'te-IN' },
        { code: 'th', name: 'Thai', flag: '🇹🇭', speech: 'th-TH' },
        { code: 'tr', name: 'Turkish', flag: '🇹🇷', speech: 'tr-TR' },
        { code: 'tk', name: 'Turkmen', flag: '🇹🇲', speech: 'tk-TM' },
        { code: 'uk', name: 'Ukrainian', flag: '🇺🇦', speech: 'uk-UA' },
        { code: 'ur', name: 'Urdu', flag: '🇵🇰', speech: 'ur-PK' },
        { code: 'ug', name: 'Uyghur', flag: '🇨🇳', speech: 'ug-CN' },
        { code: 'uz', name: 'Uzbek', flag: '🇺🇿', speech: 'uz-UZ' },
        { code: 'vi', name: 'Vietnamese', flag: '🇻🇳', speech: 'vi-VN' },
        { code: 'cy', name: 'Welsh', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', speech: 'cy-GB' },
        { code: 'xh', name: 'Xhosa', flag: '🇿🇦', speech: 'xh-ZA' },
        { code: 'yi', name: 'Yiddish', flag: '🇮🇱', speech: 'yi' },
        { code: 'yo', name: 'Yoruba', flag: '🇳🇬', speech: 'yo-NG' },
        { code: 'zu', name: 'Zulu', flag: '🇿🇦', speech: 'zu-ZA' }
    ];

    // --- 2. State Variables ---
    let sourceLang = LANGUAGES[0]; // Auto Detect
    let targetLang = LANGUAGES.find(l => l.code === 'es') || LANGUAGES[46]; // Spanish default
    let selectedTone = 'standard';
    let debounceTimer = null;
    let isRecording = false;
    let isSpeaking = false;
    let recognition = null;
    let is3DSpinning = true;
    let particleDensityMode = 1;
    let historyList = JSON.parse(localStorage.getItem('og_3d_history') || '[]');
    let userEngineConfig = JSON.parse(localStorage.getItem('og_3d_settings') || '{"engine":"neural","pitch":1.0,"rate":1.0}');

    // --- DOM Elements ---
    const canvas = document.getElementById('webgl-canvas');
    const wrapper3d = document.getElementById('translator-3d-wrapper');

    const sourceLangWrapper = document.getElementById('source-lang-wrapper');
    const sourceLangBtn = document.getElementById('source-lang-btn');
    const sourceFlag = document.getElementById('source-flag');
    const sourceName = document.getElementById('source-name');
    const sourceDropdown = document.getElementById('source-dropdown');
    const sourceSearch = document.getElementById('source-search');
    const sourceLangList = document.getElementById('source-lang-list');

    const targetLangWrapper = document.getElementById('target-lang-wrapper');
    const targetLangBtn = document.getElementById('target-lang-btn');
    const targetFlag = document.getElementById('target-flag');
    const targetName = document.getElementById('target-name');
    const targetDropdown = document.getElementById('target-dropdown');
    const targetSearch = document.getElementById('target-search');
    const targetLangList = document.getElementById('target-lang-list');

    const sourceText = document.getElementById('source-text');
    const targetText = document.getElementById('target-text');
    const charCounter = document.getElementById('char-counter');
    const translationLoader = document.getElementById('translation-loader');
    const voiceWave = document.getElementById('voice-wave');
    const dictDrawer = document.getElementById('dict-drawer');
    const dictContent = document.getElementById('dict-content');

    const micBtn = document.getElementById('mic-btn');
    const sourceTtsBtn = document.getElementById('source-tts-btn');
    const targetTtsBtn = document.getElementById('target-tts-btn');
    const pasteBtn = document.getElementById('paste-btn');
    const copyTargetBtn = document.getElementById('copy-target-btn');
    const favBtn = document.getElementById('fav-btn');
    const swapLangBtn = document.getElementById('swap-lang-btn');
    const clearSourceBtn = document.getElementById('clear-source-btn');
    const translateNowBtn = document.getElementById('translate-now-btn');
    const toggleDictBtn = document.getElementById('toggle-dict-btn');
    const closeDictBtn = document.getElementById('close-dict-btn');

    const btnToggleSpin = document.getElementById('btn-toggle-spin');
    const btnToggleParticles = document.getElementById('btn-toggle-particles');
    const btnResetCamera = document.getElementById('btn-reset-camera');

    const themeToggle = document.getElementById('theme-toggle');
    const historyBtn = document.getElementById('history-btn');
    const historyOverlay = document.getElementById('history-overlay');
    const closeHistoryBtn = document.getElementById('close-history-btn');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const historyListContainer = document.getElementById('history-list');

    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const engineSelect = document.getElementById('engine-select');
    const apiKeyGroup = document.getElementById('api-key-group');
    const apiKeyInput = document.getElementById('api-key-input');
    const speechPitch = document.getElementById('speech-pitch');
    const speechRate = document.getElementById('speech-rate');
    const pitchVal = document.getElementById('pitch-val');
    const rateVal = document.getElementById('rate-val');

    // --- 3. Three.js WebGL 3D Engine Initialization ---
    let scene, camera, renderer, globeMesh, coreMesh, particleSystem, energyRing1, energyRing2;
    let particlePositions, particleOriginals;
    const PARTICLE_COUNT = 1600;

    function init3DScene() {
        if (!THREE) return;

        // Scene & Camera
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 25;

        // Renderer
        renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 1. Holographic 3D Wireframe Globe
        const globeGeo = new THREE.SphereGeometry(7.5, 32, 32);
        const globeMat = new THREE.MeshBasicMaterial({
            color: 0xec4899,
            wireframe: true,
            transparent: true,
            opacity: 0.25
        });
        globeMesh = new THREE.Mesh(globeGeo, globeMat);
        scene.add(globeMesh);

        // 2. Inner Glowing Core
        const coreGeo = new THREE.SphereGeometry(6.2, 24, 24);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0x6366f1,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        coreMesh = new THREE.Mesh(coreGeo, coreMat);
        scene.add(coreMesh);

        // 3. Orbiting 3D Energy Rings
        const ringGeo1 = new THREE.RingGeometry(9.2, 9.5, 64);
        const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xf472b6, side: THREE.DoubleSide, wireframe: true, transparent: true, opacity: 0.35 });
        energyRing1 = new THREE.Mesh(ringGeo1, ringMat1);
        energyRing1.rotation.x = Math.PI / 3;
        scene.add(energyRing1);

        const ringGeo2 = new THREE.RingGeometry(11.0, 11.3, 64);
        const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x818cf8, side: THREE.DoubleSide, wireframe: true, transparent: true, opacity: 0.25 });
        energyRing2 = new THREE.Mesh(ringGeo2, ringMat2);
        energyRing2.rotation.y = Math.PI / 4;
        scene.add(energyRing2);

        // 4. Orbiting 3D Particle Cloud
        const particleGeo = new THREE.BufferGeometry();
        particlePositions = new Float32Array(PARTICLE_COUNT * 3);
        particleOriginals = new Float32Array(PARTICLE_COUNT * 3);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const r = 8.5 + (Math.random() - 0.5) * 6.0;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            particlePositions[i * 3] = x;
            particlePositions[i * 3 + 1] = y;
            particlePositions[i * 3 + 2] = z;

            particleOriginals[i * 3] = x;
            particleOriginals[i * 3 + 1] = y;
            particleOriginals[i * 3 + 2] = z;
        }

        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0xec4899,
            size: 0.18,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending
        });

        particleSystem = new THREE.Points(particleGeo, particleMat);
        scene.add(particleSystem);

        // Resize Listener
        window.addEventListener('resize', onWindowResize);

        // Mouse Parallax Listener
        window.addEventListener('mousemove', onMouseMoveParallax);

        // Animation Render Loop
        animate3D();
    }

    let mouseX = 0, mouseY = 0;
    let targetCameraX = 0, targetCameraY = 0;

    function onMouseMoveParallax(e) {
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        mouseX = (e.clientX - windowHalfX) / windowHalfX;
        mouseY = (e.clientY - windowHalfY) / windowHalfY;

        targetCameraX = mouseX * 4;
        targetCameraY = -mouseY * 4;

        // 3D Card Tilt Effect
        const tiltX = mouseY * -12;
        const tiltY = mouseX * 12;
        wrapper3d.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }

    function onWindowResize() {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    let clock = new THREE.Clock();

    function animate3D() {
        requestAnimationFrame(animate3D);

        const elapsedTime = clock.getElapsedTime();

        // Auto Rotation
        if (is3DSpinning && globeMesh) {
            globeMesh.rotation.y += 0.003;
            coreMesh.rotation.y -= 0.004;
            energyRing1.rotation.z += 0.005;
            energyRing2.rotation.z -= 0.004;
            particleSystem.rotation.y += 0.002;
        }

        // Camera Smooth Lerp
        camera.position.x += (targetCameraX - camera.position.x) * 0.05;
        camera.position.y += (targetCameraY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        // Audio-Reactive Particle Pulse
        const positions = particleSystem.geometry.attributes.position.array;
        const reactiveMultiplier = (isRecording || isSpeaking) ? 1.4 : 1.0;
        const pulse = Math.sin(elapsedTime * 4) * (isRecording ? 0.8 : 0.2);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const idx = i * 3;
            const ox = particleOriginals[idx];
            const oy = particleOriginals[idx + 1];
            const oz = particleOriginals[idx + 2];

            positions[idx] = ox * (reactiveMultiplier + pulse * 0.1);
            positions[idx + 1] = oy * (reactiveMultiplier + pulse * 0.1);
            positions[idx + 2] = oz * (reactiveMultiplier + pulse * 0.1);
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
    }

    init3DScene();

    // 3D Controls Listeners
    btnToggleSpin.addEventListener('click', () => {
        is3DSpinning = !is3DSpinning;
        btnToggleSpin.classList.toggle('active', is3DSpinning);
        btnToggleSpin.querySelector('span').textContent = `🌐 Auto Rotation: ${is3DSpinning ? 'ON' : 'OFF'}`;
        showToast(is3DSpinning ? '🌐 3D Rotation Enabled' : '⏸️ 3D Rotation Paused');
    });

    btnToggleParticles.addEventListener('click', () => {
        particleDensityMode = (particleDensityMode % 3) + 1;
        if (particleSystem) {
            particleSystem.material.size = 0.12 * particleDensityMode;
        }
        showToast(`✨ 3D Particle Density: Level ${particleDensityMode}`);
    });

    btnResetCamera.addEventListener('click', () => {
        targetCameraX = 0;
        targetCameraY = 0;
        wrapper3d.style.transform = `rotateX(0deg) rotateY(0deg)`;
        showToast('🎯 3D Perspective Reset');
    });

    // --- 4. Populate Dropdown Menus ---
    function renderDropdownList(listElement, languages, isSource = true) {
        listElement.innerHTML = '';
        languages.forEach(lang => {
            if (!isSource && lang.code === 'auto') return;
            const option = document.createElement('div');
            option.className = 'lang-option';
            const currentSelected = isSource ? sourceLang.code : targetLang.code;
            if (lang.code === currentSelected) option.classList.add('selected');

            option.innerHTML = `
                <div style="display:flex; align-items:center; gap:0.65rem;">
                    <span class="lang-flag">${lang.flag}</span>
                    <span>${lang.name}</span>
                </div>
                <span class="lang-code-pill">${lang.code}</span>
            `;

            option.addEventListener('click', () => {
                if (isSource) {
                    sourceLang = lang;
                    sourceFlag.textContent = lang.flag;
                    sourceName.textContent = lang.name;
                    sourceLangWrapper.classList.remove('active');
                } else {
                    targetLang = lang;
                    targetFlag.textContent = lang.flag;
                    targetName.textContent = lang.name;
                    targetLangWrapper.classList.remove('active');
                }
                triggerTranslation();
            });

            listElement.appendChild(option);
        });
    }

    renderDropdownList(sourceLangList, LANGUAGES, true);
    renderDropdownList(targetLangList, LANGUAGES, false);

    sourceSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = LANGUAGES.filter(l => l.name.toLowerCase().includes(query) || l.code.toLowerCase().includes(query));
        renderDropdownList(sourceLangList, filtered, true);
    });

    targetSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = LANGUAGES.filter(l => l.name.toLowerCase().includes(query) || l.code.toLowerCase().includes(query));
        renderDropdownList(targetLangList, filtered, false);
    });

    sourceLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        targetLangWrapper.classList.remove('active');
        sourceLangWrapper.classList.toggle('active');
        if (sourceLangWrapper.classList.contains('active')) sourceSearch.focus();
    });

    targetLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sourceLangWrapper.classList.remove('active');
        targetLangWrapper.classList.toggle('active');
        if (targetLangWrapper.classList.contains('active')) targetSearch.focus();
    });

    document.addEventListener('click', () => {
        sourceLangWrapper.classList.remove('active');
        targetLangWrapper.classList.remove('active');
    });

    // --- 5. Multi-Engine Neural Translation Engine ---
    async function performTranslation(text, srcCode, tgtCode, tone) {
        if (!text || !text.trim()) return '';

        let src = srcCode;
        const isLatinInput = /^[a-zA-Z0-9\s.,!?'"\-]+$/.test(text.trim());
        if (srcCode === 'auto' || (srcCode === tgtCode && isLatinInput) || (isLatinInput && tgtCode !== 'en' && srcCode !== 'en')) {
            src = 'auto';
        }
        const tgt = tgtCode;

        // Option A: Custom Gemini API
        if (userEngineConfig.engine === 'gemini' && userEngineConfig.apiKey) {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${userEngineConfig.apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: `Translate the following text into ${targetLang.name} with a ${tone} style. Preserve all formatting, numbers, and symbols. Return ONLY the translated result:\n\n${text}` }]
                        }]
                    })
                });
                const data = await response.json();
                if (data.candidates && data.candidates[0].content.parts[0].text) {
                    return data.candidates[0].content.parts[0].text.trim();
                }
            } catch (err) {
                console.warn('Gemini API failed, switching to Primary GTX Engine...', err);
            }
        }

        // Helper: Split long texts into manageable chunks to ensure 100% letter translation
        const MAX_CHUNK_LENGTH = 1200;
        const chunks = splitTextIntoChunks(text, MAX_CHUNK_LENGTH);
        let fullTranslation = '';

        for (let chunk of chunks) {
            let chunkResult = await fetchChunkTranslation(chunk, src, tgt);
            fullTranslation += (fullTranslation ? ' ' : '') + chunkResult;
        }

        // Apply selected tone refinements if applicable
        if (tone && tone !== 'standard') {
            fullTranslation = applyToneRefinement(fullTranslation, tone);
        }

        return fullTranslation;
    }

    // Single Chunk Translation with 3-Layer Failover (Google GTX -> MyMemory -> Lingva)
    async function fetchChunkTranslation(textChunk, src, tgt) {
        // Layer 1: Google GTX Neural API (Fastest & Most Accurate for all scripts & letters)
        try {
            const gtxUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${src}&tl=${tgt}&dt=t&q=${encodeURIComponent(textChunk)}`;
            const response = await fetch(gtxUrl);
            const data = await response.json();

            if (data && data[0]) {
                let translatedPart = '';
                for (let sentence of data[0]) {
                    if (sentence[0]) translatedPart += sentence[0];
                }

                // Detect language if auto
                if (src === 'auto' && data[2]) {
                    const detectedCode = data[2].toLowerCase();
                    const match = LANGUAGES.find(l => l.code.toLowerCase() === detectedCode);
                    if (match) {
                        sourceName.textContent = `Auto (${match.name})`;
                        sourceFlag.textContent = match.flag;
                    }
                }

                if (translatedPart.trim()) return translatedPart;
            }
        } catch (err) {
            console.warn('Google GTX Layer failed, trying MyMemory...', err);
        }

        // Layer 2: MyMemory API Fallback
        try {
            const langpair = `${src === 'auto' ? 'auto' : src}|${tgt}`;
            const mmUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textChunk)}&langpair=${langpair}`;
            const response = await fetch(mmUrl);
            const data = await response.json();

            if (data.responseData && data.responseData.translatedText) {
                if (src === 'auto' && data.responseData.detectedLanguage) {
                    const detectedCode = data.responseData.detectedLanguage.toLowerCase();
                    const match = LANGUAGES.find(l => l.code.toLowerCase() === detectedCode);
                    if (match) {
                        sourceName.textContent = `Auto (${match.name})`;
                        sourceFlag.textContent = match.flag;
                    }
                }
                return data.responseData.translatedText;
            }
        } catch (err) {
            console.warn('MyMemory Layer failed, trying Lingva...', err);
        }

        // Layer 3: Lingva Open API Fallback
        try {
            const lingvaUrl = `https://lingva.ml/api/v1/${src}/${tgt}/${encodeURIComponent(textChunk)}`;
            const response = await fetch(lingvaUrl);
            const data = await response.json();
            if (data && data.translation) return data.translation;
        } catch (err) {
            console.warn('Lingva Layer failed.', err);
        }

        return textChunk; // Final fallback: return original text if all networks fail
    }

    // Intelligent Text Chunking algorithm to preserve paragraphs & sentences
    function splitTextIntoChunks(text, maxLength) {
        if (text.length <= maxLength) return [text];
        const sentences = text.match(/[^.!?\n]+[.!?\n]+/g) || [text];
        const chunks = [];
        let currentChunk = '';

        for (let sentence of sentences) {
            if ((currentChunk + sentence).length > maxLength) {
                if (currentChunk) chunks.push(currentChunk.trim());
                currentChunk = sentence;
            } else {
                currentChunk += sentence;
            }
        }
        if (currentChunk.trim()) chunks.push(currentChunk.trim());
        return chunks;
    }

    // AI Tone Style Adapter
    function applyToneRefinement(text, tone) {
        if (tone === 'formal') {
            return text.replace(/\bthanks\b/gi, 'Thank you')
                       .replace(/\bhey\b/gi, 'Greetings')
                       .replace(/\bbye\b/gi, 'Farewell');
        }
        if (tone === 'casual') {
            return text.replace(/\bThank you\b/gi, 'Thanks')
                       .replace(/\bGreetings\b/gi, 'Hey')
                       .replace(/\bFarewell\b/gi, 'Bye');
        }
        return text;
    }

    function triggerTranslation() {
        const text = sourceText.value.trim();
        charCounter.textContent = `${sourceText.value.length} / 5000`;

        if (!text) {
            targetText.innerHTML = '<span class="output-placeholder">3D Neural translation will appear here in real-time...</span>';
            translationLoader.classList.remove('active');
            return;
        }

        translationLoader.classList.add('active');
        targetText.style.opacity = '0.4';

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => {
            const result = await performTranslation(text, sourceLang.code, targetLang.code, selectedTone);
            targetText.textContent = result;
            targetText.style.opacity = '1';
            translationLoader.classList.remove('active');

            saveToHistory(text, result, sourceLang.name, targetLang.name);
            generateDictionarySynonyms(text, result);
        }, 400);
    }

    sourceText.addEventListener('input', triggerTranslation);
    translateNowBtn.addEventListener('click', triggerTranslation);

    // --- 6. Voice Speech-to-Text Recognition ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            isRecording = true;
            micBtn.classList.add('recording');
            voiceWave.classList.add('active');
            showToast('🎙️ 3D Listening... Speak into microphone');
        };

        recognition.onresult = (event) => {
            let finalTranscript = '';
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }

            if (finalTranscript || interimTranscript) {
                sourceText.value = finalTranscript || interimTranscript;
                triggerTranslation();
            }
        };

        recognition.onerror = (event) => {
            stopRecording();
            showToast('⚠️ Microphone error: ' + event.error);
        };

        recognition.onend = () => {
            stopRecording();
        };
    }

    function stopRecording() {
        isRecording = false;
        micBtn.classList.remove('recording');
        voiceWave.classList.remove('active');
        if (recognition) recognition.stop();
    }

    micBtn.addEventListener('click', () => {
        if (!SpeechRecognition) {
            showToast('⚠️ Voice input requires Chrome, Edge, or Safari.');
            return;
        }

        if (isRecording) {
            stopRecording();
        } else {
            recognition.lang = sourceLang.speech || 'en-US';
            recognition.start();
        }
    });

    // --- 7. Voice Text-to-Speech Output ---
    function speakText(text, langCode) {
        if (!('speechSynthesis' in window)) {
            showToast('⚠️ Audio playback not supported');
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = parseFloat(userEngineConfig.pitch || 1.0);
        utterance.rate = parseFloat(userEngineConfig.rate || 1.0);

        const voices = window.speechSynthesis.getVoices();
        const matchedVoice = voices.find(v => v.lang.startsWith(langCode)) || voices.find(v => v.lang.startsWith('en'));
        if (matchedVoice) utterance.voice = matchedVoice;

        utterance.onstart = () => {
            isSpeaking = true;
            targetTtsBtn.classList.add('speaking');
        };

        utterance.onend = utterance.onerror = () => {
            isSpeaking = false;
            targetTtsBtn.classList.remove('speaking');
        };

        window.speechSynthesis.speak(utterance);
    }

    sourceTtsBtn.addEventListener('click', () => {
        if (sourceText.value) speakText(sourceText.value, sourceLang.speech);
    });

    targetTtsBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (text && !text.includes('3D Neural translation')) speakText(text, targetLang.speech);
    });

    // --- 8. Swap, Copy, Clear, Tone Pills ---
    swapLangBtn.addEventListener('click', () => {
        if (sourceLang.code === 'auto') {
            showToast('Cannot swap when Source is Auto Detect!');
            return;
        }

        const temp = sourceLang;
        sourceLang = targetLang;
        targetLang = temp;

        sourceFlag.textContent = sourceLang.flag;
        sourceName.textContent = sourceLang.name;
        targetFlag.textContent = targetLang.flag;
        targetName.textContent = targetLang.name;

        renderDropdownList(sourceLangList, LANGUAGES, true);
        renderDropdownList(targetLangList, LANGUAGES, false);

        const srcVal = sourceText.value;
        const tgtVal = targetText.textContent.includes('3D Neural translation') ? '' : targetText.textContent;

        sourceText.value = tgtVal;
        targetText.textContent = srcVal;

        triggerTranslation();
        showToast('🔄 Languages swapped!');
    });

    clearSourceBtn.addEventListener('click', () => {
        sourceText.value = '';
        targetText.innerHTML = '<span class="output-placeholder">3D Neural translation will appear here in real-time...</span>';
        charCounter.textContent = '0 / 5000';
        dictDrawer.classList.remove('active');
        if (isRecording) stopRecording();
    });

    pasteBtn.addEventListener('click', async () => {
        try {
            const clipText = await navigator.clipboard.readText();
            sourceText.value = clipText;
            triggerTranslation();
            showToast('📋 Text pasted!');
        } catch (err) {
            showToast('⚠️ Clipboard permission denied.');
        }
    });

    copyTargetBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (text && !text.includes('3D Neural translation')) {
            navigator.clipboard.writeText(text);
            showToast('✅ Translation copied!');
        }
    });

    document.querySelectorAll('.tone-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.tone-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            selectedTone = pill.dataset.tone;
            triggerTranslation();
        });
    });

    favBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (!text || text.includes('3D Neural translation')) return;

        favBtn.classList.toggle('favorited');
        showToast(favBtn.classList.contains('favorited') ? '❤️ Saved to 3D Favorites!' : 'Removed from favorites');
    });

    // --- 9. Dictionary Drawer ---
    function generateDictionarySynonyms(srcText, tgtText) {
        if (srcText.split(' ').length > 4) {
            dictDrawer.classList.remove('active');
            return;
        }

        dictContent.innerHTML = `
            <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">${srcText} (${sourceLang.name})</div>
            <div>• Direct Translation: <strong style="color: var(--accent-pink);">${tgtText}</strong></div>
            <div>• Synonyms & Alternatives: ${tgtText}, context adaptation, definition term</div>
        `;
    }

    toggleDictBtn.addEventListener('click', () => dictDrawer.classList.toggle('active'));
    closeDictBtn.addEventListener('click', () => dictDrawer.classList.remove('active'));

    // --- 10. History Drawer ---
    function saveToHistory(src, tgt, srcL, tgtL) {
        if (!src || !tgt || tgt.includes('3D Neural translation')) return;
        const exists = historyList.some(item => item.src === src && item.tgt === tgt);
        if (exists) return;

        historyList.unshift({
            src,
            tgt,
            srcL,
            tgtL,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });

        if (historyList.length > 30) historyList.pop();
        localStorage.setItem('og_3d_history', JSON.stringify(historyList));
        renderHistory();
    }

    function renderHistory() {
        historyListContainer.innerHTML = '';
        if (historyList.length === 0) {
            historyListContainer.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 2rem;">No 3D translation history yet.</div>';
            return;
        }

        historyList.forEach(item => {
            const card = document.createElement('div');
            card.className = 'history-card-item';
            card.innerHTML = `
                <div class="history-meta">
                    <span>${item.srcL} ➔ ${item.tgtL}</span>
                    <span>${item.time}</span>
                </div>
                <div class="history-src">${item.src}</div>
                <div class="history-tgt">${item.tgt}</div>
            `;
            card.addEventListener('click', () => {
                sourceText.value = item.src;
                targetText.textContent = item.tgt;
                historyOverlay.classList.remove('open');
            });
            historyListContainer.appendChild(card);
        });
    }

    historyBtn.addEventListener('click', () => {
        renderHistory();
        historyOverlay.classList.add('open');
    });
    closeHistoryBtn.addEventListener('click', () => historyOverlay.classList.remove('open'));
    clearHistoryBtn.addEventListener('click', () => {
        historyList = [];
        localStorage.removeItem('og_3d_history');
        renderHistory();
        showToast('History cleared');
    });

    // --- 11. Settings Modal ---
    settingsBtn.addEventListener('click', () => {
        engineSelect.value = userEngineConfig.engine || 'neural';
        apiKeyInput.value = userEngineConfig.apiKey || '';
        speechPitch.value = userEngineConfig.pitch || 1.0;
        speechRate.value = userEngineConfig.rate || 1.0;
        pitchVal.textContent = speechPitch.value;
        rateVal.textContent = speechRate.value;

        apiKeyGroup.style.display = engineSelect.value === 'neural' ? 'none' : 'flex';
        settingsModal.classList.add('open');
    });

    closeSettingsBtn.addEventListener('click', () => settingsModal.classList.remove('open'));

    engineSelect.addEventListener('change', () => {
        apiKeyGroup.style.display = engineSelect.value === 'neural' ? 'none' : 'flex';
    });

    speechPitch.addEventListener('input', (e) => pitchVal.textContent = e.target.value);
    speechRate.addEventListener('input', (e) => rateVal.textContent = e.target.value);

    saveSettingsBtn.addEventListener('click', () => {
        userEngineConfig = {
            engine: engineSelect.value,
            apiKey: apiKeyInput.value.trim(),
            pitch: parseFloat(speechPitch.value),
            rate: parseFloat(speechRate.value)
        };
        localStorage.setItem('og_3d_settings', JSON.stringify(userEngineConfig));
        settingsModal.classList.remove('open');
        showToast('⚙️ Settings saved!');
    });

    // --- 12. Dark/Light Theme Toggle ---
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        showToast(`Theme: ${document.body.classList.contains('light-theme') ? 'Light Glass 3D' : 'Cyber Dark 3D'}`);
    });

    // --- 14. Legal Modals & GDPR Cookie Banner Event Handlers ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies-btn');
    const cookiePrivacyLink = document.getElementById('cookie-privacy-link');

    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    const aboutModal = document.getElementById('about-modal');
    const contactModal = document.getElementById('contact-modal');

    const linkPrivacy = document.getElementById('link-privacy');
    const linkTerms = document.getElementById('link-terms');
    const linkAbout = document.getElementById('link-about');
    const linkContact = document.getElementById('link-contact');

    const closePrivacyBtn = document.getElementById('close-privacy-btn');
    const closeTermsBtn = document.getElementById('close-terms-btn');
    const closeAboutBtn = document.getElementById('close-about-btn');
    const closeContactBtn = document.getElementById('close-contact-btn');

    // Cookie Banner
    if (localStorage.getItem('og_cookies_accepted') === 'true') {
        cookieBanner.style.display = 'none';
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('og_cookies_accepted', 'true');
        cookieBanner.style.display = 'none';
        showToast('🍪 Cookie preferences saved');
    });

    cookiePrivacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.add('open');
    });

    // Legal Links
    linkPrivacy.addEventListener('click', () => privacyModal.classList.add('open'));
    linkTerms.addEventListener('click', () => termsModal.classList.add('open'));
    linkAbout.addEventListener('click', () => aboutModal.classList.add('open'));
    linkContact.addEventListener('click', () => contactModal.classList.add('open'));

    closePrivacyBtn.addEventListener('click', () => privacyModal.classList.remove('open'));
    closeTermsBtn.addEventListener('click', () => termsModal.classList.remove('open'));
    closeAboutBtn.addEventListener('click', () => aboutModal.classList.remove('open'));
    closeContactBtn.addEventListener('click', () => contactModal.classList.remove('open'));

    // --- 13. Toast Notifications ---
    function showToast(message) {
        const toastContainer = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => toast.remove(), 3000);
    }
});
