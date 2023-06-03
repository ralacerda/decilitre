# Decilitre CSS Framework (Work In Progress)

Decilitre is CSS stylesheet that aims to strike a balance between a lightweight CSS framework and a CSS normalizer, providing good defaults, normalization and opt-in utility classes. It aims to speed up development by offering a set of common styles that you would most likely end up writing anyway.

## Features

- **Reset and Normalize**: Decilitre draws inspiration from projects like Normalize, Sanitize, and Andy Bell's Modern Reset to ensure consistent styling across different browsers and devices.
- **Good Defaults**: The framework includes sensible default styles for forms, blockquotes, code blocks and tables, providing a solid starting point for your projects.
- **Few Opt-in Components**: Decilitre focuses on providing a minimal set of opt-in components, allowing you to choose which components to include in your project and reducing unnecessary bloat.
- **Minimal and Non-Intrusive**: Decilitre strives to get out of your way as soon as possible. It uses low specificity selectors so you don't have to worry about it.

## Usage

To customize the styling in Decilitre, you can leverage the provided SCSS variables if you are using SCSS in your project. If you are using CSS, you can modify the CSS variables directly. Below are the available variables along with their default values and usage within Decilitre:

### Primary Color

- SCSS Variable: `$color-primary`
- CSS Variable: `--color-primary`
- Default Value: `#9b4dca`
- Usage:
  - Used for links
  - Used for the botton class
  - Used for block code decoration
  - Used for focus states

### Foreground Color

- SCSS Variable: `$color-fg`
- CSS Variable: `--color-fg`
- Default Value: `#0a0a0a`
- Usage:
  - Used for all text

### Background details

- SCSS Variable: `$color-details-bg`
- CSS Variable: `--color-details-bg`
- Default Value: `#f4f5f6`
- Usage:
  - Used as an alternative background for code elements
  - Used as an alternative background for block code elements
  - Should be close to the background color

### Foreground details

- SCSS Variable: `$color-details-fg`
- CSS Variable: `--color-details-fg`
- Default Value: `#d1d1d1`
- Usage:
  - Used for styling quote blocks
  - Used for form elements
  - Used for dividers
  - Should be close to the foreground color

Please note that Decilitre does not provide a background color. You can set your own background color based on your project's requirements.
es.

## Inspiration

If you are using SCSS, define these variables before importing Decilitre to override their default values. If you are using CSS, update the corresponding CSS variables with your desired values to customize the styling according to your project's needs.

By modifying these variables, you can easily adjust the primary color, text color, code backgrounds, and quote block styles to match your design preferenc

Decilitre is inspired by the following projects:

- [Miligram](https://milligram.io): Decilitre uses a lot of code from Miligram and builds upon its lightweight and minimalistic approach.
- [Normalize](https://necolas.github.io/normalize.css/) and [Sanitize](https://github.com/csstools/sanitize.css): Decilitre borrows some code from these projects to ensure consistent and normalized styling across browsers.
- [Andy Bell's Modern Reset](https://piccalil.li/blog/a-modern-css-reset/): Decilitre includes some code snippets from Andy Bell's Modern Reset, which provides a modern and opinionated reset for CSS.

Feel free to explore these projects to gain more insights into their philosophies and approaches.

## Recommendations

If you don't think Decilitre is the right solution for your use case, here are some recommendation for other projects:

- **CSS Frameworks**:

  - For a full-featured CSS framework with a wide range of components and styling options, consider [Bulma](https://bulma.io).
  - For small frameworks with minimal styles and a lightweight footprint, you can explore [Milligram](https://milligram.io) and [PicoCSS](https://picocss.com).
  - If you prefer a minimal style CSS stylesheet without classes, you might find [MVP.css](https://andybrewer.github.io/mvp/) and [Marx CSS](https://mblode.github.io/marx/) suitable for your needs. (Note: PicoCSS also has a classless version available.)

- **Normalizers**:
  - [Sanitize](https://github.com/csstools/sanitize.css), [Normalize](https://necolas.github.io/normalize.css/), and [modern-normalize](https://github.com/sindresorhus/modern-normalize) are popular choices for normalizing and resetting browser styles.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.
This repository includes a playground so you can check how your changes affect the stylying. Use `pnpm dev` to start the vite server with the scss compiler.

## License

Decilitre CSS Framework is released under the [MIT License](LICENSE).
