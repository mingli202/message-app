from pydantic import BaseModel


class FollowerBase(BaseModel):
    pass


class UserBase(BaseModel):
    username: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True


class Credentials(BaseModel):
    username: str
    password: str
