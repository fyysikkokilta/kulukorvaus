from fastapi import FastAPI, Form
from pydantic import BaseModel


app = FastAPI()

# class ReimbursementForm(BaseModel):
#     name: str
#     iban: str

#     @classmethod
#     def as_form(
#         cls,
#         name: str = Form(...),
#         iban: str = Form(...),
#     ):
#         return cls(name, iban)


@app.get('/')
async def root():
    print('')
    return {'msg': 'hello'}


@app.post('/api/reimburse')
async def process_form(name: str = Form(...), iban: str = Form(...)):
    print(name)
    print(iban)
    return dict(name=name, iban=iban)