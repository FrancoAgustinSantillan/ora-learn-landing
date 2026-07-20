/* @ds-bundle: {"format":4,"namespace":"ORADesignSystem_51adb5","components":[{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/data-display/Card.jsx":"fa3cde4a2c14","components/feedback/Badge.jsx":"deaee8730dec","components/feedback/Tag.jsx":"0b3174218d08","components/feedback/Toast.jsx":"24c00d28f08d","components/feedback/Tooltip.jsx":"5fd0fbad5697","components/forms/Button.jsx":"36a993e58ab0","components/forms/Checkbox.jsx":"5645c4251f6c","components/forms/IconButton.jsx":"6f0e501d084c","components/forms/Input.jsx":"d463275dd442","components/forms/Radio.jsx":"9cb0868a4923","components/forms/Select.jsx":"8241eb707525","components/forms/Switch.jsx":"8f3f6cf9b1ad","components/navigation/Tabs.jsx":"2eff716f19c3","components/overlay/Dialog.jsx":"e2fb82471490"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ORADesignSystem_51adb5 = window.ORADesignSystem_51adb5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Card.jsx
try { (() => {
function Card({
  children,
  tone = "light",
  glass = true,
  style
}) {
  const surface = tone === "dark" ? {
    backgroundColor: "var(--ora-deep-ocean)",
    color: "var(--ora-lime-green)"
  } : {
    backgroundColor: "var(--ora-paper)",
    color: "var(--ora-deep-ocean)"
  };
  const glassClass = glass ? tone === "dark" ? "ora-glass-dark" : "ora-glass-light" : "";
  return /*#__PURE__*/React.createElement("div", {
    className: glassClass,
    style: {
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      fontFamily: "var(--font-body)",
      ...surface,
      ...(glass ? {} : {
        boxShadow: "0px 1.8px 14.4px rgba(0,0,0,0.06)"
      }),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    backgroundColor: "var(--ora-mist)",
    color: "var(--ora-deep-ocean)"
  },
  brand: {
    backgroundColor: "var(--ora-lime-green)",
    color: "var(--ora-deep-ocean)"
  },
  accent: {
    backgroundColor: "var(--ora-mint-green)",
    color: "var(--ora-paper)"
  },
  dark: {
    backgroundColor: "var(--ora-deep-ocean)",
    color: "var(--ora-lime-green)"
  }
};
function Badge({
  children,
  tone = "neutral",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "12px",
      letterSpacing: "var(--tracking-tight)",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      ...TONES[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: "13px",
      color: "var(--ora-deep-ocean)",
      padding: "6px 10px 6px 14px",
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      border: "1px solid rgba(0,62,71,0.2)",
      backgroundColor: "var(--ora-white)",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "quitar",
    onClick: onRemove,
    style: {
      all: "unset",
      cursor: "pointer",
      width: 16,
      height: 16,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      color: "var(--ora-deep-ocean)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 9 9"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1L8 8M8 1L1 8",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  title,
  description,
  tone = "dark",
  onClose
}) {
  const tones = {
    dark: {
      backgroundColor: "var(--ora-deep-ocean)",
      color: "var(--ora-lime-green)"
    },
    success: {
      backgroundColor: "var(--ora-mint-green)",
      color: "var(--ora-paper)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      padding: "16px 20px",
      borderRadius: "var(--radius-sm)",
      minWidth: "280px",
      maxWidth: "360px",
      boxShadow: "0px 8px 24px rgba(0,0,0,0.18)",
      ...tones[tone]
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "15px"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      opacity: 0.85,
      marginTop: "4px"
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "cerrar",
    onClick: onClose,
    style: {
      all: "unset",
      cursor: "pointer",
      color: "inherit",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 9 9"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1L8 8M8 1L1 8",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label,
  position = "top"
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }[position];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      backgroundColor: "var(--ora-deep-ocean)",
      color: "var(--ora-lime-green)",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      padding: "6px 10px",
      borderRadius: "8px",
      whiteSpace: "nowrap",
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  letterSpacing: "var(--tracking-tight)",
  border: "1.5px solid transparent",
  borderRadius: "var(--radius-sm)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  whiteSpace: "nowrap",
  flexShrink: 0,
  transition: "background-color var(--duration-standard) var(--ease-standard), color var(--duration-standard) var(--ease-standard), border-color var(--duration-standard) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)"
};
const SIZES = {
  sm: {
    fontSize: "14px",
    padding: "8px 16px"
  },
  md: {
    fontSize: "16px",
    padding: "12px 24px"
  },
  lg: {
    fontSize: "18px",
    padding: "16px 32px"
  }
};
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      backgroundColor: "var(--ora-glass-gray)",
      color: "rgba(0,62,71,0.4)",
      borderColor: "transparent"
    };
  }
  switch (variant) {
    case "secondary":
      return {
        backgroundColor: "transparent",
        color: "var(--ora-deep-ocean)",
        borderColor: "var(--ora-deep-ocean)"
      };
    case "ghost":
      return {
        backgroundColor: "transparent",
        color: "var(--ora-deep-ocean)",
        borderColor: "transparent"
      };
    case "inverse":
      return {
        backgroundColor: "var(--ora-lime-green)",
        color: "var(--ora-deep-ocean)",
        borderColor: "transparent"
      };
    case "primary":
    default:
      return {
        backgroundColor: "var(--ora-deep-ocean)",
        color: "var(--ora-lime-green)",
        borderColor: "transparent"
      };
  }
}
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variantStyle(variant, disabled);
  let hoverStyle = {};
  if (!disabled && hover) {
    if (variant === "secondary") hoverStyle = {
      backgroundColor: "var(--surface-glass-light)"
    };else if (variant === "ghost") hoverStyle = {
      backgroundColor: "var(--ora-mist)"
    };else if (variant === "inverse") hoverStyle = {
      backgroundColor: "#d4f5c2"
    };else hoverStyle = {
      backgroundColor: "var(--ora-mint-green)"
    };
  }
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...BASE,
      ...SIZES[size],
      ...v,
      ...hoverStyle,
      opacity: disabled ? 0.7 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      transform: hover && !disabled ? "translateY(-1px)" : "none",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--ora-deep-ocean)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: "6px",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: `1.5px solid ${checked ? "var(--ora-deep-ocean)" : "rgba(0,62,71,0.35)"}`,
      backgroundColor: checked ? "var(--ora-deep-ocean)" : "transparent",
      transition: "background-color var(--duration-standard) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "var(--ora-lime-green)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  children,
  size = "md",
  variant = "primary",
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const variants = {
    primary: {
      backgroundColor: "var(--ora-deep-ocean)",
      color: "var(--ora-lime-green)"
    },
    secondary: {
      backgroundColor: "transparent",
      color: "var(--ora-deep-ocean)",
      border: "1.5px solid var(--ora-deep-ocean)"
    },
    ghost: {
      backgroundColor: hover ? "var(--ora-mist)" : "transparent",
      color: "var(--ora-deep-ocean)"
    }
  };
  const base = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      borderRadius: "var(--radius-sm)",
      border: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background-color var(--duration-standard) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      transform: hover && !disabled ? "translateY(-1px)" : "none",
      ...base,
      ...(variant === "primary" && hover ? {
        backgroundColor: "var(--ora-mint-green)"
      } : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--ora-deep-ocean)",
      fontFamily: "var(--font-display)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      padding: "12px 16px",
      borderRadius: "var(--radius-sm)",
      border: `1.5px solid ${error ? "#B3261E" : focus ? "var(--ora-mint-green)" : "rgba(0,62,71,0.25)"}`,
      outline: "none",
      backgroundColor: disabled ? "var(--ora-mist)" : "var(--ora-white)",
      color: "var(--ora-deep-ocean)",
      boxShadow: focus ? "0 0 0 3px rgba(52,147,117,0.15)" : "none",
      transition: "border-color var(--duration-standard) var(--ease-standard), box-shadow var(--duration-standard) var(--ease-standard)"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "#B3261E"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--ora-deep-ocean)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: `1.5px solid ${checked ? "var(--ora-deep-ocean)" : "rgba(0,62,71,0.35)"}`
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "var(--ora-deep-ocean)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--ora-deep-ocean)",
      fontFamily: "var(--font-display)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      padding: "12px 16px",
      borderRadius: "var(--radius-sm)",
      border: `1.5px solid ${focus ? "var(--ora-mint-green)" : "rgba(0,62,71,0.25)"}`,
      outline: "none",
      backgroundColor: disabled ? "var(--ora-mist)" : "var(--ora-white)",
      color: "var(--ora-deep-ocean)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled = false,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--ora-deep-ocean)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 42,
      height: 24,
      borderRadius: "var(--radius-pill)",
      position: "relative",
      flexShrink: 0,
      backgroundColor: checked ? "var(--ora-mint-green)" : "rgba(0,62,71,0.2)",
      transition: "background-color var(--duration-standard) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      backgroundColor: "var(--ora-white)",
      transition: "left var(--duration-standard) var(--ease-standard)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.25)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1.5px solid rgba(0,62,71,0.15)",
      fontFamily: "var(--font-display)"
    }
  }, tabs.map(t => {
    const active = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "10px 18px",
        fontWeight: 600,
        fontSize: "14px",
        color: active ? "var(--ora-deep-ocean)" : "rgba(0,62,71,0.5)",
        borderBottom: `2px solid ${active ? "var(--ora-mint-green)" : "transparent"}`,
        marginBottom: "-1.5px",
        transition: "color var(--duration-standard) var(--ease-standard)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,62,71,0.45)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "ora-glass-dark",
    onClick: e => e.stopPropagation(),
    style: {
      backgroundColor: "var(--ora-deep-ocean)",
      color: "var(--ora-lime-green)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-5)",
      minWidth: "360px",
      maxWidth: "480px",
      fontFamily: "var(--font-body)"
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 16px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "22px"
    }
  }, title), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
