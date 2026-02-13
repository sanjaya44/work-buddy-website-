// Main JS file for generic logic

document.addEventListener('DOMContentLoaded', () => {
    // Load components
    if (typeof renderHeader === 'function') renderHeader();
    if (typeof renderFooter === 'function') renderFooter();

    // Dummy data for tasks
    const tasks = [
        {
            id: 1,
            title: "House Cleaning in Colombo",
            category: "Cleaning",
            price: "LKR 5,000",
            location: "Colombo 07",
            status: "Open",
            description: "Need a full house deep clean. 3 bedrooms, 2 bathrooms. Equipment provided.",
            postedBy: "Saman P.",
            date: "2026-02-12"
        },
        {
            id: 2,
            title: "Web Developer for Landing Page",
            category: "IT & Web",
            price: "LKR 25,000",
            location: "Remote",
            status: "Open",
            description: "Looking for a frontend developer to build a responsive landing page using Tailwind CSS.",
            postedBy: "Tech Solutions Ltd",
            date: "2026-02-13"
        },
        {
            id: 3,
            title: "Wedding Photographer Needed",
            category: "Photography",
            price: "LKR 45,000",
            location: "Kandy",
            status: "Assigned",
            description: "Need a photographer for a small wedding ceremony in Kandy. 4 hours coverage.",
            postedBy: "Nimali & Kasun",
            date: "2026-02-10"
        },
        {
            id: 4,
            title: "AC Repair - Split Unit",
            category: "Repairs",
            price: "LKR 3,500",
            location: "Dehiwala",
            status: "Open",
            description: "Samsung split AC not cooling properly. Needs gas refill and service.",
            postedBy: "Dr. Perera",
            date: "2026-02-11"
        },
        {
            id: 5,
            title: "Moving Helper - Lorry Provided",
            category: "Moving",
            price: "LKR 4,000",
            location: "Negombo",
            status: "Completed",
            description: "Need 2 strong people to help load furniture. Lorry is already arranged.",
            postedBy: "Ruwan M.",
            date: "2026-02-08"
        },
        {
            id: 6,
            title: "O/L Maths Tuition",
            category: "Tutoring",
            price: "LKR 2,000/hr",
            location: "Nugegoda",
            status: "Open",
            description: "Looking for an experienced maths tutor for Grade 11 student. Home visit preferred.",
            postedBy: "Mrs. Silva",
            date: "2026-02-13"
        }
    ];

    // Expose tasks to window for specific pages to use
    window.dummyTasks = tasks;

    // Handle form submissions prevents refresh
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simple notification logic
            alert('Action submitted successfully! (This is a frontend demo)');
            if (form.id === 'login-form' || form.id === 'register-form') {
                window.location.href = 'dashboard.html';
            }
        });
    });

    // Populate task lists if container exists
    const featuredList = document.getElementById('featured-tasks-list');
    if (featuredList) {
        populateTasks(featuredList, tasks.slice(0, 4));
    }

    const browseList = document.getElementById('browse-tasks-list');
    if (browseList) {
        populateTasks(browseList, tasks);
    }

    // Check url params for generic detail alerts
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('msg') === 'posted') {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-5 bg-green-500 text-white p-4 rounded shadow-lg z-50 animate-bounce';
        notification.innerText = 'Task Posted Successfully!';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
});

function populateTasks(container, tasksData) {
    container.innerHTML = tasksData.map(task => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div class="p-6 flex-grow">
                <div class="flex justify-between items-start mb-4">
                    <span class="px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}">${task.status}</span>
                    <span class="text-sm text-gray-500">${task.date}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2 truncate" title="${task.title}">${task.title}</h3>
                <div class="flex items-center text-gray-600 mb-4 text-sm">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    ${task.location}
                </div>
                <p class="text-gray-600 mb-4 text-sm line-clamp-3">${task.description}</p>
                <div class="flex items-center justify-between mt-auto">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 mr-2">
                             ${task.postedBy.charAt(0)}
                        </div>
                        <span class="text-sm font-medium text-gray-700">${task.postedBy}</span>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                <span class="text-lg font-bold text-green-600">${task.price}</span>
                <a href="task-details.html?id=${task.id}" class="text-blue-600 text-sm font-semibold hover:text-blue-800">View Details &rarr;</a>
            </div>
        </div>
    `).join('');
}

function getStatusColor(status) {
    switch (status) {
        case 'Open': return 'bg-green-100 text-green-800';
        case 'Assigned': return 'bg-yellow-100 text-yellow-800';
        case 'Completed': return 'bg-gray-100 text-gray-800';
        default: return 'bg-blue-100 text-blue-800';
    }
}
