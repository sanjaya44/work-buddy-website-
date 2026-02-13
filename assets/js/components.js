function renderHeader() {
    const lang = localStorage.getItem('tasklanka-lang') || 'en';
    const isEn = lang === 'en';

    // Fallback if translations.js is not loaded or variable not defined
    if (typeof translations === 'undefined') {
        console.warn('translations.js not loaded, falling back to defaults');
        window.translations = {
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
                }
            }
        };
    }

    // Safety check: if lang is 'si' but translations.si doesn't exist (e.g. only en fallback loaded), revert to en
    const safeLang = (translations[lang] && translations[lang].nav) ? lang : 'en';
    const txt = translations[safeLang].nav;

    const header = `
    <nav class="bg-white shadow-lg fixed w-full z-20 transition-all duration-300" id="main-nav">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a href="index.html" class="flex-shrink-0 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
              </svg>
              <span class="font-bold text-xl text-gray-800">TaskLanka</span>
            </a>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8 items-center h-full">
              
              <!-- Categories Mega Menu -->
              <div class="relative group h-full flex items-center">
                <a href="categories.html" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full gap-1">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
                   ${txt.categories}
                </a>
                <!-- Dropdown -->
                <div class="absolute left-0 top-16 w-[800px] bg-white shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-blue-600 p-6 grid grid-cols-4 gap-6 z-50">
                    
                    <!-- Item 1 -->
                    <a href="post-task.html?category=cleaning" class="flex flex-col gap-2 group/item hover:bg-gray-50 p-2 rounded transition">
                        <img src="https://images.unsplash.com/photo-1581578731117-104f2a8d23e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Cleaning" class="h-24 w-full object-cover rounded-md">
                        <span class="font-semibold text-gray-800 group-hover/item:text-blue-600">Cleaning</span>
                    </a>
                    <!-- Item 2 -->
                    <a href="post-task.html?category=gardening" class="flex flex-col gap-2 group/item hover:bg-gray-50 p-2 rounded transition">
                        <img src="https://images.unsplash.com/photo-1615423696517-5e1975b94f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Gardening" class="h-24 w-full object-cover rounded-md">
                        <span class="font-semibold text-gray-800 group-hover/item:text-blue-600">Gardening</span>
                    </a>
                    <!-- Item 3 -->
                    <a href="post-task.html?category=delivery" class="flex flex-col gap-2 group/item hover:bg-gray-50 p-2 rounded transition">
                         <img src="https://images.unsplash.com/photo-1616401784845-18088beba030?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Delivery" class="h-24 w-full object-cover rounded-md">
                        <span class="font-semibold text-gray-800 group-hover/item:text-blue-600">Delivery</span>
                    </a>
                    <!-- Item 4 -->
                    <a href="post-task.html?category=removals" class="flex flex-col gap-2 group/item hover:bg-gray-50 p-2 rounded transition">
                         <img src="https://images.unsplash.com/photo-1603796846097-985223c72199?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Removals" class="h-24 w-full object-cover rounded-md">
                        <span class="font-semibold text-gray-800 group-hover/item:text-blue-600">Removals</span>
                    </a>
                    <!-- Item 5 -->
                    <a href="post-task.html?category=admin" class="flex flex-col gap-2 group/item hover:bg-gray-50 p-2 rounded transition">
                         <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Admin" class="h-24 w-full object-cover rounded-md">
                        <span class="font-semibold text-gray-800 group-hover/item:text-blue-600">Admin</span>
                    </a>
                     <!-- Item 6 -->
                     <a href="post-task.html?category=photography" class="flex flex-col gap-2 group/item hover:bg-gray-50 p-2 rounded transition">
                         <img src="https://images.unsplash.com/photo-1542038784456-1ea0e93ca64b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Photography" class="h-24 w-full object-cover rounded-md">
                        <span class="font-semibold text-gray-800 group-hover/item:text-blue-600">Photography</span>
                    </a>
                     <!-- Item 7 (View All) -->
                     <a href="categories.html" class="flex flex-col gap-2 group/item hover:bg-gray-50 p-2 rounded transition justify-center items-center h-full border-2 border-dashed border-gray-300">
                        <span class="bg-gray-100 p-3 rounded-full text-gray-600 group-hover/item:bg-blue-100 group-hover/item:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <span class="font-bold text-gray-800 group-hover/item:text-blue-600">${txt.viewAllCategories}</span>
                    </a>
                </div>
              </div>

              <a href="post-task.html" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full">${txt.postTask}</a>
              <a href="browse-tasks.html" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full">${txt.browseTasks}</a>
              <a href="how-it-works.html" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full">${txt.howItWorks}</a>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
             <!-- Language Switcher -->
            <button onclick="setLanguage('${isEn ? 'si' : 'en'}')" class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 border border-gray-200">
                <span>${isEn ? 'සිංහල' : 'English'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            </button>
            <a href="login.html" class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">${txt.login}</a>
            <a href="register.html" class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">${txt.signup}</a>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="hidden sm:hidden bg-white border-t border-gray-200" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          <a href="categories.html" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">${txt.categories}</a>
          <a href="post-task.html" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">${txt.postTask}</a>
          <a href="browse-tasks.html" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">${txt.browseTasks}</a>
          <a href="how-it-works.html" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">${txt.howItWorks}</a> 
          <a href="#" onclick="setLanguage('${isEn ? 'si' : 'en'}')" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-blue-600 hover:bg-gray-50 hover:border-gray-300">
            ${isEn ? 'Switch to Sinhala (සිංහල)' : 'Switch to English'}
          </a>
          <a href="login.html" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">${txt.login}</a>
          <a href="register.html" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">${txt.signup}</a>
        </div>
      </div>
    </nav>
    <div class="h-16"></div> <!-- Spacer for fixed header -->
  `;
    document.getElementById('header-container').innerHTML = header;
}

function renderFooter() {
    const lang = localStorage.getItem('tasklanka-lang') || 'en';
    // Safety check analogous to renderHeader
    const safeLang = (typeof translations !== 'undefined' && translations[lang]) ? lang : 'en';
    // Ensure translations object exists (should be handled by renderHeader but just in case)
    const tRoot = (typeof translations !== 'undefined') ? translations : { en: { footer: {}, nav: {} } };

    const txt = (tRoot[safeLang] && tRoot[safeLang].footer) ? tRoot[safeLang].footer : tRoot['en'].footer || {};
    const nav = (tRoot[safeLang] && tRoot[safeLang].nav) ? tRoot[safeLang].nav : tRoot['en'].nav || {};

    const footer = `
    <footer class="bg-gray-800 text-white mt-auto">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
              </svg>
              <span class="font-bold text-xl text-white">TaskLanka</span>
            </div>
            <p class="text-gray-400 text-sm">${txt.tagline}</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">${txt.discover}</h3>
            <ul class="space-y-2">
              <li><a href="how-it-works.html" class="text-base text-gray-400 hover:text-white">${nav.howItWorks}</a></li>
              <li><a href="browse-tasks.html" class="text-base text-gray-400 hover:text-white">${nav.browseTasks}</a></li>
              <li><a href="categories.html" class="text-base text-gray-400 hover:text-white">${nav.categories}</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">${txt.company}</h3>
            <ul class="space-y-2">
              <li><a href="about.html" class="text-base text-gray-400 hover:text-white">${txt.about}</a></li>
              <li><a href="careers.html" class="text-base text-gray-400 hover:text-white">${txt.careers}</a></li>
              <li><a href="contact.html" class="text-base text-gray-400 hover:text-white">${txt.contact}</a></li>
              <li><a href="terms.html" class="text-base text-gray-400 hover:text-white">${txt.terms}</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">${txt.downloadApp}</h3>
            <div class="space-y-2">
              <button class="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center">
                 <span>App Store</span>
              </button>
              <button class="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center">
                 <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p class="text-base text-gray-400">${txt.rights}</p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zM12 5.333c-3.683 0-6.667 2.984-6.667 6.667S8.317 18.667 12 18.667 18.667 15.683 18.667 12 15.683 5.333 12 5.333zM12 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333zM15.333 8.667c0 .553.447 1 1 1s1-.447 1-1-.447-1-1-1-1 .447-1 1z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
    document.getElementById('footer-container').innerHTML = footer;
}
