export const index = {
  widgets: {
    Arc: 'A arc widget',
    Rect: 'A widget with a rectangle shape',
    Group: 'A group of widgets',
    Line: 'A line widget',
    Text: 'A text widget',
    TextUnit: 'A text unit widget',
    Webview: 'A widget that can display a HTML content',
    Image: 'A image widget',
    NumberAxis: 'A number axis widget',
    NumberPlane: 'A number plane widget',
    PolarPlane: 'A polar plane widget',
    MathFunction: 'A math function widget',
    Tex: 'A tex widget',
    Video: 'A video widget',
    Circle: 'A full circle widget',
    Ellipse: 'An ellipse widget',
  },
  animations: {
    move: 'Move the widget from one position to another',
    scale: 'Scale the widget up and down',
    rotate: 'Rotate the widget around its center',
    fadeIn: 'Fade in the widget',
    fadeOut: 'Fade out the widget',
    grow: 'Grow the widget',
    destroy: 'Destroy the widget',
    trace: 'Stroke the widget',
    moveTo: 'Move the widget to a specific position',
    scaleTo: 'Scale the widget to a specific size',
    rotateTo: 'Rotate the widget to a specific angle',
    fadeTo: 'Fade the widget to a specific opacity',
  }
}

export function getPrompt() {
  return `You must respond with ONLY a valid JSON object in this EXACT format, with no other text:
{
  "widget": ["WidgetName"],
  "animations": ["AnimationName"]
}

Choose one widget and one animation from these options:

Widgets:
${Object.entries(index.widgets).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

Animations:
${Object.entries(index.animations).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

DO NOT include any explanations, words, or other text. ONLY output the JSON object.
WRONG: "Here's a JSON with my choices..."
WRONG: "I choose..."
CORRECT:
{
  "widget": ["Rect"],
  "animations": ["fadeIn"]
}
`
}
