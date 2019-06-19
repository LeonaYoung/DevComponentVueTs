import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import DevComponentVueTs from './DevComponentVueTs.vue';

const story = storiesOf('DevComponentVueTs', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { DevComponentVueTs },
    template: `<dev-component-vue-ts>DevComponentVueTs</dev-component-vue-ts>`,
  })),
);
