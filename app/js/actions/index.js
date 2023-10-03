export const API_URL = 'https://kv15ifr9hd.execute-api.us-east-1.amazonaws.com/dev/todos';

if (!API_URL) {
  console.error('Set `API_URL` in `app/js/actions/index.js` to your deployed endpoint')
}