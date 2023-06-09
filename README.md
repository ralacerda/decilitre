<div align="center">
  <div>
    <a href="https://ralacerda.github.io/decilitre/">
      <img height=40 style="display: block;" src="logo.svg">
    </a>
  </div>
  
  <div>
    <a href="https://github.com/ralacerda/decilitre/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/decilitre?color=%234871c6" /> 
    </a>
    <a href="https://www.npmjs.com/package/decilitre">
      <image src="https://img.shields.io/npm/v/decilitre?color=%234871c6" />
    </a>
  </div>
  
  <div>
    <a href="https://ralacerda.github.io/decilitre/">
      https://ralacerda.github.io/decilitre/
    </a>
  </div>
</div>

---

Decilitre is CSS stylesheet that aims to strike a balance between a lightweight CSS framework and a CSS normalizer, providing good defaults, normalization and opt-in utility classes. It aims to speed up development by offering a set of common styles that you would most likely end up writing anyway.

## Features

- **Reset and Normalize**: Decilitre draws inspiration from projects like Normalize and Sanitize to ensure consistent styling across different browsers and devices.
- **Good Defaults**: The framework includes sensible default styles for forms, blockquotes, code blocks and tables, providing a solid starting point for your projects.
- **Minimal and Non-Intrusive**: Decilitre strives to get out of your way as soon as possible. It utilizes low specificity selectors, so you don't have to worry about your custom styles being overridden.
- **Few Opt-in Utilities**: Decilitre provides a minimal set of opt-in utility classes.

## Usage

### CDN

Link to the decilitre stylesheet.

<!-- prettier-ignore -->
```html
<link href="https://cdn.jsdelivr.net/npm/decilitre@0.6.1/dist/decilitre.min.css" rel="stylesheet" />
```

Optionally, you can also link the utilities stylesheet.
Utilities don't depend on the decilitre stylesheet, so you can use them in any other project.

<!-- prettier-ignore -->
```html
<link href="https://cdn.jsdelivr.net/npm/decilitre@0.6.1/dist/utilities.min.css" rel="stylesheet" />
```

## Customize

To customize the styling in Decilitre, you can leverage the provided SCSS variables if you are using SCSS in your project. If you are using CSS, you can modify the CSS variables directly. Below are the available variables along with their default values and usage within Decilitre:

### Colors

#### Primary Color

- SCSS Variable: `$color-primary`
- CSS Variable: `--color-primary`
- Default Value: `#9b4dca`
- Usage:
  - Used for links
  - Used for the botton class
  - Used for block code decoration
  - Used for focus states

#### Background details

- SCSS Variable: `$color-details-bg`
- CSS Variable: `--color-details-bg`
- Default Value: `#f4f5f6`
- Usage:
  - Used as an alternative background for code elements
  - Used as an alternative background for block code elements
  - Should be close to the background color

#### Foreground details

- SCSS Variable: `$color-details-fg`
- CSS Variable: `--color-details-fg`
- Default Value: `#d1d1d1`
- Usage:
  - Used for styling quote blocks
  - Used for form elements
  - Used for dividers
  - Should be close to the foreground color

Please note that Decilitre does not provide background or foreground colors.

### Focus

If supported, we use `:focus-visible` to show an outline around focused elements.
The outline can be customize with the following:

#### Focus size

- SCSS Variable: `$focus-size`
- CSS Variable: `--focus-size`
- Default Value: `2px`

#### Focus Style

- SCSS Variable: `$focus-style`
- CSS Variable: `--focus-style`
- Default Value: `solid`

#### Focus color

- SCSS Variable: `$focus-color`
- CSS Variable: `--focus-color`
- Default Value: `--primary-color` or `#4871c6`

#### Focus offset

- SCSS Variable: `$focus-offset`
- CSS Variable: `--focus-offset`
- Default Value: `$focus-size` or `--focus-size` or `2px`

## Utilities

### Button

A simple button. Note that we don't set a background, only a border.
The button should look the same using a `button` or `a` tag.

```scss
.button {
  display: inline-block;
  border: 1px solid $button-color;
  color: inherit;
  text-decoration: none;
  padding: 0.6em 0.8em;
  border-radius: 0.2em;
  line-height: 1;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 1px solid $button-color;
    outline-offset: 1px;
  }

  &[disabled] {
    cursor: default;
    opacity: 0.4;
  }
}
```

#### Button Color

If `$button-color` it's not set, it'll first fallback to `--color-primary`. This way we can assure that `.button` can use the primary color of decilitre while at the same time being avaliable for use on it's own.

- SCSS Variable: `$button-color`
- CSS Variable: `--button-color`
- Default Value: `--color-primary` or `#9b4dca`

### Container

"Smol Intrinsic Container" utility from Stephanie Eckles's [Smolcss](https://smolcss.dev/#smol-container).

```css
.container {
  width: min(100% - $container-margin, $container-max);
  margin-inline: auto;
}
```

#### Container Margin

- SCSS Variable: `$container-margin`
- CSS Variable: `--container-margin`
- Default Value: `3rem`

#### Container Maximum Size

- SCSS Variable: `$container-max`
- CSS Variable: `--container-max`
- Default Value: `80ch`

### Flow

Andy Bell's [flow utility](https://andy-bell.co.uk/my-favourite-3-lines-of-css/).
It adds margin-top to all but the first child elements. The size is based on the font size. Useful to quickly add spacing for text content.

```css
.flow > * + * {
  margin-block-start: $flow-space;
}
```

#### Flow Spacing

- SCSS Variable: `$flow-space`
- CSS Variable: `--flow-space`
- Default Value: `1em`

### Full-bleed

Andy Bell's [full bleed utility](https://archive.hankchizljaw.com/wrote/creating-a-full-bleed-css-utility/).
It allows content to spread the full viewport's width. Useful for "escaping" out of a container class.
We give it a little more than 100vw width to avoid problems with partial pixels.

```css
.full-bleed {
  max-width: unset;
  width: 100.02vw;
  margin-left: 50%;
  transform: translateX(-50%);
}
```

### Screen Readers Only

This utility class provides a solution for hiding content from the browser while ensuring its visibility to screen readers. It is an alternative to using `visibility: hidden`, as the latter removes the element from the accessibility tree. Numerous implementations of this utility class exist, we have opted for [Tailwind's version](https://tailwindcss.com/docs/screen-readers). Please note that this is a hack and not a complete solution, see this article about [possible accessibility problems](https://blog.logrocket.com/design-accessibility-css-visually-hidden-class/).

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Inspiration

Decilitre is inspired by the following projects:

- [Miligram](https://milligram.io): We used a reduced version of Miligram as a base for Decilitre.
- [Normalize](https://necolas.github.io/normalize.css/) and [Sanitize](https://github.com/csstools/sanitize.css): Decilitre borrows some code from these projects to ensure consistent and normalized styling across browsers.

Decilitre is also inspired by the following creators:

- [Andy Bell](https://andy-bell.co.uk/)
- [Stephanie Eckles ](https://thinkdobecreate.com/)
- [Josh W Comeau](https://www.joshwcomeau.com/)

## Recommendations

If you don't think Decilitre is the right solution for your use case, here are some recommendation for other projects:

**CSS Frameworks**:

- For a full-featured CSS framework with a wide range of components and styling options, consider [Bulma](https://bulma.io).
- For small frameworks with minimal styles and a lightweight footprint, you can try [Milligram](https://milligram.io) and [PicoCSS](https://picocss.com).
- If you prefer a minimal style CSS stylesheet without classes, you might find [MVP.css](https://andybrewer.github.io/mvp/) and [Marx CSS](https://mblode.github.io/marx/) suitable for your needs. (PicoCSS also has a classless version available.)

**Resets**:

- [Sanitize](https://github.com/csstools/sanitize.css), [Normalize](https://necolas.github.io/normalize.css/), and [modern-normalize](https://github.com/sindresorhus/modern-normalize) are popular choices for normalizing and resetting browser styles.
- Multiple authors also share theirs CSS Reset stylesheetes, like [Andy Bell](https://andy-bell.co.uk/a-modern-css-reset/), [Josh W Comeau](https://www.joshwcomeau.com/css/custom-css-reset/) and [Eric A. Meyer](https://meyerweb.com/eric/tools/css/reset/).

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

Decilitre CSS Framework is released under the [MIT License](LICENSE).
