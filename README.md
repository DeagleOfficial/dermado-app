# dermado-app
Your AI-powered Dermatology Assistant.

### Requirements: 
Python 3.8.x (64-bit) - [Download here for Windows](https://www.python.org/ftp/python/3.8.6/python-3.8.6-amd64.exe)

### Instructions:
1. Clone the repository to your local machine. 
```bash
git clone https://github.com/DeagleOfficial/dermado-app.git
```
2. Install virtualenv
```
pip install virtualenv
```

3. Navigate to your local repository and create a virtual environment venv. Once created, activate the environment.
```
virtualenv venv
venv\Scripts\activate
```

4. Install dependencies. 
```
pip install -r requirements.txt
```

5. Deactivate Virtual environment and run the server.
```
deactivate
python server/application.py
```

6. Go to [Localhost:5000](http://localhost:5000/)

### Troubleshooting
In case of error FileNotFoundError: [Errno 2] No such file or directory: 'uploads/upload.jpg':
1. Make sure you have administrator previledges. 
2. Go to server/ and rename application.py to app.py.
3. Run app using the following command:
```
python -m flask run
```
