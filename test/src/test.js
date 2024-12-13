(function anonymous(
) {

  const { pushScopeId: _pushScopeId, popScopeId: _popScopeId } = Vue
  const __sfc__ = (function () {
    return {
      setup: function setup() {

        var MathFunction = extension_math$0.MathFunction;
        var Motion = lib$57.Motion; var moveOnFunction = lib$57.moveOnFunction; var scale = lib$57.scale;
        var usePlayer = core$137.usePlayer; var useWidget = core$137.useWidget;
        var onMounted = vue$201.onMounted;

        var ref = usePlayer();
        var useAnimation = ref.useAnimation;
        var play = ref.play;
        var func = useWidget()

        onMounted(function () {
          useAnimation(func)
            .animate(moveOnFunction, {
              duration: 10,
              path: function (progress) {
                var phi = 1 + 9 * progress
                return {
                  x: progress * 20 - 10,
                  y: (progress * 20 - 10) * Math.sin(phi * (progress * 20 - 10))
                }
              },
              divisionX: 100,
              divisionY: 100,
            })
            .animate(scale, {  // Optional scaling animation
              duration: 10,
              offsetX: 0.5,  // Example offset to scale down
              offsetY: 0.5
            })
          play()
        })

        return { useAnimation: useAnimation, play: play, func: func, phi: phi }
        function defineProps(props) { return props; }
        function defineEmits() { return function emit() { } }
        function defineExpose() { }
      }
    }
  })()
  __sfc__.render = function () {
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue

    return function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_MathFunction = _resolveComponent("MathFunction")
      const _component_Motion = _resolveComponent("Motion")

      return (_openBlock(), _createBlock(_component_Motion, {
        width: 1600,
        height: 900
      }, {
        default: _withCtx(() => [
          _createVNode(_component_MathFunction, {
            fn: (x) => x * Math.sin(1 * x),
            domain: [-10, 10],
            widget: _ctx.func
          }, null, 8 /* PROPS */, ["fn", "widget"])
        ]),
        _: 1 /* STABLE */
      }))
    }
  }


  __sfc__.render = __sfc__.render()

  return __sfc__
})