axios.defaults.baseURL = {
    dev: 'https://gateway.ngrok.i84.com.cn',
    prod: '',
}['dev']

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        if (response.data.code === 200) {
            return response.data
        }

        return Promise.reject(response.data.msg)
    },
    function (error) {
        return Promise.reject(error)
    }
)

// FAQ分类查询接口
const queryFAQTypeList = (data) => {
    return axios.post('/pub/app/baseFaqManage/queryFAQTypeList', data)
}

// 根据分类ID查询列表
const queryFaqManageList = (data) => {
    return axios.post('/pub/app/baseFaqManage/list', data)
}

// 根据业务编码查询
const queryFAQEntityByCode = (data) => {
    return axios.post('/pub/app/baseFaqManage/queryFAQEntityByCode', data)
}

const getQueryString = (parameterName) => {
    const rs = new RegExp(
        '(^|[&,?])' + parameterName + '=([^&]*)(&|$)',
        'gi'
    ).exec(window.location.href)
    if (rs) return rs[2]
    return null
}
