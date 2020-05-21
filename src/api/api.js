const URL = 'https://api.coincap.io/v2';

async function doRequest(url){
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
}

function getAssets() {
  return doRequest(`${URL}/assets?limit=20`);
}

function getAsset(coin) {
  return doRequest(`${URL}/assets/${coin}`);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return doRequest(`${URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`);
}

async function getMarkets(coin) {
  return doRequest(`${URL}/assets/${coin}/markets?limit=5`);
}

async function getExchange(id) {
  return doRequest(`${URL}/exchanges/${id}`);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
