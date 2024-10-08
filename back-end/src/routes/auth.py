from fastapi import APIRouter, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from typing import Annotated

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post(path="/login", description="Login", status_code=status.HTTP_202_ACCEPTED)
async def login(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    # db: Annotated[Database, Depends()],
):
    # user = db.login_user(form_data.username, form_data.password)
    #
    # if user is None:
    #     raise HTTPException(status_code=400, detail="Incorrect username or password")

    return {"access_token": "token", "token_type": "bearer"}


@router.post(path="/signup", description="Signup", status_code=status.HTTP_201_CREATED)
async def signup(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    # db: Annotated[Database, Depends()],
):
    # user = db.signup_user(form_data.username, form_data.password)
    #
    # if user is None:
    #     raise HTTPException(status_code=400, detail="User already exists")

    return {"access_token": "token", "token_type": "bearer"}
