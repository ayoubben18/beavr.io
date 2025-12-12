# Styling Configuration Rules

## Color Usage

**Never hardcode colors.** Always use Tailwind theme colors from `globals.css`:

| Hardcoded | Use Instead | Purpose |
|-----------|-------------|---------|
| `#692e0e` | `primary` | Brand brown color |
| `#5a2710` | `primary/90` or hover state | Darker primary |
| `#141414` | `foreground` | Main text color |
| `#8d8d8d` | `muted-foreground` | Secondary/placeholder text |
| `#e3e3e3` | `border` or `input` | Border colors |
| `white` / `#ffffff` | `background` or `white` | Background colors |

## shadcn/ui Components

**Do not override default shadcn/ui styles unless necessary.** These components already include proper styling:

- `Input` - has border, focus states, placeholder colors
- `Button` - has variants (default, outline, ghost, etc.)
- `FormLabel` - has proper font weight and color
- `FormMessage` - has error styling

```tsx
// Bad - unnecessary overrides
<Input className="border-border text-sm placeholder:text-muted-foreground" />
<FormLabel className="text-sm font-medium text-foreground">Email</FormLabel>

// Good - use defaults, only add layout classes if needed
<Input placeholder="Enter your email" />
<FormLabel>Email</FormLabel>
```

Only add classes for:
- Layout (width, height, padding, margin)
- Custom border radius if design requires it
- Specific sizing not covered by defaults

## Button Styles

Use shadcn/ui Button variants:
```tsx
<Button>Primary action</Button>
<Button variant="outline">Secondary action</Button>
<Button variant="ghost">Tertiary action</Button>
```

## Text Colors

- Main text: `text-foreground` (or default)
- Secondary text: `text-muted-foreground`
- Links/accents: `text-primary hover:text-primary/80`
