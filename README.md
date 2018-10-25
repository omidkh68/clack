# Clack

Clack is a modern keyboard shortcut library written in Typescript (so type
definitions come for free).

# Usage

```typescript
import clack from "@reasonink/clack";

// A simple keyboard shortcut.
const ctrlB = clack.shortcut("ctrl + b", (e: KeyboardEvent) => {
    e.preventDefault();
    alert("ctrl + b pressed");
});

// Enable/disable the shortcut. Shortcuts are enabled by default.
ctrlB.enabled = false;

// A group of shortcuts that can be enabled/disabled all at once.
const editorShortcuts = clack.group({
    "ctrl + b": (e: KeyboardEvent) => { /* make bold */ },
    "ctrl + i": (e: KeyboardEvent) => { /* make italic */ },
    "ctrl + u": (e: KeyboardEvent) => { /* underline */ }
});

// Disable the entire group until the editor is focused.
editorShortcuts.enabled = false;
```
