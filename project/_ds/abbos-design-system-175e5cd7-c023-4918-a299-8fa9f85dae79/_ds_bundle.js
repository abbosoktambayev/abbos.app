/* @ds-bundle: {"format":4,"namespace":"AbbosDesignSystem_175e5c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"EmptyState","sourcePath":"components/core/EmptyState.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ListRow","sourcePath":"components/core/ListRow.jsx"},{"name":"ProgressRing","sourcePath":"components/core/ProgressRing.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"cc773538dc98","components/core/Button.jsx":"a08e7d62256d","components/core/Card.jsx":"5f3de4df10bb","components/core/Chip.jsx":"dce26de1a28c","components/core/EmptyState.jsx":"2f2d15e555c3","components/core/Eyebrow.jsx":"0f9a551020f6","components/core/Icon.jsx":"15695aaa1801","components/core/ListRow.jsx":"38cb8b5e4034","components/core/ProgressRing.jsx":"fe223ceeb066","ui_kits/hafiz/screens.jsx":"eea5e71f418d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AbbosDesignSystem_175e5c = window.AbbosDesignSystem_175e5c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status pill or tag. Tones map to the muted palette:
 *   emerald (default, e.g. "Memorized"), gold (rare highlight), neutral,
 *   warning, danger. Never neon; always muted, quiet.
 */
function Badge({
  children,
  tone = "emerald",
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    emerald: {
      fg: "var(--state-accent)",
      dim: "var(--emerald-dim)"
    },
    gold: {
      fg: "var(--primary-accent)",
      dim: "var(--gold-dim)"
    },
    neutral: {
      fg: "var(--text-secondary)",
      dim: "var(--surface-2)"
    },
    warning: {
      fg: "var(--warning)",
      dim: "color-mix(in srgb, var(--warning) 15%, transparent)"
    },
    danger: {
      fg: "var(--danger)",
      dim: "color-mix(in srgb, var(--danger) 14%, transparent)"
    }
  };
  const t = tones[tone] || tones.emerald;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "3px 9px",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-pill)",
      background: solid ? t.fg : t.dim,
      color: solid ? "var(--on-gold)" : t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the ADS action control.
 *
 * Variants map to the documented button system:
 *   gold      → the ONE primary hero (filled warm gold, ink text). One per screen.
 *   emerald   → the everyday workhorse (emerald text on emerald-dim fill).
 *   ghost     → gold hairline outline, fills gold on hover.
 *   quiet     → text-only, secondary-colored; for low-emphasis rows.
 *   danger    → destructive; muted danger, never alarm red.
 */
function Button({
  children,
  variant = "emerald",
  size = "md",
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: 15,
      radius: "var(--radius-small)",
      gap: 6
    },
    md: {
      padding: "12px 20px",
      fontSize: 16,
      radius: "var(--radius-button)",
      gap: 8
    },
    lg: {
      padding: "15px 26px",
      fontSize: 17,
      radius: "var(--radius-control)",
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    gold: {
      background: "var(--gold-fill)",
      color: "var(--on-gold)",
      border: "none"
    },
    emerald: {
      background: "var(--emerald-dim)",
      color: "var(--state-accent)",
      border: "0.7px solid var(--hairline)"
    },
    ghost: {
      background: "transparent",
      color: "var(--primary-accent)",
      border: "0.7px solid var(--primary-accent)"
    },
    quiet: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "none"
    },
    danger: {
      background: "color-mix(in srgb, var(--danger) 14%, transparent)",
      color: "var(--danger)",
      border: "0.7px solid var(--hairline)"
    }
  };
  const v = variants[variant] || variants.emerald;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      width: full ? "100%" : "auto",
      padding: s.padding,
      fontFamily: "var(--font-ui)",
      fontSize: s.fontSize,
      fontWeight: 590,
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background var(--duration-standard) var(--ease-standard), color var(--duration-standard) var(--ease-standard), opacity var(--duration-standard) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...v,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the default ADS container: surface fill, hairline border, large
 * continuous radius, generous padding. Borders define edges, not shadows.
 * Set `floating` for the one sanctioned soft shadow (a hero card, mini-player).
 * Set `reading` for a paper/parchment reading surface (Mushaf, long-form).
 */
function Card({
  children,
  radius = "card",
  floating = false,
  reading = false,
  padding = "var(--card-padding)",
  style = {},
  ...rest
}) {
  const radii = {
    card: "var(--radius-card)",
    cardAlt: "var(--radius-card-alt)",
    list: "var(--radius-list)",
    control: "var(--radius-control)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: reading ? "var(--reading-surface)" : "var(--surface)",
      border: "0.7px solid var(--hairline)",
      borderRadius: radii[radius] || radii.card,
      padding,
      color: "var(--text-primary)",
      boxShadow: floating ? "var(--shadow-soft)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a capsule filter / segmented option. Active = emerald on emerald-dim;
 * inactive = secondary text on a quiet surface. Pills only (fully rounded).
 */
function Chip({
  children,
  active = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "7px 14px",
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 510,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      background: active ? "var(--emerald-dim)" : "var(--surface-2)",
      color: active ? "var(--state-accent)" : "var(--text-secondary)",
      border: active ? "0.7px solid color-mix(in srgb, var(--state-accent) 30%, transparent)" : "0.7px solid var(--hairline)",
      transition: "background var(--duration-standard) var(--ease-standard), color var(--duration-standard) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/EmptyState.jsx
try { (() => {
/**
 * EmptyState — a calm, centered empty / error state: a quiet glyph, a one-line
 * title, an optional hint, and always a way forward (action). Tertiary glyph,
 * secondary title, tertiary hint.
 */
function EmptyState({
  glyph = null,
  title,
  hint = null,
  action = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: 10,
      padding: "40px 24px",
      ...style
    }
  }, glyph && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      color: "var(--text-tertiary)",
      lineHeight: 1
    }
  }, glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 17,
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, title), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-tertiary)",
      maxWidth: 280,
      lineHeight: 1.45
    }
  }, hint), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — a tracked, uppercase mono label used above titles and as metadata.
 * Latin/numeric strings use DM Mono; anything that may contain Cyrillic uses
 * IBM Plex Mono (`cyrillic` prop). Short only — never paragraphs.
 */
function Eyebrow({
  children,
  cyrillic = false,
  color = "var(--text-tertiary)",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: cyrillic ? "var(--font-mono)" : "var(--font-mono-latin)",
      fontSize: "var(--text-meta)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper over Lucide (web substitute for SF Symbols, which are
 * Apple-only). Renders an <i data-lucide> element; call lucide.createIcons()
 * after mount (the UI kits load Lucide from CDN and do this). Weight is matched
 * to surrounding text via strokeWidth (default 1.75, ≈ SF .medium).
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": name,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      ...style
    }
    // Lucide reads these to size the injected <svg>
    ,
    "data-lucide-size": size,
    "data-lucide-stroke-width": strokeWidth
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ListRow — a grouped-list row (iOS-style settings/list). Optional leading
 * glyph well, title + subtitle, trailing value/accessory. Use inside a Card
 * with radius="list"; separate rows with a soft hairline.
 */
function ListRow({
  title,
  subtitle = null,
  leading = null,
  trailing = null,
  chevron = false,
  divider = true,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "13px 16px",
      cursor: onClick ? "pointer" : "default",
      borderBottom: divider ? "0.7px solid var(--hairline-soft)" : "none",
      color: "var(--text-primary)",
      ...style
    }
  }, rest), leading && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-small)",
      background: "var(--surface-2)",
      color: "var(--text-secondary)",
      fontSize: 16
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      fontWeight: 500
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)",
      marginTop: 2
    }
  }, subtitle)), trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)",
      flex: "0 0 auto"
    }
  }, trailing), chevron && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: 18,
      flex: "0 0 auto",
      lineHeight: 1
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressRing.jsx
try { (() => {
/**
 * ProgressRing — the emerald workhorse progress indicator (memorization %,
 * daily goal). Gold is reserved for a single hero ring; default is emerald.
 * The center shows a serif hero number by default.
 */
function ProgressRing({
  value = 0,
  size = 96,
  stroke = 8,
  accent = "emerald",
  label = null,
  showValue = true,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const color = accent === "gold" ? "var(--primary-accent)" : "var(--state-accent)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--surface-3)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c - c * pct / 100,
    style: {
      transition: "stroke-dashoffset var(--duration-gentle) var(--ease-standard)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1
    }
  }, showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 500,
      fontSize: size * 0.3,
      lineHeight: 1,
      color: "var(--text-primary)"
    }
  }, pct, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.13,
      color: "var(--text-tertiary)"
    }
  }, "%")), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono-latin)",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, label)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hafiz/screens.jsx
try { (() => {
/* Hafiz — screens. Quran memorization app. Dark, emerald workhorse, one gold hero.
 * Registers window.HafizScreens for index.html. Composes ADS components. */
(function () {
  const DS = window.AbbosDesignSystem_175e5c;
  const {
    Card,
    Button,
    Chip,
    Badge,
    ProgressRing,
    ListRow,
    Icon,
    Eyebrow,
    EmptyState
  } = DS;
  const relaxIcons = () => window.lucide && window.lucide.createIcons();
  function StatusBar() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 26px",
        height: 44,
        fontFamily: "var(--font-ui)",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--text-primary)",
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontVariantNumeric: "tabular-nums"
      }
    }, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "signal",
      size: 16
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "wifi",
      size: 16
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "battery-full",
      size: 18
    })));
  }
  function TabBar({
    tab,
    setTab
  }) {
    const tabs = [{
      id: "today",
      icon: "sunrise",
      label: "Today"
    }, {
      id: "quran",
      icon: "book-open",
      label: "Memorize"
    }, {
      id: "review",
      icon: "repeat-2",
      label: "Review"
    }, {
      id: "profile",
      icon: "user",
      label: "You"
    }];
    React.useEffect(relaxIcons);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        padding: "10px 12px 26px",
        borderTop: "0.7px solid var(--hairline)",
        background: "color-mix(in srgb, var(--background) 82%, transparent)",
        backdropFilter: "blur(20px)",
        flex: "0 0 auto"
      }
    }, tabs.map(t => {
      const active = tab === t.id;
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        onClick: () => setTab(t.id),
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: active ? "var(--state-accent)" : "var(--text-tertiary)"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: t.icon,
        size: 22,
        strokeWidth: active ? 2 : 1.75
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-ui)",
          fontSize: 10.5,
          fontWeight: active ? 600 : 500
        }
      }, t.label));
    }));
  }
  function Scroll({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "4px 18px 20px"
      }
    }, children);
  }
  function TodayScreen({
    onBegin
  }) {
    React.useEffect(relaxIcons);
    return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "10px 0 22px"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Friday \xB7 12 Jumada"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-brand)",
        fontWeight: 300,
        fontSize: 34,
        lineHeight: 1.05,
        marginTop: 6,
        color: "var(--text-primary)"
      }
    }, "As-salamu alaykum,", /*#__PURE__*/React.createElement("br", null), "Yusuf")), /*#__PURE__*/React.createElement(Card, {
      floating: true,
      radius: "card",
      style: {
        display: "flex",
        gap: 18,
        alignItems: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: 11,
      accent: "gold",
      size: 92,
      label: "of Quran"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 16,
        fontWeight: 600
      }
    }, "3 juz memorized"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-tertiary)",
        fontSize: 13,
        marginTop: 3,
        lineHeight: 1.4
      }
    }, "620 of 6,236 ay\u0101t committed. Keep the daily rhythm."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Streak 12"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Level: Mutqin")))), /*#__PURE__*/React.createElement(Card, {
      radius: "card",
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Today's new portion"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-brand)",
        fontSize: 25,
        margin: "8px 0 2px"
      }
    }, "Al-Mulk \xB7 12\u201315"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-secondary)",
        fontSize: 14,
        marginBottom: 16
      }
    }, "4 new ay\u0101t \xB7 ~8 min"), /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "lg",
      full: true,
      onClick: onBegin,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "play",
        size: 18
      })
    }, "Begin session")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        margin: "6px 4px 10px"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Due for review \xB7 3"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        color: "var(--state-accent)",
        fontWeight: 500
      }
    }, "See all")), /*#__PURE__*/React.createElement(Card, {
      radius: "list",
      padding: 0
    }, /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "repeat-2",
        size: 17
      }),
      title: "Al-Baqarah \xB7 255",
      subtitle: "Ayat al-Kursi",
      trailing: /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "Weak"),
      chevron: true
    }), /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "repeat-2",
        size: 17
      }),
      title: "Ya-Sin \xB7 1\u201312",
      subtitle: "Last reviewed 4 days ago",
      trailing: /*#__PURE__*/React.createElement(Badge, {
        tone: "emerald"
      }, "Strong"),
      chevron: true
    }), /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "repeat-2",
        size: 17
      }),
      title: "An-Nas \xB7 1\u20136",
      subtitle: "Last reviewed today",
      trailing: /*#__PURE__*/React.createElement(Badge, {
        tone: "emerald"
      }, "Strong"),
      chevron: true,
      divider: false
    })));
  }
  function SessionScreen({
    onDone
  }) {
    const [revealed, setRevealed] = React.useState(false);
    React.useEffect(relaxIcons);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 18px 14px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onDone,
      style: {
        background: "none",
        border: "none",
        color: "var(--text-secondary)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontFamily: "var(--font-ui)",
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 20
    }), " Today"), /*#__PURE__*/React.createElement(Eyebrow, null, "Al-Mulk \xB7 12 / 15"), /*#__PURE__*/React.createElement(Icon, {
      name: "ear",
      size: 20,
      color: "var(--text-tertiary)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        background: "var(--surface-3)",
        margin: "0 18px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "34%",
        height: "100%",
        background: "var(--state-accent)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 26px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-quran)",
        direction: "rtl",
        fontSize: 34,
        lineHeight: 2,
        color: "var(--text-primary)"
      }
    }, "\u0648\u064E\u0623\u064E\u0633\u0650\u0631\u064F\u0651\u0648\u0627\u06DF \u0642\u064E\u0648\u0652\u0644\u064E\u0643\u064F\u0645\u0652 \u0623\u064E\u0648\u0650 \u0671\u062C\u0652\u0647\u064E\u0631\u064F\u0648\u0627\u06DF \u0628\u0650\u0647\u0650\u06E6\u0653 \u06D6 \u0625\u0650\u0646\u064E\u0651\u0647\u064F\u06E5 \u0639\u064E\u0644\u0650\u064A\u0645\u064C\u06E2 \u0628\u0650\u0630\u064E\u0627\u062A\u0650 \u0671\u0644\u0635\u064F\u0651\u062F\u064F\u0648\u0631\u0650"), revealed ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        color: "var(--text-secondary)",
        fontSize: 15,
        lineHeight: 1.6,
        maxWidth: 300
      }
    }, "And conceal your speech or publicize it; indeed, He is Knowing of that within the breasts.") : /*#__PURE__*/React.createElement("button", {
      onClick: () => setRevealed(true),
      style: {
        marginTop: 24,
        background: "var(--surface-2)",
        border: "0.7px solid var(--hairline)",
        borderRadius: "var(--radius-pill)",
        padding: "9px 18px",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        cursor: "pointer",
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "eye",
      size: 15
    }), " Reveal translation")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 18px 22px",
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "emerald",
      full: true,
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "rotate-ccw",
        size: 17
      })
    }, "Again"), /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      full: true,
      size: "lg",
      onClick: onDone,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 18
      })
    }, "Got it")));
  }
  function ReviewScreen() {
    React.useEffect(relaxIcons);
    return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "10px 0 18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-brand)",
        fontSize: 30
      }
    }, "Spaced review"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-tertiary)",
        fontSize: 14,
        marginTop: 2
      }
    }, "Strengthen what fades before it slips.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      active: true
    }, "Due today"), /*#__PURE__*/React.createElement(Chip, null, "Weak"), /*#__PURE__*/React.createElement(Chip, null, "All")), /*#__PURE__*/React.createElement(Card, {
      radius: "card",
      style: {
        marginBottom: 14,
        display: "flex",
        alignItems: "center",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: 72,
      size: 72,
      label: "retained"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 16,
        fontWeight: 600
      }
    }, "3 due, 1 weak"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-tertiary)",
        fontSize: 13,
        marginTop: 2
      }
    }, "~6 minutes to clear the queue"))), /*#__PURE__*/React.createElement(Card, {
      radius: "list",
      padding: 0
    }, /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "triangle-alert",
        size: 17
      }),
      title: "Al-Baqarah \xB7 255",
      subtitle: "Confidence 40%",
      trailing: /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "Weak"),
      chevron: true
    }), /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "clock",
        size: 17
      }),
      title: "Ya-Sin \xB7 1\u201312",
      subtitle: "Due today",
      trailing: "\u203A",
      chevron: true,
      divider: false
    })));
  }
  function ProfileScreen() {
    React.useEffect(relaxIcons);
    return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        margin: "18px 0 22px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        height: 76,
        borderRadius: "50%",
        background: "var(--surface-2)",
        border: "0.7px solid var(--hairline)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-brand)",
        fontSize: 30,
        color: "var(--primary-accent)"
      }
    }, "YA"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-brand)",
        fontSize: 24
      }
    }, "Yusuf Abbos"), /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Streak 12 days")), /*#__PURE__*/React.createElement(Card, {
      radius: "list",
      padding: 0,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "ear",
        size: 17
      }),
      title: "Reciter",
      trailing: "Mishary",
      chevron: true
    }), /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 17
      }),
      title: "Daily reminder",
      trailing: "After Fajr",
      chevron: true
    }), /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "gauge",
        size: 17
      }),
      title: "New ay\u0101t per day",
      trailing: "4",
      chevron: true,
      divider: false
    })), /*#__PURE__*/React.createElement(Card, {
      radius: "list",
      padding: 0
    }, /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "moon",
        size: 17
      }),
      title: "Appearance",
      trailing: "Dark",
      chevron: true
    }), /*#__PURE__*/React.createElement(ListRow, {
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "globe",
        size: 17
      }),
      title: "Language",
      trailing: "English",
      chevron: true,
      divider: false
    })));
  }
  window.HafizScreens = {
    StatusBar,
    TabBar,
    TodayScreen,
    SessionScreen,
    ReviewScreen,
    ProfileScreen
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hafiz/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

})();
