from datetime import datetime
from pydantic import BaseModel


class User(BaseModel):
    name: str
    uid: str
    age: int
    last_login: datetime


user = User(name="Ming", uid="1234", age=19, last_login=datetime.now())
print(user.model_dump())
