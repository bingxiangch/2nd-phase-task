# Authorization-Based Data Access for RAG-Enabled Generative AI (On-Premises)

## Description
This is my master thesis project work for Solita company, which develops a generative AI application that incorporates the Retrieval-Augmented Generation (RAG) framework with access control mechanisms to deal with enterprise documents, that can generate and summarize documents and generate an answer based on user permission.
I have revised my master's thesis project to align with the requirements of the second phase's task. The system is powered by Retrieval-Augmented Generation (RAG) framework. I have integrated two LLM models,  one is mistral-7b an open-source model, and the GPT-3.5 model. 
I have revised my thesis project to align with the requirements of the second phase task that Integrate two LLM models (Mistral 7B and GPT3.5) for summarization of PDF contents.

## System Overview:
- **Retrieval-Augmented Generation (RAG) Framework**: Incorporate the LlamaIndex and Retrieval-Augmented Generation (RAG) to generate contextually relevant responses based on the content of uploaded documents.
- **Document Interaction**: Users can upload documents to the system, which are then processed, users can also edit documents' permission.
- **Summarization and Query Answering**: The system can summarize documents and answer questions about their content. For instance, querying about "Mark Lee.pdf" provides summaries from both GPT-3.5 and Mistral-7b, with GPT-3.5 generally producing more concise results.

## Features:
- **User Interface**: The interface includes a document upload page and a chat page for interaction, displaying results in two boxes for each model.
- **Access Control**: Integrates with the RAG system to restrict query access based on user permissions, ensuring data privacy and security.
- **Backend Technology**: Built using FastAPI and Python, with the frontend developed in React.
- **Data Processing**: Documents are split into chunks, with each chunk's vector embedding calculated and stored in the Chroma vector database for quick retrieval.
- **Query Handling**: Queries are transformed into embeddings, matched with the most relevant document content in the database, and then fed into the LLMs to generate responses.

## Technical Implementation:
- **Ingestion Pipeline**: When a PDF is uploaded, it’s broken down into manageable pieces, each represented as a vector in the Chroma database.
- **Integration Components**:
  - **APIs**: Managed in the `auth_gpt: routers` folder.
  - **Service Implementation**: Located in the `service` module.
  - **LLM Component**: Handles the actual implementation of LLM interfaces, like LlamaCPP or OpenAI.
- **Configuration**: The settings file allows for fine-tuning of system prompts and LLM parameters such as token size and context windows.

**1. Login Credentials:**
   - **Username:** root
   - **Password:** root

**2. System Features:**
   - **User Management:** Access and manage user accounts.
   - **Knowledge Management:** manage knowledge base and permissions.
   - **Chat with System:** Engage in conversations with the system for information retrieval.

**3. Pre-Loaded Knowledge based:**
   - The system comes pre-loaded with three health profiles related to heart issues:
     - Alex Smith.docx
     - Mark Lee.docx
     - Sarah Davis.docx

**4. Example Questions:**

     - what symptoms does Alex Smith have?
     - what symptoms do Alex Smith and Mark Lee have
     - List all patients in the context

### Local Installation
If you want to run the application in your machine without using Docker, follw these steps:

*Prerequisites:* python3.11, macOS or Linux system, Node.js and npm
### Quickstart
1. Clone the project and navigate to project-folder
```bash
git clone https://github.com/bingxiangch/thesis_auth_rag.git
cd thesis_auth_rag
```
2. Run the Setup Script:
```bash
chmod +x setup_and_run.sh
./setup_and_run.sh
```
### Docker Installation 
Docker Installation with NVIDIA GPU Support(Running project on GPU)

*Prerequisites:* 
Install CUDA toolkit from [NVIDIA CUDA Downloads](https://developer.nvidia.com/cuda-downloads)

Verify your installation is correct by running `nvidia-smi`, ensure your CUDA version is up to date and your GPU is detected.
Steps:
1. Clone this repository to your local machine and navigate to the project.
```bash
git clone https://github.com/bingxiangch/thesis_auth_rag.git
cd thesis_auth_rag
```
2. Run the following Docker command for GPU support:
```bash
docker-compose -f docker-compose.gpu.yaml up --build
```
3. Access the application:
- Frontend: http://localhost:3000
- Backend: http://localhost:8001

### Step-by-Step Setup:
#### Backend
*Prerequisites:* python3.11, macOS or Linux system
1. Backend Setup, you need to navigate to project folder first(thesis_auth_rag):
```bash
cd backend && python3.11 -m venv .venv && source .venv/bin/activate && \
pip install --upgrade pip poetry && poetry install --with local && poetry install --extras chroma && ./scripts/setup
```
2. Launch the Backend server:
```bash
poetry run python3.11 -m auth_RAG
```

#### Frontend
*Prerequisites:* Node.js and npm
1. Frontend Setup, you need to navigate to project folder first(thesis_auth_rag):
```bash
cd frontend
npm install
```
2. Start the frontend server
```bash
npm start
```
The backend server will be accessible at http://localhost:8001.
The API documentation is available at http://127.0.0.1:8001/docs/.
The frontend server will be accessible at http://localhost:3000.

