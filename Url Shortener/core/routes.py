import string
import validators

from datetime import datetime
from core.models import ShortUrl
from core import app, db
from random import choice
from flask import render_template, request, flash, redirect, url_for


def generate_short_id(num_of_chars: int) -> str:
    """Function to generate short_id of specified number of characters"""
    return ''.join(choice(string.ascii_letters+string.digits) for _ in range(num_of_chars))


@app.route('/', methods=['GET', 'POST'])
def index():
    """
    The main view receives POST and GET requests
    """
    if request.method == 'POST':
        url = request.form['url']
        short_id = request.form['custom_id']

        if short_id and ShortUrl.query.filter_by(short_id=short_id).first() is not None:
            flash('Please enter different custom id!')
            return redirect(url_for('index'))
        
        if not validators.url(url):
            flash('Enter a valid url.')
            return redirect(url_for('index'))
                
        if not url:
            flash('The URL is required!')
            return redirect(url_for('index'))

        if not short_id:
            short_id = generate_short_id(8)

        new_link = ShortUrl(original_url=url,
                            short_id=short_id,
                            created_at=datetime.now())
        db.session.add(new_link)
        db.session.commit()
        short_url = request.host_url + short_id

        return render_template('index.html', short_url=short_url)

    return render_template('index.html')

@app.route('/<short_id>')
def redirect_url(short_id: str):
    """
    This view redirects to the original_url address \n
    Only receives GET requests
    """
    link = ShortUrl.query.filter_by(short_id=short_id).first()
    if link:
        return redirect(link.original_url)
    else:
        flash('Invalid URL')
        return redirect(url_for('index'))