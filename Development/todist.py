from flask import Flask, render_template, jsonify, request, render_template_string
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/bedirhankurt/Desktop/Programming/Todist/Development/Database/CardInfo.sqlite'
db = SQLAlchemy(app)

class GenerellCardInfo(db.Model):
    __tablename__ = 'Generell Card Info' 
    CardId = db.Column(db.Integer, primary_key=True)
    Card_Name = db.Column(db.Text)
    Tags = db.Column(db.Text)
    Finish_Date = db.Column(db.Text)
    Situation = db.Column(db.Text)
    CardID = db.Column(db.Integer)
    Number_of_Task = db.Column(db.Integer)
    Number_of_Completed_Task = db.Column(db.Integer)
    Number_of_Not_Completed_Task = db.Column(db.Integer)

    def __repr__(self):
        return f'<GenerellCardInfo Card_Name="{self.Card_Name}" Tags="{self.Tags}" Finish_Date="{self.Finish_Date}">'
    
class TaskInfo(db.Model):
    __tablename__ = 'Task Info' 
    TaskId = db.Column(db.Integer, primary_key=True)
    AddIconId = db.Column(db.Integer)
    Task_Name = db.Column(db.Text)
    Task_Description = db.Column(db.Text)
    Task_Status = db.Column(db.Text)
    
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/workspace')
def workspace():
    return render_template('workspace.html')

@app.route('/logIn')
def logIn():
    return render_template('logIn.html')

@app.route('/createCard', methods=["POST"])
def createCard():
    cardData = request.get_json()
    card_name = cardData['cardNameData']
    tags = cardData['tagData']
    finish_date = cardData['dueData']

    new_card = GenerellCardInfo(Card_Name=card_name, Tags=tags, Finish_Date=finish_date)
    db.session.add(new_card)
    db.session.commit()

    return jsonify({'message': 'Success'})

@app.route('/createTask', methods=["POST"])
def createTask():
    taskData = request.get_json()
    task_name = taskData['taskNameData']
    AddIconId = taskData['AddIconId']
    taskStatus = taskData['taskStatus']


    new_task = TaskInfo(Task_Name=task_name, AddIconId=AddIconId, Task_Status=taskStatus)
    db.session.add(new_task)
    db.session.commit()

    return jsonify({'message': 'Success'})

@app.route('/getCardInfo')
def getCardInfo():
    card = GenerellCardInfo.query.order_by(GenerellCardInfo.CardId.desc()).first()
    tags = card.Tags.split(',')

    tag1 = tags[0]
    tag2 = tags[1]
    tag3 = tags[2]

    if card:
        return jsonify({'card_title': card.Card_Name, 'due_date': card.Finish_Date, 'id': card.CardID, 'tag1': tag1, 'tag2': tag2, 'tag3': tag3})
    else:
        return jsonify({'card_title': 'No card available', 'due_date': 'No card available'})
    
@app.route('/getTaskInfo')
def getTaskInfo():
    task = TaskInfo.query.order_by(TaskInfo.TaskId.desc()).first()

    if task:
        return jsonify({'task_title': task.Task_Name, 'id': task.TaskId, 'AddIconId': task.AddIconId})
    else:
        return jsonify({'card_title': 'No card available'})
    
@app.route('/changeTaskStatus', methods=['POST'])
def changeTaskStatus():
    taskData = request.get_json()
    TaskId = taskData['TaskId']
    taskStatus = taskData['taskStatus']
    task = TaskInfo.query.get(TaskId)

    if task: 
        task.Task_Status = taskStatus
        db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)
