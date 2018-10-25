import { ShortcutDefinition } from "./shortcut";
import { nameToCode } from "./codes";

export function eventMatches(definition: ShortcutDefinition, event: KeyboardEvent): boolean {
    const modifiersMatch =
        definition.alt === event.altKey &&
        definition.ctrl === event.ctrlKey &&
        definition.shift === event.shiftKey &&
        definition.meta === event.metaKey;
    if (!modifiersMatch) return false;
    return nameToCode(definition.key) === event.keyCode;
}