import os
import jwt
import requests
from fastapi import Depends, HTTPException, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv

load_dotenv()
COGNITO_USER_POOL_ID = os.getenv("COGNITO_USER_POOL_ID")
COGNITO_REGION = os.getenv("COGNITO_REGION")
security = HTTPBearer()

#verify aws cognito token
def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        token = credentials.credentials
        header = jwt.get_unverified_header(token)
        kid = header["kid"]

        url = f"https://cognito-idp.{COGNITO_REGION}.amazonaws.com/{COGNITO_USER_POOL_ID}/.well-known/jwks.json"
        response = requests.get(url)
        keys = response.json()["keys"]

        key = next((k for k in keys if k["kid"] == kid), none)

        if key is None:
            raise HTTPException(status_code=400, detail="Invalid Token")
        
        decode_token = jwt.decode(token, key, algorithms=["RS256"], audience=os.getenv("COGNITO_CLIENT_ID"))
        return decode_token
    except Exception as e:
        return HTTPException(status_code=400, detail=str(e))
    
#only ensures that authenticated users only can access the protected routes