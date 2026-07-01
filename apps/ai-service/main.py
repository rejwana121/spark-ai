from fastapi import FastAPI

app = FastAPI(
    title="Spark AI API",
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Spark AI Backend 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
    }