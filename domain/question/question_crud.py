from models import Question
from sqlalchemy.orm import Session

def get_questions(db: Session):
    question_list = db.query(Question)\
        .order_by(Question.created_at.desc())\
        .all()
    return question_list