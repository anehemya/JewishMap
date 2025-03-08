const scholars = [
    // Geonim Period (589-1038)
    {
        name: "Rav Sherira Gaon",
        birthYear: 906,
        deathYear: 1006,
        description: "Leader of the Pumbedita Academy, wrote famous Epistle on transmission of Oral Law",
        link: "https://www.jewishvirtuallibrary.org/sherira-ben-hanina-gaon",
        coordinates: {
            lat: 32.4793,
            lng: 44.4333 // Pumbedita (modern-day Fallujah)
        }
    },
    {
        name: "Rav Hai Gaon",
        birthYear: 939,
        deathYear: 1038,
        description: "Last and most prominent of the Geonim of Pumbedita",
        link: "https://www.jewishvirtuallibrary.org/hai-ben-sherira-gaon",
        coordinates: {
            lat: 32.4793,
            lng: 44.4333
        }
    },
    {
        name: "Rabbenu Sa'adya Gaon",
        birthYear: 882,
        deathYear: 942,
        description: "Author of Emunot ve-Deot, first systematic presentation of Jewish philosophy",
        link: "https://www.jewishvirtuallibrary.org/saadia-gaon",
        coordinates: {
            lat: 33.3152,
            lng: 44.3661 // Baghdad
        }
    },

    // Rishonim - Early (1000-1200)
    {
        name: "Rashi (Rabbi Shlomo Yitzchaki)",
        birthYear: 1040,
        deathYear: 1105,
        description: "Greatest commentator on Torah and Talmud, whose work remains fundamental to Jewish study",
        link: "https://www.myjewishlearning.com/article/rashi/",
        coordinates: {
            lat: 48.2973,
            lng: 4.0744 // Troyes, France
        }
    },
    {
        name: "Rabbi Yehuda HaLevi",
        birthYear: 1075,
        deathYear: 1141,
        description: "Philosopher and poet, author of The Kuzari",
        link: "https://www.jewishvirtuallibrary.org/judah-halevi",
        coordinates: {
            lat: 41.6528,
            lng: -4.7283 // Toledo, Spain
        }
    },
    {
        name: "Rabbenu Tam",
        birthYear: 1100,
        deathYear: 1171,
        description: "Leading Tosafist, grandson of Rashi, and one of the greatest authorities in Jewish law",
        link: "https://www.jewishvirtuallibrary.org/jacob-ben-meir-tam",
        coordinates: {
            lat: 48.2973,
            lng: 4.0744 // Troyes, France
        }
    },

    // Continue with more chronological entries...
    {
        name: "Rambam (Maimonides)",
        birthYear: 1138,
        deathYear: 1204,
        description: "Author of Mishneh Torah and Guide for the Perplexed, greatest Jewish philosopher of the medieval period",
        link: "https://plato.stanford.edu/entries/maimonides/",
        coordinates: {
            lat: 30.0444,
            lng: 31.2357 // Cairo
        }
    },

    // Modern Period
    {
        name: "Rabbi Lord Jonathan Sacks",
        birthYear: 1948,
        deathYear: 2020,
        description: "Chief Rabbi of UK, renowned philosopher and author who bridged Judaism and modern thought",
        link: "https://www.rabbisacks.org/",
        coordinates: {
            lat: 51.5074,
            lng: -0.1278 // London
        }
    },
    {
        name: "Rabbi Yosef Karo",
        birthYear: 1488,
        deathYear: 1575,
        description: "Author of the Shulchan Aruch, the most widely consulted Jewish legal code.",
        link: "https://www.jewishvirtuallibrary.org/joseph-ben-ephraim-karo",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Safed
        }
    },
    {
        name: "The Vilna Gaon",
        birthYear: 1720,
        deathYear: 1797,
        description: "Most influential leader of non-Hasidic Jewry of the past few centuries.",
        link: "https://www.jewishvirtuallibrary.org/elijah-ben-solomon-zalman",
        coordinates: {
            lat: 54.6872,
            lng: 25.2797 // Vilnius
        }
    },
    {
        name: "Rabbi Samson Raphael Hirsch",
        birthYear: 1808,
        deathYear: 1888,
        description: "Founder of Torah im Derech Eretz philosophy, leader of modern Orthodox Judaism.",
        link: "https://www.jewishvirtuallibrary.org/hirsch-samson-raphael",
        coordinates: {
            lat: 50.1109,
            lng: 8.6821 // Frankfurt
        }
    },
    {
        name: "Rabbi Abraham Isaac Kook",
        birthYear: 1865,
        deathYear: 1935,
        description: "First Ashkenazi Chief Rabbi of British Mandatory Palestine, philosopher of Religious Zionism.",
        link: "https://www.jewishvirtuallibrary.org/kook-abraham-isaac",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Joseph B. Soloveitchik",
        birthYear: 1903,
        deathYear: 1993,
        description: "Leading figure in modern Orthodox Judaism, known as 'The Rav'.",
        link: "https://www.jewishvirtuallibrary.org/soloveitchik-joseph-b",
        coordinates: {
            lat: 42.3601,
            lng: -71.0589 // Boston
        }
    },
    {
        name: "Ibn Ezra",
        birthYear: 1089,
        deathYear: 1167,
        description: "Medieval biblical commentator, philosopher, and poet.",
        link: "https://www.jewishvirtuallibrary.org/ibn-ezra-abraham-ben-meir",
        coordinates: {
            lat: 41.6488,
            lng: -0.8891 // Tudela, Spain
        }
    },

    // Adding more Rishonim
    {
        name: "Rabbi Abraham ibn Daud",
        birthYear: 1110,
        deathYear: 1180,
        description: "Author of Sefer ha-Kabbalah, first systematic presentation of Jewish history",
        link: "https://www.jewishvirtuallibrary.org/abraham-ibn-daud",
        coordinates: {
            lat: 37.3891,
            lng: -5.9845 // Toledo, Spain
        }
    },
    {
        name: "Ramban (Rabbi Moshe ben Nachman)",
        birthYear: 1194,
        deathYear: 1270,
        description: "Major Talmudist, Kabbalist, and Torah commentator",
        link: "https://www.myjewishlearning.com/article/nachmanides-ramban/",
        coordinates: {
            lat: 41.9830,
            lng: 2.8245 // Girona, Spain
        }
    },
    {
        name: "Rabbi David Kimhi (Radak)",
        birthYear: 1160,
        deathYear: 1235,
        description: "Major biblical commentator and Hebrew grammarian",
        link: "https://www.jewishvirtuallibrary.org/kimhi-david",
        coordinates: {
            lat: 43.6047,
            lng: 1.4442 // Narbonne, France
        }
    },
    {
        name: "Rabbi Levi ben Gershon (Ralbag)",
        birthYear: 1288,
        deathYear: 1344,
        description: "Philosopher, mathematician, and biblical commentator",
        link: "https://www.jewishvirtuallibrary.org/levi-ben-gershon",
        coordinates: {
            lat: 43.9493,
            lng: 4.8055 // Bagnols-sur-Cèze, France
        }
    },

    // Early Acharonim
    {
        name: "Rabbi Isaac Abarbanel",
        birthYear: 1437,
        deathYear: 1508,
        description: "Statesman, philosopher, and biblical commentator",
        link: "https://www.jewishvirtuallibrary.org/abravanel-isaac-ben-judah",
        coordinates: {
            lat: 38.7223,
            lng: -9.1393 // Lisbon, Portugal
        }
    },
    {
        name: "Rabbi Moshe Isserles (Rema)",
        birthYear: 1530,
        deathYear: 1572,
        description: "Author of Ashkenazic glosses to the Shulchan Aruch",
        link: "https://www.jewishvirtuallibrary.org/isserles-moses-ben-israel",
        coordinates: {
            lat: 50.0647,
            lng: 19.9450 // Kraków, Poland
        }
    },

    // Kabbalists and Mystics
    {
        name: "Rabbi Isaac Luria (The Arizal)",
        birthYear: 1534,
        deathYear: 1572,
        description: "Founder of modern Kabbalah",
        link: "https://www.myjewishlearning.com/article/isaac-luria/",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Safed
        }
    },
    {
        name: "Rabbi Chaim Vital",
        birthYear: 1543,
        deathYear: 1620,
        description: "Primary disciple of the Arizal and transmitter of Lurianic Kabbalah",
        link: "https://www.jewishvirtuallibrary.org/vital-hayyim-ben-joseph",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Safed
        }
    },

    // Early Modern Period
    {
        name: "The Ba'al Shem Tov",
        birthYear: 1698,
        deathYear: 1760,
        description: "Founder of Hasidic Judaism",
        link: "https://www.myjewishlearning.com/article/the-baal-shem-tov/",
        coordinates: {
            lat: 49.2331,
            lng: 28.4682 // Medzhybizh, Ukraine
        }
    },

    // Modern Scholars
    {
        name: "Rabbi Chaim Soloveitchik",
        birthYear: 1853,
        deathYear: 1918,
        description: "Founder of the Brisker method of Talmud study",
        link: "https://www.jewishvirtuallibrary.org/soloveitchik-hayyim",
        coordinates: {
            lat: 53.1325,
            lng: 23.1688 // Brisk (Brest)
        }
    },
    {
        name: "Rabbi Avraham Yeshaya Karelitz (Chazon Ish)",
        birthYear: 1878,
        deathYear: 1953,
        description: "Leading authority in Jewish law and thought in early Israeli state",
        link: "https://www.jewishvirtuallibrary.org/karelitz-avraham-yeshayahu",
        coordinates: {
            lat: 32.0853,
            lng: 34.7818 // Bnei Brak
        }
    },
    {
        name: "Rabbi Moshe Haim Luzzatto (Ramchal)",
        birthYear: 1707,
        deathYear: 1746,
        description: "Author of Mesillat Yesharim, major influence on modern Jewish ethical thought",
        link: "https://www.jewishvirtuallibrary.org/luzzatto-moses-hayyim",
        coordinates: {
            lat: 45.4064,
            lng: 11.8768 // Padua, Italy
        }
    },
    {
        name: "Rabbi Moshe Sofer (Chatam Sofer)",
        birthYear: 1762,
        deathYear: 1839,
        description: "Leader of Orthodox Judaism in the Habsburg Empire, opponent of Reform",
        link: "https://www.jewishvirtuallibrary.org/sofer-moses",
        coordinates: {
            lat: 48.1486,
            lng: 17.1077 // Pressburg (Bratislava)
        }
    },
    {
        name: "Rabbi Meir Simcha of Dvinsk",
        birthYear: 1843,
        deathYear: 1926,
        description: "Author of Ohr Sameach and Meshech Chochmah, renowned Talmudist",
        link: "https://www.jewishvirtuallibrary.org/meir-simhah-ha-kohen-of-dvinsk",
        coordinates: {
            lat: 55.8833,
            lng: 26.5333 // Dvinsk (Daugavpils)
        }
    },
    {
        name: "Rabbi Yosef Messas",
        birthYear: 1892,
        deathYear: 1974,
        description: "Chief Rabbi of Haifa, important Sephardic posek",
        link: "https://www.ykr.org.il/modules/Ask/ask_EN.asp?LCID=1033",
        coordinates: {
            lat: 32.7940,
            lng: 34.9896 // Haifa
        }
    },
    {
        name: "Rabbi Ovadia Yosef",
        birthYear: 1920,
        deathYear: 2013,
        description: "Former Sephardi Chief Rabbi of Israel, founder of Shas party",
        link: "https://www.jewishvirtuallibrary.org/yosef-ovadia",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Shlomo Zalman Auerbach",
        birthYear: 1910,
        deathYear: 1995,
        description: "Leading posek of the 20th century, expert on modern technology in Jewish law",
        link: "https://www.jewishvirtuallibrary.org/auerbach-solomon-zalman",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Aharon Lichtenstein",
        birthYear: 1933,
        deathYear: 2015,
        description: "Rosh Yeshiva of Yeshivat Har Etzion, combined Torah scholarship with secular studies",
        link: "https://www.jewishvirtuallibrary.org/lichtenstein-aharon",
        coordinates: {
            lat: 31.6566,
            lng: 35.1208 // Gush Etzion
        }
    },
    {
        name: "Prof. Nechama Leibowitz",
        birthYear: 1905,
        deathYear: 1997,
        description: "Revolutionary Bible scholar and educator",
        link: "https://www.jewishvirtuallibrary.org/leibowitz-nechama",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Shlomo Goren",
        birthYear: 1917,
        deathYear: 1994,
        description: "Chief Rabbi of Israel, pioneered Jewish military law",
        link: "https://www.jewishvirtuallibrary.org/goren-shlomo",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Yitzchak Herzog",
        birthYear: 1888,
        deathYear: 1959,
        description: "First Chief Rabbi of Israel, expert in Jewish and general law",
        link: "https://www.jewishvirtuallibrary.org/herzog-isaac",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Menahem ibn Saruk",
        birthYear: 920,
        deathYear: 970,
        description: "Pioneer of Hebrew linguistics and lexicography, author of Mahberet",
        link: "https://www.jewishvirtuallibrary.org/ibn-saruk-menahem-ben-jacob",
        coordinates: {
            lat: 41.6488,
            lng: -0.8891 // Tortosa, Spain
        }
    },
    {
        name: "Dunash ben Labrat",
        birthYear: 920,
        deathYear: 990,
        description: "Hebrew grammarian and poet, introduced Arabic meter to Hebrew poetry",
        link: "https://www.jewishvirtuallibrary.org/dunash-ben-labrat",
        coordinates: {
            lat: 31.7917,
            lng: -7.0926 // Fez, Morocco
        }
    },
    {
        name: "Shmuel ben Hofni",
        birthYear: 960,
        deathYear: 1034,
        description: "Gaon of Sura, wrote extensively on Jewish law and philosophy",
        link: "https://www.jewishvirtuallibrary.org/samuel-ben-hophni",
        coordinates: {
            lat: 32.0667,
            lng: 44.3500 // Sura, Iraq
        }
    },
    {
        name: "Yehuda ibn Chayyuj",
        birthYear: 945,
        deathYear: 1000,
        description: "Father of Hebrew grammar, discovered the system of trilateral roots",
        link: "https://www.jewishvirtuallibrary.org/ibn-ayyuj-judah-ben-david",
        coordinates: {
            lat: 37.3891,
            lng: -5.9845 // Córdoba, Spain
        }
    },
    {
        name: "Rabbi Shmuel HaNagid",
        birthYear: 993,
        deathYear: 1056,
        description: "Vizier of Granada, poet, and Talmudic scholar",
        link: "https://www.jewishvirtuallibrary.org/samuel-ha-nagid",
        coordinates: {
            lat: 37.1773,
            lng: -3.5986 // Granada, Spain
        }
    },
    {
        name: "Rabbi Bahya ibn Paquda",
        birthYear: 1040,
        deathYear: 1110,
        description: "Author of Chovot HaLevavot (Duties of the Heart)",
        link: "https://www.jewishvirtuallibrary.org/bahya-ben-joseph-ibn-pakuda",
        coordinates: {
            lat: 41.6488,
            lng: -0.8891 // Zaragoza, Spain
        }
    },
    {
        name: "Rabbi Abraham bar Hiyya",
        birthYear: 1070,
        deathYear: 1136,
        description: "Mathematician, astronomer, and philosopher",
        link: "https://www.jewishvirtuallibrary.org/abraham-bar-hiyya",
        coordinates: {
            lat: 41.3851,
            lng: 2.1734 // Barcelona, Spain
        }
    },
    {
        name: "Rabbi Azriel Hildesheimer",
        birthYear: 1820,
        deathYear: 1899,
        description: "Founder of modern Orthodox Judaism in Germany",
        link: "https://www.jewishvirtuallibrary.org/hildesheimer-azriel",
        coordinates: {
            lat: 52.5200,
            lng: 13.4050 // Berlin
        }
    },
    {
        name: "Rabbi Tzvi Hirsch Chajes",
        birthYear: 1805,
        deathYear: 1855,
        description: "Pioneer of modern critical Talmud study",
        link: "https://www.jewishvirtuallibrary.org/chajes-zevi-hirsch",
        coordinates: {
            lat: 49.8397,
            lng: 24.0297 // Lviv
        }
    },
    {
        name: "Rabbi Eliyahu Benamozegh",
        birthYear: 1823,
        deathYear: 1900,
        description: "Kabbalist and philosopher, advocate for universal religion",
        link: "https://www.jewishvirtuallibrary.org/benamozegh-elijah",
        coordinates: {
            lat: 43.5507,
            lng: 10.3091 // Livorno, Italy
        }
    },
    {
        name: "Rabbi Meir Bar-Ilan (Berlin)",
        birthYear: 1880,
        deathYear: 1949,
        description: "Leader of Religious Zionism and Jewish education",
        link: "https://www.jewishvirtuallibrary.org/bar-ilan-meir",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Yechiel Yaakov Weinberg",
        birthYear: 1884,
        deathYear: 1966,
        description: "Author of Seridei Eish, combined traditional learning with academic scholarship",
        link: "https://www.jewishvirtuallibrary.org/weinberg-jehiel-jacob",
        coordinates: {
            lat: 52.5200,
            lng: 13.4050 // Berlin
        }
    },
    {
        name: "Rabbi Hershel Schachter",
        birthYear: 1941,
        deathYear: null,
        description: "Rosh Yeshiva at RIETS, leading contemporary posek",
        link: "https://www.yu.edu/faculty/pages/schachter-hershel",
        coordinates: {
            lat: 40.8499,
            lng: -73.9278 // New York
        }
    },
    {
        name: "Rabbi Eliezer Melamed",
        birthYear: 1961,
        deathYear: null,
        description: "Author of Peninei Halacha series, combines Religious Zionism with traditional scholarship",
        link: "https://en.wikipedia.org/wiki/Eliezer_Melamed",
        coordinates: {
            lat: 32.0461,
            lng: 35.1498 // Har Bracha
        }
    },
    {
        name: "Rabbi Yonah ibn Janach",
        birthYear: 990,
        deathYear: 1055,
        description: "Greatest Hebrew grammarian of the Middle Ages",
        link: "https://www.jewishvirtuallibrary.org/ibn-janah-jonah",
        coordinates: {
            lat: 37.8882,
            lng: -4.7794 // Córdoba, Spain
        }
    },
    {
        name: "Rabbi Moshe ibn Chiquitilla",
        birthYear: 1020,
        deathYear: 1080,
        description: "Hebrew grammarian and biblical exegete",
        link: "https://www.jewishvirtuallibrary.org/ibn-chiquitilla-moses",
        coordinates: {
            lat: 37.8882,
            lng: -4.7794 // Córdoba, Spain
        }
    },
    {
        name: "Rabbi Yehuda ibn Balaam",
        birthYear: 1000,
        deathYear: 1070,
        description: "Biblical commentator and Hebrew grammarian",
        link: "https://www.jewishvirtuallibrary.org/ibn-balaam-judah-ben-samuel",
        coordinates: {
            lat: 37.8882,
            lng: -4.7794 // Toledo, Spain
        }
    },
    {
        name: "Rav Yosef Kara",
        birthYear: 1065,
        deathYear: 1135,
        description: "Biblical commentator, student of Rashi",
        link: "https://www.jewishvirtuallibrary.org/kara-joseph",
        coordinates: {
            lat: 48.2973,
            lng: 4.0744 // Troyes, France
        }
    },
    {
        name: "Rabbi Toviah ben Eliezer",
        birthYear: 1050,
        deathYear: 1108,
        description: "Author of Lekach Tov (Pesikta Zutarta)",
        link: "https://www.jewishvirtuallibrary.org/tuviah-ben-eliezer",
        coordinates: {
            lat: 40.6401,
            lng: 22.9444 // Thessaloniki
        }
    },
    {
        name: "Rabbi Yosef Kimhi",
        birthYear: 1105,
        deathYear: 1170,
        description: "Hebrew grammarian and biblical commentator, father of the Radak",
        link: "https://www.jewishvirtuallibrary.org/kimhi-joseph",
        coordinates: {
            lat: 43.6047,
            lng: 1.4442 // Narbonne, France
        }
    },
    {
        name: "Rabbi Eliezer of Beaugency",
        birthYear: 1090,
        deathYear: 1175,
        description: "Biblical commentator of the Northern French school",
        link: "https://www.jewishvirtuallibrary.org/eliezer-of-beaugency",
        coordinates: {
            lat: 47.7771,
            lng: 1.6313 // Beaugency, France
        }
    },
    {
        name: "Rabbi Moses ibn Ezra",
        birthYear: 1055,
        deathYear: 1138,
        description: "Major Hebrew poet and philosopher",
        link: "https://www.jewishvirtuallibrary.org/ibn-ezra-moses-ben-jacob",
        coordinates: {
            lat: 37.1773,
            lng: -3.5986 // Granada, Spain
        }
    },
    {
        name: "Rabbi Yosef Bekhor Shor",
        birthYear: 1140,
        deathYear: 1210,
        description: "Tosafist and biblical commentator",
        link: "https://www.jewishvirtuallibrary.org/bekhor-shor-joseph-ben-isaac",
        coordinates: {
            lat: 47.9027,
            lng: 1.9090 // Orleans, France
        }
    },
    {
        name: "Rabbi Judah ibn Tibbon",
        birthYear: 1120,
        deathYear: 1190,
        description: "Father of Hebrew translators, translated major philosophical works",
        link: "https://www.jewishvirtuallibrary.org/ibn-tibbon",
        coordinates: {
            lat: 43.2965,
            lng: 5.3698 // Marseilles, France
        }
    },
    {
        name: "Rabbi Samuel ibn Tibbon",
        birthYear: 1150,
        deathYear: 1230,
        description: "Translator of Maimonides' Guide for the Perplexed",
        link: "https://www.jewishvirtuallibrary.org/ibn-tibbon-samuel-ben-judah",
        coordinates: {
            lat: 43.2965,
            lng: 5.3698 // Marseilles, France
        }
    },
    {
        name: "Rabbi Moses ibn Tibbon",
        birthYear: 1195,
        deathYear: 1274,
        description: "Translator and physician, translated Arabic scientific works into Hebrew",
        link: "https://www.jewishvirtuallibrary.org/ibn-tibbon-moses-ben-samuel",
        coordinates: {
            lat: 43.2965,
            lng: 5.3698 // Marseilles, France
        }
    },
    {
        name: "Rabbi Abraham ben Rambam",
        birthYear: 1186,
        deathYear: 1237,
        description: "Son of Maimonides, leader of Egyptian Jewry",
        link: "https://www.jewishvirtuallibrary.org/abraham-ben-moses-ben-maimon",
        coordinates: {
            lat: 30.0444,
            lng: 31.2357 // Cairo
        }
    },
    {
        name: "Rabbi Tanhum Yerushalmi",
        birthYear: 1220,
        deathYear: 1291,
        description: "Biblical commentator and lexicographer",
        link: "https://www.jewishvirtuallibrary.org/tanhum-ben-joseph-yerushalmi",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Jacob Anatoli",
        birthYear: 1194,
        deathYear: 1256,
        description: "Translator and philosopher, son-in-law of Samuel ibn Tibbon",
        link: "https://www.jewishvirtuallibrary.org/anatoli-jacob-ben-abba-mari",
        coordinates: {
            lat: 43.2965,
            lng: 5.3698 // Marseilles
        }
    },
    {
        name: "Rabbi Shem Tov ibn Falaquera",
        birthYear: 1225,
        deathYear: 1295,
        description: "Philosopher and translator, defender of Maimonides",
        link: "https://www.jewishvirtuallibrary.org/falaquera-shem-tov-ben-joseph-ibn",
        coordinates: {
            lat: 41.6488,
            lng: -0.8891 // Spain
        }
    },
    {
        name: "Rabbi Joseph Caspi",
        birthYear: 1279,
        deathYear: 1340,
        description: "Philosopher and biblical commentator",
        link: "https://www.jewishvirtuallibrary.org/caspi-joseph-ben-abba-mari-ibn",
        coordinates: {
            lat: 43.9493,
            lng: 4.8055 // Provence
        }
    },
    {
        name: "Rabbi Moses Narboni",
        birthYear: 1300,
        deathYear: 1362,
        description: "Philosopher and commentator on medieval Jewish philosophy",
        link: "https://www.jewishvirtuallibrary.org/narboni-moses-ben-joshua",
        coordinates: {
            lat: 43.1837,
            lng: 3.0042 // Narbonne
        }
    },
    {
        name: "Rabbi Nissim of Marseille",
        birthYear: 1290,
        deathYear: 1370,
        description: "Rationalist philosopher and biblical commentator",
        link: "https://www.jewishvirtuallibrary.org/nissim-ben-moses-of-marseilles",
        coordinates: {
            lat: 43.2965,
            lng: 5.3698 // Marseilles
        }
    },
    {
        name: "Rabbi Isaac ben Sheshet Perfet (Rivash)",
        birthYear: 1326,
        deathYear: 1408,
        description: "Major halakhic authority and rabbinic leader",
        link: "https://www.jewishvirtuallibrary.org/isaac-ben-sheshet-perfet",
        coordinates: {
            lat: 41.3851,
            lng: 2.1734 // Barcelona
        }
    },
    {
        name: "Rabbi Chasdai Crescas",
        birthYear: 1340,
        deathYear: 1410,
        description: "Philosopher and critic of Aristotelian thought",
        link: "https://www.jewishvirtuallibrary.org/crescas-hasdai",
        coordinates: {
            lat: 41.3851,
            lng: 2.1734 // Barcelona
        }
    },
    {
        name: "Rabbi Joseph Albo",
        birthYear: 1380,
        deathYear: 1444,
        description: "Jewish philosopher, author of Sefer ha-Ikkarim",
        link: "https://www.jewishvirtuallibrary.org/albo-joseph",
        coordinates: {
            lat: 41.6488,
            lng: -0.8891 // Zaragoza
        }
    },
    {
        name: "Rabbi Obadiah Sforno",
        birthYear: 1475,
        deathYear: 1550,
        description: "Biblical commentator, philosopher, and physician",
        link: "https://www.jewishvirtuallibrary.org/sforno-obadiah-ben-jacob",
        coordinates: {
            lat: 44.4949,
            lng: 11.3426 // Bologna
        }
    },
    {
        name: "Rabbi Isaac Arama",
        birthYear: 1420,
        deathYear: 1494,
        description: "Philosopher and preacher, author of Akedat Yitzchak",
        link: "https://www.jewishvirtuallibrary.org/arama-isaac-ben-moses",
        coordinates: {
            lat: 41.6488,
            lng: -0.8891 // Zaragoza
        }
    },
    {
        name: "Rabbi Yaakov ben Asher (Tur)",
        birthYear: 1269,
        deathYear: 1343,
        description: "Author of the Arba'ah Turim, foundational code of Jewish law",
        link: "https://www.jewishvirtuallibrary.org/jacob-ben-asher",
        coordinates: {
            lat: 41.6528,
            lng: -4.7283 // Toledo, Spain
        }
    },
    {
        name: "Rabbi Asher ben Yehiel (Rosh)",
        birthYear: 1250,
        deathYear: 1327,
        description: "Major Talmudist and legal codifier",
        link: "https://www.jewishvirtuallibrary.org/asher-ben-jehiel",
        coordinates: {
            lat: 41.6528,
            lng: -4.7283 // Toledo, Spain
        }
    },
    {
        name: "Rabbi Shlomo Luria (Maharshal)",
        birthYear: 1510,
        deathYear: 1573,
        description: "Major Talmudist and author of Yam Shel Shlomo",
        link: "https://www.jewishvirtuallibrary.org/luria-solomon-ben-jehiel",
        coordinates: {
            lat: 51.2465,
            lng: 22.5684 // Lublin
        }
    },
    {
        name: "Rabbi Yoel Sirkis (Bach)",
        birthYear: 1561,
        deathYear: 1640,
        description: "Author of Bayit Chadash commentary on the Tur",
        link: "https://www.jewishvirtuallibrary.org/sirkis-joel-ben-samuel",
        coordinates: {
            lat: 50.0647,
            lng: 19.9450 // Kraków
        }
    },
    {
        name: "Rabbi David HaLevi Segal (Taz)",
        birthYear: 1586,
        deathYear: 1667,
        description: "Author of Turei Zahav on Shulchan Aruch",
        link: "https://www.jewishvirtuallibrary.org/david-ben-samuel-ha-levi",
        coordinates: {
            lat: 49.8397,
            lng: 24.0297 // Lviv
        }
    },
    {
        name: "Rabbi Shabbetai ben Meir HaKohen (Shach)",
        birthYear: 1621,
        deathYear: 1662,
        description: "Author of Siftei Kohen on Shulchan Aruch",
        link: "https://www.jewishvirtuallibrary.org/shabbetai-ben-meir-ha-kohen",
        coordinates: {
            lat: 54.6872,
            lng: 25.2797 // Vilnius
        }
    },
    {
        name: "Rabbi Akiva Eiger",
        birthYear: 1761,
        deathYear: 1837,
        description: "One of the greatest Talmudic scholars of the modern era",
        link: "https://www.jewishvirtuallibrary.org/eiger-akiva-ben-moses",
        coordinates: {
            lat: 52.4082,
            lng: 16.9335 // Poznań
        }
    },
    {
        name: "Rabbi Pinchas Horowitz (Hafla'ah)",
        birthYear: 1730,
        deathYear: 1805,
        description: "Author of Hafla'ah, major Talmudic and Kabbalistic scholar",
        link: "https://www.jewishvirtuallibrary.org/horowitz-phinehas-ben-zvi-hirsch",
        coordinates: {
            lat: 50.1109,
            lng: 8.6821 // Frankfurt
        }
    },
    {
        name: "Rabbi Aryeh Leib HaCohen Heller",
        birthYear: 1745,
        deathYear: 1813,
        description: "Author of Ketzot HaChoshen, revolutionized study of Choshen Mishpat",
        link: "https://www.jewishvirtuallibrary.org/heller-aryeh-leib",
        coordinates: {
            lat: 49.8397,
            lng: 24.0297 // Lviv region
        }
    },
    {
        name: "Rabbi Avraham Danzig",
        birthYear: 1748,
        deathYear: 1820,
        description: "Author of Chayei Adam and Chochmat Adam",
        link: "https://www.jewishvirtuallibrary.org/danzig-abraham-ben-jehiel-michael",
        coordinates: {
            lat: 54.6872,
            lng: 25.2797 // Vilnius
        }
    },
    {
        name: "Rabbi Ephraim Zalman Margulies",
        birthYear: 1760,
        deathYear: 1828,
        description: "Author of Beit Ephraim, major halakhic authority",
        link: "https://www.jewishvirtuallibrary.org/margulies-ephraim-zalman",
        coordinates: {
            lat: 49.8397,
            lng: 24.0297 // Brody
        }
    },
    {
        name: "Rabbi Yehoshua Falk",
        birthYear: 1555,
        deathYear: 1614,
        description: "Author of Sema and Drisha u'Prisha on Tur",
        link: "https://www.jewishvirtuallibrary.org/falk-joshua-ben-alexander-ha-kohen",
        coordinates: {
            lat: 50.0647,
            lng: 19.9450 // Kraków
        }
    },
    {
        name: "Rabbi Yaakov Yehoshua Falk",
        birthYear: 1680,
        deathYear: 1756,
        description: "Author of Pnei Yehoshua on the Talmud",
        link: "https://www.jewishvirtuallibrary.org/falk-jacob-joshua-ben-zevi-hirsch",
        coordinates: {
            lat: 50.0647,
            lng: 19.9450 // Kraków
        }
    },
    {
        name: "Rabbi Moshe of Trani (Mabit)",
        birthYear: 1505,
        deathYear: 1585,
        description: "Major halakhic authority in Safed",
        link: "https://www.jewishvirtuallibrary.org/trani-moses-ben-joseph-di",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Safed
        }
    },
    {
        name: "Rabbi Shimon ben Tzemach Duran (Tashbetz)",
        birthYear: 1361,
        deathYear: 1444,
        description: "Leading authority of North African Jewry",
        link: "https://www.jewishvirtuallibrary.org/duran-simeon-ben-zemah",
        coordinates: {
            lat: 36.7528,
            lng: 3.0420 // Algiers
        }
    },
    {
        name: "Rabbi Yisrael Isserlein",
        birthYear: 1390,
        deathYear: 1460,
        description: "Author of Terumat HaDeshen, major Ashkenazic authority",
        link: "https://www.jewishvirtuallibrary.org/isserlein-israel-ben-pethahiah",
        coordinates: {
            lat: 48.2082,
            lng: 16.3738 // Vienna region
        }
    },
    {
        name: "Rabbi Elchanan Wasserman",
        birthYear: 1874,
        deathYear: 1941,
        description: "Rosh Yeshiva of Baranovich, author of Kovetz Shiurim",
        link: "https://www.jewishvirtuallibrary.org/wasserman-elhanan",
        coordinates: {
            lat: 53.1325,
            lng: 26.0139 // Baranovich
        }
    },
    {
        name: "Rabbi Shimon Shkop",
        birthYear: 1860,
        deathYear: 1939,
        description: "Author of Sha'arei Yosher, developed analytical method of Talmud study",
        link: "https://www.jewishvirtuallibrary.org/shkop-simeon-judah",
        coordinates: {
            lat: 54.6872,
            lng: 25.2797 // Grodno region
        }
    },
    {
        name: "Rabbi Ben-Zion Abba Shaul",
        birthYear: 1924,
        deathYear: 1998,
        description: "Rosh Yeshiva of Porat Yosef, leading Sephardic posek",
        link: "https://www.jewishvirtuallibrary.org/abba-shaul-ben-zion",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Yehoshua Boaz",
        birthYear: 1510,
        deathYear: 1557,
        description: "Author of Shiltei Gibborim on the Rif",
        link: "https://www.jewishvirtuallibrary.org/joshua-boaz-ben-simon-baruch",
        coordinates: {
            lat: 45.4642,
            lng: 9.1900 // Italy
        }
    },
    {
        name: "Rabbi Moshe of Coucy",
        birthYear: 1200,
        deathYear: 1260,
        description: "Author of Sefer Mitzvot Gadol (SeMaG)",
        link: "https://www.jewishvirtuallibrary.org/moses-ben-jacob-of-coucy",
        coordinates: {
            lat: 49.2333,
            lng: 2.9167 // Coucy, France
        }
    },
    {
        name: "Rabbi Eliezer of Metz",
        birthYear: 1115,
        deathYear: 1198,
        description: "Author of Sefer Yereim, important Tosafist",
        link: "https://www.jewishvirtuallibrary.org/eliezer-ben-samuel-of-metz",
        coordinates: {
            lat: 49.1193,
            lng: 6.1757 // Metz, France
        }
    },
    {
        name: "Rabbi Avraham Gombiner (Magen Avraham)",
        birthYear: 1635,
        deathYear: 1682,
        description: "Author of major commentary on Shulchan Aruch Orach Chaim",
        link: "https://www.jewishvirtuallibrary.org/gombiner-abraham-abele",
        coordinates: {
            lat: 51.7592,
            lng: 19.4559 // Gombin, Poland
        }
    },
    {
        name: "Rabbi Meir ben Baruch (Maharam of Rothenburg)",
        birthYear: 1215,
        deathYear: 1293,
        description: "Leading Ashkenazic Rishon, major Tosafist",
        link: "https://www.jewishvirtuallibrary.org/meir-ben-baruch-of-rothenburg",
        coordinates: {
            lat: 49.8988,
            lng: 9.9472 // Rothenburg, Germany
        }
    },
    {
        name: "Rabbi Mordechai Eliyahu",
        birthYear: 1929,
        deathYear: 2010,
        description: "Former Sephardi Chief Rabbi of Israel",
        link: "https://www.jewishvirtuallibrary.org/eliyahu-mordecai",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Zalman Nechemia Goldberg",
        birthYear: 1931,
        deathYear: 2020,
        description: "Leading halakhic authority and dayan",
        link: "https://www.jewishvirtuallibrary.org/goldberg-zalman-nehemiah",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Yehuda Amital",
        birthYear: 1924,
        deathYear: 2010,
        description: "Rosh Yeshiva of Har Etzion, leader of religious Zionism",
        link: "https://www.jewishvirtuallibrary.org/amital-yehuda",
        coordinates: {
            lat: 31.6566,
            lng: 35.1208 // Gush Etzion
        }
    },
    {
        name: "Rabbi Chaim Kanievsky",
        birthYear: 1928,
        deathYear: 2022,
        description: "Leading authority in Haredi Judaism",
        link: "https://www.jewishvirtuallibrary.org/kanievsky-chaim",
        coordinates: {
            lat: 32.0853,
            lng: 34.7818 // Bnei Brak
        }
    },
    {
        name: "Rabbi Eliezer Waldenberg",
        birthYear: 1915,
        deathYear: 2006,
        description: "Author of Tzitz Eliezer, expert in medical halakha",
        link: "https://www.jewishvirtuallibrary.org/waldenberg-eliezer-yehuda",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Shmuel Wosner",
        birthYear: 1913,
        deathYear: 2015,
        description: "Author of Shevet HaLevi, leading posek",
        link: "https://www.jewishvirtuallibrary.org/wosner-shmuel",
        coordinates: {
            lat: 32.0853,
            lng: 34.7818 // Bnei Brak
        }
    },
    {
        name: "Rabbi Yitzhak Nissim",
        birthYear: 1896,
        deathYear: 1981,
        description: "Sephardi Chief Rabbi of Israel",
        link: "https://www.jewishvirtuallibrary.org/nissim-yitzhak",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Isser Yehuda Unterman",
        birthYear: 1886,
        deathYear: 1976,
        description: "Ashkenazi Chief Rabbi of Israel",
        link: "https://www.jewishvirtuallibrary.org/unterman-isser-yehuda",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Aharon Kotler",
        birthYear: 1891,
        deathYear: 1962,
        description: "Founder of Beth Medrash Govoha, leader of American Orthodox Judaism",
        link: "https://www.jewishvirtuallibrary.org/kotler-aaron",
        coordinates: {
            lat: 40.0583,
            lng: -74.2776 // Lakewood
        }
    },
    {
        name: "Rabbi Yosef Dov Soloveitchik (Beis HaLevi)",
        birthYear: 1820,
        deathYear: 1892,
        description: "Founder of the Brisker dynasty of Torah scholars",
        link: "https://www.jewishvirtuallibrary.org/soloveitchik-joseph-ber",
        coordinates: {
            lat: 53.1325,
            lng: 23.1688 // Brisk
        }
    },
    {
        name: "Rabbi Chananel ben Chushiel",
        birthYear: 990,
        deathYear: 1053,
        description: "Early North African Talmudist, bridge between Babylonian and European scholarship",
        link: "https://www.jewishvirtuallibrary.org/chananel-ben-ushiel",
        coordinates: {
            lat: 36.8065,
            lng: 10.1815 // Kairouan, Tunisia
        }
    },
    {
        name: "Rabbi Nissim Gaon of Kairouan",
        birthYear: 990,
        deathYear: 1062,
        description: "Author of Sefer HaMafteach, major figure in transmission of Talmudic tradition",
        link: "https://www.jewishvirtuallibrary.org/nissim-ben-jacob-ben-nissim-ibn-shahin",
        coordinates: {
            lat: 36.8065,
            lng: 10.1815 // Kairouan, Tunisia
        }
    },
    {
        name: "Rabbi Yitzchak Elchanan Spektor",
        birthYear: 1817,
        deathYear: 1896,
        description: "Leading Lithuanian posek, advocate for Jewish causes",
        link: "https://www.jewishvirtuallibrary.org/spektor-isaac-elhanan",
        coordinates: {
            lat: 54.9027,
            lng: 23.9096 // Kovno
        }
    },
    {
        name: "Rabbi Chaim Ozer Grodzinski",
        birthYear: 1863,
        deathYear: 1940,
        description: "Author of Achiezer, leader of European Jewry",
        link: "https://www.jewishvirtuallibrary.org/grodzinski-hayyim-ozer",
        coordinates: {
            lat: 54.6872,
            lng: 25.2797 // Vilna
        }
    },
    {
        name: "Rabbi Tzvi Pesach Frank",
        birthYear: 1873,
        deathYear: 1960,
        description: "Chief Rabbi of Jerusalem, author of Har Tzvi",
        link: "https://www.jewishvirtuallibrary.org/frank-zevi-pesah",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Mordechai Willig",
        birthYear: 1947,
        deathYear: null,
        description: "Rosh Yeshiva at RIETS, prominent contemporary posek",
        link: "https://www.yu.edu/faculty/pages/willig-mordechai",
        coordinates: {
            lat: 40.8499,
            lng: -73.9278 // New York
        }
    },
    {
        name: "Rabbi Simcha Bunim Cohen",
        birthYear: 1944,
        deathYear: null,
        description: "Contemporary halakhic authority, author of numerous practical halacha works",
        link: "https://www.ou.org/authors/rabbi-simcha-bunim-cohen/",
        coordinates: {
            lat: 40.0583,
            lng: -74.2776 // Lakewood
        }
    },
    {
        name: "Rabbi Aryeh Leib Malin",
        birthYear: 1906,
        deathYear: 1962,
        description: "Founder of Beit HaTalmud, developed unique analytical approach to Talmud study",
        link: "https://www.jewishvirtuallibrary.org/malin-aryeh-leib",
        coordinates: {
            lat: 40.7128,
            lng: -74.0060 // New York
        }
    },
    {
        name: "Rabbi Yehuda Leib Graubart",
        birthYear: 1862,
        deathYear: 1937,
        description: "Chief Rabbi of Toronto, author of Chavalim BaNeimim",
        link: "https://www.jewishvirtuallibrary.org/graubart-judah-leib",
        coordinates: {
            lat: 43.6532,
            lng: -79.3832 // Toronto
        }
    },
    {
        name: "Rabbi Meir Arik",
        birthYear: 1855,
        deathYear: 1926,
        description: "Renowned Galician Torah scholar, author of Imrei Yosher",
        link: "https://www.jewishvirtuallibrary.org/arik-meir",
        coordinates: {
            lat: 49.8397,
            lng: 24.0297 // Tarnów/Buczacz region
        }
    },
    {
        name: "Rabbi Aryeh Tzvi Frommer",
        birthYear: 1884,
        deathYear: 1943,
        description: "Author of Eretz Tzvi, Rosh Yeshiva in Koziegłowy",
        link: "https://www.jewishvirtuallibrary.org/frommer-aryeh-zevi",
        coordinates: {
            lat: 50.5977,
            lng: 19.1655 // Koziegłowy, Poland
        }
    },
    {
        name: "Rabbi Yisroel Zev Gustman",
        birthYear: 1908,
        deathYear: 1991,
        description: "Student of Rabbi Chaim Ozer Grodzinski, founded Netzach Yisrael yeshiva",
        link: "https://www.jewishvirtuallibrary.org/gustman-yisrael-zeev",
        coordinates: {
            lat: 31.7683,
            lng: 35.2137 // Jerusalem
        }
    },
    {
        name: "Rabbi Pinchas Teitz",
        birthYear: 1908,
        deathYear: 1995,
        description: "Builder of Torah Judaism in America, pioneer in Jewish education",
        link: "https://www.jewishvirtuallibrary.org/teitz-pinchas-mordecai",
        coordinates: {
            lat: 40.6639,
            lng: -74.2107 // Elizabeth, NJ
        }
    },
    {
        name: "Rabbi Yehezkel Abramsky",
        birthYear: 1886,
        deathYear: 1976,
        description: "Author of Chazon Yechezkel on Tosefta, head of London Beth Din",
        link: "https://www.jewishvirtuallibrary.org/abramsky-yehezkel",
        coordinates: {
            lat: 51.5074,
            lng: -0.1278 // London
        }
    },
    {
        name: "Rabbi Isaac Liebes",
        birthYear: 1896,
        deathYear: 1981,
        description: "Author of Beit Avi, important American rabbinic figure",
        link: "https://www.jewishvirtuallibrary.org/liebes-isaac",
        coordinates: {
            lat: 40.7128,
            lng: -74.0060 // New York
        }
    }
];

// Update categories to include Geonim
const scholarCategories = {
    "Geonim": {
        startYear: 589,
        endYear: 1038,
        color: "#9C27B0"
    },
    "Rishonim": {
        startYear: 1038,
        endYear: 1500,
        color: "#4285f4"
    },
    "Acharonim": {
        startYear: 1500,
        endYear: 1900,
        color: "#ea4335"
    },
    "Modern": {
        startYear: 1900,
        endYear: 2024,
        color: "#34a853"
    }
};

// Add more specific regions
const scholarRegions = {
    "Sepharad": {
        color: "#fbbc05",
        coordinates: {
            center: [40.4168, -3.7038],
            radius: 1000
        }
    },
    "Ashkenaz": {
        color: "#4285f4",
        coordinates: {
            center: [51.1657, 10.4515],
            radius: 1000
        }
    },
    "Middle East": {
        color: "#ea4335",
        coordinates: {
            center: [31.7683, 35.2137],
            radius: 1000
        }
    },
    "North Africa": {
        color: "#ff6d01",
        coordinates: {
            center: [31.7917, -7.0926],
            radius: 1000
        }
    }
}; 