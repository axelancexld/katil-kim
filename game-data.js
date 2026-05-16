// PROFESYONEL SEVİYE - KATİL KİM? 
// Çok karmaşık, çok zor, çok detaylı

const gameData = {
    difficulty: 'EXPERT',
    totalClues: 50,
    redHerrings: 20,
    hiddenSecrets: 12,
    
    // KURBAN
    victim: {
        name: "Deniz Yılmaz",
        age: 32,
        profession: "Teknoloji Girişimcisi & Melek Yatırımcı",
        netWorth: "45 Milyon TL",
        lastWords: "Sen... sen miydin?",
        timeOfDeath: "22:43",
        causeOfDeath: "Siyanür zehirlenmesi",
        bloodType: "AB Rh-",
        darkSecrets: [
            "Kripto para ile kara para aklıyordu",
            "3 farklı kişiyle gizli ilişkisi vardı",
            "Geçmişte bir trafik kazasında birini öldürdü (gizlendi)",
            "Offshore hesaplarda 10 milyon dolar saklıyordu",
            "Şantaj yaparak rakiplerini yok ediyordu"
        ]
    },
    
    // 8 ŞÜPHELİ - HER BİRİ ÇOK DETAYLI
    suspects: [
        {
            id: 1,
            name: "Elif Kaya",
            age: 29,
            profession: "Mimar & Kimya Mühendisi",
            emoji: "👩‍💼",
            motive: "8 milyon TL dolandırıldı, şirketi iflas etti",
            alibi: "22:15-22:30 mutfakta",
            alibiStrength: "Zayıf - Cem tanık ama o da şüpheli",
            secrets: [
                "Kimya mühendisi - zehir uzmanı",
                "Deniz'e tehdit mesajı göndermiş",
                "Eldivenli görülmüş",
                "Deniz'le gizli ilişkisi varmış",
                "Deniz'in ofisine girip belge çalmış"
            ],
            phoneActivity: [
                { time: "22:10", contact: "Bilinmeyen", type: "gelen", duration: "3dk" },
                { time: "22:23", contact: "Cem", type: "giden", duration: "45sn" }
            ],
            fingerprints: ["Mutfak", "Şarap şişesi", "Deniz'in odası"],
            toxicologyKnowledge: 10, // 10 üzerinden
            psychProfile: "Planlı, intikamcı, soğukkanlı",
            isKiller: false,
            redHerring: "Çok şüpheli görünüyor ama masum"
        },
        {
            id: 2,
            name: "Kaan Demir",
            age: 35,
            profession: "Ceza Avukatı",
            emoji: "👨‍⚖️",
            motive: "Karısı Deniz'le aldatıldı",
            alibi: "22:15-22:30 yemek masasında",
            alibiStrength: "Güçlü - Ayşe ve Burak tanık",
            secrets: [
                "3 zehirlenme davasını kazanmış",
                "Deniz'e 'hesabını vereceksin' demiş",
                "Başka birini tutmuş olabilir",
                "Karısı hamile kalmış Deniz'den",
                "O gece çok sakin - fazla sakin"
            ],
            phoneActivity: [
                { time: "21:45", contact: "Zeynep", type: "giden", duration: "12dk" },
                { time: "22:18", contact: "Bilinmeyen", type: "gelen", duration: "2dk" }
            ],
            fingerprints: ["Yemek masası", "Kendi kadehi", "Salon"],
            toxicologyKnowledge: 7,
            psychProfile: "Kontrollü öfke, manipülatif, yüksek IQ",
            isKiller: false,
            redHerring: "Güçlü motif ama masadaydı"
        },
        {
            id: 3,
            name: "Selin Arslan",
            age: 27,
            profession: "Acil Servis Doktoru",
            emoji: "👩‍⚕️",
            motive: "Aldatıldı, terk edildi, itibarı zedelendi",
            alibi: "22:15-22:25 banyoda, 22:25'te döndü",
            alibiStrength: "Çok Zayıf - Tanık yok",
            secrets: [
                "Hastaneden siyanür çalmış",
                "Günlüğünde intikam planları",
                "Banyoda değil mutfaktaydı",
                "Deniz'e 'müdahale etti' ama bekledi",
                "Doktor - zehir ve zamanlama uzmanı"
            ],
            phoneActivity: [
                { time: "22:05", contact: "Hastane", type: "gelen", duration: "5dk" },
                { time: "22:20-22:25", contact: "Yok", type: "-", duration: "-" }
            ],
            fingerprints: ["Banyo", "Mutfak (gizli)", "Kadeh yakını"],
            dnaFound: true, // Mutfakta saç teli
            toxicologyKnowledge: 10,
            psychProfile: "Travma, depresyon, intikam obsesyonu",
            isKiller: true, // *** GERÇEK KATİL ***
            killingMethod: "22:20'de mutfağa gitti, kadehteki şaraba siyanür koydu, 22:25'te döndü"
        },
        {
            id: 4,
            name: "Mert Yıldız",
            age: 31,
            profession: "Yazılım Geliştirici",
            emoji: "👨‍💻",
            motive: "Startup fikri çalındı, 20M TL kaybetti",
            alibi: "22:00-22:30 bahçede telefonda",
            alibiStrength: "Çok Zayıf - Tanık yok",
            secrets: [
                "Dark web'de cinayet araştırması",
                "Telefonu 22:15-22:30 kapalı",
                "Bahçeden mutfağa girebilirdi",
                "Telefon görüşmesi yok kayıtlarda",
                "15M TL dava açacaktı"
            ],
            phoneActivity: [
                { time: "21:58", contact: "Yatırımcı", type: "giden", duration: "8dk" },
                { time: "22:15-22:30", contact: "KAPALI", type: "-", duration: "-" }
            ],
            fingerprints: ["Bahçe", "Mutfak penceresi dışı"],
            toxicologyKnowledge: 3,
            psychProfile: "Paranoya, stres, teknik zeka",
            isKiller: false,
            redHerring: "Dark web ve kapalı telefon çok şüpheli"
        },
        {
            id: 5,
            name: "Ayşe Çelik",
            age: 45,
            profession: "Eski Eczacı",
            emoji: "👩",
            motive: "5M TL dolandırıldı, evi hacizde",
            alibi: "22:15-22:30 salonda müzik",
            alibiStrength: "Orta - Kaan ve Burak tanık",
            secrets: [
                "Eczacı - ilaç ve zehir bilgisi",
                "Deniz'den en çok kazanan kişi",
                "Çok huzurlu görünüyordu",
                "'Sessiz sular derin akar' demiş",
                "Miras alacak"
            ],
            phoneActivity: [
                { time: "22:12", contact: "Banka", type: "gelen", duration: "4dk" }
            ],
            fingerprints: ["Salon", "Müzik çalar"],
            toxicologyKnowledge: 9,
            psychProfile: "Sakin, sabırlı, gizli öfke",
            isKiller: false,
            redHerring: "Eczacı ve miras motifi güçlü"
        },
        {
            id: 6,
            name: "Cem Öztürk",
            age: 38,
            profession: "Restoran Sahibi",
            emoji: "👨‍🍳",
            motive: "Restoran iflas etti, 8M TL borç",
            alibi: "22:00-22:30 mutfakta",
            alibiStrength: "Zayıf - Elif tanık ama o da şüpheli",
            secrets: [
                "Yemeklere tam erişim",
                "'Yemeğini zehir ederim' demiş",
                "Elif ile gizli anlaşma",
                "Çok gergin görünüyordu",
                "Mutfakta sürekli"
            ],
            phoneActivity: [
                { time: "22:08", contact: "Tedarikçi", type: "giden", duration: "6dk" },
                { time: "22:23", contact: "Elif", type: "gelen", duration: "45sn" }
            ],
            fingerprints: ["Mutfak her yerde", "Yemekler", "Şişeler"],
            dnaFound: true,
            toxicologyKnowledge: 4,
            psychProfile: "İmpulsif, öfkeli, stresli",
            isKiller: false,
            redHerring: "Mutfakta ve yemeklere erişim var"
        },
        {
            id: 7,
            name: "Zeynep Demir",
            age: 32,
            profession: "Moda Tasarımcısı",
            emoji: "👗",
            motive: "Deniz'den hamile, kürtaj istedi",
            alibi: "22:15-22:30 üst kat telefonda",
            alibiStrength: "Zayıf - Tanık yok",
            secrets: [
                "Deniz'le 6 ay gizli ilişki",
                "Hamile kaldı, Deniz kürtaj istedi",
                "Kaan'a öldürmesini söylemiş olabilir",
                "Telefon kaydı yok",
                "Çok rahatlamış görünüyordu"
            ],
            phoneActivity: [
                { time: "22:10", contact: "Bilinmeyen", type: "giden", duration: "15dk" },
                { time: "22:28", contact: "Kaan", type: "giden", duration: "2dk" }
            ],
            fingerprints: ["Yatak odası", "Merdiven"],
            toxicologyKnowledge: 1,
            psychProfile: "Manipülatif, duygusal, çıkarcı",
            isKiller: false,
            redHerring: "Güçlü motif ama üst kattaydı"
        },
        {
            id: 8,
            name: "Burak Yılmaz",
            age: 28,
            profession: "Özel Güvenlik",
            emoji: "🕴️",
            motive: "Deniz kız kardeşini taciz etti",
            alibi: "22:00-22:30 villa girişinde",
            alibiStrength: "Güçlü - Kamera var (ama 5dk kapalı)",
            secrets: [
                "Kamerayı 22:15'te kapattı",
                "Silah taşıyor",
                "'Hesabını vereceksin' demiş",
                "Çok gergin görünüyordu",
                "Kız kardeşi taciz edildi"
            ],
            phoneActivity: [
                { time: "22:15", contact: "Kız kardeşi", type: "gelen", duration: "3dk" },
                { time: "22:30", contact: "112", type: "giden", duration: "5dk" }
            ],
            fingerprints: ["Villa girişi", "Güvenlik paneli"],
            hasGunpowderResidue: true,
            toxicologyKnowledge: 1,
            psychProfile: "Disiplinli, gizli öfke",
            isKiller: false,
            redHerring: "Kamerayı kapattı ve güçlü motif"
        }
    ],
    
    // MESAJLAR - ÇOK KARMAŞIK VE YANILTICI
    messages: [
        {
            id: 1,
            title: "Elif & Deniz",
            date: "13 Mayıs 2026",
            participants: ["Elif", "Deniz"],
            conversation: [
                { sender: "Elif", text: "Yarınki yemeğe geliyorum ama seninle konuşmamız lazım.", time: "14:23", type: "received" },
                { sender: "Deniz", text: "Ne hakkında?", time: "14:25", type: "sent" },
                { sender: "Elif", text: "Paramı geri istiyorum. Son şansın bu.", time: "14:27", type: "received", suspicious: true },
                { sender: "Deniz", text: "Sakin ol, hallederiz.", time: "14:30", type: "sent" },
                { sender: "Elif", text: "Halletmezsen pişman olursun. Elimde kanıtlar var.", time: "14:35", type: "received", suspicious: true },
                { sender: "Deniz", text: "Tehdit mi ediyorsun?", time: "14:37", type: "sent" },
                { sender: "Elif", text: "Hayır, söz veriyorum. 🧪", time: "14:40", type: "received", suspicious: true },
                { sender: "Deniz", text: "O emoji ne demek?", time: "14:42", type: "sent" },
                { sender: "Elif", text: "Yarın anlarsın.", time: "14:45", type: "received", suspicious: true }
            ]
        },
        {
            id: 2,
            title: "Kaan & Deniz",
            date: "12 Mayıs 2026",
            participants: ["Kaan", "Deniz"],
            conversation: [
                { sender: "Kaan", text: "Karımla olan mesajlarını gördüm.", time: "22:15", type: "received", suspicious: true },
                { sender: "Deniz", text: "Yanlış anlama dostum, iş konuşuyorduk.", time: "22:18", type: "sent" },
                { sender: "Kaan", text: "Yalancı. HAMİLE KALDI. Ama merak etme, hesabını vereceğin.", time: "22:20", type: "received", suspicious: true },
                { sender: "Deniz", text: "Tehdit mi ediyorsun?", time: "22:22", type: "sent" },
                { sender: "Kaan", text: "Hayır, söz veriyorum. Avukatım. Nasıl yapılacağını bilirim. 😊", time: "22:25", type: "received", suspicious: true },
                { sender: "Deniz", text: "Saçmalama Kaan.", time: "22:27", type: "sent" },
                { sender: "Kaan", text: "Yarın görüşürüz. Son görüşmemiz olacak. 🍷", time: "22:30", type: "received", suspicious: true }
            ]
        },
        {
            id: 3,
            title: "Selin & Deniz",
            date: "10 Mayıs 2026",
            participants: ["Selin", "Deniz"],
            conversation: [
                { sender: "Selin", text: "Yemeğe geleceğim. Sürprizim var. 💉", time: "19:45", type: "received", suspicious: true },
                { sender: "Deniz", text: "Ne sürprizi?", time: "19:50", type: "sent" },
                { sender: "Selin", text: "Göreceksin. Beni terk ettiğin günü unutmayacaksın.", time: "19:52", type: "received", suspicious: true },
                { sender: "Deniz", text: "Selin lütfen, geçmişi geride bırak.", time: "19:55", type: "sent" },
                { sender: "Selin", text: "Bazı şeyler geride kalmaz. Doktor olarak söylüyorum, acı çabuk geçer. 😈", time: "20:00", type: "received", suspicious: true },
                { sender: "Deniz", text: "Ne demek istiyorsun?", time: "20:05", type: "sent" },
                { sender: "Selin", text: "14 Mayıs. Unutma bu tarihi. Son günün.", time: "20:10", type: "received", suspicious: true }
            ]
        },
        {
            id: 4,
            title: "Mert & Deniz",
            date: "14 Mayıs 2026",
            participants: ["Mert", "Deniz"],
            conversation: [
                { sender: "Mert", text: "Bu gece konuşacağız. Fikrimi çaldın.", time: "10:30", type: "received" },
                { sender: "Deniz", text: "Hangi fikir? Saçmalama.", time: "10:35", type: "sent" },
                { sender: "Mert", text: "20 milyon TL çaldın benden. Ya tazminat ödersin ya da...", time: "10:40", type: "received", suspicious: true },
                { sender: "Deniz", text: "Ya da ne?", time: "10:42", type: "sent" },
                { sender: "Mert", text: "Dark web'de çok şey öğrendim. İz bırakmadan nasıl yapılır mesela.", time: "10:45", type: "received", suspicious: true },
                { sender: "Deniz", text: "Tehdit mi bu?", time: "10:47", type: "sent" },
                { sender: "Mert", text: "Hayır, bilgi. Bu gece göreceğiz. 💀", time: "10:50", type: "received", suspicious: true }
            ]
        },
        {
            id: 5,
            title: "Selin & Bilinmeyen",
            date: "13 Mayıs 2026",
            participants: ["Selin", "???"],
            encrypted: true,
            conversation: [
                { sender: "Selin", text: "Yarın yapacağım.", time: "23:15", type: "sent", suspicious: true },
                { sender: "???", text: "Emin misin? Geri dönüşü yok.", time: "23:17", type: "received" },
                { sender: "Selin", text: "Eminim. Her şeyi planladım. Kimse anlamayacak.", time: "23:20", type: "sent", suspicious: true },
                { sender: "???", text: "Hastaneden aldın mı?", time: "23:22", type: "received", suspicious: true },
                { sender: "Selin", text: "Evet. Siyanür. Hızlı ve etkili. 15 dakikada biter.", time: "23:25", type: "sent", suspicious: true },
                { sender: "???", text: "Tanık olmasın.", time: "23:27", type: "received" },
                { sender: "Selin", text: "Olmayacak. 22:20'de mutfağa gideceğim. Kamera kapalı olacak.", time: "23:30", type: "sent", suspicious: true },
                { sender: "???", text: "Başarılar. Hak ediyor.", time: "23:32", type: "received" },
                { sender: "Selin", text: "Bu mesajları sil. 🔥", time: "23:35", type: "sent", suspicious: true }
            ],
            note: "Bu mesajlar Selin'in telefonundan silindi ama polis teknik ekibi kurtardı!"
        },
        {
            id: 6,
            title: "Elif & Cem",
            date: "14 Mayıs 2026",
            participants: ["Elif", "Cem"],
            conversation: [
                { sender: "Elif", text: "Bu gece planı uyguluyoruz.", time: "18:00", type: "sent" },
                { sender: "Cem", text: "Emin misin? Riskli.", time: "18:05", type: "received" },
                { sender: "Elif", text: "Başka çaremiz yok. İkimiz de battık.", time: "18:10", type: "sent", suspicious: true },
                { sender: "Cem", text: "Ben mutfaktayım, sen de. Birbirimize alibi oluruz.", time: "18:15", type: "received", suspicious: true },
                { sender: "Elif", text: "Tamam. 22:20'de hazır ol.", time: "18:20", type: "sent", suspicious: true },
                { sender: "Cem", text: "Anlaştık. 🤝", time: "18:25", type: "received" }
            ],
            note: "Elif ve Cem birlikte mi çalışıyor? Yoksa sadece alibi mi oluşturuyorlar?"
        },
        {
            id: 7,
            title: "Kaan & Zeynep",
            date: "14 Mayıs 2026, 21:45",
            participants: ["Kaan", "Zeynep"],
            conversation: [
                { sender: "Kaan", text: "Bu gece bitecek.", time: "21:45", type: "sent", suspicious: true },
                { sender: "Zeynep", text: "Nasıl yapacaksın?", time: "21:47", type: "received" },
                { sender: "Kaan", text: "Bilmesen daha iyi. Ama merak etme, iz bırakmam.", time: "21:50", type: "sent", suspicious: true },
                { sender: "Zeynep", text: "Korkuyorum.", time: "21:52", type: "received" },
                { sender: "Kaan", text: "Korkma. Ben avukatım. 3 zehirlenme davası kazandım. Nasıl yapılacağını bilirim.", time: "21:55", type: "sent", suspicious: true },
                { sender: "Zeynep", text: "Yakalanırsan?", time: "21:57", type: "received" },
                { sender: "Kaan", text: "Yakalanmam. Masadayım, tanıklarım var. Mükemmel alibi.", time: "22:00", type: "sent", suspicious: true }
            ]
        },
        {
            id: 8,
            title: "Grup: Yemek Daveti",
            date: "14 Mayıs 2026",
            participants: ["Deniz", "Elif", "Kaan", "Selin", "Mert", "Ayşe", "Cem", "Zeynep", "Burak"],
            conversation: [
                { sender: "Deniz", text: "Herkese merhaba! Bu akşam 20:00'de villada görüşüyoruz. 🍷", time: "15:00", type: "sent" },
                { sender: "Elif", text: "Geliyorum. Konuşacaklarımız var. 😊", time: "15:05", type: "received" },
                { sender: "Kaan", text: "Oradayım. Son görüşmemiz olabilir. 😏", time: "15:06", type: "received", suspicious: true },
                { sender: "Selin", text: "Merakla bekliyorum. Sürprizim var. 💉", time: "15:07", type: "received", suspicious: true },
                { sender: "Mert", text: "Geliyorum. Hesaplaşma zamanı.", time: "15:10", type: "received", suspicious: true },
                { sender: "Ayşe", text: "Tatlı getireyim mi yeğenim?", time: "15:12", type: "received" },
                { sender: "Cem", text: "Ben yemekleri hazırlıyorum. Özel soslarım var. 😈", time: "15:15", type: "received", suspicious: true },
                { sender: "Zeynep", text: "Kaan'la geleceğiz.", time: "15:18", type: "received" },
                { sender: "Burak", text: "Güvenlik hazır. Kimse kaçamaz. 🔒", time: "15:20", type: "received", suspicious: true },
                { sender: "Deniz", text: "Harika! Özel bir gece olacak. Unutulmaz. 🎭", time: "15:25", type: "sent" }
            ]
        }
    ],

    
    // KANITLAR - 25+ KANITLA ÇOK KARMAŞIK
    evidence: [
        { id: 1, name: "Zehirli Şarap Kadehi", icon: "🍷", description: "Deniz'in içtiği kadeh. Siyanür tespit edildi.", clue: "Kadeh temizlenmiş - parmak izi yok. Profesyonel iş.", importance: 10 },
        { id: 2, name: "Şarap Şişesi", icon: "🍾", description: "Elif'in getirdiği şişe.", clue: "Şişede zehir yok. Zehir sadece kadehte. Elif masum olabilir.", importance: 8 },
        { id: 3, name: "Selin'in Çantası", icon: "👜", description: "Boş cam şişe bulundu.", clue: "Şişede siyanür kalıntısı! Selin 'ilaç' dedi ama...", importance: 10 },
        { id: 4, name: "Güvenlik Kamerası", icon: "📹", description: "Villa girişi kayıtları.", clue: "22:15-22:20 arası 5 dakika kapandı. Burak mı kapattı?", importance: 9 },
        { id: 5, name: "Elif'in Eldivenleri", icon: "🧤", description: "Lateks eldivenler.", clue: "Neden yemek davetine eldiven getirilir? Parmak izi bırakmamak için mi?", importance: 7 },
        { id: 6, name: "Mert'in Telefonu", icon: "📱", description: "22:15-22:30 kapalı.", clue: "Mert 'şarj bitti' dedi ama %67'deydi. Yalan söylüyor!", importance: 8 },
        { id: 7, name: "Adli Tıp Raporu", icon: "📋", description: "Otopsi raporu.", clue: "Siyanür 22:20-22:25 arası verildi. 15 dakikada öldü.", importance: 10 },
        { id: 8, name: "Mutfak İzleri", icon: "🔪", description: "Mutfak kayıtları.", clue: "Cem ve Elif mutfaktaydı. Ama Selin de 22:20'de gitmiş - GİZLİCE!", importance: 10 },
        { id: 9, name: "Kaan'ın Notları", icon: "📝", description: "Cebinde not kağıdı.", clue: "'Deniz - 22:30 - Şarap - Son şans' yazıyor. Kaan planlıyor muydu?", importance: 9 },
        { id: 10, name: "Selin'in Hastane Kayıtları", icon: "🏥", description: "İlaç deposu kayıtları.", clue: "3 ay önce siyanür içeren ilaç KAYBOLMUŞ! Selin mi çaldı?", importance: 10 },
        { id: 11, name: "Parmak İzleri Analizi", icon: "👆", description: "Tüm parmak izleri.", clue: "Kadehte yok. Şişede Elif. Mutfakta herkes. Biri temizledi!", importance: 8 },
        { id: 12, name: "Selin'in Günlüğü", icon: "📖", description: "Evinde bulundu.", clue: "'Deniz bedelini ödeyecek. 14 Mayıs.' - İTİRAF MI BU?", importance: 10 },
        { id: 13, name: "DNA Analizi", icon: "🧬", description: "Mutfakta saç teli.", clue: "Selin'in saçı mutfakta bulundu. Ama 'banyodaydım' demişti!", importance: 10 },
        { id: 14, name: "Telefon Kayıtları", icon: "📞", description: "Tüm aramalar.", clue: "Selin'in 22:20-22:25 arası kaydı yok. Neredeydi?", importance: 9 },
        { id: 15, name: "Siyanür Şişesi", icon: "⚗️", description: "Selin'in çantasında.", clue: "Boş ama siyanür kalıntısı var. Doğrudan kanıt!", importance: 10 },
        { id: 16, name: "Elif-Cem Mesajları", icon: "💬", description: "Gizli plan mesajları.", clue: "'22:20'de hazır ol' - Ne planlıyorlardı? Alibi mi?", importance: 7 },
        { id: 17, name: "Kaan-Zeynep Mesajları", icon: "💬", description: "Cinayet planı gibi.", clue: "'Bu gece bitecek' - Ama Kaan masadaydı. Nasıl yaptı?", importance: 8 },
        { id: 18, name: "Selin-Bilinmeyen Mesajları", icon: "💬", description: "ŞİFRELİ MESAJLAR!", clue: "Selin birine 'siyanür' ve '22:20' demiş. KİME?", importance: 10 },
        { id: 19, name: "Mert'in Tarayıcı Geçmişi", icon: "💻", description: "Dark web aramaları.", clue: "'İz bırakmadan cinayet' aramış. Ama sadece araştırma mı?", importance: 6 },
        { id: 20, name: "Burak'ın Silahı", icon: "🔫", description: "Barut kalıntısı var.", clue: "Ama Deniz zehirlendi, vurulmadı. Sahte ipucu!", importance: 3 },
        { id: 21, name: "Deniz'in Son Sözleri", icon: "💀", description: "'Sen... sen miydin?'", clue: "Deniz katili tanıyordu! Yakın biri olmalı.", importance: 9 },
        { id: 22, name: "Zaman Damgaları", icon: "⏰", description: "Herkesin konumu.", clue: "22:20-22:25 kritik! Selin 'banyoda' ama mutfaktaydı!", importance: 10 },
        { id: 23, name: "Selin'in Psikolojik Profili", icon: "🧠", description: "Psikiyatrist raporu.", clue: "Depresyon, intikam obsesyonu, planlı davranış. TEHLİKELİ!", importance: 8 },
        { id: 24, name: "Deniz'in Sigorta Poliçesi", icon: "📄", description: "10 milyon TL.", clue: "Ayşe lehine! Ama Ayşe salondaydı.", importance: 5 },
        { id: 25, name: "Mutfak Güvenlik Kamerası", icon: "📹", description: "İç kamera.", clue: "22:15-22:20 arası KAPALI! Burak mı kapattı? Yoksa başkası mı?", importance: 9 }
    ],
    
    // ZAMAN ÇİZELGESİ - ÇOK DETAYLI
    timeline: [
        { time: "19:30", event: "Elif ve Kaan geldi", person: "Elif, Kaan", importance: 3 },
        { time: "19:45", event: "Selin geldi. Çantasını salona bıraktı.", person: "Selin", importance: 5 },
        { time: "19:50", event: "Mert ve Zeynep geldi", person: "Mert, Zeynep", importance: 3 },
        { time: "20:00", event: "Ayşe, Cem ve Burak geldi. Herkes toplandı.", person: "Herkes", importance: 4 },
        { time: "20:15", event: "Yemek başladı. Cem mutfaktan servis yaptı.", person: "Cem", importance: 4 },
        { time: "20:45", event: "Herkes yemek yedi. Sohbet edildi.", person: "Herkes", importance: 2 },
        { time: "21:15", event: "Elif mutfağa gitti, şarap şişelerini getirdi.", person: "Elif", importance: 6 },
        { time: "21:30", event: "Şarap içilmeye başlandı. Deniz kadehini doldurdu.", person: "Deniz", importance: 7 },
        { time: "21:45", event: "Kaan, Zeynep'i aradı. 12 dakika konuştu.", person: "Kaan", importance: 7 },
        { time: "22:00", event: "Mert bahçeye çıktı. 'Telefon görüşmesi' dedi.", person: "Mert", importance: 8 },
        { time: "22:05", event: "Selin'i hastane aradı. 5 dakika konuştu.", person: "Selin", importance: 6 },
        { time: "22:10", event: "Ayşe salonda müzik açtı. Şarkı söyledi.", person: "Ayşe", importance: 4 },
        { time: "22:12", event: "Ayşe'yi banka aradı. Haciz konuşuldu.", person: "Ayşe", importance: 5 },
        { time: "22:15", event: "⚠️ GÜVENLİK KAMERASI KAPANDI! Burak 'elektrik kesintisi' dedi.", person: "Burak", importance: 10 },
        { time: "22:15", event: "Mert'in telefonu kapandı. 'Şarj bitti' dedi.", person: "Mert", importance: 9 },
        { time: "22:15", event: "Burak kız kardeşiyle konuştu. 3 dakika.", person: "Burak", importance: 6 },
        { time: "22:18", event: "Kaan bilinmeyen numaradan arandı. 2 dakika.", person: "Kaan", importance: 8 },
        { time: "22:20", event: "⚠️⚠️ KRİTİK! Selin 'banyoya gitti' - AMA MUTFAĞA GİTTİ!", person: "Selin", importance: 10 },
        { time: "22:20", event: "Güvenlik kamerası hala kapalı. 5 dakika karanlık!", person: "?", importance: 10 },
        { time: "22:23", event: "Elif, Cem'i aradı. 45 saniye konuştu.", person: "Elif, Cem", importance: 7 },
        { time: "22:25", event: "⚠️ Selin 'banyodan döndü'. Deniz şarap kadehinden içti.", person: "Selin, Deniz", importance: 10 },
        { time: "22:28", event: "Deniz fenalaşmaya başladı. Nefes alamıyordu.", person: "Deniz", importance: 10 },
        { time: "22:30", event: "Selin Deniz'e 'müdahale etti'. Ama kurtarmadı!", person: "Selin", importance: 10 },
        { time: "22:30", event: "Mert'in telefonu açıldı.", person: "Mert", importance: 7 },
        { time: "22:35", event: "Deniz öldü. Ambulans çağrıldı.", person: "Deniz", importance: 10 },
        { time: "22:43", event: "Deniz'in son sözleri: 'Sen... sen miydin?'", person: "Deniz", importance: 10 },
        { time: "22:45", event: "Polis geldi. Kimse villadan ayrılmadı.", person: "Herkes", importance: 8 }
    ],
    
    // ÇÖZÜM - ÇOK DETAYLI
    solution: {
        killer: "Selin Arslan",
        killerID: 3,
        method: "Siyanür zehirlenmesi",
        when: "22:20-22:25",
        where: "Mutfak - Deniz'in kadehine",
        why: "İntikam - Aldatıldı, terk edildi, itibarı zedelendi",
        how: `
            <div class="solution-detailed">
                <h2>🎯 KATİL: SELİN ARSLAN</h2>
                
                <div class="solution-block">
                    <h3>📋 NASIL YAPTI?</h3>
                    <p><strong>1. Hazırlık (3 ay önce):</strong> Selin, çalıştığı hastaneden siyanür içeren bir ilacı çaldı. 
                    Hastane kayıtlarında 'kayıp ilaç' raporu var.</p>
                    
                    <p><strong>2. Plan (13 Mayıs):</strong> Bilinmeyen biriyle şifreli mesajlaştı. 
                    "Yarın yapacağım. 22:20'de mutfağa gideceğim. Kamera kapalı olacak." dedi.</p>
                    
                    <p><strong>3. Uygulama (14 Mayıs, 22:20):</strong></p>
                    <ul>
                        <li>22:15: Burak güvenlik kamerasını kapattı (elektrik kesintisi bahanesi)</li>
                        <li>22:20: Selin "banyoya gidiyorum" dedi ama mutfağa gitti</li>
                        <li>22:20-22:25: Mutfakta Deniz'in şarap kadehine siyanür koydu</li>
                        <li>22:25: "Banyodan döndü" ve salona geldi</li>
                        <li>22:25: Deniz kadehinden içti</li>
                        <li>22:28: Deniz fenalaşmaya başladı</li>
                        <li>22:30: Selin "müdahale etti" ama aslında ölmesini bekledi</li>
                        <li>22:43: Deniz öldü. Son sözleri: "Sen... sen miydin?"</li>
                    </ul>
                    
                    <p><strong>4. Profesyonel İş:</strong> Doktor olduğu için siyanürün dozajını, 
                    etkisini ve zamanlamasını mükemmel hesapladı. Kadehi temizleyip parmak izini sildi.</p>
                </div>
                
                <div class="solution-block">
                    <h3>🔍 KANITLAR:</h3>
                    <ul>
                        <li>✅ Selin'in çantasında siyanür kalıntısı olan boş şişe</li>
                        <li>✅ Hastaneden 3 ay önce siyanür içeren ilaç kaybolmuş</li>
                        <li>✅ Mutfakta Selin'in DNA'sı bulundu (saç teli)</li>
                        <li>✅ 22:20-22:25 arası Selin'in telefon kaydı yok</li>
                        <li>✅ Selin "banyodaydım" dedi ama mutfaktaydı</li>
                        <li>✅ Günlüğünde: "Deniz bedelini ödeyecek. 14 Mayıs."</li>
                        <li>✅ Bilinmeyen biriyle şifreli mesajlar: "Siyanür. 22:20. Mutfak."</li>
                        <li>✅ Deniz'e "müdahale etti" ama kurtarmadı</li>
                        <li>✅ Doktor - zehir ve zamanlama uzmanı</li>
                        <li>✅ Deniz'in son sözleri: "Sen... sen miydin?" - Selin'i tanıdı</li>
                    </ul>
                </div>
                
                <div class="solution-block">
                    <h3>💔 MOTİF:</h3>
                    <p>Deniz, Selin'i 2 yıl önce aldattı ve terk etti. Selin'in itibarını zedeledi. 
                    Selin depresyona girdi, işini kaybetti ve intikam planları yaptı. 
                    Günlüğünde "Deniz bana yaptıklarının bedelini ödeyecek" yazmıştı.</p>
                </div>
                
                <div class="solution-block">
                    <h3>🎭 DİĞER ŞÜPHELİLER NEDEN MASUM?</h3>
                    
                    <p><strong>Elif:</strong> Kimya mühendisi ve eldivenli ama şarap şişesinde zehir yoktu. 
                    Zehir sadece kadehte bulundu. Elif şişeyi getirdi ama zehirlemedi.</p>
                    
                    <p><strong>Kaan:</strong> Güçlü motif ve "bu gece bitecek" mesajı ama o sırada yemek masasındaydı. 
                    Ayşe ve Burak tanık. Mutfağa gidemezdi.</p>
                    
                    <p><strong>Mert:</strong> Dark web aramaları ve kapalı telefon çok şüpheli ama bahçedeydi. 
                    Mutfağa erişimi yoktu. Sadece dava için araştırma yapıyordu.</p>
                    
                    <p><strong>Ayşe:</strong> Eczacı ve miras motifi güçlü ama salondaydı. 
                    Kaan ve Burak tanık. Müzik çalıyordu.</p>
                    
                    <p><strong>Cem:</strong> Mutfaktaydı ve yemeklere erişimi vardı ama zehir yemekte değil kadehte bulundu. 
                    Elif ile alibi oluşturuyorlardı ama cinayet işlemediler.</p>
                    
                    <p><strong>Zeynep:</strong> Hamile ve güçlü motif ama üst kattaydı. 
                    Mutfağa erişimi yoktu.</p>
                    
                    <p><strong>Burak:</strong> Kamerayı kapattı ama villa girişindeydi. 
                    Kamerayı Selin için mi kapattı? Yoksa tesadüf mü?</p>
                </div>
                
                <div class="solution-block">
                    <h3>🧩 GİZLİ DETAYLAR:</h3>
                    <p><strong>1. Burak'ın Rolü:</strong> Burak kamerayı 22:15'te kapattı. 
                    Bu Selin'e yardım mı yoksa tesadüf mü? Belki Burak da Deniz'den nefret ediyordu 
                    (kız kardeşini taciz etti) ve Selin'e yardım etti.</p>
                    
                    <p><strong>2. Bilinmeyen Kişi:</strong> Selin'in şifreli mesajlaştığı kişi kim? 
                    Belki bir suç ortağı vardı. Belki Burak'tı!</p>
                    
                    <p><strong>3. Elif ve Cem:</strong> "22:20'de hazır ol" mesajı ne anlama geliyor? 
                    Belki sadece alibi oluşturuyorlardı. Belki Selin'in planını biliyorlardı ama sessiz kaldılar.</p>
                    
                    <p><strong>4. Kaan'ın Planı:</strong> Kaan da Deniz'i öldürmeyi planlıyordu ama Selin daha hızlı davrandı. 
                    "Bu gece bitecek" mesajı gerçekti ama Selin önce davrandı.</p>
                </div>
                
                <p class="final-verdict">
                    🎯 <strong>SONUÇ:</strong> Selin Arslan, mükemmel bir plan yaparak Deniz'i öldürdü. 
                    Doktor olması, zehir bilgisi ve zamanlama hesabı onu mükemmel bir katil yaptı. 
                    Ama sen tüm ipuçlarını birleştirip gerçeği buldun! TEBRİKLER! 🎉
                </p>
            </div>
        `
    },
    
    // SAHTE İPUÇLARI (Oyuncuyu yanıltmak için)
    redHerrings: [
        "Elif'in eldivenleri ve kimya bilgisi onu çok şüpheli gösteriyor",
        "Kaan'ın 'bu gece bitecek' mesajı doğrudan itiraf gibi",
        "Mert'in dark web aramaları ve kapalı telefonu çok şüpheli",
        "Cem mutfakta ve 'yemeğini zehir ederim' demiş",
        "Ayşe eczacı ve miras alacak",
        "Burak kamerayı kapattı - neden?",
        "Zeynep hamile ve Deniz kürtaj istedi",
        "Elif ve Cem gizli plan yapıyorlar",
        "Kaan 3 zehirlenme davası kazanmış - uzman",
        "Mert bahçeden mutfağa girebilirdi"
    ],
    
    // GİZLİ İPUÇLARI (Zor bulunur)
    hiddenClues: [
        "Selin'in bilinmeyen biriyle şifreli mesajları - SİLİNMİŞ ama kurtarıldı",
        "Mutfakta Selin'in DNA'sı - ama 'banyodaydım' demişti",
        "22:20-22:25 arası Selin'in telefon kaydı yok",
        "Deniz'in son sözleri: 'Sen... sen miydin?' - Selin'i tanıdı",
        "Selin 'müdahale etti' ama doktor olarak kurtarabilirdi - neden kurtarmadı?",
        "Hastaneden 3 ay önce siyanür kaybolmuş - tam Selin'in çalıştığı dönem",
        "Selin'in günlüğünde '14 Mayıs' tarihi - olay günü!",
        "Burak kamerayı tam 22:15'te kapattı - Selin'in mutfağa gittiği saat"
    ]
};
 