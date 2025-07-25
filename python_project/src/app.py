from fastapi import FastAPI
from src.settings import Settings
from src.prompt import personalidade_prompt

import google.generativeai as genai

app = FastAPI()

genai.configure(api_key=Settings().GOOGLE_API_KEY)


@app.get('/')
def reed_root():
    return {'Bem vindo a bot zap'}


@app.post('/chat_bot')
async def receber_mensagem(mensagem: str):
    model = genai.GenerativeModel('gemini-1.5-flash-latest')
    prompt = personalidade_prompt
    
    mensagem = prompt + "\n" + mensagem
    response = model.generate_content(mensagem)
    
    return response.text