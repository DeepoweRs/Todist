from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

'''app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///veritabani.db'  # SQLite veritabanı dosyası yolu
app.config['SECRET_KEY'] = 'gizli_anahtar'  # Flask-Admin için gizli anahtar
db = SQLAlchemy(app)

# Veritabanı modeli oluşturma
class Tablo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    veri = db.Column(db.String(100))

# Flask-Admin yönetici paneli oluşturma
admin = Admin(app, name='Flask-Admin', template_mode='bootstrap3')
admin.add_view(ModelView(Tablo, db.session))

if __name__ == '__main__':
    app.run(debug=True)
'''

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/workspace')
def workspace():
    return render_template('workspace.html')


if __name__ == '__main__':
    app.run(debug=True)
