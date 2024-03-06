/**
 * 빌드 결과물 테스트용 서버 모듈
 *
 * @author RWB
 * @since 2024.03.07 Thu 00:39:14
 */

import express from 'express';

const app = express();

app.use(express.static('./docs'));

app.listen(3000, () =>
{
	console.log('server is running at http://localhost:3000');
});