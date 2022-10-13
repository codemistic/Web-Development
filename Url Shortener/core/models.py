from core import db
from datetime import datetime


class ShortUrl(db.Model):
    """
    Class that represents a shorturl of our application
    The following attributes of a shorturl are stored in this table:
        * original_url - url who user give us
        * short_id - short_id that serves to redirect to the original_url
        * created_at - creation date
    """
    id = db.Column(db.Integer, primary_key=True)
    original_url = db.Column(db.String(500), nullable=False)
    short_id = db.Column(db.String(20), nullable=False, unique=True)
    created_at = db.Column(db.DateTime(), default=datetime.now(), nullable=False)

    def __repr__(self):
        return f'ShortUrl: {self.short_id}'