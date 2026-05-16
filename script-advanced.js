// PROFESYONEL SEVİYE OYUN MEKANİĞİ

let gameState = {
    startTime: null,
    discoveredClues: [],
    suspectInteractions: {},
    evidenceViewed: [],
    messagesRead: [],
    currentSection: 'case',
    notes: '',
    difficulty: 'EXPERT',
    hintsUsed: 0,
    wrongGuesses: 0,
    score: 0
};

let timerInterval = null;

// Oyunu Başlat
function startGame() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    
    gameState.startTime = Date.now();
    startTimer();
    
    // Görselleri oluştur
    initializeAllImages();
    
    // Bölümleri yükle
    loadCase();
    loadSuspects();
    loadMessages();
    loadEvidence();
    loadTimeline();
    loadNotes();
    
    // İlk ipuçları
    addClue("Olay dosyası açıldı. Deniz Yılmaz siyanür ile zehirlendi.");
    addClue("8 şüpheli var. Hepsinin güçlü motifleri var.");
    addClue("Kritik zaman: 22:15-22:30 arası. Bu 15 dakikada ne oldu?");
    
    // Ses efekti (opsiyonel)
    playSound('gameStart');
}

// Zamanlayıcı
function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Date.now() - gameState.startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        document.getElementById('timer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Bölüm Göster
function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(`${section}-section`).classList.add('active');
    event.target.classList.add('active');
    
    gameState.currentSection = section;
    updateHint(section);
    
    // Analitik
    trackSectionView(section);
}

// İpucu Güncelle
function updateHint(section) {
    const hints = {
        case: "Olay özetini dikkatlice oku. Siyanür 22:20-22:25 arası verildi. Kim o sırada mutfaktaydı?",
        suspects: "8 şüpheli, 8 motif. Ama sadece 1 katil. Alibiler ne kadar güçlü? Kimde zehir bilgisi var?",
        messages: "Mesajlar çok önemli! Selin'in şifreli mesajlarına dikkat et. '22:20' ve 'siyanür' kelimelerini ara.",
        evidence: "25+ kanıt var. Selin'in çantasındaki şişe, mutfaktaki DNA, telefon kayıtları... Hepsini birleştir!",
        timeline: "Zaman çizelgesi anahtardır! 22:20'de Selin 'banyoda' dedi ama mutfaktaydı. Neden yalan söyledi?",
        notes: "Teorilerini yaz. Hangi şüphelinin en çok kanıtı var? Selin'e bak: Doktor, siyanür, mutfakta, alibi yok..."
    };
    
    document.getElementById('hint-text').textContent = hints[section] || "Her detay önemli!";
}

// Olay Dosyasını Yükle
function loadCase() {
    const victim = gameData.victim;
    const caseSection = document.getElementById('case-section');
    
    // Kurban bilgileri ekle
    const victimInfo = `
        <div class="victim-profile">
            <h4>👤 Kurban Profili</h4>
            <p><strong>İsim:</strong> ${victim.name}</p>
            <p><strong>Yaş:</strong> ${victim.age}</p>
            <p><strong>Meslek:</strong> ${victim.profession}</p>
            <p><strong>Net Değer:</strong> ${victim.netWorth}</p>
            <p><strong>Ölüm Saati:</strong> ${victim.timeOfDeath}</p>
            <p><strong>Ölüm Nedeni:</strong> ${victim.causeOfDeath}</p>
            <p><strong>Son Sözleri:</strong> "${victim.lastWords}"</p>
        </div>
        
        <div class="victim-secrets">
            <h4>🔒 Deniz'in Karanlık Sırları</h4>
            <ul>
                ${victim.darkSecrets.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
    `;
    
    caseSection.querySelector('.case-file').insertAdjacentHTML('beforeend', victimInfo);
    
    addClue("Kurban profili incelendi. Deniz'in birçok düşmanı varmış.");
}

// Şüphelileri Yükle
function loadSuspects() {
    const container = document.getElementById('suspects-list');
    container.innerHTML = '';
    
    gameData.suspects.forEach(suspect => {
        const card = document.createElement('div');
        card.className = 'suspect-card';
        card.setAttribute('data-suspect-id', suspect.id);
        card.onclick = () => showSuspectDetail(suspect);
        
        // Fotoğraf
        const photoDiv = document.createElement('div');
        photoDiv.className = 'suspect-photo';
        
        if (typeof createSuspectImage === 'function') {
            const img = document.createElement('img');
            img.src = createSuspectImage(suspect);
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '10px';
            photoDiv.appendChild(img);
        } else {
            photoDiv.textContent = suspect.emoji;
        }
        
        card.appendChild(photoDiv);
        
        // Bilgiler
        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = `
            <h4>${suspect.name} ${suspect.emoji}</h4>
            <p><strong>Yaş:</strong> ${suspect.age} | <strong>Meslek:</strong> ${suspect.profession}</p>
            <p style="margin-top: 15px; color: #dc2626;"><strong>Motif:</strong> ${suspect.motive}</p>
            <p style="margin-top: 10px; color: #10b981;"><strong>Alibi:</strong> ${suspect.alibi}</p>
            <p style="margin-top: 10px;"><strong>Alibi Gücü:</strong> 
                <span style="color: ${getAlibiColor(suspect.alibiStrength)}">${suspect.alibiStrength}</span>
            </p>
            <p style="margin-top: 10px;"><strong>Zehir Bilgisi:</strong> 
                <span style="color: #fbbf24">${suspect.toxicologyKnowledge}/10</span>
            </p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p><strong>Sırlar:</strong></p>
                <ul>
                    ${suspect.secrets.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p><strong>Telefon Aktivitesi:</strong></p>
                <ul>
                    ${suspect.phoneActivity.map(p => 
                        `<li>${p.time} - ${p.contact} (${p.type}, ${p.duration})</li>`
                    ).join('')}
                </ul>
            </div>
        `;
        
        card.appendChild(infoDiv);
        container.appendChild(card);
    });
    
    addClue("Tüm şüphelilerin profilleri incelendi. Herkesin güçlü motifi var!");
}

// Alibi rengi
function getAlibiColor(strength) {
    if (strength.includes('Güçlü')) return '#10b981';
    if (strength.includes('Orta')) return '#fbbf24';
    return '#dc2626';
}

// Şüpheli Detay Modal
function showSuspectDetail(suspect) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <h3>${suspect.emoji} ${suspect.name}</h3>
            <div style="text-align: left; margin: 30px 0;">
                <h4 style="color: #dc2626;">Detaylı Profil</h4>
                <p><strong>Psikolojik Profil:</strong> ${suspect.psychProfile}</p>
                <p><strong>Finansal Durum:</strong> ${suspect.financialStatus}</p>
                <p><strong>Parmak İzleri:</strong> ${suspect.fingerprints.join(', ')}</p>
                ${suspect.dnaFound ? '<p style="color: #dc2626;"><strong>⚠️ DNA Bulundu!</strong></p>' : ''}
                ${suspect.hasGunpowderResidue ? '<p style="color: #dc2626;"><strong>⚠️ Barut Kalıntısı Var!</strong></p>' : ''}
                ${suspect.redHerring ? `<p style="color: #fbbf24;"><strong>Not:</strong> ${suspect.redHerring}</p>` : ''}
            </div>
            <button onclick="closeModal(this)" class="btn-primary">Kapat</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Analitik
    if (!gameState.suspectInteractions[suspect.id]) {
        gameState.suspectInteractions[suspect.id] = 0;
    }
    gameState.suspectInteractions[suspect.id]++;
    
    addClue(`${suspect.name} detaylı olarak incelendi.`);
}

// Mesajları Yükle
function loadMessages() {
    const container = document.getElementById('messages-list');
    container.innerHTML = '';
    
    gameData.messages.forEach(msg => {
        const group = document.createElement('div');
        group.className = 'message-group';
        
        let conversationHTML = '';
        msg.conversation.forEach(m => {
            const suspiciousClass = m.suspicious ? ' suspicious' : '';
            conversationHTML += `
                <div class="message ${m.type}${suspiciousClass}">
                    <strong>${m.sender}:</strong> ${m.text}
                    <div class="message-time">${m.time}</div>
                </div>
            `;
        });
        
        group.innerHTML = `
            <h4>💬 ${msg.title}</h4>
            <p class="date">${msg.date}</p>
            ${msg.encrypted ? '<p style="color: #dc2626; font-weight: 600;">🔒 ŞİFRELİ MESAJLAR - Polis tarafından kurtarıldı!</p>' : ''}
            ${conversationHTML}
            ${msg.note ? `<div class="message-note">📌 ${msg.note}</div>` : ''}
        `;
        
        container.appendChild(group);
        
        // Mesaj okundu olarak işaretle
        if (!gameState.messagesRead.includes(msg.id)) {
            gameState.messagesRead.push(msg.id);
        }
    });
    
    addClue("WhatsApp mesajları incelendi. Selin'in şifreli mesajları çok şüpheli!");
    addClue("Selin birine '22:20'de mutfağa gideceğim' demiş. KİME?");
}

// Kanıtları Yükle
function loadEvidence() {
    const container = document.getElementById('evidence-list');
    container.innerHTML = '';
    
    gameData.evidence.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'evidence-item';
        item.onclick = () => showEvidenceDetail(ev);
        
        item.innerHTML = `
            <div class="evidence-importance">⭐ ${ev.importance}/10</div>
            <div class="evidence-icon">${ev.icon}</div>
            <h4>${ev.name}</h4>
            <p style="font-size: 0.9rem; margin-top: 10px;">${ev.description}</p>
        `;
        
        container.appendChild(item);
    });
    
    addClue("25+ kanıt toplandı. Önem derecelerine dikkat et!");
}

// Kanıt Detay
function showEvidenceDetail(evidence) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${evidence.icon} ${evidence.name}</h3>
            <div style="text-align: left; margin: 30px 0;">
                <p><strong>Açıklama:</strong> ${evidence.description}</p>
                <p style="margin-top: 20px; padding: 20px; background: rgba(220, 38, 38, 0.1); border-radius: 10px;">
                    <strong>🔍 İpucu:</strong> ${evidence.clue}
                </p>
                <p style="margin-top: 15px;"><strong>Önem Derecesi:</strong> 
                    <span style="color: #fbbf24; font-size: 1.2rem;">${evidence.importance}/10</span>
                </p>
            </div>
            <button onclick="closeModal(this)" class="btn-primary">Kapat</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Kanıt görüldü olarak işaretle
    if (!gameState.evidenceViewed.includes(evidence.id)) {
        gameState.evidenceViewed.push(evidence.id);
        addClue(`Kanıt incelendi: ${evidence.name}`);
    }
}

// Zaman Çizelgesini Yükle
function loadTimeline() {
    const container = document.getElementById('timeline-list');
    container.innerHTML = '';
    
    gameData.timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        // Kritik olayları vurgula
        if (item.importance >= 9) {
            timelineItem.classList.add('critical');
        }
        
        timelineItem.innerHTML = `
            <div class="timeline-time">${item.time}</div>
            <p>${item.event}</p>
            <p class="timeline-person"><strong>Kişi:</strong> ${item.person}</p>
            ${item.importance >= 9 ? '<p style="color: #dc2626; font-weight: 600; margin-top: 10px;">⚠️ KRİTİK OLAY!</p>' : ''}
        `;
        
        container.appendChild(timelineItem);
    });
    
    addClue("Zaman çizelgesi incelendi. 22:15-22:30 arası çok kritik!");
    addClue("22:20'de Selin 'banyoya gitti' ama mutfakta DNA'sı bulundu!");
}

// Notları Yükle
function loadNotes() {
    const saved = localStorage.getItem('katilkim-notes-pro');
    if (saved) {
        gameState.notes = saved;
        document.getElementById('notes-area').value = saved;
    }
}

// Notları Kaydet
function saveNotes() {
    const notes = document.getElementById('notes-area').value;
    gameState.notes = notes;
    localStorage.setItem('katilkim-notes-pro', notes);
    
    // Bildirim göster
    showNotification('✅ Notların kaydedildi!', 'success');
}

// İpucu Ekle
function addClue(clue) {
    if (!gameState.discoveredClues.includes(clue)) {
        gameState.discoveredClues.push(clue);
        
        const list = document.getElementById('clues-list');
        const li = document.createElement('li');
        li.textContent = clue;
        li.style.animation = 'fadeIn 0.5s';
        list.appendChild(li);
        
        // İpucu sayısını güncelle
        document.getElementById('clue-count').textContent = 
            `${gameState.discoveredClues.length}/${gameData.totalClues}`;
        
        // Ses efekti
        playSound('clueFound');
    }
}

// Çözüm Modalını Aç
function showSolveModal() {
    const modal = document.getElementById('solve-modal');
    const choices = document.getElementById('suspect-choices');
    
    choices.innerHTML = '';
    
    gameData.suspects.forEach(suspect => {
        const choice = document.createElement('div');
        choice.className = 'suspect-choice';
        choice.onclick = () => checkSolution(suspect);
        
        choice.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 10px;">${suspect.emoji}</div>
            <strong>${suspect.name}</strong>
            <p style="font-size: 0.9rem; margin-top: 5px; color: #a3a3a3;">${suspect.profession}</p>
        `;
        
        choices.appendChild(choice);
    });
    
    modal.classList.add('active');
}

// Çözüm Modalını Kapat
function closeSolveModal() {
    document.getElementById('solve-modal').classList.remove('active');
}

// Modal Kapat
function closeModal(button) {
    button.closest('.modal').remove();
}

// Çözümü Kontrol Et
function checkSolution(suspect) {
    closeSolveModal();
    clearInterval(timerInterval);
    
    const elapsed = Date.now() - gameState.startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const timeStr = `${minutes} dakika ${seconds} saniye`;
    
    // Skor hesapla
    calculateScore(suspect.isKiller, elapsed);
    
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    const resultContent = document.getElementById('result-content');
    
    if (suspect.isKiller) {
        // DOĞRU CEVAP!
        resultContent.innerHTML = `
            <div style="text-align: center; animation: fadeIn 1s ease;">
                <h1 style="color: #10b981; font-size: 5rem; margin-bottom: 20px;">🎉 BRAVO! 🎉</h1>
                <h2 style="color: #10b981; font-size: 2.5rem; margin-bottom: 30px;">Katili Buldun!</h2>
                
                <div style="background: rgba(16, 185, 129, 0.1); border: 3px solid #10b981; border-radius: 20px; padding: 40px; margin: 40px 0;">
                    <p style="font-size: 2rem; margin-bottom: 20px;">
                        <strong>${suspect.emoji} ${suspect.name}</strong>
                    </p>
                    <p style="font-size: 1.3rem; color: #10b981; margin: 15px 0;">⏱️ Süre: ${timeStr}</p>
                    <p style="font-size: 1.3rem; color: #10b981; margin: 15px 0;">🔍 İpuçları: ${gameState.discoveredClues.length}/${gameData.totalClues}</p>
                    <p style="font-size: 1.3rem; color: #10b981; margin: 15px 0;">📊 Kanıtlar: ${gameState.evidenceViewed.length}/${gameData.evidence.length}</p>
                    <p style="font-size: 1.3rem; color: #10b981; margin: 15px 0;">💬 Mesajlar: ${gameState.messagesRead.length}/${gameData.messages.length}</p>
                    <p style="font-size: 2rem; color: #fbbf24; margin-top: 30px;">⭐ SKOR: ${gameState.score}/1000</p>
                </div>
                
                ${gameData.solution.how}
                
                <div style="margin-top: 50px;">
                    <button onclick="location.reload()" class="btn-primary">🔄 Tekrar Oyna</button>
                </div>
                
                <div style="margin-top: 40px; padding: 30px; background: rgba(220, 38, 38, 0.1); border-radius: 15px;">
                    <p style="font-size: 1.5rem; color: #dc2626; margin-bottom: 15px;">
                        💝 Bu oyun Özge için özel olarak hazırlandı!
                    </p>
                    <p style="font-size: 1.1rem;">Umarım çok eğlenmişsindir! Profesyonel seviye bir dedektifsin! 🕵️‍♀️</p>
                </div>
            </div>
        `;
        
        playSound('victory');
    } else {
        // YANLIŞ CEVAP
        gameState.wrongGuesses++;
        
        resultContent.innerHTML = `
            <div style="text-align: center; animation: fadeIn 1s ease;">
                <h1 style="color: #dc2626; font-size: 5rem; margin-bottom: 20px;">❌ YANLIŞ! ❌</h1>
                <h2 style="color: #dc2626; font-size: 2.5rem; margin-bottom: 30px;">Katil Kaçtı!</h2>
                
                <div style="background: rgba(220, 38, 38, 0.1); border: 3px solid #dc2626; border-radius: 20px; padding: 40px; margin: 40px 0;">
                    <p style="font-size: 2rem; margin-bottom: 20px;">
                        <strong>${suspect.emoji} ${suspect.name}</strong> masum!
                    </p>
                    <p style="font-size: 1.3rem; margin: 15px 0;">⏱️ Süre: ${timeStr}</p>
                    <p style="font-size: 1.3rem; margin: 15px 0;">🔍 İpuçları: ${gameState.discoveredClues.length}/${gameData.totalClues}</p>
                    <p style="font-size: 1.3rem; margin: 15px 0;">❌ Yanlış Tahmin: ${gameState.wrongGuesses}</p>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.03); border-radius: 20px; padding: 40px; margin: 40px 0;">
                    <h3 style="color: #dc2626; margin-bottom: 30px; font-size: 2rem;">Gerçek Katil:</h3>
                    <p style="font-size: 2rem; margin-bottom: 30px;">
                        <strong>👩‍⚕️ ${gameData.solution.killer}</strong>
                    </p>
                    
                    ${gameData.solution.how}
                </div>
                
                <div style="margin-top: 50px;">
                    <button onclick="location.reload()" class="btn-primary">🔄 Tekrar Dene</button>
                </div>
                
                <div style="margin-top: 40px; padding: 30px; background: rgba(220, 38, 38, 0.1); border-radius: 15px;">
                    <p style="font-size: 1.5rem; color: #dc2626; margin-bottom: 15px;">
                        💝 Bu oyun Özge için özel olarak hazırlandı!
                    </p>
                    <p style="font-size: 1.1rem;">Tekrar dene! İpuçlarını daha dikkatli incele. Sen yaparsın! 💪</p>
                </div>
            </div>
        `;
        
        playSound('wrong');
    }
}

// Skor Hesapla
function calculateScore(isCorrect, timeElapsed) {
    if (!isCorrect) {
        gameState.score = 0;
        return;
    }
    
    let score = 1000;
    
    // Süre cezası (her dakika -10 puan)
    const minutes = Math.floor(timeElapsed / 60000);
    score -= minutes * 10;
    
    // İpucu bonusu
    const cluePercentage = (gameState.discoveredClues.length / gameData.totalClues) * 100;
    if (cluePercentage >= 80) score += 100;
    else if (cluePercentage >= 60) score += 50;
    
    // Kanıt bonusu
    const evidencePercentage = (gameState.evidenceViewed.length / gameData.evidence.length) * 100;
    if (evidencePercentage >= 80) score += 100;
    else if (evidencePercentage >= 60) score += 50;
    
    // Yanlış tahmin cezası
    score -= gameState.wrongGuesses * 100;
    
    gameState.score = Math.max(0, score);
}

// Bildirim Göster
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#dc2626'};
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        font-size: 1.1rem;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ses Efektleri (opsiyonel)
function playSound(type) {
    // Ses dosyaları eklenebilir
    console.log(`Sound: ${type}`);
}

// Analitik
function trackSectionView(section) {
    console.log(`Section viewed: ${section}`);
}

// Tüm görselleri oluştur
function initializeAllImages() {
    // Olay yeri fotoğrafı
    const crimeSceneImg = document.getElementById('crime-scene-photo');
    if (crimeSceneImg && typeof createCrimeSceneImage === 'function') {
        crimeSceneImg.src = createCrimeSceneImage();
    }
}

// Sayfa yüklendiğinde
window.addEventListener('load', () => {
    console.log('🎮 KATİL KİM? - Profesyonel Seviye');
    console.log('💝 Özge için özel olarak hazırlandı!');
    console.log('🔥 Zorluk: EXPERT');
});

// Klavye kısayolları
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveNotes();
    }
});
