const imgDictMale = {
    'Will': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/330px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg',
    'Leonardo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/330px-Leonardo_Dicaprio_Cannes_2019.jpg',
    'Johnny': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Johnny_Depp-2757_%28cropped%29.jpg/330px-Johnny_Depp-2757_%28cropped%29.jpg',
    'Dwayne': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/330px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg',
    'Chris': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/330px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg',
    'Hugh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Logan_Japan_Premiere_Red_Carpet-_Hugh_Jackman_%2838445328406%29_%28rotated%29.jpg/330px-Logan_Japan_Premiere_Red_Carpet-_Hugh_Jackman_%2838445328406%29_%28rotated%29.jpg',
    'Bradley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Glasto17-44_%2835547413626%29_Cropped.jpg/330px-Glasto17-44_%2835547413626%29_Cropped.jpg',
    'Christian': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/330px-Christian_Bale-7837.jpg',
    'Robert': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/MJK_08781_Robert_Pattinson_%28Damsel%2C_Berlinale_2018%29.jpg/330px-MJK_08781_Robert_Pattinson_%28Damsel%2C_Berlinale_2018%29.jpg',
    'RDJ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/330px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg',
    'Tom': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/330px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg',
    'Benedict': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Benedict_Cumberbatch_crop.jpg/330px-Benedict_Cumberbatch_crop.jpg',
    'Henry': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Henry_Cavill_by_Gage_Skidmore_2.jpg/330px-Henry_Cavill_by_Gage_Skidmore_2.jpg',
    'Ryan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ryan_Gosling_in_2018.jpg/330px-Ryan_Gosling_in_2018.jpg',
    'Michael': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Michael_Fassbender_by_Gage_Skidmore_2015.jpg/330px-Michael_Fassbender_by_Gage_Skidmore_2015.jpg',
    'Idris': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Idris_Elba-4580_%28cropped%29.jpg/330px-Idris_Elba-4580_%28cropped%29.jpg',
    'David': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Beckswimbledon.jpg/330px-Beckswimbledon.jpg',
    'Jamie': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jamie_Dornan_January_2013.jpg/330px-Jamie_Dornan_January_2013.jpg',
    'Ryan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/330px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg',
    'Jake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Jake_Gyllenhaal_2019_by_Glenn_Francis.jpg/330px-Jake_Gyllenhaal_2019_by_Glenn_Francis.jpg',
    'Pharrell': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%22Hidden_Figures%22_Screening_at_NMAAHC_%28NHQ201612140033%29_%28cropped%29.jpg/330px-%22Hidden_Figures%22_Screening_at_NMAAHC_%28NHQ201612140033%29_%28cropped%29.jpg',
    'Zac': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zac_Efron_at_the_Baywatch_Red_Carpet_Premiere_Sydney_Australia.jpg/330px-Zac_Efron_at_the_Baywatch_Red_Carpet_Premiere_Sydney_Australia.jpg',
    'George': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/George_Clooney_2016.jpg/330px-George_Clooney_2016.jpg',
    'Justin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Justin_Timberlake_by_Gage_Skidmore_2.jpg/330px-Justin_Timberlake_by_Gage_Skidmore_2.jpg',
    'James': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/James_Franco_4%2C_2013.jpg/330px-James_Franco_4%2C_2013.jpg',
    'Taylor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Taylor_Lautner_Comic-Con_2012.jpg/330px-Taylor_Lautner_Comic-Con_2012.jpg',
    'Brad': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg',
    'Orlando': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_Bloom_Cannes_2013.jpg/330px-Orlando_Bloom_Cannes_2013.jpg',
    'SRK': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg',
    'Hrithik': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Hrithik_at_Rado_launch.jpg',
    'Salman': 'https://upload.wikimedia.org/wikipedia/commons/8/86/Salman_Khan_at_Renault_Star_Guild_Awards.jpg',
    'Akshay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Akshay_Kumar_at_Star_Guild_Awards.jpg/330px-Akshay_Kumar_at_Star_Guild_Awards.jpg',
    'Amitabh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Indian_actor_Amitabh_Bachchan.jpg/330px-Indian_actor_Amitabh_Bachchan.jpg',
    'Aamir': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Aamir_Khan_From_The_NDTV_Greenathon_at_Yash_Raj_Studios_%2811%29.jpg/330px-Aamir_Khan_From_The_NDTV_Greenathon_at_Yash_Raj_Studios_%2811%29.jpg',
    'Ajay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Ajay_Devgn_promoting_All_the_Best.jpg/330px-Ajay_Devgn_promoting_All_the_Best.jpg',
    'Ranveer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ranveer_Singh_promoting_Bajirao_Mastani.jpg/330px-Ranveer_Singh_promoting_Bajirao_Mastani.jpg',
    'Ranbir': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Ranbir_Kapoor_promoting_Bombay_Velvet.jpg/330px-Ranbir_Kapoor_promoting_Bombay_Velvet.jpg',
    'Saif': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Saif_Ali_Khan_snapped_at_Imperial_Hotel%2C_New_Delhi_05.jpg/330px-Saif_Ali_Khan_snapped_at_Imperial_Hotel%2C_New_Delhi_05.jpg',
    'Varun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Varun_Dhawan_filmfare.jpg/330px-Varun_Dhawan_filmfare.jpg',
    'Shahid': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Shahid%2C_Alia%2C_and_Katrina_at_IIFA_2017_%28cropped%29.jpg/330px-Shahid%2C_Alia%2C_and_Katrina_at_IIFA_2017_%28cropped%29.jpg',
    'John': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/John_promotes_%27I%2C_Me_Aur_Main%27_with_coffee_date.jpg/330px-John_promotes_%27I%2C_Me_Aur_Main%27_with_coffee_date.jpg',
    'Ayushman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ayushmann_Khurrana_promoting_Andhadhun.jpg/330px-Ayushmann_Khurrana_promoting_Andhadhun.jpg',
    'Sushant': 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sushant_Singh_Rajput_snapped_at_the_promotions_of_%27M.S._Dhoni_-_The_Untold_Story%27_%28cropped%29.jpg',
    'Raj': 'https://upload.wikimedia.org/wikipedia/commons/8/88/Rajkumar_Rao_Filmfare_Glamour_and_Style_Awards_2019_%28cropped%29.jpg',
    'Emraan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Emraan_Hashmi_Promotions_of_%27Shanghai%27_%282%29.jpg/300px-Emraan_Hashmi_Promotions_of_%27Shanghai%27_%282%29.jpg',
    'Karan': 'https://upload.wikimedia.org/wikipedia/commons/4/45/KJO_Manish_M_B%27day_bash.jpg',
    'Siddharth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Sidharth_Malhotra_2016.jpg/330px-Sidharth_Malhotra_2016.jpg',
    'Karthik': 'https://upload.wikimedia.org/wikipedia/commons/7/78/Kartik_Aaryan_in_2018.jpg'
}

const imgDictFemale = {
    'Scarlett': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg/330px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg',
    'Jennifer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Jennifer_Lawrence_in_2018.png/330px-Jennifer_Lawrence_in_2018.png',
    'Megan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Megan_Fox_%286133014224%29.jpg/330px-Megan_Fox_%286133014224%29.jpg',
    'Mila': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mila_Kunis_2018_%28cropped_2%29.jpg/330px-Mila_Kunis_2018_%28cropped_2%29.jpg',
    'Amber': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Amber_Heard_%2843723454772%29.jpg/330px-Amber_Heard_%2843723454772%29.jpg',
    'Rihanna': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/330px-Rihanna_Fenty_2018.png',
    'Jessica': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/TechCrunch_Disrupt_NY_2016_-_Day_3_%2826884815511%29_%28cropped%29.jpg/330px-TechCrunch_Disrupt_NY_2016_-_Day_3_%2826884815511%29_%28cropped%29.jpg',
    'Beyoncé': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png/330px-Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png',
    'Charlize': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Charlize-theron-IMG_6045.jpg/330px-Charlize-theron-IMG_6045.jpg',
    'Natalie': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Natalie_Portman_%2848470988352%29_%28cropped%29.jpg/330px-Natalie_Portman_%2848470988352%29_%28cropped%29.jpg',
    'Selena': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/191125_Selena_Gomez_at_the_2019_American_Music_Awards_%28cropped%29.png/330px-191125_Selena_Gomez_at_the_2019_American_Music_Awards_%28cropped%29.png',
    'Emma': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Emma_Watson_interview_in_2017.jpg/330px-Emma_Watson_interview_in_2017.jpg',
    'Olivia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Olivia_Wilde_at_SXSW_Booksmart_Red_Carpet_%28cropped%29.jpg/330px-Olivia_Wilde_at_SXSW_Booksmart_Red_Carpet_%28cropped%29.jpg',
    'Angelina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/330px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg',
    'Marion': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Marion_Cotillard_at_2019_Cannes.jpg/330px-Marion_Cotillard_at_2019_Cannes.jpg',
    'Kylie': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Kylie_Jenner_March_2020.png/330px-Kylie_Jenner_March_2020.png',
    'Emilia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg/330px-Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg',
    'Ashley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ashley_Graham_2018.png/330px-Ashley_Graham_2018.png',
    'Margot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg/330px-Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg',
    'Priyanka': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Priyanka_Chopra_Promoting_7_khoon_Maaf.jpg/255px-Priyanka_Chopra_Promoting_7_khoon_Maaf.jpg',
    'Gal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gal_Gadot_2016_lighting_corrected.jpg/330px-Gal_Gadot_2016_lighting_corrected.jpg',
    'Gigi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gigi_Hadid._2015.jpg/330px-Gigi_Hadid._2015.jpg',
    'Kendall': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Kendall_Jenner_at_Topshop_Behind_the_Scenes_2.png/330px-Kendall_Jenner_at_Topshop_Behind_the_Scenes_2.png',
    'Kate': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kate_Upton_at_the_2011_Jets_VIP_draft_party_%28crop%29.jpg/330px-Kate_Upton_at_the_2011_Jets_VIP_draft_party_%28crop%29.jpg',
    'Adriana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Adriana_Lima_2019_by_Glenn_Francis.jpg/330px-Adriana_Lima_2019_by_Glenn_Francis.jpg',
    'Ariana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_Red_Carpet_2020.png/330px-Ariana_Grande_Grammys_Red_Carpet_2020.png',
    'Jennifer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/TIFF_2019_jlo_%281_of_1%29-2_%2848696671561%29_%28cropped%29.jpg/330px-TIFF_2019_jlo_%281_of_1%29-2_%2848696671561%29_%28cropped%29.jpg',
    'Katy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Katy_Perry_and_Greg_%2847870635411%29_%28cropped%29.jpg/330px-Katy_Perry_and_Greg_%2847870635411%29_%28cropped%29.jpg',
    'Aishwariya': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Aishwarya_Rai_Cannes_2017.jpg/330px-Aishwarya_Rai_Cannes_2017.jpg',
    'Deepika': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Deepika_Padukone_Cannes_2018_%28cropped%29.jpg/330px-Deepika_Padukone_Cannes_2018_%28cropped%29.jpg',
    'Anushka': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Anushka_Sharma_promoting_Zero.jpg/330px-Anushka_Sharma_promoting_Zero.jpg',
    'Katrina': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Katrina_Kaif_Invests_in_Nykaa%2C_a_Year_After_Launching_Kay_Beauty_on_the_Platform_2019.jpg/330px-Katrina_Kaif_Invests_in_Nykaa%2C_a_Year_After_Launching_Kay_Beauty_on_the_Platform_2019.jpg',
    'Shraddha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Shraddha_Kapoor_at_Badlapur_success_bash.jpg/330px-Shraddha_Kapoor_at_Badlapur_success_bash.jpg',
    'Alia': 'https://upload.wikimedia.org/wikipedia/commons/5/58/Alia_Bhatt_grace_the_screening_of_Netflix%E2%80%99s_film_Guilty_%282%29_%28cropped%29.jpg',
    'Kangana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kangana_Ranaut_at_2019_Cannes_%28cropped%29.jpg/330px-Kangana_Ranaut_at_2019_Cannes_%28cropped%29.jpg',
    'Madhuri': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Madhuri_Dixit_promoting_Total_Dhamaal_in_2019_%28cropped%29.jpg/330px-Madhuri_Dixit_promoting_Total_Dhamaal_in_2019_%28cropped%29.jpg',
    'Sara': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Sara_Ali_Khan_graces_Dinesh_Vijan%E2%80%99s_wedding_reception_and_cocktail_party_%2803%29_%28cropped%29.jpg',
    'Kriti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Kriti_Sanon_as_the_new_brand_ambassador_of_Gili_01.jpg/330px-Kriti_Sanon_as_the_new_brand_ambassador_of_Gili_01.jpg',
    'Taapsee': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Taapsee_Pannu_snapped_during_media_interactions.png/330px-Taapsee_Pannu_snapped_during_media_interactions.png',
    'Kiara': 'https://upload.wikimedia.org/wikipedia/commons/6/67/Kiara_Advani_walks_for_Shyamal-Bhumika_at_India_Couture_Week_2018_Day_4_%2803%29_%28cropped%29.jpg',
    'Disha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Photos-Disha-Patani-and-Aditya-Roy-Kapur-snapped-during-Malang-promotions-6.jpg/330px-Photos-Disha-Patani-and-Aditya-Roy-Kapur-snapped-during-Malang-promotions-6.jpg',
    'Yami': 'https://upload.wikimedia.org/wikipedia/commons/1/16/Yami_Gautam_grace_the_ELLE_India_Graduates_2018_event_%2801%29_%28cropped%29.jpg',
    'Bhumi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bhumi_Pednekar_promoting_Sonchiriya.jpg/330px-Bhumi_Pednekar_promoting_Sonchiriya.jpg',
    'Sunny': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/D7K_6695_-_Sunny_Leone_%286746635949%29.jpg/330px-D7K_6695_-_Sunny_Leone_%286746635949%29.jpg',
    'Shruti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shruti_Haasan_at_the_special_screening_of_the_short_film_Devi_%2832%29.jpg/330px-Shruti_Haasan_at_the_special_screening_of_the_short_film_Devi_%2832%29.jpg',
    'Mouni': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Mouni_Roy_graces_the_Star_Screen_Awards_2018_%2810%29_%28cropped%29.jpg/330px-Mouni_Roy_graces_the_Star_Screen_Awards_2018_%2810%29_%28cropped%29.jpg',
    'Sonakshi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sonakshi_Sinha_-_IIFA_2017_Green_Carpet_%2835586491213%29_%28cropped%29.jpg/330px-Sonakshi_Sinha_-_IIFA_2017_Green_Carpet_%2835586491213%29_%28cropped%29.jpg',
    'Parineeti': 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Parineeti_Chopra_at_a_promotional_event_for_Golmaal_Again_%282%29.jpg'
}

const imgDictMixed = {
    ...imgDictMale,
    ...imgDictFemale
};

let rnkLen = [Object.keys(imgDictMixed).length, Object.keys(imgDictMale).length, Object.keys(imgDictFemale).length]; // hard coded, lengths of rank lists
let category = 0; // 0 = mixed, 1 = male, 2 = female
let rnkList = []; // empty array
let pointsDict = {};


// rank sorting
function sort(reset, categ) {
    let temp;
    const len = rnkLen[categ];
    
    if (reset) { // ranks reset (lexical sort)
        for (i = 0; i < len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                if (rnkList[i][categ] > rnkList[j][categ]) {
                    temp = rnkList[i][categ];
                    rnkList[i][categ] = rnkList[j][categ];
                    rnkList[j][categ] = temp;
                }
            }
        }
    }
    else {
        for (let i = 0; i < len - 1; i++)
        for (let j = 0; j < len - i - 1; j++)
        if (pointsDict[rnkList[j][categ]][categ] <= pointsDict[rnkList[j + 1][categ]][categ]) {
            
            if ((pointsDict[rnkList[j][categ]][categ] === pointsDict[rnkList[j + 1][categ]][categ]) && (rnkList[j][categ] <= rnkList[j + 1][categ]))
            continue; // maintaing lexical order
            
            // rank swap
            temp = rnkList[j][categ];
            rnkList[j][categ] = rnkList[j + 1][categ];
            rnkList[j + 1][categ] = temp;
        }
    }
}

// fetching data
let i = 0;
for (key in imgDictMixed) {
    pointsDict[key] = [0, 0, 0]; // format: points[mixed, male, female]
    rnkList.push([key]);
    if (i < rnkLen[1])
    rnkList[i].push(key);
    else
    rnkList[i].push(key);
    i++;
    if (i === rnkLen[1])
    i = 0;
}

// call for initial lexical sort
sort(true, 0);
sort(true, 1);
sort(true, 2);

// storing data to local storage
function setData() {
    localStorage.setItem('pointsDict', JSON.stringify(pointsDict));
}

// getting data from local storage, if present
function getData() {
    for (key in localStorage['pointsDict']) {
        if (localStorage['pointsDict'][key] !== [0, 0, 0]) {
            pointsDict = JSON.parse(localStorage['pointsDict']);
            return;
        }
    }
    // for a new session
    setData();
}
getData();

// function(){clears rank}
function clrRnk(categ = -1) {
    let rnkListElement = document.querySelector('#rnkList');

    // removing all the list items
    while (rnkListElement.firstElementChild !== null)
        rnkListElement.firstElementChild.remove();

    // category points clearing
    if (categ !== -1) {
        for (let i = 0; i < rnkLen[categ]; i++) {
            pointsDict[rnkList[i][categ]][categ] = 0;
        }
    }
}

// function(){displays rank}
function displayRnk() {
    let rnkListElement = document.querySelector('#rnkList');
    let newElement;

    clrRnk();

    // creating ranked list items
    for (let i = 0; i < rnkLen[category]; i++) {
        newElement = document.createElement('li');
        newElement.innerText = `${rnkList[i][category]}\n(${pointsDict[rnkList[i][category]][category]})`;
        rnkListElement.appendChild(newElement);
    }
}

// selecting the img boxes (with label)
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

// getting the required index by loadNxt()
function getIndex(rnkList, item, categ) {
    for (let i = 0; i < rnkLen[categ]; i++) {
        if (rnkList[i][categ] === item)
            return i;
    }
    return -1; // item absent
}

// function(){loading the next set}
function loadNxt(clicked = img1, other = img2) {
    let img1Index = -1;
    let img2Index = -1;
    let clickedIndex = getIndex(rnkList, img1.lastElementChild.innerText, category);
    let otherIndex = getIndex(rnkList, img2.lastElementChild.innerText, category);

    // computing new indices
    do {
        img1Index = Math.floor(Math.random() * rnkLen[category]);
        img2Index = Math.floor(Math.random() * rnkLen[category]);
    } while (img1Index === img2Index || img1Index === clickedIndex || img1Index === otherIndex || img2Index === clickedIndex || img2Index === otherIndex);

    // loading images
    img1.innerHTML = `<img src="${imgDictMixed[rnkList[img1Index][category]]}" alt=""><div>${rnkList[img1Index][category]}</div>`;
    img2.innerHTML = `<img src="${imgDictMixed[rnkList[img2Index][category]]}" alt=""><div>${rnkList[img2Index][category]}</div>`;
}

loadNxt(); // first set for new session

// img event management
img1.addEventListener('click', function () {
    pointsDict[`${img1.lastElementChild.innerText}`][category] += 10;
    pointsDict[`${img2.lastElementChild.innerText}`][category] -= 5;
    sort(false, category);
    displayRnk();
    setData();
    loadNxt(img1, img2);
})
img2.addEventListener('click', function () {
    pointsDict[`${img2.lastElementChild.innerText}`][category] += 10;
    pointsDict[`${img1.lastElementChild.innerText}`][category] -= 5;
    sort(false, category);
    displayRnk();
    setData();
    loadNxt(img2, img1);
})

// category event management
let mixedBtn = document.querySelector('#mixed');
let maleBtn = document.querySelector('#male');
let femaleBtn = document.querySelector('#female');

function setBtns(btn1, btn2, btn3) {
    btn1.style.color = "darkred";
    btn2.style.color = "darkblue";
    btn3.style.color = "darkblue";
}
setBtns(mixedBtn, maleBtn, femaleBtn); // new session

mixedBtn.addEventListener('click', function () {
    category = 0;
    sort(false, category);
    displayRnk();
    loadNxt();
    setBtns(mixedBtn, maleBtn, femaleBtn);
})
maleBtn.addEventListener('click', function () {
    category = 1;
    sort(false, category);
    displayRnk();
    loadNxt();
    setBtns(maleBtn, mixedBtn, femaleBtn);
})
femaleBtn.addEventListener('click', function () {
    category = 2;
    sort(false, category);
    displayRnk();
    loadNxt();
    setBtns(femaleBtn, mixedBtn, maleBtn);
})

// btn event management
let rnkBtn = document.querySelector('#rnkBtn');
let rnkBox = document.querySelector('#rnkBox');
let categoryBtn = document.querySelector('#categoryBtn');
let categoryBox = document.querySelector('#categoryBox');
let rnkVisBool = false;
let categoryVisBool = false;

rnkBtn.addEventListener('click', function () {
    if (rnkVisBool) {
        rnkBox.style.display ='none';
        rnkVisBool = false;
    }
    else {
        rnkBox.style.display ='initial';
        rnkVisBool = true;
    }
})

categoryBtn.addEventListener('click', function () {
    if (categoryVisBool) {
        categoryBox.style.display ='none';
        categoryVisBool = false;
    }
    else {
        categoryBox.style.display ='initial';
        categoryVisBool = true;
    }
})

// clear data event management
let clrBtn = document.querySelector('#clrBtn');
clrBtn.addEventListener('click', function () {
    clrRnk(category);
    sort(true, category);
    displayRnk();
    setData();
})