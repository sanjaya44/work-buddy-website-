
const translations = {
    en: {
        nav: {
            categories: "Categories",
            postTask: "Post a Task",
            browseTasks: "Browse Tasks",
            howItWorks: "How it works",
            login: "Log in",
            signup: "Sign up",
            viewAllCategories: "View All Categories"
        },
        footer: {
            tagline: "Connecting you with trusted local Taskers for any job, big or small.",
            quickLinks: "Quick Links",
            home: "Home",
            legal: "Legal",
            terms: "Terms of Service",
            privacy: "Privacy Policy",
            cookie: "Cookie Policy",
            rights: "\u00a9 2026 TaskLanka. All rights reserved.",
            discover: "Discover",
            company: "Company",
            about: "About us",
            careers: "Careers",
            contact: "Contact us",
            downloadApp: "Download App"
        },
        categories: {
            popularServices: "Popular services",
            trendingServices: "Trending services",
            popularLocations: "Popular locations in Sri Lanka",
            browseAll: "Browse all categories",
            jobsPosted: "jobs posted",
            growth: "growth",
            popularTasks: "POPULAR TASKS"
        }
    },
    si: {
        nav: {
            categories: "වර්ගීකරණයන්",
            postTask: "කාර්යයක් පළ කරන්න",
            browseTasks: "කාර්යයන් සොයන්න",
            howItWorks: "ක්‍රියා කරන ආකාරය",
            login: "ඇතුල් වන්න",
            signup: "ලියාපදිංචි වන්න",
            viewAllCategories: "සියලුම වර්ගීකරණයන් බලන්න"
        },
        footer: {
            tagline: "ඕනෑම කාර්යයක් සඳහා විශ්වාසවන්ත දේශීය ශිල්පීන් හා සම්බන්ධ වන්න.",
            quickLinks: "ඉක්මන් සබැඳි",
            home: "මුල් පිටුව",
            legal: "නීතිමය",
            terms: "සේවා කොන්දේසි",
            privacy: "රහස්‍යතා ප්‍රතිපත්තිය",
            cookie: "කුකී ප්‍රතිපත්තිය",
            rights: "\u00a9 2026 TaskLanka. සියලු හිමිකම් ඇවිරිණි.",
            discover: "ගවේෂණය කරන්න",
            company: "ආයතනය",
            about: "අපි ගැන",
            careers: "රැකියා අවස්ථා",
            contact: "අප අමතන්න",
            downloadApp: "යෙදුම බාගන්න"
        },
        categories: {
            popularServices: "ජනප්‍රිය සේවාවන්",
            trendingServices: "නැගී එන සේවාවන්",
            popularLocations: "ශ්‍රී ලංකාවේ ජනප්‍රිය ස්ථාන",
            browseAll: "සියලුම වර්ගීකරණයන්",
            jobsPosted: "රැකියා පළ කර ඇත",
            growth: "වර්ධනයක්",
            popularTasks: "ජනප්‍රිය කාර්යයන්"
        }
    }
};

let currentLanguage = localStorage.getItem('tasklanka-lang') || 'en';

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('tasklanka-lang', lang);
        updatePageContent();
        renderHeader();
        renderFooter();
        // Dispatch event for other components to listen to
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
}

function t(keyPath) {
    const keys = keyPath.split('.');
    let value = translations[currentLanguage];
    for (const key of keys) {
        if (value && value[key]) {
            value = value[key];
        } else {
            return keyPath; // Fallback to key if translation missing
        }
    }
    return value;
}

function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
}
