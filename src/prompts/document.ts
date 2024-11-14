export const apiDocuments = {
  Rect: `This is a widget.

The type is in parentheses, and the default value is in square brackets.

- \`x\`: The position on x-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`y\`: The position on y-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`scale-x\`: The scale value on x-coordinate. (\`number\`) [1]
- \`scale-y\`: The scale value on y-coordinate. (\`number\`) [1]
- \`rotation\`: The rotation angle. (\`number\` ranges [0, 360]) [0]
- \`opacity\`: The opacity value. (\`number\` ranges [0, 1]) [1]
- \`fill-color\`: The fill color. (\`string\`) ["rgba(135,206,250,0.5)"]
- \`border-color\`: The stroke color. (\`string\`) ["rgba(135,206,250,1)"]
- \`border-width\`: The stroke width. (\`number\`) [5]
- \`border-offset\`: The stroke offset. (\`number\`) [0]
- \`border-interval\`: The dash of border line. (\`[number, number]\`) [[1, 0]]
- \`width\`: The width of the rectangle. (\`number\`)
- \`height\`: The height of the rectangle. (\`number\`)
- \`radius\`: The radius of the rectangle's four summits. (\`number\`)`,

  Text: `This is a widget.

The type is in parentheses, and the default value is in square brackets.

- \`x\`: The position on x-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`y\`: The position on y-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`scale-x\`: The scale value on x-coordinate. (\`number\`) [1]
- \`scale-y\`: The scale value on y-coordinate. (\`number\`) [1]
- \`rotation\`: The rotation angle. (\`number\` ranges [0, 360]) [0]
- \`opacity\`: The opacity value. (\`number\` ranges [0, 1]) [1]
- \`fill-color\`: The fill color. (\`string\`) ["rgba(135,206,250,0.5)"]
- \`border-color\`: The stroke color. (\`string\`) ["rgba(135,206,250,1)"]
- \`border-width\`: The stroke width. (\`number\`) [5]
- \`border-offset\`: The stroke offset. (\`number\`) [0]
- \`border-interval\`: The dash of border line. (\`[number, number]\`) [[1, 0]]
- \`font-family\`: The font family of the text. (\`string\`) [""]
- \`font-size\`: The font size of the text. (\`'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'larger' | 'smaller' | string | number\`) [""]
- \`font-weight\`: The weight of the font. (\`number | 'normal' | 'bold' | 'bolder' | 'lighter'\`) ['normal']
- \`font-style\`: The style of the font. (\`'normal' | 'italic' | 'oblique'\`) ['normal']
- \`align\`: The horizontal alignment of the text. (\`'start' | 'middle' | 'end'\`) ['start']
- \`baseline\`: The vertical alignment of the text. (\`'top' | 'middle' | 'bottom'\`) ['middle']
- \`decoration\`: The decoration applied to the text. (\`'none' | 'underline' | 'overline' | 'line-through' | 'blink'\`) ['none']
- \`word-spacing\`: The space between words. (\`number\`) [0]
- \`letter-spacing\`: The space between letters. (\`number\`) [0]`,

  Arc: `This is a widget.

The type is in parentheses, and the default value is in square brackets.

- \`x\`: The position on x-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`y\`: The position on y-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`scale-x\`: The scale value on x-coordinate. (\`number\`) [1]
- \`scale-y\`: The scale value on y-coordinate. (\`number\`) [1]
- \`rotation\`: The rotation angle. (\`number\` ranges [0, 360]) [0]
- \`opacity\`: The opacity value. (\`number\` ranges [0, 1]) [1]
- \`fill-color\`: The fill color. (\`string\`) ["rgba(135,206,250,0.5)"]
- \`border-color\`: The stroke color. (\`string\`) ["rgba(135,206,250,1)"]
- \`border-width\`: The stroke width. (\`number\`) [5]
- \`border-offset\`: The stroke offset. (\`number\`) [0]
- \`border-interval\`: The dash of border line. (\`[number, number]\`) [[1, 0]]
- \`radius\`: The radius of the circle. (\`number\`)`,

  Webview: `This is a widget.

The type is in parentheses, and the default value is in square brackets.

- \`x\`: The position on x-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`y\`: The position on y-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`scale-x\`: The scale value on x-coordinate. (\`number\`) [1]
- \`scale-y\`: The scale value on y-coordinate. (\`number\`) [1]
- \`rotation\`: The rotation angle. (\`number\` ranges [0, 360]) [0]
- \`opacity\`: The opacity value. (\`number\` ranges [0, 1]) [1]
- \`width\`: The width of the rectangle. (\`number\`)
- \`height\`: The height of the rectangle. (\`number\`)`,

  Line: `This is a widget.

The type is in parentheses, and the default value is in square brackets.

- \`x\`: The position on x-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`y\`: The position on y-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`scale-x\`: The scale value on x-coordinate. (\`number\`) [1]
- \`scale-y\`: The scale value on y-coordinate. (\`number\`) [1]
- \`rotation\`: The rotation angle. (\`number\` ranges [0, 360]) [0]
- \`opacity\`: The opacity value. (\`number\` ranges [0, 1]) [1]
- \`fill-color\`: The fill color. (\`string\`) ["rgba(135,206,250,0.5)"]
- \`border-color\`: The stroke color. (\`string\`) ["rgba(135,206,250,1)"]
- \`border-width\`: The stroke width. (\`number\`) [5]
- \`border-offset\`: The stroke offset. (\`number\`) [0]
- \`border-interval\`: The dash of border line. (\`[number, number]\`) [[1, 0]]
- \`from\`: The start point of the line. (\`[number, number]\`)
- \`to\`: The end point of the line. (\`[number, number]\`)`,

  Polygon: `This is a widget.

The type is in parentheses, and the default value is in square brackets.

- \`x\`: The position on x-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`y\`: The position on y-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`scale-x\`: The scale value on x-coordinate. (\`number\`) [1]
- \`scale-y\`: The scale value on y-coordinate. (\`number\`) [1]
- \`rotation\`: The rotation angle. (\`number\` ranges [0, 360]) [0]
- \`opacity\`: The opacity value. (\`number\` ranges [0, 1]) [1]
- \`fill-color\`: The fill color. (\`string\`) ["rgba(135,206,250,0.5)"]
- \`border-color\`: The stroke color. (\`string\`) ["rgba(135,206,250,1)"]
- \`border-width\`: The stroke width. (\`number\`) [5]
- \`border-offset\`: The stroke offset. (\`number\`) [0]
- \`border-interval\`: The dash of border line. (\`[number, number]\`) [[1, 0]]
- \`points\`: The points composing the polygon. (\`Array<[number, number]>\`)`,

  Image: `This is a widget.

The type is in parentheses, and the default value is in square brackets.

- \`x\`: The position on x-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`y\`: The position on y-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`scale-x\`: The scale value on x-coordinate. (\`number\`) [1]
- \`scale-y\`: The scale value on y-coordinate. (\`number\`) [1]
- \`rotation\`: The rotation angle. (\`number\` ranges [0, 360]) [0]
- \`opacity\`: The opacity value. (\`number\` ranges [0, 1]) [1]
- \`width\`: The width of the rectangle. (\`number\`)
- \`height\`: The height of the rectangle. (\`number\`)
- \`href\`: The url of image. (\`string\`)`,

  Group: `This is a widget.

The type is in parentheses, and the default value is in square brackets.

- \`x\`: The position on x-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`y\`: The position on y-coordinate, the origin is at the center of video. (\`number\`) [0]
- \`scale-x\`: The scale value on x-coordinate. (\`number\`) [1]
- \`scale-y\`: The scale value on y-coordinate. (\`number\`) [1]
- \`rotation\`: The rotation angle. (\`number\` ranges [0, 360]) [0]
- \`opacity\`: The opacity value. (\`number\` ranges [0, 1]) [1]`,

  scale: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]
- \`offsetX\`: The scale value on x-coordinate. (\`number\`)
- \`offsetY\`: The scale value on y-coordinate. (\`number\`)`,

  rotate: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]
- \`offset\`: The offset angle. (\`number\`)`,

  move: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]
- \`offsetX\`: The offset on x-coordinate. (\`number\`)
- \`offsetY\`: The offset on y-coordinate. (\`number\`)`
}