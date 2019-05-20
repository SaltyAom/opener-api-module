const axios = require("axios");
const { setupCache } = require("axios-cache-adapter");

const cache = setupCache({
    maxAge: 604800
});

const Axios = axios.create({
    adapter: cache.adapter
});

const getOpenGraph = async id => {
    let returnData, err;
    let fetchPromise = new Promise((resolve,reject) => {
        Axios.get(`https://opener.now.sh/api/g/${id}`).then(data => {
            resolve(true);
            return returnData = data.data;
        }).catch(err => {
            resolve(false);
            return returnData = err;
        });
    });

    await fetchPromise;
    return returnData;
};

const getGenerate = async id => {
    let returnData;
    let fetchPromise = new Promise((resolve,reject) => {
        Axios.get(`https://opener.now.sh/api/generate/${id}`).then(data => {
            resolve(true);
            return returnData = data.data;
        }).catch(err => {
            resolve(false);
            return returnData = err;
        });
    });
    
    await fetchPromise;
    return returnData;
};

const getRelate = async id => {
    let returnData;
    let fetchPromise = new Promise((resolve,reject) => {
        Axios.get(`https://opener.now.sh/api/relate/${id}`).then(data => {
            resolve(true);
            return returnData = data.data;
        }).catch(err => {
            resolve(false);
            return returnData = err;
        });
    });
    
    await fetchPromise;
    return returnData;
};

const getData = async id => {
    let returnData;
    let fetchPromise = new Promise((resolve,reject) => {
        Axios.get(`https://opener.now.sh/api/data/${id}`).then(data => {
            resolve(true);
            return returnData = data.data;
        }).catch(err => {
            resolve(false);
            return returnData = err;
        });
    });
    
    await fetchPromise;
    return returnData;
};

const getTag = async (tag, page = 1) => {
    let returnData;
    let fetchPromise = new Promise((resolve,reject) => {
        Axios.get(`https://opener.now.sh/api/tag/${tag}/${page}`).then(data => {
            resolve(true);
            return returnData = data.data;
        }).catch(err => {
            resolve(false);
            return returnData = err;
        });
    });
    
    await fetchPromise
    return returnData;
};

const OpenerAPI = {
    getOpenGraph: id => getOpenGraph(id),
    getGenerate: id => getGenerate(id),
    getRelate: id => getRelate(id),
    getData: id => getData(id),
    getTag: (tag,page = 1) => getTag(tag,page)
};

module.exports = OpenerAPI;