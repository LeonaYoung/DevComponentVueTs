import { createLocalVue, mount } from '@vue/test-utils';
import DevComponentVueTs from './DevComponentVueTs.vue';

const localVue = createLocalVue();

describe('DevComponentVueTs.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(DevComponentVueTs, {
      localVue,
    });

    expect(wrapper.text()).toBe('DevComponentVueTs');
  });
});
