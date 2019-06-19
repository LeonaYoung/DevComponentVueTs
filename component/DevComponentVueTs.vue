<template>
  <div :class="$style.devComponentVueTs">
    DevComponentVueTs
  </div>
</template>

<script lang="ts">
export default {
  name: 'DevComponentVueTs',
  components: {},
  props: {},
  data(): any {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.devComponentVueTs {
  display: block;
}
</style>
