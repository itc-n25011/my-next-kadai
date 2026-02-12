import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  // 👈 ここを microCMS の管理画面（image_dd9d1f.png）の値に更新します
  serviceDomain: 'orix-insight', 
  apiKey: 'LbhNOEgUYAeulGGJiyR1iGYxBHPxDAQFn1Co', 
});