// Oyun Mantığı - Katil Kim?

let gameState = {
    startTime: null,
    discoveredClues: [],
    unlockedSuspects: [],
    currentSection: 'case',
    notes: ''
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
    
    loadSuspects();
    loadMessages();
    loadEvidence();
    loadTimeline();
    loadNotes();
    
    // İlk ipuçlarını ekle
    addClue("Olay dosyasını incele ve şüphelileri tanı.");
    addClue("WhatsApp mesajlarında şüpheli ifadeler ara.");
}

// Tüm görselleri oluştur
function initializeAllImages() {
    // Olay yeri fotoğrafı
    const crimeSceneImg = document.getElementById('crime-scene-photo');
    if (crimeSceneImg && typeof createCrimeSceneImage === 'function') {
        crimeSceneImg.src = createCrimeSceneImage();
    }
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
    // Tüm bölümleri gizle
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    
    // Seçili bölümü göster
    document.getElementById(`${section}-section`).classList.add('active');
    event.target.classList.add('active');
    
    gameState.currentSection = section;
    
    // Bölüme özel ipuçları
    updateHint(section);
}

// İpucu Güncelle
function updateHint(section) {
    const hints = {
        case: "Olay özetini dikkatlice oku. Zehir nasıl ve ne zaman verildi?",
        suspects: "Her şüphelinin motifi, alibisi ve sırları var. Kim yalan söylüyor?",
        messages: "Mesajlardaki tehditler ve şüpheli ifadelere dikkat et. Emoji'ler bile ipucu olabilir!",
        evidence: "Kanıtları birleştir. Hangi kanıtlar birbirine bağlanıyor?",
        timeline: "Zaman çizelgesinde çelişkiler var mı? Kim nerede olduğunu yanlış söyledi?",
        notes: "Teorilerini yaz. Hangi şüpheli en çok kanıta sahip?"
    };
    
    document.getElementById('hint-text').textContent = hints[section] || "Her detay önemli!";
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
        
        // Şüpheli fotoğrafı oluştur
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
        
        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = `
            <h4>${suspect.name}</h4>
            <p><strong>Yaş:</strong> ${suspect.age}</p>
            <p><strong>Meslek:</strong> ${suspect.profession}</p>
            <p><strong>İlişki:</strong> ${suspect.relation}</p>
            <p style="margin-top: 10px; color: #ff4444;"><strong>Motif:</strong> ${suspect.motive}</p>
            <p style="margin-top: 10px; color: #44ff44;"><strong>Alibi:</strong> ${suspect.alibi}</p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p><strong>Kişilik:</strong> ${suspect.personality}</p>
                <p style="margin-top: 10px;"><strong>Sırlar:</strong></p>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    ${suspect.secrets.map(s => `<li style="margin: 5px 0;">${s}</li>`).join('')}
                </ul>
            </div>
        `;
        
        card.appendChild(infoDiv);
        container.appendChild(card);
    });
    
    addClue("Tüm şüphelilerin profilleri incelendi.");
}

// Şüpheli Detay
function showSuspectDetail(suspect) {
    alert(`${suspect.name}\n\n${suspect.motive}\n\nAlibi: ${suspect.alibi}\n\nSırlar:\n${suspect.secrets.join('\n')}`);
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
            <p style="color: #888; margin-bottom: 10px;">${msg.date}</p>
            ${conversationHTML}
        `;
        
        container.appendChild(group);
    });
    
    addClue("WhatsApp mesajları incelendi. Birçok şüpheli tehdit var!");
}

// Kanıtları Yükle
function loadEvidence() {
    const container = document.getElementById('evidence-list');
    container.innerHTML = '';
    
    gameData.evidence.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'evidence-item' + (ev.locked ? ' locked' : '');
        
        if (!ev.locked) {
            item.onclick = () => showEvidenceDetail(ev);
        }
        
        item.innerHTML = `
            <div class="evidence-icon">${ev.icon}</div>
            <h4>${ev.name}</h4>
            <p style="font-size: 0.9rem; margin-top: 10px;">${ev.description}</p>
        `;
        
        container.appendChild(item);
    });
    
    addClue("Kanıtlar toplandı ve incelendi.");
}

// Kanıt Detay
function showEvidenceDetail(evidence) {
    alert(`${evidence.name}\n\n${evidence.description}\n\n🔍 İpucu:\n${evidence.clue}`);
    addClue(`Kanıt incelendi: ${evidence.name}`);
}

// Zaman Çizelgesini Yükle
function loadTimeline() {
    const container = document.getElementById('timeline-list');
    container.innerHTML = '';
    
    gameData.timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-time">${item.time}</div>
            <p><strong>${item.person}:</strong> ${item.event}</p>
        `;
        
        container.appendChild(timelineItem);
    });
    
    addClue("Zaman çizelgesi incelendi. 22:20-22:30 arası kritik!");
}

// Notları Yükle
function loadNotes() {
    const saved = localStorage.getItem('katilkim-notes');
    if (saved) {
        gameState.notes = saved;
        document.getElementById('notes-area').value = saved;
    }
}

// Notları Kaydet
function saveNotes() {
    const notes = document.getElementById('notes-area').value;
    gameState.notes = notes;
    localStorage.setItem('katilkim-notes', notes);
    alert('✅ Notların kaydedildi!');
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
            `${gameState.discoveredClues.length}/25`;
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
            <strong>${suspect.emoji} ${suspect.name}</strong>
            <p style="font-size: 0.9rem; margin-top: 5px;">${suspect.profession}</p>
        `;
        
        choices.appendChild(choice);
    });
    
    modal.classList.add('active');
}

// Çözüm Modalını Kapat
function closeSolveModal() {
    document.getElementById('solve-modal').classList.remove('active');
}

// Çözümü Kontrol Et
function checkSolution(suspect) {
    closeSolveModal();
    
    clearInterval(timerInterval);
    
    const elapsed = Date.now() - gameState.startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const timeStr = `${minutes} dakika ${seconds} saniye`;
    
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    const resultContent = document.getElementById('result-content');
    
    if (suspect.isKiller) {
        // DOĞRU CEVAP!
        resultContent.innerHTML = `
            <h1 style="color: #44ff44; font-size: 4rem; margin-bottom: 20px;">🎉 TEBRİKLER! 🎉</h1>
            <h2 style="color: #44ff44; margin-bottom: 30px;">Katili Buldun!</h2>
            
            <div style="background: rgba(68, 255, 68, 0.1); border: 2px solid #44ff44; border-radius: 15px; padding: 30px; margin: 30px 0;">
                <p style="font-size: 1.5rem; margin-bottom: 20px;">
                    <strong>${suspect.emoji} ${suspect.name}</strong> gerçekten katildi!
                </p>
                <p style="font-size: 1.2rem;">⏱️ Süre: ${timeStr}</p>
                <p style="font-size: 1.2rem;">🔍 Bulunan İpuçları: ${gameState.discoveredClues.length}/25</p>
            </div>
            
            ${gameData.solution.explanation}
            
            <div style="margin-top: 40px;">
                <button onclick="location.reload()" class="btn-primary">🔄 Tekrar Oyna</button>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: rgba(255, 68, 68, 0.1); border-radius: 10px;">
                <p style="font-size: 1.2rem; color: #ff4444;">
                    💝 Bu oyun Özge için özel olarak hazırlandı!
                </p>
                <p style="margin-top: 10px;">Umarım eğlenmişsindir! 😊</p>
            </div>
        `;
    } else {
        // YANLIŞ CEVAP
        resultContent.innerHTML = `
            <h1 style="color: #ff4444; font-size: 4rem; margin-bottom: 20px;">❌ YANLIŞ! ❌</h1>
            <h2 style="color: #ff4444; margin-bottom: 30px;">Katil Kaçtı!</h2>
            
            <div style="background: rgba(255, 68, 68, 0.1); border: 2px solid #ff4444; border-radius: 15px; padding: 30px; margin: 30px 0;">
                <p style="font-size: 1.5rem; margin-bottom: 20px;">
                    <strong>${suspect.emoji} ${suspect.name}</strong> masum!
                </p>
                <p style="font-size: 1.2rem;">⏱️ Süre: ${timeStr}</p>
                <p style="font-size: 1.2rem;">🔍 Bulunan İpuçları: ${gameState.discoveredClues.length}/25</p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 30px; margin: 30px 0;">
                <h3 style="color: #ff4444; margin-bottom: 20px;">Gerçek Katil:</h3>
                <p style="font-size: 1.3rem; margin-bottom: 20px;">
                    <strong>👩‍⚕️ ${gameData.solution.killer}</strong>
                </p>
                
                ${gameData.solution.explanation}
            </div>
            
            <div style="margin-top: 40px;">
                <button onclick="location.reload()" class="btn-primary">🔄 Tekrar Dene</button>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: rgba(255, 68, 68, 0.1); border-radius: 10px;">
                <p style="font-size: 1.2rem; color: #ff4444;">
                    💝 Bu oyun Özge için özel olarak hazırlandı!
                </p>
                <p style="margin-top: 10px;">Tekrar dene, bu sefer bulacaksın! 😊</p>
            </div>
        `;
    }
}

// CSS animasyonu ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .solution-section {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
    }
    
    .solution-section h3 {
        color: #ff4444;
        margin-bottom: 15px;
        font-size: 1.5rem;
        border-bottom: 2px solid #ff4444;
        padding-bottom: 10px;
    }
    
    .solution-section p {
        line-height: 1.8;
        margin: 10px 0;
    }
    
    .solution-section ul {
        margin-left: 20px;
        margin-top: 15px;
    }
    
    .solution-section li {
        margin: 10px 0;
        line-height: 1.6;
    }
    
    .final-note {
        background: rgba(255, 200, 0, 0.1);
        border: 2px solid #ffc800;
        border-radius: 10px;
        padding: 20px;
        margin-top: 30px;
        font-size: 1.2rem;
        text-align: center;
    }
`;
document.head.appendChild(style);

// Sayfa yüklendiğinde
window.addEventListener('load', () => {
    console.log('🎮 Katil Kim? - Oyun hazır!');
    console.log('💝 Özge için özel olarak hazırlandı!');
});
