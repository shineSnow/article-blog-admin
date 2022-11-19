import TableForm from './TableForm/index.vue';

const componentList = [{ name: 'TableForm', cmp: TableForm }];

export function initGlobalComponent(app: any) {
  componentList.forEach((item) => {
    console.log('app', app);

    app.component(item.name, item.cmp);
  });
}
