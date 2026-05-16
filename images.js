// Canvas ile Görsel Oluşturma

// Olay Yeri Fotoğrafı
function createCrimeSceneImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    // Arka plan - karanlık oda
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(1, '#0f0f1e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 400);
    
    // Zemin
    ctx.fillStyle = '#2a2a3e';
    ctx.fillRect(0, 250, 800, 150);
    
    // Masa
    ctx.fillStyle = '#3d2817';
    ctx.fillRect(150, 200, 500, 20);
    ctx.fillRect(160, 220, 480, 10);
    
    // Masa bacakları
    ctx.fillStyle = '#2d1807';
    ctx.fillRect(180, 230, 15, 70);
    ctx.fillRect(605, 230, 15, 70);
    
    // Şarap şişesi
    ctx.fillStyle = '#1a4d1a';
    ctx.fillRect(320, 140, 40, 60);
    ctx.fillStyle = '#0d260d';
    ctx.fillRect(325, 130, 30, 15);
    
    // Şarap kadehleri
    for (let i = 0; i < 4; i++) {
        const x = 250 + i * 80;
        // Kadeh gövdesi
        ctx.fillStyle = 'rgba(200, 200, 255, 0.3)';
        ctx.beginPath();
        ctx.moveTo(x, 180);
        ctx.lineTo(x + 20, 180);
        ctx.lineTo(x + 15, 200);
        ctx.lineTo(x + 5, 200);
        ctx.closePath();
        ctx.fill();
        
        // Kadeh sapı
        ctx.fillStyle = 'rgba(200, 200, 255, 0.2)';
        ctx.fillRect(x + 8, 200, 4, 15);
        ctx.fillRect(x + 5, 215, 10, 3);
    }
    
    // Zehirli kadeh (kırmızı ışık)
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.arc(420, 190, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.arc(420, 190, 50, 0, Math.PI * 2);
    ctx.fill();
    
    // Tabaklar
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
        const x = 240 + i * 90;
        ctx.beginPath();
        ctx.arc(x, 210, 25, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // Polis şeridi
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(0, 50, 800, 30);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('⚠️ POLİS ŞERİDİ - GEÇİLMEZ ⚠️', 180, 72);
    
    // Kan lekesi efekti (kırmızı leke)
    ctx.fillStyle = 'rgba(139, 0, 0, 0.6)';
    ctx.beginPath();
    ctx.arc(450, 280, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(465, 290, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Gölgeler
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(150, 220, 500, 5);
    
    // Metin
    ctx.fillStyle = '#ff4444';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('🏠 OLAY YERİ', 280, 370);
    ctx.fillStyle = '#aaa';
    ctx.font = '16px Arial';
    ctx.fillText('Mavi Köşk Villası - 14 Mayıs 2026, 22:30', 230, 395);
    
    return canvas.toDataURL();
}

// Şüpheli Profil Fotoğrafları
function createSuspectImage(suspect) {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    
    // Arka plan renkleri (her şüpheli için farklı)
    const colors = {
        1: ['#2c3e50', '#34495e'], // Elif - Mavi
        2: ['#8e44ad', '#9b59b6'], // Kaan - Mor
        3: ['#c0392b', '#e74c3c'], // Selin - Kırmızı (katil)
        4: ['#16a085', '#1abc9c'], // Mert - Yeşil
        5: ['#d35400', '#e67e22'], // Ayşe - Turuncu
        6: ['#27ae60', '#2ecc71']  // Cem - Açık yeşil
    };
    
    const [color1, color2] = colors[suspect.id] || ['#2c3e50', '#34495e'];
    
    // Gradient arka plan
    const gradient = ctx.createRadialGradient(150, 150, 50, 150, 150, 200);
    gradient.addColorStop(0, color2);
    gradient.addColorStop(1, color1);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);
    
    // Gölge efekti
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.arc(150, 180, 80, 0, Math.PI * 2);
    ctx.fill();
    
    // Yüz (daire)
    ctx.fillStyle = '#f5d5b8';
    ctx.beginPath();
    ctx.arc(150, 150, 70, 0, Math.PI * 2);
    ctx.fill();
    
    // Saç
    ctx.fillStyle = suspect.id === 5 ? '#8b4513' : '#2c1810';
    ctx.beginPath();
    ctx.arc(150, 120, 75, Math.PI, 0);
    ctx.fill();
    
    // Gözler
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(130, 140, 12, 0, Math.PI * 2);
    ctx.arc(170, 140, 12, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = suspect.id === 3 ? '#c0392b' : '#2c3e50'; // Selin'in gözleri kırmızı
    ctx.beginPath();
    ctx.arc(130, 142, 6, 0, Math.PI * 2);
    ctx.arc(170, 142, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // Kaşlar
    ctx.strokeStyle = '#2c1810';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(115, 125);
    ctx.lineTo(135, 128);
    ctx.moveTo(165, 128);
    ctx.lineTo(185, 125);
    ctx.stroke();
    
    // Burun
    ctx.strokeStyle = '#d4a574';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(150, 165);
    ctx.stroke();
    
    // Ağız
    ctx.strokeStyle = '#c0392b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    if (suspect.id === 3) {
        // Selin için sinsi gülümseme
        ctx.arc(150, 175, 15, 0.2, Math.PI - 0.2);
    } else if (suspect.id === 2 || suspect.id === 4) {
        // Kaan ve Mert için ciddi ifade
        ctx.moveTo(135, 180);
        ctx.lineTo(165, 180);
    } else {
        // Diğerleri için normal ağız
        ctx.arc(150, 175, 12, 0.3, Math.PI - 0.3);
    }
    ctx.stroke();
    
    // Vücut (basit)
    ctx.fillStyle = color2;
    ctx.fillRect(80, 220, 140, 80);
    
    // Yaka
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(130, 240);
    ctx.lineTo(150, 260);
    ctx.lineTo(170, 240);
    ctx.lineTo(170, 300);
    ctx.lineTo(130, 300);
    ctx.closePath();
    ctx.fill();
    
    // Emoji (büyük)
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Emoji gölgesi
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillText(suspect.emoji, 152, 152);
    
    // Emoji
    ctx.fillStyle = '#fff';
    ctx.fillText(suspect.emoji, 150, 150);
    
    // Şüpheli işareti (katil için)
    if (suspect.id === 3) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
        ctx.beginPath();
        ctx.arc(250, 50, 30, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 30px Arial';
        ctx.fillText('!', 250, 55);
    }
    
    // İsim etiketi
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 260, 300, 40);
    
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(suspect.name, 150, 283);
    
    return canvas.toDataURL();
}

// Kanıt Görselleri
function createEvidenceImage(evidence) {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    // Arka plan
    const gradient = ctx.createRadialGradient(100, 100, 20, 100, 100, 100);
    gradient.addColorStop(0, '#2c3e50');
    gradient.addColorStop(1, '#1a1a2e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 200, 200);
    
    // Kanıt çerçevesi
    ctx.strokeStyle = '#ff4444';
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, 180, 180);
    
    // İkon
    ctx.font = 'bold 80px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Gölge
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillText(evidence.icon, 102, 102);
    
    // İkon
    ctx.fillStyle = '#fff';
    ctx.fillText(evidence.icon, 100, 100);
    
    // Kanıt numarası
    ctx.fillStyle = 'rgba(255, 68, 68, 0.8)';
    ctx.fillRect(150, 20, 30, 30);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px Arial';
    ctx.fillText(evidence.id, 165, 35);
    
    return canvas.toDataURL();
}

// Zaman Çizelgesi İkonları
function createTimelineIcon(time) {
    const canvas = document.createElement('canvas');
    canvas.width = 60;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');
    
    // Saat kadranı
    ctx.fillStyle = '#2c3e50';
    ctx.beginPath();
    ctx.arc(30, 30, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#ff4444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(30, 30, 25, 0, Math.PI * 2);
    ctx.stroke();
    
    // Saat işaretleri
    ctx.fillStyle = '#fff';
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30 - 90) * Math.PI / 180;
        const x = 30 + Math.cos(angle) * 18;
        const y = 30 + Math.sin(angle) * 18;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Saat kolları (basit)
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 15);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(42, 30);
    ctx.stroke();
    
    // Merkez nokta
    ctx.fillStyle = '#ff4444';
    ctx.beginPath();
    ctx.arc(30, 30, 3, 0, Math.PI * 2);
    ctx.fill();
    
    return canvas.toDataURL();
}

// Arka plan deseni
function createBackgroundPattern() {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 100, 100);
    
    // Parmak izi deseni
    ctx.strokeStyle = 'rgba(255, 68, 68, 0.05)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(50, 50, 10 + i * 8, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    return canvas.toDataURL();
}

// Tüm görselleri oluştur ve uygula
function initializeImages() {
    // Olay yeri fotoğrafı
    const crimeSceneImg = document.querySelector('.case-file img');
    if (crimeSceneImg) {
        crimeSceneImg.src = createCrimeSceneImage();
        crimeSceneImg.style.border = '3px solid #ff4444';
        crimeSceneImg.style.boxShadow = '0 0 20px rgba(255, 68, 68, 0.5)';
    }
    
    // Şüpheli fotoğrafları
    gameData.suspects.forEach(suspect => {
        const suspectPhoto = document.querySelector(`[data-suspect-id="${suspect.id}"] .suspect-photo`);
        if (suspectPhoto) {
            const img = document.createElement('img');
            img.src = createSuspectImage(suspect);
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '10px';
            suspectPhoto.innerHTML = '';
            suspectPhoto.appendChild(img);
        }
    });
    
    console.log('✅ Tüm görseller Canvas ile oluşturuldu!');
}

// Sayfa yüklendiğinde görselleri oluştur
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        setTimeout(initializeImages, 100);
    });
}
