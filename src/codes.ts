const codes: [number, string][] = [
    [8, "backspace"],
    [9, "tab"],
    [13, "enter"],
    [16, "shift"],
    [17, "ctrl"],
    [18, "alt"],
    [20, "capslock"],
    [27, "esc"],
    [32, "space"],
    [33, "pageup"],
    [34, "pagedown"],
    [35, "end"],
    [36, "home"],
    [37, "left"],
    [38, "up"],
    [39, "right"],
    [40, "down"],
    [45, "ins"],
    [46, "del"],
    [91, "meta"],
    [93, "meta"],
    [224, "meta"]
];

// F1-F19
for (let i = 0; i < 20; i++) {
    codes.push([111 + i, `f${i}`]);
}

const isAppleBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
export const aliases: { [alias: string]: string } = {
    "option": "alt",
    "command": "meta",
    "return": "enter",
    "escape": "esc",
    "plus": "+", // Necessary because + is used to specify combos.
    "mod": isAppleBrowser ? "meta" : "ctrl"
};

export function normaliseKeyName(name: string): string {
    return aliases[name] || name;
}

export function nameToCode(name: string): number {
    const actualName = normaliseKeyName(name);
    for (let i = 0; i < codes.length; i++) {
        if (codes[i][1] === actualName) return codes[i][0];
    }
    return name.toUpperCase().charCodeAt(0);
}

export function isValidKeyName(name: string): boolean {
    const actualName = normaliseKeyName(name);
    for (let pair of codes) {
        if (pair[1] === actualName) return true;
    }
    return false;
}