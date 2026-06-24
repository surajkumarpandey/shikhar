// Content store + syllabus spine for Shikhar (UKPCS). Edit/extend these to add content.

export const UI = {
  appName: { hi: "शिखर", en: "Shikhar" },
  tagline: { hi: "UKPCS · आधार से शिखर तक", en: "UKPCS · base to summit" },
  pickLang: { hi: "अपनी भाषा चुनें", en: "Choose your language" },
  pickSub: { hi: "आप इसे कभी भी बदल सकते हैं", en: "You can switch anytime" },
  home: { hi: "होम", en: "Home" }, syllabus: { hi: "सिलेबस", en: "Syllabus" },
  practice: { hi: "अभ्यास", en: "Practice" }, progress: { hi: "प्रगति", en: "Progress" },
  daysLeft: { hi: "प्रीलिम्स में दिन शेष", en: "days to Prelims" },
  todayPlan: { hi: "आज की योजना", en: "Today's plan" },
  todayCA: { hi: "आज के करेंट अफेयर्स", en: "Today's current affairs" },
  continue: { hi: "पढ़ना जारी रखें", en: "Continue studying" },
  highYield: { hi: "अधिक पूछा गया", en: "High-yield" },
  tested: { hi: "बार पूछा गया", en: "× tested" },
  connections: { hi: "संबंध", en: "Connections" },
  pyq: { hi: "विगत वर्ष प्रश्न", en: "Past-year question" },
  practiceTopic: { hi: "इस विषय का अभ्यास करें", en: "Practice this topic" },
  markRevised: { hi: "रिवाइज़ हो गया", en: "Mark revised" },
  revised: { hi: "रिवाइज़ हो गया ✓", en: "Revised ✓" },
  examAngle: { hi: "परीक्षा एंगल", en: "Exam angle" },
  submit: { hi: "जाँचें", en: "Check" }, next: { hi: "अगला", en: "Next" },
  correct: { hi: "सही", en: "Correct" }, wrong: { hi: "गलत", en: "Wrong" },
  startQuiz: { hi: "त्वरित क्विज़ शुरू करें", en: "Start quick quiz" },
  fullMock: { hi: "फुल मॉक टेस्ट", en: "Full mock test" },
  mockSoon: { hi: "अगले चक्र में रैंक के साथ", en: "Ranked, next cycle" },
  score: { hi: "आपका स्कोर", en: "Your score" },
  withNeg: { hi: "(ऋणात्मक अंकन सहित)", en: "(with negative marking)" },
  retry: { hi: "फिर से", en: "Try again" },
  coverage: { hi: "सिलेबस कवरेज", en: "Syllabus coverage" },
  standard: { hi: "मानक योजना", en: "Standard plan" },
  weak: { hi: "आपके कमज़ोर क्षेत्र", en: "Your weak areas" },
  streak: { hi: "दिन की लय", en: "day streak" },
  byNode: { hi: "विषयवार", en: "By subject" },
  done: { hi: "पूर्ण", en: "done" },
  back: { hi: "वापस", en: "Back" },
  whyHere: { hi: "यह आपकी योजना में क्यों है", en: "Why this is in your plan" },
  journey: { hi: "यात्रा", en: "Journey" },
  planMode: { hi: "आज की योजना", en: "Today's plan" },
  summitGoal: { hi: "शिखर — आपका लक्ष्य", en: "Summit — your goal" },
  clearExam: { hi: "UKPCS पास करें", en: "Clear UKPCS" },
  baseCamp: { hi: "आधार शिविर · यहाँ से शुरू", en: "Base camp · start here" },
  startHere: { hi: "यहाँ से शुरू करें", en: "Start here" },
  lockedTxt: { hi: "बंद", en: "Locked" },
  stagesDone: { hi: "चरण पूर्ण", en: "stages done" },
  journeyHint: { hi: "क्रम से चरण पूरे करें — हर चरण अगला खोलता है।", en: "Complete stages in order — each unlocks the next." },
  aiTutor: { hi: "एआई ट्यूटर", en: "AI tutor" },
  askDoubt: { hi: "इस विषय पर सवाल पूछें", en: "Ask about this topic" },
  askTutorCard: { hi: "एआई ट्यूटर से पूछें", en: "Ask the AI tutor" },
  askPlaceholder: { hi: "हिंदी या अंग्रेज़ी में सवाल लिखें…", en: "Ask in Hindi or English…" },
  send: { hi: "भेजें", en: "Send" },
  thinking: { hi: "सोच रहा है…", en: "Thinking…" },
  tutorHint: { hi: "उत्तराखंड PCS के लिए — मुख्य तथ्य सत्यापित रखें।", en: "Tuned for UKPCS — verify key facts." },
};
export const t = (k, lang) => (UI[k] ? UI[k][lang] : k);

// ---- Sample UKPCS data (bilingual, syllabus-tagged) ----
export const SUBJECTS = [
  {
    id: "ukhist", icon: "🏔",
    name: { hi: "उत्तराखंड का इतिहास व संस्कृति", en: "Uttarakhand History & Culture" },
    topics: [
      {
        id: "harappa", highYield: 3,
        name: { hi: "हड़प्पा सभ्यता", en: "Harappan Civilisation" },
        source: { hi: "सत्यापित · NCERT व मानक संदर्भ", en: "Verified · NCERT & standard reference" },
        note: {
          hi: "सिंधु घाटी/हड़प्पा सभ्यता (लगभग 2600–1900 ई.पू.) अपनी नगर-योजना, ग्रिड सड़कों व उन्नत जल-निकासी के लिए जानी जाती है। मोहनजोदड़ो का विशाल स्नानागार व अब तक न पढ़ी गई लिपि प्रमुख विशेषताएँ हैं।",
          en: "The Indus/Harappan civilisation (c. 2600–1900 BCE) is known for town planning, grid streets and advanced drainage. The Great Bath at Mohenjodaro and its still-undeciphered script are key features.",
        },
        pyq: { hi: "विशाल स्नानागार किस स्थल पर मिला? (प्रीलिम्स 2017)", en: "The Great Bath is found at which site? (Prelims 2017)" },
        graph: ["Mohenjodaro", "Harappa", "Great Bath", "Indus script", "Drainage system", "Dholavira"],
        mcqs: [
          {
            q: { hi: "विशाल स्नानागार किस स्थल से संबंधित है?", en: "The Great Bath is associated with which site?" },
            opts: { hi: ["मोहनजोदड़ो", "हड़प्पा", "लोथल", "धोलावीरा"], en: ["Mohenjodaro", "Harappa", "Lothal", "Dholavira"] }, a: 0,
            ex: { hi: "विशाल स्नानागार मोहनजोदड़ो की प्रमुख संरचना है।", en: "The Great Bath is the signature structure at Mohenjodaro." },
          },
        ],
      },
      {
        id: "vedic", highYield: 3,
        name: { hi: "वैदिक काल", en: "Vedic Age" },
        source: { hi: "सत्यापित · NCERT व मानक संदर्भ", en: "Verified · NCERT & standard reference" },
        note: {
          hi: "वैदिक काल (लगभग 1500–600 ई.पू.) ऋग्वैदिक व उत्तर-वैदिक चरणों में बँटा है। चार वेद — ऋग्, साम, यजुर्, अथर्व — तथा सभा व समिति जैसी संस्थाएँ इस काल की देन हैं।",
          en: "The Vedic age (c. 1500–600 BCE) splits into early (Rigvedic) and later phases. The four Vedas — Rig, Sama, Yajur, Atharva — and assemblies like the Sabha and Samiti belong to this period.",
        },
        pyq: { hi: "सबसे प्राचीन वेद कौन-सा है? (प्रीलिम्स 2018)", en: "Which is the oldest Veda? (Prelims 2018)" },
        graph: ["Rigveda", "Aryans", "Sabha & Samiti", "Varna system", "Later Vedic", "Sapta Sindhu"],
        mcqs: [
          {
            q: { hi: "सबसे प्राचीन वेद कौन-सा है?", en: "Which is the oldest Veda?" },
            opts: { hi: ["ऋग्वेद", "सामवेद", "यजुर्वेद", "अथर्ववेद"], en: ["Rigveda", "Samaveda", "Yajurveda", "Atharvaveda"] }, a: 0,
            ex: { hi: "ऋग्वेद चारों वेदों में सबसे प्राचीन है।", en: "The Rigveda is the oldest of the four Vedas." },
          },
        ],
      },
      {
        id: "maurya", highYield: 4,
        name: { hi: "मौर्य साम्राज्य", en: "Mauryan Empire" },
        source: { hi: "सत्यापित · NCERT व मानक संदर्भ", en: "Verified · NCERT & standard reference" },
        note: {
          hi: "मौर्य साम्राज्य (322–185 ई.पू.) की स्थापना चाणक्य के सहयोग से चंद्रगुप्त मौर्य ने की। कलिंग युद्ध के बाद अशोक ने बौद्ध धर्म व धम्म अपनाया; राजधानी पाटलिपुत्र थी।",
          en: "The Mauryan empire (322–185 BCE) was founded by Chandragupta Maurya with Chanakya's help. After the Kalinga war, Ashoka embraced Buddhism and Dhamma; the capital was Pataliputra.",
        },
        pyq: { hi: "अशोक का हृदय-परिवर्तन किस युद्ध के बाद हुआ? (प्रीलिम्स 2016)", en: "Ashoka's change of heart followed which war? (Prelims 2016)" },
        graph: ["Chandragupta Maurya", "Chanakya", "Ashoka", "Kalinga War", "Pataliputra", "Edicts"],
        mcqs: [
          {
            q: { hi: "अशोक ने किस युद्ध के बाद बौद्ध धर्म अपनाया?", en: "After which war did Ashoka embrace Buddhism?" },
            opts: { hi: ["कलिंग", "हाइडेस्पीज़", "पानीपत", "प्लासी"], en: ["Kalinga", "Hydaspes", "Panipat", "Plassey"] }, a: 0,
            ex: { hi: "कलिंग युद्ध की हिंसा ने अशोक को धम्म की ओर मोड़ा।", en: "The violence of the Kalinga war turned Ashoka toward Dhamma." },
          },
        ],
      },
      {
        id: "gupta", highYield: 3,
        name: { hi: "गुप्त साम्राज्य", en: "Gupta Empire" },
        source: { hi: "सत्यापित · NCERT व मानक संदर्भ", en: "Verified · NCERT & standard reference" },
        note: {
          hi: "गुप्त काल (लगभग 319–550 ई.) को 'स्वर्ण युग' कहा जाता है। समुद्रगुप्त व चंद्रगुप्त द्वितीय के शासन में गणित (शून्य, दशमलव), खगोल (आर्यभट) व साहित्य (कालिदास) फले-फूले।",
          en: "The Gupta age (c. 319–550 CE) is called the 'Golden Age'. Under Samudragupta and Chandragupta II, mathematics (zero, decimals), astronomy (Aryabhata) and literature (Kalidasa) flourished.",
        },
        pyq: { hi: "आर्यभट किस काल से संबंधित हैं? (प्रीलिम्स 2019)", en: "Aryabhata belonged to which age? (Prelims 2019)" },
        graph: ["Samudragupta", "Chandragupta II", "Aryabhata", "Kalidasa", "Nalanda", "Golden Age"],
        mcqs: [
          {
            q: { hi: "दशमलव प्रणाली व आर्यभट किस साम्राज्य से जुड़े हैं?", en: "The decimal system and Aryabhata are linked to which empire?" },
            opts: { hi: ["गुप्त", "मौर्य", "मुग़ल", "चोल"], en: ["Gupta", "Mauryan", "Mughal", "Chola"] }, a: 0,
            ex: { hi: "ये उपलब्धियाँ गुप्तकालीन स्वर्ण युग की हैं।", en: "These achievements belong to the Gupta Golden Age." },
          },
        ],
      },
      {
        id: "sultanate", highYield: 3,
        name: { hi: "दिल्ली सल्तनत", en: "Delhi Sultanate" },
        source: { hi: "सत्यापित · NCERT व मानक संदर्भ", en: "Verified · NCERT & standard reference" },
        note: {
          hi: "दिल्ली सल्तनत (1206–1526) में पाँच वंश रहे — गुलाम, खिलजी, तुगलक, सैयद व लोदी। कुतुबुद्दीन ऐबक ने इसकी नींव रखी; 1526 में बाबर ने पानीपत में इसे समाप्त किया।",
          en: "The Delhi Sultanate (1206–1526) saw five dynasties — Slave, Khalji, Tughlaq, Sayyid and Lodi. Qutbuddin Aibak founded it; Babur ended it at Panipat in 1526.",
        },
        pyq: { hi: "गुलाम वंश की स्थापना किसने की? (प्रीलिम्स 2015)", en: "Who founded the Slave dynasty? (Prelims 2015)" },
        graph: ["Qutbuddin Aibak", "Iltutmish", "Alauddin Khalji", "Tughlaq", "Qutb Minar", "Panipat 1526"],
        mcqs: [
          {
            q: { hi: "दिल्ली सल्तनत के प्रथम (गुलाम) वंश की स्थापना किसने की?", en: "Who founded the Sultanate's first (Slave) dynasty?" },
            opts: { hi: ["कुतुबुद्दीन ऐबक", "बाबर", "अकबर", "बलबन"], en: ["Qutbuddin Aibak", "Babur", "Akbar", "Balban"] }, a: 0,
            ex: { hi: "गुलाम वंश की नींव कुतुबुद्दीन ऐबक ने रखी।", en: "The Slave dynasty was founded by Qutbuddin Aibak." },
          },
        ],
      },
      {
        id: "mughal", highYield: 4,
        name: { hi: "मुग़ल साम्राज्य", en: "Mughal Empire" },
        source: { hi: "सत्यापित · NCERT व मानक संदर्भ", en: "Verified · NCERT & standard reference" },
        note: {
          hi: "मुग़ल साम्राज्य की नींव बाबर ने 1526 में पानीपत जीतकर रखी। अकबर ने मनसबदारी व दीन-ए-इलाही चलाए; शाहजहाँ ने ताजमहल बनवाया; औरंगज़ेब के बाद पतन आरंभ हुआ।",
          en: "Babur founded the Mughal empire by winning Panipat in 1526. Akbar introduced mansabdari and Din-i-Ilahi; Shah Jahan built the Taj Mahal; decline began after Aurangzeb.",
        },
        pyq: { hi: "पानीपत का प्रथम युद्ध (1526) किसने जीता? (प्रीलिम्स 2017)", en: "Who won the first Battle of Panipat (1526)? (Prelims 2017)" },
        graph: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb", "Panipat 1526", "Mansabdari"],
        mcqs: [
          {
            q: { hi: "भारत में मुग़ल साम्राज्य की स्थापना किसने की?", en: "Who founded the Mughal empire in India?" },
            opts: { hi: ["बाबर", "अकबर", "हुमायूँ", "शेरशाह"], en: ["Babur", "Akbar", "Humayun", "Sher Shah"] }, a: 0,
            ex: { hi: "बाबर ने 1526 में पानीपत जीतकर मुग़ल शासन आरंभ किया।", en: "Babur began Mughal rule by winning Panipat in 1526." },
          },
        ],
      },
      {
        id: "katyuri", highYield: 3,
        name: { hi: "कत्यूरी राजवंश (उत्तराखंड)", en: "Katyuri Dynasty (Uttarakhand)" },
        source: { hi: "सत्यापित · राज्य संदर्भ + UKPSC उत्तरकुंजी", en: "Verified · state reference + UKPSC answer keys" },
        note: {
          hi: "कत्यूरी उत्तराखंड का आरंभिक-मध्यकालीन राजवंश था (लगभग 7वीं–11वीं सदी)। इसकी राजधानी कार्तिकेयपुर (बैजनाथ, कुमाऊँ) थी; इसने गढ़वाल व कुमाऊँ को जोड़ा और जागेश्वर जैसे मंदिर बनवाए।",
          en: "The Katyuris were an early-medieval dynasty of Uttarakhand (c. 7th–11th century). Their capital was Kartikeyapura (Baijnath, Kumaon); they unified Garhwal and Kumaon and built temples like Jageshwar.",
        },
        pyq: { hi: "कत्यूरी राजवंश की राजधानी कौन-सी थी? (प्रीलिम्स 2018)", en: "What was the Katyuri dynasty's capital? (Prelims 2018)" },
        graph: ["Kartikeyapura", "Baijnath", "Jageshwar", "Kumaon", "Garhwal", "Temple building"],
        mcqs: [
          {
            q: { hi: "कत्यूरी राजवंश की राजधानी थी —", en: "The Katyuri dynasty's capital was —" },
            opts: { hi: ["कार्तिकेयपुर", "अल्मोड़ा", "श्रीनगर", "चम्पावत"], en: ["Kartikeyapura", "Almora", "Srinagar", "Champawat"] }, a: 0,
            ex: { hi: "कत्यूरियों की राजधानी कार्तिकेयपुर (बैजनाथ) थी।", en: "The Katyuri capital was Kartikeyapura (Baijnath)." },
          },
        ],
      },
      {
        id: "chand", highYield: 3,
        name: { hi: "चंद राजवंश — कुमाऊँ", en: "Chand Dynasty — Kumaon" },
        source: { hi: "सत्यापित · राज्य संदर्भ + UKPSC उत्तरकुंजी", en: "Verified · state reference + UKPSC answer keys" },
        note: {
          hi: "चंद राजवंश ने कुमाऊँ पर लगभग 10वीं–18वीं सदी तक शासन किया। आरंभिक राजधानी चम्पावत व बाद में अल्मोड़ा रही; 1790 के गोरखा आक्रमण से इसका अंत हुआ।",
          en: "The Chand dynasty ruled Kumaon from roughly the 10th to the 18th century. Its early capital was Champawat and later Almora; it ended with the Gorkha invasion of 1790.",
        },
        pyq: { hi: "चंद राजवंश की परवर्ती राजधानी कौन-सी थी? (प्रीलिम्स 2019)", en: "What was the Chand dynasty's later capital? (Prelims 2019)" },
        graph: ["Champawat", "Almora", "Som Chand", "Kumaon", "Gorkha invasion 1790"],
        mcqs: [
          {
            q: { hi: "चंद राजवंश ने किस क्षेत्र पर शासन किया?", en: "Which region did the Chand dynasty rule?" },
            opts: { hi: ["कुमाऊँ", "गढ़वाल", "रोहिलखंड", "दोआब"], en: ["Kumaon", "Garhwal", "Rohilkhand", "Doab"] }, a: 0,
            ex: { hi: "चंद राजवंश कुमाऊँ का शासक वंश था।", en: "The Chand dynasty ruled the Kumaon region." },
          },
        ],
      },
      {
        id: "parmar", highYield: 3,
        name: { hi: "परमार/पंवार — गढ़वाल", en: "Parmar/Panwar — Garhwal" },
        source: { hi: "सत्यापित · राज्य संदर्भ + UKPSC उत्तरकुंजी", en: "Verified · state reference + UKPSC answer keys" },
        note: {
          hi: "परमार (पंवार) राजवंश ने गढ़वाल पर शासन किया; अजय पाल ने गढ़वाल के गढ़ों को एकीकृत कर श्रीनगर को राजधानी बनाया। गोरखा विजय के बाद 1815 में सुदर्शन शाह ने टिहरी की स्थापना की।",
          en: "The Parmar (Panwar) dynasty ruled Garhwal; Ajay Pal unified Garhwal's garhs and made Srinagar the capital. After the Gorkha conquest, Sudarshan Shah founded Tehri in 1815.",
        },
        pyq: { hi: "गढ़वाल के गढ़ों को किसने एकीकृत किया? (प्रीलिम्स 2016)", en: "Who unified the garhs of Garhwal? (Prelims 2016)" },
        graph: ["Ajay Pal", "Srinagar (Garhwal)", "Panwar", "Tehri 1815", "Gorkha"],
        mcqs: [
          {
            q: { hi: "गढ़वाल के गढ़ों का एकीकरण किसने किया?", en: "Who unified the garhs of Garhwal?" },
            opts: { hi: ["अजय पाल", "सोम चंद", "बलभद्र", "प्रद्युम्न"], en: ["Ajay Pal", "Som Chand", "Balbhadra", "Pradyumna"] }, a: 0,
            ex: { hi: "पंवार शासक अजय पाल ने गढ़ों को एक राज्य में जोड़ा।", en: "Panwar ruler Ajay Pal merged the garhs into one kingdom." },
          },
        ],
      },
      {
        id: "gorkha", highYield: 3,
        name: { hi: "गोरखा व ब्रिटिश शासन", en: "Gorkha & British Rule" },
        source: { hi: "सत्यापित · राज्य संदर्भ + UKPSC उत्तरकुंजी", en: "Verified · state reference + UKPSC answer keys" },
        note: {
          hi: "गोरखाओं ने कुमाऊँ (1790) व गढ़वाल (1804) पर अधिकार किया। आंग्ल-नेपाल युद्ध (1814–16) के बाद सुगौली संधि (1816) से कुमाऊँ व पूर्वी गढ़वाल अंग्रेज़ों को मिले; टिहरी पंवारों के अधीन रियासत बनी रही।",
          en: "The Gorkhas seized Kumaon (1790) and Garhwal (1804). After the Anglo-Nepalese War (1814–16), the Treaty of Sugauli (1816) handed Kumaon and east Garhwal to the British; Tehri remained a princely state under the Panwars.",
        },
        pyq: { hi: "1816 की किस संधि से कुमाऊँ अंग्रेज़ों को मिला? (प्रीलिम्स 2018)", en: "Which 1816 treaty handed Kumaon to the British? (Prelims 2018)" },
        graph: ["Gorkha conquest", "Anglo-Nepalese War", "Treaty of Sugauli 1816", "Kumaon Division", "Tehri state"],
        mcqs: [
          {
            q: { hi: "किस 1816 संधि ने कुमाऊँ अंग्रेज़ों को सौंपा?", en: "Which 1816 treaty ceded Kumaon to the British?" },
            opts: { hi: ["सुगौली", "लाहौर", "इलाहाबाद", "अमृतसर"], en: ["Sugauli", "Lahore", "Allahabad", "Amritsar"] }, a: 0,
            ex: { hi: "सुगौली संधि (1816) ने गोरखा शासन समाप्त किया।", en: "The Treaty of Sugauli (1816) ended Gorkha rule here." },
          },
        ],
      },
      {
        id: "chipko", highYield: 4,
        name: { hi: "चिपको आंदोलन", en: "Chipko Movement" },
        source: { hi: "सत्यापित · मानक संदर्भ + UKPSC उत्तरकुंजी", en: "Verified · standard reference + UKPSC answer keys" },
        note: {
          hi: "चिपको एक अहिंसक वन-संरक्षण आंदोलन था। इसकी शुरुआत 1973 में चमोली के मंडल गाँव से चंडी प्रसाद भट्ट के नेतृत्व में हुई; 1974 की प्रसिद्ध रैणी घटना का नेतृत्व गौरा देवी ने किया। सुंदरलाल बहुगुणा ने इसे राष्ट्रीय पहचान दी।",
          en: "Chipko was a non-violent forest-conservation movement. It began in 1973 at Mandal village (Chamoli) under Chandi Prasad Bhatt; the iconic 1974 action at Reni was led by Gaura Devi. Sunderlal Bahuguna carried it nationally.",
        },
        pyq: { hi: "रैणी गाँव की घटना किस वर्ष हुई? (प्रीलिम्स 2019)", en: "The Reni village incident occurred in which year? (Prelims 2019)" },
        graph: ["Gaura Devi", "Reni / Chamoli", "1974", "Sunderlal Bahuguna", "Forest Conservation", "Tehri agitation"],
        mcqs: [
          {
            q: { hi: "1974 का प्रसिद्ध चिपको प्रदर्शन किस गाँव में हुआ?", en: "The famous 1974 Chipko action took place at which village?" },
            opts: { hi: ["रैणी", "टिहरी", "नैनीताल", "अल्मोड़ा"], en: ["Reni", "Tehri", "Nainital", "Almora"] }, a: 0,
            ex: { hi: "चमोली ज़िले के रैणी गाँव में गौरा देवी के नेतृत्व में।", en: "At Reni village in Chamoli, led by Gaura Devi." },
          },
        ],
      },
      {
        id: "statehood", highYield: 3,
        name: { hi: "उत्तराखंड राज्य आंदोलन", en: "Uttarakhand Statehood Movement" },
        note: {
          hi: "पृथक पर्वतीय राज्य की माँग ने 1990 के दशक में ज़ोर पकड़ा। 1994 का रामपुर तिराहा (मुज़फ़्फ़रनगर) कांड एक निर्णायक मोड़ था। 9 नवम्बर 2000 को उत्तरांचल बना, जिसे 2007 में उत्तराखंड नाम दिया गया।",
          en: "The demand for a separate hill state grew in the 1990s. The 1994 Rampur Tiraha (Muzaffarnagar) incident was a turning point. Uttaranchal was formed on 9 Nov 2000, renamed Uttarakhand in 2007.",
        },
        pyq: { hi: "उत्तराखंड राज्य का गठन कब हुआ? (प्रीलिम्स 2017)", en: "When was Uttarakhand state formed? (Prelims 2017)" },
        graph: ["9 Nov 2000", "Rampur Tiraha 1994", "Uttaranchal", "Hill state demand", "2007 rename"],
        mcqs: [
          {
            q: { hi: "उत्तराखंड (उत्तरांचल) राज्य किस तिथि को अस्तित्व में आया?", en: "On which date did Uttarakhand (Uttaranchal) come into being?" },
            opts: { hi: ["9 नवम्बर 2000", "1 जनवरी 2001", "15 अगस्त 2000", "26 जनवरी 2001"], en: ["9 Nov 2000", "1 Jan 2001", "15 Aug 2000", "26 Jan 2001"] }, a: 0,
            ex: { hi: "उत्तरांचल 9 नवम्बर 2000 को बना; 2007 में उत्तराखंड नाम मिला।", en: "Uttaranchal was formed on 9 Nov 2000; renamed Uttarakhand in 2007." },
          },
        ],
      },
    ],
  },
  {
    id: "ukgeo", icon: "🗺",
    name: { hi: "उत्तराखंड का भूगोल", en: "Uttarakhand Geography" },
    topics: [
      {
        id: "rivers", highYield: 5,
        name: { hi: "उत्तराखंड की नदियाँ", en: "Rivers of Uttarakhand" },
        note: {
          hi: "अलकनंदा व भागीरथी देवप्रयाग में मिलकर गंगा बनाती हैं। यमुना का उद्गम यमुनोत्री है। नदियाँ जल-विद्युत व आपदा दोनों दृष्टि से परीक्षा में महत्वपूर्ण हैं।",
          en: "The Alaknanda and Bhagirathi meet at Devprayag to form the Ganga. The Yamuna rises at Yamunotri. Rivers matter for the exam both as hydropower and as disaster themes.",
        },
        pyq: { hi: "अलकनंदा व भागीरथी का संगम कहाँ है? (प्रीलिम्स 2016)", en: "Where do the Alaknanda and Bhagirathi meet? (Prelims 2016)" },
        graph: ["Devprayag", "Alaknanda", "Bhagirathi", "Ganga", "Yamunotri", "Hydropower"],
        mcqs: [
          {
            q: { hi: "गंगा बनाने के लिए भागीरथी किस नदी से मिलती है?", en: "The Bhagirathi joins which river to form the Ganga?" },
            opts: { hi: ["अलकनंदा", "यमुना", "काली", "रामगंगा"], en: ["Alaknanda", "Yamuna", "Kali", "Ramganga"] }, a: 0,
            ex: { hi: "देवप्रयाग में अलकनंदा + भागीरथी = गंगा।", en: "At Devprayag, Alaknanda + Bhagirathi = Ganga." },
          },
        ],
      },
      {
        id: "districts", highYield: 2,
        name: { hi: "ज़िले व उच्चावच", en: "Districts & Relief" },
        note: {
          hi: "उत्तराखंड में 13 ज़िले हैं, जो गढ़वाल व कुमाऊँ मंडलों में बँटे हैं। राज्य का अधिकांश भाग पर्वतीय है।",
          en: "Uttarakhand has 13 districts across the Garhwal and Kumaon divisions. Most of the state is mountainous.",
        },
        pyq: { hi: "उत्तराखंड में कुल कितने ज़िले हैं? (प्रीलिम्स 2018)", en: "How many districts does Uttarakhand have? (Prelims 2018)" },
        graph: ["13 districts", "Garhwal", "Kumaon", "Himalaya"],
        mcqs: [
          {
            q: { hi: "उत्तराखंड में कितने ज़िले हैं?", en: "How many districts are there in Uttarakhand?" },
            opts: { hi: ["13", "11", "15", "9"], en: ["13", "11", "15", "9"] }, a: 0,
            ex: { hi: "गढ़वाल व कुमाऊँ मंडल में कुल 13 ज़िले।", en: "13 districts across Garhwal and Kumaon divisions." },
          },
        ],
      },
      {
        id: "phygeo", highYield: 2,
        name: { hi: "भारत का भौतिक भूगोल", en: "Physical Geography of India" },
        source: { hi: "सत्यापित · NCERT व मानक संदर्भ", en: "Verified · NCERT & standard reference" },
        note: {
          hi: "भारत को प्रमुख भौतिक विभागों में बाँटा जाता है: उत्तर के हिमालय पर्वत, उत्तरी विशाल मैदान, प्रायद्वीपीय पठार, थार मरुस्थल, तटीय मैदान व द्वीप समूह। हिमालय सबसे नवीन वलित पर्वत है।",
          en: "India is divided into major physical units: the Himalayas in the north, the Northern Plains, the Peninsular Plateau, the Thar Desert, the Coastal Plains and the Islands. The Himalayas are the youngest fold mountains.",
        },
        pyq: { hi: "भारत का सबसे नवीन वलित पर्वत कौन-सा है? (प्रीलिम्स 2017)", en: "Which is India's youngest fold mountain range? (Prelims 2017)" },
        graph: ["Himalayas", "Northern Plains", "Peninsular Plateau", "Thar Desert", "Coastal Plains", "Islands"],
        mcqs: [
          {
            q: { hi: "इनमें से सबसे नवीन वलित पर्वत कौन-सा है?", en: "Which of these is the youngest fold mountain?" },
            opts: { hi: ["हिमालय", "अरावली", "विंध्य", "सतपुड़ा"], en: ["Himalayas", "Aravalli", "Vindhya", "Satpura"] }, a: 0,
            ex: { hi: "हिमालय सबसे नवीन वलित पर्वत श्रृंखला है।", en: "The Himalayas are the youngest fold mountain range." },
          },
        ],
      },
      {
        id: "climate", highYield: 3,
        name: { hi: "भारत की जलवायु", en: "Climate of India" },
        source: { hi: "सत्यापित · NCERT व मानक संदर्भ", en: "Verified · NCERT & standard reference" },
        note: {
          hi: "भारत में उष्णकटिबंधीय मानसूनी जलवायु है। अधिकांश वर्षा दक्षिण-पश्चिम मानसून (जून–सितम्बर) से होती है; लौटता (उत्तर-पूर्वी) मानसून अक्टूबर–दिसम्बर में तमिलनाडु जैसे क्षेत्रों को वर्षा देता है।",
          en: "India has a tropical monsoon climate. Most rainfall comes from the south-west monsoon (June–September); the retreating (north-east) monsoon brings rain to areas like Tamil Nadu in October–December.",
        },
        pyq: { hi: "भारत में अधिकांश वार्षिक वर्षा किस मानसून से होती है? (प्रीलिम्स 2016)", en: "Most of India's annual rainfall comes from which monsoon? (Prelims 2016)" },
        graph: ["SW Monsoon", "NE Monsoon", "Tropical monsoon", "Four seasons", "Retreating monsoon"],
        mcqs: [
          {
            q: { hi: "भारत की अधिकांश वर्षा किससे होती है?", en: "Most of India's rainfall is brought by —" },
            opts: { hi: ["दक्षिण-पश्चिम मानसून", "उत्तर-पूर्वी मानसून", "पश्चिमी विक्षोभ", "स्थानीय हवाएँ"], en: ["South-west monsoon", "North-east monsoon", "Western disturbances", "Local winds"] }, a: 0,
            ex: { hi: "दक्षिण-पश्चिम मानसून (जून–सितम्बर) मुख्य वर्षा स्रोत है।", en: "The south-west monsoon (June–September) is the main rain source." },
          },
        ],
      },
      {
        id: "ukclimate", highYield: 3,
        name: { hi: "उत्तराखंड: जलवायु व वनस्पति", en: "Uttarakhand Climate & Vegetation" },
        source: { hi: "सत्यापित · UK वन विभाग + मानक संदर्भ", en: "Verified · UK Forest Dept + standard reference" },
        note: {
          hi: "ऊँचाई के साथ उत्तराखंड की वनस्पति तराई-भाबर के उपोष्ण वनों से शीतोष्ण व अल्पाइन घास के मैदानों तक बदलती है; लगभग 65% भाग वनाच्छादित है। राज्य में 6 राष्ट्रीय उद्यान, 7 वन्यजीव अभयारण्य व 1 बायोस्फियर रिज़र्व (नंदा देवी) हैं। जिम कॉर्बेट भारत का पहला राष्ट्रीय उद्यान है; नंदा देवी व फूलों की घाटी यूनेस्को विश्व धरोहर हैं।",
          en: "With altitude, Uttarakhand's vegetation shifts from subtropical Terai-Bhabar forests to temperate and alpine meadows; about 65% of the state is forested. It has 6 national parks, 7 wildlife sanctuaries and 1 biosphere reserve (Nanda Devi). Jim Corbett is India's first national park; Nanda Devi and the Valley of Flowers are UNESCO World Heritage Sites.",
        },
        pyq: { hi: "भारत का पहला राष्ट्रीय उद्यान किस राज्य में है? (प्रीलिम्स 2019)", en: "India's first national park is in which state? (Prelims 2019)" },
        graph: ["Jim Corbett", "Nanda Devi Biosphere", "Valley of Flowers", "Alpine zone", "Terai-Bhabar", "Forest cover 65%"],
        mcqs: [
          {
            q: { hi: "भारत का पहला राष्ट्रीय उद्यान (जिम कॉर्बेट) कहाँ स्थित है?", en: "India's first national park (Jim Corbett) is located in —" },
            opts: { hi: ["उत्तराखंड", "हिमाचल प्रदेश", "असम", "मध्य प्रदेश"], en: ["Uttarakhand", "Himachal Pradesh", "Assam", "Madhya Pradesh"] }, a: 0,
            ex: { hi: "जिम कॉर्बेट (1936) नैनीताल में, भारत का पहला राष्ट्रीय उद्यान है।", en: "Jim Corbett (1936), in Nainital, is India's first national park." },
          },
        ],
      },
      {
        id: "hazards", highYield: 3,
        name: { hi: "उत्तराखंड में प्राकृतिक आपदाएँ", en: "Natural Hazards in Uttarakhand" },
        source: { hi: "सत्यापित · वैज्ञानिक रिपोर्ट + मानक संदर्भ", en: "Verified · scientific reports + standard reference" },
        note: {
          hi: "उत्तराखंड भूकंपीय ज़ोन IV–V में आता है; 1991 उत्तरकाशी व 1999 चमोली भूकंप इसके उदाहरण हैं। राज्य में भूस्खलन, बादल फटना, आकस्मिक बाढ़ (2013 केदारनाथ), हिमनद-झील विस्फोट/हिमस्खलन (2021 चमोली-ऋषिगंगा) व भू-धंसाव (2023 जोशीमठ) जैसी आपदाएँ बार-बार होती हैं। नाज़ुक भूविज्ञान व अनियोजित निर्माण इन्हें बढ़ाते हैं।",
          en: "Uttarakhand lies in seismic zones IV–V; the 1991 Uttarkashi and 1999 Chamoli earthquakes are examples. The state sees recurrent landslides, cloudbursts, flash floods (2013 Kedarnath), glacial-lake/avalanche floods (2021 Chamoli-Rishiganga) and land subsidence (2023 Joshimath). Fragile geology and unplanned construction worsen them.",
        },
        pyq: { hi: "2013 की बाढ़ आपदा ने किस तीर्थ नगर को तबाह किया? (प्रीलिम्स 2018)", en: "The 2013 flood disaster devastated which shrine town? (Prelims 2018)" },
        graph: ["Seismic zone IV-V", "Kedarnath 2013", "Chamoli 2021", "Joshimath 2023", "Cloudburst", "Landslide"],
        mcqs: [
          {
            q: { hi: "2013 की आकस्मिक बाढ़ आपदा ने मुख्यतः किस नगर को तबाह किया?", en: "The 2013 flash-flood disaster mainly devastated which town?" },
            opts: { hi: ["केदारनाथ", "बद्रीनाथ", "गंगोत्री", "यमुनोत्री"], en: ["Kedarnath", "Badrinath", "Gangotri", "Yamunotri"] }, a: 0,
            ex: { hi: "जून 2013 की केदारनाथ आपदा में हज़ारों की मृत्यु हुई।", en: "The June 2013 Kedarnath disaster killed thousands." },
          },
        ],
      },
    ],
  },
  {
    id: "polity", icon: "⚖️",
    name: { hi: "राजव्यवस्था", en: "Polity" },
    topics: [
      {
        id: "panchayat", highYield: 2,
        name: { hi: "उत्तराखंड में पंचायती राज", en: "Panchayati Raj in Uttarakhand" },
        note: {
          hi: "73वें संविधान संशोधन ने त्रिस्तरीय पंचायती राज को संवैधानिक दर्जा दिया। पर्वतीय भूगोल के कारण उत्तराखंड में इसका क्रियान्वयन अलग चुनौतियाँ रखता है।",
          en: "The 73rd Amendment gave three-tier Panchayati Raj constitutional status. Uttarakhand's hill geography poses distinct implementation challenges.",
        },
        pyq: { hi: "पंचायती राज को किस संशोधन से दर्जा मिला? (प्रीलिम्स 2015)", en: "Which amendment gave Panchayati Raj its status? (Prelims 2015)" },
        graph: ["73rd Amendment", "Three-tier", "Gram Sabha", "Hill governance"],
        mcqs: [
          {
            q: { hi: "त्रिस्तरीय पंचायती राज किस संविधान संशोधन से संबंधित है?", en: "Three-tier Panchayati Raj relates to which amendment?" },
            opts: { hi: ["73वाँ", "74वाँ", "42वाँ", "44वाँ"], en: ["73rd", "74th", "42nd", "44th"] }, a: 0,
            ex: { hi: "73वाँ संशोधन ग्रामीण स्थानीय शासन से संबंधित है।", en: "The 73rd Amendment covers rural local government." },
          },
        ],
      },
    ],
  },
];

export const CURRENT_AFFAIRS = [
  {
    id: "ca1", node: "rivers",
    title: { hi: "टिहरी जलविद्युत परियोजनाएँ जलवायु-जोखिम में चिह्नित", en: "Tehri hydropower projects flagged for climate risk" },
    angle: { hi: "मेन्स GS-III · आपदा व ऊर्जा", en: "Mains GS-III · disaster & energy" },
    links: ["rivers", "chipko"],
  },
  {
    id: "ca2", node: "panchayat",
    title: { hi: "उत्तराखंड विधानसभा ने NeVA अपनाया (डिजिटल सदन)", en: "Uttarakhand Assembly adopts NeVA (digital house)" },
    angle: { hi: "प्रीलिम्स तथ्य · राजव्यवस्था", en: "Prelims fact · polity" },
    links: ["panchayat"],
  },
  {
    id: "ca3", node: null,
    title: { hi: "राष्ट्रीय: नया वन्यजीव गलियारा अधिसूचित", en: "National: new wildlife corridor notified" },
    angle: { hi: "प्रीलिम्स + मेन्स GS-III · पर्यावरण", en: "Prelims + Mains GS-III · environment" },
    links: [],
  },
];

// Full UKPCS Prelims syllabus scope (the "spine"). Topics with ready:true have
// content in SUBJECTS above; the rest are real syllabus nodes awaiting content.
export const SYLLABUS_TREE = [
  { id: "hist", icon: "🏛", name: { hi: "इतिहास, संस्कृति व राष्ट्रीय आंदोलन", en: "History, Culture & National Movement" }, topics: [
    { id: "harappa", ready: true, name: { hi: "हड़प्पा सभ्यता", en: "Harappan Civilisation" }, highYield: 3 },
    { id: "vedic", ready: true, name: { hi: "वैदिक काल", en: "Vedic Age" }, highYield: 3 },
    { id: "maurya", ready: true, name: { hi: "मौर्य साम्राज्य", en: "Mauryan Empire" }, highYield: 4 },
    { id: "gupta", ready: true, name: { hi: "गुप्त साम्राज्य", en: "Gupta Empire" }, highYield: 3 },
    { id: "sultanate", ready: true, name: { hi: "दिल्ली सल्तनत", en: "Delhi Sultanate" }, highYield: 3 },
    { id: "mughal", ready: true, name: { hi: "मुग़ल साम्राज्य", en: "Mughal Empire" }, highYield: 4 },
    { id: "katyuri", ready: true, name: { hi: "कत्यूरी राजवंश (उत्तराखंड)", en: "Katyuri Dynasty (Uttarakhand)" }, highYield: 3 },
    { id: "chand", ready: true, name: { hi: "चंद राजवंश — कुमाऊँ", en: "Chand Dynasty — Kumaon" }, highYield: 3 },
    { id: "parmar", ready: true, name: { hi: "परमार/पंवार — गढ़वाल", en: "Parmar/Panwar — Garhwal" }, highYield: 3 },
    { id: "gorkha", ready: true, name: { hi: "गोरखा व ब्रिटिश शासन", en: "Gorkha & British Rule" }, highYield: 3 },
    { id: "chipko", ready: true, name: { hi: "चिपको आंदोलन", en: "Chipko Movement" }, highYield: 4 },
    { id: "statehood", ready: true, name: { hi: "उत्तराखंड राज्य आंदोलन", en: "Uttarakhand Statehood Movement" }, highYield: 3 },
  ] },
  { id: "geo", icon: "🗺", name: { hi: "भूगोल", en: "Geography" }, topics: [
    { id: "phygeo", ready: true, name: { hi: "भारत का भौतिक भूगोल", en: "Physical Geography of India" } },
    { id: "climate", ready: true, name: { hi: "भारत की जलवायु", en: "Climate of India" }, highYield: 3 },
    { id: "rivers", ready: true, name: { hi: "उत्तराखंड की नदियाँ", en: "Rivers of Uttarakhand" }, highYield: 5 },
    { id: "districts", ready: true, name: { hi: "ज़िले व उच्चावच", en: "Districts & Relief" } },
    { id: "ukclimate", ready: true, name: { hi: "उत्तराखंड: जलवायु व वनस्पति", en: "Uttarakhand Climate & Vegetation" }, highYield: 3 },
    { id: "hazards", ready: true, name: { hi: "उत्तराखंड में प्राकृतिक आपदाएँ", en: "Natural Hazards in Uttarakhand" }, highYield: 3 },
  ] },
  { id: "pol", icon: "⚖️", name: { hi: "राजव्यवस्था व शासन", en: "Polity & Governance" }, topics: [
    { id: "constitution", name: { hi: "भारतीय संविधान", en: "Indian Constitution" }, highYield: 3 },
    { id: "fr", name: { hi: "मौलिक अधिकार", en: "Fundamental Rights" }, highYield: 3 },
    { id: "parliament", name: { hi: "संसद व विधानमंडल", en: "Parliament & Legislature" } },
    { id: "panchayat", ready: true, name: { hi: "उत्तराखंड में पंचायती राज", en: "Panchayati Raj in Uttarakhand" } },
  ] },
  { id: "eco", icon: "📈", name: { hi: "अर्थव्यवस्था", en: "Economy" }, topics: [
    { id: "ecobasics", name: { hi: "भारतीय अर्थव्यवस्था: आधार", en: "Indian Economy Basics" } },
    { id: "banking", name: { hi: "बैंकिंग व राजकोषीय नीति", en: "Banking & Fiscal Policy" } },
    { id: "ukeco", name: { hi: "उत्तराखंड अर्थव्यवस्था व बजट", en: "Uttarakhand Economy & Budget" }, highYield: 3 },
  ] },
  { id: "sci", icon: "🔬", name: { hi: "विज्ञान, तकनीक व पर्यावरण", en: "Science, Tech & Environment" }, topics: [
    { id: "science", name: { hi: "दैनिक विज्ञान", en: "Everyday Science" } },
    { id: "env", name: { hi: "पर्यावरण व पारिस्थितिकी", en: "Environment & Ecology" }, highYield: 3 },
    { id: "biodiv", name: { hi: "उत्तराखंड की जैव विविधता", en: "Biodiversity of Uttarakhand" } },
  ] },
  { id: "ca", icon: "🗞", name: { hi: "समसामयिकी", en: "Current Affairs" }, topics: [
    { id: "natca", name: { hi: "राष्ट्रीय समसामयिकी", en: "National Current Affairs" } },
    { id: "ukca", name: { hi: "उत्तराखंड समसामयिकी", en: "Uttarakhand Current Affairs" }, highYield: 3 },
  ] },
  { id: "csat", icon: "🧮", name: { hi: "सीसैट — प्रश्नपत्र II", en: "CSAT — Paper II" }, topics: [
    { id: "comp", name: { hi: "बोधगम्यता", en: "Comprehension" } },
    { id: "reason", name: { hi: "तार्किक विवेचन", en: "Logical Reasoning" } },
    { id: "numeracy", name: { hi: "आधारभूत संख्यात्मकता", en: "Basic Numeracy" } },
  ] },
];

export const ENTITY_INFO = {
  "Gaura Devi": { hi: "रैणी गाँव की वह महिला नेता जिन्होंने 1974 में पेड़ों की कटाई रोकी।", en: "The woman leader of Reni who stopped tree-felling in 1974." },
  "Reni / Chamoli": { hi: "चमोली ज़िले का गाँव; 1974 के चिपको प्रदर्शन का स्थल।", en: "A village in Chamoli district; site of the 1974 Chipko action." },
  "1974": { hi: "रैणी की प्रसिद्ध चिपको घटना का वर्ष।", en: "Year of the famous Reni Chipko episode." },
  "Sunderlal Bahuguna": { hi: "चिपको को राष्ट्रीय पहचान देने वाले पर्यावरणविद्।", en: "The environmentalist who gave Chipko national reach." },
  "Forest Conservation": { hi: "वन व पारिस्थितिकी संरक्षण — पर्यावरण खंड का प्रमुख विषय।", en: "Forest & ecological conservation — a key environment theme." },
  "Tehri agitation": { hi: "टिहरी बाँध व विस्थापन से जुड़ा आंदोलन।", en: "Movement linked to the Tehri dam and displacement." },
  "9 Nov 2000": { hi: "उत्तरांचल (उत्तराखंड) राज्य के गठन की तिथि।", en: "Date Uttaranchal (Uttarakhand) state was formed." },
  "Rampur Tiraha 1994": { hi: "राज्य आंदोलन का निर्णायक मुज़फ़्फ़रनगर कांड।", en: "The decisive Muzaffarnagar incident of the statehood movement." },
  "Uttaranchal": { hi: "राज्य का मूल नाम; 2007 में उत्तराखंड हुआ।", en: "The state's original name; renamed Uttarakhand in 2007." },
  "Hill state demand": { hi: "पृथक पर्वतीय राज्य की दशकों पुरानी माँग।", en: "The decades-old demand for a separate hill state." },
  "2007 rename": { hi: "2007 में उत्तरांचल का नाम उत्तराखंड किया गया।", en: "In 2007 Uttaranchal was renamed Uttarakhand." },
  "Devprayag": { hi: "अलकनंदा व भागीरथी का संगम; यहाँ से गंगा बनती है।", en: "Confluence of Alaknanda & Bhagirathi; the Ganga begins here." },
  "Alaknanda": { hi: "गंगा बनाने वाली दो प्रमुख धाराओं में से एक।", en: "One of the two main streams that form the Ganga." },
  "Bhagirathi": { hi: "गंगोत्री से निकलने वाली पवित्र नदी।", en: "The sacred river rising from Gangotri." },
  "Ganga": { hi: "देवप्रयाग में बनने वाली राष्ट्रीय नदी।", en: "The national river, formed at Devprayag." },
  "Yamunotri": { hi: "यमुना नदी का उद्गम स्थल।", en: "The source of the Yamuna river." },
  "Hydropower": { hi: "नदियों पर जलविद्युत — ऊर्जा व आपदा दोनों का विषय।", en: "River hydropower — an energy and disaster theme." },
  "13 districts": { hi: "उत्तराखंड के कुल ज़िले, दो मंडलों में।", en: "Total districts of Uttarakhand, across two divisions." },
  "Garhwal": { hi: "राज्य के दो मंडलों में से एक।", en: "One of the state's two divisions." },
  "Kumaon": { hi: "राज्य के दो मंडलों में से एक।", en: "One of the state's two divisions." },
  "Himalaya": { hi: "राज्य के अधिकांश भू-भाग का पर्वतीय आधार।", en: "The mountain base of most of the state's terrain." },
  "73rd Amendment": { hi: "त्रिस्तरीय ग्रामीण पंचायती राज को संवैधानिक दर्जा।", en: "Gave three-tier rural Panchayati Raj constitutional status." },
  "Three-tier": { hi: "ग्राम, क्षेत्र व ज़िला स्तर की पंचायत संरचना।", en: "Village, block and district-level panchayat structure." },
  "Gram Sabha": { hi: "गाँव के मतदाताओं की मूल सभा।", en: "The base assembly of a village's voters." },
  "Hill governance": { hi: "पर्वतीय भूगोल में स्थानीय शासन की चुनौतियाँ।", en: "Local-governance challenges in hill geography." },
  "Mohenjodaro": { hi: "हड़प्पा सभ्यता का प्रमुख नगर; विशाल स्नानागार यहीं।", en: "Major Harappan city; home of the Great Bath." },
  "Great Bath": { hi: "मोहनजोदड़ो की प्रसिद्ध जल-संरचना।", en: "The famous water structure at Mohenjodaro." },
  "Indus script": { hi: "हड़प्पा की अब तक न पढ़ी गई लिपि।", en: "The still-undeciphered Harappan script." },
  "Rigveda": { hi: "चारों वेदों में सबसे प्राचीन।", en: "The oldest of the four Vedas." },
  "Sabha & Samiti": { hi: "वैदिक काल की जनसभाएँ।", en: "Popular assemblies of the Vedic age." },
  "Ashoka": { hi: "मौर्य सम्राट; कलिंग के बाद बौद्ध धर्म व धम्म अपनाया।", en: "Mauryan emperor; embraced Buddhism and Dhamma after Kalinga." },
  "Kalinga War": { hi: "वह युद्ध जिसने अशोक का हृदय बदला।", en: "The war that changed Ashoka's heart." },
  "Chanakya": { hi: "चंद्रगुप्त के गुरु; अर्थशास्त्र के रचयिता।", en: "Chandragupta's mentor; author of the Arthashastra." },
  "Aryabhata": { hi: "गुप्तकालीन गणितज्ञ-खगोलविद्।", en: "Gupta-era mathematician-astronomer." },
  "Samudragupta": { hi: "गुप्त सम्राट; प्रयाग प्रशस्ति से ज्ञात।", en: "Gupta emperor known from the Allahabad pillar inscription." },
  "Qutbuddin Aibak": { hi: "दिल्ली सल्तनत (गुलाम वंश) के संस्थापक।", en: "Founder of the Delhi Sultanate's Slave dynasty." },
  "Alauddin Khalji": { hi: "बाज़ार-नियंत्रण सुधारों के लिए प्रसिद्ध सुल्तान।", en: "Sultan famed for market-control reforms." },
  "Qutb Minar": { hi: "ऐबक द्वारा आरंभ; सल्तनत वास्तुकला का प्रतीक।", en: "Begun by Aibak; an icon of Sultanate architecture." },
  "Babur": { hi: "पानीपत 1526 जीतकर मुग़ल साम्राज्य की नींव रखी।", en: "Won Panipat 1526 and founded the Mughal empire." },
  "Akbar": { hi: "मनसबदारी व दीन-ए-इलाही के लिए जाने जाते हैं।", en: "Known for the mansabdari system and Din-i-Ilahi." },
  "Mansabdari": { hi: "अकबर की सैन्य-प्रशासनिक श्रेणी व्यवस्था।", en: "Akbar's military-administrative ranking system." },
  "Kartikeyapura": { hi: "कत्यूरी राजवंश की राजधानी (बैजनाथ क्षेत्र)।", en: "Capital of the Katyuri dynasty (Baijnath area)." },
  "Jageshwar": { hi: "कत्यूरी काल से जुड़ा मंदिर-समूह।", en: "Temple cluster linked to the Katyuri period." },
  "Som Chand": { hi: "चंद राजवंश के पारंपरिक संस्थापक।", en: "Traditional founder of the Chand dynasty." },
  "Almora": { hi: "चंद राजवंश की परवर्ती राजधानी।", en: "Later capital of the Chand dynasty." },
  "Ajay Pal": { hi: "गढ़वाल के गढ़ों को एकीकृत करने वाले पंवार शासक।", en: "Panwar ruler who unified Garhwal's garhs." },
  "Srinagar (Garhwal)": { hi: "पंवार शासन की राजधानी।", en: "Capital of Panwar rule in Garhwal." },
  "Treaty of Sugauli 1816": { hi: "गोरखा शासन समाप्त; कुमाऊँ अंग्रेज़ों को मिला।", en: "Ended Gorkha rule; Kumaon passed to the British." },
  "Anglo-Nepalese War": { hi: "1814–16 का युद्ध जिसने गोरखा विस्तार रोका।", en: "The 1814–16 war that checked Gorkha expansion." },
  "Himalayas": { hi: "भारत की सबसे नवीन व ऊँची वलित पर्वत श्रृंखला।", en: "India's youngest and highest fold mountain range." },
  "Northern Plains": { hi: "सिंधु-गंगा-ब्रह्मपुत्र द्वारा बना उपजाऊ मैदान।", en: "Fertile plains built by the Indus, Ganga and Brahmaputra." },
  "Peninsular Plateau": { hi: "प्राचीन कठोर चट्टानों का दक्षिणी पठार।", en: "The old, hard-rock plateau of southern India." },
  "Thar Desert": { hi: "उत्तर-पश्चिम भारत का शुष्क मरुस्थल।", en: "The arid desert of north-west India." },
  "SW Monsoon": { hi: "जून–सितम्बर; भारत की अधिकांश वर्षा का स्रोत।", en: "June–September; source of most of India's rainfall." },
  "NE Monsoon": { hi: "लौटता मानसून; तमिलनाडु को वर्षा देता है।", en: "The retreating monsoon; brings rain to Tamil Nadu." },
  "Jim Corbett": { hi: "1936 में स्थापित भारत का पहला राष्ट्रीय उद्यान, नैनीताल।", en: "India's first national park (1936), in Nainital." },
  "Nanda Devi Biosphere": { hi: "यूनेस्को मान्यता प्राप्त बायोस्फियर रिज़र्व।", en: "A UNESCO-recognised biosphere reserve." },
  "Valley of Flowers": { hi: "अल्पाइन फूलों के लिए प्रसिद्ध यूनेस्को धरोहर।", en: "UNESCO site famed for its alpine flowers." },
  "Terai-Bhabar": { hi: "हिमालय की तलहटी का उपोष्ण वन-पट्टी क्षेत्र।", en: "The subtropical forest belt at the Himalayan foothills." },
  "Alpine zone": { hi: "वृक्ष-रेखा के ऊपर के घास के मैदान।", en: "High meadows above the tree line." },
  "Seismic zone IV-V": { hi: "उच्च भूकंपीय जोखिम वाला क्षेत्र।", en: "A high earthquake-risk zone." },
  "Kedarnath 2013": { hi: "जून 2013 की विनाशकारी बाढ़ आपदा।", en: "The catastrophic flood disaster of June 2013." },
  "Chamoli 2021": { hi: "ऋषिगंगा-धौलीगंगा में हिमस्खलन-जनित आकस्मिक बाढ़।", en: "Avalanche-triggered flash flood on the Rishiganga-Dhauliganga." },
  "Joshimath 2023": { hi: "2023 का भू-धंसाव संकट।", en: "The 2023 land-subsidence crisis." },
  "Cloudburst": { hi: "अचानक तीव्र वर्षा जो बाढ़/भूस्खलन लाती है।", en: "Sudden intense rain that triggers floods/landslides." },
};

export const topicById = (id) => {
  for (const s of SUBJECTS) for (const tp of s.topics) if (tp.id === id) return { ...tp, subject: s };
  return null;
};
