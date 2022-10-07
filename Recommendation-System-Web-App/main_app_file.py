from typing import List, Any
import time
import pandas as pd
import streamlit as st
import pickle
from PIL import Image

img = Image.open('./image/icon.jpeg')

st.set_page_config(page_title='Anime Wiki', page_icon=img)

hide_menu_style = """
        <style>
        #MainMenu {visibility:hidden;}
        footer {visibility:hidden;}
        </style>
        """
st.markdown(hide_menu_style, unsafe_allow_html=True)

with open('style.css') as f:
    st.markdown(f'<style>{f.read()}<style>', unsafe_allow_html=True)


def recommend(anime):
    anime_index = animelist[animelist['title'] == anime].index[0]
    distance = similarity[anime_index]
    anime_list = sorted(list(enumerate(distance)), reverse=True, key=lambda x: x[1])[1:16]
    recommended_anime: List[Any] = []
    for i in anime_list:
        recommended_anime.append(animelist.iloc[i[0]].title)

    return recommended_anime


anime_dict = pickle.load(open('anime_list.pkl', 'rb'))
animelist = pd.DataFrame(anime_dict)

similarity = pickle.load(open('similarity.pkl', 'rb'))

st.markdown(
    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">',
    unsafe_allow_html=True)

st.markdown("""
<nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color: #3498DB;">
  <a class="navbar-brand" href="#" target="_blank">Anime Wiki</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

</nav>
""", unsafe_allow_html=True)

st.title('Anime Recommendation')

option = st.selectbox(
    'Choose the Anime ',
    animelist['title'].values
)

if st.button('Recommend'):
    recommendations = recommend(option)
    with st.spinner('Wait for it...'):
        time.sleep(1)
    st.success('done')
    for j in recommendations:
        st.write(j)
