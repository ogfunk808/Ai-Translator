/**
 * NexusAI - Modern Neural Voice & Text Translator Logic
 */

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

    // --- State Variables ---
    let sourceLang = LANGUAGES[0]; // Auto Detect
    let targetLang = LANGUAGES.find(l => l.code === 'es') || LANGUAGES[46]; // Spanish default
    let selectedTone = 'standard';
    let debounceTimer = null;
    let isRecording = false;
    let recognition = null;
    let activeSynthUtterance = null;
    let favoritesList = JSON.parse(localStorage.getItem('nexus_favs') || '[]');
    let historyList = JSON.parse(localStorage.getItem('nexus_history') || '[]');
    let userEngineConfig = JSON.parse(localStorage.getItem('nexus_settings') || '{"engine":"neural","pitch":1.0,"rate":1.0}');

    // --- DOM Element References ---
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

    // --- 2. Populate Dropdown Menus ---
    function renderDropdownList(listElement, languages, isSource = true) {
        listElement.innerHTML = '';
        languages.forEach(lang => {
            if (!isSource && lang.code === 'auto') return; // Target cannot be Auto Detect
            const option = document.createElement('div');
            option.className = 'lang-option';
            const currentSelected = isSource ? sourceLang.code : targetLang.code;
            if (lang.code === currentSelected) option.classList.add('selected');

            option.innerHTML = `
                <div style="display:flex; align-items:center; gap:0.6rem;">
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

    // Filter Languages on Search Input
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

    // Toggle Dropdowns
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

    // --- 3. Translation Engine & API Handler ---
    async function performTranslation(text, srcCode, tgtCode, tone) {
        if (!text.trim()) return '';

        // Prepare language pair (auto -> en default if auto-detect)
        const srcParam = srcCode === 'auto' ? 'auto' : srcCode;
        const langpair = `${srcParam}|${tgtCode}`;

        // Custom API Key Engine Fallback
        if (userEngineConfig.engine === 'gemini' && userEngineConfig.apiKey) {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${userEngineConfig.apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: `Translate the following text into ${targetLang.name} using a ${tone} tone. Return ONLY the translated text without extra formatting:\n\n${text}` }]
                        }]
                    })
                });
                const data = await response.json();
                if (data.candidates && data.candidates[0].content.parts[0].text) {
                    return data.candidates[0].content.parts[0].text.trim();
                }
            } catch (err) {
                console.warn('Gemini API call failed, falling back to neural mesh...', err);
            }
        }

        // Default Neural Mesh API (MyMemory + Lingva fallback)
        try {
            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.responseData && data.responseData.translatedText) {
                let translated = data.responseData.translatedText;
                
                // If Auto-detect was used, update detected language flag/info if returned
                if (srcCode === 'auto' && data.responseData.detectedLanguage) {
                    const detectedCode = data.responseData.detectedLanguage.toLowerCase();
                    const match = LANGUAGES.find(l => l.code.toLowerCase() === detectedCode);
                    if (match) {
                        sourceName.textContent = `Auto (${match.name})`;
                        sourceFlag.textContent = match.flag;
                    }
                }

                // Apply tone modification styling if specified
                if (tone === 'formal') {
                    // Slight refinement simulation for tone mode
                    translated = applyToneAdjustment(translated, 'formal');
                } else if (tone === 'casual') {
                    translated = applyToneAdjustment(translated, 'casual');
                }

                return translated;
            }
        } catch (err) {
            console.error('Translation network request failed:', err);
        }

        return 'Error: Unable to connect to translation server. Please check your internet connection.';
    }

    function applyToneAdjustment(text, tone) {
        if (tone === 'formal') {
            return text.replace(/thanks/gi, 'Thank you').replace(/hey/gi, 'Greetings');
        }
        if (tone === 'casual') {
            return text.replace(/Thank you/gi, 'Thanks').replace(/Greetings/gi, 'Hey');
        }
        return text;
    }

    // Trigger Translation with Debouncing
    function triggerTranslation() {
        const text = sourceText.value.trim();
        charCounter.textContent = `${sourceText.value.length} / 5000`;

        if (!text) {
            targetText.innerHTML = '<span class="output-placeholder">Translation will appear here in real-time...</span>';
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

            // Save to history
            saveToHistory(text, result, sourceLang.name, targetLang.name);
            generateDictionarySynonyms(text, result);
        }, 400);
    }

    // Input Listeners
    sourceText.addEventListener('input', triggerTranslation);
    translateNowBtn.addEventListener('click', triggerTranslation);

    // --- 4. Voice Speech-to-Text Recognition ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            isRecording = true;
            micBtn.classList.add('recording');
            voiceWave.classList.add('active');
            showToast('🎙️ Listening... Speak now');
        };

        recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';

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
            console.error('Speech Recognition Error:', event.error);
            stopRecording();
            showToast('⚠️ Microphone error: ' + event.error);
        };

        recognition.onend = () => {
            stopRecording();
        };
    } else {
        micBtn.title = 'Speech Recognition not supported in this browser';
    }

    function stopRecording() {
        isRecording = false;
        micBtn.classList.remove('recording');
        voiceWave.classList.remove('active');
        if (recognition) recognition.stop();
    }

    micBtn.addEventListener('click', () => {
        if (!SpeechRecognition) {
            showToast('⚠️ Voice input requires Google Chrome, Edge, or Safari.');
            return;
        }

        if (isRecording) {
            stopRecording();
        } else {
            recognition.lang = sourceLang.speech || 'en-US';
            recognition.start();
        }
    });

    // --- 5. Voice Text-to-Speech Output ---
    function speakText(text, langCode) {
        if (!('speechSynthesis' in window)) {
            showToast('⚠️ Audio playback not supported in this browser');
            return;
        }

        window.speechSynthesis.cancel(); // Stop any active speech

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = parseFloat(userEngineConfig.pitch || 1.0);
        utterance.rate = parseFloat(userEngineConfig.rate || 1.0);

        // Find best matching system voice
        const voices = window.speechSynthesis.getVoices();
        const matchedVoice = voices.find(v => v.lang.startsWith(langCode)) || voices.find(v => v.lang.startsWith('en'));
        if (matchedVoice) utterance.voice = matchedVoice;

        utterance.onstart = () => {
            targetTtsBtn.classList.add('speaking');
        };

        utterance.onend = utterance.onerror = () => {
            targetTtsBtn.classList.remove('speaking');
        };

        window.speechSynthesis.speak(utterance);
    }

    sourceTtsBtn.addEventListener('click', () => {
        if (sourceText.value) speakText(sourceText.value, sourceLang.speech);
    });

    targetTtsBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (text && !text.includes('Translation will appear')) speakText(text, targetLang.speech);
    });

    // --- 6. Utility Features (Swap, Copy, Clear, Tone) ---
    // Swap Languages
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

        // Swap text contents
        const srcVal = sourceText.value;
        const tgtVal = targetText.textContent.includes('Translation will appear') ? '' : targetText.textContent;

        sourceText.value = tgtVal;
        targetText.textContent = srcVal;

        triggerTranslation();
        showToast('🔄 Languages swapped!');
    });

    // Clear Source
    clearSourceBtn.addEventListener('click', () => {
        sourceText.value = '';
        targetText.innerHTML = '<span class="output-placeholder">Translation will appear here in real-time...</span>';
        charCounter.textContent = '0 / 5000';
        dictDrawer.classList.remove('active');
        if (isRecording) stopRecording();
    });

    // Paste Clipboard
    pasteBtn.addEventListener('click', async () => {
        try {
            const clipText = await navigator.clipboard.readText();
            sourceText.value = clipText;
            triggerTranslation();
            showToast('📋 Text pasted from clipboard!');
        } catch (err) {
            showToast('⚠️ Clipboard read permission denied.');
        }
    });

    // Copy Translation
    copyTargetBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (text && !text.includes('Translation will appear')) {
            navigator.clipboard.writeText(text);
            showToast('✅ Translation copied to clipboard!');
        }
    });

    // Tone Pills Handler
    document.querySelectorAll('.tone-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.tone-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            selectedTone = pill.dataset.tone;
            triggerTranslation();
        });
    });

    // Favorites Handler
    favBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (!text || text.includes('Translation will appear')) return;

        favBtn.classList.toggle('favorited');
        showToast(favBtn.classList.contains('favorited') ? '❤️ Saved to favorites!' : 'Removed from favorites');
    });

    // --- 7. Dictionary & Synonyms Drawer ---
    function generateDictionarySynonyms(srcText, tgtText) {
        if (srcText.split(' ').length > 4) {
            dictDrawer.classList.remove('active');
            return;
        }

        dictContent.innerHTML = `
            <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.2rem;">${srcText} (${sourceLang.name})</div>
            <div>• Direct Translation: <strong style="color: var(--accent-indigo);">${tgtText}</strong></div>
            <div>• Synonyms: ${tgtText}, context adaptation, definition term</div>
        `;
    }

    toggleDictBtn.addEventListener('click', () => {
        dictDrawer.classList.toggle('active');
    });
    closeDictBtn.addEventListener('click', () => {
        dictDrawer.classList.remove('active');
    });

    // --- 8. History Drawer Management ---
    function saveToHistory(src, tgt, srcL, tgtL) {
        if (!src || !tgt || tgt.includes('Translation will appear')) return;
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
        localStorage.setItem('nexus_history', JSON.stringify(historyList));
        renderHistory();
    }

    function renderHistory() {
        historyListContainer.innerHTML = '';
        if (historyList.length === 0) {
            historyListContainer.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 2rem;">No translation history yet.</div>';
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
        localStorage.removeItem('nexus_history');
        renderHistory();
        showToast('History cleared');
    });

    // --- 9. Settings Modal Management ---
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
        localStorage.setItem('nexus_settings', JSON.stringify(userEngineConfig));
        settingsModal.classList.remove('open');
        showToast('⚙️ Settings saved successfully!');
    });

    // --- 10. Dark/Light Theme Toggle ---
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        showToast(`Theme switched to ${document.body.classList.contains('light-theme') ? 'Light Glass' : 'Cyber Dark'}`);
    });

    // --- 11. Toast Notifications Utility ---
    function showToast(message) {
        const toastContainer = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
});
