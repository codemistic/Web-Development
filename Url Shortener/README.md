# 📎UrlShortener
> This is an UrlShortener built with Flask and Postgresql.
>
>


# 👨‍💻Installation
## 📄Pre-Requirements
- Python Installed (Recommended version 3.8 or above)
- Pip Package Manager (pip)
## ⚙️How to use it?
1. Download this repository with git clone or by clicking the download as archive on this page

    ```
    git clone https://github.com/Fer-Bar/UrlShortener.git
    ```
    Go to the project directory.
    ```
    cd url_shortener
    ```
    
2. Create a virtual environment:
    ### 🪟Windows:
   
    ```
    py -m venv venv
    ```
    Once created you can activate it.
    ```
    venv\Scripts\activate.bat
    ```
    ### 🐧Unix or MacOS:
    
    ```
    pip install virtualenv
    virtualenv venv
    ```
    Once created you can activate it.
    ```
    source venv/bin/activate
    ``` 
3. Install dependencies with `pip install -r requirements.txt`. Make sure everything is installed properly with `pip freeze`.

4. The last step is run the [main.py](main.py) file, if you want you can change the host and the port. For example:
    ```
    app.run(host='localhost', port=9000, debug=True)
    ``` 
## 🧪 Tests
- To run tests, run the following command:

    ```
    python -m pytest -v
    ``` 
## 🔃Migrations
- To run the migrations, just run the following commands:

    This command adds a `migrations` directory in the root of your project. This is a directory where all the migration scripts are going to be stored.
    
    ```
    flask db init
    ```
    The next step in the process is to create an initial migration, using the `migrate` command:
    
    ```
    flask db migrate -m "Initial migration."
    ```
    Then you can apply the migration to the database:
    
    ```
    flask db migrate -m "Initial migration."
    ```
## 😎 Author

👤 **Fernando Barrientos**

<!---* Website: xadec
-->
* Website: [fer-bar.github.io](https://fer-bar.github.io/Portfolio/)
* Github: [Fer-Bar](https://github.com/Fer-Bar)

