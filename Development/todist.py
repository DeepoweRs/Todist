from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import sqlite3

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/bedirhankurt/Desktop/Programming/Todist/Development/Database/CardInfo.sqlite'
db = SQLAlchemy(app)

class GenerellCardInfo(db.Model):
    __tablename__ = 'Generell Card Info'  # Tablo adını belirtiyoruz, boşluklar için çift tırnak kullanmamız gerekecek
    id = db.Column(db.Integer, primary_key=True)  # İsteğe bağlı: id sütunu oluşturmak için birincil anahtar ekleyebiliriz
    Card_Name = db.Column(db.Text)
    Tags = db.Column(db.Text)
    Finish_Date = db.Column(db.Text)
    Card_Description = db.Column(db.Text)
    Situation = db.Column(db.Text)
    CardID = db.Column(db.Integer)
    Number_of_Task = db.Column(db.Integer)
    Number_of_Completed_Task = db.Column(db.Integer)
    Number_of_Not_Completed_Task = db.Column(db.Integer)

    def __repr__(self):
        return f'<GenerellCardInfo Card_Name="{self.Card_Name}" Tags="{self.Tags}" Finish_Date="{self.Finish_Date}">'
    
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/workspace')
def workspace():
    return render_template('workspace.html')

@app.route('/logIn')
def logIn():
    return render_template('logIn.html')

@app.route('/get_task_info')
def get_task_info():
    
    sql_query = text('''
        SELECT Card_Name, Number_of_Completed_Task
        FROM "Generell Card Info"
        WHERE id IN (:id1, :id2, :id3)
    ''')

    card_info = db.session.execute(sql_query, {'id1': 3, 'id2': 4, 'id3': 5})

    task_info = []
    for row in card_info:
        task_info.append({
            'Card_Name': row.Card_Name,
            'Number_of_Completed_Task': row.Number_of_Completed_Task
        })

    return jsonify(task_info)

if __name__ == '__main__':
    app.run(debug=True)
