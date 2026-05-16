// Oyun Verileri - Katil Kim?

const gameData = {
    // Şüpheliler
    suspects: [
        {
            id: 1,
            name: "Elif Kaya",
            age: 29,
            profession: "Mimar",
            emoji: "👩‍💼",
            relation: "Eski İş Ortağı",
            motive: "Deniz, ortak projelerinden birinde Elif'i kandırıp büyük para kaybettirdi.",
            alibi: "Yemek sırasında mutfaktaydım, şarap şişelerini getiriyordum.",
            personality: "Sakin, hesaplı, detaycı",
            secrets: [
                "Geçen ay Deniz'e tehdit mesajı göndermiş",
                "Kimya mühendisliği diploması var",
                "Olay gecesi eldivenli görülmüş"
            ],
            isKiller: false
        },
        {
            id: 2,
            name: "Kaan Demir",
            age: 35,
            profession: "Avukat",
            emoji: "👨‍⚖️",
            relation: "Yakın Arkadaş",
            motive: "Deniz, Kaan'ın karısıyla gizli bir ilişki yaşıyordu.",
            alibi: "Yemek masasındaydım, herkesle sohbet ediyordum.",
            personality: "Karizmatik, manipülatif, zeki",
            secrets: [
                "Deniz'in karısıyla mesajlaştığını biliyordu",
                "Geçmişte bir cinayet davasını kazanmış",
                "Olay gecesi çok sakin görünüyordu - fazla sakin"
            ],
            isKiller: false
        },
        {
            id: 3,
            name: "Selin Arslan",
            age: 27,
            profession: "Doktor",
            emoji: "👩‍⚕️",
            relation: "Eski Sevgili",
            motive: "Deniz, Selin'i aldattıktan sonra terk etti ve itibarını zedeledi.",
            alibi: "Banyodaydım, kendimi iyi hissetmiyordum.",
            personality: "Duygusal, intikamcı, zeki",
            secrets: [
                "Hastanede zehir ve ilaçlara erişimi var",
                "Deniz'den sonra depresyona girmiş",
                "Olay gecesi çantasında şüpheli bir şişe bulundu"
            ],
            isKiller: true // GERÇEK KATİL
        },
        {
            id: 4,
            name: "Mert Yıldız",
            age: 31,
            profession: "Yazılım Geliştirici",
            emoji: "👨‍💻",
            relation: "İş Rakibi",
            motive: "Deniz, Mert'in startup fikrini çalıp kendi şirketi olarak kurdu.",
            alibi: "Bahçedeydim, telefon görüşmesi yapıyordum.",
            personality: "İçine kapanık, sinirli, teknik",
            secrets: [
                "Deniz'e karşı dava açmayı planlıyordu",
                "Dark web'de şüpheli aramalar yapmış",
                "Olay gecesi telefonunu kapatmış"
            ],
            isKiller: false
        },
        {
            id: 5,
            name: "Ayşe Çelik",
            age: 45,
            profession: "Ev Hanımı",
            emoji: "👩",
            relation: "Deniz'in Teyzesi",
            motive: "Deniz, aileden miras konusunda Ayşe'yi dolandırdı.",
            alibi: "Salondaydım, müzik çalıyordum.",
            personality: "Nazik, sessiz, gözlemci",
            secrets: [
                "Deniz'den büyük miktarda borcu var",
                "Geçmişte eczacılık okumuş",
                "Olay gecesi çok huzurlu görünüyordu"
            ],
            isKiller: false
        },
        {
            id: 6,
            name: "Cem Öztürk",
            age: 38,
            profession: "Restoran Sahibi",
            emoji: "👨‍🍳",
            relation: "Yemek Tedarikçisi",
            motive: "Deniz, Cem'in restoranı hakkında kötü yorumlar yazıp işini bitirdi.",
            alibi: "Mutfaktaydım, yemekleri hazırlıyordum.",
            personality: "Sıcakkanlı, hırslı, hızlı öfkelenen",
            secrets: [
                "Deniz yüzünden iflas etmek üzereydi",
                "Yemeklere erişimi vardı",
                "Olay gecesi çok gergin görünüyordu"
            ],
            isKiller: false
        }
    ],

    // WhatsApp Mesajları
    messages: [
        {
            id: 1,
            title: "Elif & Deniz",
            date: "13 Mayıs 2026",
            conversation: [
                { sender: "Elif", text: "Yarınki yemeğe geliyorum ama seninle konuşmamız lazım.", time: "14:23", type: "received" },
                { sender: "Deniz", text: "Ne hakkında?", time: "14:25", type: "sent" },
                { sender: "Elif", text: "Paramı geri istiyorum. Son şansın bu.", time: "14:27", type: "received", suspicious: true },
                { sender: "Deniz", text: "Sakin ol, hallederiz.", time: "14:30", type: "sent" }
            ]
        },
        {
            id: 2,
            title: "Kaan & Deniz",
            date: "12 Mayıs 2026",
            conversation: [
                { sender: "Kaan", text: "Karımla olan mesajlarını gördüm.", time: "22:15", type: "received", suspicious: true },
                { sender: "Deniz", text: "Yanlış anlama dostum, iş konuşuyorduk.", time: "22:18", type: "sent" },
                { sender: "Kaan", text: "Yalancı. Ama merak etme, hesabını vereceğin.", time: "22:20", type: "received", suspicious: true },
                { sender: "Deniz", text: "Tehdit mi ediyorsun?", time: "22:22", type: "sent" },
                { sender: "Kaan", text: "Hayır, söz veriyorum. 😊", time: "22:25", type: "received", suspicious: true }
            ]
        },
        {
            id: 3,
            title: "Selin & Deniz",
            date: "10 Mayıs 2026",
            conversation: [
                { sender: "Selin", text: "Yemeğe geleceğim. Sürprizim var. 💉", time: "19:45", type: "received", suspicious: true },
                { sender: "Deniz", text: "Ne sürprizi?", time: "19:50", type: "sent" },
                { sender: "Selin", text: "Göreceksin. Beni terk ettiğin günü unutmayacaksın.", time: "19:52", type: "received", suspicious: true },
                { sender: "Deniz", text: "Selin lütfen, geçmişi geride bırak.", time: "19:55", type: "sent" },
                { sender: "Selin", text: "Bazı şeyler geride kalmaz. Görüşürüz. 😈", time: "20:00", type: "received", suspicious: true }
            ]
        },
        {
            id: 4,
            title: "Mert & Deniz",
            date: "14 Mayıs 2026",
            conversation: [
                { sender: "Mert", text: "Bu gece konuşacağız. Fikrimi çaldın.", time: "10:30", type: "received" },
                { sender: "Deniz", text: "Hangi fikir? Saçmalama.", time: "10:35", type: "sent" },
                { sender: "Mert", text: "Avukatlarım hazır. Ya tazminat ödersin ya da...", time: "10:40", type: "received", suspicious: true },
                { sender: "Deniz", text: "Ya da ne?", time: "10:42", type: "sent" },
                { sender: "Mert", text: "Başka yollar da var. Bu gece göreceğiz.", time: "10:45", type: "received", suspicious: true }
            ]
        },
        {
            id: 5,
            title: "Ayşe & Deniz",
            date: "13 Mayıs 2026",
            conversation: [
                { sender: "Ayşe", text: "Yeğenim, miras konusunu konuşmalıyız.", time: "16:00", type: "received" },
                { sender: "Deniz", text: "Teyze, yarın yemekte konuşuruz.", time: "16:10", type: "sent" },
                { sender: "Ayşe", text: "Beni kandırdın. Ama ben sessiz kalmayı bilirim.", time: "16:15", type: "received", suspicious: true },
                { sender: "Deniz", text: "Ne demek istiyorsun?", time: "16:20", type: "sent" },
                { sender: "Ayşe", text: "Yarın anlarsın. Sessiz sular derin akar. 🌊", time: "16:25", type: "received", suspicious: true }
            ]
        },
        {
            id: 6,
            title: "Cem & Deniz",
            date: "11 Mayıs 2026",
            conversation: [
                { sender: "Cem", text: "Yazdığın yorumlar yüzünden müşterilerim gitti!", time: "13:00", type: "received" },
                { sender: "Deniz", text: "Gerçekleri yazdım sadece.", time: "13:05", type: "sent" },
                { sender: "Cem", text: "Gerçek mi? Yalan söyledin! İflas ediyorum senin yüzünden!", time: "13:10", type: "received", suspicious: true },
                { sender: "Deniz", text: "Bana ne?", time: "13:12", type: "sent" },
                { sender: "Cem", text: "Pişman olacaksın. Yemeğini zehir ederim! Şaka şaka... ya da değil. 😏", time: "13:15", type: "received", suspicious: true }
            ]
        },
        {
            id: 7,
            title: "Grup: Yemek Daveti",
            date: "14 Mayıs 2026",
            conversation: [
                { sender: "Deniz", text: "Herkese merhaba! Bu akşam 20:00'de villada görüşüyoruz.", time: "15:00", type: "sent" },
                { sender: "Elif", text: "Tamam, geliyorum.", time: "15:05", type: "received" },
                { sender: "Kaan", text: "Oradayım.", time: "15:06", type: "received" },
                { sender: "Selin", text: "Merakla bekliyorum. 😊", time: "15:07", type: "received" },
                { sender: "Mert", text: "Geliyorum.", time: "15:10", type: "received" },
                { sender: "Ayşe", text: "Tatlı getireyim mi?", time: "15:12", type: "received" },
                { sender: "Cem", text: "Ben yemekleri hazırlıyorum zaten.", time: "15:15", type: "received" },
                { sender: "Deniz", text: "Harika! Özel bir gece olacak. 🍷", time: "15:20", type: "sent" }
            ]
        }
    ],

    // Kanıtlar
    evidence: [
        {
            id: 1,
            name: "Zehirli Şarap Kadehi",
            icon: "🍷",
            description: "Deniz'in içtiği kadeh. İçinde yüksek dozda siyanür tespit edildi.",
            clue: "Kadeh, yemek masasında Deniz'in önündeydi. Parmak izi bulunamadı - temizlenmiş.",
            locked: false
        },
        {
            id: 2,
            name: "Şarap Şişesi",
            icon: "🍾",
            description: "Masada duran şarap şişesi. Elif tarafından getirildi.",
            clue: "Şişenin içinde zehir yok. Zehir sadece Deniz'in kadehindeydi.",
            locked: false
        },
        {
            id: 3,
            name: "Selin'in Çantası",
            icon: "👜",
            description: "Selin'in çantasında bulunan küçük cam şişe.",
            clue: "Şişe boş ama içinde siyanür kalıntısı var. Selin 'ilaç şişesi' olduğunu söyledi.",
            locked: false
        },
        {
            id: 4,
            name: "Güvenlik Kamerası",
            icon: "📹",
            description: "Villa girişindeki kamera kayıtları.",
            clue: "Herkes 19:30-20:00 arası geldi. Kimse ayrılmadı. Ama 22:15'te kamera 5 dakika kapandı.",
            locked: false
        },
        {
            id: 5,
            name: "Elif'in Eldivenleri",
            icon: "🧤",
            description: "Elif'in çantasında bulunan lateks eldivenler.",
            clue: "Elif 'temizlik için' getirdiğini söyledi. Ama neden yemek davetine eldiven getirilir?",
            locked: false
        },
        {
            id: 6,
            name: "Mert'in Telefonu",
            icon: "📱",
            description: "Mert'in telefon kayıtları.",
            clue: "22:00-22:30 arası telefon kapalıydı. Mert 'şarjı bitti' dedi ama telefon %67'deydi.",
            locked: false
        },
        {
            id: 7,
            name: "Adli Tıp Raporu",
            icon: "📋",
            description: "Deniz'in otopsi raporu.",
            clue: "Ölüm nedeni: Siyanür zehirlenmesi. Zehir 22:25-22:30 arası alındı. 15 dakikada öldü.",
            locked: false
        },
        {
            id: 8,
            name: "Mutfak Kayıtları",
            icon: "🔪",
            description: "Mutfakta bulunan eşyalar ve izler.",
            clue: "Cem ve Elif mutfağa girdi. Ama Selin de 22:20'de mutfağa gitmiş - kimse görmemiş.",
            locked: false
        },
        {
            id: 9,
            name: "Kaan'ın Notları",
            icon: "📝",
            description: "Kaan'ın cebinde bulunan not kağıdı.",
            clue: "Notta yazıyor: 'Deniz - 22:30 - Şarap - Son şans'. Kaan 'iş notu' dedi.",
            locked: false
        },
        {
            id: 10,
            name: "Ayşe'nin İlaçları",
            icon: "💊",
            description: "Ayşe'nin çantasındaki ilaç kutuları.",
            clue: "Kalp ilaçları ve ağrı kesiciler. Hepsi reçeteli ve normal. Şüpheli bir şey yok.",
            locked: false
        },
        {
            id: 11,
            name: "Cem'in Mutfak Çantası",
            icon: "🎒",
            description: "Cem'in getirdiği mutfak malzemeleri.",
            clue: "İçinde baharatlar, soslar ve yemek malzemeleri var. Kimyasal madde yok.",
            locked: false
        },
        {
            id: 12,
            name: "Selin'in Hastane Kayıtları",
            icon: "🏥",
            description: "Selin'in çalıştığı hastaneden alınan kayıtlar.",
            clue: "3 ay önce ilaç deposundan 'kayıp' raporu var. Siyanür içeren bir ilaç kaybolmuş.",
            locked: false
        },
        {
            id: 13,
            name: "Parmak İzleri",
            icon: "👆",
            description: "Olay yerinden alınan parmak izleri.",
            clue: "Kadehte parmak izi yok. Şişede Elif'in izi var. Mutfakta herkesin izi var.",
            locked: false
        },
        {
            id: 14,
            name: "Zaman Damgaları",
            icon: "⏰",
            description: "Herkesin o gece nerede olduğuna dair kayıtlar.",
            clue: "22:20-22:30 arası kritik. Selin 'banyoda', Elif 'mutfakta', Mert 'bahçede' dedi.",
            locked: false
        },
        {
            id: 15,
            name: "Selin'in Günlüğü",
            icon: "📖",
            description: "Selin'in evinde bulunan günlük.",
            clue: "Son sayfa: 'Deniz bana yaptıklarının bedelini ödeyecek. Artık hazırım. 14 Mayıs.'",
            locked: false
        }
    ],

    // Zaman Çizelgesi
    timeline: [
        { time: "19:30", event: "İlk misafirler gelmeye başladı (Elif, Kaan)", person: "Herkes" },
        { time: "19:45", event: "Selin villaya geldi. Çantasını salona bıraktı.", person: "Selin" },
        { time: "20:00", event: "Tüm misafirler toplandı. Yemek başladı.", person: "Herkes" },
        { time: "20:30", event: "Cem mutfaktan yemekleri getirdi.", person: "Cem" },
        { time: "21:00", event: "Herkes yemek yedi ve sohbet etti.", person: "Herkes" },
        { time: "21:30", event: "Elif mutfağa gitti, şarap şişelerini getirdi.", person: "Elif" },
        { time: "21:45", event: "Şarap içilmeye başlandı. Deniz kadehini doldurdu.", person: "Deniz" },
        { time: "22:00", event: "Mert bahçeye çıktı, telefon görüşmesi yaptı.", person: "Mert" },
        { time: "22:10", event: "Ayşe salonda müzik açtı.", person: "Ayşe" },
        { time: "22:15", event: "Güvenlik kamerası 5 dakika kapandı (elektrik kesintisi?).", person: "Bilinmiyor" },
        { time: "22:20", event: "Selin banyoya gitti. Kimse görmedi ama mutfağa da uğramış.", person: "Selin" },
        { time: "22:25", event: "Deniz şarap kadehinden içti.", person: "Deniz" },
        { time: "22:28", event: "Deniz fenalaşmaya başladı. Nefes alamıyordu.", person: "Deniz" },
        { time: "22:30", event: "Selin banyodan döndü ve Deniz'e müdahale etti.", person: "Selin" },
        { time: "22:35", event: "Deniz öldü. Ambulans çağrıldı.", person: "Deniz" },
        { time: "22:45", event: "Polis geldi. Kimse villadan ayrılmadı.", person: "Herkes" }
    ],

    // İpuçları (oyun ilerledikçe açılacak)
    hints: [
        "Zehir, şarap şişesinde değil, sadece Deniz'in kadehindeydi.",
        "Katil, zehiri 22:20-22:25 arası kadehin içine koymuş olmalı.",
        "Selin, olay sırasında 'banyoda' olduğunu söyledi ama mutfağa da gitmiş.",
        "Selin'in çantasında siyanür kalıntısı olan boş bir şişe bulundu.",
        "Selin, hastanede çalışıyor ve zehirli maddelere erişimi var.",
        "3 ay önce Selin'in hastanesinden siyanür içeren bir ilaç kaybolmuş.",
        "Selin'in günlüğünde intikam planları var.",
        "Selin, Deniz fenalaştığında 'müdahale etti' ama aslında ölmesini bekledi.",
        "Diğer şüphelilerin hepsinin motifleri var ama kanıt yok.",
        "Selin, doktor olduğu için zehirin etkisini ve zamanlamasını biliyordu."
    ],

    // Çözüm
    solution: {
        killer: "Selin Arslan",
        explanation: `
            <h2>🎯 Katil: Selin Arslan</h2>
            
            <div class="solution-section">
                <h3>Nasıl Yaptı?</h3>
                <p>Selin, olay gecesi 22:20'de "banyoya gittiğini" söyledi ama aslında mutfağa uğradı. 
                Güvenlik kamerası o sırada kapalıydı (elektrik kesintisi). Mutfakta, Deniz'in şarap kadehine 
                hastanesinden çaldığı siyanürü koydu. Doktor olduğu için zehirin dozajını ve etkisini 
                mükemmel hesapladı.</p>
                
                <p>22:25'te Deniz kadehinden içti ve 22:28'de fenalaşmaya başladı. Selin, 22:30'da 
                "banyodan döndü" ve Deniz'e "müdahale etti" - ama aslında ölmesini bekledi. 
                Doktor olarak onu kurtarabilirdi ama kurtarmadı.</p>
            </div>
            
            <div class="solution-section">
                <h3>Neden Yaptı?</h3>
                <p>Deniz, Selin'i aldattıktan sonra terk etti ve itibarını zedeledi. Selin, 
                depresyona girdi ve intikam planları yaptı. Günlüğünde "Deniz bana yaptıklarının 
                bedelini ödeyecek" yazmıştı.</p>
            </div>
            
            <div class="solution-section">
                <h3>Kanıtlar:</h3>
                <ul>
                    <li>✓ Selin'in çantasında siyanür kalıntısı olan boş şişe</li>
                    <li>✓ Hastanesinden 3 ay önce siyanür içeren ilaç kaybolmuş</li>
                    <li>✓ 22:20'de mutfağa gitmiş (kimse görmemiş)</li>
                    <li>✓ Günlüğünde intikam planları</li>
                    <li>✓ Doktor olarak zehirin etkisini biliyordu</li>
                    <li>✓ Deniz'e "müdahale etti" ama kurtarmadı</li>
                </ul>
            </div>
            
            <div class="solution-section">
                <h3>Diğer Şüpheliler Neden Masum?</h3>
                <ul>
                    <li><strong>Elif:</strong> Eldivenleri vardı ama şarap şişesinde zehir yoktu.</li>
                    <li><strong>Kaan:</strong> Tehdit etti ama o sırada masadaydı, mutfağa gitmedi.</li>
                    <li><strong>Mert:</strong> Telefonu kapalıydı ama bahçedeydi, mutfağa erişimi yoktu.</li>
                    <li><strong>Ayşe:</strong> Motive vardı ama ilaçları normaldi, siyanür yoktu.</li>
                    <li><strong>Cem:</strong> Şaka yollu tehdit etti ama mutfak malzemelerinde kimyasal yoktu.</li>
                </ul>
            </div>
            
            <p class="final-note">🎭 Selin, mükemmel bir plan yaptı ve herkesi kandırdı. 
            Ama sen gerçeği buldun! Tebrikler dedektif! 🎉</p>
        `
    }
};
