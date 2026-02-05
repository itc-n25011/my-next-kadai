import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'orix-insight', // 画像で確認したドメイン
  apiKey: 'LbhNOEgUYAeulGGJiyR1iGYxBHPxDAQFn1Co', // 提供いただいたAPIキー
});