export function noticePrompt() {
  return [
    { role: 'user', content: `What's the notice for using the VueMotion animation engine?` },
    { role: 'assistant', content: `
Sure, there are some thing need to notice:

1. The animation \`scale\` has two properties: \`offsetX\` and \`offsetY\`, they are the offset of the scale, not the \`scaleX\` and \`scaleY\`.
    `}
  ]
}
