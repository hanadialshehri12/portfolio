document.addEventListener("DOMContentLoaded", function () {
    const splash = document.getElementById("splashScreen");
    const nav = document.getElementById("mainNav");
    const navBox = document.getElementById("navBox");
    const navMenu = document.getElementById("navMenu");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const htmlRoot = document.getElementById("htmlRoot");
    const langToggle = document.getElementById("langToggle");
    const langText = document.getElementById("langText");
    const codeLayer = document.getElementById("codeLayer");

    const sections = ["home", "about", "value", "solutions", "process", "tools", "contact"];

    const email = "hanadialshehri12@gmail.com";
    const linkedInLink = "https://www.linkedin.com/in/hanadi-alshehri12";
    const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=Professional%20Inquiry";

    const translations = {
        ar: {
            brand_title: "Hanadi Alshehri",
            brand_subtitle: "IT Systems Engineer",

            nav_about: "نبذة",
            nav_value: "القيمة",
            nav_solutions: "الحلول",
            nav_process: "منهجيتي",
            nav_tools: "الأدوات",
            nav_contact: "تواصل",

            splash_title: "Hanadi Portfolio",
            splash_subtitle: "جاري بناء التجربة الرقمية...",

            hero_badge: "Computer Science • Full-Stack Development • Data Analytics",
            hero_title_1: "أبني حلولاً رقمية",
            hero_title_2: "تحوّل الاحتياج التشغيلي إلى نظام واضح، قابل للاستخدام، ومؤثر",
            hero_desc: "مطورة أنظمة ومحللة بيانات أعمل على بناء حلول رقمية متكاملة من الفكرة وحتى التشغيل، مع تركيز على فهم الاحتياج، تنظيم الإجراءات، تحسين جودة البيانات، وبناء أنظمة تساعد الفرق على العمل بوضوح وكفاءة.",
            hero_btn_contact: "ابدأ مشروعك معي",
            hero_btn_cases: "استعرض نماذج الحلول",

            metric_1: "حلول رقمية تشغيلية",
            metric_2: "فرع وجهة مستفيدة",
            metric_3: "تطوير شامل من الفكرة للتشغيل",

            about_label: "نبذة مهنية",
            about_title: "أتعامل مع التقنية كأداة لبناء أنظمة أوضح، بيانات أنظف، وتجربة عمل أسهل.",
            about_desc: "أنا مطورة أنظمة ومحللة بيانات، حاصلة على بكالوريوس علوم الحاسب من جامعة تبوك بمرتبة الشرف الأولى، ومعتمدة مهنيًا من الهيئة السعودية للمهندسين. أعمل على تحويل المتطلبات التشغيلية إلى حلول رقمية متكاملة تشمل تحليل الاحتياج، تصميم قواعد البيانات، تطوير الواجهات، بناء المنطق الخلفي، وإخراج التقارير ولوحات المؤشرات.",

            about_item_1_title: "الخلفية الأكاديمية",
            about_item_1_desc: "بكالوريوس علوم حاسب — جامعة تبوك",
            about_item_2_title: "التميّز الأكاديمي",
            about_item_2_desc: "مرتبة الشرف الأولى",
            about_item_3_title: "الاعتماد المهني",
            about_item_3_desc: "معتمدة من الهيئة السعودية للمهندسين",
            about_item_4_title: "الاحترافية والخصوصية",
            about_item_4_desc: "أعمل على أنظمة تشغيلية حقيقية مع الالتزام بسرية الجهات والبيانات وجودة التنفيذ.",

            value_label: "القيمة التي أقدمها",
            value_title: "لست مجرد مطورة واجهات، بل أبني الحل كاملًا من فهم المشكلة إلى قياس الأثر.",
            value_desc: "أدمج بين البرمجة، تحليل الإجراءات، قواعد البيانات، وتجربة المستخدم لإنتاج حلول عملية قابلة للتشغيل اليومي.",
            value_main_title: "تطوير أنظمة ويب متكاملة",
            value_main_desc: "بناء أنظمة ASP.NET MVC تشمل الواجهة، قاعدة البيانات، الصلاحيات، التحقق من المدخلات، التقارير، وسير العمل.",
            value_1_title: "تحليل الإجراءات",
            value_1_desc: "تحويل العمليات المعقدة إلى Workflow واضح بحالات وصلاحيات ومسؤوليات محددة.",
            value_2_title: "تصميم قواعد البيانات",
            value_2_desc: "بناء نماذج بيانات منظمة تدعم التوسع والتقارير وتقلل التكرار والأخطاء.",
            value_3_title: "تحليل البيانات ولوحات المؤشرات",
            value_3_desc: "تنظيف وتحويل البيانات وبناء مؤشرات تساعد على قراءة الأداء واتخاذ القرار.",
            value_4_title: "الصلاحيات وجودة المدخلات",
            value_4_desc: "بناء أدوار مستخدمين، تحقق من البيانات، وسجلات متابعة تحفظ وضوح الإجراءات.",

            solutions_label: "نماذج حلول",
            solutions_title: "خبرة عملية في بناء أنظمة تشغيلية تعالج احتياجًا حقيقيًا.",
            solutions_desc: "أمثلة مختصرة توضّح نوع المشاكل التي أعمل عليها، وطبيعة الحلول والأثر الناتج، مع الحفاظ على سرية الجهات والبيانات.",
            sol_1_title: "إدارة الطلبات والتشغيل",
            sol_1_desc: "حلول تنظم الطلبات، الحالات، الإجراءات، الاعتمادات، وسجل الحركة ضمن واجهات واضحة وصلاحيات متعددة.",
            sol_2_title: "المتابعة والامتثال",
            sol_2_desc: "تحويل العمليات الدورية والمتابعة إلى نماذج رقمية قابلة للتوثيق والقياس.",
            sol_3_title: "التتبع التشغيلي",
            sol_3_desc: "حلول تدعم التتبع، تحديد المسؤوليات، تقليل الإدخال اليدوي، وتحسين دقة البيانات.",
            sol_4_title: "الترشيح والاعتماد",
            sol_4_desc: "إدارة مسارات تبدأ من تقديم الطلب وتنتهي بالاعتماد مع تقارير وفلاتر حسب الدور.",
            sol_5_title: "لوحات المؤشرات والتحليل",
            sol_5_desc: "تنظيف وتحويل البيانات، بناء مؤشرات، وتصميم لوحات تساعد على قراءة الأداء بوضوح.",

            process_label: "منهجيتي",
            process_title: "طريقة عملي من الفكرة إلى التشغيل",
            step_1_title: "فهم الاحتياج",
            step_1_desc: "أبدأ بفهم المشكلة، المستخدمين، البيانات، القيود، والنتيجة المطلوبة.",
            step_2_title: "رسم سير العمل",
            step_2_desc: "أحوّل المتطلبات إلى رحلة واضحة تشمل الحالات، الصلاحيات، ونقاط القرار.",
            step_3_title: "تصميم البنية",
            step_3_desc: "أبني قاعدة البيانات، العلاقات، ونموذج الصلاحيات بما يخدم التوسع والتقارير.",
            step_4_title: "التطوير والاختبار",
            step_4_desc: "أطور الواجهات والمنطق الخلفي، ثم أختبر التدفق، المدخلات، والصلاحيات.",
            step_5_title: "التحسين بعد التشغيل",
            step_5_desc: "أراجع الملاحظات، أحسن الأداء، وأضيف ما يجعل الحل أقرب للاستخدام الواقعي.",

            tools_label: "الأدوات والتقنيات",
            tools_title: "Tech Stack أستخدمه في التطوير والتحليل",

            contact_label: "تواصل",
            contact_title: "لديك فكرة نظام، Dashboard، أو فرصة مهنية؟ يسعدني التواصل.",
            contact_desc: "أرحب بالفرص التي تجمع بين بناء الأنظمة، تحسين الإجراءات، تحليل البيانات، وتقديم حلول تحافظ على السرية وجودة التنفيذ.",
            visitor_label: "زيارات الموقع",
            analytics_note: "يتم تتبع الزيارات وتحليل الأداء عبر Google Analytics.",
        },

        en: {
            brand_title: "Hanadi Alshehri",
            brand_subtitle: "IT Systems Engineer",

            nav_about: "About",
            nav_value: "Value",
            nav_solutions: "Solutions",
            nav_process: "Method",
            nav_tools: "Tools",
            nav_contact: "Contact",

            splash_title: "Hanadi Portfolio",
            splash_subtitle: "Building the digital experience...",

            hero_badge: "Computer Science • Full-Stack Development • Data Analytics",
            hero_title_1: "I build digital solutions",
            hero_title_2: "that turn operational needs into clear, usable, and impactful systems",
            hero_desc: "I am a systems developer and data analyst who builds end-to-end digital solutions from idea to operation, with a focus on understanding needs, organizing workflows, improving data quality, and building systems that help teams work with clarity and efficiency.",
            hero_btn_contact: "Start a Project",
            hero_btn_cases: "View Solution Samples",

            metric_1: "Operational digital solutions",
            metric_2: "Benefiting entities & branches",
            metric_3: "End-to-end development",

            about_label: "Professional Summary",
            about_title: "I use technology to build clearer systems, cleaner data, and smoother work experiences.",
            about_desc: "I am a systems developer and data analyst. I hold a Bachelor’s degree in Computer Science from the University of Tabuk, graduated with First Class Honors, and I am professionally accredited by the Saudi Council of Engineers. I transform operational requirements into integrated digital solutions covering needs analysis, database design, frontend development, backend logic, reports, and dashboards.",

            about_item_1_title: "Academic Background",
            about_item_1_desc: "Bachelor’s Degree in Computer Science — University of Tabuk",
            about_item_2_title: "Academic Excellence",
            about_item_2_desc: "First Class Honors",
            about_item_3_title: "Professional Accreditation",
            about_item_3_desc: "Accredited by the Saudi Council of Engineers",
            about_item_4_title: "Professionalism & Privacy",
            about_item_4_desc: "I work on real operational systems while respecting confidentiality, data privacy, and quality of delivery.",

            value_label: "My Value",
            value_title: "I am not only a frontend developer; I build the full solution from understanding the problem to measuring impact.",
            value_desc: "I combine development, workflow analysis, databases, and user experience to deliver practical solutions ready for daily operation.",
            value_main_title: "End-to-End Web System Development",
            value_main_desc: "Building ASP.NET MVC systems that include interfaces, databases, permissions, input validation, reports, and workflows.",
            value_1_title: "Workflow Analysis",
            value_1_desc: "Turning complex operations into clear workflows with defined statuses, permissions, and responsibilities.",
            value_2_title: "Database Design",
            value_2_desc: "Building structured data models that support scalability and reporting while reducing duplication and errors.",
            value_3_title: "Data Analytics & Dashboards",
            value_3_desc: "Cleaning and transforming data into indicators that support performance reading and decision-making.",
            value_4_title: "Permissions & Data Quality",
            value_4_desc: "Building user roles, data validation, and activity logs that keep workflows clear and reliable.",

            solutions_label: "Solution Samples",
            solutions_title: "Practical experience in building operational systems that solve real needs.",
            solutions_desc: "Brief examples showing the types of problems I work on, the nature of solutions, and the resulting impact while protecting entity and data confidentiality.",
            sol_1_title: "Request & Operations Management",
            sol_1_desc: "Solutions that organize requests, statuses, actions, approvals, and activity logs through clear interfaces and multiple permission levels.",
            sol_2_title: "Monitoring & Compliance",
            sol_2_desc: "Transforming routine operations and follow-up workflows into structured digital solutions that enable tracking, measurement, and clear documentation.",
            sol_3_title: "Operational Tracking",
            sol_3_desc: "Solutions that support tracking, responsibility assignment, reduced manual entry, and improved data accuracy.",
            sol_4_title: "Nomination & Approval",
            sol_4_desc: "Managing workflows from submission to approval with reports and filters based on roles.",
            sol_5_title: "Dashboards & Analytics",
            sol_5_desc: "Cleaning and transforming data, building indicators, and designing dashboards that make performance easier to read.",

            process_label: "My Method",
            process_title: "How I work from idea to operation",
            step_1_title: "Understand the Need",
            step_1_desc: "I start by understanding the problem, users, data, constraints, and desired outcome.",
            step_2_title: "Map the Workflow",
            step_2_desc: "I turn requirements into a clear journey that includes statuses, permissions, and decision points.",
            step_3_title: "Design the Structure",
            step_3_desc: "I design the database, relationships, and permission model to support scalability and reporting.",
            step_4_title: "Develop & Test",
            step_4_desc: "I develop the interfaces and backend logic, then test flows, inputs, and permissions.",
            step_5_title: "Improve After Launch",
            step_5_desc: "I review feedback, improve performance, and add what makes the solution closer to real use.",

            tools_label: "Tools & Technologies",
            tools_title: "Tech stack I use for development and analytics",

            contact_label: "Contact",
            contact_title: "Have a system idea, dashboard need, or career opportunity? Let’s connect.",
            contact_desc: "I welcome opportunities that combine system development, process improvement, data analytics, and solutions that protect confidentiality and quality.",
            visitor_label: "Site visits",
            analytics_note: "Site visits and performance are analyzed using Google Analytics.",
        }
    };

    function hideSplash() {
        if (!splash) return;
        splash.classList.add("hide");
    }

    window.addEventListener("load", function () {
        setTimeout(hideSplash, 600);
    });

    function getCurrentSectionId() {
        let currentId = "home";
        const offset = 180;

        sections.forEach(function (id) {
            const section = document.getElementById(id);
            if (!section) return;

            const top = section.offsetTop - offset;

            if (window.scrollY >= top) {
                currentId = id;
            }
        });

        return currentId;
    }

    function updateActiveLink() {
        const currentId = getCurrentSectionId();

        document.querySelectorAll(".nav-links a[href*='#']").forEach(function (link) {
            const href = link.getAttribute("href") || "";
            const hash = href.includes("#") ? href.split("#")[1] : "";

            link.classList.toggle("active", hash === currentId);
        });
    }

    function applyLanguage(lang) {
        if (!htmlRoot) return;

        const dict = translations[lang] || translations.ar;
        const isArabic = lang === "ar";

        htmlRoot.setAttribute("lang", lang);
        htmlRoot.setAttribute("dir", isArabic ? "rtl" : "ltr");
        document.body.classList.toggle("is-en", !isArabic);

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            const key = el.getAttribute("data-i18n");

            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.textContent = dict[key];
            }
        });

        if (langText) {
            langText.textContent = isArabic ? "EN" : "AR";
        }

        localStorage.setItem("portfolioLang", lang);
        updateActiveLink();
    }

    const savedLang = localStorage.getItem("portfolioLang") || "ar";
    applyLanguage(savedLang);

    function generateCodeBackground() {
        if (!codeLayer || codeLayer.children.length > 0) return;

        const lines = [
            "Analyze();",
            "MapWorkflow();",
            "DesignDatabase();",
            "BuildSystem();",
            "Validate(input);",
            "roles.Protect();",
            "reports.ExportExcel();",
            "dashboard.Render();",
            "db.SaveChanges();",
            "return Solution;"
        ];

        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 8 : 20;

        for (let i = 0; i < count; i++) {
            const span = document.createElement("span");

            span.textContent = lines[Math.floor(Math.random() * lines.length)];
            span.style.left = Math.random() * 100 + "%";
            span.style.top = Math.random() * 100 + "%";
            span.style.animationDuration = (12 + Math.random() * 14) + "s";
            span.style.animationDelay = Math.random() * 9 + "s";

            codeLayer.appendChild(span);
        }
    }

    generateCodeBackground();

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll(".section-reveal").forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        document.querySelectorAll(".section-reveal").forEach(function (el) {
            el.classList.add("visible");
        });
    }

    let countersStarted = false;

    function startCounters() {
        if (countersStarted) return;

        document.querySelectorAll("[data-count]").forEach(function (counter) {
            const target = parseInt(counter.getAttribute("data-count"), 10);

            if (Number.isNaN(target)) return;

            const duration = 900;
            const startTime = performance.now();

            function animate(now) {
                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.round(target * eased);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(animate);
        });

        countersStarted = true;
    }

    const metrics = document.querySelector(".hero-metrics");

    if (metrics && "IntersectionObserver" in window) {
        const counterObserver = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                startCounters();
                counterObserver.disconnect();
            }
        }, { threshold: 0.35 });

        counterObserver.observe(metrics);
    } else {
        startCounters();
    }

    function closeMobileMenu() {
        if (!navMenu || !window.bootstrap) return;

        if (!navMenu.classList.contains("show")) return;

        const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu, { toggle: false });
        collapse.hide();
    }

    function toggleMobileMenu() {
        if (!navMenu || !window.bootstrap) return;

        const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu, { toggle: false });
        collapse.toggle();
    }

    if (navBox && navMenu) {
        navBox.addEventListener("click", function (e) {
            const isMobile = window.innerWidth <= 991;
            if (!isMobile) return;

            const clickedLang = e.target.closest("#langToggle");
            const clickedMenu = e.target.closest("#navMenu");

            if (clickedLang || clickedMenu) return;

            toggleMobileMenu();
        });
    }

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileMenu();
        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 991) {
            closeMobileMenu();
        }
    });

    let ticking = false;

    function onScroll() {
        if (ticking) return;

        window.requestAnimationFrame(function () {
            const scrollY = window.scrollY || window.pageYOffset;

            if (nav) {
                nav.classList.toggle("scrolled", scrollY > 35);
            }

            if (scrollTopBtn) {
                scrollTopBtn.style.display = scrollY > 520 ? "grid" : "none";
            }

            updateActiveLink();
            ticking = false;
        });

        ticking = true;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    document.querySelectorAll(".tilt-card").forEach(function (card) {
        card.addEventListener("mousemove", function (e) {
            if (window.innerWidth <= 991) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 5;
            const rotateX = ((y / rect.height) - 0.5) * -5;

            card.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
        });
    });

    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotWindow = document.getElementById("chatbotWindow");
    const chatbotClose = document.getElementById("chatbotClose");
    const chatbotBody = document.getElementById("chatbotBody");
    const chatbotQuick = document.getElementById("chatbotQuick");
    const chatbotForm = document.getElementById("chatbotForm");
    const chatbotInput = document.getElementById("chatbotInput");
    const botTitle = document.getElementById("botTitle");
    const botStatus = document.getElementById("botStatus");

    const chatbotData = {
        ar: {
            title: "مساعد هنادي",
            status: "اسأل عن القيمة، الخبرات، نماذج الحلول، أو طريقة التواصل",
            placeholder: "اكتب سؤالك هنا...",
            welcome: "مرحبًا 👋 أنا مساعد هنادي. أقدر أعرّفك على خبراتها، القيمة التي تقدمها، نماذج الحلول، الأدوات، أو طريقة التواصل معها.",
            fallback: "أقدر أساعدك أكثر لو سألتني عن القيمة، الخبرات، نماذج الحلول، الأدوات، أو طريقة التواصل.",
            quick: [
                { label: "ما القيمة؟", key: "value" },
                { label: "ما خبراتها؟", key: "skills" },
                { label: "نماذج الحلول؟", key: "projects" },
                { label: "كيف أتواصل؟", key: "contact" }
            ],
            answers: {
                about: "هنادي مطورة أنظمة ومحللة بيانات، خريجة علوم حاسب بمرتبة الشرف الأولى، ولديها اعتماد مهني من الهيئة السعودية للمهندسين. تعمل على بناء حلول رقمية متكاملة مع الحفاظ على سرية البيانات والأنظمة.",
                value: "تقدم قيمة متكاملة تبدأ من فهم المشكلة وتحليل الإجراءات، ثم تصميم قاعدة البيانات، بناء النظام، ضبط الصلاحيات، وتحويل البيانات إلى مؤشرات قابلة للمتابعة.",
                services: "تقدم خدمات تطوير أنظمة ويب، تصميم قواعد البيانات، تحليل الإجراءات وتحويلها إلى Workflow، بناء لوحات Power BI، تحسين الأنظمة القائمة، وتصميم صلاحيات وتجربة مستخدم واضحة.",
                skills: "خبراتها تشمل ASP.NET MVC، C#، SQL Server، Razor Views، JavaScript، Bootstrap، DataTables، Power BI، Python، Power Query، Git، GitHub، Postman وPlesk.",
                projects: "عملت على حلول تشغيلية مثل إدارة الطلبات، المتابعة والامتثال، التتبع، الترشيح والاعتماد، ولوحات المؤشرات. يتم عرض الأعمال بصياغة عامة لحماية سرية الجهات والأنظمة.",
                tools: "تستخدم C#، ASP.NET MVC، Razor Views، SQL Server، SSMS، JavaScript، Bootstrap، DataTables، Power BI، Python، Power Query، Git، GitHub، Postman وPlesk.",
                contact: `يمكنك التواصل مع هنادي عبر:<br><br><b>Email:</b> ${email}<br><b>LinkedIn:</b> <a href="${linkedInLink}" target="_blank" rel="noopener">فتح LinkedIn</a><br><br><a href="${emailLink}" target="_blank" rel="noopener">📧 فتح رسالة بريد جاهزة</a>`
            }
        },
        en: {
            title: "Hanadi Assistant",
            status: "Ask about value, experience, solution samples, or contact",
            placeholder: "Type your question here...",
            welcome: "Hi 👋 I am Hanadi’s assistant. I can introduce her experience, value, solution samples, tools, or contact options.",
            fallback: "I can help better if you ask about value, experience, solution samples, tools, or contact.",
            quick: [
                { label: "Value?", key: "value" },
                { label: "Experience?", key: "skills" },
                { label: "Solutions?", key: "projects" },
                { label: "Contact?", key: "contact" }
            ],
            answers: {
                about: "Hanadi is a systems developer and data analyst, a Computer Science graduate with First Class Honors, and professionally accredited by the Saudi Council of Engineers. She builds end-to-end digital solutions while protecting data and system confidentiality.",
                value: "She delivers end-to-end value by understanding the problem, analyzing workflows, designing databases, building systems, managing permissions, and turning data into measurable indicators.",
                services: "She provides web system development, database design, workflow analysis, Power BI dashboards, existing system improvement, permissions design, and clear user experiences.",
                skills: "Her experience includes ASP.NET MVC, C#, SQL Server, Razor Views, JavaScript, Bootstrap, DataTables, Power BI, Python, Power Query, Git, GitHub, Postman, and Plesk.",
                projects: "She has worked on operational solutions such as request management, monitoring and compliance, tracking, nomination and approval workflows, and dashboards. Work is presented generally to protect confidentiality.",
                tools: "She uses C#, ASP.NET MVC, Razor Views, SQL Server, SSMS, JavaScript, Bootstrap, DataTables, Power BI, Python, Power Query, Git, GitHub, Postman, and Plesk.",
                contact: `You can contact Hanadi through:<br><br><b>Email:</b> ${email}<br><b>LinkedIn:</b> <a href="${linkedInLink}" target="_blank" rel="noopener">Open LinkedIn</a><br><br><a href="${emailLink}" target="_blank" rel="noopener">📧 Open a ready email</a>`
            }
        }
    };

    function getChatLang() {
        return htmlRoot && htmlRoot.getAttribute("lang") === "en" ? "en" : "ar";
    }

    function getBotData() {
        return chatbotData[getChatLang()] || chatbotData.ar;
    }

    function sanitizeText(value) {
        const div = document.createElement("div");
        div.textContent = value || "";
        return div.innerHTML;
    }
    function safeBotHtml(text) {
        return text.replace(/<(?!br\s*\/?|\/br|b|\/b|a href="https?:\/\/[^"]*"|\/a)[^>]*>/gi, "");
    }

    function addChatMessage(text, type, isHtml) {
        if (!chatbotBody) return;

        const msg = document.createElement("div");
        msg.className = "chat-msg " + type;

        if (isHtml) {
            msg.innerHTML = safeBotHtml(text);
        } else {
            msg.innerHTML = sanitizeText(text);
        }

        chatbotBody.appendChild(msg);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    function renderQuickReplies() {
        if (!chatbotQuick) return;

        const data = getBotData();
        chatbotQuick.innerHTML = "";

        data.quick.forEach(function (item) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = item.label;

            btn.addEventListener("click", function () {
                addChatMessage(item.label, "user", false);

                const typing = document.createElement("div");
                typing.className = "chat-msg bot";
                typing.textContent = "...";
                chatbotBody.appendChild(typing);
                chatbotBody.scrollTop = chatbotBody.scrollHeight;

                setTimeout(function () {
                    typing.remove();
                    addChatMessage(data.answers[item.key], "bot", true);
                }, 450);
            });

            chatbotQuick.appendChild(btn);
        });
    }

    function refreshChatbotLanguage() {
        if (!botTitle || !botStatus || !chatbotInput) return;

        const data = getBotData();

        botTitle.textContent = data.title;
        botStatus.textContent = data.status;
        chatbotInput.placeholder = data.placeholder;

        renderQuickReplies();
    }

    if (langToggle) {
        langToggle.addEventListener("click", function (e) {
            e.stopPropagation();

            const currentLang = htmlRoot ? htmlRoot.getAttribute("lang") : "ar";
            applyLanguage(currentLang === "ar" ? "en" : "ar");
            refreshChatbotLanguage();
        });
    }

    function startChatbot() {
        if (!chatbotBody) return;

        chatbotBody.innerHTML = "";
        refreshChatbotLanguage();

        setTimeout(function () {
            addChatMessage(getBotData().welcome, "bot", false);
        }, 250);
    }

    function detectBotAnswer(message) {
        const text = (message || "").toLowerCase();
        const data = getBotData();

        if (
            text.includes("ايميل") || text.includes("إيميل") || text.includes("ايميلها") ||
            text.includes("بريد") || text.includes("email") || text.includes("mail")
        ) {
            return getChatLang() === "ar"
                ? `أكيد، بريد هنادي هو:<br><b>${email}</b><br><br><a href="${emailLink}" target="_blank" rel="noopener">📧 فتح رسالة بريد جاهزة</a>`
                : `Sure, Hanadi’s email is:<br><b>${email}</b><br><br><a href="${emailLink}" target="_blank" rel="noopener">📧 Open a ready email</a>`;
        }

        if (text.includes("لينكد") || text.includes("لينكدان") || text.includes("linkedin")) {
            return getChatLang() === "ar"
                ? `حساب هنادي على LinkedIn:<br><a href="${linkedInLink}" target="_blank" rel="noopener">فتح LinkedIn</a>`
                : `Hanadi’s LinkedIn profile:<br><a href="${linkedInLink}" target="_blank" rel="noopener">Open LinkedIn</a>`;
        }

        if (
            text.includes("قيمة") || text.includes("تميز") || text.includes("ليش") ||
            text.includes("value") || text.includes("why")
        ) {
            return data.answers.value;
        }

        if (
            text.includes("خدم") || text.includes("تسوي") || text.includes("تقدم") ||
            text.includes("service") || text.includes("services")
        ) {
            return data.answers.services;
        }

        if (text.includes("cv") || text.includes("سيرة") || text.includes("resume")) {
            return getChatLang() === "ar"
                ? `يمكنك طلب السيرة الذاتية مباشرة عبر البريد:<br><b>${email}</b><br><br><a href="${emailLink}" target="_blank" rel="noopener">📧 طلب السيرة الذاتية</a>`
                : `You can request the CV directly by email:<br><b>${email}</b><br><br><a href="${emailLink}" target="_blank" rel="noopener">📧 Request CV</a>`;
        }

        if (
            text.includes("خبر") || text.includes("مهار") || text.includes("قدرات") ||
            text.includes("skills") || text.includes("experience") || text.includes("expertise")
        ) {
            return data.answers.skills;
        }

        if (
            text.includes("مشروع") || text.includes("انظمة") || text.includes("أنظمة") ||
            text.includes("حلول") || text.includes("projects") || text.includes("systems") ||
            text.includes("work") || text.includes("solutions")
        ) {
            return data.answers.projects;
        }

        if (
            text.includes("ادوات") || text.includes("أدوات") || text.includes("تقنيات") ||
            text.includes("tools") || text.includes("tech") || text.includes("stack")
        ) {
            return data.answers.tools;
        }

        if (
            text.includes("تواصل") || text.includes("contact") || text.includes("جوال") || text.includes("phone")
        ) {
            return data.answers.contact;
        }

        if (
            text.includes("من") || text.includes("هنادي") ||
            text.includes("who") || text.includes("about") || text.includes("hanadi")
        ) {
            return data.answers.about;
        }

        return data.fallback;
    }

    if (chatbotToggle && chatbotWindow) {
        chatbotToggle.addEventListener("click", function () {
            const isOpen = chatbotWindow.classList.toggle("show");

            if (isOpen) {
                startChatbot();
            }
        });
    }

    if (chatbotClose && chatbotWindow) {
        chatbotClose.addEventListener("click", function () {
            chatbotWindow.classList.remove("show");
        });
    }

    if (chatbotForm && chatbotInput) {
        chatbotForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const value = chatbotInput.value.trim();
            if (!value) return;

            addChatMessage(value, "user", false);
            chatbotInput.value = "";

            const typing = document.createElement("div");
            typing.className = "chat-msg bot";
            typing.textContent = "...";
            chatbotBody.appendChild(typing);
            chatbotBody.scrollTop = chatbotBody.scrollHeight;

            setTimeout(function () {
                typing.remove();
                addChatMessage(detectBotAnswer(value), "bot", true);
            }, 500);
        });
    }

    refreshChatbotLanguage();

    const proTimeline = document.getElementById("proTimeline");

    function updateProcessTimeline() {
        if (!proTimeline) return;

        const steps = Array.from(proTimeline.querySelectorAll(".pro-step"));
        if (!steps.length) return;

        const viewportMiddle = window.innerHeight * 0.55;
        let activeIndex = 0;

        steps.forEach(function (step, index) {
            const rect = step.getBoundingClientRect();
            if (rect.top <= viewportMiddle) {
                activeIndex = index;
            }
        });

        steps.forEach(function (step, index) {
            step.classList.toggle("active", index === activeIndex);
        });

        const progress = steps.length <= 1 ? 100 : 12 + (activeIndex / (steps.length - 1)) * 88;
        proTimeline.style.setProperty("--line-progress", progress + "%");
    }

    window.addEventListener("scroll", updateProcessTimeline, { passive: true });
    window.addEventListener("resize", updateProcessTimeline);
    updateProcessTimeline();




});