from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from src import crud, models, schemas
from src.database import SessionLocal, engine
from src.routes import router

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router)

origins = ["http://localhost:5173", "http://127.0.0.1:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# dependencies
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Annotated[Session, Depends(get_db)]):
    db_user = crud.get_user_by_email(db, user.email)

    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    return crud.create_user(db, user)


@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int, limit: int, db: Annotated[Session, Depends(get_db)]):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Annotated[Session, Depends(get_db)]):
    db_user = crud.get_user(db, user_id)

    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")

    return db_user


@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item_for_user(
    user_id: int,
    item: schemas.ItemCreate,
    db: Annotated[Session, Depends(get_db)],
):
    return crud.create_user_item(db, item, user_id)


@app.get("/items/", response_model=list[schemas.Item])
def read_items(skip: int, limit: int, db: Annotated[Session, Depends(get_db)]):
    items = crud.get_items(db, skip, limit)
    return items
