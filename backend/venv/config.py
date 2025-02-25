import os
from dotenv import load_dotenv
import boto3

load_dotenv()

COGNITO_REGION = os.getenv("COGNITO_REGION")
COGNITO_USER_POOL_ID = os.getenv("COGNITO_USER_POOL_ID")
COGNITO_CLIENT_ID = os.getenv("COGNITO_CLIENT_ID")

cognito_client = boto3.client("cognito-idp", region_name=COGNITO_REGION)