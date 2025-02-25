from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import config

router = APIRouter()

class UserSignup(BaseModel):
    email: str
    password: str
    name: str

class UserLogin(BaseModel):
    email: str
    password: str

@router.post("/signup")
def signup(user: UserSignup):
    try:
        secret_hash = config.calculate_secret_hash(user.email)
        reponse = config.cognito_client.sign_up(
            ClientId=config.COGNITO_CLIENT_ID,
            SecretHash=secret_hash,
            Username=user.email,
            Password=user.password,
            UserAttributes=[
                {"Name": "email", "Value": user.email},
                {"Name": "name", "Value": user.name},
            ],
        )

        return {"message": "Signup was successful"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/login")
def login(user: UserLogin):
    try:
        secret_hash = config.calculate_secret_hash(user.email)
        response = config.cognito_client.initiate_auth(
            ClientId=config.COGNITO_CLIENT_ID,
            AuthFlow="USER_PASSWORD_AUTH",
            AuthParameters={"USERNAME": user.email, "PASSWORD": user.password, "SECRET_HASH": secret_hash},
        )

        return {"token": response["AuthenticationResult"]["IdToken"]}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))