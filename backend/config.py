import os
from dotenv import load_dotenv
import boto3
import base64
import hmac
import hashlib

load_dotenv()

COGNITO_REGION = os.getenv("COGNITO_REGION")
COGNITO_USER_POOL_ID = os.getenv("COGNITO_USER_POOL_ID")
COGNITO_CLIENT_ID = os.getenv("COGNITO_CLIENT_ID")
COGNITO_CLIENT_SECRET = os.getenv("COGNITO_CLIENT_SECRET")

# print("COGNITO_USER_POOL_ID:", COGNITO_USER_POOL_ID)
# print("COGNITO_CLIENT_ID:", COGNITO_CLIENT_ID)
# print("COGNITO_REGION:", COGNITO_REGION)

cognito_client = boto3.client("cognito-idp", region_name=COGNITO_REGION)

def calculate_secret_hash(username):
    message = username + COGNITO_CLIENT_ID
    dig = hmac.new(
        COGNITO_CLIENT_SECRET.encode("utf-8"),
        message.encode("utf-8"),
        hashlib.sha256,
    ).digest()

    return base64.b64encode(dig).decode()