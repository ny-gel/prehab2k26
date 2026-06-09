'use strict';

/* ============================================================
   SVG EXERCISE ILLUSTRATIONS
   Clinical line-art style matching the original handout images.
   Each SVG is 200×240 viewBox showing the figure + motion arrows.
   ============================================================ */

const SVGS = {

neckRotation: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a1" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
  <marker id="a1g" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#999"/></marker>
</defs>
<!-- shirt / upper torso -->
<path d="M55,225 C42,195 42,175 55,162 L75,152 L100,147 L125,152 L145,162 C158,175 158,195 145,225Z" fill="#5B8DD9"/>
<!-- collar shadow -->
<path d="M82,152 Q100,155 118,152 L114,145 L100,147 L86,145Z" fill="#4a7bc4"/>
<!-- neck -->
<rect x="87" y="125" width="26" height="28" rx="5" fill="#C8956B"/>
<!-- head - slightly turned (profile-ish from 3/4 view) -->
<ellipse cx="100" cy="96" rx="33" ry="37" fill="#C8956B"/>
<!-- hair (close crop) -->
<path d="M69,82 Q100,56 131,78 Q124,60 100,57 Q76,60 69,82Z" fill="#1c1210"/>
<!-- ear (right, visible) -->
<ellipse cx="133" cy="100" rx="7" ry="10" fill="#b07848"/>
<!-- eye left -->
<ellipse cx="90" cy="92" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="91" cy="92" r="2.2" fill="#1a1a1a"/>
<circle cx="92.2" cy="91" r=".7" fill="#fff"/>
<!-- eye right -->
<ellipse cx="110" cy="92" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="111" cy="92" r="2.2" fill="#1a1a1a"/>
<circle cx="112.2" cy="91" r=".7" fill="#fff"/>
<!-- nose -->
<path d="M98,100 L95,110 L100,112 L105,110 L102,100" fill="#b07848" stroke="none"/>
<!-- mouth -->
<path d="M93,120 Q100,124 107,120" stroke="#8b5030" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- rotation arrow RIGHT (main) -->
<path d="M135,78 C155,60 165,40 148,30" stroke="#1a1a1a" stroke-width="2.8" fill="none" stroke-linecap="round" marker-end="url(#a1)"/>
<!-- rotation arrow LEFT (dashed, return) -->
<path d="M65,78 C45,60 35,40 52,30" stroke="#999" stroke-width="2" stroke-dasharray="5,4" fill="none" stroke-linecap="round" marker-end="url(#a1g)"/>
</svg>`,

neckLateralFlexion: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
</defs>
<!-- shirt -->
<path d="M50,225 C37,195 37,175 50,162 L72,151 L100,146 L128,151 L150,162 C163,175 163,195 150,225Z" fill="#5B8DD9"/>
<!-- neck -->
<rect x="87" y="125" width="26" height="25" rx="5" fill="#C8956B"/>
<!-- head tilted RIGHT -->
<g transform="rotate(18 100 125)">
  <ellipse cx="100" cy="93" rx="33" ry="37" fill="#C8956B"/>
  <path d="M69,79 Q100,53 131,75 Q124,57 100,54 Q76,57 69,79Z" fill="#1c1210"/>
  <ellipse cx="88" cy="89" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
  <circle cx="89" cy="89" r="2.2" fill="#1a1a1a"/>
  <ellipse cx="112" cy="89" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
  <circle cx="113" cy="89" r="2.2" fill="#1a1a1a"/>
  <path d="M93,118 Q100,122 107,118" stroke="#8b5030" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</g>
<!-- arrow showing ear toward shoulder -->
<path d="M128,65 C148,88 150,110 145,130" stroke="#1a1a1a" stroke-width="2.8" fill="none" stroke-linecap="round" marker-end="url(#a2)"/>
<!-- small arrow hint left side (dashed) -->
<path d="M72,65 C52,88 50,110 55,130" stroke="#999" stroke-width="2" stroke-dasharray="5,4" fill="none" stroke-linecap="round"/>
</svg>`,

shoulderShrugs: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a3" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
</defs>
<!-- chair -->
<rect x="42" y="186" width="116" height="14" rx="5" fill="#9e8262"/>
<rect x="46" y="200" width="10" height="58" rx="3" fill="#8b7355"/>
<rect x="144" y="200" width="10" height="58" rx="3" fill="#8b7355"/>
<!-- thighs/shorts -->
<rect x="60" y="183" width="30" height="28" rx="6" fill="#7a8fa0"/>
<rect x="110" y="183" width="30" height="28" rx="6" fill="#7a8fa0"/>
<!-- arms raised (dashed ghost) -->
<rect x="18" y="108" width="18" height="45" rx="9" fill="none" stroke="#aaa" stroke-width="1.8" stroke-dasharray="5,4"/>
<rect x="164" y="108" width="18" height="45" rx="9" fill="none" stroke="#aaa" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- shoulder ghost raised -->
<ellipse cx="24" cy="112" rx="20" ry="15" fill="none" stroke="#aaa" stroke-width="1.8" stroke-dasharray="5,4"/>
<ellipse cx="176" cy="112" rx="20" ry="15" fill="none" stroke="#aaa" stroke-width="1.8" stroke-dasharray="5,4"/>
<!-- shirt / torso (solid) -->
<rect x="55" y="128" width="90" height="60" rx="14" fill="#5B8DD9"/>
<!-- shoulders solid -->
<ellipse cx="48" cy="135" rx="22" ry="16" fill="#5B8DD9"/>
<ellipse cx="152" cy="135" rx="22" ry="16" fill="#5B8DD9"/>
<!-- arms solid hanging -->
<rect x="28" y="140" width="18" height="46" rx="9" fill="#C8956B"/>
<rect x="154" y="140" width="18" height="46" rx="9" fill="#C8956B"/>
<!-- hands -->
<ellipse cx="37" cy="188" rx="9" ry="7" fill="#C8956B"/>
<ellipse cx="163" cy="188" rx="9" ry="7" fill="#C8956B"/>
<!-- neck -->
<rect x="88" y="110" width="24" height="22" rx="4" fill="#C8956B"/>
<!-- head -->
<ellipse cx="100" cy="83" rx="30" ry="33" fill="#C8956B"/>
<path d="M72,70 Q100,47 128,66 Q122,50 100,47 Q78,50 72,70Z" fill="#6b4c30"/>
<ellipse cx="90" cy="80" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="91" cy="80" r="2.2" fill="#1a1a1a"/>
<ellipse cx="110" cy="80" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="111" cy="80" r="2.2" fill="#1a1a1a"/>
<path d="M93,100 Q100,104 107,100" stroke="#8b5030" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- UP arrows -->
<line x1="44" y1="128" x2="44" y2="102" stroke="#1a1a1a" stroke-width="2.8" stroke-linecap="round" marker-end="url(#a3)"/>
<line x1="156" y1="128" x2="156" y2="102" stroke="#1a1a1a" stroke-width="2.8" stroke-linecap="round" marker-end="url(#a3)"/>
</svg>`,

chestPress: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a4" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
  <marker id="a4g" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#aaa"/></marker>
</defs>
<!-- legs/shorts -->
<rect x="62" y="185" width="28" height="60" rx="8" fill="#6e7e8a"/>
<rect x="110" y="185" width="28" height="60" rx="8" fill="#6e7e8a"/>
<!-- shirt torso (darker pink/maroon like original) -->
<rect x="55" y="130" width="90" height="70" rx="12" fill="#9B4F6E"/>
<!-- raised arms (solid, pointing up) -->
<path d="M55,130 L35,80 L42,75 L58,128Z" fill="#C8956B"/>
<path d="M145,130 L165,80 L158,75 L142,128Z" fill="#C8956B"/>
<!-- fists raised -->
<rect x="29" y="60" width="18" height="22" rx="5" fill="#C8956B" stroke="#8b6040" stroke-width="1"/>
<rect x="153" y="60" width="18" height="22" rx="5" fill="#C8956B" stroke="#8b6040" stroke-width="1"/>
<!-- dashed start arms at side -->
<path d="M55,130 L30,168" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4" fill="none"/>
<path d="M145,130 L170,168" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4" fill="none"/>
<ellipse cx="25" cy="174" rx="9" ry="7" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4"/>
<ellipse cx="175" cy="174" rx="9" ry="7" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4"/>
<!-- neck -->
<rect x="88" y="112" width="24" height="22" rx="4" fill="#C8956B"/>
<!-- head (darker complexion like original) -->
<ellipse cx="100" cy="85" rx="30" ry="33" fill="#A06840"/>
<path d="M72,72 Q100,48 128,68 Q122,52 100,49 Q78,52 72,72Z" fill="#1c1210"/>
<ellipse cx="89" cy="82" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="90" cy="82" r="2.2" fill="#1a1a1a"/>
<ellipse cx="111" cy="82" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="112" cy="82" r="2.2" fill="#1a1a1a"/>
<!-- UP arrows -->
<line x1="38" y1="75" x2="38" y2="50" stroke="#1a1a1a" stroke-width="2.8" stroke-linecap="round" marker-end="url(#a4)"/>
<line x1="162" y1="75" x2="162" y2="50" stroke="#1a1a1a" stroke-width="2.8" stroke-linecap="round" marker-end="url(#a4)"/>
</svg>`,

shoulderFlexion: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a5" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
  <marker id="a5b" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
</defs>
<!-- chair (side view) -->
<rect x="130" y="196" width="60" height="10" rx="4" fill="#9e8262"/>
<rect x="155" y="206" width="10" height="52" rx="3" fill="#8b7355"/>
<rect x="176" y="206" width="10" height="52" rx="3" fill="#8b7355"/>
<!-- back of chair -->
<rect x="174" y="136" width="10" height="64" rx="3" fill="#8b7355"/>
<!-- seat of person -->
<rect x="100" y="180" width="80" height="18" rx="6" fill="#c47fa0"/>
<!-- thigh / leg down -->
<rect x="108" y="196" width="22" height="55" rx="8" fill="#7a8fa0"/>
<!-- body/shirt - side view (women's style like original) -->
<path d="M105,115 L105,195 L155,195 L155,115 Q140,108 130,110 Q115,108 105,115Z" fill="#c47fa0"/>
<!-- arm UP - raised forward arc endpoint -->
<path d="M110,125 L68,68" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
<!-- thumb indicator (end of arm) -->
<circle cx="63" cy="63" r="7" fill="#C8956B"/>
<!-- arm start position (dashed, hanging down) -->
<path d="M110,125 L110,175" stroke="#aaa" stroke-width="8" stroke-dasharray="6,5" stroke-linecap="round"/>
<ellipse cx="110" cy="183" rx="7" ry="5" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4"/>
<!-- neck -->
<rect x="118" y="95" width="18" height="24" rx="4" fill="#C8956B"/>
<!-- head (side profile - woman with longer hair) -->
<ellipse cx="128" cy="72" rx="28" ry="30" fill="#C8956B"/>
<!-- hair ponytail-ish -->
<path d="M100,65 Q128,42 156,62 Q152,46 128,43 Q106,46 100,65Z" fill="#1c1210"/>
<path d="M100,80 Q92,95 96,112 Q102,100 100,80Z" fill="#1c1210"/>
<!-- eye (profile-ish) -->
<ellipse cx="140" cy="69" rx="4" ry="3.5" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="141" cy="69" r="2" fill="#1a1a1a"/>
<!-- arc motion path (dashed) -->
<path d="M110,170 C90,160 65,130 63,63" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4" fill="none"/>
<!-- arrows on arc -->
<path d="M90,115 C78,100 68,80 63,63" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#a5)"/>
<path d="M112,168 C115,148 118,130 110,125" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#a5b)"/>
</svg>`,

seatedRows: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a6" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
</defs>
<!-- chair (side view) -->
<rect x="105" y="196" width="80" height="10" rx="4" fill="#9e8262"/>
<rect x="130" y="206" width="10" height="52" rx="3" fill="#8b7355"/>
<rect x="165" y="206" width="10" height="52" rx="3" fill="#8b7355"/>
<rect x="163" y="140" width="10" height="60" rx="3" fill="#8b7355"/>
<!-- leg/thigh (side view) -->
<rect x="112" y="196" width="20" height="55" rx="8" fill="#7a8fa0"/>
<!-- body side view (woman, teal top) -->
<path d="M108,118 L108,200 L155,200 L155,118 Q140,110 130,112 Q118,110 108,118Z" fill="#3a9b8e"/>
<!-- Arm pulled BACK (key movement) - upper arm -->
<path d="M110,132 L80,148" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
<!-- forearm bent back -->
<path d="M80,148 L70,168" stroke="#C8956B" stroke-width="11" stroke-linecap="round"/>
<!-- hand/fist -->
<ellipse cx="67" cy="175" rx="9" ry="7" fill="#C8956B"/>
<!-- dashed start position (arm forward/relaxed) -->
<path d="M110,132 L135,145" stroke="#aaa" stroke-width="8" stroke-dasharray="6,5" stroke-linecap="round"/>
<path d="M135,145 L140,165" stroke="#aaa" stroke-width="7" stroke-dasharray="6,5" stroke-linecap="round"/>
<!-- neck -->
<rect x="118" y="98" width="18" height="24" rx="4" fill="#C8956B"/>
<!-- head (woman, side profile with curly hair) -->
<ellipse cx="130" cy="75" rx="28" ry="30" fill="#7a4820"/>
<!-- curly hair -->
<circle cx="115" cy="65" r="12" fill="#1c1210"/>
<circle cx="128" cy="58" r="12" fill="#1c1210"/>
<circle cx="142" cy="62" r="11" fill="#1c1210"/>
<circle cx="150" cy="72" r="9" fill="#1c1210"/>
<!-- face -->
<ellipse cx="142" cy="74" rx="4" ry="3.5" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="143" cy="74" r="2" fill="#1a1a1a"/>
<!-- backward arrow (the key movement cue) -->
<path d="M80,148 L55,152" stroke="#1a1a1a" stroke-width="2.8" fill="none" stroke-linecap="round" marker-end="url(#a6)"/>
</svg>`,

shoulderAbduction: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a7" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
</defs>
<!-- chair -->
<rect x="42" y="198" width="116" height="12" rx="5" fill="#9e8262"/>
<rect x="46" y="210" width="10" height="48" rx="3" fill="#8b7355"/>
<rect x="144" y="210" width="10" height="48" rx="3" fill="#8b7355"/>
<!-- thighs -->
<rect x="62" y="196" width="28" height="30" rx="6" fill="#7a8fa0"/>
<rect x="110" y="196" width="28" height="30" rx="6" fill="#6e7e8a"/>
<!-- shirt torso -->
<rect x="55" y="130" width="90" height="72" rx="12" fill="#5B8DD9"/>
<!-- right arm at side (dashed, start) -->
<path d="M145,140 L168,178" stroke="#aaa" stroke-width="8" stroke-dasharray="6,5" stroke-linecap="round"/>
<ellipse cx="172" cy="184" rx="8" ry="6" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4"/>
<!-- left arm at side (solid) -->
<path d="M55,140 L35,175" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="31" cy="181" rx="9" ry="7" fill="#C8956B"/>
<!-- right arm raised to side (solid, with thumb up) -->
<path d="M145,135 L172,88" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
<circle cx="176" cy="82" r="8" fill="#C8956B"/>
<!-- arc path for right arm motion -->
<path d="M168,178 C168,155 172,120 172,82" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4" fill="none"/>
<!-- motion arrow -->
<path d="M172,120 C172,105 172,90 176,82" stroke="#1a1a1a" stroke-width="2.8" fill="none" stroke-linecap="round" marker-end="url(#a7)"/>
<!-- neck -->
<rect x="88" y="112" width="24" height="22" rx="4" fill="#C8956B"/>
<!-- head (man) -->
<ellipse cx="100" cy="85" rx="30" ry="33" fill="#C8956B"/>
<path d="M72,72 Q100,49 128,68 Q122,52 100,49 Q78,52 72,72Z" fill="#6b4c30"/>
<ellipse cx="89" cy="82" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="90" cy="82" r="2.2" fill="#1a1a1a"/>
<ellipse cx="111" cy="82" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="112" cy="82" r="2.2" fill="#1a1a1a"/>
</svg>`,

internalExternalRotation: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a8" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
  <marker id="a8b" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
</defs>
<!-- chair -->
<rect x="42" y="198" width="116" height="12" rx="5" fill="#9e8262"/>
<rect x="46" y="210" width="10" height="48" rx="3" fill="#8b7355"/>
<rect x="144" y="210" width="10" height="48" rx="3" fill="#8b7355"/>
<!-- thighs -->
<rect x="60" y="195" width="30" height="30" rx="7" fill="#7a8fa0"/>
<rect x="110" y="195" width="30" height="30" rx="7" fill="#6e7e8a"/>
<!-- shirt torso (woman, teal/blue, front view) -->
<rect x="55" y="125" width="90" height="78" rx="12" fill="#3a9b8e"/>
<!-- upper arms at side (elbows bent 90°) -->
<path d="M55,140 L28,155" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
<path d="M145,140 L172,155" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
<!-- forearms (external rotation - outward, dashed) -->
<path d="M28,155 L14,170" stroke="#aaa" stroke-width="9" stroke-dasharray="5,4" stroke-linecap="round"/>
<path d="M172,155 L186,170" stroke="#aaa" stroke-width="9" stroke-dasharray="5,4" stroke-linecap="round"/>
<!-- forearms (internal rotation / current position - inward pointing) -->
<path d="M28,155 L45,170" stroke="#C8956B" stroke-width="11" stroke-linecap="round"/>
<path d="M172,155 L155,170" stroke="#C8956B" stroke-width="11" stroke-linecap="round"/>
<!-- fists -->
<ellipse cx="50" cy="175" rx="9" ry="7" fill="#C8956B"/>
<ellipse cx="150" cy="175" rx="9" ry="7" fill="#C8956B"/>
<!-- rotation arrows (curved, outward) -->
<path d="M48,173 C38,165 24,164 14,170" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#a8)"/>
<path d="M152,173 C162,165 176,164 186,170" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#a8b)"/>
<!-- neck -->
<rect x="88" y="107" width="24" height="22" rx="4" fill="#7a4820"/>
<!-- head (woman, curly hair) -->
<ellipse cx="100" cy="80" rx="30" ry="33" fill="#7a4820"/>
<!-- curly hair -->
<circle cx="80" cy="68" r="14" fill="#1c1210"/>
<circle cx="96" cy="60" r="13" fill="#1c1210"/>
<circle cx="114" cy="60" r="13" fill="#1c1210"/>
<circle cx="126" cy="68" r="12" fill="#1c1210"/>
<!-- eyes -->
<ellipse cx="89" cy="80" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="90" cy="80" r="2.2" fill="#1a1a1a"/>
<ellipse cx="111" cy="80" rx="5" ry="4" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
<circle cx="112" cy="80" r="2.2" fill="#1a1a1a"/>
<!-- serene expression -->
<path d="M93,98 Q100,102 107,98" stroke="#5a2010" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`,

scapularProtraction: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a9" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
</defs>
<!-- mattress/surface -->
<rect x="5" y="175" width="190" height="30" rx="6" fill="#d0ccc8"/>
<rect x="5" y="175" width="190" height="12" rx="6" fill="#e8e4e0"/>
<!-- pillow -->
<rect x="8" y="158" width="55" height="22" rx="8" fill="#f0ece8"/>
<!-- lying body (side, top-down perspective showing chest/torso) -->
<!-- torso lying flat -->
<rect x="55" y="148" width="120" height="32" rx="10" fill="#5B8DD9"/>
<!-- legs extending off frame -->
<rect x="148" y="148" width="55" height="28" rx="8" fill="#7a8fa0"/>
<!-- arm raised straight up (perpendicular to body) -->
<path d="M90,148 L90,75" stroke="#C8956B" stroke-width="13" stroke-linecap="round"/>
<!-- hand/fist at top -->
<rect x="84" y="58" width="18" height="22" rx="6" fill="#C8956B" stroke="#8b6040" stroke-width="1"/>
<!-- shoulder lifted (dashed ghost showing shoulder lift) -->
<ellipse cx="90" cy="148" rx="18" ry="8" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4"/>
<ellipse cx="90" cy="136" rx="16" ry="7" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4"/>
<!-- head lying on pillow -->
<ellipse cx="36" cy="162" rx="26" ry="20" fill="#A06840"/>
<!-- hair spread on pillow -->
<path d="M14,150 Q36,138 58,148 Q50,136 36,135 Q22,136 14,150Z" fill="#1c1210"/>
<!-- profile face features -->
<circle cx="50" cy="160" r="2.2" fill="#1a1a1a"/>
<path d="M56,152 L62,157 L58,158" fill="#8a5030" stroke="none"/>
<!-- UP arrow (shoulder lift) -->
<line x1="90" y1="148" x2="90" y2="105" stroke="#1a1a1a" stroke-width="2.8" stroke-linecap="round" marker-end="url(#a9)"/>
</svg>`,

wallPress: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a10" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
  <marker id="a10b" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#aaa"/></marker>
</defs>
<!-- wall (right side) -->
<rect x="168" y="0" width="18" height="260" fill="#E8E4E0"/>
<rect x="168" y="0" width="6" height="260" fill="#D8D4D0"/>
<!-- floor -->
<rect x="0" y="225" width="200" height="35" fill="#E8E4E0"/>
<rect x="0" y="225" width="200" height="4" fill="#D8D4D0"/>
<!-- person leaning toward wall (side view) -->
<!-- feet -->
<ellipse cx="85" cy="228" rx="18" ry="7" fill="#e0d4c0"/>
<!-- legs -->
<rect x="76" y="180" width="18" height="50" rx="7" fill="#7a8fa0"/>
<!-- body tilted forward -->
<g transform="rotate(-15 105 175)">
  <!-- torso (pink/maroon shirt) -->
  <rect x="82" y="120" width="52" height="60" rx="12" fill="#9B4F6E"/>
  <!-- arms reaching to wall (extended) -->
  <path d="M85,128 L130,105" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
  <path d="M130,105 L162,100" stroke="#C8956B" stroke-width="10" stroke-linecap="round"/>
  <!-- hands on wall -->
  <rect x="163" y="93" width="14" height="16" rx="4" fill="#C8956B"/>
  <!-- neck -->
  <rect x="98" y="102" width="18" height="22" rx="4" fill="#A06840"/>
  <!-- head -->
  <ellipse cx="107" cy="82" rx="26" ry="28" fill="#A06840"/>
  <path d="M83,70 Q107,50 131,66 Q126,52 107,49 Q88,52 83,70Z" fill="#1c1210"/>
  <!-- eye -->
  <ellipse cx="118" cy="78" rx="4" ry="3.5" fill="#fff" stroke="#1a1a1a" stroke-width="1"/>
  <circle cx="119" cy="78" r="2" fill="#1a1a1a"/>
</g>
<!-- dashed ghost: standing upright start position -->
<rect x="90" y="108" width="40" height="55" rx="10" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4"/>
<!-- horizontal motion arrow (toward wall) -->
<path d="M120,118 L150,118" stroke="#1a1a1a" stroke-width="2.8" fill="none" stroke-linecap="round" marker-end="url(#a10)"/>
<!-- return arrow (dashed) -->
<path d="M148,128 L118,128" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4" fill="none" stroke-linecap="round" marker-end="url(#a10b)"/>
</svg>`,

standingRows: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="a11" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7Z" fill="#1a1a1a"/></marker>
</defs>
<!-- table/surface -->
<rect x="100" y="168" width="95" height="14" rx="5" fill="#9e8262"/>
<rect x="158" y="182" width="12" height="68" rx="4" fill="#8b7355"/>
<rect x="124" y="182" width="12" height="68" rx="4" fill="#8b7355"/>
<!-- floor -->
<rect x="0" y="238" width="200" height="22" fill="#E8E4E0"/>
<!-- person bent forward from hips (side view) -->
<!-- feet on floor -->
<ellipse cx="60" cy="240" rx="18" ry="7" fill="#e0d4c0"/>
<!-- legs standing -->
<rect x="50" y="195" width="18" height="48" rx="7" fill="#7a8fa0"/>
<!-- torso bent forward (~45°) -->
<g transform="rotate(-40 78 190)">
  <rect x="64" y="120" width="42" height="72" rx="10" fill="#de8db0"/>
  <!-- neck -->
  <rect x="76" y="104" width="16" height="20" rx="4" fill="#C8956B"/>
  <!-- head -->
  <ellipse cx="84" cy="86" rx="24" ry="27" fill="#C8956B"/>
  <!-- hair (ponytail) -->
  <path d="M62,76 Q84,56 106,72 Q102,58 84,55 Q66,58 62,76Z" fill="#6b4c30"/>
  <path d="M62,85 Q50,95 52,112 Q58,98 62,85Z" fill="#6b4c30"/>
</g>
<!-- arm (right) resting on table (support arm) -->
<path d="M78,168 L130,168" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="136" cy="168" rx="9" ry="7" fill="#C8956B"/>
<!-- left arm - rowing BACK (the exercise arm) -->
<path d="M65,172 L52,155" stroke="#C8956B" stroke-width="12" stroke-linecap="round"/>
<path d="M52,155 L42,140" stroke="#C8956B" stroke-width="10" stroke-linecap="round"/>
<ellipse cx="38" cy="135" rx="9" ry="7" fill="#C8956B"/>
<!-- dashed start position for row arm (hanging down) -->
<path d="M65,172 L65,205" stroke="#aaa" stroke-width="8" stroke-dasharray="6,5" stroke-linecap="round"/>
<ellipse cx="65" cy="211" rx="8" ry="6" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="5,4"/>
<!-- UP arrow showing the rowing movement -->
<path d="M50,160 L42,140" stroke="#1a1a1a" stroke-width="2.8" fill="none" stroke-linecap="round" marker-end="url(#a11)"/>
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
    svgKey: 'neckRotation'
  },
  {
    id: 'neck-lateral-flexion',
    name: 'Neck Lateral Flexion',
    muscles: null,
    instruction: 'Tilt your head so that your right ear stretches down towards your right shoulder. Hold for 3 seconds and then relax. Repeat on the left side.',
    reps: '10 times on each side',
    hold: 'Hold 3 seconds',
    svgKey: 'neckLateralFlexion'
  },
  {
    id: 'shoulder-shrugs',
    name: 'Shoulder Shrugs',
    muscles: 'upper trapezius muscle',
    instruction: 'Lift your shoulders towards your ears and lower them back down.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'shoulderShrugs'
  },
  {
    id: 'chest-press',
    name: 'Chest Press',
    muscles: 'upper trapezius muscle',
    instruction: 'Begin with your arms at your side, fists parallel to shoulders. Punch up towards the ceiling then lower arms back down to starting position.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'chestPress'
  },
  {
    id: 'shoulder-flexion',
    name: 'Shoulder Flexion',
    muscles: 'anterior deltoid muscle',
    instruction: 'Begin with arms relaxed at your side. Slowly raise one arm up straight out in front of you with your thumb pointing up. Relax your arm back down. Make sure to maintain good posture.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'shoulderFlexion'
  },
  {
    id: 'seated-rows',
    name: 'Seated Shoulder Rows',
    muscles: 'rhomboid major and middle trapezius muscles',
    instruction: 'Begin sitting with your arm at your side and elbow bent. Bring your arm and shoulder back, focusing on moving your shoulder blade closer to the middle of your back.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'seatedRows'
  },
  {
    id: 'shoulder-abduction',
    name: 'Shoulder Abduction',
    muscles: 'serratus anterior and middle deltoid muscles',
    instruction: 'Begin with arms at side and raise one arm up and out to the side, keeping your thumb up. Make sure to maintain good posture.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'shoulderAbduction'
  },
  {
    id: 'internal-external-rotation',
    name: 'Internal & External Rotation',
    muscles: 'rotator cuff muscles',
    instruction: 'Keep your arms at your side with elbows bent and move forearms outwards and inwards. You can do one or both arms at a time.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'internalExternalRotation'
  },
  {
    id: 'scapular-protraction',
    name: 'Scapular Protraction',
    muscles: 'serratus anterior muscle',
    instruction: 'Lay on your back and place your arm straight out in front of you, then lift your shoulder off of the surface and back down.',
    reps: '10 repetitions',
    hold: null,
    svgKey: 'scapularProtraction'
  },
  {
    id: 'wall-press',
    name: 'Wall Press',
    muscles: 'pectoralis major muscle',
    instruction: "Stand an arm's width away from the wall with your hands on the wall. Lower yourself towards the wall, bending at the elbows, then push off of the wall while straightening out your elbows until you are in standing position again.",
    reps: '10 repetitions',
    hold: null,
    svgKey: 'wallPress'
  },
  {
    id: 'standing-rows',
    name: 'Standing Rows',
    muscles: 'rhomboid major and middle trapezius muscles',
    instruction: "Begin standing with one arm on a lower surface and the other arm at your side and elbow bent. Bring your arm and shoulder back, focusing on moving your shoulder blade closer to the middle of your back.",
    reps: '10 repetitions',
    hold: null,
    svgKey: 'standingRows'
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
  isTodayComplete() {
    const done = Store.todayCompletions();
    return EXERCISES.every(e => done[e.id]);
  },
  streakCount() {
    const all = Store.completions();
    let streak = 0;
    const d = new Date();
    d.setDate(d.getDate() - 1); // start from yesterday
    for (let i = 0; i < 365; i++) {
      const key = d.toISOString().slice(0, 10);
      const day = all[key] || {};
      if (EXERCISES.every(e => day[e.id])) { streak++; d.setDate(d.getDate() - 1); }
      else break;
    }
    if (Store.isTodayComplete()) streak++;
    return streak;
  },
  totalDays() {
    const all = Store.completions();
    return Object.values(all).filter(day => EXERCISES.every(e => day[e.id])).length;
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
  view: 'home',         // current top-level view
  exerciseDetail: null, // id of exercise being shown
  calMonth: null,       // Date for calendar month view
  recording: false,
  mediaRecorder: null,
  recChunks: [],
  recTimer: null,
  recSeconds: 0,
  currentAudio: null,
  saveTimer: null
};

/* ============================================================
   ROUTER
   ============================================================ */

function nav(view, data = {}) {
  if (view === 'exercise') State.exerciseDetail = data.id;
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
          <div class="prog-label">Today: ${done} of ${total} exercises ${done === total ? '✓' : ''}</div>
          <div class="prog-bar-bg"><div class="prog-bar-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
    </div>
    <div class="content with-nav">
      ${done === total
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
      ${EXERCISES.slice(0, 4).map(e => exerciseListItem(e, today[e.id])).join('')}
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
function exerciseListItem(ex, done) {
  return `<div class="ex-item ${done ? 'done' : ''}" data-ex-id="${ex.id}">
    <div class="ex-thumb">${SVGS[ex.svgKey] || ''}</div>
    <div class="ex-info">
      <div class="ex-name">${ex.name}</div>
      ${ex.muscles ? `<div class="ex-muscle">${ex.muscles}</div>` : ''}
      <div class="ex-reps">${ex.reps}${ex.hold ? ` · ${ex.hold}` : ''}</div>
    </div>
    <div class="check-ring ${done ? 'done' : ''}">
      ${done ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
    </div>
  </div>`;
}

function renderExerciseList(profile) {
  const today = Store.todayCompletions();
  const done  = EXERCISES.filter(e => today[e.id]).length;
  return `<div class="screen">
    <div class="page-header">
      <div>
        <h2>Today's Exercises</h2>
        <p>${done} of ${EXERCISES.length} completed</p>
      </div>
    </div>
    <div class="content with-nav">
      <div class="info-box">
        10 reps · 1–3× daily · 5–7 days/week · Work within your pain tolerance
      </div>
      ${EXERCISES.map(e => exerciseListItem(e, today[e.id])).join('')}
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
  const ex    = EXERCISES.find(e => e.id === State.exerciseDetail);
  const today = Store.todayCompletions();
  const done  = today[ex.id];
  return `<div class="screen">
    <div class="page-header">
      <button class="back-btn" id="ex-back">&#8249;</button>
      <div><h2>${ex.name}</h2></div>
    </div>
    <div class="content" style="padding-bottom:100px;">
      <div class="ex-detail-fig">${SVGS[ex.svgKey] || ''}</div>
      <div class="ex-title-block">
        <h2>${ex.name}</h2>
        ${ex.muscles ? `<span class="muscle-chip">for ${ex.muscles}</span>` : ''}
      </div>
      <div class="instruction-box">
        <p>${ex.instruction}</p>
      </div>
      <div class="reps-pill">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        ${ex.reps}${ex.hold ? ` · ${ex.hold}` : ''}
      </div>
    </div>
    <div style="position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;padding:12px 16px calc(var(--safe-bot) + 12px);background:var(--bg);border-top:1px solid var(--border);">
      <button class="btn ${done ? 'btn-outline' : 'btn-success'}" id="ex-done-btn">
        ${done
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Mark as not done`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Mark as done`}
      </button>
    </div>
  </div>`;
}

function bindExerciseDetail() {
  document.getElementById('ex-back').addEventListener('click', () => {
    nav(State._fromView || 'exercises');
  });
  document.getElementById('ex-done-btn').addEventListener('click', () => {
    const ex   = EXERCISES.find(e => e.id === State.exerciseDetail);
    const done = Store.todayCompletions()[ex.id];
    Store.markDone(ex.id, !done);
    if (Store.isTodayComplete()) {
      State._justCompleted = true;
      nav('home');
    } else {
      render();
    }
  });
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
function renderNotes() {
  const notes = Store.get('physician-notes', '');
  return `<div class="screen">
    <div class="page-header"><h2>Notes for My Doctor</h2></div>
    <div class="content with-nav">
      <div class="info-box">
        Jot down any symptoms, questions, or concerns to raise at your next appointment. These notes are saved only on this device.
      </div>
      <textarea class="notes-area" id="notes-textarea" placeholder="e.g. Pain level today was 3/10. I noticed stiffness in the morning. Want to ask about…" spellcheck="true">${escHtml(notes)}</textarea>
      <div class="save-status" id="save-status"></div>
      <div class="text-sm text-mute mt-8">Notes auto-save as you type and are never deleted unless you clear them yourself.</div>
      <button class="btn btn-outline mt-12" id="notes-clear" style="max-width:200px;">Clear all notes</button>
    </div>
    ${navBar('notes')}
  </div>`;
}

function bindNotes() {
  bindNav();
  const ta     = document.getElementById('notes-textarea');
  const status = document.getElementById('save-status');

  ta.addEventListener('input', () => {
    clearTimeout(State.saveTimer);
    State.saveTimer = setTimeout(() => {
      Store.set('physician-notes', ta.value);
      status.textContent = 'Saved ✓';
      status.style.opacity = '1';
      setTimeout(() => { status.style.opacity = '0'; }, 2000);
    }, 600);
  });

  document.getElementById('notes-clear').addEventListener('click', () => {
    if (confirm('Clear all notes? This cannot be undone.')) {
      Store.set('physician-notes', '');
      ta.value = '';
      status.textContent = 'Notes cleared';
    }
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
