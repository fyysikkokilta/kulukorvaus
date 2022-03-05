from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()

class ReimbursementForm(BaseModel):
    name: str
    iban: str


@app.get('/')
async def root():
    print('')
    return {'msg': 'hello'}


@app.post('/api/reimburse')
async def process_form(form: ReimbursementForm):
    print(form.name)
    print(form.iban)
    return form