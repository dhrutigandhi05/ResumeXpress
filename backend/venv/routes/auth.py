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

@router.post("/login")
def login(user: UserLogin):
    try:
        response = config.cognito_client.initiate_auth(
            ClientId=config.COGNITO_CLIENT_ID,
            AuthFlow="USER_PASSWORD_AUTH",
            AuthParameters={"USERNAME": user.email, "PASSWORD": user.password},
        )

        return {"token": response["AuthenticationResult"]["IdToken"]}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))