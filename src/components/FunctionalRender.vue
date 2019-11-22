<script>
export default {
  functional: true,

  render (h, context) {
    const { $style, data } = context

    return h('div', {
      ...data,
      class: [
        $style.red
      ]
    }, 'This should be red')
  }
}
</script>

<style lang="stylus" module>
.red
  color red
</style>
