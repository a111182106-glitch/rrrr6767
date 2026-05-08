import * as http from 'https';
http.get('https://sites.google.com/nkust.edu.tw/a1111821061/', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => console.log(data.match(/<img[^>]+src="([^">]+)"/g)?.join('\n')));
});
