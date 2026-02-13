
const categoriesData = [
    {
        id: "accounting",
        name: "Accounting",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Managing finances is a piece of cake... said no one ever! Except, of course, for those who work with a trusted accountant. With TaskLanka, you can find expert advice from an independent accountant for your personal and new business needs in minutes.",
        tasks: ["Budgeting Help", "Financial Advisor", "Financial Modelling", "Financial Planning", "Financial Reporting", "MYOB Training", "Mortgage Advisor", "Pension Advisor", "Tax Advisor", "XERO Training"]
    },
    {
        id: "admin",
        name: "Admin",
        image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Find a reliable admin assistant at short notice, for as long as you need. TaskLanka connects you with rated and reviewed admin Tasker in minutes.",
        tasks: ["Data Entry", "Document Filing", "HR Services", "Office Work", "Personal Assistant", "Queuing Service", "Research Assistant", "Typist", "Virtual Assistant", "eBay Selling Assistance"]
    },
    {
        id: "alterations",
        name: "Alterations",
        image: "https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Perhaps your clothing doesn’t quite fit right, or you need a few clothing repairs? Book alterations near you and get your favourite outfits ready to wear again, with the perfect fit.",
        tasks: ["Wedding Dress Alterations", "Zipper Repair"]
    },
    {
        id: "appliances",
        name: "Appliances",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Looking for an appliance technician? Whether you need a new appliance installed or an appliance service or repair, a professional technician can help.",
        tasks: ["Appliance Installation", "Appliance Repair", "Bosch Appliance Repair", "Coffee Machine Repairs", "Cooker Hood Installation & Repair", "Cooktop Installation", "Dishdrawer Installation", "Dishwasher Not Draining", "Dishwasher Repair", "Dryer Installation", "Freezer Installation", "Fridge Repair & Installation", "Gas Fitters", "Gas Oven Repair and Installation", "Gas Stove Installation & Repair", "Ice Machine Repair & Installation", "Microwave Repair", "Oven Fan Repair", "Oven Repair", "Rangehood Installation", "Rangehood Repairs", "Samsung Fridge Repair", "Stove Connection", "Stove Installation", "Vacuum Cleaner Repair", "Washing Machine Levelling", "Washing Machine Repairs & Installation"]
    },
    {
        id: "architects",
        name: "Architects",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Building your dream home? Although your personal choices are important, you can’t just plan its design on your own. The same applies for commercial properties.",
        tasks: ["Architectural Rendering & Visualisation", "Building Designers", "Floor Planning", "Garage Conversion", "House Extensions", "House Renovation", "Interior Architects", "Loft Conversion"]
    },
    {
        id: "assembly",
        name: "Assembly",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Love shopping for new furniture, but hate putting it together? Hire a furniture assembly expert and they’ll take care of unboxing and building your new furniture for you. And because they’re pros at assembling flatpack furniture, you can enjoy peace of mind.",
        tasks: ["BBQ Assembly", "Basketball Hoop System Assembly", "Cube Storage Assembly", "Disassembly", "Exercise Bike Assembly", "Home Gym Assembly", "Kids Bike Assembly", "PC Assembly", "Playground Assembly", "Pool Table Assembly", "Swing Set Assembly", "Table Tennis Table Assembly", "Toy Assembly", "Trampoline Assembly", "Treadmill Assembly"]
    },
    {
        id: "audiovisual",
        name: "Audio Visual",
        image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Whether you need audiovisual services for an event or an av professional to edit and produce your audio and video recordings, TaskLanka is your go-to place.",
        tasks: ["Music Production", "Video Editing", "Video Production", "Videographers"]
    },
    {
        id: "autoelectrician",
        name: "Auto Electrician",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "New cars have complex inbuilt electrical systems, so when something goes wrong, don’t try and fix the problem yourself. Instead, hire a local auto electrician.",
        tasks: ["Alternator Replacement", "Car Alarm System Repair", "Car Battery Replacement", "Car Electrical Repair", "Dash Cam Installation", "Electric Car Service", "Fuse Replacement", "Headlight Bulb Replacement", "Reversing Camera Installation", "Starter Motor Repair"]
    },
    {
        id: "bakers",
        name: "Bakers",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "There’s no need to drive to the nearest bakery near you. TaskLanka can connect you to local bakeries and pastry chefs for all the needs of your sweet tooth.",
        tasks: ["Artisan Baker", "Cake Decorators", "Custom Birthday Cakes", "Custom Cakes", "Gluten Free Baker", "Wedding Cakes", "Wholesale Baker"]
    },
    {
        id: "balloondelivery",
        name: "Balloon Delivery",
        image: "https://images.unsplash.com/photo-1530103862676-de3c9a59af38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Balloons can brighten someone’s day or jazz up your next event. So if you’re planning a special gesture or decorating a venue, you can find reliable & affordable balloon delivery services.",
        tasks: ["Birthday Balloon Delivery", "Flower & Balloon Delivery", "Inflated Helium Balloon Delivery", "Personalised Balloon Delivery"]
    },
    {
        id: "barbers",
        name: "Barbers",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "With TaskLanka, finding a hair barber near you who can cut your hair or groom your beard the way you want to is only a few taps away!",
        tasks: ["Beard Grooming", "Mobile Barbers"]
    },
    {
        id: "bathroomrenovation",
        name: "Bathroom Renovation",
        image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Searching for a bathroom renovator? Whether you want to update your bathroom, create more space, or add value before listing your home for sale, you’re in the right place.",
        tasks: ["Bathroom Tiling", "Bathroom Waterproofing", "Shower Installation", "Toilet Installation", "Vanity Installation"]
    },
    {
        id: "beauticians",
        name: "Beauticians",
        image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Looking for an experienced beautician near you for your next event or special occasion? When you hire a beauty therapist, you can enjoy professional help with everything from hair and makeup to spray tanning.",
        tasks: ["Eyebrow Microblading", "Eyebrow Threading", "Eyebrow Waxing", "Eyelash Extensions", "Manicure", "Nail Technicians", "Pedicure", "Spray Tanning"]
    },
    {
        id: "bicycle",
        name: "Bicycle Service",
        image: "https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Booking a bicycle service nearby with TaskLanka is easier than setting up an appointment with a bicycle shop. It's also safer than trying to service your bike yourself!",
        tasks: ["Bicycle Assembly", "Bicycle Courier", "Bicycle Tyre Repair", "Electric Bike Repair", "Mobile Bicycle Repair"]
    },
    {
        id: "bricklayer",
        name: "Bricklayer",
        image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Need a bricklayer to build a wall, lay pavers, or just fix your letterbox? Bricks are a popular and versatile building material.",
        tasks: ["Brick Fence", "Brick Paving", "Brick Repair", "Retaining Walls"]
    },
    {
        id: "building",
        name: "Building & Construction",
        image: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Doing your own construction work can be an exciting endeavour. However, without the necessary skills, equipment, or experience, you risk compromising your safety.",
        tasks: ["Building Consultant", "Building Contractors", "Demolition", "Drafting", "Driveway Repair", "General Contractors", "Office Fit Out", "Patios", "Pergola Installation", "Shed Installation"]
    },
    {
        id: "business",
        name: "Business",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Grow your business by booking business services on TaskLanka! We make it easy to avail of the services your business needs to thrive.",
        tasks: ["Business Advisory", "Business Analysis", "Business Consultant", "Business Development", "Market Research", "Project Management", "Strategy Consultant"]
    },
    {
        id: "cakedelivery",
        name: "Cake Delivery",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Any day can be extra special with a cake on the table—no need to have an actual occasion to celebrate! Get your cake to your chosen location by enlisting the help of Taskers.",
        tasks: ["Gluten Free Cake Delivery", "Ice Cream Cake Delivery", "Vegan Cake Delivery", "Birthday Cake Delivery"]
    },
    {
        id: "carbody",
        name: "Car Body Work",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "From the onset of any car body damage, it's best to have an expert mechanic look into it immediately to avoid further problems from occurring.",
        tasks: ["Car Body Repair", "Car Bumper Repair", "Car Paint Repair", "Car Scratch Repair", "Paintless Dent Removal", "Panel Beater", "Windscreen Repair"]
    },
    {
        id: "cardetail",
        name: "Car Detailing",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Give your car that sparkling new look by hiring a professional car detailer around you through TaskLanka. Get every nook and cranny of your vehicle scrubbed, polished, and waxed.",
        tasks: ["Car Cleaning", "Car Engine Steam Cleaning", "Car Interior Cleaning", "Car Roof Lining Repair", "Car Valet", "Leather Car Seat Restoration"]
    },
    {
        id: "carrepair",
        name: "Car Repair",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Getting a car repair can be costly and frustrating. With TaskLanka, you don't have to waste your time searching online. We'll get the job done for you right in your own home, workplace, or garage!",
        tasks: ["Alternator Repair", "Brake Repair", "Car Aircon Repair", "Car Seat Repair", "Car Window Repair", "Engine Replacement", "Radiator Repair", "Suspension Repair"]
    },
    {
        id: "carservice",
        name: "Car Service",
        image: "https://images.unsplash.com/photo-1486262715619-01b8c2297615?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Is your car due for minor service? Regular car servicing in line with your service schedule will ensure your car runs reliably and safely for years to come.",
        tasks: ["Toyota Service", "Nissan Service", "Honda Service", "Mazda Service", "Suzuki Service", "Car Delivery Service"]
    },
    {
        id: "carwash",
        name: "Car Wash",
        image: "https://images.unsplash.com/photo-1520340356584-7db00d2b94c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Looking for the best mobile car washing near you? There’s nothing better than a freshly washed and vacuumed car.",
        tasks: ["Mobile Car Wash", "Hand Car Wash", "Cut and Polish"]
    },
    {
        id: "carpentry",
        name: "Carpentry",
        image: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Carpentry plays a massive part in building and construction. From the chairs we sit on to the homes we live in, so much of what we interact with has gone through the hands of a carpenter.",
        tasks: ["Cabinet Making", "Custom Shelving", "Decking", "Door Installation", "Furniture Assembly", "Kitchen Installation", "Skirtings", "Wood Repair"]
    },
    {
        id: "carpetcleaning",
        name: "Carpet Cleaning",
        image: "https://images.unsplash.com/photo-1558317374-a3545eca46f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Regular carpet cleaning is a must for a clean home and well-maintained carpets. Hire a carpet cleaner service near you to take care of everything.",
        tasks: ["Steam Cleaning", "Stain Removal", "Rug Cleaning", "Upholstery Cleaning"]
    },
    {
        id: "catcare",
        name: "Cat Care",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Do you live alone and need to be away from home for long periods, leaving your beloved munchkin cat or elderly cat all alone? Then hire a cat care service.",
        tasks: ["Cat Boarding", "Cat Grooming", "Cat Sitting", "Cat Training"]
    },
    {
        id: "catering",
        name: "Catering",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "It’s shocking to know how many hours and how much energy goes into preparing a delicious meal. Don’t worry, though! TaskLanka can connect you to professional catering companies.",
        tasks: ["BBQ Catering", "Buffet Catering", "Party Catering", "Wedding Catering"]
    },
    {
        id: "chef",
        name: "Chef",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Getting someone to cook your meals for you has never been this easy! There’s no need for you to prepare your meals when you can have a Tasker who can do these things for you.",
        tasks: ["Home Chef", "Pastry Chef", "Private Chef", "Sushi Chef"]
    },
    {
        id: "childcare",
        name: "Childcare & Safety",
        image: "https://images.unsplash.com/photo-1502086223501-686db62bf468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Need to find an emergency childcare provider because your regular babysitter isn’t available? TaskLanka can help you find a trusted childcare practitioner in minutes.",
        tasks: ["Babysitters", "Nanny", "After School Care", "Baby Proofing"]
    },
    {
        id: "cleaning",
        name: "Cleaning",
        image: "https://images.unsplash.com/photo-1581578731117-104f2a8d23e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Cleaning the house is no easy task, and finding someone you can trust with these chores can be challenging. But with TaskLanka, you can easily find an expert who can handle the toughest stains.",
        tasks: ["House Cleaning", "End of Lease Cleaning", "Office Cleaning", "Window Cleaning", "Oven Cleaning", "Carpet Cleaning", "Bathroom Cleaning"]
    },
    {
        id: "computers",
        name: "Computers & IT",
        image: "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Got a computer challenge you can’t solve? Get the help of a friendly, patient, and knowledgeable computer technician.",
        tasks: ["Computer Repair", "Data Recovery", "IT Support", "Mac Repair", "Laptop Repair", "Virus Removal", "WiFi Setup", "Custom PC Build"]
    },
    {
        id: "concreting",
        name: "Concreting",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Looking for a professional concreter near you? Concreting is often the foundation of your building project, and you want to make sure it lasts for years.",
        tasks: ["Concrete Cutting", "Concrete Repair", "Concrete Resurfacing", "Driveways"]
    },
    {
        id: "cooking",
        name: "Cooking",
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Cooking is one of those skills that takes a moment to learn but a lifetime to master. Those who choose to master it over a lifetime are generally highly sought after.",
        tasks: ["Cooking Lessons", "Meal Preparation", "Home Cooking"]
    },
    {
        id: "courier",
        name: "Courier Services",
        image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Do you have documents or a package to deliver but don’t have time to head across town? Courier services can pick up and deliver your item in a timeframe that suits you.",
        tasks: ["Parcel Delivery", "Document Delivery", "Food Delivery", "Flyer Delivery"]
    },
    {
        id: "dance",
        name: "Dance Lessons",
        image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "It’s easy to find in-person or online dance classes on TaskLanka! Whether you’re a total beginner or an experienced dancer.",
        tasks: ["Ballet Lessons", "Salsa Lessons", "Wedding Dance Lessons", "Hip Hop Lessons"]
    },
    {
        id: "decking",
        name: "Decking",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Who says you can’t strengthen your relationship with nature while at home? If you want to comfortably devour a nice view while also boosting your property’s value, decking is the way to go.",
        tasks: ["Deck Cleaning", "Deck Oiling", "Deck Repair", "Deck Sanding", "Deck Staining"]
    },
    {
        id: "delivery",
        name: "Delivery",
        image: "https://images.unsplash.com/photo-1616401784845-18088beba030?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Need to book delivery services to easily move parcels, documents, flyers, furniture, or even food? Save time and get your delivery sorted.",
        tasks: ["Furniture Delivery", "Appliance Delivery", "Groceries", "Food Delivery", "Parcel Delivery"]
    },
    {
        id: "design",
        name: "Design",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Looking to hire a designer who can produce high quality work on demand? Designers can take your brief and bring it to life on screen or paper.",
        tasks: ["Graphic Design", "Logo Design", "Web Design", "Flyer Design", "Business Cards", "Illustration", "UI/UX Design"]
    },
    {
        id: "dogcare",
        name: "Dog Care",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Dog care services on TaskLanka give you a variety of useful services for your precious dog when you need them.",
        tasks: ["Dog Walking", "Dog Grooming", "Dog Sitting", "Dog Boarding", "Puppy Training"]
    },
    {
        id: "electricians",
        name: "Electricians",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "If you don't have the professional experience to get your electrical works all sorted out, it's best to seek help from a registered electrician.",
        tasks: ["Light Installation", "Powerpoint Installation", "Ceiling Fan Installation", "Electrical Repair", "Safety Switch Installation", "Smoke Alarm Installation"]
    },
    {
        id: "entertainment",
        name: "Entertainment",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Need a local entertainer for your next event? An entertainer can take the pressure off when you’re organising or hosting an event.",
        tasks: ["DJ Hire", "Magician", "Singer", "Band Hire", "Children's Entertainer", "Face Painting"]
    },
    {
        id: "events",
        name: "Events",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Whether you’re thinking of a lavish wedding or an intimate dinner at your home, TaskLanka is an ideal place to look for a reliable event organiser.",
        tasks: ["Party Helpers", "Event Staff", "Wedding Planner", "Event Decoration", "Catering"]
    },
    {
        id: "fencing",
        name: "Fencing",
        image: "https://images.unsplash.com/photo-1594967399438-a28a2a890479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "TaskLanka offers an easy way to find reliable and affordable fencing services. Whether you need an expert to build a new fence or replace your worn fence panels.",
        tasks: ["Fence Installation", "Fence Repair", "Colorbond Fencing", "Timber Fencing", "Pool Fencing"]
    },
    {
        id: "fitness",
        name: "Fitness",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "A personal fitness trainer doesn’t have to cost you a fortune. TaskLanka connects you with affordable and qualified fitness trainers.",
        tasks: ["Personal Training", "Yoga Classes", "Pilates", "Boxing Training", "Gym Buddy"]
    },
    {
        id: "flooring",
        name: "Flooring",
        image: "https://images.unsplash.com/photo-1581858726768-75e0524d7b07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "With TaskLanka, finding a service near you that can take care of your flooring needs is only a task away!",
        tasks: ["Floor Sanding", "Floor Polishing", "Tiles", "Carpet Laying", "Timber Flooring", "Vinyl Flooring"]
    },
    {
        id: "florist",
        name: "Florist",
        image: "https://images.unsplash.com/photo-1596701150338-2a0792ebc9af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Looking for a florist near you? TaskLanka has some of the best local florists you can tap right away.",
        tasks: ["Flower Delivery", "Wedding Flowers", "Flower Arrangement"]
    },
    {
        id: "fooddelivery",
        name: "Food Delivery",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Want to get your takeaway food delivered to your home? Craving a juicy burger with all the trimmings?",
        tasks: ["Pizza Delivery", "Burger Delivery", "Indian Food Delivery", "Asian Food Delivery", "Dessert Delivery"]
    },
    {
        id: "furnitureassembly",
        name: "Furniture Assembly",
        image: "https://images.unsplash.com/photo-1632759141706-03c00424560b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "With TaskLanka, booking a furniture assembly in your area is easy, convenient, and hassle-free.",
        tasks: ["IKEA Assembly", "Bed Assembly", "Wardrobe Assembly", "Table Assembly", "Chair Assembly", "Outdoor Furniture Assembly"]
    },
    {
        id: "gardening",
        name: "Gardening",
        image: "https://images.unsplash.com/photo-1615423696517-5e1975b94f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Hire a local gardener to help with almost any gardening task, from basic garden care and weeding to planting and landscaping.",
        tasks: ["Lawn Mowing", "Weeding", "Pruning", "Hedge Trimming", "Garden Cleanup", "Landscaping", "Tree Removal"]
    },
    {
        id: "handyman",
        name: "Handyman",
        image: "https://images.unsplash.com/photo-1581166397057-235af2b7c6ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "When you don’t have the time, tools, or know-how to do those niggling home DIY tasks, outsource these jobs by finding a handyman near you.",
        tasks: ["Wall Mounting", "Picture Hanging", "Door Repair", "Plaster Repair", "Leak Fix", "Furniture Repair", "Lock Repair"]
    },
    {
        id: "hairdressers",
        name: "Hairdressers",
        image: "https://images.unsplash.com/photo-1560869713-7d0a6394172d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Avoid bad hair days by hiring talented home hairdressers near me through TaskLanka.",
        tasks: ["Haircut", "Hair Colouring", "Blow Dry", "Kids Haircut", "Hair Styling"]
    },
    {
        id: "laundry",
        name: "Laundry",
        image: "https://images.unsplash.com/photo-1582735689369-08b066cf6471?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "TaskLanka can be your ultimate lifesaver when you're too busy to manage your laundry tasks.",
        tasks: ["Washing", "Ironing", "Dry Cleaning", "Clothing Alterations"]
    },
    {
        id: "marketing",
        name: "Marketing",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Time to step up your marketing game? A marketing consultant can help with everything from planning to social media marketing.",
        tasks: ["Social Media Marketing", "SEO", "Content Writing", "Email Marketing", "Digital Marketing", "Market Research"]
    },
    {
        id: "music",
        name: "Music Lessons",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Finding a music tutor is easy and convenient on TaskLanka! Our platform connects you to skilled instructors.",
        tasks: ["Guitar Lessons", "Piano Lessons", "Singing Lessons", "Drum Lessons", "Violin Lessons"]
    },
    {
        id: "painting",
        name: "Painting",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Paint plays a much more important part in our lives than many people realise. Whether it’s in your home, office or shop.",
        tasks: ["Interior Painting", "Exterior Painting", "Fence Painting", "House Painting", "Roof Painting"]
    },
    {
        id: "pestcontrol",
        name: "Pest Control",
        image: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Looking for the best local pest control near you? An experienced pest controller will get straight to the source of the infestation.",
        tasks: ["Cockroach Control", "Ant Control", "Spider Control", "Rodent Control", "Termite Inspection"]
    },
    {
        id: "petcare",
        name: "Pet Care",
        image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Looking for pet care services to help with looking after your pet? Many pets need a high level of care and attention.",
        tasks: ["Pet Sitting", "Pet Boarding", "Pet Grooming", "Dog Walking"]
    },
    {
        id: "photography",
        name: "Photography",
        image: "https://images.unsplash.com/photo-1542038784456-1ea0e93ca64b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Find an affordable professional photographer for a photo shoot who will capture the best moments (then edit and retouch them) so you can relax.",
        tasks: ["Wedding Photography", "Event Photography", "Portrait Photography", "Product Photography", "Real Estate Photography"]
    },
    {
        id: "plumbing",
        name: "Plumbing",
        image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Why suffer the inconvenience of leaky pipes, blocked toilets, or other plumbing issues? Put up a task on TaskLanka to find local plumbers.",
        tasks: ["Tap Repair", "Toilet Repair", "Leak Detection", "Pipe Repair", "Hot Water System Repair", "Drain Cleaning"]
    },
    {
        id: "pool",
        name: "Pool Maintenance",
        image: "https://images.unsplash.com/photo-1560364897-91575ff619be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Finding swimming pool service experts on TaskLanka is easier and more convenient than setting up an appointment with local pool companies.",
        tasks: ["Pool Cleaning", "Pool Maintenance", "Pool Repair", "Green Pool Cleaning"]
    },
    {
        id: "removals",
        name: "Removals",
        image: "https://images.unsplash.com/photo-1603796846097-985223c72199?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Moving to a new home or office is an exciting experience. But the logistics can be a stressful process. Save yourself all the trouble by booking removal services.",
        tasks: ["House Removals", "Office Removals", "Furniture Removal", "Rubbish Removal", "Man with a Van", "Piano Removal"]
    },
    {
        id: "roofing",
        name: "Roofing",
        image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Everyone deserves a roof over their head. But some roofs are better than others. A leaky roof is more than just an annoyance.",
        tasks: ["Roof Repair", "Roof Cleaning", "Gutter Cleaning", "Roof Painting", "Leak Repair"]
    },
    {
        id: "rubbish",
        name: "Rubbish Removal",
        image: "https://images.unsplash.com/photo-1530587198077-5e11527442bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Storing rubbish at home, the office or any establishment can quickly lead to clutter and inconvenience. Connect with experienced and reliable rubbish removalists.",
        tasks: ["Green Waste Removal", "Hard Rubbish Removal", "Furniture Disposal", "Appliance Removal", "Construction Waste"]
    },
    {
        id: "web",
        name: "Web & IT",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Whether you’re launching your first website or revamping an existing one, entrust your digital space to a seasoned and reliable web developer.",
        tasks: ["Web Development", "WordPress Help", "App Development", "SEO", "Web Design", "Software Development"]
    },
    {
        id: "wedding",
        name: "Wedding",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The perfect wedding doesn’t have to cost you a fortune. It’s easy to find affordable and quality wedding services through TaskLanka.",
        tasks: ["Wedding Photography", "Wedding Planning", "Wedding Hair & Makeup", "Wedding Decoration", "Wedding Cake", "Wedding Car"]
    },
    {
        id: "writing",
        name: "Writing",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Content can be one of the most effective ways to earn new business on the internet. By consistently entertaining or educating your audience.",
        tasks: ["Copywriting", "Blog Writing", "Resume Writing", "Proofreading", "Editing", "Content Creation"]
    }
];
