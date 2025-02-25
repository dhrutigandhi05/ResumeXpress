from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import config

router = APIRouter()

class UserSignup(BaseModel):
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

@router.post("/signup")
def signup(user: UserSignup):
    try:
        reponse = config.cognito_client.sign_up(
            ClientId=config.COGNITO_CLIENT_ID,
            Username=user.email,
            Password=user.password,
            UserAttributes=[{"Name": "email", "Value": user.email}],
        )

        return {"message": "Signup was successful"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
