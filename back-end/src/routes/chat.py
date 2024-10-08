from typing import Annotated

from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

router = APIRouter(prefix="/chat", tags=["chat"])


@router.get(path="/")
async def chat(token: Annotated[str, Depends(oauth2_scheme)]):
    return {"token": token}
