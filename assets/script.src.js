function set_theme(e) {
	var do_switch = null != e;
	if (do_switch) { e.preventDefault(); }
	var theme_key = "theme1";
	var theme = localStorage.getItem(theme_key);
	if (theme === null || theme === undefined) {
		theme = "theme-auto";
	}
	if (do_switch) {
		if (theme === "theme-auto") {
			theme = "theme-dark";
		} else if (theme === "theme-dark") {
			theme = "theme-light";
		} else if (theme === "theme-light") {
			theme = "theme-auto";
		} else {
			theme = "theme-auto";
		}
		if (theme === "theme-auto") {
			localStorage.removeItem(theme_key);
		} else {
			localStorage.setItem(theme_key, theme);
		}
		this.textContent = "Kolor (" + theme.substring(6) + ")";
	}
	if (theme === "theme-auto") {
		theme = window.matchMedia("(prefers-color-scheme: dark)").matches ?
			"theme-dark" : "theme-light";
	}
	if (!document.documentElement.classList.contains(theme)) {
		document.documentElement.classList.remove("theme-dark", "theme-light");
		document.documentElement.classList.add(theme);
	}
	return false;
}

try {
	set_theme(null);
} catch (err) {
	console.error(err);
}

window.addEventListener("load", function () {
	var theme_switch_link = document.getElementById("theme-switch-link");
	if (null != theme_switch_link) {
		theme_switch_link.addEventListener("click", set_theme);
	}
	if (window.location.hostname === "salif.github.io") {
		(function (c_, o_, u_, n_, t_, e_, r_) {
			e_ = c_.createElement('script'), r_ = c_.getElementsByTagName(o_)[0]; e_.async = 1;
			e_.setAttribute(n_, t_); e_.src = u_; r_.parentNode.insertBefore(e_, r_);
		})(document, 'script', 'https://gc.zgo.at/count.js', 'data-goatcounter', 'https://sgi.goatcounter.com/count');
	}
})

// terser assets/script.src.js -o assets/script.min.js
//
// if (theme.startsWith('"') && theme.endsWith('"')) {
//     theme.slice(1, theme.length - 1)
// }
