import { parseShortcut } from "./parse";
import { eventMatches } from "./event";

export class Shortcut {
    alt: boolean;
    ctrl: boolean;
    shift: boolean;
    meta: boolean;
    key: string;

    get enabled(): boolean {
        return !!this.windowListener;
    }
    set enabled(value: boolean) {
        if (value === this.enabled) return;
        if (value) {
            this.windowListener = (event: KeyboardEvent) => {
                if (eventMatches(this, event)) this.handler(event);
            };
            window.addEventListener("keypress", this.windowListener);
        }
        else if (this.windowListener) {
            window.removeEventListener("keypress", this.windowListener);
            this.windowListener = null;
        }
    }
    private windowListener: ((event: KeyboardEvent) => void)|null = null;
    private handler: (event: KeyboardEvent) => void;

    constructor(options: ShortcutOptions) {
        this.alt = !!options.alt;
        this.ctrl = !!options.ctrl;
        this.shift = !!options.shift;
        this.meta = !!options.meta;
        this.key = options.key;
        this.handler = options.handle;
        this.enabled = true;
    }

    static fromComboText(combo: string, handle: (event: KeyboardEvent) => void) {
        return new Shortcut({ ...parseShortcut(combo), handle });
    }
}

export interface ShortcutDefinition {
    alt?: boolean;
    ctrl?: boolean;
    shift?: boolean;
    meta?: boolean;
    key: string;
}

export interface ShortcutOptions extends ShortcutDefinition {
    handle(event: KeyboardEvent): void;
}