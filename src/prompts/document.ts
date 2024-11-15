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
- \`offsetY\`: The offset on y-coordinate. (\`number\`)`,

  scaleTo: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]
- \`fromX\`: The start scale on x-coordinate. (\`number\`)
- \`fromY\`: The start scale on y-coordinate. (\`number\`)
- \`toX\`: The end scale on x-coordinate. (\`number\`)
- \`toY\`: The end scale on y-coordinate. (\`number\`)`,

  moveTo: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]
- \`fromX\`: The start x-coordinate. (\`number\`)
- \`fromY\`: The start y-coordinate. (\`number\`)
- \`toX\`: The end x-coordinate. (\`number\`)
- \`toY\`: The end y-coordinate. (\`number\`)`,

  rotateTo: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]
- \`from\`: The start angle. (\`number\`)
- \`to\`: The end angle. (\`number\`)`,

  fadeTo: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]
- \`from\`: The start opacity. (\`number\`)
- \`to\`: The end opacity. (\`number\`)`,

  fadeIn: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]`,

  fadeOut: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]`,

  grow: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

This animation will gradually create the element from 0 to 1.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]`,

  destroy: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

This animation will gradually destroy the element.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]`,

  stroke: `This is a animation api.

The type is in parentheses, and the default value is in square brackets.

This animation will gradually change the stroke of the element.

- \`duration\`: The duration of the animation. (\`number\`)
- \`by\`: The timing function. (\`(t: number) => number\`) [t => t]`,

  NumberAxis: `This is a widget api.

The type is in parentheses, and the default value is in square brackets.

- \`fn\`: Mathematical function. (\`(x: number) => number\`)
- \`domain\`: The domain of the function, that is, the range of x. (\`[number, number]\`)
- \`ranges\`: An optional y range that controls the upper and lower limits of the drawing. (\`[number, number]\`) [[0,0]]
- \`division-x\`: Calculate the X-axis step size. (\`number\`) [100]
- \`division-y\`: Calculate the Y-axis step size. (\`number\`) [100]
- \`color\`: Control the color of the graphics. (\`string\`) ['white']
- \`width\`: Control the line width of the graph. (\`number\`) 
- \`fill-color\`: Controls the fill color of the graph. (\`string\`) ["none"]`,

  MathFunction: `This is a widget api.

The type is in parentheses, and the default value is in square brackets.

- \`base-unit\`: The unit of a coordinate axis. (\`'number' | 'radian' | 'degree'\`)
- \`interval\`: Spacing of axes. (\`number\`) [100]
- \`trend\`: Trend function to customize the text of the tag. (\`(count: number) => string\`) [(count) => count.toString()]
- \`font-size\`: Font size. (\`number\`) 
- \`font-color\`: Font color. (\`string\`) ['white']
- \`domain\`: Axis range. (\`[number, number]\`)
- \`tip\`: Arrow color. (\`string\`) ["white"]
- \`trim\`: Arrow border color . (\`string\`) ["white"]`,

  NumberPlane: `This is a numberPlane api.

The type is in parentheses, and the default value is in square brackets.

- \`domainX\`: X axis range. (\`[number, number]\`)
- \`domainY\`: Y axis range. (\`[number, number]\`)
- \`intervalX\`: X axis interval. (\`number\`) [100]
- \`intervalY\`: Y axis interval. (\`number\`) [100]
- \`trendX\`: X axis label trend function. (\`(count: number) => string\`) [(count) => count.toString()]
- \`trendY\`: Y axis label trend function. (\`(count: number) => string\`) [(count) => count.toString()]
- \`fontColorX\`: X axis font color. (\`string\`) ["white"]
- \`fontColorY\`: Y axis font color. (\`string\`) ["white"]
- \`fontSizeX\`: X axis font size. (\`number\`) 
- \`fontSizeY\`: Y axis font size. (\`number\`) 
- \`grid\`: Show grid. (\`boolean\`) [false]
- \`gridColor\`: Grid color. (\`string\`) ["white"]
- \`gridWidth\`: Grid line width. (\`number\`) [1]
- \`tipX\`: X axis arrow color. (\`string\`) ["white"]
- \`tipY\`: Y axis arrow color. (\`string\`) ["white"]
- \`baseUnit\`: The unit of a coordinate axis. (\`'number' | 'radian' | 'degree'\`)
- \`Yrotation\`: Control the rotation Angle of Y-axis text. (\`number\` ranges [0, 360]) [90]`,

  PolarPlane: `This is a widget api.

The type is in parentheses, and the default value is in square brackets.

- \`radius\`: The radius of the polar coordinate system. (\`[number, number]\`)
- \`interval\`: Angular intervals, used to draw arcs.. (\`number\`) [100]
- \`trend\`: Trend function to calculate the Angle trend function. (\`(count: number) => string\`) [(count) => count.toString()]
- \`azimuth-units\`: Angular unit. (\`'PI radians' | 'TAU radians' | 'degrees' | 'gradians'\`) 
- \`divide\`: Controls how many parts of the polar coordinate plane are divided. (\`number\`) [20]
- \`font-size\`: Font size. (\`number\`) 
- \`font-color\`: Font color. (\`string\`) ['white']`,

  Tex: `This is a widget api.

The type is in parentheses, and the default value is in square brackets.

- \`katex-options\`: Configuration options to pass to katex rendering. (\`katex.KatexOptions\`)
- \`auto-center\`: Whether the formula is automatically centered to render. (\`boolean\`)`
}