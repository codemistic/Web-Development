from hashlib import new


def test_new_shorturl_with_fixture(new_shorturl):
    """
    GIVEN a ShortUrl model \n
    WHEN a new ShortUrl is created \n
    THEN check the original_url and short_id fields are defined correctly
    """
    assert new_shorturl.original_url == 'https://fakepython.com/pytest/'
    assert new_shorturl.short_id == '1rb09tr3'
    assert new_shorturl.__repr__() == 'ShortUrl: 1rb09tr3'
