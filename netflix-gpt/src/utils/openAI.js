import OpenAI from 'openai';

import { OPENAI_KEY } from './constants';

const openAI = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowserAPIs: true,
  dangerouslyAllowBrowser:true
});


export default openAI