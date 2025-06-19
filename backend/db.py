import sqlite3
from utils import generate_activation_key

def init_db():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()

    c.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
    )
    ''')

    c.execute('''
    CREATE TABLE IF NOT EXISTS licenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        key TEXT UNIQUE,
        used INTEGER DEFAULT 0
    )
    ''')

    conn.commit()
    conn.close()

def store_user(email, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("INSERT OR IGNORE INTO users (email, password) VALUES (?, ?)", (email, password))
    conn.commit()
    conn.close()

def verify_user(email, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("SELECT id FROM users WHERE email=? AND password=?", (email, password))
    user = c.fetchone()
    conn.close()
    return user[0] if user else None

def get_or_create_key(user_id):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("SELECT key FROM licenses WHERE user_id=?", (user_id,))
    result = c.fetchone()
    if result:
        return result[0]
    
    # Generate new key
    new_key = generate_activation_key()
    c.execute("INSERT INTO licenses (user_id, key) VALUES (?, ?)", (user_id, new_key))
    conn.commit()
    conn.close()
    return new_key
