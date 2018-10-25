import { ShortcutDefinition } from "./shortcut";
import { normaliseKeyName, isValidKeyName } from "./codes";

export function parseShortcut(keys: string): ShortcutDefinition {
    const parts = keys.split(/[\s+\+]+/).map(normaliseKeyName);
    let key: string|null = null;
    let alt = false;
    let ctrl = false;
    let shift = false;
    let meta = false;
    parts.forEach(part => {
        switch (part) {
            case "alt": alt = true; break;
            case "ctrl": ctrl = true; break;
            case "shift": shift = true; break;
            case "meta": meta = true; break;
            default:
                if (key !== null) {
                    throw new Error("multiple keys specified");
                }
                if (part.length > 1 && !isValidKeyName(part)) {
                    throw new Error(`invalid named key "${part}"`);
                }
                key = part;
        }
    });
    if (!key) {
        throw new Error("no key specified, only modifiers");
    }
    return { alt, ctrl, shift, meta, key };
}
