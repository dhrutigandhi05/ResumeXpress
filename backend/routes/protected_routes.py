from fastapi import APIRouter, Depends
from auth_middleware import verify_token

router = APIRouter()

@router.get("/protected")
def protected_routes(user: dict = Depends(verify_token)):
    return {"message": "Protected route.", "user": user} 