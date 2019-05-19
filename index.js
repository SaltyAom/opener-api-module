const Axios = require("axios");

const getOpenGraph = async id => {
    let returnData, err;
    let fetchPromise = new Promise((resolve,reject) => {
        Axios(`https://opener.now.sh/api/g/${id}`).then(data => {
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

const OpenerAPI = {
    getOpenGraph: id => getOpenGraph(id),
    getGenerate: id => getGenerate(id),
    getRelate: id => getRelate(id),
};

module.exports = OpenerAPI;