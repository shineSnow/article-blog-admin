import { h, defineComponent } from 'vue';

export default defineComponent({
  name: 'Expand',
  props: {
    row: Object,
    renderFn: {
      type: Function,
      default: () => {}
    }
  },
  render() {
    return this.renderFn(h, this.row);
  }
});
