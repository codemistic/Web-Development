import pytest
from core.models import ShortUrl


@pytest.fixture(scope='module')
def new_shorturl():
    shorturl = ShortUrl(original_url='https://fakepython.com/pytest/',
                        short_id='1rb09tr3')
    return shorturl
