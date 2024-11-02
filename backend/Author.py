# Create the table of the author 
import sqlite3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

CREATE TABLE Author IF NOT EXISTS (
    author_id INTEGER PRIMARY KEY,
    author_name TEXT NOT NULL,
);
