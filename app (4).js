'use strict';

/* ============================================================
   SVG EXERCISE ILLUSTRATIONS
   Clinical line-art style matching the original handout images.
   Each SVG is 200×240 viewBox showing the figure + motion arrows.
   ============================================================ */

const SVGS = {

/* ── SVGs match the clinical handout illustrations ── */

neckRotation: `<svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="nr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker></defs>
<!-- light blue shirt, side view facing right -->
<path d="M50,250 C46,215 55,190 75,175 L90,168 Q105,163 118,168 L133,175 C152,190 158,215 155,250Z" fill="#A8D4E6" stroke="#85B8CE" stroke-width="1"/>
<!-- neck -->
<path d="M93,138 L93,170 Q105,174 117,170 L117,138Z" fill="#9B7456"/>
<!-- head profile facing RIGHT (person's left side visible) -->
<path d="M78,102 Q78,68 100,55 Q128,46 148,68 Q162,88 155,112 Q148,132 130,140 L95,140 Q80,132 78,102Z" fill="#9B7456"/>
<!-- ear (right ear, profile left side) -->
<path d="M82,100 Q75,107 77,117 Q81,122 85,119 Q83,111 84,103Z" fill="#7A5535"/>
<!-- eye (profile) -->
<ellipse cx="128" cy="88" rx="6" ry="5" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="130" cy="88" r="2.8" fill="#1a0800"/>
<!-- eyebrow -->
<path d="M122,82 Q128,79 135,80" stroke="#1a0800" stroke-width="2" fill="none" stroke-linecap="round"/>
<!-- nose tip (profile protrusion) -->
<path d="M155,110 Q162,118 158,124 Q153,122 152,118Z" fill="#7A5535"/>
<!-- mouth (profile) -->
<path d="M145,132 Q150,128 154,130" stroke="#5A3020" stroke-width="2" fill="none" stroke-linecap="round"/>
<!-- hair -->
<path d="M78,100 Q78,65 100,52 Q130,42 150,62 Q162,75 158,94 Q155,72 140,60 Q118,48 98,56 Q82,63 82,100Z" fill="#1E0E06"/>
<!-- curved arrow at chin showing rotation direction -->
<path d="M106,158 Q78,152 68,132 Q62,118 68,105" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#nr)"/>
</svg>`,

neckLateralFlexion: `<svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="nlf" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker></defs>
<!-- light blue shirt front view -->
<path d="M38,250 C34,215 42,190 62,175 L82,165 Q100,160 118,165 L138,175 C158,190 166,215 162,250Z" fill="#A8D4E6" stroke="#85B8CE" stroke-width="1"/>
<!-- neck -->
<rect x="88" y="132" width="24" height="34" rx="5" fill="#9B7456"/>
<!-- head tilted to right (figure's right = our left) -->
<g transform="rotate(18 100 132)">
  <ellipse cx="100" cy="96" rx="34" ry="38" fill="#9B7456"/>
  <!-- hair short dark -->
  <path d="M68,83 Q100,56 132,80 Q126,60 100,57 Q74,60 68,83Z" fill="#1E0E06"/>
  <!-- left eye -->
  <ellipse cx="86" cy="92" rx="6" ry="5" fill="#fff" stroke="#111" stroke-width="1"/>
  <circle cx="87" cy="92" r="2.8" fill="#1a0800"/>
  <!-- right eye -->
  <ellipse cx="114" cy="92" rx="6" ry="5" fill="#fff" stroke="#111" stroke-width="1"/>
  <circle cx="115" cy="92" r="2.8" fill="#1a0800"/>
  <!-- nose bridge hint -->
  <path d="M98,102 Q100,112 102,102" stroke="#7A5535" stroke-width="1" fill="none"/>
  <!-- mouth -->
  <path d="M91,122 Q100,127 109,122" stroke="#5A3020" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</g>
<!-- small diagonal arrow upper left -->
<path d="M70,72 L56,58" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#nlf)"/>
</svg>`,

shoulderShrugs: `<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="ss" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker></defs>
<!-- wooden chair -->
<rect x="50" y="218" width="120" height="12" rx="4" fill="#C8A870" stroke="#A08050" stroke-width="1"/>
<rect x="54" y="230" width="12" height="65" rx="4" fill="#B09060"/>
<rect x="154" y="230" width="12" height="65" rx="4" fill="#B09060"/>
<!-- grey shorts / thighs -->
<rect x="66" y="215" width="36" height="35" rx="8" fill="#9AABB8"/>
<rect x="118" y="215" width="36" height="35" rx="8" fill="#9AABB8"/>
<!-- lower legs -->
<rect x="72" y="248" width="22" height="42" rx="6" fill="#C8A878"/>
<rect x="124" y="248" width="22" height="42" rx="6" fill="#C8A878"/>
<!-- DASHED ghost: full body outline in raised shoulder position -->
<path d="M30,155 Q28,138 38,132 L64,120 L80,115 Q110,110 140,115 L156,120 L178,132 Q188,138 185,155 L182,188 L182,215 L38,215 L38,188Z" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- arms dashed raised -->
<path d="M38,138 L22,140 L20,175 L28,175" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<path d="M182,138 L198,140 L200,175 L192,175" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- SOLID shirt / torso -->
<path d="M38,175 Q36,155 48,148 L72,138 L88,133 Q110,128 132,133 L148,138 L172,148 Q184,155 182,175 L182,218 L38,218Z" fill="#A8D4E6" stroke="#85B8CE" stroke-width="1"/>
<!-- arms solid (hanging) -->
<path d="M48,150 L28,155 L26,192 L36,195" stroke="#C8A878" stroke-width="14" stroke-linecap="round" fill="none"/>
<path d="M172,150 L192,155 L194,192 L184,195" stroke="#C8A878" stroke-width="14" stroke-linecap="round" fill="none"/>
<!-- hands -->
<ellipse cx="31" cy="200" rx="10" ry="8" fill="#C8A878"/>
<ellipse cx="189" cy="200" rx="10" ry="8" fill="#C8A878"/>
<!-- neck -->
<rect x="90" y="112" width="28" height="24" rx="5" fill="#C8A878"/>
<!-- head -->
<ellipse cx="104" cy="85" rx="32" ry="35" fill="#C8A878"/>
<!-- hair (brown, short) -->
<path d="M74,78 Q104,52 134,74 Q128,55 104,52 Q80,55 74,78Z" fill="#6B4C30"/>
<!-- face minimal -->
<ellipse cx="92" cy="84" rx="5" ry="4" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="93" cy="84" r="2.2" fill="#1a0800"/>
<ellipse cx="116" cy="84" rx="5" ry="4" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="117" cy="84" r="2.2" fill="#1a0800"/>
<!-- UP arrows on shoulders -->
<line x1="52" y1="145" x2="52" y2="115" stroke="#111" stroke-width="2.8" stroke-linecap="round" marker-end="url(#ss)"/>
<line x1="168" y1="145" x2="168" y2="115" stroke="#111" stroke-width="2.8" stroke-linecap="round" marker-end="url(#ss)"/>
</svg>`,

chestPress: `<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="cp" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker></defs>
<!-- grey shorts / legs -->
<rect x="68" y="218" width="32" height="72" rx="10" fill="#9AABB8"/>
<rect x="120" y="218" width="32" height="72" rx="10" fill="#9AABB8"/>
<!-- DASHED ghost: arms hanging at sides -->
<path d="M56,155 L30,195 L24,230 Q28,234 34,232 L44,200 L58,165" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<path d="M164,155 L190,195 L196,230 Q192,234 186,232 L176,200 L162,165" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<ellipse cx="29" cy="235" rx="10" ry="8" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<ellipse cx="191" cy="235" rx="10" ry="8" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- mauve/dusty rose shirt -->
<path d="M48,158 Q44,145 56,138 L80,128 L110,122 L140,128 L164,138 Q176,145 172,158 L172,222 L48,222Z" fill="#C49090" stroke="#A87070" stroke-width="1"/>
<!-- RAISED ARMS (solid dark skin) -->
<path d="M56,148 L28,92 L36,86 L60,145" fill="#6B3820" stroke="#6B3820" stroke-width="1"/>
<path d="M164,148 L192,92 L184,86 L160,145" fill="#6B3820" stroke="#6B3820" stroke-width="1"/>
<!-- fists at top -->
<rect x="22" y="65" width="22" height="26" rx="6" fill="#6B3820" stroke="#4A2410" stroke-width="1.5"/>
<rect x="176" y="65" width="22" height="26" rx="6" fill="#6B3820" stroke="#4A2410" stroke-width="1.5"/>
<!-- neck -->
<rect x="92" y="110" width="26" height="16" rx="4" fill="#6B3820"/>
<!-- head -->
<ellipse cx="105" cy="84" rx="32" ry="36" fill="#6B3820"/>
<!-- short hair -->
<path d="M75,76 Q105,50 135,72 Q128,54 105,51 Q82,54 75,76Z" fill="#1E0E06"/>
<!-- face -->
<ellipse cx="93" cy="82" rx="5" ry="4.5" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="94" cy="82" r="2.4" fill="#0a0400"/>
<ellipse cx="117" cy="82" rx="5" ry="4.5" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="118" cy="82" r="2.4" fill="#0a0400"/>
<!-- UP arrows -->
<line x1="24" y1="80" x2="24" y2="50" stroke="#111" stroke-width="2.8" stroke-linecap="round" marker-end="url(#cp)"/>
<line x1="196" y1="80" x2="196" y2="50" stroke="#111" stroke-width="2.8" stroke-linecap="round" marker-end="url(#cp)"/>
</svg>`,

shoulderFlexion: `<svg viewBox="0 0 210 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="sf1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker>
  <marker id="sf2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker>
</defs>
<!-- wooden chair (side view, facing left) -->
<rect x="120" y="222" width="70" height="12" rx="4" fill="#C8A870" stroke="#A08050" stroke-width="1"/>
<rect x="158" y="234" width="12" height="60" rx="4" fill="#B09060"/>
<rect x="176" y="234" width="12" height="60" rx="4" fill="#B09060"/>
<!-- chair back -->
<rect x="178" y="148" width="12" height="78" rx="4" fill="#B09060"/>
<!-- leg/thigh seated -->
<rect x="104" y="222" width="68" height="24" rx="8" fill="#8A8A98"/>
<rect x="110" y="245" width="22" height="52" rx="8" fill="#C8A878"/>
<!-- lavender/purple top (torso, side view) -->
<path d="M108,128 C106,125 108,115 116,110 Q130,105 145,108 L150,112 L152,222 L106,222Z" fill="#B8A0C8" stroke="#9880A8" stroke-width="1"/>
<!-- RAISED ARM (left arm going up and forward - facing left) -->
<path d="M115,128 L62,58" stroke="#C8A878" stroke-width="14" stroke-linecap="round"/>
<!-- hand with thumb up -->
<ellipse cx="58" cy="52" rx="9" ry="7" fill="#C8A878"/>
<path d="M55,46 Q58,42 62,44 Q60,50 58,52Z" fill="#C8A878"/>
<!-- dashed start arm (relaxed, by side) -->
<path d="M115,128 L115,195" stroke="#BBB" stroke-width="10" stroke-dasharray="7,5" stroke-linecap="round"/>
<ellipse cx="115" cy="204" rx="8" ry="6" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- arc path (dashed) -->
<path d="M115,198 Q90,175 62,100 Q60,72 62,58" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4" fill="none"/>
<!-- arc arrows -->
<path d="M75,160 Q65,120 62,58" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#sf1)"/>
<path d="M116,196 Q118,165 115,128" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#sf2)"/>
<!-- neck -->
<rect x="125" y="95" width="18" height="18" rx="4" fill="#C8A878"/>
<!-- head (woman, side profile facing left) -->
<ellipse cx="128" cy="76" rx="26" ry="28" fill="#C8A878"/>
<!-- dark hair with bun/loose -->
<path d="M104,70 Q128,48 153,66 Q148,50 128,47 Q108,50 104,70Z" fill="#2A1A0A"/>
<path d="M104,82 Q96,96 100,112 Q106,98 104,82Z" fill="#2A1A0A"/>
<!-- eye profile -->
<ellipse cx="118" cy="73" rx="4" ry="3.5" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="119" cy="73" r="2" fill="#1a0800"/>
</svg>`,

seatedRows: `<svg viewBox="0 0 210 300" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="sr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker></defs>
<!-- wooden chair (side view, person facing left) -->
<rect x="110" y="218" width="80" height="12" rx="4" fill="#C8A870" stroke="#A08050" stroke-width="1"/>
<rect x="148" y="230" width="12" height="62" rx="4" fill="#B09060"/>
<rect x="170" y="230" width="12" height="62" rx="4" fill="#B09060"/>
<!-- chair back -->
<rect x="170" y="145" width="12" height="78" rx="4" fill="#B09060"/>
<!-- dark grey shorts / thighs -->
<rect x="110" y="216" width="62" height="28" rx="8" fill="#4A5560"/>
<!-- lower leg -->
<rect x="116" y="243" width="22" height="52" rx="8" fill="#9B7456"/>
<!-- teal/blue sleeveless top (torso, side view, facing left) -->
<path d="M108,122 C106,120 106,112 114,108 Q128,102 144,105 L148,108 L150,220 L106,220Z" fill="#5A9BAA" stroke="#3A7B8A" stroke-width="1"/>
<!-- arm pulled BACK (solid) — upper arm -->
<path d="M112,132 L76,150" stroke="#9B7456" stroke-width="14" stroke-linecap="round"/>
<!-- forearm -->
<path d="M76,150 L64,172" stroke="#9B7456" stroke-width="12" stroke-linecap="round"/>
<!-- fist -->
<ellipse cx="60" cy="180" rx="10" ry="8" fill="#9B7456"/>
<!-- dashed start (arm forward/relaxed) -->
<path d="M112,132 L140,148" stroke="#BBB" stroke-width="10" stroke-dasharray="7,5" stroke-linecap="round"/>
<path d="M140,148 L146,170" stroke="#BBB" stroke-width="8" stroke-dasharray="7,5" stroke-linecap="round"/>
<ellipse cx="148" cy="178" rx="9" ry="7" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- neck -->
<rect x="124" y="98" width="18" height="14" rx="4" fill="#9B7456"/>
<!-- head (dark-skinned woman, side profile facing left, curly hair) -->
<ellipse cx="128" cy="78" rx="26" ry="28" fill="#7A4820"/>
<!-- curly hair -->
<circle cx="112" cy="66" r="14" fill="#1E0E06"/>
<circle cx="125" cy="58" r="13" fill="#1E0E06"/>
<circle cx="140" cy="60" r="12" fill="#1E0E06"/>
<circle cx="150" cy="70" r="10" fill="#1E0E06"/>
<!-- profile eye -->
<ellipse cx="118" cy="76" rx="4" ry="3.5" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="119" cy="76" r="2" fill="#1a0800"/>
<!-- backward arrow -->
<path d="M76,150 L44,148" stroke="#111" stroke-width="2.8" fill="none" stroke-linecap="round" marker-end="url(#sr)"/>
</svg>`,

shoulderAbduction: `<svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="sa1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker>
  <marker id="sa2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker>
</defs>
<!-- wooden chair -->
<rect x="44" y="212" width="120" height="12" rx="4" fill="#C8A870" stroke="#A08050" stroke-width="1"/>
<rect x="50" y="224" width="12" height="62" rx="4" fill="#B09060"/>
<rect x="150" y="224" width="12" height="62" rx="4" fill="#B09060"/>
<!-- grey shorts / thighs -->
<rect x="60" y="210" width="36" height="30" rx="8" fill="#9AABB8"/>
<rect x="112" y="210" width="36" height="30" rx="8" fill="#9AABB8"/>
<!-- lower legs -->
<rect x="66" y="238" width="22" height="50" rx="7" fill="#C8A878"/>
<rect x="118" y="238" width="22" height="50" rx="7" fill="#C8A878"/>
<!-- light blue shirt -->
<path d="M40,170 Q38,155 50,148 L74,138 L104,132 L134,138 L158,148 Q170,155 168,170 L168,215 L40,215Z" fill="#A8D4E6" stroke="#85B8CE" stroke-width="1"/>
<!-- LEFT arm at side (solid, hanging) -->
<path d="M50,155 L28,190" stroke="#C8A878" stroke-width="14" stroke-linecap="round"/>
<ellipse cx="24" cy="198" rx="10" ry="8" fill="#C8A878"/>
<!-- RIGHT arm RAISED to side (solid) -->
<path d="M158,148 L210,68" stroke="#C8A878" stroke-width="14" stroke-linecap="round"/>
<!-- thumb up hand at top -->
<ellipse cx="214" cy="62" rx="9" ry="7" fill="#C8A878"/>
<path d="M212,56 Q215,52 218,54 Q217,60 214,62Z" fill="#C8A878"/>
<!-- dashed ghost: right arm at side (start) -->
<path d="M158,155 L188,192" stroke="#BBB" stroke-width="10" stroke-dasharray="7,5" stroke-linecap="round"/>
<ellipse cx="192" cy="200" rx="9" ry="7" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- arc (dashed) showing path -->
<path d="M192,198 Q206,160 214,62" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4" fill="none"/>
<!-- arc arrows -->
<path d="M208,125 Q212,90 214,62" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#sa1)"/>
<path d="M193,196 Q198,165 208,125" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#sa2)"/>
<!-- neck -->
<rect x="90" y="118" width="28" height="18" rx="5" fill="#C8A878"/>
<!-- head (man, medium skin) -->
<ellipse cx="104" cy="92" rx="32" ry="34" fill="#C8A878"/>
<!-- short brown hair -->
<path d="M74,84 Q104,58 134,80 Q128,62 104,59 Q80,62 74,84Z" fill="#6B4C30"/>
<!-- face -->
<ellipse cx="92" cy="90" rx="5" ry="4.5" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="93" cy="90" r="2.4" fill="#1a0800"/>
<ellipse cx="116" cy="90" rx="5" ry="4.5" fill="#fff" stroke="#111" stroke-width="1"/>
<circle cx="117" cy="90" r="2.4" fill="#1a0800"/>
<!-- nose minimal -->
<path d="M102,100 L100,108" stroke="#A07850" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`,

internalExternalRotation: `<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="ier1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker>
  <marker id="ier2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker>
</defs>
<!-- wooden chair -->
<rect x="44" y="218" width="130" height="12" rx="4" fill="#C8A870" stroke="#A08050" stroke-width="1"/>
<rect x="50" y="230" width="12" height="62" rx="4" fill="#B09060"/>
<rect x="156" y="230" width="12" height="62" rx="4" fill="#B09060"/>
<!-- grey shorts -->
<rect x="60" y="215" width="40" height="30" rx="8" fill="#9AABB8"/>
<rect x="118" y="215" width="40" height="30" rx="8" fill="#9AABB8"/>
<!-- lower legs -->
<rect x="66" y="243" width="22" height="48" rx="7" fill="#7A4820"/>
<rect x="124" y="243" width="22" height="48" rx="7" fill="#7A4820"/>
<!-- light blue sleeveless top (woman, front view) -->
<path d="M48,175 Q46,158 58,150 L82,140 L110,134 L138,140 L162,150 Q174,158 172,175 L172,220 L48,220Z" fill="#9AC0D0" stroke="#7AA0B0" stroke-width="1"/>
<!-- upper arms (elbows bent at sides) -->
<path d="M58,158 L28,174" stroke="#7A4820" stroke-width="14" stroke-linecap="round"/>
<path d="M162,158 L192,174" stroke="#7A4820" stroke-width="14" stroke-linecap="round"/>
<!-- forearms INWARD (current solid position) -->
<path d="M28,174 L50,190" stroke="#7A4820" stroke-width="12" stroke-linecap="round"/>
<path d="M192,174 L170,190" stroke="#7A4820" stroke-width="12" stroke-linecap="round"/>
<!-- fists (inward) -->
<ellipse cx="56" cy="196" rx="10" ry="8" fill="#7A4820"/>
<ellipse cx="164" cy="196" rx="10" ry="8" fill="#7A4820"/>
<!-- forearms OUTWARD (dashed ghost) -->
<path d="M28,174 L10,188" stroke="#BBB" stroke-width="10" stroke-dasharray="6,4" stroke-linecap="round"/>
<path d="M192,174 L210,188" stroke="#BBB" stroke-width="10" stroke-dasharray="6,4" stroke-linecap="round"/>
<ellipse cx="8" cy="195" rx="9" ry="7" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<ellipse cx="212" cy="195" rx="9" ry="7" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- curved arrows outward -->
<path d="M54,194 Q38,186 12,192" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#ier1)"/>
<path d="M166,194 Q182,186 208,192" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#ier2)"/>
<!-- neck -->
<rect x="96" y="118" width="26" height="20" rx="5" fill="#7A4820"/>
<!-- head (dark-skinned woman, curly hair, front) -->
<ellipse cx="109" cy="92" rx="30" ry="32" fill="#7A4820"/>
<!-- curly hair -->
<circle cx="88" cy="78" r="15" fill="#1E0E06"/>
<circle cx="104" cy="70" r="14" fill="#1E0E06"/>
<circle cx="122" cy="70" r="14" fill="#1E0E06"/>
<circle cx="134" cy="80" r="12" fill="#1E0E06"/>
<!-- eyes (relaxed, serene) -->
<path d="M96,92 Q100,95 104,92" stroke="#1a0800" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<path d="M114,92 Q118,95 122,92" stroke="#1a0800" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- nose -->
<path d="M107,98 Q109,104 111,98" stroke="#5A3010" stroke-width="1.2" fill="none"/>
<!-- mouth -->
<path d="M100,114 Q109,118 118,114" stroke="#5A3010" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`,

scapularProtraction: `<svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="sp" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker></defs>
<!-- table/mattress surface -->
<rect x="4" y="192" width="212" height="38" rx="6" fill="#D8D4D0" stroke="#B8B4B0" stroke-width="1"/>
<rect x="4" y="192" width="212" height="14" rx="6" fill="#E8E4E2"/>
<!-- white/grey shirt on lying body -->
<rect x="60" y="165" width="148" height="32" rx="10" fill="#D8DCE0" stroke="#B0B4B8" stroke-width="1"/>
<!-- grey shorts visible -->
<rect x="148" y="165" width="62" height="28" rx="8" fill="#9AABB8"/>
<!-- ARM raised straight perpendicular (skin tone) -->
<!-- dashed ghost arm (starting position, slightly different) -->
<path d="M96,165 L96,100" stroke="#BBB" stroke-width="12" stroke-dasharray="7,5" stroke-linecap="round"/>
<!-- solid arm raised -->
<path d="M92,165 L88,72" stroke="#9B7456" stroke-width="14" stroke-linecap="round"/>
<!-- hand/wrist at top -->
<rect x="82" y="55" width="18" height="22" rx="6" fill="#9B7456" stroke="#7A5535" stroke-width="1.5"/>
<!-- small dashed oval showing shoulder lifts off surface -->
<ellipse cx="92" cy="164" rx="20" ry="7" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- head lying on surface (profile) -->
<ellipse cx="38" cy="176" rx="28" ry="22" fill="#9B7456"/>
<!-- dark hair spread -->
<path d="M14,162 Q38,148 62,160 Q55,146 38,143 Q21,146 14,162Z" fill="#1E0E06"/>
<!-- profile: eye -->
<circle cx="52" cy="174" r="3" fill="#1a0800"/>
<!-- nose hint -->
<path d="M62,166 L68,172 L64,174" fill="#7A5535"/>
<!-- mouth hint -->
<path d="M58,180 Q63,182 66,180" stroke="#5A3020" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- upward arrow -->
<line x1="90" y1="160" x2="86" y2="112" stroke="#111" stroke-width="2.8" stroke-linecap="round" marker-end="url(#sp)"/>
</svg>`,

wallPress: `<svg viewBox="0 0 210 300" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="wp" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker></defs>
<!-- wall (right) -->
<rect x="182" y="0" width="22" height="300" fill="#E8E6E2" stroke="#C8C6C2" stroke-width="1"/>
<rect x="182" y="0" width="5" height="300" fill="#D0CEC8"/>
<!-- floor -->
<rect x="0" y="258" width="210" height="42" fill="#E8E6E2"/>
<rect x="0" y="258" width="210" height="4" fill="#D0CEC8"/>
<!-- DASHED ghost: upright standing start position -->
<path d="M76,85 Q76,68 90,62 Q110,55 118,68 L122,85 L125,115 L130,165 L128,220 L72,220 L70,165 L75,115Z" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- dashed legs upright -->
<rect x="80" y="220" width="16" height="50" rx="6" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<rect x="104" y="220" width="16" height="50" rx="6" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- SOLID figure leaning forward -->
<!-- feet -->
<ellipse cx="86" cy="265" rx="20" ry="8" fill="#D4B896"/>
<!-- lower legs (dark skin) -->
<rect x="74" y="225" width="20" height="42" rx="7" fill="#9B7456"/>
<!-- grey shorts -->
<rect x="68" y="210" width="46" height="22" rx="8" fill="#9AABB8"/>
<!-- mauve/pink shirt (torso, leaning forward - rotated) -->
<g transform="rotate(-22 100 200)">
  <path d="M65,150 Q62,138 74,130 L95,120 L115,116 L135,120 L155,130 Q166,138 163,150 L163,215 L65,215Z" fill="#C49090" stroke="#A87070" stroke-width="1"/>
  <!-- arms extended to wall -->
  <path d="M74,140 L160,115" stroke="#9B7456" stroke-width="14" stroke-linecap="round"/>
  <!-- hands on wall -->
  <rect x="162" y="108" width="16" height="18" rx="5" fill="#9B7456" stroke="#7A5535" stroke-width="1.5"/>
  <!-- neck -->
  <rect x="97" y="104" width="20" height="18" rx="4" fill="#9B7456"/>
  <!-- head -->
  <ellipse cx="107" cy="86" rx="27" ry="29" fill="#9B7456"/>
  <!-- short hair -->
  <path d="M82,76 Q107,54 132,72 Q126,56 107,53 Q88,56 82,76Z" fill="#1E0E06"/>
  <!-- profile eye -->
  <ellipse cx="120" cy="82" rx="4.5" ry="4" fill="#fff" stroke="#111" stroke-width="1"/>
  <circle cx="121" cy="82" r="2.2" fill="#1a0800"/>
</g>
<!-- horizontal arrow toward wall -->
<path d="M118,138 L158,138" stroke="#111" stroke-width="2.8" fill="none" stroke-linecap="round" marker-end="url(#wp)"/>
</svg>`,

standingRows: `<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="str" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="#111"/></marker></defs>
<!-- brown table/surface -->
<rect x="108" y="185" width="100" height="15" rx="5" fill="#C8A870" stroke="#A08050" stroke-width="1"/>
<rect x="162" y="200" width="14" height="88" rx="5" fill="#B09060"/>
<rect x="130" y="200" width="14" height="88" rx="5" fill="#B09060"/>
<!-- floor line -->
<rect x="0" y="260" width="220" height="40" fill="#E8E6E2"/>
<!-- standing legs -->
<rect x="54" y="220" width="20" height="44" rx="8" fill="#9AABB8"/>
<rect x="82" y="220" width="20" height="44" rx="8" fill="#9AABB8"/>
<!-- white shoes/feet -->
<ellipse cx="64" cy="266" rx="16" ry="8" fill="#E0DCD8"/>
<ellipse cx="92" cy="266" rx="16" ry="8" fill="#E0DCD8"/>
<!-- pink/salmon top — torso bent forward ~45° -->
<g transform="rotate(-42 95 200)">
  <!-- torso -->
  <path d="M62,138 Q60,124 72,118 L95,110 L118,108 L140,110 L160,118 Q170,124 168,138 L168,200 L62,200Z" fill="#E8A0A8" stroke="#C880A0" stroke-width="1"/>
  <!-- neck -->
  <rect x="95" y="96" width="20" height="18" rx="4" fill="#C8A878"/>
  <!-- head (woman, facing left - profile) -->
  <ellipse cx="102" cy="76" rx="25" ry="27" fill="#C8A878"/>
  <!-- light brown hair (long, side profile) -->
  <path d="M80,68 Q102,48 124,64 Q118,50 102,47 Q86,50 80,68Z" fill="#8B6040"/>
  <path d="M80,80 Q72,95 76,112 Q82,96 80,80Z" fill="#8B6040"/>
  <!-- profile eye -->
  <ellipse cx="114" cy="72" rx="4" ry="3.5" fill="#fff" stroke="#111" stroke-width="1"/>
  <circle cx="115" cy="72" r="2" fill="#1a0800"/>
</g>
<!-- arm resting on table (support) -->
<path d="M86,185 L140,185" stroke="#C8A878" stroke-width="13" stroke-linecap="round"/>
<ellipse cx="146" cy="185" rx="10" ry="8" fill="#C8A878"/>
<!-- ROWING ARM raised up and back (solid) -->
<path d="M72,188 L55,170" stroke="#C8A878" stroke-width="13" stroke-linecap="round"/>
<path d="M55,170 L42,148" stroke="#C8A878" stroke-width="11" stroke-linecap="round"/>
<ellipse cx="38" cy="142" rx="10" ry="8" fill="#C8A878"/>
<!-- dashed start (arm hanging down) -->
<path d="M72,188 L72,228" stroke="#BBB" stroke-width="10" stroke-dasharray="7,5" stroke-linecap="round"/>
<ellipse cx="72" cy="236" rx="9" ry="7" fill="none" stroke="#BBB" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- upward arrow for the rowing movement -->
<line x1="52" y1="170" x2="40" y2="148" stroke="#111" stroke-width="2.8" stroke-linecap="round" marker-end="url(#str)"/>
</svg>`

};

/* ============================================================
   EXERCISE DATA
   ============================================================ */

const EXERCISES = [
  {
    id: 'neck-rotation',
    name: 'Neck Rotation',
    muscles: null,
    instruction: 'Turn your head to one side as if looking over your shoulder, until you feel a stretch. Hold for 3 seconds and then relax. Repeat on the other side.',
    reps: '10 times on each side',
    hold: 'Hold 3 seconds',
    svgKey: 'neckRotation',
    timerDuration: 60
  },
  {
    id: 'neck-lateral-flexion',
    name: 'Neck Lateral Flexion',
    muscles: null,
    instruction: 'Tilt your head so that your right ear stretches down towards your right shoulder. Hold for 3 seconds and then relax. Repeat on the left side.',
    reps: '10 times on each side',
    hold: 'Hold 3 seconds',
    svgKey: 'neckLateralFlexion',
    timerDuration: 60
  },
  {
    id: 'shoulder-shrugs',
    name: 'Shoulder Shrugs',
    muscles: 'upper trapezius muscle',
    instruction: 'Lift your shoulders towards your ears and lower them back down.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'shoulderShrugs',
    timerDuration: 30
  },
  {
    id: 'chest-press',
    name: 'Chest Press',
    muscles: 'upper trapezius muscle',
    instruction: 'Begin with your arms at your side, fists parallel to shoulders. Punch up towards the ceiling then lower arms back down to starting position.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'chestPress',
    timerDuration: 30
  },
  {
    id: 'shoulder-flexion',
    name: 'Shoulder Flexion',
    muscles: 'anterior deltoid muscle',
    instruction: 'Begin with arms relaxed at your side. Slowly raise one arm up straight out in front of you with your thumb pointing up. Relax your arm back down. Make sure to maintain good posture.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'shoulderFlexion',
    timerDuration: 30
  },
  {
    id: 'seated-rows',
    name: 'Seated Shoulder Rows',
    muscles: 'rhomboid major and middle trapezius muscles',
    instruction: 'Begin sitting with your arm at your side and elbow bent. Bring your arm and shoulder back, focusing on moving your shoulder blade closer to the middle of your back.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'seatedRows',
    timerDuration: 30
  },
  {
    id: 'shoulder-abduction',
    name: 'Shoulder Abduction',
    muscles: 'serratus anterior and middle deltoid muscles',
    instruction: 'Begin with arms at side and raise one arm up and out to the side, keeping your thumb up. Make sure to maintain good posture.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'shoulderAbduction',
    timerDuration: 30
  },
  {
    id: 'internal-external-rotation',
    name: 'Internal & External Rotation',
    muscles: 'rotator cuff muscles',
    instruction: 'Keep your arms at your side with elbows bent and move forearms outwards and inwards. You can do one or both arms at a time.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'internalExternalRotation',
    timerDuration: 30
  },
  {
    id: 'scapular-protraction',
    name: 'Scapular Protraction',
    muscles: 'serratus anterior muscle',
    instruction: 'Lay on your back and place your arm straight out in front of you, then lift your shoulder off of the surface and back down.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'scapularProtraction',
    timerDuration: 30
  },
  {
    id: 'wall-press',
    name: 'Wall Press',
    muscles: 'pectoralis major muscle',
    instruction: "Stand an arm's width away from the wall with your hands on the wall. Lower yourself towards the wall, bending at the elbows, then push off of the wall while straightening out your elbows until you are in standing position again.",
    reps: '10 repetitions',
    hold: null,
    svgKey: 'wallPress',
    timerDuration: 45
  },
  {
    id: 'standing-rows',
    name: 'Standing Rows',
    muscles: 'rhomboid major and middle trapezius muscles',
    instruction: "Begin standing with one arm on a lower surface and the other arm at your side and elbow bent. Bring your arm and shoulder back, focusing on moving your shoulder blade closer to the middle of your back.",
    reps: '10 repetitions',
    hold: null,
    svgKey: 'standingRows',
    timerDuration: 30
  }
];

/* ============================================================
   STORAGE LAYER
   All data lives exclusively on the user's device.
   ============================================================ */

const Store = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v !== null ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {
      console.warn('Storage full:', e);
    }
  },
  profile()   { return Store.get('profile', null); },
  completions() { return Store.get('completions', {}); },
  todayKey()  { return new Date().toISOString().slice(0, 10); },
  todayCompletions() {
    const all = Store.completions();
    return all[Store.todayKey()] || {};
  },
  markDone(exerciseId, done) {
    const all = Store.completions();
    const key = Store.todayKey();
    if (!all[key]) all[key] = {};
    all[key][exerciseId] = done;
    Store.set('completions', all);
  },
  skips()       { return Store.get('skips', {}); },
  todaySkips()  {
    const all = Store.skips();
    return all[Store.todayKey()] || {};
  },
  skipExercise(id, reason, text = '') {
    const all = Store.skips();
    const key = Store.todayKey();
    if (!all[key]) all[key] = {};
    all[key][id] = { reason, text, time: Date.now() };
    Store.set('skips', all);
  },
  isTodayComplete() {
    const done  = Store.todayCompletions();
    const skips = Store.todaySkips();
    return EXERCISES.every(e => done[e.id] || skips[e.id]);
  },
  isDayComplete(dateKey) {
    const done  = Store.completions()[dateKey] || {};
    const skips = (Store.skips()[dateKey]) || {};
    return EXERCISES.every(e => done[e.id] || skips[e.id]);
  },
  streakCount() {
    let streak = 0;
    const d = new Date();
    d.setDate(d.getDate() - 1);
    for (let i = 0; i < 365; i++) {
      const key = d.toISOString().slice(0, 10);
      if (Store.isDayComplete(key)) { streak++; d.setDate(d.getDate() - 1); }
      else break;
    }
    if (Store.isTodayComplete()) streak++;
    return streak;
  },
  totalDays() {
    const allKeys = new Set([
      ...Object.keys(Store.completions()),
      ...Object.keys(Store.skips())
    ]);
    return [...allKeys].filter(k => Store.isDayComplete(k)).length;
  }
};

/* IndexedDB for voice recordings (larger than localStorage limit) */
const RecDB = (() => {
  let db = null;
  const open = () => new Promise((res, rej) => {
    if (db) return res(db);
    const req = indexedDB.open('prehab-recordings', 1);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('recordings')) {
        const store = d.createObjectStore('recordings', { keyPath: 'id' });
        store.createIndex('date', 'date', { unique: false });
      }
    };
    req.onsuccess = e => { db = e.target.result; res(db); };
    req.onerror   = e => rej(e.target.error);
  });
  return {
    async save(rec) {
      const d = await open();
      return new Promise((res, rej) => {
        const tx = d.transaction('recordings', 'readwrite');
        tx.objectStore('recordings').put(rec);
        tx.oncomplete = () => res();
        tx.onerror = e => rej(e.target.error);
      });
    },
    async getAll() {
      const d = await open();
      return new Promise((res, rej) => {
        const tx = d.transaction('recordings', 'readonly');
        const req = tx.objectStore('recordings').getAll();
        req.onsuccess = e => res(e.target.result.sort((a, b) => b.date - a.date));
        req.onerror = e => rej(e.target.error);
      });
    },
    async delete(id) {
      const d = await open();
      return new Promise((res, rej) => {
        const tx = d.transaction('recordings', 'readwrite');
        tx.objectStore('recordings').delete(id);
        tx.oncomplete = () => res();
        tx.onerror = e => rej(e.target.error);
      });
    }
  };
})();

/* ============================================================
   APP STATE
   ============================================================ */

const State = {
  view: 'home',
  exerciseDetail: null,
  calMonth: null,
  recording: false,
  mediaRecorder: null,
  recChunks: [],
  recTimer: null,
  recSeconds: 0,
  currentAudio: null,
  saveTimer: null,
  timerTarget: 30,
  timerLeft: 30,
  timerRunning: false,
  timerInterval: null,
  showSkipPanel: false
};

/* ============================================================
   ROUTER
   ============================================================ */

function nav(view, data = {}) {
  if (State.timerInterval) { clearInterval(State.timerInterval); State.timerInterval = null; }
  State.timerRunning = false;
  State.showSkipPanel = false;
  if (view === 'exercise') {
    const ex = EXERCISES.find(e => e.id === data.id);
    State.exerciseDetail = data.id;
    State.timerTarget = ex ? ex.timerDuration : 30;
    State.timerLeft   = State.timerTarget;
  }
  State.view = view;
  render();
  window.scrollTo(0, 0);
}

/* ============================================================
   RENDER ENGINE
   ============================================================ */

function render() {
  const app = document.getElementById('app');
  const profile = Store.profile();

  if (!profile) { app.innerHTML = renderOnboarding(); bindOnboarding(); return; }

  const todayDone = Store.isTodayComplete();

  switch (State.view) {
    case 'home':
      if (todayDone && State._justCompleted) {
        app.innerHTML = renderCompletion(profile);
        bindCompletion();
      } else {
        app.innerHTML = renderHome(profile);
        bindHome();
      }
      break;
    case 'exercises':
      app.innerHTML = renderExerciseList(profile);
      bindExerciseList();
      break;
    case 'exercise':
      app.innerHTML = renderExerciseDetail();
      bindExerciseDetail();
      break;
    case 'calendar':
      app.innerHTML = renderCalendar();
      bindCalendar();
      break;
    case 'recordings':
      app.innerHTML = renderRecordings();
      bindRecordings();
      break;
    case 'notes':
      app.innerHTML = renderNotes();
      bindNotes();
      break;
  }
}

/* ─── Nav icons (inline SVG) ─────────────────────────────── */
const NAV_ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  exercises: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  notes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
};

function navBar(active) {
  const tabs = [
    { id: 'home',       label: 'Home',      icon: NAV_ICONS.home },
    { id: 'exercises',  label: 'Exercises', icon: NAV_ICONS.exercises },
    { id: 'calendar',   label: 'Progress',  icon: NAV_ICONS.calendar },
    { id: 'recordings', label: 'Voice',     icon: NAV_ICONS.mic },
    { id: 'notes',      label: 'Notes',     icon: NAV_ICONS.notes }
  ];
  return `<nav class="nav">
    ${tabs.map(t => `
      <button class="nav-btn ${t.id === active ? 'active' : ''}" data-nav="${t.id}">
        ${t.icon}<span>${t.label}</span>
      </button>`).join('')}
  </nav>`;
}

function bindNav() {
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => { State._justCompleted = false; nav(btn.dataset.nav); });
  });
}

/* ─── Onboarding ─────────────────────────────────────────── */
function renderOnboarding() {
  return `<div class="screen">
    <div class="onboard-hero">
      <div class="onboard-logo">🏃</div>
      <h1>PreHab</h1>
      <p>Neck surgery preparation exercises to keep you moving and strong before your operation.</p>
    </div>
    <div class="onboard-form">
      <div class="warn-box">
        <span>⚠️</span>
        <span>All your information stays private on this device and is never shared or transmitted.</span>
      </div>
      <div class="form-group">
        <label for="inp-name">Your first name</label>
        <input id="inp-name" type="text" placeholder="e.g. Alex" autocomplete="off" autocorrect="off" spellcheck="false" maxlength="40"/>
      </div>
      <div class="form-group">
        <label for="inp-age">Your age</label>
        <input id="inp-age" type="number" placeholder="e.g. 52" min="18" max="99"/>
      </div>
      <div class="form-group">
        <label for="inp-surgery">Date of surgery</label>
        <input id="inp-surgery" type="date"/>
        <span class="form-hint">Used only to show your countdown — stored locally.</span>
      </div>
      <button class="btn btn-primary" id="onboard-submit" disabled>Get Started</button>
    </div>
  </div>`;
}

function bindOnboarding() {
  const nameI    = document.getElementById('inp-name');
  const ageI     = document.getElementById('inp-age');
  const surgeryI = document.getElementById('inp-surgery');
  const submit   = document.getElementById('onboard-submit');

  // Default surgery date to 6 weeks from now
  const def = new Date(); def.setDate(def.getDate() + 42);
  surgeryI.value = def.toISOString().slice(0, 10);
  surgeryI.min   = new Date().toISOString().slice(0, 10);

  const check = () => {
    submit.disabled = !(nameI.value.trim() && ageI.value && surgeryI.value);
  };
  [nameI, ageI, surgeryI].forEach(el => el.addEventListener('input', check));
  check();

  submit.addEventListener('click', () => {
    Store.set('profile', {
      name: nameI.value.trim(),
      age: parseInt(ageI.value),
      surgeryDate: surgeryI.value
    });
    render();
  });
}

/* ─── Home ───────────────────────────────────────────────── */
function renderHome(profile) {
  const today    = Store.todayCompletions();
  const skips    = Store.todaySkips();
  const done     = EXERCISES.filter(e => today[e.id]).length;
  const total    = EXERCISES.length;
  const pct      = Math.round((done / total) * 100);
  const streak   = Store.streakCount();
  const daysLeft = daysToSurgery(profile.surgeryDate);

  const greetingHour = new Date().getHours();
  const greeting = greetingHour < 12 ? 'Good morning' : greetingHour < 17 ? 'Good afternoon' : 'Good evening';

  const dateStr = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

  return `<div class="screen">
    <div class="home-hero">
      <div class="home-greeting">${greeting}, ${profile.name} 👋</div>
      <div class="home-date">${dateStr}</div>
      <div class="countdown-bar">
        <div class="countdown-pill">
          <div class="num">${Math.max(0, daysLeft)}</div>
          <div class="lbl">days to surgery</div>
        </div>
        <div class="countdown-pill">
          <div class="num">${streak}</div>
          <div class="lbl">day streak</div>
        </div>
        <div class="countdown-pill">
          <div class="num">${Store.totalDays()}</div>
          <div class="lbl">days done</div>
        </div>
      </div>
      <div class="today-progress">
        <div class="prog-bar-wrap">
          <div class="prog-label">Today: ${done} of ${total} exercises ${Store.isTodayComplete() ? '✓' : ''}</div>
          <div class="prog-bar-bg"><div class="prog-bar-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
    </div>
    <div class="content with-nav">
      ${Store.isTodayComplete()
        ? `<div class="card" style="text-align:center;padding:22px 16px;">
             <div style="font-size:48px;margin-bottom:8px;">🎉</div>
             <div style="font-weight:700;font-size:1.1rem;color:var(--success);">All done for today!</div>
             <div class="text-sm text-mute mt-8">Great work. Come back tomorrow to keep your streak going.</div>
           </div>`
        : `<div class="warn-box">
             <span>⚠️</span>
             <span><strong>Work within your pain tolerance.</strong> Stop immediately if you experience pain. Maintain good posture throughout.</span>
           </div>`
      }
      <div class="section-label">Today's exercises</div>
      ${EXERCISES.slice(0, 4).map(e => exerciseListItem(e, today[e.id], skips[e.id])).join('')}
      <button class="btn btn-primary mt-8" id="home-see-all">
        ${NAV_ICONS.exercises} See all ${total} exercises
      </button>
      <div class="card mt-16" style="background:#EBF5FB;">
        <div style="font-weight:600;margin-bottom:6px;color:var(--accent);">General Instructions</div>
        <div class="text-sm" style="color:var(--text);line-height:1.65;">
          Do <strong>10 repetitions, 1–3 times per day, 5–7 days per week.</strong>
          Maintain good posture. Keep shoulders, back, neck and head in the middle of your body.
          These exercises can be done in front of a mirror.
          <strong>Build up endurance slowly.</strong>
        </div>
      </div>
    </div>
    ${navBar('home')}
  </div>`;
}

function bindHome() {
  bindNav();
  document.querySelectorAll('[data-ex-id]').forEach(el => {
    el.addEventListener('click', () => nav('exercise', { id: el.dataset.exId }));
  });
  const seeAll = document.getElementById('home-see-all');
  if (seeAll) seeAll.addEventListener('click', () => nav('exercises'));
}

/* ─── Exercise list ──────────────────────────────────────── */
function exerciseListItem(ex, done, skipped) {
  const cls = done ? 'done' : skipped ? 'skipped' : '';
  const checkIcon = done
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
    : skipped
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`
    : '';
  return `<div class="ex-item ${cls}" data-ex-id="${ex.id}">
    <div class="ex-thumb">
      <img src="images/${ex.id}.jpg" alt="${ex.name}"
           style="width:100%;height:100%;object-fit:cover;border-radius:10px;"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <div style="display:none;width:100%;height:100%;align-items:center;justify-content:center">${SVGS[ex.svgKey] || ''}</div>
    </div>
    <div class="ex-info">
      <div class="ex-name">${ex.name}</div>
      ${ex.muscles ? `<div class="ex-muscle">${ex.muscles}</div>` : ''}
      <div class="ex-reps">${ex.reps}${ex.hold ? ` · ${ex.hold}` : ''}</div>
      ${skipped ? `<div style="font-size:.72rem;color:var(--warn-text);margin-top:2px;">Skipped today</div>` : ''}
    </div>
    <div class="check-ring ${done ? 'done' : skipped ? 'skipped' : ''}">${checkIcon}</div>
  </div>`;
}

function renderExerciseList(profile) {
  const today = Store.todayCompletions();
  const skips = Store.todaySkips();
  const done  = EXERCISES.filter(e => today[e.id] || skips[e.id]).length;
  return `<div class="screen">
    <div class="page-header">
      <div>
        <h2>Today's Exercises</h2>
        <p>${done} of ${EXERCISES.length} addressed</p>
      </div>
    </div>
    <div class="content with-nav">
      <div class="info-box">
        10 reps · 1–3× daily · 5–7 days/week · Work within your pain tolerance
      </div>
      ${EXERCISES.map(e => exerciseListItem(e, today[e.id], skips[e.id])).join('')}
    </div>
    ${navBar('exercises')}
  </div>`;
}

function bindExerciseList() {
  bindNav();
  document.querySelectorAll('[data-ex-id]').forEach(el => {
    el.addEventListener('click', () => nav('exercise', { id: el.dataset.exId }));
  });
}

/* ─── Exercise detail ────────────────────────────────────── */
function renderExerciseDetail() {
  const ex      = EXERCISES.find(e => e.id === State.exerciseDetail);
  const today   = Store.todayCompletions();
  const skips   = Store.todaySkips();
  const done    = today[ex.id];
  const skipped = skips[ex.id];
  const exIdx   = EXERCISES.findIndex(e => e.id === ex.id);
  const nextEx  = EXERCISES[exIdx + 1] || null;

  // Circular timer maths (r=44, circumference=276.46)
  const CIRC    = 276.46;
  const tLeft   = State.timerLeft;
  const arcOffset = CIRC * (1 - tLeft / State.timerTarget);
  const topLabel  = State.timerRunning
    ? 'IN PROGRESS…'
    : tLeft === 0
    ? 'COMPLETE!'
    : `${State.timerTarget} SECONDS · TAP START WHEN READY`;
  const hint = ex.hold
    ? `Hold each position for ${ex.hold.toLowerCase()} before returning.`
    : 'Aim for smooth, controlled movements.';

  const skipPanelHtml = `
    <div class="skip-panel" id="skip-panel" style="display:${State.showSkipPanel ? 'block' : 'none'}">
      <div class="skip-panel-title">Why are you skipping?</div>
      <div class="skip-opts">
        <button class="skip-opt" data-reason="too-difficult">This is too difficult for me</button>
        <button class="skip-opt" data-reason="dislike">I do not like this exercise</button>
        <button class="skip-opt" data-reason="other">Other</button>
      </div>
      <div id="skip-other-wrap" style="display:none">
        <input id="skip-other-text" class="skip-other-input" type="text" placeholder="Please explain briefly…" maxlength="200"/>
      </div>
      <button class="skip-confirm-btn" id="skip-confirm" disabled>Confirm skip</button>
    </div>`;

  return `<div class="screen">
    <div class="page-header">
      <button class="back-btn" id="ex-back">&#8249;</button>
      <div>
        <h2>${ex.name}</h2>
        <p>${exIdx + 1} of ${EXERCISES.length}</p>
      </div>
    </div>
    <div class="content" style="padding-bottom:160px;">
      <div class="ex-detail-img">
        <img src="images/${ex.id}.jpg" alt="${ex.name}"
             style="width:100%;height:auto;display:block;"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
        <div style="display:none">${SVGS[ex.svgKey] || ''}</div>
      </div>
      <div class="ex-title-block">
        <h2>${ex.name}</h2>
        ${ex.muscles ? `<span class="muscle-chip">for ${ex.muscles}</span>` : ''}
      </div>
      <div class="instruction-box"><p>${ex.instruction}</p></div>
      <div class="reps-pill">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        ${ex.reps}${ex.hold ? ` · ${ex.hold}` : ''}
      </div>

      <div class="timer-card">
        <div class="timer-top-label" id="timer-top-lbl">${topLabel}</div>
        <div class="timer-ring-wrap">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" fill="none" stroke="#E8EEF4" stroke-width="7"/>
            <circle id="timer-arc" cx="50" cy="50" r="44" fill="none"
              stroke="${tLeft === 0 ? 'var(--success)' : 'var(--success)'}"
              stroke-width="7"
              stroke-dasharray="${CIRC}"
              stroke-dashoffset="${arcOffset}"
              stroke-linecap="round"
              transform="rotate(-90 50 50)"/>
          </svg>
          <div class="timer-ring-num${tLeft === 0 ? ' done' : ''}" id="timer-num">${tLeft}</div>
        </div>
        <div class="timer-btns">
          <button class="timer-start-btn" id="timer-start">${State.timerRunning ? 'Pause' : tLeft === 0 ? 'Restart' : 'Start'}</button>
          <button class="timer-reset-btn" id="timer-reset">Reset</button>
        </div>
        <div><span class="timer-hint">${hint}</span></div>
      </div>
    </div>

    <div style="position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:var(--bg);border-top:1px solid var(--border);">
      ${!done && !skipped ? skipPanelHtml : ''}
      <div style="padding:10px 16px calc(var(--safe-bot) + 8px);display:flex;flex-direction:column;gap:8px;">
        ${skipped
          ? `<div class="warn-box" style="margin-bottom:4px;"><span>↷</span><span>Skipped — ${skips[ex.id].reason === 'too-difficult' ? 'Too difficult' : skips[ex.id].reason === 'dislike' ? 'Dislike' : 'Other'}${skips[ex.id].text ? ': ' + escHtml(skips[ex.id].text) : ''}</span></div>
             <button class="btn btn-outline" id="ex-unskip-btn">Undo skip</button>`
          : `<button class="btn ${done ? 'btn-outline' : 'btn-success'}" id="ex-done-btn">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
               ${done ? 'Mark as not done' : 'Mark as done'}
             </button>
             ${!done ? `<button class="skip-toggle" id="skip-toggle">${State.showSkipPanel ? 'Cancel' : 'Skip this exercise'}</button>` : ''}`
        }
        ${nextEx
          ? `<button class="btn-next" id="ex-next">
               Next: ${nextEx.name}
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
             </button>`
          : `<button class="btn-next" id="ex-next">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
               Finish — back to list
             </button>`
        }
      </div>
    </div>
  </div>`;
}

function bindExerciseDetail() {
  document.getElementById('ex-back').addEventListener('click', () => nav(State._fromView || 'exercises'));

  document.getElementById('ex-done-btn')?.addEventListener('click', () => {
    const ex   = EXERCISES.find(e => e.id === State.exerciseDetail);
    const done = Store.todayCompletions()[ex.id];
    Store.markDone(ex.id, !done);
    if (Store.isTodayComplete()) { State._justCompleted = true; nav('home'); }
    else render();
  });

  document.getElementById('ex-unskip-btn')?.addEventListener('click', () => {
    const all = Store.skips();
    const key = Store.todayKey();
    if (all[key]) { delete all[key][State.exerciseDetail]; Store.set('skips', all); }
    render();
  });

  // Skip panel
  document.getElementById('skip-toggle')?.addEventListener('click', () => {
    State.showSkipPanel = !State.showSkipPanel;
    render();
  });
  document.querySelectorAll('.skip-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skip-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const isOther = btn.dataset.reason === 'other';
      document.getElementById('skip-other-wrap').style.display = isOther ? 'block' : 'none';
      document.getElementById('skip-confirm').disabled = false;
    });
  });
  document.getElementById('skip-confirm')?.addEventListener('click', () => {
    const sel = document.querySelector('.skip-opt.selected');
    if (!sel) return;
    const text = sel.dataset.reason === 'other' ? (document.getElementById('skip-other-text')?.value || '') : '';
    Store.skipExercise(State.exerciseDetail, sel.dataset.reason, text);
    State.showSkipPanel = false;
    if (Store.isTodayComplete()) { State._justCompleted = true; nav('home'); }
    else { nav('exercises'); }
  });

  // Timer
  updateTimerDisplay();
  document.getElementById('timer-start').addEventListener('click', toggleTimer);
  document.getElementById('timer-reset').addEventListener('click', resetExTimer);

  // Next exercise
  document.getElementById('ex-next')?.addEventListener('click', () => {
    const exIdx = EXERCISES.findIndex(e => e.id === State.exerciseDetail);
    const nextEx = EXERCISES[exIdx + 1];
    if (nextEx) nav('exercise', { id: nextEx.id });
    else nav('exercises');
  });
}

const TIMER_CIRC = 276.46;

function toggleTimer() {
  const btn = document.getElementById('timer-start');
  if (State.timerRunning) {
    clearInterval(State.timerInterval); State.timerInterval = null;
    State.timerRunning = false;
    if (btn) btn.textContent = 'Resume';
    const lbl = document.getElementById('timer-top-lbl');
    if (lbl) lbl.textContent = 'PAUSED';
  } else {
    if (State.timerLeft <= 0) { resetExTimer(); return; }
    State.timerRunning = true;
    if (btn) btn.textContent = 'Pause';
    const lbl = document.getElementById('timer-top-lbl');
    if (lbl) lbl.textContent = 'IN PROGRESS…';
    State.timerInterval = setInterval(() => {
      State.timerLeft = Math.max(0, State.timerLeft - 1);
      updateTimerDisplay();
      if (State.timerLeft === 0) {
        clearInterval(State.timerInterval); State.timerInterval = null;
        State.timerRunning = false;
        const sb  = document.getElementById('timer-start');
        const lbl2 = document.getElementById('timer-top-lbl');
        const doneBtn = document.getElementById('ex-done-btn');
        if (sb)    sb.textContent = 'Restart';
        if (lbl2)  lbl2.textContent = 'COMPLETE!';
        if (doneBtn) doneBtn.classList.add('glow');
        const numEl = document.getElementById('timer-num');
        if (numEl) numEl.classList.add('done', 'pulse');
      }
    }, 1000);
  }
}

function resetExTimer() {
  if (State.timerInterval) { clearInterval(State.timerInterval); State.timerInterval = null; }
  State.timerRunning = false;
  State.timerLeft = State.timerTarget;
  const sb   = document.getElementById('timer-start');
  const numEl = document.getElementById('timer-num');
  const lbl  = document.getElementById('timer-top-lbl');
  if (sb)    sb.textContent = 'Start';
  if (numEl) numEl.classList.remove('done', 'pulse');
  if (lbl)   lbl.textContent = `${State.timerTarget} SECONDS · TAP START WHEN READY`;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const numEl = document.getElementById('timer-num');
  const arcEl = document.getElementById('timer-arc');
  if (numEl) numEl.textContent = State.timerLeft;
  if (arcEl) {
    const pct = State.timerLeft / State.timerTarget;
    arcEl.setAttribute('stroke-dashoffset', TIMER_CIRC * (1 - pct));
  }
}

/* ─── Completion celebration ─────────────────────────────── */
function renderCompletion(profile) {
  const streak = Store.streakCount();
  return `<div class="screen">
    <div class="completion-wrap">
      <div class="completion-emoji">🎉</div>
      <div class="completion-title">Well done, ${profile.name}!</div>
      <div class="completion-sub">You've completed all your exercises for today. Every session brings you closer to a smoother recovery.</div>
      ${streak > 1
        ? `<div class="streak-badge">🔥 ${streak}-day streak!</div>`
        : `<div class="streak-badge">✓ Day ${Store.totalDays()} complete</div>`}
      <button class="btn btn-primary" id="comp-home" style="max-width:260px;">Back to home</button>
    </div>
    ${navBar('home')}
  </div>`;
}

function bindCompletion() {
  bindNav();
  document.getElementById('comp-home').addEventListener('click', () => {
    State._justCompleted = false; nav('home');
  });
}

/* ─── Calendar ───────────────────────────────────────────── */
function renderCalendar() {
  if (!State.calMonth) State.calMonth = new Date();
  const m = State.calMonth;
  const year  = m.getFullYear();
  const month = m.getMonth();

  const firstDay   = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMon  = new Date(year, month + 1, 0).getDate();
  const today      = new Date();
  const todayStr   = today.toISOString().slice(0, 10);
  const all        = Store.completions();

  const monthLabel = m.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  const dows = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  let cells = '';
  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) cells += `<div class="cal-day empty"></div>`;

  for (let d = 1; d <= daysInMon; d++) {
    const dt  = new Date(year, month, d);
    const key = dt.toISOString().slice(0, 10);
    const dayData = all[key] || {};
    const allDone = EXERCISES.every(e => dayData[e.id]);
    const anyDone = Object.values(dayData).some(Boolean);
    const isToday = key === todayStr;
    const isFuture = dt > today;

    let cls = 'cal-day ';
    if (isFuture)      cls += 'future';
    else if (isToday && allDone) cls += 'today-done';
    else if (isToday)  cls += 'today';
    else if (allDone)  cls += 'done';
    else if (anyDone)  cls += 'missed'; // partial = missed
    else               cls += 'future'; // past no data = grey

    cells += `<div class="${cls}">${d}</div>`;
  }

  const total  = Store.totalDays();
  const streak = Store.streakCount();

  return `<div class="screen">
    <div class="page-header"><h2>Progress</h2></div>
    <div class="content with-nav">
      <div class="stats-row">
        <div class="stat-chip"><div class="n">${total}</div><div class="l">Days complete</div></div>
        <div class="stat-chip"><div class="n">${streak}</div><div class="l">Current streak</div></div>
        <div class="stat-chip"><div class="n">${EXERCISES.length}</div><div class="l">Exercises/day</div></div>
      </div>
      <div class="card">
        <div class="cal-header">
          <button class="cal-nav-btn" id="cal-prev">&#8249;</button>
          <span class="cal-month">${monthLabel}</span>
          <button class="cal-nav-btn" id="cal-next">&#8250;</button>
        </div>
        <div class="cal-grid">
          ${dows.map(d => `<div class="cal-dow">${d}</div>`).join('')}
          ${cells}
        </div>
        <div class="cal-legend">
          <div class="cal-legend-item"><div class="cal-swatch" style="background:var(--success)"></div>All done</div>
          <div class="cal-legend-item"><div class="cal-swatch" style="background:#FDECEA;border:1px solid #C0392B"></div>Partial</div>
          <div class="cal-legend-item"><div class="cal-swatch" style="background:#EBF5FB;border:1px solid var(--accent)"></div>Today</div>
        </div>
      </div>
    </div>
    ${navBar('calendar')}
  </div>`;
}

function bindCalendar() {
  bindNav();
  document.getElementById('cal-prev').addEventListener('click', () => {
    State.calMonth = new Date(State.calMonth.getFullYear(), State.calMonth.getMonth() - 1, 1);
    render();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    State.calMonth = new Date(State.calMonth.getFullYear(), State.calMonth.getMonth() + 1, 1);
    render();
  });
}

/* ─── Recordings ─────────────────────────────────────────── */
function renderRecordings() {
  return `<div class="screen">
    <div class="page-header">
      <h2>Voice Recordings</h2>
    </div>
    <div class="content with-nav">
      <div class="info-box">
        Record your voice before and after surgery to compare your speech, breathing, and how you feel. All recordings are stored privately on this device only.
      </div>
      <div class="rec-controls">
        <button class="record-btn" id="rec-btn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2"/><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2"/></svg>
        </button>
        <div class="rec-timer" id="rec-timer"></div>
        <div class="text-sm text-mute" id="rec-hint">Tap to start recording</div>
      </div>
      <div class="section-label mt-8">Saved recordings</div>
      <div id="rec-list"><div class="text-sm text-mute">Loading…</div></div>
    </div>
    ${navBar('recordings')}
  </div>`;
}

function bindRecordings() {
  bindNav();
  loadRecordingsList();

  const btn   = document.getElementById('rec-btn');
  const timer = document.getElementById('rec-timer');
  const hint  = document.getElementById('rec-hint');

  btn.addEventListener('click', async () => {
    if (State.recording) {
      stopRecording();
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        startRecording(stream, btn, timer, hint);
      } catch(e) {
        hint.textContent = 'Microphone access denied. Please allow microphone in Settings.';
        hint.style.color = 'var(--red)';
      }
    }
  });
}

function startRecording(stream, btn, timer, hint) {
  State.recChunks = [];
  const opts = MediaRecorder.isTypeSupported('audio/webm') ? { mimeType: 'audio/webm' } : {};
  State.mediaRecorder = new MediaRecorder(stream, opts);
  State.mediaRecorder.ondataavailable = e => { if (e.data.size) State.recChunks.push(e.data); };
  State.mediaRecorder.onstop = () => saveRecording(stream);
  State.mediaRecorder.start(250);
  State.recording = true;
  State.recSeconds = 0;
  btn.classList.add('recording');
  hint.textContent = 'Recording… tap to stop';

  State.recTimer = setInterval(() => {
    State.recSeconds++;
    const m = String(Math.floor(State.recSeconds / 60)).padStart(2, '0');
    const s = String(State.recSeconds % 60).padStart(2, '0');
    timer.textContent = `${m}:${s}`;
  }, 1000);
}

function stopRecording() {
  if (State.mediaRecorder && State.recording) {
    State.mediaRecorder.stop();
    clearInterval(State.recTimer);
    State.recording = false;
  }
}

async function saveRecording(stream) {
  stream.getTracks().forEach(t => t.stop());
  const mime = State.recChunks[0]?.type || 'audio/webm';
  const blob = new Blob(State.recChunks, { type: mime });
  const now  = Date.now();
  const label = new Date(now).toLocaleString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
  const rec = { id: now, date: now, label, mime, blob };
  await RecDB.save(rec);
  loadRecordingsList();

  const btn   = document.getElementById('rec-btn');
  const timer = document.getElementById('rec-timer');
  const hint  = document.getElementById('rec-hint');
  if (btn)   btn.classList.remove('recording');
  if (timer) timer.textContent = '';
  if (hint)  hint.textContent = 'Recording saved. Tap to record again.';
}

async function loadRecordingsList() {
  const list = document.getElementById('rec-list');
  if (!list) return;
  try {
    const recs = await RecDB.getAll();
    if (!recs.length) {
      list.innerHTML = `<div class="text-sm text-mute">No recordings yet. Make your first recording above.</div>`;
      return;
    }
    list.innerHTML = recs.map(r => `
      <div class="rec-card" data-rec-id="${r.id}">
        <div class="rec-card-info">
          <div class="rec-card-label">${r.label}</div>
        </div>
        <button class="rec-play-btn" data-play="${r.id}" title="Play">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
        <button class="rec-del-btn" data-del="${r.id}" title="Delete">✕</button>
      </div>`).join('');

    list.querySelectorAll('[data-play]').forEach(btn => {
      btn.addEventListener('click', () => playRecording(parseInt(btn.dataset.play), recs));
    });
    list.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (confirm('Delete this recording?')) {
          await RecDB.delete(parseInt(btn.dataset.del));
          loadRecordingsList();
        }
      });
    });
  } catch(e) {
    list.innerHTML = `<div class="text-sm text-mute">Unable to load recordings.</div>`;
  }
}

function playRecording(id, recs) {
  const rec = recs.find(r => r.id === id);
  if (!rec) return;
  if (State.currentAudio) { State.currentAudio.pause(); State.currentAudio = null; }
  const url = URL.createObjectURL(rec.blob);
  const audio = new Audio(url);
  State.currentAudio = audio;
  audio.play().catch(() => {});
  audio.onended = () => URL.revokeObjectURL(url);
}

/* ─── Notes ──────────────────────────────────────────────── */

function getNotes() {
  const raw = Store.get('physician-notes', null);
  // Migrate old plain-string format
  if (typeof raw === 'string') {
    if (!raw.trim()) return [];
    const migrated = [{ id: Date.now(), created: Date.now(), text: raw }];
    Store.set('physician-notes', migrated);
    return migrated;
  }
  return Array.isArray(raw) ? raw : [];
}

function noteTimestamp(ts) {
  const d = new Date(ts);
  const date = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  return `${date} at ${time}`;
}

function renderNotes() {
  const notes = getNotes();
  const notesHtml = notes.length === 0
    ? `<div class="text-sm text-mute" style="padding:12px 0;">No notes yet. Tap "New Note" to add your first note.</div>`
    : notes.slice().reverse().map(n => `
      <div class="note-card" data-note-id="${n.id}">
        <div class="note-ts">${noteTimestamp(n.created)}</div>
        <textarea class="notes-area note-ta" data-note-id="${n.id}" spellcheck="true" placeholder="Write your note here…">${escHtml(n.text)}</textarea>
        <div class="note-footer">
          <span class="save-status note-status" id="ns-${n.id}"></span>
          <button class="note-del-btn" data-del-id="${n.id}">Delete note</button>
        </div>
      </div>`).join('');

  return `<div class="screen">
    <div class="page-header"><h2>Notes for My Doctor</h2></div>
    <div class="content with-nav">
      <div class="info-box">
        Jot down symptoms, questions, or concerns for your next appointment. Saved only on this device.
      </div>
      <button class="btn btn-primary mt-4 mb-4" id="new-note-btn" style="margin-bottom:14px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        New Note
      </button>
      <div id="notes-list">${notesHtml}</div>
    </div>
    ${navBar('notes')}
  </div>`;
}

function bindNotes() {
  bindNav();

  document.getElementById('new-note-btn').addEventListener('click', () => {
    const notes = getNotes();
    const newNote = { id: Date.now(), created: Date.now(), text: '' };
    notes.push(newNote);
    Store.set('physician-notes', notes);
    render();
    // Focus the new note's textarea after render
    setTimeout(() => {
      const ta = document.querySelector(`.note-ta[data-note-id="${newNote.id}"]`);
      if (ta) ta.focus();
    }, 50);
  });

  document.querySelectorAll('.note-ta').forEach(ta => {
    ta.addEventListener('input', () => {
      clearTimeout(State.saveTimer);
      State.saveTimer = setTimeout(() => {
        const id  = parseInt(ta.dataset.noteId);
        const notes = getNotes();
        const idx = notes.findIndex(n => n.id === id);
        if (idx !== -1) {
          notes[idx].text = ta.value;
          Store.set('physician-notes', notes);
          const st = document.getElementById(`ns-${id}`);
          if (st) { st.textContent = 'Saved ✓'; st.style.opacity = '1'; setTimeout(() => { st.style.opacity = '0'; }, 2000); }
        }
      }, 600);
    });
  });

  document.querySelectorAll('.note-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!confirm('Delete this note? This cannot be undone.')) return;
      const id = parseInt(btn.dataset.delId);
      const notes = getNotes().filter(n => n.id !== id);
      Store.set('physician-notes', notes);
      render();
    });
  });
}

/* ============================================================
   UTILITIES
   ============================================================ */

function daysToSurgery(surgeryDateStr) {
  const surgery = new Date(surgeryDateStr);
  const today   = new Date();
  today.setHours(0, 0, 0, 0);
  surgery.setHours(0, 0, 0, 0);
  return Math.round((surgery - today) / 86400000);
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ============================================================
   INIT
   ============================================================ */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

render();
