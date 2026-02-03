const videoMap = {
  idle: "assets/movements/idle.mp4",

  words: {
    "السلام عليكم ورحمة الله وبركاته": "assets/movements/sentences/1.mp4",
    "الحمد لله": "assets/movements/sentences/2.mp4",
    "الله يحفظك": "assets/movements/sentences/4.mp4",
    "بتاعتي": "assets/movements/sentences/5.mp4",
    "بتاعتك": "assets/movements/sentences/6.mp4",
    "اسم": "assets/movements/sentences/7.mp4",
    "ما شاء الله": "assets/movements/sentences/8.mp4",
    "صباح الخير": "assets/movements/sentences/9.mp4",
    "مساء الخير": "assets/movements/sentences/10.mp4",
    "عامل إيه": "assets/movements/sentences/11.mp4",
    "إيه": "assets/movements/sentences/12.mp4",
    "أنا": "assets/movements/sentences/16.mp4",
    "أنت": "assets/movements/sentences/17.mp4",
    "وحشتني": "assets/movements/sentences/23.mp4",
    "شكرا": "assets/movements/sentences/24.mp4",
    "مع السلامة": "assets/movements/sentences/25.mp4",
  },

  letters: {
    'ا': [
    'assets/movements/letters/alif/alif.mp4',
    'assets/movements/letters/alif/s.mp4',
    'assets/movements/letters/alif/m.mp4',
    'assets/movements/letters/alif/e.mp4',
  ],
  'أ': [
    'assets/movements/letters/alif/alif.mp4',
    'assets/movements/letters/alif/s.mp4',
    'assets/movements/letters/alif/m.mp4',
    'assets/movements/letters/alif/e.mp4',
  ],
  'إ': [
    'assets/movements/letters/alif/alif.mp4',
    'assets/movements/letters/alif/s.mp4',
    'assets/movements/letters/alif/m.mp4',
    'assets/movements/letters/alif/e.mp4',
  ],
  'ء': [
    'assets/movements/letters/alif/alif.mp4',
    'assets/movements/letters/alif/s.mp4',
    'assets/movements/letters/alif/m.mp4',
    'assets/movements/letters/alif/e.mp4',
  ],
  'ئ': [
    'assets/movements/letters/alif/alif.mp4',
    'assets/movements/letters/alif/s.mp4',
    'assets/movements/letters/alif/m.mp4',
    'assets/movements/letters/alif/e.mp4',
  ],
  'ؤ': [
    'assets/movements/letters/alif/alif.mp4',
    'assets/movements/letters/alif/s.mp4',
    'assets/movements/letters/alif/m.mp4',
    'assets/movements/letters/alif/e.mp4',
  ],
  'ب': [
    'assets/movements/letters/baa/baa.mp4',
    'assets/movements/letters/baa/s.mp4',
    'assets/movements/letters/baa/m.mp4',
    'assets/movements/letters/baa/e.mp4',
  ],
  'ت': [
    'assets/movements/letters/ta/ta.mp4',
    'assets/movements/letters/ta/s.mp4',
    'assets/movements/letters/ta/m.mp4',
    'assets/movements/letters/ta/e.mp4',
  ],
  'ث': [
    'assets/movements/letters/tha/tha.mp4',
    'assets/movements/letters/tha/s.mp4',
    'assets/movements/letters/tha/m.mp4',
    'assets/movements/letters/tha/e.mp4',
  ],
  'ج': [
    'assets/movements/letters/jiim/jiim.mp4',
    'assets/movements/letters/jiim/s.mp4',
    'assets/movements/letters/jiim/m.mp4',
    'assets/movements/letters/jiim/e.mp4',
  ],
  'ح': [
    'assets/movements/letters/haa/haa.mp4',
    'assets/movements/letters/haa/s.mp4',
    'assets/movements/letters/haa/m.mp4',
    'assets/movements/letters/haa/e.mp4',
  ],
  'خ': [
    'assets/movements/letters/kha/kha.mp4',
    'assets/movements/letters/kha/s.mp4',
    'assets/movements/letters/kha/m.mp4',
    'assets/movements/letters/kha/e.mp4',
  ],
  'د': [
    'assets/movements/letters/daal/daal.mp4',
    'assets/movements/letters/daal/s.mp4',
    'assets/movements/letters/daal/m.mp4',
    'assets/movements/letters/daal/e.mp4',
  ],
  'ذ': [
    'assets/movements/letters/thal/thal.mp4',
    'assets/movements/letters/thal/s.mp4',
    'assets/movements/letters/thal/m.mp4',
    'assets/movements/letters/thal/e.mp4',
  ],
  'ر': [
    'assets/movements/letters/raa/raa.mp4',
    'assets/movements/letters/raa/s.mp4',
    'assets/movements/letters/raa/m.mp4',
    'assets/movements/letters/raa/e.mp4',
  ],
  'ز': [
    'assets/movements/letters/zay/zay.mp4',
    'assets/movements/letters/zay/s.mp4',
    'assets/movements/letters/zay/m.mp4',
    'assets/movements/letters/zay/e.mp4',
  ],
  'س': [
    'assets/movements/letters/siin/siin.mp4',
    'assets/movements/letters/siin/s.mp4',
    'assets/movements/letters/siin/m.mp4',
    'assets/movements/letters/siin/e.mp4',
  ],
  'ش': [
    'assets/movements/letters/shiin/shiin.mp4',
    'assets/movements/letters/shiin/s.mp4',
    'assets/movements/letters/shiin/m.mp4',
    'assets/movements/letters/shiin/e.mp4',
  ],
  'ص': [
    'assets/movements/letters/saad/saad.mp4',
    'assets/movements/letters/saad/s.mp4',
    'assets/movements/letters/saad/m.mp4',
    'assets/movements/letters/saad/e.mp4',
  ],
  'ض': [
    'assets/movements/letters/daad/daad.mp4',
    'assets/movements/letters/daad/s.mp4',
    'assets/movements/letters/daad/m.mp4',
    'assets/movements/letters/daad/e.mp4',
  ],
  'ط': [
    'assets/movements/letters/taa/taa.mp4',
    'assets/movements/letters/taa/s.mp4',
    'assets/movements/letters/taa/m.mp4',
    'assets/movements/letters/taa/e.mp4',
  ],
  'ظ': [
    'assets/movements/letters/zaa/zaa.mp4',
    'assets/movements/letters/zaa/s.mp4',
    'assets/movements/letters/zaa/m.mp4',
    'assets/movements/letters/zaa/e.mp4',
  ],
  'ع': [
    'assets/movements/letters/ayn/ayn.mp4',
    'assets/movements/letters/ayn/s.mp4',
    'assets/movements/letters/ayn/m.mp4',
    'assets/movements/letters/ayn/e.mp4',
  ],
  'غ': [
    'assets/movements/letters/ghayn/ghayn.mp4',
    'assets/movements/letters/ghayn/s.mp4',
    'assets/movements/letters/ghayn/m.mp4',
    'assets/movements/letters/ghayn/e.mp4',
  ],
  'ف': [
    'assets/movements/letters/faa/faa.mp4',
    'assets/movements/letters/faa/s.mp4',
    'assets/movements/letters/faa/m.mp4',
    'assets/movements/letters/faa/e.mp4',
  ],
  'ق': [
    'assets/movements/letters/qaaf/qaaf.mp4',
    'assets/movements/letters/qaaf/s.mp4',
    'assets/movements/letters/qaaf/m.mp4',
    'assets/movements/letters/qaaf/e.mp4',
  ],
  'ك': [
    'assets/movements/letters/kaaf/kaaf.mp4',
    'assets/movements/letters/kaaf/s.mp4',
    'assets/movements/letters/kaaf/m.mp4',
    'assets/movements/letters/kaaf/e.mp4',
  ],
  'ل': [
    'assets/movements/letters/laam/laam.mp4',
    'assets/movements/letters/laam/s.mp4',
    'assets/movements/letters/laam/m.mp4',
    'assets/movements/letters/laam/e.mp4',
  ],
  'م': [
    'assets/movements/letters/miim/miim.mp4',
    'assets/movements/letters/miim/s.mp4',
    'assets/movements/letters/miim/m.mp4',
    'assets/movements/letters/miim/e.mp4',
  ],
  'ن': [
    'assets/movements/letters/noon/noon.mp4',
    'assets/movements/letters/noon/s.mp4',
    'assets/movements/letters/noon/m.mp4',
    'assets/movements/letters/noon/e.mp4',
  ],
  'ه': [
    'assets/movements/letters/ha/ha.mp4',
    'assets/movements/letters/ha/s.mp4',
    'assets/movements/letters/ha/m.mp4',
    'assets/movements/letters/ha/e.mp4',
  ],
  'و': [
    'assets/movements/letters/waaw/waaw.mp4',
    'assets/movements/letters/waaw/s.mp4',
    'assets/movements/letters/waaw/m.mp4',
    'assets/movements/letters/waaw/e.mp4',
  ],
  'ي': [
    'assets/movements/letters/yaa-in-middle/yaa-in-middle.mp4',
    'assets/movements/letters/yaa-in-middle/s.mp4',
    'assets/movements/letters/yaa-in-middle/m.mp4',
    'assets/movements/letters/yaa-in-middle/e.mp4',
  ]
}};

const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('startTranslating');
const input = document.getElementById('arabicInput');

let players = [v1, v2];
let activeIdx = 0;
let isPlaying = false;

async function playClip(path) {
    return new Promise((resolve, reject) => {
        const nextIdx = (activeIdx + 1) % 2;
        const currentVid = players[activeIdx];
        const nextVid = players[nextIdx];

        // 1. Set the source
        nextVid.src = path;
        
        // 2. Wait for the video to be ready to play without buffering
        nextVid.oncanplaythrough = () => {
            // Swap the 'active' class for a smooth CSS transition
            nextVid.classList.add('active');
            currentVid.classList.remove('active');
            
            nextVid.play();
            
            // Clean up the current video so it doesn't show the last frame later
            currentVid.pause();
            currentVid.src = ""; 
            
            activeIdx = nextIdx;
        };

        // 3. Resolve the promise only when the clip actually ends
        nextVid.onended = () => {
            nextVid.onended = null;
            nextVid.oncanplaythrough = null;
            resolve();
        };

        nextVid.onerror = () => reject(`Error loading: ${path}`);
        
        nextVid.load();
    });
}

btn.addEventListener('click', async () => {
    if (isPlaying) return;

    console.log("Translation started");
    

    const text = input.value.trim();
    if (!text) return;

    isPlaying = true;
    btn.disabled = true;
    btn.innerText = "يتم الترجمة...";

    const words = text.split(' ');
    let playlist = [];

    // 1. Build the playlist
    words.forEach(word => {
      const letters = word.split('');
      if (letters.length === 1) {playlist.push(videoMap.letters[letters[0]][0])}
      else {
        const wordLen = letters.length;
        letters.forEach((char, charNum) => {
          if (charNum === 0) {playlist.push(videoMap.letters[char][1]);}
          else if (charNum === wordLen - 1) {playlist.push(videoMap.letters[char][3]);}
          else {playlist.push(videoMap.letters[char][2]);}
      });}
      }
    );
    console.log("Playlist:", playlist);


    try {
        for (const videoPath of playlist) {
            await playClip(videoPath);
        }
    } catch (err) {
        console.error(err);
    } finally {
        isPlaying = false;
        btn.disabled = false;
        btn.innerText = "ابدأ الترجمة";
        console.log("Translation sequence finished.");
    }
});

// Ready Sentences Buttons

const buttonsContainer = document.querySelector('.ready-sentences');

buttonsContainer.addEventListener('click', async (event) => {
    const sBtn = event.target.closest('.s-btn');
    
    if (!sBtn || isPlaying) return;

    const word = sBtn.getAttribute('data-word');
    const videoPath = videoMap.words[word];

    buttonsContainer.classList.add('hidden-sentences');

    if (videoPath) {
        isPlaying = true;
        btn.disabled = true;
        btn.innerText = "يتم الترجمة...";
        
        try {
            await playClip(videoPath); 
        } catch (err) {
            console.error("Could not play word video:", err);
        } finally {
            isPlaying = false;
            btn.disabled = false;
            btn.innerText = "ابدأ الترجمة";
        }
    } else {
        console.warn(`No video found for word: ${word}`);
    }
});

document.addEventListener('click', (event) => {
    const caretIcon = event.target.closest('.fa-caret-down');
    
    if (caretIcon) {
      buttonsContainer.classList.remove('hidden-sentences');
    }
});