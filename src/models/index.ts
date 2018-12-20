const context = require.context('./', false, /\.ts$/);
export default context.keys().filter((item: string) => item !== './index.ts').map((key: string) => context(key));
