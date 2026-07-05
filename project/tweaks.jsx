// abbos.dev — Tweaks overlay (isolated; only drives CSS variables)
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C9A96E",
  "warmth": "obsidian",
  "headingScale": 1,
  "grain": true,
  "hairline": 0.10
}/*EDITMODE-END*/;

const WARMTHS = {
  "obsidian": ["#121110", "#0D0C0B"],
  "warmer":   ["#15120E", "#0F0C09"],
  "cooler":   ["#101113", "#0A0B0C"]
};

function hexToRgb(h) {
  const n = parseInt(h.replace('#',''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement.style;
    // accent
    r.setProperty('--gold', t.accent);
    const [gr, gg, gb] = hexToRgb(t.accent);
    r.setProperty('--gold-soft', `rgba(${gr}, ${gg}, ${gb}, 0.16)`);
    // warmth
    const w = WARMTHS[t.warmth] || WARMTHS.obsidian;
    r.setProperty('--obsidian', w[0]);
    r.setProperty('--obsidian-deep', w[1]);
    // hairline
    r.setProperty('--line', `rgba(233, 227, 215, ${t.hairline})`);
    r.setProperty('--line-strong', `rgba(233, 227, 215, ${Math.min(0.3, t.hairline + 0.06)})`);
    // heading scale
    document.querySelectorAll('h1, h2, .product-name, .footer-cta, .about-body p').forEach(el => {
      el.style.letterSpacing = (0.005 + (t.headingScale - 1) * 0.01) + 'em';
    });
    document.body.style.setProperty('--heading-scale', t.headingScale);
    // grain
    const grain = document.querySelector('.grain');
    if (grain) grain.style.opacity = t.grain ? 0.035 : 0;
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Accent" />
      <TweakColor label="Gold tone" value={t.accent}
        options={['#C9A96E', '#B8905A', '#D6BE8A', '#A88C63']}
        onChange={(v) => setTweak('accent', v)} />
      <TweakSection label="Atmosphere" />
      <TweakRadio label="Background" value={t.warmth}
        options={['obsidian', 'warmer', 'cooler']}
        onChange={(v) => setTweak('warmth', v)} />
      <TweakSlider label="Hairlines" value={t.hairline} min={0.05} max={0.2} step={0.01}
        onChange={(v) => setTweak('hairline', v)} />
      <TweakToggle label="Grain texture" value={t.grain}
        onChange={(v) => setTweak('grain', v)} />
    </TweaksPanel>
  );
}

(function mountTweaks() {
  const el = document.getElementById('tweaks-root');
  if (el && window.ReactDOM) {
    ReactDOM.createRoot(el).render(<TweaksApp />);
  }
})();
