import TableForm from './TableForm/index.vue';
import PageHeader from './PageHeader/index.vue';
const componentList = [
  { name: 'TableForm', cmp: TableForm },
  { name: 'PageHeader', cmp: PageHeader }
];

export function initGlobalComponent(app: any) {
  componentList.forEach((item) => {
    console.log('app', app);

    app.component(item.name, item.cmp);
  });
}
