const crypto = require('crypto');
const axios = require('axios');
const querystring = require('querystring');

const APPID = "appid=fjs_001075";
const CORPSIGN_1 = "corpsign=";
const CORPSIGN_2 = "81338aa3c1d44cf9953310dc5b018ef4";
const DATA_1 = "data=";
const FORMAT = "format=json";
const NONCE_1 = "nonce=";
const SIGN_1 = "sign="; //签名
const TIMESTAMP_1 = "timestamp="; // 时间戳
const VERSION = "version=1.0";
const APPSECRET_1 = "appsecret=";
const APPSECRET_2 = "0267c4bed7bd4ccfb33d788727f6b504";
const URL = "http://220.160.52.229:8772/smjk/service/HrssOpenREST/biz/execProcess";

const QUERY_WORKER_INFO = "method=ProjectWorker.Query";
const QUERY_PROJACT_INFO = "method=Project.Query";
const QUERY_CHECK_ON_WORK_ATTENDANCE_METHOH = "method=Attendance.Query";
const UNLOAD_IS_WORK = "method=WorkerAttendance.Add";
const QUERY_ASYNC_RESULT = "method=AsyncHandleResult.Query";
const UNLOAD_WORKER_TEMP_EXIT = "method=TempExit.Add";


const randomNumbers = (length) => {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const base = async (data, method) => {
    let nonce = randomNumbers(6);
    let timestamp = new Date().toISOString().replace(/[^0-9]/g, "").substring(0, 14); //当前时间戳

    // 1.对 corpsign 进行 AES 加密
    let corpsign = CORPSIGN_2 + timestamp;
    // 进行加密
    const cipher = crypto.createCipheriv('aes-256-cbc', APPSECRET_2, APPSECRET_2.substring(0, 16));
    let encryptedCorpsign = cipher.update(corpsign, 'utf8', 'base64');
    encryptedCorpsign += cipher.final('base64');

    // 2.拼接所有生成 sign
    const strs = [APPID, CORPSIGN_1 + encryptedCorpsign, DATA_1 + data, FORMAT, method, NONCE_1 + nonce, TIMESTAMP_1 + timestamp, VERSION, APPSECRET_1 + APPSECRET_2];
    const paramString = strs.join("&").toLowerCase();
    const sign = crypto.createHash('sha256').update(paramString).digest('hex');

    // 3.将 3 个参数需要先进行 UrlEncode
    data = encodeURIComponent(data);
    const encodedSign = encodeURIComponent(sign);
    const encodedCorpsign = encodeURIComponent(encryptedCorpsign);

    const strs1 = [APPID, CORPSIGN_1 + encodedCorpsign, DATA_1 + data, FORMAT, method, NONCE_1 + nonce, TIMESTAMP_1 + timestamp, VERSION, SIGN_1 + encodedSign];
    const paramString1 = strs1.join("&");

    // 4.调用
    try {
        const response = await axios.post(URL, paramString1);
        return JSON.stringify(response.data);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getWorkerInfo = async (data) => {
    return await base(data, QUERY_WORKER_INFO);
}

const getProjectInfo = async (data) => {
    return await base(data, QUERY_PROJACT_INFO);
}

const isWork = async (data) => {
    return await base(data, QUERY_CHECK_ON_WORK_ATTENDANCE_METHOH);
}

const uploadIsWork = async (data) => {
    return await base(data, UNLOAD_IS_WORK);
}

const queryAsyncResult = async (data) => {
    return await base(data, QUERY_ASYNC_RESULT);
}

const unloadWorkerTempExit = async (data) => {
    return await base(data, UNLOAD_WORKER_TEMP_EXIT);
}

// AES解密
const aesDecrypt = (ciphertext) => {
    const key = Buffer.from(APPSECRET_2, 'utf8');
    const iv = Buffer.from(APPSECRET_2.substring(0, 16), 'utf8');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(ciphertext, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// AES加密
const aesEncrypt = (plaintext) => {
    const key = Buffer.from(APPSECRET_2, 'utf8');
    const iv = Buffer.from(APPSECRET_2.substring(0, 16), 'utf8');
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(plaintext, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}


// (async () => {
//     const test = await getWorkerInfo("{\"pageIndex\":0,\"pageSize\":100,\"projectCode\":\"fae97049e4086d5ee053b13ca8c04d81\"}");
//     console.log(test);
// })();

console.log(aesDecrypt("LfpeTSPzAnDHmGR2C3Hn3H/UQIlTydBoVpIQWOAely4="))