import { Model } from 'dva';

interface BreadType {
	name: string;
	canBack: boolean;
}

export interface CommonsState {
	breadcrumb: BreadType;
}

const model: Model = {
	namespace: 'commons',

	state: {
		breadcrumb: {}
	},

	reducers: {
		changeBreadcrumb(state: CommonsState, { payload = {} }) {
			return {
				...state,
				...payload
			};
		}
	}
};

export default model;
