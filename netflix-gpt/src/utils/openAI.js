import OpenAI from 'openai';

import { OPEN_AI_GPT_KEY } from './constants';

const openAI = new OpenAI({
  apiKey: OPEN_AI_GPT_KEY,
  dangerouslyAllowBrowserAPIs: true,
  dangerouslyAllowBrowser:true
});


export default openAI