from fastapi import FastAPI
# from routes import auth, resume

app = FastAPI()

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
# app.include_router(resume.router, prefix="/api/resume", tags=["resume"])

@app.get("/")
def home():
    return {"message": "ResumeXpress FastAPI Backend Running!"}
