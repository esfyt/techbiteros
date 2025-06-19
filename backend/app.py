from flask import Flask, render_template, request, redirect, session, url_for
from db import init_db, store_user, verify_user, get_or_create_key
from utils import generate_activation_key

app = Flask(__name__)
app.secret_key = 'techbiter-secret'

init_db()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/activation')
def activation():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    key = get_or_create_key(session['user_id'])
    return render_template('activation.html', activation_key=key)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user_id = verify_user(request.form['email'], request.form['password'])
        if user_id:
            session['user_id'] = user_id
            return redirect(url_for('activation'))
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        store_user(request.form['email'], request.form['password'])
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
