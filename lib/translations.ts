export interface Translations {
  navigation: {
    home: string;
    prophetMuhammad: string;
    earlyIslam: string;
    companions: string;
    civilization: string;
    about: string;
  };
  common: {
    search: string;
    language: string;
    readMore: string;
    minRead: string;
    author: string;
    date: string;
    category: string;
    featured: string;
    latest: string;
    popular: string;
    related: string;
    tags: string;
    share: string;
    comments: string;
    subscribe: string;
    newsletter: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  hero: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    startLearning: string;
    aboutProject: string;
  };
  articles: {
    featuredTitle: string;
    latestTitle: string;
    birthTitle: string;
    birthExcerpt: string;
    revelationTitle: string;
    revelationExcerpt: string;
    migrationTitle: string;
    migrationExcerpt: string;
    abuBakrTitle: string;
    abuBakrExcerpt: string;
  };
  sidebar: {
    categories: string;
    prophetMuhammad: string;
    earlyIslam: string;
    companions: string;
    civilization: string;
    popularPosts: string;
    recentPosts: string;
    tags: string;
    newsletter: string;
    newsletterDescription: string;
    subscribe: string;
    emailPlaceholder: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    categories: string;
    contact: string;
    followUs: string;
    copyright: string;
  };
}

const translations: Record<string, Translations> = {
  en: {
    navigation: {
      home: 'Home',
      prophetMuhammad: 'Prophet Muhammad (PBUH)',
      earlyIslam: 'Early Islam',
      companions: 'Companions',
      civilization: 'Islamic Civilization',
      about: 'About',
    },
    common: {
      search: 'Search articles...',
      language: 'Language',
      readMore: 'Read More',
      minRead: 'min read',
      author: 'Author',
      date: 'Date',
      category: 'Category',
      featured: 'Featured',
      latest: 'Latest',
      popular: 'Popular',
      related: 'Related',
      tags: 'Tags',
      share: 'Share',
      comments: 'Comments',
      subscribe: 'Subscribe',
      newsletter: 'Newsletter',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    hero: {
      subtitle: 'Educational Heritage',
      title: 'Learn About',
      titleHighlight: 'Islamic History',
      description: 'Discover the rich heritage of Islam, learn about Prophet Muhammad (Peace Be Upon Him), and explore the golden age of Islamic civilization through carefully researched articles. This website is developed by **Muhammed Ajmal cc** to help you learn more about Prophet Muhammad (Peace Be Upon Him) and the beauty of Islam.',
      startLearning: 'Start Learning',
      aboutProject: 'About This Project',
    },
    articles: {
      featuredTitle: 'Featured Articles',
      latestTitle: 'Latest Articles',
      birthTitle: 'The Birth and Early Life of Prophet Muhammad (PBUH)',
      birthExcerpt: 'Explore the early years of Prophet Muhammad in Mecca, from his birth in 570 CE to his marriage with Khadijah (RA).',
      revelationTitle: 'The First Revelation and Beginning of Prophethood',
      revelationExcerpt: 'The transformative moment in Cave Hira when Angel Gabriel first appeared to Prophet Muhammad with the message of Islam.',
      migrationTitle: 'The Migration to Medina (Hijra)',
      migrationExcerpt: 'The historic journey from Mecca to Medina that marked the beginning of the Islamic calendar.',
      abuBakrTitle: 'Abu Bakr: The First Caliph',
      abuBakrExcerpt: 'The life and leadership of Abu Bakr (RA), the first caliph of Islam and closest companion of Prophet Muhammad.',
    },
    sidebar: {
      categories: 'Categories',
      prophetMuhammad: 'Prophet Muhammad',
      earlyIslam: 'Early Islam',
      companions: 'Companions',
      civilization: 'Islamic Civilization',
      popularPosts: 'Popular Posts',
      recentPosts: 'Recent Posts',
      tags: 'Tags',
      newsletter: 'Newsletter',
      newsletterDescription: 'Stay updated with the latest articles and insights.',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Enter your email',
    },
    footer: {
      description: 'Discover the rich heritage of Islam, learn about Prophet Muhammad (Peace Be Upon Him), and explore the golden age of Islamic civilization.',
      quickLinks: 'Quick Links',
      categories: 'Categories',
      contact: 'Contact',
      followUs: 'Follow Us',
      copyright: '© 2024 Islamic History. All rights reserved.',
    },
  },
  ml: {
    navigation: {
      home: 'വീട്',
      prophetMuhammad: 'പ്രവാചകൻ മുഹമ്മദ് (സല്ലല്ലാഹു അലൈഹി വസല്ലം)',
      earlyIslam: 'പ്രാരംഭ ഇസ്ലാം',
      companions: 'സഹാബികൾ',
      civilization: 'ഇസ്ലാമിക സംസ്കാരം',
      about: 'കുറിച്ച്',
    },
    common: {
      search: 'ലേഖനങ്ങൾ തിരയുക...',
      language: 'ഭാഷ',
      readMore: 'കൂടുതൽ വായിക്കുക',
      minRead: 'മിനിറ്റ് വായന',
      author: 'രചയിതാവ്',
      date: 'തീയതി',
      category: 'വിഭാഗം',
      featured: 'പ്രത്യേകം',
      latest: 'ഏറ്റവും പുതിയത്',
      popular: 'ജനപ്രിയം',
      related: 'ബന്ധപ്പെട്ടത്',
      tags: 'ടാഗുകൾ',
      share: 'പങ്കുവെയ്ക്കുക',
      comments: 'അഭിപ്രായങ്ങൾ',
      subscribe: 'സബ്സ്ക്രൈബ്',
      newsletter: 'വാർത്താക്കുറിപ്പ്',
      about: 'കുറിച്ച്',
      contact: 'ബന്ധപ്പെടുക',
      privacy: 'സ്വകാര്യത',
      terms: 'നിബന്ധനകൾ',
    },
    hero: {
      subtitle: 'വിദ്യാഭ്യാസ പൈതൃകം',
      title: 'പഠിക്കുക',
      titleHighlight: 'ഇസ്ലാമിക ചരിത്രം',
      description: 'ഇസ്ലാമിന്റെ സമ്പന്നമായ പൈതൃകം കണ്ടെത്തുക, പ്രവാചകൻ മുഹമ്മദിനെ (സല്ലല്ലാഹു അലൈഹി വസല്ലം) കുറിച്ച് പഠിക്കുക, ഗവേഷണം ചെയ്ത ലേഖനങ്ങളിലൂടെ ഇസ്ലാമിക സംസ്കാരത്തിന്റെ സ്വർണ്ണ യുഗം പര്യവേക്ഷണം ചെയ്യുക. ഈ വെബ്സൈറ്റ് **Muhammed Ajmal cc** വികസിപ്പിച്ചതാണ്.',
      startLearning: 'പഠനം ആരംഭിക്കുക',
      aboutProject: 'ഈ പ്രോജക്റ്റിനെക്കുറിച്ച്',
    },
    articles: {
      featuredTitle: 'പ്രത്യേക ലേഖനങ്ങൾ',
      latestTitle: 'ഏറ്റവും പുതിയ ലേഖനങ്ങൾ',
      birthTitle: 'പ്രവാചകൻ മുഹമ്മദിന്റെ (സല്ലല്ലാഹു അലൈഹി വസല്ലം) ജനനവും ആദ്യകാല ജീവിതവും',
      birthExcerpt: 'പ്രവാചകൻ മുഹമ്മദിന്റെ ആദ്യകാല വർഷങ്ങൾ മക്കയിൽ, 570 CE-ൽ ജനനം മുതൽ ഖദീജ (റ) യുമായുള്ള വിവാഹം വരെ പര്യവേക്ഷണം ചെയ്യുക.',
      revelationTitle: 'ആദ്യ വെളിപാടും പ്രവാചകത്വത്തിന്റെ ആരംഭവും',
      revelationExcerpt: 'ഹിറ ഗുഹയിൽ വിശുദ്ധ ഗബ്രിയേൽ ദൈവദൂതൻ ആദ്യമായി പ്രവാചകൻ മുഹമ്മദിനെ കണ്ട ഇസ്ലാമിന്റെ സന്ദേശത്തോടെയുള്ള മാറ്റം വരുത്തുന്ന നിമിഷം.',
      migrationTitle: 'മദീനയിലേക്കുള്ള കുടിയേറ്റം (ഹിജ്റ)',
      migrationExcerpt: 'ഇസ്ലാമിക കലണ്ടറിന്റെ ആരംഭം അടയാളപ്പെടുത്തിയ മക്കയിൽ നിന്ന് മദീനയിലേക്കുള്ള ചരിത്രപരമായ യാത്ര.',
      abuBakrTitle: 'അബൂബക്ര്: ആദ്യത്തെ ഖലീഫ',
      abuBakrExcerpt: 'ഇസ്ലാമിന്റെ ആദ്യ ഖലീഫയും പ്രവാചകൻ മുഹമ്മദിന്റെ ഏറ്റവും അടുത്ത സഹാബിയുമായ അബൂബക്രിന്റെ (റ) ജീവിതവും നേതൃത്വവും.',
    },
    sidebar: {
      categories: 'വിഭാഗങ്ങൾ',
      prophetMuhammad: 'പ്രവാചകൻ മുഹമ്മദ്',
      earlyIslam: 'പ്രാരംഭ ഇസ്ലാം',
      companions: 'സഹാബികൾ',
      civilization: 'ഇസ്ലാമിക സംസ്കാരം',
      popularPosts: 'ജനപ്രിയ പോസ്റ്റുകൾ',
      recentPosts: 'സമീപകാല പോസ്റ്റുകൾ',
      tags: 'ടാഗുകൾ',
      newsletter: 'വാർത്താക്കുറിപ്പ്',
      newsletterDescription: 'ഏറ്റവും പുതിയ ലേഖനങ്ങളും ഉൾക്കാഴ്ചകളും ഉപയോഗിച്ച് അപ്ഡേറ്റ് ആയി തുടരുക.',
      subscribe: 'സബ്സ്ക്രൈബ്',
      emailPlaceholder: 'നിങ്ങളുടെ ഇമെയിൽ നൽകുക',
    },
    footer: {
      description: 'ഇസ്ലാമിന്റെ സമ്പന്നമായ പൈതൃകം കണ്ടെത്തുക, പ്രവാചകൻ മുഹമ്മദിനെ (സല്ലല്ലാഹു അലൈഹി വസല്ലം) കുറിച്ച് പഠിക്കുക, ഇസ്ലാമിക സംസ്കാരത്തിന്റെ സ്വർണ്ണ യുഗം പര്യവേക്ഷണം ചെയ്യുക.',
      quickLinks: 'വേഗ ലിങ്കുകൾ',
      categories: 'വിഭാഗങ്ങൾ',
      contact: 'ബന്ധപ്പെടുക',
      followUs: 'ഞങ്ങളെ പിന്തുടരുക',
      copyright: '© 2024 ഇസ്ലാമിക ചരിത്രം. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.',
    },
  },
  hi: {
    navigation: {
      home: 'होम',
      prophetMuhammad: 'पैगंबर मुहम्मद (सल्लल्लाहु अलैहि वसल्लम)',
      earlyIslam: 'प्रारंभिक इस्लाम',
      companions: 'सहाबा',
      civilization: 'इस्लामी सभ्यता',
      about: 'के बारे में',
    },
    common: {
      search: 'लेख खोजें...',
      language: 'भाषा',
      readMore: 'और पढ़ें',
      minRead: 'मिनट पढ़ना',
      author: 'लेखक',
      date: 'तारीख',
      category: 'श्रेणी',
      featured: 'विशेष',
      latest: 'नवीनतम',
      popular: 'लोकप्रिय',
      related: 'संबंधित',
      tags: 'टैग',
      share: 'साझा करें',
      comments: 'टिप्पणियां',
      subscribe: 'सदस्यता लें',
      newsletter: 'न्यूज़लेटर',
      about: 'के बारे में',
      contact: 'संपर्क',
      privacy: 'गोपनीयता',
      terms: 'शर्तें',
    },
    hero: {
      subtitle: 'शैक्षिक विरासत',
      title: 'सीखें',
      titleHighlight: 'इस्लामी इतिहास',
      description: 'इस्लाम की समृद्ध विरासत की खोज करें, पैगंबर मुहम्मद (सल्लल्लाहु अलैहि वसल्लम) के बारे में जानें, और सावधानीपूर्वक शोध किए गए लेखों के माध्यम से इस्लामी सभ्यता के स्वर्ण युग का अन्वेषण करें। यह वेबसाइट **Muhammed Ajmal cc** द्वारा विकसित की गई है।',
      startLearning: 'सीखना शुरू करें',
      aboutProject: 'इस परियोजना के बारे में',
    },
    articles: {
      featuredTitle: 'विशेष लेख',
      latestTitle: 'नवीनतम लेख',
      birthTitle: 'पैगंबर मुहम्मद (सल्लल्लाहु अलैहि वसल्लम) का जन्म और प्रारंभिक जीवन',
      birthExcerpt: 'मक्का में पैगंबर मुहम्मद के प्रारंभिक वर्षों का अन्वेषण करें, 570 CE में उनके जन्म से लेकर खदीजा (रज़ियल्लाहु अन्हा) से विवाह तक।',
      revelationTitle: 'पहला वही और पैगंबरी का आरंभ',
      revelationExcerpt: 'हिरा गुफा में वह क्षण जब फरिश्ता जिब्राईल ने पहली बार पैगंबर मुहम्मद को इस्लाम के संदेश के साथ दिखाई दिया।',
      migrationTitle: 'मदीना की ओर हिजरत',
      migrationExcerpt: 'मक्का से मदीना की ऐतिहासिक यात्रा जिसने इस्लामी कैलेंडर की शुरुआत को चिह्नित किया।',
      abuBakrTitle: 'अबू बक्र: पहले खलीफा',
      abuBakrExcerpt: 'अबू बक्र (रज़ियल्लाहु अन्हु) का जीवन और नेतृत्व, इस्लाम के पहले खलीफा और पैगंबर मुहम्मद के सबसे करीबी साथी।',
    },
    sidebar: {
      categories: 'श्रेणियां',
      prophetMuhammad: 'पैगंबर मुहम्मद',
      earlyIslam: 'प्रारंभिक इस्लाम',
      companions: 'सहाबा',
      civilization: 'इस्लामी सभ्यता',
      popularPosts: 'लोकप्रिय पोस्ट',
      recentPosts: 'हाल के पोस्ट',
      tags: 'टैग',
      newsletter: 'न्यूज़लेटर',
      newsletterDescription: 'नवीनतम लेखों और अंतर्दृष्टि के साथ अपडेट रहें।',
      subscribe: 'सदस्यता लें',
      emailPlaceholder: 'अपना ईमेल दर्ज करें',
    },
    footer: {
      description: 'इस्लाम की समृद्ध विरासत की खोज करें, पैगंबर मुहम्मद (सल्लल्लाहु अलैहि वसल्लम) के बारे में जानें, और इस्लामी सभ्यता के स्वर्ण युग का अन्वेषण करें।',
      quickLinks: 'त्वरित लिंक',
      categories: 'श्रेणियां',
      contact: 'संपर्क',
      followUs: 'हमें फॉलो करें',
      copyright: '© 2024 इस्लामी इतिहास। सर्वाधिकार सुरक्षित।',
    },
  },
  ta: {
    navigation: {
      home: 'முகப்பு',
      prophetMuhammad: 'நபி முஹம்மது (ஸல்)',
      earlyIslam: 'முற்கால இஸ்லாம்',
      companions: 'சகாபிகள்',
      civilization: 'இஸ்லாமிய நாகரிகம்',
      about: 'பற்றி',
    },
    common: {
      search: 'கட்டுரைகளைத் தேடுங்கள்...',
      language: 'மொழி',
      readMore: 'மேலும் படிக்க',
      minRead: 'நிமிடம் படிப்பு',
      author: 'எழுத்தாளர்',
      date: 'தேதி',
      category: 'வகை',
      featured: 'சிறப்பு',
      latest: 'சமீபத்திய',
      popular: 'பிரபலமான',
      related: 'தொடர்புடைய',
      tags: 'குறிச்சொற்கள்',
      share: 'பகிர்',
      comments: 'கருத்துகள்',
      subscribe: 'சந்தா',
      newsletter: 'செய்திமடல்',
      about: 'பற்றி',
      contact: 'தொடர்பு',
      privacy: 'தனியுரிமை',
      terms: 'விதிமுறைகள்',
    },
    hero: {
      subtitle: 'கல்வி பாரம்பரியம்',
      title: 'கற்றுக்கொள்ளுங்கள்',
      titleHighlight: 'இஸ்லாமிய வரலாறு',
      description: 'இஸ்லாத்தின் செழுமையான பாரம்பரியத்தைக் கண்டறியுங்கள், நபி முஹம்மது (ஸல்) பற்றி அறியுங்கள், மேலும் கவனமாக ஆராயப்பட்ட கட்டுரைகள் மூலம் இஸ்லாமிய நாகரிகத்தின் பொற்காலத்தை ஆராயுங்கள். இந்த வலைத்தளம் **Muhammed Ajmal cc** மூலம் உருவாக்கப்பட்டது.',
      startLearning: 'கற்றல் தொடங்குங்கள்',
      aboutProject: 'இந்த திட்டத்தைப் பற்றி',
    },
    articles: {
      featuredTitle: 'சிறப்பு கட்டுரைகள்',
      latestTitle: 'சமீபத்திய கட்டுரைகள்',
      birthTitle: 'நபி முஹம்மதின் (ஸல்) பிறப்பு மற்றும் ஆரம்ப வாழ்க்கை',
      birthExcerpt: 'மக்காவில் நபி முஹம்மதின் ஆரம்ப ஆண்டுகளை ஆராயுங்கள், 570 CE இல் அவரது பிறப்பிலிருந்து கதீஜா (ரலி) உடனான திருமணம் வரை.',
      revelationTitle: 'முதல் வெளிப்பாடு மற்றும் நபித்துவத்தின் தொடக்கம்',
      revelationExcerpt: 'ஹிரா குகையில் வானவர் ஜிப்ரீல் முதன்முறையாக நபி முஹம்மதிடம் இஸ்லாத்தின் செய்தியுடன் தோன்றிய மாற்றம் ஏற்படுத்தும் தருணம்.',
      migrationTitle: 'மதீனாவுக்கு ஹிஜ்ரா (குடியேற்றம்)',
      migrationExcerpt: 'இஸ்லாமிய நாட்காட்டியின் தொடக்கத்தைக் குறித்த மக்காவிலிருந்து மதீனாவுக்கான வரலாற்று பயணம்.',
      abuBakrTitle: 'அபூபக்ர்: முதல் கலீஃபா',
      abuBakrExcerpt: 'இஸ்லாத்தின் முதல் கலீஃபா மற்றும் நபி முஹம்மதின் மிக நெருக்கமான தோழரான அபூபக்ரின் (ரலி) வாழ்க்கை மற்றும் தலைமை.',
    },
    sidebar: {
      categories: 'வகைகள்',
      prophetMuhammad: 'நபி முஹம்மது',
      earlyIslam: 'முற்கால இஸ்லாம்',
      companions: 'சகாபிகள்',
      civilization: 'இஸ்லாமிய நாகரிகம்',
      popularPosts: 'பிரபலமான பதிவுகள்',
      recentPosts: 'சமீபத்திய பதிவுகள்',
      tags: 'குறிச்சொற்கள்',
      newsletter: 'செய்திமடல்',
      newsletterDescription: 'சமீபத்திய கட்டுரைகள் மற்றும் நுண்ணறிவுகளுடன் புதுப்பிக்கப்பட்டு இருங்கள்.',
      subscribe: 'சந்தா',
      emailPlaceholder: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
    },
    footer: {
      description: 'இஸ்லாத்தின் செழுமையான பாரம்பரியத்தைக் கண்டறியுங்கள், நபி முஹம்மது (ஸல்) பற்றி அறியுங்கள், இஸ்லாமிய நாகரிகத்தின் பொற்காலத்தை ஆராயுங்கள்.',
      quickLinks: 'விரைவு இணைப்புகள்',
      categories: 'வகைகள்',
      contact: 'தொடர்பு',
      followUs: 'எங்களைப் பின்தொடரவும்',
      copyright: '© 2024 இஸ்லாமிய வரலாறு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.',
    },
  },
  kn: {
    navigation: {
      home: 'ಮುಖಪುಟ',
      prophetMuhammad: 'ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್ (ಸಲ್)',
      earlyIslam: 'ಮುಂಚಿನ ಇಸ್ಲಾಂ',
      companions: 'ಸಹಾಬಿಗಳು',
      civilization: 'ಇಸ್ಲಾಮಿಕ್ ನಾಗರಿಕತೆ',
      about: 'ಕುರಿತು',
    },
    common: {
      search: 'ಲೇಖನಗಳನ್ನು ಹುಡುಕಿ...',
      language: 'ಭಾಷೆ',
      readMore: 'ಇನ್ನಷ್ಟು ಓದಿ',
      minRead: 'ನಿಮಿಷ ಓದು',
      author: 'ಲೇಖಕ',
      date: 'ದಿನಾಂಕ',
      category: 'ವರ್ಗ',
      featured: 'ವಿಶೇಷ',
      latest: 'ಇತ್ತೀಚಿನ',
      popular: 'ಜನಪ್ರಿಯ',
      related: 'ಸಂಬಂಧಿತ',
      tags: 'ಟ್ಯಾಗ್‌ಗಳು',
      share: 'ಹಂಚಿಕೊಳ್ಳಿ',
      comments: 'ಟಿಪ್ಪಣಿಗಳು',
      subscribe: 'ಚಂದಾದಾರರಾಗಿ',
      newsletter: 'ವಾರ್ತಾಪತ್ರಿಕೆ',
      about: 'ಕುರಿತು',
      contact: 'ಸಂಪರ್ಕ',
      privacy: 'ಗೌಪ್ಯತೆ',
      terms: 'ನಿಯಮಗಳು',
    },
    hero: {
      subtitle: 'ಶೈಕ್ಷಣಿಕ ಪರಂಪರೆ',
      title: 'ಕಲಿಯಿರಿ',
      titleHighlight: 'ಇಸ್ಲಾಮಿಕ್ ಇತಿಹಾಸ',
      description: 'ಇಸ್ಲಾಮಿನ ಸಮೃದ್ಧ ಪರಂಪರೆಯನ್ನು ಕಂಡುಕೊಳ್ಳಿ, ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್ (ಸಲ್) ಬಗ್ಗೆ ತಿಳಿಯಿರಿ, ಮತ್ತು ಎಚ್ಚರಿಕೆಯಿಂದ ಸಂಶೋಧಿಸಿದ ಲೇಖನಗಳ ಮೂಲಕ ಇಸ್ಲಾಮಿಕ್ ನಾಗರಿಕತೆಯ ಸುವರ್ಣ ಯುಗವನ್ನು ಅನ್ವೇಷಿಸಿ. ಈ ವೆಬ್‌ಸೈಟ್ **Muhammed Ajmal cc** ನಿಂದ ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ.',
      startLearning: 'ಕಲಿಕೆ ಪ್ರಾರಂಭಿಸಿ',
      aboutProject: 'ಈ ಯೋಜನೆಯ ಬಗ್ಗೆ',
    },
    articles: {
      featuredTitle: 'ವಿಶೇಷ ಲೇಖನಗಳು',
      latestTitle: 'ಇತ್ತೀಚಿನ ಲೇಖನಗಳು',
      birthTitle: 'ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್ (ಸಲ್) ಜನನ ಮತ್ತು ಆರಂಭಿಕ ಜೀವನ',
      birthExcerpt: 'ಮಕ್ಕಾದಲ್ಲಿ ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್ ಆರಂಭಿಕ ವರ್ಷಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, 570 CE ನಲ್ಲಿ ಅವರ ಜನನದಿಂದ ಖದೀಜ (ರಲಿ) ಜೊತೆ ವಿವಾಹದವರೆಗೆ.',
      revelationTitle: 'ಮೊದಲ ವಾಹಿ ಮತ್ತು ಪ್ರವಾದಿತ್ವದ ಆರಂಭ',
      revelationExcerpt: 'ಹಿರಾ ಗುಹೆಯಲ್ಲಿ ಆ ಕ್ಷಣವು ಫರಿಶ್ತೆ ಜಿಬ್ರೀಲ್ ಮೊದಲ ಬಾರಿಗೆ ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್‌ನನ್ನು ಇಸ್ಲಾಮಿನ ಸಂದೇಶದೊಂದಿಗೆ ಕಂಡಾಗ.',
      migrationTitle: 'ಮದೀನಾಗೆ ಹಿಜ್ರ (ವಲಸೆ)',
      migrationExcerpt: 'ಮಕ್ಕಾದಿಂದ ಮದೀನಾಗೆ ಇಸ್ಲಾಮಿಕ್ ಕ್ಯಾಲೆಂಡರ್‌ನ ಆರಂಭವನ್ನು ಗುರುತಿಸಿದ ಐತಿಹಾಸಿಕ ಪ್ರಯಾಣ.',
      abuBakrTitle: 'ಅಬೂಬಕ್ರ್: ಮೊದಲ ಖಲೀಫ',
      abuBakrExcerpt: 'ಇಸ್ಲಾಮಿನ ಮೊದಲ ಖಲೀಫ ಮತ್ತು ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್‌ನ ಹತ್ತಿರದ ಸಹಾಬಿ ಅಬೂಬಕ್ರ್ (ರಲಿ) ಜೀವನ ಮತ್ತು ನಾಯಕತ್ವ.',
    },
    sidebar: {
      categories: 'ವರ್ಗಗಳು',
      prophetMuhammad: 'ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್',
      earlyIslam: 'ಮುಂಚಿನ ಇಸ್ಲಾಂ',
      companions: 'ಸಹಾಬಿಗಳು',
      civilization: 'ಇಸ್ಲಾಮಿಕ್ ನಾಗರಿಕತೆ',
      popularPosts: 'ಜನಪ್ರಿಯ ಪೋಸ್ಟ್‌ಗಳು',
      recentPosts: 'ಇತ್ತೀಚಿನ ಪೋಸ್ಟ್‌ಗಳು',
      tags: 'ಟ್ಯಾಗ್‌ಗಳು',
      newsletter: 'ವಾರ್ತಾಪತ್ರಿಕೆ',
      newsletterDescription: 'ಇತ್ತೀಚಿನ ಲೇಖನಗಳು ಮತ್ತು ಒಳನೋಟಗಳೊಂದಿಗೆ ನವೀಕರಿಸಲ್ಪಟ್ಟಿರಿ.',
      subscribe: 'ಚಂದಾದಾರರಾಗಿ',
      emailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ',
    },
    footer: {
      description: 'ಇಸ್ಲಾಮಿನ ಸಮೃದ್ಧ ಪರಂಪರೆಯನ್ನು ಕಂಡುಕೊಳ್ಳಿ, ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್ (ಸಲ್) ಬಗ್ಗೆ ತಿಳಿಯಿರಿ, ಇಸ್ಲಾಮಿಕ್ ನಾಗರಿಕತೆಯ ಸುವರ್ಣ ಯುಗವನ್ನು ಅನ್ವೇಷಿಸಿ.',
      quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      categories: 'ವರ್ಗಗಳು',
      contact: 'ಸಂಪರ್ಕ',
      followUs: 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
      copyright: '© 2024 ಇಸ್ಲಾಮಿಕ್ ಇತಿಹಾಸ. ಎಲ್ಲ ಹಕ್ಕುಗಳೂ ಕಾಯ್ದುಕೊಳ್ಳಲಾಗಿದೆ.',
    },
  },
};

export function getTranslation(languageCode: string): Translations {
  return translations[languageCode] || translations.en;
}

export function t(languageCode: string, key: string): string {
  const translation = getTranslation(languageCode);
  const keys = key.split('.');
  let value: any = translation;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
