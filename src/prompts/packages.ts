export function packagesPrompt() {
  return `
There are all the packages of \`@vue-motion\`:

- \`@vue-motion/core\`
  + \`usePlayer\`
  + \`useWidget\`
- \`@vue-motion/lib\`
  + \`<Motion>\`
  + \`<Rect>\`
  + \`<Circle>\`
  + \`<Ellipse>\`
  + \`<Line>\`
  + \`<Polygon>\`
  + \`<Arc>\`
  + \`<Text>\`
  + \`<TextUnit>\`
  + \`<Image>\`
  + \`<Video>\`
  + \`<Webview>\`
  + \`<Group>\`
  + Animations:
    - \`move\`
    - \`moveTo\`
    - \`moveOnPath\`
    - \`moveOnFunction\`
    - \`rotate\`
    - \`rotateTo\`
    - \`scale\`
    - \`scaleTo\`
    - \`fadeIn\`
    - \`fadeOut\`
    - \`fadeTo\`
    - \`grow\`
    - \`destroy\`
    - \`trace\`
    - \`discolorateFill\`
    - \`discolorateFillTo\`
    - \`discolorateBorder\`
    - \`discolorateBorderTo\`
- \`@vue-motion/extension-math\`
  + \`<PolarPlane>\`
  + \`<NumberPlane>\`
  + \`<NumberAxis>\`
  + \`<MathFunction>\`
  + \`<Tex>\`
  `
}
