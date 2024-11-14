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
  },
  animations: {
    'move': 'Move the widget from one position to another',
    'scale': 'Scale the widget up and down',
    'rotate': 'Rotate the widget around its center',
  }
}

export function getPrompt() {
  return `
You are a helpful assistant that can help me create animations with VueMotion animation engine.

I want to you to choose a widget and an animation from the following choices:

Widgets:
${Object.entries(index.widgets).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

Animations:
${Object.entries(index.animations).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

Now please give me the widget and animation that I want to use, output in the following json format:

{
  "widget": [
    "Rect",
    "Arc",
    // your choice of widget
  ],
  "animations": [
    "move",
    "scale",
    "rotate",
    // your choice of animation
  ],
}

I want you only choose the name of the widget and animation, not the conncrete parameters.

please output in json format, and only json format without any other text.
`
}
