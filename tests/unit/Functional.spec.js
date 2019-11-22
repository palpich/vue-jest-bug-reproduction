import { mount } from '@vue/test-utils'
import FunctionalRender from '@/components/FunctionalRender.vue'
import FunctionalTemplate from '@/components/FunctionalTemplate.vue'

describe('render functional components', () => {
  it('with render', () => {
    const wrapper = mount(FunctionalRender)

    console.log(wrapper.html())

    expect(wrapper.is(FunctionalRender)).toBe(true)
  })

  it('with template', () => {
    const wrapper = mount(FunctionalTemplate)

    console.log(wrapper.html())

    expect(wrapper.is(FunctionalTemplate)).toBe(true)
  })
})
