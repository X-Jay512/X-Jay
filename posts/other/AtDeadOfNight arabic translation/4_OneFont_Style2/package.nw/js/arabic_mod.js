// arabic_mod.js - Arabic Translation Support Mod
const arabicStyle = document.createElement('style');
arabicStyle.innerHTML = `
  
  #wrap, #wrap * {
      }

  #SubTitle, #SubA, #SubB, #Final, #IntroMess, #GboxTex,
  #MenInstTex, #BoxGFX, #MenAdvise, #MenCopyright,
  #MenNewGoTxA, #MenNewGoTxB, #MenNewGo2, #MenNewGo3, #MenNewGo4,
  #MenExitOp1, #MenCredits, #RevBlank, #RevWrap, #MenReview,
  #GetKeyTex, #GetMirrorTex, #GetCompTex, #GetItem,
  #GetBaseKeys, #SendGuest, #Ihead, #Items, #ItWrap,
  #CursTA, #CursTR,
  .boxtex, .boxtexrev, .ht, .hj, .hf,
  .h1, .h2, .h3, .h4, .h5, .h6, .h8, .h9, .bt1 {
    direction: rtl !important;
    unicode-bidi: isolate !important;
  }

  /* Flag slot: do not override the image here — the game swaps
     Fuk/Ffrench/Fgerman/… itself. Saudi is only via .lang-ar. */
  #MenFlags {
    direction: ltr !important;
    unicode-bidi: isolate !important;
    line-height: 1 !important;
  }
  #MenFlags.lang-ar {
    background-image: url('media/gfx/Fsaudi.png') !important;
    background-position: left 2px !important;
    background-size: contain !important;
    text-align: right !important;
    padding: 0 !important;
    padding-bottom: 0.18em !important;
      }

  /* "عرض الكل" row: icon on the left; pull the label left toward it. */
  #Ihead #Isel, #Isel {
    direction: ltr !important;
    text-align: left !important;
    unicode-bidi: isolate !important;
    display: block !important;
    line-height: 1.1 !important;
    padding-top: 0 !important;
    padding-left: 4% !important;
    padding-right: 0 !important;
    background-size: auto 85% !important;
    background-position: 0% 50% !important;
  }

  /*
    GetKey.png is a circular fob on the left (not a small top tag).
    Cover that circle and flex-center roomtex + number inside it.
    Cairo sits optically low; a little padding-bottom lifts the ink.
  */
  #GetKeyGFX #GetKeyNum, #GetKeyNum {
    top: 16% !important;
    left: 7% !important;
    width: 40% !important;
    height: 72% !important;
    font-size: 175% !important;
    line-height: 1.05 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    font-family: key !important;
    transform: none !important;
    padding: 0 0 0.45em 0 !important;
    box-sizing: border-box !important;
    direction: ltr !important;
  }
  #GetKeyNum span {
    font-size: 52% !important;
    line-height: 1.2 !important;
    display: block !important;
      }
  #GetKeyNum br {
    display: block !important;
    margin: 0 !important;
    line-height: 0.15 !important;
  }

  /*
    Save/stats help line ("تُحفظ اللعبة بعد رؤية الأرواح..."):
    the box used to stretch to the screen's right edge, so RTL
    started at the far right. Keep it in the same 40% column
    as the other menu descriptions.
  */
  #MenStatsOp {
    direction: rtl !important;
    unicode-bidi: isolate !important;
    text-align: right !important;
    left: 40% !important;
    right: auto !important;
    width: 36% !important;
  }

  #SubTitle {
    width: 40% !important;
    line-height: 1.55 !important;
  }
  #SubA, #SubB {
    line-height: 1.55 !important;
  }

  #GboxTex {
    line-height: 1.35 !important;
    overflow: hidden;
  }

  .boxtex, .boxtexrev {
    line-height: 1.35 !important;
  }

  #GetMirrorTex, #GetCompTex, #GetItem {
    line-height: 1.4 !important;
  }

  #IntroMess {
    line-height: 1.4 !important;
  }

  #MenContinue {
    line-height: 1.75 !important;
  }

  #splashtexgo {
    line-height: 1.4 !important;
    font-family: key !important;
    font-size: 240% !important;
  }
  
  #splashtex {
    font-family: key !important;
    font-size: 160% !important;
  }

  #Roomnow {
    font-family: key !important;
    font-size: 60% !important;
    font-weight: bold !important;
  }

  #ADtex {
    font-family: dead !important;
  }

  #splashtexgo span {
    display: inline-block !important;
    margin-top: 0.5em !important;
  }

  .hf {
    line-height: 1.6 !important;
    display: block !important;
    margin-bottom: 0.2em !important;
  }

  .h8 {
    line-height: 1.35 !important;
    display: block !important;
  }

  span[style*="font-size:50%"],
  span[style*="font-size:40%"] {
    line-height: 1.35 !important;
    display: block !important;
  }

  #MenContinue, #MenSave, #MenStats, #MenNew, #MenRev, #MenTut,
  #MenEVP, #MenVis, #MenCred, #MenAdv, #MenNote, #MenExit {
    direction: rtl !important;
  }
`;
document.head.appendChild(arabicStyle);

function fixItemDescSpacing() {
  var ids = ['GetMirrorTex', 'GetCompTex', 'GetItem'];
  ids.forEach(function(id) {
    var el = document.getElementById(id);
    if (!el || el.dataset.arFixed || !el.textContent.trim()) return;
    var nodes = Array.from(el.childNodes);
    var pastHf = false;
    nodes.forEach(function(node) {
      if (node.nodeType === 1 && node.classList && node.classList.contains('hf')) {
        pastHf = true;
        return;
      }
      if (pastHf && node.nodeType === 3 && node.textContent.trim()) {
        var span = document.createElement('span');
        span.style.display = 'block';
        span.style.lineHeight = '1.05';
        span.textContent = node.textContent;
        el.replaceChild(span, node);
      }
    });
    if (pastHf) el.dataset.arFixed = '1';
  });
}
setInterval(fixItemDescSpacing, 300);

function setArabicLangMark() {
  var el = document.getElementById('MenFlags');
  if (!el) return;
  var t = (el.textContent || '').trim();
  if (t === 'en' || t === 'EN') {
    el.textContent = '\u0639';
    t = '\u0639';
  }
  if (t === '\u0639') {
    el.classList.add('lang-ar');
  } else {
    el.classList.remove('lang-ar');
  }
}
setArabicLangMark();
setInterval(setArabicLangMark, 400);
if (document.body) {
  new MutationObserver(setArabicLangMark).observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}
console.log("Arabic Mod Loaded Successfully!");

// Hide control hints (#MenInfo) when Tips (#MenAdvise) or Credits (#MenCredits) are visible
setInterval(function() {
  var advise = document.getElementById('MenAdvise');
  var credits = document.getElementById('MenCredits');
  var info = document.getElementById('MenInfo');
  
  if (info && advise && credits) {
    if (parseFloat(advise.style.opacity) > 0 || parseFloat(credits.style.opacity) > 0) {
      info.style.visibility = 'hidden';
    } else {
      info.style.visibility = 'visible';
    }
  }
}, 200);

