import { Shortcut } from "./shortcut";
import { Group } from "./group";

export { ShortcutDefinition, ShortcutOptions, Shortcut } from "./shortcut";
export { Group } from "./group";

export function shortcut(combo: string, handle: (event: KeyboardEvent) => void): Shortcut {
    return Shortcut.fromComboText(combo, handle);
}

export interface Mapping {
    [combo: string]: (event: KeyboardEvent) => void;
}

export function group(combos: Mapping): Group {
    const group = new Group();
    for (let combo of Object.keys(combos)) {
        group.add(shortcut(combo, combos[combo]));
    }
    return group;
}
