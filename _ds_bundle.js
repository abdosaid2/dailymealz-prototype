/* @ds-bundle: {"format":4,"namespace":"DailymealzAppRedesignBrief_310f67","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"STATUS_MAP","sourcePath":"components/core/StatusBadge.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"TabBar","sourcePath":"components/core/TabBar.jsx"},{"name":"DayPill","sourcePath":"components/meals/DayPill.jsx"},{"name":"MacroChips","sourcePath":"components/meals/MacroChips.jsx"},{"name":"MealCard","sourcePath":"components/meals/MealCard.jsx"},{"name":"MealsRing","sourcePath":"components/meals/MealsRing.jsx"},{"name":"OrderCard","sourcePath":"components/meals/OrderCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"dbbdeca6ab99","components/core/Chip.jsx":"7b3857be710f","components/core/StatusBadge.jsx":"2de187877a06","components/core/TabBar.jsx":"78f5857d4c86","components/meals/DayPill.jsx":"0ab0c529f78b","components/meals/MacroChips.jsx":"20a75af7a83c","components/meals/MealCard.jsx":"5a513113acc9","components/meals/MealsRing.jsx":"54ea3b1004e8","components/meals/OrderCard.jsx":"af5f1162b75a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DailymealzAppRedesignBrief_310f67 = window.DailymealzAppRedesignBrief_310f67 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    background: 'var(--dm-saffron-500)',
    color: 'var(--dm-ink)'
  },
  secondary: {
    background: 'var(--dm-sand)',
    color: 'var(--dm-ink)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--dm-ink)',
    boxShadow: 'inset 0 0 0 1.5px var(--dm-line-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--dm-saffron-700)'
  },
  danger: {
    background: 'var(--dm-terra-100)',
    color: 'var(--dm-terra-700)'
  }
};
const S = {
  lg: {
    height: 56,
    padding: '0 26px',
    fontSize: 16
  },
  md: {
    height: 48,
    padding: '0 20px',
    fontSize: 15
  },
  sm: {
    height: 44,
    padding: '0 16px',
    fontSize: 13
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [p, setP] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onPointerDown: e => {
      setP(true);
      rest.onPointerDown && rest.onPointerDown(e);
    },
    onPointerUp: e => {
      setP(false);
      rest.onPointerUp && rest.onPointerUp(e);
    },
    onPointerLeave: e => {
      setP(false);
      rest.onPointerLeave && rest.onPointerLeave(e);
    },
    style: {
      appearance: 'none',
      border: 0,
      cursor: disabled ? 'default' : 'pointer',
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      borderRadius: 'var(--r-pill)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-tap) var(--ease-serve),filter var(--dur-tap)',
      transform: p && !disabled ? 'scale(.97)' : 'none',
      filter: p && !disabled ? 'brightness(.96)' : 'none',
      opacity: disabled ? .4 : 1,
      ...V[variant],
      ...S[size],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  selected = false,
  dot,
  count,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 36,
      padding: '0 14px',
      borderRadius: 'var(--r-pill)',
      border: selected ? '1.5px solid var(--dm-ink)' : '1.5px solid var(--dm-line-strong)',
      background: selected ? 'var(--dm-ink)' : 'var(--dm-surface)',
      color: selected ? 'var(--dm-paper)' : 'var(--dm-ink-2)',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all var(--dur-tap) var(--ease-serve)',
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dot
    }
  }), children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      background: selected ? 'var(--dm-saffron-500)' : 'var(--dm-sand)',
      color: 'var(--dm-ink)',
      borderRadius: 'var(--r-pill)',
      padding: '1px 7px'
    }
  }, count));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
const STATUS_MAP = {
  pending: {
    en: 'Pending',
    ar: 'قيد التأكيد',
    bg: 'var(--st-pending-bg)',
    fg: 'var(--st-pending-fg)'
  },
  accepted: {
    en: 'Accepted',
    ar: 'تم القبول',
    bg: 'var(--st-accepted-bg)',
    fg: 'var(--st-accepted-fg)'
  },
  assigned: {
    en: 'On the way',
    ar: 'في الطريق',
    bg: 'var(--st-assigned-bg)',
    fg: 'var(--st-assigned-fg)',
    pulse: true
  },
  delivered: {
    en: 'Delivered',
    ar: 'تم التوصيل',
    bg: 'var(--st-delivered-bg)',
    fg: 'var(--st-delivered-fg)'
  },
  hold: {
    en: 'On hold',
    ar: 'معلّق',
    bg: 'var(--st-paused-bg)',
    fg: 'var(--st-paused-fg)'
  },
  paused: {
    en: 'Paused',
    ar: 'موقوف مؤقتاً',
    bg: 'var(--st-paused-bg)',
    fg: 'var(--st-paused-fg)'
  },
  failed: {
    en: 'Failed',
    ar: 'تعذّر التوصيل',
    bg: 'var(--st-failed-bg)',
    fg: 'var(--st-failed-fg)'
  },
  cancelled: {
    en: 'Cancelled',
    ar: 'ملغي',
    bg: 'var(--st-failed-bg)',
    fg: 'var(--st-failed-fg)'
  }
};
function StatusBadge({
  status = 'pending',
  locale = 'en',
  size = 'md',
  style
}) {
  const s = STATUS_MAP[status] || STATUS_MAP.pending;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 5 : 7,
      background: s.bg,
      color: s.fg,
      borderRadius: 'var(--r-pill)',
      padding: sm ? '3px 10px' : '6px 13px',
      fontFamily: 'var(--font-ui)',
      fontSize: sm ? 11 : 13,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: sm ? 6 : 8,
      height: sm ? 6 : 8,
      borderRadius: '50%',
      background: 'currentColor',
      animation: s.pulse ? 'dm-pulse 1.6s infinite' : 'none'
    }
  }), locale === 'ar' ? s.ar : s.en);
}
Object.assign(__ds_scope, { STATUS_MAP, StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/TabBar.jsx
try { (() => {
const IC = {
  home: /*#__PURE__*/React.createElement("path", {
    d: "M4.5 10.7 12 4.6l7.5 6.1V19a1.6 1.6 0 0 1-1.6 1.6H6.1A1.6 1.6 0 0 1 4.5 19Z"
  }),
  subs: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5.5",
    width: "16",
    height: "15",
    rx: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10.3h16M8.3 3.8v3.2M15.7 3.8v3.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.3",
    cy: "14.6",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14.7",
    cy: "14.6",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  })),
  account: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8.4",
    r: "3.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.4 20a6.9 6 0 0 1 13.2 0"
  }))
};
const LABELS = {
  home: {
    en: 'Home',
    ar: 'الرئيسية'
  },
  subs: {
    en: 'My meals',
    ar: 'وجباتي'
  },
  biz: {
    en: 'Business',
    ar: 'الأعمال'
  },
  account: {
    en: 'Account',
    ar: 'حسابي'
  }
};
function Icon({
  name,
  active
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: active ? 2.1 : 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, IC[name]);
}
function TabBar({
  active = 'subs',
  locale = 'en',
  onChange,
  style
}) {
  const t = k => LABELS[k][locale === 'ar' ? 'ar' : 'en'];
  const Tab = ({
    k
  }) => {
    const a = active === k;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onChange && onChange(k),
      style: {
        appearance: 'none',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '9px 0 7px',
        color: a ? 'var(--dm-ink)' : 'var(--dm-ink-3)',
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: a ? 700 : 500
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k,
      active: a
    }), /*#__PURE__*/React.createElement("span", null, t(k)), /*#__PURE__*/React.createElement("i", {
      style: {
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: a ? 'var(--dm-saffron-500)' : 'transparent'
      }
    }));
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(14px)',
      borderTop: '1px solid var(--dm-line)',
      paddingBottom: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    k: "home"
  }), /*#__PURE__*/React.createElement(Tab, {
    k: "subs"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange && onChange('biz'),
    style: {
      appearance: 'none',
      border: 0,
      cursor: 'pointer',
      alignSelf: 'center',
      width: 54,
      height: 54,
      margin: '0 6px',
      marginTop: -22,
      borderRadius: '50%',
      background: 'var(--dm-saffron-500)',
      color: 'var(--dm-ink)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      boxShadow: 'var(--sh-2)',
      flex: 'none',
      lineHeight: 1
    }
  }, "dm"), /*#__PURE__*/React.createElement(Tab, {
    k: "account"
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/meals/DayPill.jsx
try { (() => {
const fmt = (n, locale) => locale === 'ar' ? Number(n).toLocaleString('ar-EG') : String(n);
function DayPill({
  day,
  date,
  state = 'default',
  picked = false,
  locale = 'en',
  onClick,
  style
}) {
  const sel = state === 'selected',
    off = state === 'off',
    past = state === 'past',
    locked = state === 'locked';
  return /*#__PURE__*/React.createElement("button", {
    onClick: off ? undefined : onClick,
    disabled: off,
    style: {
      appearance: 'none',
      cursor: off ? 'default' : 'pointer',
      flex: 'none',
      width: 54,
      height: 74,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      borderRadius: 18,
      fontFamily: 'var(--font-ui)',
      transition: 'all var(--dur-tap) var(--ease-serve)',
      border: off ? '1.5px dashed var(--dm-line-strong)' : sel ? '1.5px solid var(--dm-ink)' : '1.5px solid var(--dm-line)',
      background: sel ? 'var(--dm-ink)' : off ? 'transparent' : 'var(--dm-surface)',
      color: sel ? 'var(--dm-paper)' : past || off ? 'var(--dm-ink-3)' : locked ? 'var(--dm-ink-2)' : 'var(--dm-ink)',
      opacity: past ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.04em',
      color: sel ? 'var(--dm-saffron-300)' : 'var(--dm-ink-3)'
    }
  }, day), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 1
    }
  }, off ? '–' : fmt(date, locale)), past ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      lineHeight: '8px',
      color: 'var(--dm-olive-500)'
    }
  }, "✓") : locked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--dm-ink-3)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: picked ? 'var(--dm-saffron-500)' : off ? 'transparent' : 'var(--dm-sand-2)'
    }
  }));
}
Object.assign(__ds_scope, { DayPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/meals/DayPill.jsx", error: String((e && e.message) || e) }); }

// components/meals/MacroChips.jsx
try { (() => {
const fmt = (n, locale) => locale === 'ar' ? Number(n).toLocaleString('ar-EG') : String(n);
function MacroChips({
  kcal,
  protein,
  carbs,
  fat,
  locale = 'en',
  size = 'md',
  stacked = false,
  style
}) {
  const ar = locale === 'ar',
    sm = size === 'sm';
  const G = ar ? 'غ' : 'g';
  const M = ({
    c,
    l,
    v
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 4 : 5,
      color: 'var(--dm-ink-2)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: sm ? 6 : 7,
      height: sm ? 6 : 7,
      borderRadius: '50%',
      background: c
    }
  }), l, " ", fmt(v, locale), G);
  const kcalEl = /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: sm ? 13 : 15,
      color: 'var(--macro-kcal)'
    }
  }, fmt(kcal, locale), " ", ar ? 'سعرة' : 'kcal');
  const macros = [/*#__PURE__*/React.createElement(M, {
    key: "p",
    c: "var(--macro-protein)",
    l: ar ? 'ب' : 'P',
    v: protein
  }), /*#__PURE__*/React.createElement(M, {
    key: "c",
    c: "var(--macro-carbs)",
    l: ar ? 'ك' : 'C',
    v: carbs
  }), /*#__PURE__*/React.createElement(M, {
    key: "f",
    c: "var(--macro-fat)",
    l: ar ? 'د' : 'F',
    v: fat
  })];
  if (stacked) return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: sm ? 11 : 13,
      ...style
    }
  }, kcalEl, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: sm ? 9 : 12,
      marginTop: 3,
      whiteSpace: 'nowrap'
    }
  }, macros));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: sm ? 10 : 14,
      fontFamily: 'var(--font-ui)',
      fontSize: sm ? 11 : 13,
      whiteSpace: 'nowrap',
      ...style
    }
  }, kcalEl, macros);
}
Object.assign(__ds_scope, { MacroChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/meals/MacroChips.jsx", error: String((e && e.message) || e) }); }

// components/meals/MealCard.jsx
try { (() => {
const fmt = (n, locale) => locale === 'ar' ? Number(n).toLocaleString('ar-EG') : String(n);
const T = {
  pick: {
    en: 'Chef’s pick',
    ar: 'ترشيح الشيف'
  },
  sold: {
    en: 'Sold out',
    ar: 'نفدت اليوم'
  },
  sar: {
    en: 'SAR',
    ar: 'ر.س'
  }
};
function Photo({
  name,
  image,
  soldOut,
  children,
  ratio = '4/3'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dm-photo",
    style: {
      aspectRatio: ratio,
      filter: soldOut ? 'grayscale(.9) opacity(.65)' : 'none'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name
  }), !image && /*#__PURE__*/React.createElement("span", {
    className: "dm-photo-note"
  }, "photo \xB7 ", name), children);
}
function MealCard({
  name,
  kitchen,
  kcal,
  protein,
  carbs,
  fat,
  locale = 'en',
  variant = 'tile',
  recommended = false,
  premiumPrice,
  soldOut = false,
  selected = false,
  onSelect,
  image,
  style
}) {
  const ar = locale === 'ar';
  const check = /*#__PURE__*/React.createElement("button", {
    "aria-label": "select",
    onClick: soldOut ? undefined : onSelect,
    style: {
      appearance: 'none',
      cursor: soldOut ? 'default' : 'pointer',
      width: 34,
      height: 34,
      flex: 'none',
      borderRadius: '50%',
      border: selected ? '0' : '1.8px solid var(--dm-line-strong)',
      background: selected ? 'var(--dm-saffron-500)' : 'var(--dm-surface)',
      color: 'var(--dm-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-tap) var(--ease-serve)',
      boxShadow: selected ? 'var(--sh-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, selected ? /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8l3.2 3.2L12.5 4"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M7.5 2.5v10M2.5 7.5h10",
    stroke: "var(--dm-ink-3)"
  })));
  const badges = /*#__PURE__*/React.createElement(React.Fragment, null, recommended && !soldOut && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      insetInlineStart: 8,
      zIndex: 2,
      background: 'var(--dm-ink)',
      color: 'var(--dm-paper)',
      borderRadius: 'var(--r-pill)',
      padding: '3px 10px',
      fontSize: 10,
      fontWeight: 600,
      fontFamily: 'var(--font-ui)'
    }
  }, T.pick[locale]), premiumPrice != null && !soldOut && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      insetInlineEnd: 8,
      zIndex: 2,
      background: 'var(--dm-saffron-100)',
      color: 'var(--dm-saffron-700)',
      borderRadius: 'var(--r-pill)',
      padding: '3px 10px',
      fontSize: 10,
      fontWeight: 700,
      fontFamily: 'var(--font-ui)'
    }
  }, "+", fmt(premiumPrice, locale), " ", T.sar[locale]), soldOut && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '44%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: 2,
      background: 'rgba(38,31,21,.82)',
      color: 'var(--dm-paper)',
      borderRadius: 'var(--r-pill)',
      padding: '5px 13px',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'var(--font-ui)',
      whiteSpace: 'nowrap'
    }
  }, T.sold[locale]));
  const kitchenRow = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 14,
      height: 14,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--dm-sand-2)',
      border: '1px solid var(--dm-line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--dm-ink-3)',
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, kitchen));
  if (variant === 'row') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      background: 'var(--dm-surface)',
      border: selected ? '1.5px solid var(--dm-saffron-500)' : '1px solid var(--dm-line)',
      borderRadius: 'var(--r-card)',
      padding: 10,
      fontFamily: 'var(--font-ui)',
      opacity: soldOut ? .75 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      flex: 'none',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: name,
    image: image,
    soldOut: soldOut,
    ratio: "1/1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '18px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), kitchenRow, /*#__PURE__*/React.createElement(__ds_scope.MacroChips, {
    kcal: kcal,
    protein: protein,
    carbs: carbs,
    fat: fat,
    locale: locale,
    size: "sm",
    style: {
      marginTop: 3
    }
  })), onSelect && check);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--dm-surface)',
      borderRadius: 'var(--r-card)',
      border: '1px solid var(--dm-line)',
      boxShadow: selected ? '0 0 0 2px var(--dm-saffron-500), var(--sh-2)' : 'var(--sh-1)',
      padding: 8,
      fontFamily: 'var(--font-ui)',
      transition: 'box-shadow var(--dur-tap) var(--ease-serve)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: name,
    image: image,
    soldOut: soldOut
  }), badges), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 6px 4px'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      lineHeight: '19px',
      minHeight: 38
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: 4
    }
  }, kitchenRow, onSelect && check), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px dashed var(--dm-line)',
      marginTop: 7,
      paddingTop: 7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MacroChips, {
    kcal: kcal,
    protein: protein,
    carbs: carbs,
    fat: fat,
    locale: locale,
    size: "sm",
    stacked: true
  }))));
}
Object.assign(__ds_scope, { MealCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/meals/MealCard.jsx", error: String((e && e.message) || e) }); }

// components/meals/MealsRing.jsx
try { (() => {
const fmt = (n, locale) => locale === 'ar' ? Number(n).toLocaleString('ar-EG') : String(n);
function MealsRing({
  remaining,
  total,
  size = 96,
  stroke = 9,
  locale = 'en',
  label,
  style
}) {
  const r = (size - stroke) / 2,
    C = 2 * Math.PI * r,
    frac = Math.max(0, Math.min(1, remaining / total));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--dm-sand-2)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--dm-saffron-500)",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: C,
    strokeDashoffset: C * (1 - frac),
    style: {
      transition: 'stroke-dashoffset .6s var(--ease-serve)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * .28,
      color: 'var(--dm-ink)'
    }
  }, fmt(remaining, locale)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: Math.max(10, size * .1),
      color: 'var(--dm-ink-3)',
      fontWeight: 500
    }
  }, label ?? (locale === 'ar' ? `من ${fmt(total, locale)}` : `of ${total}`))));
}
Object.assign(__ds_scope, { MealsRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/meals/MealsRing.jsx", error: String((e && e.message) || e) }); }

// components/meals/OrderCard.jsx
try { (() => {
const T = {
  win: {
    en: 'Delivery window',
    ar: 'وقت التوصيل'
  },
  swap: {
    en: 'Swap meal',
    ar: 'تبديل الوجبة'
  },
  call: {
    en: 'Call driver',
    ar: 'اتصل بالسائق'
  },
  locked: {
    en: 'Locked',
    ar: 'مقفل'
  }
};
function Act({
  children,
  onClick,
  tone = 'ghost'
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      appearance: 'none',
      cursor: 'pointer',
      border: tone === 'outline' ? '1.5px solid var(--dm-line-strong)' : '0',
      background: tone === 'outline' ? 'transparent' : 'var(--dm-sand)',
      color: 'var(--dm-ink)',
      borderRadius: 'var(--r-pill)',
      height: 38,
      padding: '0 15px',
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, children);
}
function OrderCard({
  dateLabel,
  window: win,
  status = 'pending',
  mealName,
  kitchen,
  canChange = false,
  driverName,
  locale = 'en',
  onSwap,
  onCall,
  compact = false,
  style
}) {
  const ar = locale === 'ar';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dm-surface)',
      border: '1px solid var(--dm-line)',
      borderRadius: 'var(--r-card)',
      padding: compact ? 12 : 16,
      fontFamily: 'var(--font-ui)',
      boxShadow: 'var(--sh-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--dm-ink-2)'
    }
  }, dateLabel), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    locale: locale,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'center',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-photo",
    style: {
      width: compact ? 44 : 54,
      height: compact ? 44 : 54,
      flex: 'none',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-photo-note",
    style: {
      fontSize: 7
    }
  }, "photo")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: compact ? 13.5 : 15,
      lineHeight: '19px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, mealName), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--dm-ink-3)',
      fontWeight: 500
    }
  }, kitchen))), win && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: ar ? 0 : '.05em',
      textTransform: ar ? 'none' : 'uppercase',
      color: 'var(--dm-ink-3)'
    }
  }, T.win[locale]), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16
    }
  }, win)), !compact && (canChange || onCall) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 11
    }
  }, onCall && /*#__PURE__*/React.createElement(Act, {
    onClick: onCall
  }, T.call[locale], driverName ? ` · ${driverName}` : ''), canChange && /*#__PURE__*/React.createElement(Act, {
    tone: "outline",
    onClick: onSwap
  }, T.swap[locale]), !canChange && !onCall && null), !canChange && compact && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginTop: 8,
      fontSize: 10.5,
      color: 'var(--dm-ink-3)',
      fontWeight: 500
    }
  }, T.locked[locale]));
}
Object.assign(__ds_scope, { OrderCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/meals/OrderCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.STATUS_MAP = __ds_scope.STATUS_MAP;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.DayPill = __ds_scope.DayPill;

__ds_ns.MacroChips = __ds_scope.MacroChips;

__ds_ns.MealCard = __ds_scope.MealCard;

__ds_ns.MealsRing = __ds_scope.MealsRing;

__ds_ns.OrderCard = __ds_scope.OrderCard;

})();
