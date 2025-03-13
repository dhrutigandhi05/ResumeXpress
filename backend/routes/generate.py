from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import google.generativeai as genai

router = APIRouter()

class GenerateRequest(BaseModel):
    job_title: str
    skills: list[str]
    experience: str

model = genai.GenerativeModel('gemini-pro')

@router.post("/generate")
def generate_content(request: GenerateRequest):
    try:
        prompt = f"""
            I am creating a resume for the job title "{request.job_title}".
            My skills include {', '.join(request.skills)}. 
            My experience includes: {request.experience}.
            Generate a professional work experience summary based on this information.
            """
        
        response = model.generate_content(prompt)
        generated_text = response.text

        return {"content": generated_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))