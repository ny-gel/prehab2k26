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

const IMAGES = {
  'neck-rotation': 'data:image/jpeg;base64,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',
  'neck-lateral-flexion': 'data:image/jpeg;base64,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',
  'shoulder-shrugs': 'data:image/jpeg;base64,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',
  'chest-press': 'data:image/jpeg;base64,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',
  'shoulder-flexion': 'data:image/jpeg;base64,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',
  'seated-rows': 'data:image/jpeg;base64,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',
  'shoulder-abduction': 'data:image/jpeg;base64,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',
  'internal-external-rotation': 'data:image/jpeg;base64,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',
  'scapular-protraction': 'data:image/jpeg;base64,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',
  'wall-press': 'data:image/jpeg;base64,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',
  'standing-rows': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAFAAQEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7+ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANJmhuAe1YHiTxr4f8HWoude1mz06NhlRPKA8n+4n3m+ig0npqHkb/NHevG7n9ozQJX26Lo3iDWUJP722tVhQe/79kOPoDVdf2io4VDX3gjxLAgPzyRC3kVB6nEm4/gDUe0h3LVOfY9toFcj4R+JPhjx0jf2Hq0VxMo+e2kVop09zE4DY98Y966xc9zmrTT1RDTWjHUUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooATPNGajmmSCN5JGVEQFmZjgADqTXzj8GP2hD8TvjP450RJ1Gi20Sf2Qnd1jYrK/uGOGB9CKAPpMUU1TnNOoAKKKKACiijOKAEJxUckyQRvJKwVEGWYnAA7kn0onmjgjeWV1SJFLM7nCqB1JJ6Cvl/x/8RL74r3cul6NNJaeAYyUnuoyVk1kg8qh6rB6nq/TpkGJzUFeRdOm5u0Tf8Z/HPUvEd3c6P8AD5Y0tISYrnxHcJuiDd1t0/5aN/tn5QR0Nee2fhiyhvZNRvGm1bV5uX1DUm86Zj6jI2p/wECta3t4bOCOC3iSGCFQkcaDaqKP4QB0A9qk9s5B5x2+teZVrym7I9SlQjBCli2NxLAepzSDjGDyOR7VQj1vTZb1rJL6BrteGjDZKn3PQfnV/P8Ak1i79TZNNGfqOjwahNFdB5LXUoGDwX9q2y4hcHIIfv8AQ5HtXrvww+LM+o3kPhjxVsi14gi1vY12wakFGTt/uyAclPxBrzL+fbNU9V05dUtGgMzwTKwkguE+/byrykinsVPPuMg9a3o13TdmYVqCqK6PrhW3dKUGuK+FPi2fxl4Ms72+CrqkDNa3qL/DMnB/MbW/4FXa4r1E7q55TVnYWiiimIKKKKACiiigAooooAKKKKACiiigAooooAKM0UgoAyfEmhW3ibRb3SLx50tL1PJlMEhjcoSNwDDkZHHHqa+T/wBmv4Q6VZfE3xzq9nDNps3hjWpbGzSN9w+zMozCwPUFdpB619J+PvH0XgkaZbxaXe6tq+rTGKzsLParysoy2XchFABHUivE/h/N8QLLxn8SDpOh6HpKX+qx3User3EjvEWgTIXyQyt65zjJNJySKUW9j6dXrknt+VOyK8k/s34hXciyXHjm2ssEExWejxSqfbdIQaU+HfGLSF/+Fj6gCTnaNKt9v5ZqedFeyketZ4oyK8sj0vxvDIzr49Nxk5WKbRoEXHflTmpf7Q8f2cQVbnwxdBRkyXPnQnGevyKRT50HspHp24Vynin4leE/Bkoh1zxBp9jcshdIJJh5rgf3U6muLTx941uLa5S28N2epkRyKt3pt2Yo/MwQApn27uccjjivAbex1j4f2X2rxV4O1O0uJwZ9S1tXjvBLLj55ZGjLMik55OABUVKnKtC6dFyfvHdeOfHmpfFdm06GK50zwSGBkSVTHc6r/sup5jh/2Ty/0OKpxxrGiRxoERRtVVGAoHQVnXniPRrGGKa71exgilUSJJLOoEinuuTyKk0aTVfF+pjT/D1goGzzGvtRzFAqZwSi/fkGSBuUFc4BNedN1Kr2PRhCNOPul/G7pz3rF8q98c6mfDHh2QmRl3X+ooxEVlEDyu4dZT0C/WvT9L+DWnYWTxFqV5rUxJzCzeRbEf3TEnDj6811z+DtMiudNmsUfTG05DDElg3lRmMnPlso4ZfTPTn1q4UeXVkzqX0Rz998JtEHhWPQtJt47JUZSJuSzEdWbH3jnn2rzDUI9e8Ny/Zdb0DVZJYztF9ptq11bzAdGyv3C3UKeRX0dQDjufcDvWs4RluRFuOx8tT+OtDs3Vb64m08scZvrd4QD6Enoa34pY7mFJIpElhkGVZGyGHsa+g5oI542jmjjkjddrK6ggj8a8S+IPgXTPAgh8Q6DBHp+my3CxajYx/Lb4bhZkXoj7iAexBJPQVjKgre6aKq76nafAO8EM3jDSjwwvk1HBHO2dNoP/kE17RmvG/gfo97Fe+JNans5La0vhbW9uZojHJL5Xmbnwedh8wbT35r2MCu+knyK55la3O7C0UUVqZhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSHoaAPH9Zl/t345QwNteLwzohlC9hLeOVBI9cW/wCvvXSW+mm31i9vkZfLu4Y1ZMfMZFJ+bPptwPwrmNHMg+MvxDWbBf7HpzoMYPlnzQM+2Q2PxruOeRnJHr3z61z1HqdtFLlD+dHpmuA1LxPq3h/xVrNqRb3+nCzj1GGKWUxyQRZMbqm1SXJZSQuOMjmn3niTUbpyNV0/WvDmlAFXka1Ek0uDwyvGW2DHBXaSR6VPK9yvaJOx1F9rsMErW1tG97fsCVtoOQcEBtz/AHVK5BIJBx0BqCPQ5b3MmtXRujyPskRKWygkEAr1dlI+8cdelY+jfEDwQySW+m65YoqyN5i/NH8/8RfcB83rk5rpbXWdNv5BHaalY3EpPCQXUcjfkpJz7Yos0PpcuhQq7QMAcDaAAPYClZRIrIwBRwQVI4P1B4Ix2NBGM8fgeKP1paj3Od07wD4V0hZhZeHNLgWcESKtuCGB6jBz+leaWLXGnWClZHe88Lay9jDPIcs9uJAjFvXdG7e2QD2r2e7vLfT7S4vLqZYba3jaWWVvuxooyzE9gBXhelT3GseH1vRDIt34s10XdtBLkObd5lfYfcRK5xWtK9nc1pWu77HvSlDyGxGeQx4wvXn6Dk1keGfEEHibSUv7cIEaR4zsbcuVYjgjtwDn3rJ0q2PxNu7tjI0fgyxnMEaRsR/asiHliw5EKkYAB+cjnAGC/R1j0Dxp4k0AoI/tbrq1mqqFRomRY2RAOPkMeW9PMX1qXHS5yqonKyOqooALcAbiM5xz/n61yepfE3who/iCLQ77X7G31F4zMFkkARVAyN0n3VJ6gE5NQr9DVtLc2dU8S6LoZxqer6dYvt3hLm4SN2HqFYgt6cVleH/P8f61Z6ikFxB4V0t2eI3ERjbUZiCobYwB8pQSfmAJbaRwKr/CjRbDxRYar4t1GwgvJdcv5JrWa5iDk2iNtt9oYfL8gzxjPWvWlAH0raMFuctSq3ohEAAwO3FPoorUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAopM00vigDyXxDENG+N2kzgkL4h0Wa2J7F7Vw6g+589sfQ10mpanDp0MbON807iKCLPMkh6D/6/aud+OU1vo1t4R8TyyxwtoutwNIzHBeGXMboPqWQ/wDAa09CiknnutSvgw1ESSWgQhkEUSSMFCqfUfMW759MVjUWp10HeJx11q9r4Q+Iuna/4lmPm3WlyQw7RvED7s+REFGXLH15J7gcVZ1PxD4p8azPHmXw54cOQIoTjULpemXYcQqR/CPnHZqh8ZTOfib4Yh42pY3Ui8cqxyvXsCOKkl1vTre5e2nnWCZWCKko2lyRnCf3uPStqS907sPhYTftJDotD0xLQWn2C2eED7ksQk3H1JbJY+pJJNch4m8E6VZ3drrFn4fsJIIVaG7tLXFk8yNjDxyR7T5qkcDPOSK6g6lf3hAsbB41IRvNvgY8ZPI2fezgH26UqaBDNKs2oSyahKF2BZsCIDOQfLHy7hx82M1o4pndOlGa5UjiLb4w2vh+WK1svEZlstjMtr4ptJLaVCOPLS4UEDofvqxJB5rVk/aB068tkSxvtES8J+5bSy6k5HYCNEjPP1ruxK65w7DPXBoM0hGDIxHoTxn1rL2KOZYJ/wAx55JJ4j+J0NvZ6tb3umeD42DzQ3yhL3VjnIV0XHlQ/wCzyWHU9qm1aO813xjBo2msYJoo0sIJFyPIknjLyTKR02WyyqP9orXdep7HJPNZXwitre8+J3ju4jdZV05be3BVs7JJV8yRW/2lKgD0BIquXlVkRioqhRsup7Jo2kWmgaVaabYQrDZ2kSxRIgAAUD/J/Gue8c+DZfEyadf6Zerp/iHSZGks7tozImGAEkUiAgtG4AyAQflHPFdgBxShcVNjxE+x5HJ8MPEniiZ38WeK2ht0Qx29n4eRrWPn7zyM5ZmbHGMgD0zzXVaF8JvBfh7Q20Wz8Oae2myFWliuohceaygBWcybixAA69K7IrmlHShJIbk3uRwwR28SRRRrHFGoVUQYCgdAAOgqTpRRTEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAATikJ4oLDHWuC8YfFHSvDNw2m2iSatr5U7bCzwSnvK5+WMD0J3Y6A0Adrd3tvYWst1dzx29tCpeSWZgiIo6lieAPc15ZqPxYudfaW38F2YuIQSp1m9Ux2q+pjH3pT0IYDYfWvPfFNnrfjzT7ldf1ZlmlIkgtLVj9ktXVt0fynBlIOMlsbhkYFavgnxS+u201hqNullr2mbYry1ThOnyyResbdQe3IppHZg6MKs7TYmveEn13RNXi1S8uNV1e+tJIvtNzgYYDcgjjHyxrvC8D0zW98N9Wa/wBH0jUXYE6zaRi4wpYm/hXypmZ+ig7AAO5Bq4pKlSPvAjtXN+AbO3F94x8E3aH7JHOup2S5xtgmPJHuJhIamtHQ9DFUlFRcVZIm8dl4Pil4HmyBFd2l9br8pJLJH5nX6GrGvwAW6X8QX7RpzeejGLeSmP3gC9yyZUemc1kfEy6njHhq/vSf7R8PazAs8u0RLPDcARPMi5OFC9fQgjmusdFkVkcbkYYYDuD/APWp0neJpg3eDBWDqrL0YAgY5UEZ5/lS9qyvD0n/ABLo7V3DT2bG3lGScMDxyQM8Hr0OOM1q4Ocd61OxIKOgoHOMd6rX2o2Wlwme/vLe0gGf3txKsa/TLEClewN2H3VzDZW09zcuI4IEMkjk8KoGTWN+zNaXMf8Awl17dweRc6lNbXdxH3WZo23g+/TP1qjJbTfE9k0y0gmTwmWDahfzI0X2pQf+PeJGAJVujN029CTXcfBhkupvHt2gJVvEd3bKd2VKQ4QYA6AdKzlK7sjx8xqqdoo9VFFIKWg8sKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApkhwMnoO9OI55ryX42+J7uC103wlpUzwaj4h8wS3SfetbRMea49GIYKv1PpQBieL/iVf+L7+60fwleG00O1doL3WosF55AcNFb9sA8NJzyCAD1rF0zSrPRrUW1lAIoxyxySzn1Zjkufck1JY2Ntplnb2dnbpb2tugjihjGFRRwAPX61YpoTCuR8YiTQrrT/GFn/x8aQSl5GBn7RZsQHU/wC6cP8ARDjqa66mTRRTxyQzIJIZVKPGejqRgqfqDj8aZUJuElKJ0cE8VzBFcQSCW3lRZI3B+8rDKn8QQawZRJbfFLwfNADuurW/guB/fjREZSfZSxP41z3wqvZLG31XwldSl7rw9Psic8mW0kJaJ+fQ7k46BK6qJ4ofid4YWUAvPZXyQknuqIX/ADBHvRN3ifQVpqpQ5kdN498I2/jHQLyykk+zzyRlBcDhlU/eTPYN09uo55ri/BHiGfWtNntdRjMWuaRL9j1CEgDbIBw2AeFZRkcnivWiAwIIzuBGOuc14jZaPfaB4w1hoRHLb6TBBZhEba1xbOPNSSQnO+aNQUz/ABDisKL1sc2Gk4zS7nR6mradeR6qhJjxsvULHBiAJDhQCS6nj/dJrWjdZI0ZWDRuAwI7gjIPPQU21uorqGOe3lWSNxlXXv8A/XHp+dV7bwvrllan+xreN9NYjy0nLM8BJJeQZOZVz0XIPvXS2d9SpGmrydiHU9WNrPBZWttJfavd8W9lCMs57u392Md2Ppxk0/wJ4Ts7+yk1vWRBqusXU00byyoHgiCOV8uJGyAgx1IyTzxnA67w1oWk6J4b1DVNLuf7Q1G5gla41GX/AFszKGwp/uqp4CgDGPXJNPwDlvA/hyZ1Cy3NhBcShRgeZIgZj+ZNYVpaaHlzxcq0rLY6KNcbUAwqjaqgcD2A9P5VznwFtPL+H0F/nP8Aa11cajnIORLITnj6Vqa1dz2GjajdW0bS3MFu8kaL1ZgOAK1fAGi2/hzwZoel2zBobS0jjUgYBAHp+NRSOXEaWR0tFHc0VscwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADXyBx1NfOGo3Umt/EzxlqVw+Rp80Wj2wHRY0jWUn6l5WB9gK+kG6fiK+X/AA6xe+8Usxyx1m4yfXGBTQM3fX60UUUyQooqut7E161n8wuAm8KV4ceqnvjjOOmaQehyniiYeFfFGg+MAxW0Rv7M1Q9hbSH5Hx6o+AP9816Fr2hLrEUAW5ls9Qs5RNa3tuAz28o7gHhgehB4NYmq6Xb65pd5p10u63uomhk4zjI4OP8AZOD+Aqp4E8TrF4PlTxBdw2t54eY2OoTTuEVdgHlyMTx86bGJ9WqlbZnr5dVTi6TOmeTxheEeZ4kgsVAwBp9irl/dvOB5Pfb+FU4fs/hS1u7/AFrV/td7fzhpryZFje4f7scaqo5IB2qB607TdR17xiceFNEl+yN/zFtWR7a2HuiECSQHsygqfWvRPCHwzsfDt2NVv7iXWPEBXadQulA8sHqsUY+WJT3C9am0Y7GlTEUaP8NanLeDtDvJdaS+vtPl03StSZ2js54yJ5p+G82QdIgVByh+YnFerX2nw31lJaSh1ilGD5TmNgPYjkdKh1zTDqdg6RELeRHzbZ2YqFlH3ckchSeDjqCRVAeKFt7ZlvLS7W/j3KYY4HIldQM+WcYIOeD/AIGhu55dWtKq7yMcWepabq2qw3bQy22o2hjt54QVkZ0Vv9YDwXIZQCOoXmszwFIX8F6CpJLQWkduxY5JaNQpz75HPvXVW1jqmp3NneaobWGKCR5I7ONN55A2MznlXXLD5eDmuI+GkhPhmWNgQYNU1GHaSCQq3UgXOPYA1jV2Lw7sza8UXaWHhrWbuT/V29pLI3OOAvrXXeHong0TTo5Bh1gQEZzzivP/AIiNnwRrlv1kvLZrRMf35flXH4mvS7NTHbxIeqoo/QUqQYh7FiiiitjnCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAa39RXy/4cGL7xUMgka1cZ/MV9Qnmvl3QoorbxH4+tonLiHX5Qc9i0UbY/8epoGb9FFFMkKxvE6Mum/bIQPtNg6zRHnCrn5hj02lvxwe1bNZniSU2/hvWptpYxWFw4HriJzj8cUD2JLaTUvEurLo/hu2jnuvLWWe7uD/o9ijDK7yPvOQchB1xzgYNeiaN8CvCllqltrWoQSatrcaqZLq7bKySDo/lfdBHRRzgcdqu/BfwzH4b+G2gRbvMvLu1iu7qdh80sropy3uF2r9FFeggYpDWmw1YlRQoACjgDHSlCgHPenUUgE200x5IOT/hT6KAGEZ/OvI/Ae2DUfG2mrtAsdbkyE6ZlUS/n8/Oa9dZcg15J4dga0+I3xMTZxc39ndKwGP8AlyijI9/u1nU+E1ov3ibx4fNs9FtRtZ7nW9PXyycBkE6lx/3znivVVGPpXleusZvHvw/slOYmu7ueUA9FS3JU4x/fr1Qf0oprQK7vIcDmikFLWhkFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAxzgEA84r5jtw1v8SPidbFFRG1iK4X1O60gBP5g19Ot3+lfP3xD+HmqN8S5dR8Ma9Bpt/rFoJbq0vrfzbedosDdlfnU7cA4Palew0r6CUVQHhn4lQnbJZ+Gbo8/vLeaWNevo5z0xSnw/wDEXH/II0P/AMC2/wAaOdD9lIvd6xfFsjR+GdT2Z3Sw+R8pxnedh+n3q018IfEOVmAfwrACDtMguZNp99rc/hWX4g8HeJoLXTY9f8Q6VDbX1/b27rpdnJ/fDYHmk4B2459aOdB7OR9G+H7X7DoWmW2MCC2ijxn0QD+laVMjVUjCqMKvAHsKeKZIUUUGgAozSfjRQAHoa8rsrhz8U/Gdsf8AViC0k465KgV6kT1/SvIvDko1H4k/Ei7522t3aWCN3wLaOQ4/4Ex9/wAKipsa0fiLVlOs3xrsLSRc+R4dkuoz23NdeWcf8Br1SvKPFeg6vJq+k+JfDklmmu6UJI/JuwfKvIHHzQsw5U7vmVugPXipIvjNDpY2eK/Det6DICd8ptzdWoHr9oiGz86UJKw6sHzXPVAaXNcb4d+KXgvxVdiz0bxPpV7dkbhbxXK+YP8AgHWuw/GtLoxtYdRmk/Gj8aLgLRmk/Gj8aLgLmjNJ+NH40rgLmik/Gj8aLgLRSUUxC0UgpaBhRRRQAUUUUAFed+PGa08aeCL5iBbu13YEE4DSTImwf+Q2r0SvO/jJCIfDNjrOQP7B1G31LB6HYxXH/j9KWqHF2kbAORnsaKV02O6+hx+XFJXKejcK84+MFwbe28F/vAiSeJLRW5/hw3H54r0evNvjVax3WieHFkGCniCydW/usHHI/UfjTjuRP4T3Neh+ppwpF6fif50orqOAKQ9KWkboaAPNPjF4n1jwxpWjNot5HZXF5qAtpJngWXCeU7YCtx1UV5YPiN47/wChni/8FcP+Nd/8fR/xK/C//YXH/pPLXkI7V42PxFSnVUYM9XBUadSDckb/APwsXx30PieLPvpcPP61yrX3jO017VNa0rxZHbXertG16kmlQvFI6IEVwpPyttABI64q3R3z3xiuH65Wb+I6/q1Ja8oyTxL8SrgBZvHcUSHqYNFt1cnPqT+lI3ib4moFSLx5bMirj99oNuW/HmpKOlH1yt3H9WptHP6/a+MfF1uttrvibTbu3DK+9fD9ssyFWDDY45U5A5rvoviF45iiVF8ToQqjGdLiJx7881g4o6/zpvG1v5g+q0uxv/8ACxfHf/Qzxf8Agrh/xo/4WL47/wChni/8FcP+NYFFL65X/mD6rR7G/wD8LF8d/wDQzxf+CuH/ABo/4WL47/6GeL/wVw/41gUUfXK/8wvqtHsb/wDwsXx3/wBDPF/4K4f8aP8AhYvjv/oZ4v8AwVw/41gUUfXK/wDMH1Wj2N//AIWL47/6GeL/AMFcP+NH/CxfHf8A0M8X/grh/wAawKKPrlf+YPqtHsdB/wALG8d/9DPF/wCCuH/Gu3+Ffi3xNrniK4t9Y1lL21W1Z1jWySEq25QDlTnoTxXlFeh/BnnxZc57WT/+hrXRhcVVlVhGT3MMRh6UKcmlse8J3p9ItLXvnjIKKKKACiiigArnvHGlQ634S1nT5k3pPayDHuBuH6gV0NMkUOuCAQeCD3FALc858Faq+ueDtA1GUkzXVjDJLntIUG8fUNkVu1xPwzD2em63o0p/faPrF3AR/dSSRpYh/wB+3UV21cr3PQi7oK81+NrtH4Z0llOGXV7Ygj1BzXpVeYfHSVIvDOjK5wZdYtkX68n+lEdxT+Fnu1uxaCJickqCT+FSiobX/j2h/wBwfyqauo4ApG6UtIRkUAcd4/8ABA8cWWnW/wBtNnJZXQulfy/MBOxk2kZHZ8/hXF/8KMn/AOhiX/wB/wDs69kC4p2KxnQp1HzTjc1hWnBWizxn/hRk/wD0MS/+AP8A9nXn/wAS/BOqeDJdEhstatZX1J5lZprDIUIm7gb+/SvqUivEfj4Maj4N9fNvP/RIrmxOGpQpScYo6MPXqyqxi5HKfDv4e6j4vtL97zXLeOW1mWMGKwwGBUN03+9dp/woyf8A6GJf/AH/AOzq58C/+PHXeMf6VH/6KFetVVHDUZU4txRNXEVYzaUjxn/hRk//AEMS/wDgD/8AZ0f8KMn/AOhiX/wB/wDs69morX6pR/lRn9Zq/wAzPGf+FGT/APQxL/4A/wD2dH/CjJ/+hiX/AMAf/s69moo+qUf5UH1mr/Mzxn/hRk//AEMS/wDgD/8AZ0f8KMn/AOhiX/wB/wDs69moo+qUf5UH1mr/ADM8Z/4UZP8A9DEv/gD/APZ0f8KMn/6GJf8AwB/+zr2aij6pR/lQfWav8zPGf+FGT/8AQxL/AOAP/wBnR/woyf8A6GJf/AH/AOzr2aij6pR/lQfWav8AMzxn/hRk/wD0MS/+AP8A9nXR+CfhtL4Q1iW/fVReCSAw+WLby8ZIOc7j6frXoRFIVpww1KD5lFJiliKklZyBf1p1Iq4zS1uYhRRRQAUUUUAFI1LSNjHNAHkGnr/Znxh8cWIyBqVpZ6vgnvj7PkD0/dfnXaVxerFV+PYEY3OfDCCYqwG1ftTlcj3OcV2lc81qdtJ+6FeMftCSGaPwBZKxz/wklpdMq/xKjbCCPTLivZ68c+PDb774bwQSmO9l8R2+XzyLcZL4+rbRxSjuVU+Fn0cvT8T/ADpaRenPqf50tdJwBRRRQAUUUUABrxH4+/8AIR8G/wDXW8/9EivbjXiPx9/5CPg3/rref+iRXNi/4MjfC/xomp8C/wDjx13/AK+o/wD0UK9aryX4F/8AHjrv/X1H/wCihXrVXhv4UfQVf+JIKKKK2MQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA01u1Opr8Y+ooA8S8IF9a+KHxK15+YYbm30e2LdRHFEruB7eYz16HXnnwheK40zxPcxbz53iPUd+/ruSd04/wC+a9Drmk7s7qatEK83sNITxp8e5Li4O6y8D6bEYUBIDXV3k5I7hVjOPdq9HbhT9K4/4Rxi48ZfFPUAwIOspY5B6eTGOMf9tKqmtSaztE9bUYUCnCkHQUtbnGFFFFABRRRQAGvEfj7/AMhHwb/11vP/AESK9uNeI/H3/kI+Df8Arref+iRXNi/4MjfC/wAaJqfAv/jx13/r6j/9FCvWq8l+Bf8Ax467/wBfUf8A6KFetVeG/hR9BV/4kgooorYxCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKawzinUjDNAHivwriSyh8W6eoUG18QXjMBnrLIZe/+/Xf1xmlL/Y3xV8b6Ux+XU47XW4R6KUFuwH/AAKMn8a7OuaSszupu8QA3ED14rjP2f5TeaV4zv2OTe+KL+YMSCWHyKOn+7XaI6xsryHaisCT7Z5rhP2YLR7f4S2NxIymTUL27uiB23TNx+QqqfUzr7I9mFFA6UVucoUUUUAFFFFAAa8R+Pv/ACEfBv8A11vP/RIr2414j8ff+Qj4N/663n/okVzYv+DI3wv8aJqfAv8A48dd/wCvqP8A9FCvWq8l+Bf/AB467/19R/8AooV61V4b+FH0FX/iSCiiitjEKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANJ6UtIfagDyzx9CdO+I/gnV0QLDdJdaZdSDqQyBoV+m/cfxrqe+O+axPjEjpomi34zs03WrG7kOCfkWT5unsa2iMA44A9+/1rCrudVB+6zL8S3f2Hw1rN2Mg29lPLlevyxk/0rN/Z1gNv8FvB2cgy2YmOe29mbH6034kuF8A+JYm24uLKW1O47f8AWKU4P/Aq0/ghaSaf8JfB9pMwaWDTooyR7ZFOkhYh7I9BHSigUVscwUUUUAFFFFAAa8R+Pv8AyEfBv/XW8/8ARIr2414j8ff+Qj4N/wCut5/6JFc2L/gyN8L/ABomp8C/+PHXf+vqP/0UK9aryX4F/wDHjrv/AF9R/wDooV61V4b+FH0FX/iSCiiitjEKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA4n4vWk178NPFENuQJ2sZDGT2Ycg1PBcJdwwzx5EcyB1BGMgjiug1u1jvdIvraUApNA6HIzwVNcD4Cuze+B/DVyVIM2nwSEOcnlO5/nWNVaHTQe5mfFV7lfBc/2SITXMl9YRJGzbAxa6jXBbBwOeuOOuDXReFNSbwjY2Ph/Xo1tJYx5dvdh91vcDJON+BtbttIHbBOcVleMI/tUvhuywT9o1WHOOR+7/ecjv8Adr0e8srbULeW2uoIp7aTh45VDKecjIPHB5qqa0Jrv3i2COlLXI/8IzqGjc+HtVeGHP8Ax534a4gGepByJAf+BYHpUg17X7YFr3w5mGMZZrO7WZ2P+zHtBP51oYHVUVR0nU4dXsY7uFZUV8gxyrtdGBwysOxBBBFXqACiiigANeI/H3/kI+Df+ut5/wCiRXtxrxH4+/8AIR8G/wDXW8/9EiubF/wZG+F/jRNT4F/8eOu/9fUf/ooV61XkvwL/AOPHXf8Ar6j/APRQr1qrw38KPoKv/EkFFFFbGIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSE4FLSN0zQBy/jDXb3Tks9O0q3hutY1IskEU7lI9qrmRmYdgD071xnh/wAR6NoWj6fo+oXkem3unW6QSWl8PKkXaMbgO6Hsw4PauxkZbr4gRwyHctlpgniXjhpJGRj69FFdP5a/3R+VTKNy4TcNjye5vtQ8Q6xod/4bsnv4NHnkunuZX8m2uA0Lx+XG5/1hO773RSOa39F+IU+pef5/h++t5LXAuLdZEmuYWPQNCvzYPOCOCOa7oKBjAxj0rF13wxYa60M0yyQ30AIhvLZzFPFnqFcc4PcdDTSsKUuZ3ZUHjKERNJ/ZGu4Xt/ZkuT9BioLjWtZ1sLb6PpdxaRSDa99qCGIw+u2I/Mxx0PTPWmI3i/RMK62/iC1UfeQrb3RJPocR4H1yamHjvT0IW5stXgkRdzh9OmZU9cuFK/iDTJNzRdKh0XT4bOAuUjBJaQ5d2Jyzse7Ekk/WtCqun6ha6pax3VlcRXFtIMpLEwZT+I96tUAFFFFAAa8R+Pv/ACEfBv8A11vP/RIr2zJrxL4+f8hDwceOJLzr/wBcRXNi/wCDI3wv8aJq/Av/AI8dd/6+o/8A0UK9aryX4Gf8eOu/9fMfP/bIV61V4b+FH0FX/iSCiiitjEKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApDS0jDOKAOM1u4bw94qi16eCaTSp7NbOaWFGkaBldnViigsQd2MgcYrUHjTQGC41SAlhnYCSwHqV6j8a3SpznNVxptosjSLawLIwwWEa5IHvigDA/4WHoGMie8Yccrp1wRz7hOau2vi/Qb1lSHWLLzW/wCWTzBJfxRsMPxFbezHTjtxWddeH9LvXke40+0lkk+87QruP/AsZoAtfarYRGbzovJXrJvG0fj0rmtU8dabGFt9KkGr6lOdkNvZMJV3eruPlRR1O4j2zVz/AIQTw/8AaftH9mR+bkN999pPT7ucfpWtaaZa6eGFpawW6OQWEUapu+uAKAKHhTR5tD0aK2uZY5Lp3knnaJdqeZIxdgo/ugkge1bdIBgmloAKKKKAErgviR8Pbjxw2jy2uopZzabJKwDxb1kDptP0xXe4pNvWplBTTjLqOMnF3icd8O/BU/guyvYrm+S7muphKWSPYFwoGP0rs6BRRGKirIJScndhRRRVCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z',
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
  },
  /* ── Readiness moods (self-check on home screen) ── */
  moods() { return Store.get('moods', {}); },
  todayMood() { return Store.moods()[Store.todayKey()] || null; },
  setMood(mood) {
    const all = Store.moods();
    all[Store.todayKey()] = mood;
    Store.set('moods', all);
  },
  moodCounts() {
    const counts = { good: 0, sore: 0, tired: 0 };
    Object.values(Store.moods()).forEach(m => { if (counts[m] !== undefined) counts[m]++; });
    return counts;
  },
  /* ── Summary / clinician stats ── */
  firstActivityKey() {
    const keys = [
      ...Object.keys(Store.completions()),
      ...Object.keys(Store.skips())
    ].sort();
    return keys.length ? keys[0] : null;
  },
  /* Tracking starts on the day the user registered (profile created).
     Days before this are never shown as missed. */
  startKey() {
    const p = Store.profile();
    if (p && p.createdAt) return p.createdAt;
    return Store.firstActivityKey() || Store.todayKey();
  },
  bestStreak() {
    const first = Store.startKey();
    if (!first) return 0;
    let best = 0, run = 0;
    const d = new Date(first + 'T00:00:00');
    const today = new Date(); today.setHours(0,0,0,0);
    while (d <= today) {
      const key = d.toISOString().slice(0, 10);
      if (Store.isDayComplete(key)) { run++; best = Math.max(best, run); }
      else run = 0;
      d.setDate(d.getDate() + 1);
    }
    return best;
  },
  adherence() {
    const first = Store.startKey();
    if (!first) return { pct: 0, done: 0, span: 0 };
    const start = new Date(first + 'T00:00:00');
    const today = new Date(); today.setHours(0,0,0,0);
    const span  = Math.max(1, Math.round((today - start) / 86400000) + 1);
    const done  = Store.totalDays();
    return { pct: Math.round((done / span) * 100), done, span };
  },
  exerciseDayCounts() {
    const all = Store.completions();
    const counts = {};
    EXERCISES.forEach(e => counts[e.id] = 0);
    Object.values(all).forEach(day => {
      EXERCISES.forEach(e => { if (day[e.id]) counts[e.id]++; });
    });
    return counts;
  },
  totalExercisesDone() {
    const counts = Store.exerciseDayCounts();
    return Object.values(counts).reduce((a, b) => a + b, 0);
  },
  estTotalSeconds() {
    const counts = Store.exerciseDayCounts();
    return EXERCISES.reduce((sum, e) => sum + (counts[e.id] * (e.timerDuration || 30)), 0);
  }
};

/* ── Daily rotating prehab tips ── */
const TIPS = [
  'Breathing deeply during neck holds improves oxygen delivery to the tissue and supports post-op recovery.',
  'Consistency beats intensity — gentle daily movement prepares your body better than occasional hard sessions.',
  'Work within your pain tolerance. Mild stretch is good; sharp pain means ease off.',
  'Good posture between sessions counts too — keep your shoulders relaxed and your chin level.',
  'Staying hydrated helps your muscles and connective tissue respond to exercise.',
  'Stronger neck and shoulder muscles before surgery are linked to faster return of movement after it.',
  'Slow, controlled movements activate muscles more effectively than fast repetitions.',
  'A short walk after your session boosts circulation and helps the exercises take effect.'
];
function todaysTip() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return TIPS[dayOfYear % TIPS.length];
}

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
  showSkipPanel: false,
  countdownInterval: null
};

/* ============================================================
   ROUTER
   ============================================================ */

function nav(view, data = {}) {
  if (State.timerInterval) { clearInterval(State.timerInterval); State.timerInterval = null; }
  if (State.countdownInterval) { clearInterval(State.countdownInterval); State.countdownInterval = null; }
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
   NAV UI UPDATE
   ============================================================ */

function updateNavUI() {
  const ctx  = document.getElementById('nav-ctx');
  const fill = document.getElementById('prog-fill');
  if (!ctx || !fill) return;
  const today = Store.todayCompletions();
  const doneCnt = EXERCISES.filter(e => today[e.id]).length;
  switch (State.view) {
    case 'exercise': {
      const exIdx = EXERCISES.findIndex(e => e.id === State.exerciseDetail);
      ctx.textContent  = (exIdx + 1) + ' of ' + EXERCISES.length;
      fill.style.width = ((exIdx + 1) / EXERCISES.length * 100) + '%';
      break;
    }
    case 'exercises':
      ctx.textContent  = 'Exercises';
      fill.style.width = (doneCnt / EXERCISES.length * 100) + '%';
      break;
    case 'calendar':
      ctx.textContent  = 'Progress';
      fill.style.width = '0%';
      break;
    case 'recordings':
      ctx.textContent  = 'Voice';
      fill.style.width = '0%';
      break;
    case 'notes':
      ctx.textContent  = 'Notes';
      fill.style.width = '0%';
      break;
    default:
      ctx.textContent  = '';
      fill.style.width = (doneCnt / EXERCISES.length * 100) + '%';
  }
}

/* ============================================================
   RENDER ENGINE
   ============================================================ */

function render() {
  const app = document.getElementById('app');
  const profile = Store.profile();

  updateNavUI();

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
    case 'summary':
      app.innerHTML = renderSummary(profile);
      bindSummary();
      break;
  }
}

/* ─── Nav icons (inline SVG) ─────────────────────────────── */
const NAV_ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  exercises: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  notes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  summary: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
};

function navBar(active) {
  const tabs = [
    { id: 'home',       label: 'Home',      icon: NAV_ICONS.home },
    { id: 'exercises',  label: 'Exercises', icon: NAV_ICONS.exercises },
    { id: 'calendar',   label: 'Progress',  icon: NAV_ICONS.calendar },
    { id: 'recordings', label: 'Voice',     icon: NAV_ICONS.mic },
    { id: 'notes',      label: 'Notes',     icon: NAV_ICONS.notes },
    { id: 'summary',    label: 'Summary',   icon: NAV_ICONS.summary }
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
      <h1>Rush<span style="color:var(--green)">Ready</span></h1>
      <p>Prehabilitation — exercises to keep you moving and strong before your operation.</p>
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
      surgeryDate: surgeryI.value,
      createdAt: Store.todayKey()
    });
    render();
  });
}

/* ─── Home ───────────────────────────────────────────────── */
function calcCountdown() {
  const now = new Date();
  const midnight = new Date(now); midnight.setHours(24, 0, 0, 0);
  const diff = Math.max(0, midnight - now);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function renderHome(profile) {
  const today    = Store.todayCompletions();
  const skips    = Store.todaySkips();
  const done     = EXERCISES.filter(e => today[e.id] || skips[e.id]).length;
  const total    = EXERCISES.length;
  const streak   = Store.streakCount();
  const daysLeft = daysToSurgery(profile.surgeryDate);
  const allDone  = Store.isTodayComplete();
  const mood     = Store.todayMood();

  const hr = new Date().getHours();
  const greeting = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';
  const dateStr  = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

  const checkSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  const playSvg  = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21"/></svg>`;
  const clockSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

  /* ── This-week strip (Mon–Sun) ── */
  const todayDate = new Date(); todayDate.setHours(0,0,0,0);
  const regDate = new Date(Store.startKey() + 'T00:00:00');
  const dow = todayDate.getDay();
  const monday = new Date(todayDate);
  monday.setDate(todayDate.getDate() - (dow === 0 ? 6 : dow - 1));
  const dayLetters = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  let weekPills = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(monday.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    let cls, glyph;
    if (d.getTime() === todayDate.getTime()) {
      cls = allDone ? 'wk-done' : 'wk-today';
      glyph = allDone ? '✓' : '!';
    } else if (d > todayDate || d < regDate) { cls = 'wk-future'; glyph = '–'; }
    else if (Store.isDayComplete(key)) { cls = 'wk-done'; glyph = '✓'; }
    else { cls = 'wk-missed'; glyph = '✗'; }
    weekPills += `<div class="wk-pill ${cls}"><span class="wk-lbl">${dayLetters[i]}</span><div class="wk-dot">${glyph}</div></div>`;
  }

  return `<div class="screen">
    <div class="content with-nav">

      <div class="home-header">
        <div>
          <div class="home-greeting">${greeting}, ${profile.name}</div>
          <div class="home-date">${dateStr}</div>
        </div>
        <div class="done-circle${allDone ? '' : ' incomplete'}">
          ${allDone ? checkSvg : `<span>${done}/${total}</span>`}
        </div>
      </div>

      <div class="home-stats-row">
        <div class="home-stat">
          <span class="num">${Math.max(0, daysLeft)}</span>
          <span class="lbl">Days to surgery</span>
        </div>
        <div class="home-stat">
          <span class="num">🔥 ${streak}</span>
          <span class="lbl">Day streak</span>
        </div>
        <div class="home-stat">
          <span class="num">${Store.totalDays()}</span>
          <span class="lbl">Days done</span>
        </div>
      </div>

      ${allDone
        ? `<div class="cta-btn cta-done" id="home-cta">
             <div class="cta-icon">${checkSvg}</div>
             <div>
               <div class="cta-main">Session complete!</div>
               <div class="cta-sub">All ${total} exercises addressed today</div>
             </div>
           </div>`
        : `<div class="cta-btn" id="home-cta">
             <div class="cta-icon">${playSvg}</div>
             <div>
               <div class="cta-main">Start today's session</div>
               <div class="cta-sub">${done} of ${total} exercises completed</div>
             </div>
           </div>`}

      <div class="reset-row">
        ${clockSvg}
        <span class="reset-lbl">${allDone ? 'Next session in' : 'Session resets in'}</span>
        <span class="reset-time" id="countdown-time">${calcCountdown()}</span>
      </div>

      <div class="section-label">How are you feeling today?</div>
      <div class="readiness-card">
        <div class="readiness-q">Quick check before you start</div>
        <div class="readiness-opts">
          <button class="readiness-btn ${mood === 'good' ? 'selected' : ''}" data-mood="good">😊 Good</button>
          <button class="readiness-btn ${mood === 'sore' ? 'selected' : ''}" data-mood="sore">😬 Sore</button>
          <button class="readiness-btn ${mood === 'tired' ? 'selected' : ''}" data-mood="tired">😴 Tired</button>
        </div>
      </div>

      <div class="section-label">This week</div>
      <div class="week-card">
        <div class="week-pills">${weekPills}</div>
      </div>

      <div class="section-label">Today's tip</div>
      <div class="tip-card">
        <div class="tip-label">💡 Prehab tip</div>
        <div class="tip-text">${todaysTip()}</div>
      </div>

    </div>
    ${navBar('home')}
  </div>`;
}

function bindHome() {
  bindNav();

  /* CTA → jump straight to the first incomplete exercise */
  const cta = document.getElementById('home-cta');
  if (cta) {
    cta.addEventListener('click', () => {
      const today = Store.todayCompletions();
      const skips = Store.todaySkips();
      const next  = EXERCISES.find(e => !today[e.id] && !skips[e.id]);
      if (next) nav('exercise', { id: next.id });
      else nav('exercises');
    });
  }

  /* Readiness self-check */
  document.querySelectorAll('[data-mood]').forEach(btn => {
    btn.addEventListener('click', () => {
      Store.setMood(btn.dataset.mood);
      document.querySelectorAll('[data-mood]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  const el = document.getElementById('countdown-time');
  if (el) {
    State.countdownInterval = setInterval(() => {
      el.textContent = calcCountdown();
    }, 1000);
  }
}

/* ─── Exercise list ──────────────────────────────────────── */
function exerciseListItem(ex, done, skipped) {
  const cls = done ? 'done' : skipped ? 'skipped' : '';
  const checkIcon = done
    ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
    : skipped
    ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`
    : '';
  return `<div class="ex-item ${cls}" data-ex-id="${ex.id}">
    <div class="ex-thumb">
      <img src="${IMAGES[ex.id] || ''}" alt="${ex.name}"
           style="width:100%;height:100%;object-fit:cover;border-radius:10px;"/>
      <div style="display:none;width:52px;height:52px;align-items:center;justify-content:center;overflow:hidden">${SVGS[ex.svgKey] || ''}</div>
    </div>
    <div class="ex-info">
      <div class="ex-name">${ex.name}</div>
      ${ex.muscles ? `<div class="ex-muscle">${ex.muscles}</div>` : ''}
      <div class="ex-reps">${ex.reps}${ex.hold ? ` · ${ex.hold}` : ''}${skipped ? ' · <em>skipped</em>' : ''}</div>
    </div>
    <div class="check-ring ${done ? 'done' : skipped ? 'skipped' : ''}">${checkIcon}</div>
  </div>`;
}

function renderExerciseList(profile) {
  const today = Store.todayCompletions();
  const skips = Store.todaySkips();
  const done  = EXERCISES.filter(e => today[e.id] || skips[e.id]).length;
  const pct   = Math.round((done / EXERCISES.length) * 100);
  return `<div class="screen">
    <div class="page-header">
      <div>
        <h2>Today's Exercises</h2>
      </div>
    </div>
    <div class="content with-nav">
      <div class="ex-progress-card">
        <div class="ex-progress-top">
          <span class="ex-progress-lbl">Today's progress</span>
          <span class="ex-progress-count">${done} / ${EXERCISES.length} <span class="ex-progress-pct">(${pct}%)</span></span>
        </div>
        <div class="ex-progress-track">
          <div class="ex-progress-fill" style="width:${pct}%">${pct >= 18 ? `<span>${pct}%</span>` : ''}</div>
        </div>
      </div>
      <div class="info-box">
        10 reps · 1–3× daily · 5–7 days/week · Work within your pain tolerance
      </div>
      ${EXERCISES.map(e => exerciseListItem(e, today[e.id], skips[e.id])).join('')}
      ${done === EXERCISES.length
        ? `<div class="note-box" style="border-color:var(--green);background:var(--success-bg);margin-top:10px;">
             <strong>Session complete!</strong> All exercises addressed for today.
           </div>`
        : ''}
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

  const tLeft     = State.timerLeft;
  const arcOffset = (TIMER_CIRC * (1 - tLeft / State.timerTarget)).toFixed(2);
  const timerLbl  = State.timerRunning
    ? 'In progress…'
    : tLeft === 0
    ? 'Done! Mark complete below.'
    : `${State.timerTarget} seconds · tap Start when ready`;
  const urgent    = tLeft <= 10 && State.timerRunning;

  const tags = [ex.reps, ex.hold].filter(Boolean)
    .map(t => `<span class="ex-tag">${t}</span>`).join('');

  const skipPanelHtml = State.showSkipPanel ? `
    <div class="skip-panel">
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
    </div>` : '';

  const skipInfo = skipped
    ? `<div class="warn-box" style="margin-bottom:8px;"><span>↷</span><span>Skipped — ${
        skips[ex.id].reason === 'too-difficult' ? 'Too difficult'
        : skips[ex.id].reason === 'dislike' ? 'Dislike' : 'Other'
      }${skips[ex.id].text ? ': ' + escHtml(skips[ex.id].text) : ''}</span></div>` : '';

  const completeBtn = skipped
    ? `<button class="btn-complete skipped-state" id="ex-unskip-btn">Undo skip</button>`
    : done
    ? `<button class="btn-complete marked" id="ex-done-btn">✓ Complete</button>`
    : `<button class="btn-complete" id="ex-done-btn">Mark Complete</button>`;

  return `<div class="screen">
    <div class="ex-head">
      <div class="ex-head-title">${ex.name}</div>
      <div class="ex-count-pill">${exIdx + 1} of ${EXERCISES.length}</div>
    </div>
    <div class="content ex-detail-content">

      <div class="anim-card${done ? ' done-state' : ''}">
        <div class="done-badge">✓</div>
        ${ex.muscles ? `<div class="muscle-chip">${ex.muscles}</div>` : ''}
        <img class="ex-img" src="${IMAGES[ex.id] || ''}" alt="${ex.name}"/>
        <div class="ex-img-wrap" style="display:none">${SVGS[ex.svgKey] || ''}</div>
        <div class="ex-instr">${ex.instruction}</div>
        ${tags ? `<div class="ex-tags">${tags}</div>` : ''}
      </div>

      <div class="timer-panel">
        <div class="timer-lbl" id="timer-top-lbl">${timerLbl}</div>
        <div class="timer-flex">
          <div class="timer-ring-wrap">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle class="timer-track" cx="60" cy="60" r="54"/>
              <circle class="timer-arc${urgent ? ' urgent' : ''}" id="timer-arc"
                      cx="60" cy="60" r="54"
                      stroke-dasharray="${TIMER_CIRC}"
                      stroke-dashoffset="${arcOffset}"/>
            </svg>
            <div class="timer-num${tLeft === 0 ? ' done' : ''}${urgent ? ' urgent' : ''}" id="timer-num">${tLeft}</div>
          </div>
          <div class="timer-side-controls">
            <button class="btn-timer btn-timer-start" id="timer-start">
              ${State.timerRunning ? 'Pause' : tLeft === 0 ? 'Restart' : 'Start'}
            </button>
            <button class="btn-timer btn-timer-reset" id="timer-reset">Reset</button>
          </div>
        </div>
      </div>

    </div>

    <div class="ex-actions-fixed">
      ${skipInfo}
      ${skipPanelHtml}
      <div class="ex-action-row">
        <button class="btn-nav" id="ex-prev" ${exIdx === 0 ? 'disabled' : ''}>←</button>
        ${completeBtn}
        <button class="btn-nav" id="ex-next" ${!nextEx ? 'disabled' : ''}>→</button>
      </div>
      ${!done && !skipped
        ? `<button class="skip-toggle" id="skip-toggle">${State.showSkipPanel ? 'Cancel' : 'Skip this exercise'}</button>`
        : ''}
    </div>
    ${navBar('exercises')}
  </div>`;
}

function bindExerciseDetail() {
  bindNav();
  document.getElementById('ex-back')?.addEventListener('click', () => nav(State._fromView || 'exercises'));

  document.getElementById('ex-prev')?.addEventListener('click', () => {
    const idx = EXERCISES.findIndex(e => e.id === State.exerciseDetail);
    if (idx > 0) nav('exercise', { id: EXERCISES[idx - 1].id });
  });

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

  // Timer — bind controls first so display errors can never disable them
  document.getElementById('timer-start').addEventListener('click', toggleTimer);
  document.getElementById('timer-reset').addEventListener('click', resetExTimer);
  updateTimerDisplay();

  // Next exercise
  document.getElementById('ex-next')?.addEventListener('click', () => {
    const exIdx = EXERCISES.findIndex(e => e.id === State.exerciseDetail);
    const nextEx = EXERCISES[exIdx + 1];
    if (nextEx) nav('exercise', { id: nextEx.id });
    else nav('exercises');
  });
}

const TIMER_CIRC = 339.3; // r=54: 2π×54

function toggleTimer() {
  const btn = document.getElementById('timer-start');
  if (State.timerRunning) {
    clearInterval(State.timerInterval); State.timerInterval = null;
    State.timerRunning = false;
    if (btn) btn.textContent = 'Resume';
    const lbl = document.getElementById('timer-top-lbl');
    if (lbl) lbl.textContent = 'Paused';
  } else {
    if (State.timerLeft <= 0) { resetExTimer(); return; }
    State.timerRunning = true;
    if (btn) btn.textContent = 'Pause';
    const lbl = document.getElementById('timer-top-lbl');
    if (lbl) lbl.textContent = 'In progress…';
    State.timerInterval = setInterval(() => {
      State.timerLeft = Math.max(0, State.timerLeft - 1);
      updateTimerDisplay();
      if (State.timerLeft === 0) {
        clearInterval(State.timerInterval); State.timerInterval = null;
        State.timerRunning = false;
        const sb   = document.getElementById('timer-start');
        const lbl2 = document.getElementById('timer-top-lbl');
        if (sb)   sb.textContent = 'Restart';
        if (lbl2) lbl2.textContent = 'Done! Mark complete below.';
      }
    }, 1000);
  }
}

function resetExTimer() {
  if (State.timerInterval) { clearInterval(State.timerInterval); State.timerInterval = null; }
  State.timerRunning = false;
  State.timerLeft = State.timerTarget;
  const sb  = document.getElementById('timer-start');
  const lbl = document.getElementById('timer-top-lbl');
  if (sb)  sb.textContent = 'Start';
  if (lbl) lbl.textContent = `${State.timerTarget} seconds · tap Start when ready`;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const numEl = document.getElementById('timer-num');
  const arcEl = document.getElementById('timer-arc');
  if (!numEl || !arcEl) return;
  const urgent = State.timerLeft <= 10 && State.timerRunning;
  numEl.textContent = State.timerLeft;
  numEl.className   = 'timer-num' + (State.timerLeft === 0 ? ' done' : '') + (urgent ? ' urgent' : '');
  arcEl.setAttribute('class', 'timer-arc' + (urgent ? ' urgent' : ''));
  const pct = State.timerLeft / State.timerTarget;
  arcEl.setAttribute('stroke-dashoffset', (TIMER_CIRC * (1 - pct)).toFixed(2));
}

/* ─── Completion celebration ─────────────────────────────── */
function renderCompletion(profile) {
  const streak = Store.streakCount();
  const today  = Store.todayCompletions();
  const skips  = Store.todaySkips();
  const doneCnt  = EXERCISES.filter(e => today[e.id]).length;
  const skipCnt  = EXERCISES.filter(e => skips[e.id]).length;
  return `<div class="screen">
    <div class="completion-wrap">
      <div class="complete-icon">✓</div>
      <div class="completion-title">Well done, ${profile.name}!</div>
      <div class="completion-sub">You've completed today's prehabilitation session. Aim to do these exercises 1–3 times per day, 5–7 days per week.</div>
      <div class="c-stats">
        <div class="c-stat">
          <span class="c-stat-n">${doneCnt}</span>
          <span class="c-stat-l">Completed</span>
        </div>
        ${skipCnt ? `<div class="c-stat"><span class="c-stat-n">${skipCnt}</span><span class="c-stat-l">Skipped</span></div>` : ''}
        <div class="c-stat">
          <span class="c-stat-n">${streak}</span>
          <span class="c-stat-l">Day streak</span>
        </div>
      </div>
      <button class="btn btn-navy" id="comp-home" style="max-width:280px;margin:0 auto;">Back to home</button>
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
      <div class="cal-stats-row">
        <div class="cal-stat-box"><div class="n">${total}</div><div class="l">Days complete</div></div>
        <div class="cal-stat-box"><div class="n">${streak}</div><div class="l">Day streak</div></div>
        <div class="cal-stat-box"><div class="n">${EXERCISES.length}</div><div class="l">Exercises/day</div></div>
      </div>
      <div class="cal-card">
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
          <div class="cal-legend-item"><div class="cal-swatch" style="background:var(--green)"></div>All done</div>
          <div class="cal-legend-item"><div class="cal-swatch" style="background:#fdecea;border:1px solid #C0392B"></div>Partial</div>
          <div class="cal-legend-item"><div class="cal-swatch" style="background:#e8f4fc;border:2px solid var(--navy)"></div>Today</div>
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
        <div class="text-sm text-mute rec-hint" id="rec-hint">Tap to start recording</div>
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
   SUMMARY (clinician / PT view)
   ============================================================ */

function fmtMinutes(seconds) {
  if (!seconds) return '0 min';
  const mins = seconds / 60;
  if (mins < 60) return `~${Math.round(mins)} min`;
  return `~${(mins / 60).toFixed(1)} h`;
}

function summaryWeeklyGrid() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const start = new Date(today); start.setDate(today.getDate() - 20);
  const regDate = new Date(Store.startKey() + 'T00:00:00');

  /* Anchor the grid to the Monday of the start week so columns align by weekday */
  const monday = new Date(start);
  const dow = monday.getDay();
  monday.setDate(monday.getDate() - (dow === 0 ? 6 : dow - 1));

  const fmt = d => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const headers = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    .map(d => `<div class="sum-cal-hdr">${d}</div>`).join('');

  let weeksHtml = '';
  const cursor = new Date(monday);
  while (cursor <= today) {
    const wStart = new Date(cursor);
    const wEnd = new Date(cursor); wEnd.setDate(cursor.getDate() + 6);
    let cells = '';
    for (let i = 0; i < 7; i++) {
      const key = cursor.toISOString().slice(0, 10);
      const inRange = cursor >= start && cursor <= today;
      const tracked = cursor >= regDate;   /* only from registration day onward */
      let cls;
      if (cursor.getTime() === today.getTime()) cls = 'sum-today';
      else if (cursor > today) cls = 'sum-future';
      else if (!inRange || !tracked) cls = 'sum-empty';
      else cls = Store.isDayComplete(key) ? 'sum-done' : 'sum-missed';
      cells += `<div class="sum-cal-cell ${cls}">${cls === 'sum-empty' ? '' : cursor.getDate()}</div>`;
      cursor.setDate(cursor.getDate() + 1);
    }
    weeksHtml += `<div class="sum-week-label">${fmt(wStart)} – ${fmt(wEnd)}</div>
      <div class="sum-cal-row">${cells}</div>`;
  }

  /* Adherence % over the tracked portion of the last 21 days */
  let complete = 0, trackedDays = 0;
  const c = new Date(start);
  while (c <= today) {
    if (c >= regDate) {
      trackedDays++;
      if (Store.isDayComplete(c.toISOString().slice(0, 10))) complete++;
    }
    c.setDate(c.getDate() + 1);
  }
  const pct21 = trackedDays ? Math.round((complete / trackedDays) * 100) : 0;

  return { headers, weeksHtml, pct21 };
}

function renderSummary(profile) {
  const adh        = Store.adherence();
  const streak     = Store.streakCount();
  const best       = Store.bestStreak();
  const totalEx    = Store.totalExercisesDone();
  const estTime    = fmtMinutes(Store.estTotalSeconds());
  const counts     = Store.exerciseDayCounts();
  const moodCounts = Store.moodCounts();
  const grid       = summaryWeeklyGrid();

  const exRows = EXERCISES.map(e => `
    <tr>
      <td><div class="sum-ex-name">${e.name}</div></td>
      <td>${counts[e.id]}</td>
      <td>${fmtMinutes(counts[e.id] * (e.timerDuration || 30))}</td>
    </tr>`).join('');

  return `<div class="screen">
    <div class="page-header"><h2>Summary</h2></div>
    <div class="content with-nav">

      <div class="clinician-notice">🩺 Clinician / PT view — all data stays on this device only</div>

      <div class="section-label">Adherence overview</div>
      <div class="sum-stats-grid">
        <div class="sum-stat">
          <div class="n" style="color:var(--green)">${adh.pct}%</div>
          <div class="l">Overall adherence</div>
          <div class="s">${adh.done} of ${adh.span} day${adh.span === 1 ? '' : 's'} complete</div>
        </div>
        <div class="sum-stat">
          <div class="n">${streak}</div>
          <div class="l">Current streak</div>
          <div class="s">Best: ${best} days</div>
        </div>
        <div class="sum-stat">
          <div class="n">${totalEx}</div>
          <div class="l">Total exercises</div>
          <div class="s">Across all sessions</div>
        </div>
        <div class="sum-stat">
          <div class="n">${estTime}</div>
          <div class="l">Est. exercise time</div>
          <div class="s">From timer durations</div>
        </div>
      </div>

      <div class="section-label">Day-by-day — last 21 days</div>
      <div class="sum-cal-card">
        <div class="sum-cal-top">
          <span>Last 21 days</span>
          <span class="sum-cal-pct">${grid.pct21}%</span>
        </div>
        <div class="sum-bar"><div class="sum-bar-fill" style="width:${grid.pct21}%"></div></div>
        <div class="sum-cal-headers">${grid.headers}</div>
        ${grid.weeksHtml}
        <div class="sum-legend">
          <span><i class="sw sw-done"></i>Done</span>
          <span><i class="sw sw-missed"></i>Missed</span>
          <span><i class="sw sw-today"></i>Today</span>
        </div>
      </div>

      <div class="section-label">Per-exercise breakdown</div>
      <div class="sum-table-card">
        <table class="sum-table">
          <thead><tr><th>Exercise</th><th>Days</th><th>Est. time</th></tr></thead>
          <tbody>${exRows}</tbody>
        </table>
      </div>

      <div class="section-label">Readiness mood log</div>
      <div class="sum-mood-card">
        <div class="sum-mood-sub">Self-reported before each session</div>
        <div class="sum-mood-chips">
          <div class="sum-mood-chip">😊 Good <strong>×${moodCounts.good}</strong></div>
          <div class="sum-mood-chip">😬 Sore <strong>×${moodCounts.sore}</strong></div>
          <div class="sum-mood-chip">😴 Tired <strong>×${moodCounts.tired}</strong></div>
        </div>
      </div>

      <div class="section-label">Export</div>
      <div class="sum-export-card">
        <div class="sum-export-title">Download patient report</div>
        <div class="sum-export-sub">CSV with per-day and per-exercise data for clinical records or PT handoff.</div>
        <div class="sum-export-btns">
          <button class="sum-export-btn" id="sum-csv">📊 Export CSV</button>
          <button class="sum-export-btn" id="sum-print">🖨 Print summary</button>
        </div>
      </div>

    </div>
    ${navBar('summary')}
  </div>`;
}

function exportSummaryCSV() {
  const profile = Store.profile() || {};
  const completions = Store.completions();
  const skips = Store.skips();
  const moods = Store.moods();

  const allKeys = [...new Set([
    ...Object.keys(completions),
    ...Object.keys(skips),
    ...Object.keys(moods)
  ])].sort();

  const esc = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const header = ['Date', 'Day complete', 'Mood', ...EXERCISES.map(e => e.name)];
  const rows = [header.map(esc).join(',')];

  allKeys.forEach(key => {
    const day = completions[key] || {};
    const sk  = skips[key] || {};
    const row = [
      key,
      Store.isDayComplete(key) ? 'yes' : 'no',
      moods[key] || ''
    ];
    EXERCISES.forEach(e => {
      row.push(day[e.id] ? 'done' : sk[e.id] ? `skipped (${sk[e.id].reason || ''})` : '');
    });
    rows.push(row.map(esc).join(','));
  });

  /* Per-exercise totals footer */
  rows.push('');
  rows.push(['Exercise totals (days done)'].map(esc).join(','));
  const counts = Store.exerciseDayCounts();
  EXERCISES.forEach(e => {
    rows.push([e.name, counts[e.id], fmtMinutes(counts[e.id] * (e.timerDuration || 30))].map(esc).join(','));
  });

  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `prehab-summary-${(profile.name || 'patient').toLowerCase()}-${Store.todayKey()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function bindSummary() {
  bindNav();
  const csvBtn = document.getElementById('sum-csv');
  if (csvBtn) csvBtn.addEventListener('click', exportSummaryCSV);
  const printBtn = document.getElementById('sum-print');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
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

/* One-time migration: existing users get a registration date so the
   Summary grid never backfills 'missed' days before they joined. */
(() => {
  const p = Store.profile();
  if (p && !p.createdAt) {
    p.createdAt = Store.firstActivityKey() || Store.todayKey();
    Store.set('profile', p);
  }
})();

render();
