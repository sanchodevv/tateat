document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burger");
  const burgerMenu = document.getElementById("menu");
  burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    burgerMenu.classList.toggle("active");
  });
});
const translations = {
  uz: {
    // Header & Buttons
    call: "Qo'ng'iroq qilish - 123 456 789",
    reserve: "Band qilish",
    home: "Asosiy",
    "about-us": "Biz haqimizda",
    "our-menu": "Bizning Menyu",
    pages: "Sahifalar",
    blog: "Blog",
    "contact-us": "Aloqa",

    // Intro section
    "welcome-title": "Restoranga xush kelibsiz",
    "welcome-desc":
      "Odamlar, taomlar va ajoyib joylashuv do'stlar va oila a'zolari bir joyga jamlanib, maroqli vaqt o'tkazishi uchun mukammal muhit yaratadi.",
    "view-menu": "Menyuni ko'rish",

    // Quality / Info cards
    "locate-us": "Bizning manzil",
    "locate-address": "Riverside 25, San Diego, California",
    "open-hours": "Ish vaqti",
    "open-time": "Dushanbadan Jumagacha 9:00 - 21:00",
    "reservation-email": "restaurantate@gmail.com",

    // Story section
    "delicious-story": "Mazali Hikoya",
    "story-desc":
      "Odamlar, taomlar va ajoyib joylashuv do'stlar va oila a'zolari bir joyga jamlanib, maroqli vaqt o'tkazishi uchun mukammal muhit yaratadi.",
    "year-2018-title": "2018",
    "year-2018-desc": "Sog'lom ovqat yetkazib berish bo'yicha restoran rejasi.",
    "year-2022-title": "2022",
    "year-2022-desc": "O'z shiorini bajarib, baxtli tarzda to'rtinchi yilda.",
    josefine: "JOSEFINE",

    // Menu section
    "menu-label": "Menyu",
    "special-dishes-title": "Maxsus taomlarimizni tatib ko'ring",
    "special-dishes-desc":
      "Har safar biz bilan ovqatlanganingizda, mahalliy hududga xos xususiy elementlar bilan yaratilgan muhitda ajoyib ilhomlantirilgan taomlardan zavqlanasiz.",
    "see-all-dishes": "Barcha taomlarni ko'rish",

    // Dishes categories & items
    starters: "Atirlar (Starters)",
    "main-dishes": "Asosiy taomlar",
    desserts: "Shirinliklar",
    "dish-name": "Erquy qirg'og'idan xom taroqsimon mollyuskalar",
    "dish-desc": "Mollyuskani ustritsalar uchun ishlatiladigan usulda ochish",

    // Testimonial / Clients section
    testimonial: "MIJOZLAR FIKRI",
    "clients-say": "Mijozlarimiz nima deydi",
    "clients-desc":
      "Mijozlarimizdan xabar olishni yaxshi ko'ramiz, shuning uchun izoh qoldiring yoki elektron pochta orqali salom yo'llang.",
    "client-name": "Natasha D",
    "client-city": "Nyu-York",
    "client-review":
      "Ular o'zlarining ajoyib ta'mi va taomlari bilan mashhur. Qayerga bormang, ochligingiz qondiriladi. Eng zo'r tovuq va burgerlar juda mazali.",

    // Offers section
    "offers-label": "AKSIYALAR",
    "offer-dishes-title": "Aksiyadagi taomlarimiz",
    "offers-desc":
      "Oshpazlarimiz hatto eng injiq yeyuvchilarni ham qoniqtiradigan og'zda eriydigan taomlarni tayyorlaydilar, hozir taomlar aksiyada, ochligingizga qarab foydalaning.",
    "offer-title-1": "50% chegirma amal qilmoqda",
    "burger-title": "Tovuqli burger",
    "burger-desc": "Mazali masalliqlar va ko'katlar qo'shilgan tovuqli burger.",
    "pizza-title": "Tovuqli pitsa",
    "pizza-desc": "Ko'p xil ta'mga ega va masalliqlari aralash bo'lgan pitsa.",

    // Popular dishes
    "popular-label": "MENYU",
    "popular-title": "Ommabop taomlar",
    "popular-desc":
      "Restoranda ofitsiantlar o'rtasida har bir stolga ovqatni kim eng tez yetkazib berishini ko'rish bo'yicha musobaqa bor. Bu Ginnes rekordiga da'vogarlik qilishga olib keldi.",
    "dish-manjoori": "Tovuq Manjouri",
    "dish-manjoori-desc":
      "Ziyofatlarda boshlang'ich taom sifatida barcha yoshdagilar yoqtiradigan taom.",
    hotdog: "Xot-dog",
    "hotdog-desc":
      "Qisman kesilgan bulochka orasiga qo'yilgan grilda pishirilgan sosiska.",
    "fresh-juice": "Yangi sharbat",
    "fresh-juice-desc":
      "Super Immun Moviy Sharbat retseptimiz bilan sog'ligingizdagi muammolarni yengib o'ting.",
    "veg-burger": "Sabzavotli burger",
    "veg-burger-desc":
      "Burgerlar loviya kabi masalliqlardan tayyorlanishi mumkin.",

    // Services section
    "what-we-offer": "BIZ NIMA TAKLIF QILAMIZ",
    "great-services": "Ajoyib xizmatlarimiz",
    "services-desc":
      "Muhit asosiy sahnani belgilaydi. Bu shunchaki uydan uzoqdagi ovqatlanish xonasidan ko'proq narsa. Mehmonlar uchun ovqat diqqat markazida bo'ladi.",
    "service-247": "24/7 Ochiq",
    "service-menus": "Maxsus menyular",
    "home-delivery": "Uyga yetkazib berish",

    // Blog section
    "blog-label": "BLOG",
    "blog-title": "Yangiliklarni birinchilardan bo'lib o'qing",
    "blog-desc":
      "Taomlarimiz, aksiyalarimiz, tadbirlarimiz va kelajakdagi rejadagi so'nggi hikoyalarni shu yerda o'rganing.",
    "blog-category": "DELICIOUS",
    "blog-date": "19-MART, 2022",
    "blog-headline": "AQSh oshxonasi afsonasi: Och odamlar hikoyasi",
    "blog-text":
      "Oziq-ovqat sifatini tekshirish uchun ijodiy faoliyat va iqtisodiy jihatdan baholi matritsani aniqlash uchun quyi mevalardan foydalaning.",

    // Booking section
    "reservation-label": "BRON QILISH",
    "book-table-title": "Stolingizni band qiling",
    "placeholder-name": "Ism",
    "placeholder-email": "Elektron pochta",
    "placeholder-person": "Odam soni",
    "placeholder-timing": "Vaqt",
    "book-button": "Stol band qilish",

    // Footer section
    "footer-tag": "#TheTastEat",
    "footer-contact-title": "ALOQA",
    "footer-mailing":
      "Yangiliklar, xabarlar va tadbirlar aksiyalaridan xabardor bo'lish uchun pochta ro'yxatimizga qo'shiling.",
    "footer-hours-title": "ISH VAQTI",
    "footer-address": "5 Dalou ko'chasi, 75015 Parij",
    "footer-phone": "+123 456 789",
    "footer-mail": "josefin@mail.com",
    subscribe: "Obuna bo'lish",
    "mon-fri": "Dushanba – Juma:",
    "time-mon-fri": "7:00 – 18:00",
    sat: "Shanba:",
    "time-sat": "7:00 – 18:00",
    sun: "Yakshanba:",
    "time-sun": "8:00 – 18:00",
    copyright:
      "© Mualliflik huquqi - TastEat | <span>VictorFlow</span> tomonidan dizayn qilingan - <span>Webflow</span> tomonidan quvvatlanadi",
    styleguide: "Uslublar qo'llanmasi",
    licenses: "Litsenziyalar",
    protected: "Himoyalangan",
    "not-found": "Topilmadi",
  },
  ru: {
    // Header & Buttons
    call: "Позвонить - 123 456 789",
    reserve: "Бронирование",
    home: "Главная",
    "about-us": "О нас",
    "our-menu": "Наше меню",
    pages: "Страницы",
    blog: "Блог",
    "contact-us": "Контакты",

    // Intro section
    "welcome-title": "Добро пожаловать в ресторан",
    "welcome-desc":
      "Люди, еда и отличное расположение создают идеальное место для друзей и семьи, чтобы собраться вместе и отлично провести время.",
    "view-menu": "Посмотреть меню",

    // Quality / Info cards
    "locate-us": "Наш адрес",
    "locate-address": "Riverside 25, San Diego, California",
    "open-hours": "Часы работы",
    "open-time": "Пн - Пт с 9:00 до 21:00",
    "reservation-email": "restaurantate@gmail.com",

    // Story section
    "delicious-story": "Вкусная история",
    "story-desc":
      "Люди, еда и отличное расположение создают идеальное место для друзей и семьи, чтобы собраться вместе и отлично провести время.",
    "year-2018-title": "2018",
    "year-2018-desc": "План ресторана по доставке здоровой пищи.",
    "year-2022-title": "2022",
    "year-2022-desc": "Счастливый четвертый год выполнения нашего девиза.",
    josefine: "JOSEFINE",

    // Menu section
    "menu-label": "Меню",
    "special-dishes-title": "Попробуйте наши фирменные блюда",
    "special-dishes-desc":
      "Каждый раз, когда вы обедаете у нас, вы наслаждаетесь великолепной вдохновленной едой в обстановке с уникальными местными деталями.",
    "see-all-dishes": "Все блюда",

    // Dishes categories & items
    starters: "Закуски",
    "main-dishes": "Основные блюда",
    desserts: "Десерты",
    "dish-name": "Сырые гребешки из Эрки",
    "dish-desc": "Открывайте гребешок так же, как устрицы",

    // Testimonial / Clients section
    testimonial: "ОТЗЫВЫ",
    "clients-say": "Что говорят наши клиенты",
    "clients-desc":
      "Мы любим слышать отзывы от клиентов, поэтому оставляйте комментарии или пишите нам на email.",
    "client-name": "Наташа Д",
    "client-city": "Нью-Йорк",
    "client-review":
      "Они известны своим потрясающим вкусом и едой. Куда бы вы ни пошли, ваш голод утолен. Лучшая курица и бургеры, очень вкусно.",

    // Offers section
    "offers-label": "АКЦИИ",
    "offer-dishes-title": "Наши акционные блюда",
    "offers-desc":
      "Наши шеф-повара создают тающие во рту блюда, которые удовлетворят даже самых привередливых гурманов. Блюда по акции — выбирайте по аппетиту.",
    "offer-title-1": "Скидка 50%",
    "burger-title": "Куриный бургер",
    "burger-desc": "Куриный бургер с вкусными начинками и листьями.",
    "pizza-title": "Куриная пицца",
    "pizza-desc": "Пицца с несколькими вкусами и смешанными начинками.",

    // Popular dishes
    "popular-label": "МЕНЮ",
    "popular-title": "Популярные блюда",
    "popular-desc":
      "В ресторане между официантами идет соревнование, кто быстрее подаст еду к каждому столу. Это привело к попытке установить рекорд Гиннесса.",
    "dish-manjoori": "Куриный Манджури",
    "dish-manjoori-desc":
      "Блюдо, любимое всеми возрастными группами в качестве закуски на вечеринках.",
    hotdog: "Хот-дог",
    "hotdog-desc": "Жареная сосиска в разрезе частично разрезанной булочки.",
    "fresh-juice": "Свежий сок",
    "fresh-juice-desc":
      "Победите хандру здоровья с нашим рецептом супер-иммунного синего сока.",
    "veg-burger": "Вегетарианский бургер",
    "veg-burger-desc":
      "Бургеры могут быть приготовлены из таких ингредиентов, как фасоль.",

    // Services section
    "what-we-offer": "ЧТО МЫ ПРЕДЛАГАЕМ",
    "great-services": "Наши отличные услуги",
    "services-desc":
      "Атмосфера задает тон. Речь идет о большем, чем просто обеденный зал вдали от дома. Еда оказывается в центре внимания.",
    "service-247": "Открыто 24/7",
    "service-menus": "Специальные меню",
    "home-delivery": "Доставка на дом",

    // Blog section
    "blog-label": "БЛОГ",
    "blog-title": "Читайте новости первыми",
    "blog-desc":
      "Узнайте последние истории о наших блюдах, предложениях, мероприятиях и планах на будущее здесь.",
    "blog-category": "DELICIOUS",
    "blog-date": "19 МАРТА, 2022",
    "blog-headline": "Легенда американской кухни: История голодных людей",
    "blog-text":
      "Используйте доступные возможности для определения экономичной матрицы добавленной стоимости и творческой деятельности для тестирования качества еды.",

    // Booking section
    "reservation-label": "БРОНИРОВАНИЕ",
    "book-table-title": "Забронируйте столик",
    "placeholder-name": "Имя",
    "placeholder-email": "Email",
    "placeholder-person": "Количество персон",
    "placeholder-timing": "Время",
    "book-button": "Забронировать столик",

    // Footer section
    "footer-tag": "#TheTastEat",
    "footer-contact-title": "КОНТАКТЫ",
    "footer-mailing":
      "Подпишитесь на нашу рассылку для получения обновлений, новостей и информации о мероприятиях.",
    "footer-hours-title": "РАБОЧИЕ ЧАСЫ",
    "footer-address": "5 Rue Dalou, 75015 Paris",
    "footer-phone": "+123 456 789",
    "footer-mail": "josefin@mail.com",
    subscribe: "Подписаться",
    "mon-fri": "Пн – Пт:",
    "time-mon-fri": "7:00 – 18:00",
    sat: "Сб:",
    "time-sat": "7:00 – 18:00",
    sun: "Вс:",
    "time-sun": "8:00 – 18:00",
    copyright:
      "© Авторские права - TastEat | Дизайн от <span>VictorFlow</span> - При поддержке <span>Webflow</span>",
    styleguide: "Стильгид",
    licenses: "Лицензии",
    protected: "Защищено",
    "not-found": "Не найдено",
  },
  en: {
    // Header & Buttons
    call: "Call - 123 456 789",
    reserve: "Reservation",
    home: "Home",
    "about-us": "About Us",
    "our-menu": "Our Menu",
    pages: "Pages",
    blog: "Blog",
    "contact-us": "Contact Us",

    // Intro section
    "welcome-title": "Welcome to Restaurant",
    "welcome-desc":
      "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.",
    "view-menu": "View Menu",

    // Quality / Info cards
    "locate-us": "Locate Us",
    "locate-address": "Riverside 25, San Diego, California",
    "open-hours": "Open Hours",
    "open-time": "Mon To Fri 9:00 AM - 9:00 PM",
    "reservation-email": "restaurantate@gmail.com",

    // Story section
    "delicious-story": "The Delicious Story",
    "story-desc":
      "The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.",
    "year-2018-title": "2018",
    "year-2018-desc": "Plan for this restaurant to deliver healthy food.",
    "year-2022-title": "2022",
    "year-2022-desc": "Happily in the fourth year by fulfill the motto.",
    josefine: "JOSEFINE",

    // Menu section
    "menu-label": "Menu",
    "special-dishes-title": "Try Our Special dishes",
    "special-dishes-desc":
      "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.",
    "see-all-dishes": "See all dishes",

    // Dishes categories & items
    starters: "Starters",
    "main-dishes": "Main Dishes",
    desserts: "Desserts",
    "dish-name": "Raw Scallops from Erquy",
    "dish-desc": "Shuck the scallop to that used for oysters",

    // Testimonial / Clients section
    testimonial: "TESTIMONIAL",
    "clients-say": "Our Clients Say",
    "clients-desc":
      "We love to hear from customers, so please leave a comment or say hello in an email.",
    "client-name": "Natasha D",
    "client-city": "Newyork",
    "client-review":
      "They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.",

    // Offers section
    "offers-label": "OFFERS",
    "offer-dishes-title": "Our Offer Dishes",
    "offers-desc":
      "Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now the dishes are in offers use it based on hunger.",
    "offer-title-1": "50% Offer Going",
    "burger-title": "Chicken Burger",
    "burger-desc": "Chicken burger with the tasty toppings and leaves.",
    "pizza-title": "Chicken Pizza",
    "pizza-desc": "Pizza with multiple flavor and the toping are mixed.",

    // Popular dishes
    "popular-label": "MENU",
    "popular-title": "Popular Dishes",
    "popular-desc":
      "There is a game between the waiters in restaurant to see who serves the food to each table fastest. That led to attempting the Guinness Record.",
    "dish-manjoori": "Chicken Manjoori",
    "dish-manjoori-desc":
      "Dish relished by all age groups as a starter dish at parties.",
    hotdog: "Hotdog",
    "hotdog-desc":
      "Grilled sausage served in the slit of a partially sliced bun.",
    "fresh-juice": "Fresh Salom",
    "fresh-juice-desc":
      "Beat the health blues with our Super Immune Blue Juice Recipe.",
    "veg-burger": "Veg Burger",
    "veg-burger-desc": "Burgers may be made from ingredients like beans.",

    // Services section
    "what-we-offer": "WHAT WE OFFER",
    "great-services": "Our Great Services",
    "services-desc":
      "The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.",
    "service-247": "Opened 24/7",
    "service-menus": "Special Menus",
    "home-delivery": "Home Delivery",

    // Blog section
    "blog-label": "BLOG",
    "blog-title": "Be First Who Read News",
    "blog-desc":
      "Explore the latest stories about our dishes, offers, events and future plans here.",
    "blog-category": "DELISIOUS",
    "blog-date": "MARCH 19, 2022",
    "blog-headline": "The Legend of US Cuisine: The Story of Hungry People",
    "blog-text":
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",

    // Booking section
    "reservation-label": "RESERVATION",
    "book-table-title": "Book Your Table",
    "placeholder-name": "Name",
    "placeholder-email": "Email",
    "placeholder-person": "Person",
    "placeholder-timing": "Timing",
    "book-button": "Book A Table",

    // Footer section
    "footer-tag": "#TheTastEat",
    "footer-contact-title": "CONTACT",
    "footer-mailing":
      "Join our mailing list for updates, Get news & offers events.",
    "footer-hours-title": "WORKING HOURS",
    "footer-address": "5 Rue Dalou, 75015 Paris",
    "footer-phone": "+123 456 789",
    "footer-mail": "josefin@mail.com",
    subscribe: "Subscribe",
    "mon-fri": "Mon – Fri:",
    "time-mon-fri": "7.00am – 6.00pm",
    sat: "Sat:",
    "time-sat": "7.00am – 6.00pm",
    sun: "Sun:",
    "time-sun": "8.00am – 6.00pm",
    copyright:
      "© Copyright - TastEat | Designed by <span>VictorFlow</span> - Powered by <span>Webflow</span>",
    styleguide: "Styleguide",
    licenses: "Licenses",
    protected: "Protected",
    "not-found": "Not Found",
  },
};

function changeLanguage(lang) {
  localStorage.setItem("selectedLang", lang);
  document.documentElement.setAttribute("lang", lang);

  const elements = document.querySelectorAll("[t]");

  elements.forEach((element) => {
    const key = element.getAttribute("t");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "uz";

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = savedLang;
  }

  changeLanguage(savedLang);
});
