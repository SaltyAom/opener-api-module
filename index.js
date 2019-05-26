const Axios = require("axios");

const getGenerate = async id => {
    let returnData;
    let fetchPromise = new Promise((resolve,reject) => {
        Axios(`https://opener.now.sh/api/generate/${id}`).then(data => {
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
        Axios(`https://opener.now.sh/api/relate/${id}`).then(data => {
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
        Axios(`https://opener.now.sh/api/data/${id}`).then(data => {
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
        Axios(`https://opener.now.sh/api/tag/${tag}/${page}`).then(data => {
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

const getImage = async (id, page) => {
    let returnData, fetchPromise;
    if(page === undefined){
        fetchPromise = new Promise((resolve,reject) => {
            console.log(`https://opener.now.sh/api/image/${id}`);
            Axios(`https://opener.now.sh/api/image/${id}`).then(data => {
                resolve(true);
                return returnData = data.data;
            }).catch(err => {
                resolve(false);
                return returnData = err.data;
            });
        });
    } else {
        fetchPromise = new Promise((resolve,reject) => {
            Axios(`https://opener.now.sh/api/image/${id}/${page}`).then(data => {
                resolve(true);
                return returnData = data.data;
            }).catch(err => {
                resolve(false);
                return returnData = err.data;
            });
        });
    }
    
    await fetchPromise
    return returnData;
};

const OpenerAPI = {
    getOpenGraph: id => getOpenGraph(id),
    getGenerate: id => getGenerate(id),
    getRelate: id => getRelate(id),
    getData: id => getData(id),
    getTag: (tag, page = 1) => getTag(tag, page),
    getImage: (id, page) => getImage(id, page)
};

module.exports = OpenerAPI;