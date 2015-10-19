# Learning how to use databases with Flask

import sqlite3

conn = sqlite3.connect('database.sqlite')

c = conn.cursor()

newOrupdate = input("Would you like to create a new user, or update a old user? ")


def updateUser():
    inputUserName = input("What is your username? ")
    inputOldPassword = input("What is your current password? ")
    inputNewPassword = input("What would you like your new password to be? ")
    userInputs = [(inputNewPassword, inputUserName, InputOldPassword)]

    c.executemany("UPDATE users SET password = ? WHERE username = ? AND password = ?", userInputs)
    conn.commit()

def newUser():
    #Create a table
    c.execute('''create table IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(20) NOT NULL UNIQUE, password VARCHAR(20) NOT NULL)''')

    #Insert row of data
    inputUserName = input("What would you like your username to be? ")
    inputPassword = input("What would you like your password to be? ")
    userInputs = [(inputUserName, inputPassword)]
    c.executemany("insert into users (username, password) values (?, ?)", userInputs)

    #Save (commit) changes
    conn.commit()

def deleteUser():
    inputPassword = input("What is your password? ")
    inputUserName = input("What is your user name? ")
    userInputs = (inputPassword, inputUserName)

    c.executemany("DELETE from users WHERE password=? AND username=?", userInputs)
    conn.commit()


if newOrupdate in ['update']:
    updateUser()
elif newOrupdate in ['new']:
    newUser()
elif newOrupdate in ['delete']:
    deleteUser()
