import dva from 'dva';
import './scss/index.scss';

const app = dva({
	onError: () => { }
});

app.router(require('./router').default);

app.start("#app");
