FROM python:3.9-slim
WORKDIR /src
COPY ./csv_data /src/csv_data/
COPY ./requirements.txt /src/requirements.txt
RUN pip install --no-cache-dir -r /src/requirements.txt
COPY ./farms_api /src/farms_api/
EXPOSE 80
CMD ["uvicorn", "farms_api:app", "--host", "0.0.0.0", "--port", "80"]
