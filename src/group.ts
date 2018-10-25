import { Shortcut } from "./shortcut";

export class Group {
    shortcuts: Shortcut[] = [];

    private _enabled: boolean = false;
    get enabled(): boolean { return this._enabled; }
    set enabled(value: boolean) {
        this._enabled = value;
        this.shortcuts.forEach(s => s.enabled = value);
    }

    add(shortcut: Shortcut) {
        this.shortcuts.push(shortcut);
    }

    remove(shortcut: Shortcut) {
        this.shortcuts = this.shortcuts.filter(s => s !== shortcut);
    }
}