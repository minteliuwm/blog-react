import dva from 'dva';
import './scss/index.scss';

const app = dva({
	onError: () => { }
});

require('./models').default.forEach((key: any) => app.model(key.default));

app.router(require('./router').default);

app.start('#app');
