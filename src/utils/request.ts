import fetch from 'dva/fetch';

const handleResponce = (response: any) => {
	if (response.status >= 200 && response.status < 300) {
		return response.json();
	}
	return response.json().then((r: any) => Promise.reject({
		body: r,
		status: response.status,
		msg: r.error && r.error.message || ''
	})).catch((e: any) => {
		const em = e.status ? e : {
			status: '500',
			msg: '请求失败'
		};
		return Promise.reject(em);
	});
};

interface IProps extends RequestInit {
	url: string;
	method: string;
	data: object;
}

const request = ({ url, method = 'get', data, ...options }: IProps) => {
	if (!url) {
		return Promise.reject({
			status: '500',
			msg: '请求失败'
		});
	}
	Object.assign(options, {
		method
	});
	if (data && method.toLowerCase() !== 'get') {
		Object.assign(options, {
			body: JSON.stringify(data)
		});
	}
	return fetch(url, options).then(handleResponce).then((data) => ({ data }));
};

export default request;
