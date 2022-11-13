const BASE_URL = {
    dev: 'https://gateway.ngrok.i84.com.cn',
    prod: '',
}['dev']

// 查询FAQ nav列表
const queryFaqManageList = (data, callback) => {
    return ajax(BASE_URL + '/pub/baseFaqManage/list', { data }, callback)
}

// 根据业务编码查询
const queryFAQEntityByCode = (data, callback) => {
    return ajax(
        BASE_URL + '/pub/baseFaqManage/queryFAQEntityByCode',
        { data },
        callback
    )
}

// 根据业务编码查询
const queryFAQListByTypes = (data, callback) => {
    return ajax(BASE_URL + '/pub/baseFaqManage/list', { data }, callback)
}
