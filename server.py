from itsdangerous import Signer
from flask import Flask, render_template, request, session, redirect, url_for
import sqlite3

conn = sqlite3.connect('logins.sqlite')
c = conn.cursor()

c.execute("""CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(75) NOT NULL UNIQUE, password VARCHAR(75) NOT NULL)""")

conn.commit()
conn.close()

DEBUG=True

app = Flask(__name__)

Flask.secret_key = "random"


@app.route("/")
def index():
    return render_template('index_test.html')

@app.route("/admin")
def admin():
    if session['logged_in'] == True:
        return render_template('admin.html')
    else:
        return redirect(url_for('login'))

@app.route("/about")
def about():
    return render_template('about_test.html')

@app.route("/portfolio")
def portfolio():
    return render_template('portfolio_test.html')

@app.route("/readings")
def readings():
    return render_template('readings_test.html')

@app.route("/aenied")
def aenied():
    return render_template('aeniedvirgil_test.html')

@app.route("/night")
def night():
    return render_template('nightwiesel_test.html')

@app.route("/iliad")
def iliad():
    return render_template('iliadhomer_test.html')

@app.route("/odyssey")
def odyssey():
    return render_template('odysseyhomer_test.html')

@app.route("/donquixote")
def donquixote():
    return render_template('quixotecervantes_test.html')

@app.route("/briscola")
def briscola():
    return render_template('game_test.html')

@app.route("/test")
def test():
    return render_template('game_test.html')

@app.route("/login", methods=['GET', 'POST'])
def login():
    conn = sqlite3.connect('logins.sqlite')
    c = conn.cursor()

    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get("password")
        c.execute("SELECT * FROM users WHERE username=?", (username,))
        usernameexists = c.fetchone()
        if usernameexists:
            c.execute("SELECT * FROM users WHERE password=?", (password,))
            correctpassword = c.fetchone()
            conn.close()
            if correctpassword:
                session['logged_in']=True
                return redirect(url_for('admin'))
            else:
                return 'incorrect password'
        else:
            return 'failed'
    conn.close()
    return render_template('login.html')

@app.route("/formSave")
def formSave():
    return render_template('formSave.html')

@app.route("/todo")
def todo():
    return render_template('todo_index.html')

@app.route("/ttt")
def tictactoe():
    return render_template('tictactoe.html')

if __name__ == "__main__":
    app.run(debug=True)
