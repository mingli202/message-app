FROM python:3.12-alpine

RUN apk add --no-cache gcc musl-dev libpq-dev

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

CMD ["fastapi", "dev", "src/main.py", "--host", "0.0.0.0"]
