import fastapi
from .auth import router as auth_router
from .chat import router as chat_router

router = fastapi.APIRouter()

router.include_router(auth_router)
router.include_router(chat_router)
