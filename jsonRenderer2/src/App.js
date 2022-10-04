import React, { useState, useEffect } from 'react';
import './App.css';
import styles from './style.css';
import { Container } from './Container';
import ErrorBoundary from './ErrorBoundary';
import Data from './content';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {JsonEditor} from "react-jsondata-editor";
import {ZoomIn, ZoomOut, CropFreeOutlined, ZoomOutMapOutlined, CloudDownloadOutlined, FullscreenExitOutlined, Code, Save } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

function App() {

  const [json, setJson] = useState(JSON.stringify(Data, null, ' '));
  const [data, setData] = useState(Data);
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [save, setSave] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null)

  var imageArray = [];

  useEffect(()=>{
    if(save === true){
      setData(JSON.parse(json));
    }
  },[json, save]);

  useEffect(()=>{
    console.log("data", data);
    if(data === null || !json.includes("template") || data.template.length === 1){
      setData(Data);
      setJson(JSON.stringify(Data, null, ``));
    }
  },[data]);

  const heading2 = (content) =>{
  if (content){
    return (<h2>{content}</h2>)
  }
}

function NewlineText(props) {
  const text = props.text;
  const newText = text.split('\n').map(str => <p className='content'>{str}</p>);
  return newText;
}

const paragraph = (content)=>{
  if (content){
    return (<NewlineText text={content} ></NewlineText>)
  }
}

//function to check base64 encoding
const isBase64 = (str) => {
  if (str ==='' || str.trim() ===''){ return false; }
  try {
      return btoa(atob(str)) === str;
  } catch (err) {
      return false;
  }  
}

//function to decode base64
const Base64ToString = (encode) => {
  let buff = new Buffer(encode, 'base64');
  let decoded = buff.toString('ascii');
  return decoded;
} 

//function to render encoded image file and https image
const renderBase64Image = (source, alt_text, height, width) => {
  if(source.startsWith("https") || source.startsWith("http")){
    return (
      <img src={source} alt={alt_text || "image"} className="list-img"  height={height || "400px"} width={width || "650px"}/>
    );
  }
  else if(isBase64(source)===true){
    const decoded = Base64ToString(source);
    const s = `data:image/png;base64,${source}`;
    return(
      <img src={s} alt={alt_text || "image"} className="list-img"  height={height || "400px"} width={width || "650px"}/>
    );
  }
}

//function used to convert csv content to json
const CSVToJSON = (csv) => {
  const lines = csv.split('\n');
  const keys = lines[0].split(',');
  return lines.slice(1).map(line => {
      return line.split(',').reduce((acc, cur, i) => {
          const toAdd = {};
          toAdd[keys[i]] = cur;
          return { ...acc, ...toAdd };
      }, {});
  });
};

//function used to render table heading
const ThData =(column)=>{
  
return column.map((data)=>{
  return <th key={data}>{data}</th>
});
}

//function used to render table data
const tdData = (TableData, column) =>{
 
return TableData.map((data, i)=>{
  return(
    <tr>
      {
        column.map((v)=>{
          if(i%2===0){
            return <td className="table-column-row" style={{"background": "#f8f5f5"}}>{data[v]}</td>
          }
          else{
            return <td className="table-column-row" >{data[v]}</td>
          }
        })
      }
    </tr>
  );
})
}

//function used to render csv data in a tabular form
//first converting the csv data to json
//the csv data is obtained from fetching the url
const renderCsv  = (url) => {
  if(data === null || url.startsWith("https") || url.startsWith("http")){
    const sampleData = `datasetName,about,link,categoryName,cloud,vintage
    Microbiome Project,American Gut (Microbiome Project),https://github.com/biocore/American-Gut,Biology,GitHub,NA
    GloBI,Global Biotic Interactions (GloBI),https://github.com/jhpoelen/eol-globi-data/wiki#accessing-species-interaction-data,Biology,GitHub,NA
    Global Climate,Global Climate Data Since 1929,http://en.tutiempo.net/climate,Climate/Weather,,1929
    CommonCraw 2012,3.5B Web Pages from CommonCraw 2012,http://www.bigdatanews.com/profiles/blogs/big-data-set-3-5-billion-web-pages-made-available-for-all-of-us,Computer Networks,,2012
    Indiana Webclicks,53.5B Web clicks of 100K users in Indiana Univ.,http://cnets.indiana.edu/groups/nan/webtraffic/click-dataset/,Computer Networks,,NA
    Criteo click-through,Criteo click-through data,http://labs.criteo.com/2015/03/criteo-releases-its-new-dataset/,Computer Networks,,NA
    ICWSM 2009,ICWSM Data Challenge (since 2009),http://icwsm.cs.umbc.edu/,Data Challenges,,2009
    KDD Cup,KDD Cup by Tencent 2012,http://www.kddcup2012.org/,Data Challenges,,2012
    Localytics Data,Localytics Data Visualization Challenge,https://github.com/localytics/data-viz-challenge,Data Challenges,GitHub,NA
    Yelp Dataset,Yelp Dataset Challenge,http://www.yelp.com/dataset_challenge,Data Challenges,,NA
    Bruteforce Database,Bruteforce Database,https://github.com/duyetdev/bruteforce-database,Data Challenges,GitHub,NA
    Countries,List of all countries in all languages,https://github.com/umpirsky/country-list,GIS,GitHub,NA
    TwoFishes,TwoFishes - Foursquare's coarse geocoder,https://github.com/foursquare/twofishes,GIS,GitHub,NA
    World countries,World countries in multiple formats,https://github.com/mledoze/countries,GIS,GitHub,NA
    Cities and countries,A list of cities and countries contributed by community,https://github.com/caesar0301/awesome-public-datasets/blob/master/Government.rst,Government,GitHub,NA
    Ebola cases,Number of Ebola Cases and Deaths in Affected Countries (2014),https://data.hdx.rwlabs.org/dataset/ebola-cases-2014,Healthcare,,2014
    eBay Online,eBay Online Auctions (2012),http://www.modelingonlineauctions.com/datasets,Machine Learning,,2012
    New Yorker Captions,New Yorker caption contest ratings,https://github.com/nextml/caption-contest-data,Machine Learning,GitHub,NA
    Cooper-Hewitt's Collection,Cooper-Hewitt's Collection Database,https://github.com/cooperhewitt/collection,Museums,GitHub,NA
    Minneapolis Institute,Minneapolis Institute of Arts metadata,https://github.com/artsmia/collection,Museums,GitHub,NA
    Tate Collection,Tate Collection metadata,https://github.com/tategallery/collection,Museums,GitHub,NA
    Google 5gram,"Google Web 5gram (1TB, 2006)",https://catalog.ldc.upenn.edu/LDC2006T13,Natural Language,,2006
    "Arabic, 30K articles","SaudiNewsNet Collection of Saudi Newspaper Articles (Arabic, 30K articles)",https://github.com/ParallelMazen/SaudiNewsNet,Natural Language,GitHub,NA
    USENET postings,USENET postings corpus of 2005~2011,http://www.psych.ualberta.ca/~westburylab/downloads/usenetcorpus.download.html,Natural Language,,2005
    Datahub.io,Datahub.io,https://datahub.io/dataset,Search Engines,,NA
    Twitter Scrape CIKM,Cheng-Caverlee-Lee September 2009 - January 2010 Twitter Scrape,https://archive.org/details/twitter_cikm_2010,Social Networks,,2009
    Facebook Data,Facebook Data Scrape (2005),https://archive.org/details/oxford-2005-facebook-matrix,Social Networks,,2005
    LAW graphs,Facebook Social Networks from LAW (since 2007),http://law.di.unimi.it/datasets.php,Social Networks,,2007
    Foursquare from,Foursquare from UMN/Sarwat (2013),https://archive.org/details/201309_foursquare_dataset_umn,Social Networks,,2013
    Skytrax' Air,Skytrax' Air Travel Reviews Dataset,https://github.com/quankiquanki/skytrax-reviews-dataset,Social Networks,GitHub,NA
    Twitter Scrape,Twitter Scrape Calufa May 2011,http://archive.org/details/2011-05-calufa-twitter-sql,Social Networks,,2011
    Youtube Video,"Youtube Video Social Graph in 2007,2008",http://netsg.cs.sfu.ca/youtubedata/,Social Networks,,2007
    FBI Hate Crime 2013,FBI Hate Crime 2013 - aggregated data,https://github.com/emorisse/FBI-Hate-Crime-Statistics/tree/master/2013,Social Sciences,GitHub,2013
    GSS,General Social Survey (GSS) since 1972,http://gss.norc.org,Social Sciences,,1972
    Texas Inmates,Texas Inmates Executed Since 1984,http://www.tdcj.state.tx.us/death_row/dr_executed_offenders.html,Social Sciences,,1984
    Formula 1,"Ergast Formula 1, from 1950 up to date (API)",http://ergast.com/mrd/db,Sports,,1950
    Pinhooker: Thoroughbred,Pinhooker: Thoroughbred Bloodstock Sale Data,https://github.com/phillc73/pinhooker,Sports,GitHub,NA
    Airlines OD,Airlines OD Data 1987-2008,http://stat-computing.org/dataexpo/2009/the-data.html,Transportation,,2008
    BSS,Bike Share Systems (BSS) collection,https://github.com/BetaNYC/Bike-Share-Data-Best-Practices/wiki/Bike-Share-Data-Systems,Transportation,GitHub,NA
    NYC Taxi,NYC Taxi Trip Data 2009-,http://www.nyc.gov/html/tlc/html/about/trip_record_data.shtml,Transportation,,2009
    FOIA/FOILed,NYC Taxi Trip Data 2013 (FOIA/FOILed),https://archive.org/details/nycTaxiTripData2013,Transportation,,2013
    NYC Uber,NYC Uber trip data April 2014 to September 2014,https://github.com/fivethirtyeight/uber-tlc-foil-response,Transportation,GitHub,2014
    Open Traffic,Open Traffic collection,https://github.com/graphhopper/open-traffic-collection,Transportation,GitHub,NA
    Plane Crash,"Plane Crash Database, since 1920",http://www.planecrashinfo.com/database.htm,Transportation,,1920
    U.S. Domestic,U.S. Domestic Flights 1990 to 2009,http://academictorrents.com/details/a2ccf94bbb4af222bf8e69dad60a68a29f310d9a,Transportation,,2009
    U.S. Freight,U.S. Freight Analysis Framework since 2007,http://ops.fhwa.dot.gov/freight/freight_analysis/faf/index.htm,Transportation,,2007
    Data Packaged,Data Packaged Core Datasets,https://github.com/datasets/,Complementary Collections,GitHub,NA
    USDA PLANTS,U.S. Department of Agriculture's PLANTS Database,http://www.plants.usda.gov/dl_all.html,Agriculture,,NA
    ClueWeb09,ClueWeb09 - 1B web pages,http://lemurproject.org/clueweb09/,Computer Networks,,2009
    ClueWeb12,ClueWeb12 - 733M web pages,http://lemurproject.org/clueweb12/,Computer Networks,,2012
    DEFRA Projects,DEFRA Science and Research Projects data,http://randd.defra.gov.uk/,Energy,,NA
    UK-DALE,UK Domestic Appliance-Level Electricity (UK-DALE) dataset,http://www.doc.ic.ac.uk/~dk3810/data/,Energy,,2016
    Landsat 8,Landsat 8 on AWS,https://aws.amazon.com/public-data-sets/landsat/,GIS,Amazon,NA
    Reverse Geocode,Simple but fast reverse geocoding up to city granularitiy level,https://github.com/kno10/reversegeocode,GIS,GitHub,NA
    Faces Database,10k US Adult Faces Database,http://wilmabainbridge.com/facememorability2.html,Image Processing,,NA
    ClueWeb09 FACC,ClueWeb09 FACC,http://lemurproject.org/clueweb09/FACC1/,Natural Language,,2009
    ClueWeb12 FACC,ClueWeb12 FACC,http://lemurproject.org/clueweb12/FACC1/,Natural Language,,2012
    Google Ngrams,Google Books Ngrams (2.2TB),https://aws.amazon.com/datasets/google-books-ngrams/,Natural Language,Amazon,NA
    EDRM Enron,"EDRM Enron EMail of 151 users, hosted on S3",https://aws.amazon.com/datasets/enron-email-data/,Social Networks,Amazon,NA
    GetGlue,GetGlue - users rating TV shows,http://getglue-data.s3.amazonaws.com/getglue_sample.tar.gz,Social Networks,,NA
    Twitter RepLab,Twitter Data for Online Reputation Management,http://nlp.uned.es/replab2013/,Social Networks,,2013`;
    url = sampleData;
  }
  const TableData = CSVToJSON(`${url}`);
  const column = Object.keys(TableData[0]);

  return (
    <table className='table'>
      <thead>
       <tr style={{"background": "#E9E9ED"}}>{ThData(column)}</tr>
      </thead>
      <tbody>
      {tdData(TableData, column)}
      </tbody>
     </table>
  );
}

//function used to creaate a download event for downloading a csv file
const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType })

  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}

//function used to download a csv table
//first by fetching the csv content from the url
const exportToCsv = async (e, url) => {
  e.preventDefault();
  if(data === null || url.startsWith("https") || url.startsWith("http")){
    url = `datasetName,about,link,categoryName,cloud,vintage
    Microbiome Project,American Gut (Microbiome Project),https://github.com/biocore/American-Gut,Biology,GitHub,NA
    GloBI,Global Biotic Interactions (GloBI),https://github.com/jhpoelen/eol-globi-data/wiki#accessing-species-interaction-data,Biology,GitHub,NA
    Global Climate,Global Climate Data Since 1929,http://en.tutiempo.net/climate,Climate/Weather,,1929
    CommonCraw 2012,3.5B Web Pages from CommonCraw 2012,http://www.bigdatanews.com/profiles/blogs/big-data-set-3-5-billion-web-pages-made-available-for-all-of-us,Computer Networks,,2012
    Indiana Webclicks,53.5B Web clicks of 100K users in Indiana Univ.,http://cnets.indiana.edu/groups/nan/webtraffic/click-dataset/,Computer Networks,,NA
    Criteo click-through,Criteo click-through data,http://labs.criteo.com/2015/03/criteo-releases-its-new-dataset/,Computer Networks,,NA
    ICWSM 2009,ICWSM Data Challenge (since 2009),http://icwsm.cs.umbc.edu/,Data Challenges,,2009
    KDD Cup,KDD Cup by Tencent 2012,http://www.kddcup2012.org/,Data Challenges,,2012
    Localytics Data,Localytics Data Visualization Challenge,https://github.com/localytics/data-viz-challenge,Data Challenges,GitHub,NA
    Yelp Dataset,Yelp Dataset Challenge,http://www.yelp.com/dataset_challenge,Data Challenges,,NA
    Bruteforce Database,Bruteforce Database,https://github.com/duyetdev/bruteforce-database,Data Challenges,GitHub,NA
    Countries,List of all countries in all languages,https://github.com/umpirsky/country-list,GIS,GitHub,NA
    TwoFishes,TwoFishes - Foursquare's coarse geocoder,https://github.com/foursquare/twofishes,GIS,GitHub,NA
    World countries,World countries in multiple formats,https://github.com/mledoze/countries,GIS,GitHub,NA
    Cities and countries,A list of cities and countries contributed by community,https://github.com/caesar0301/awesome-public-datasets/blob/master/Government.rst,Government,GitHub,NA
    Ebola cases,Number of Ebola Cases and Deaths in Affected Countries (2014),https://data.hdx.rwlabs.org/dataset/ebola-cases-2014,Healthcare,,2014
    eBay Online,eBay Online Auctions (2012),http://www.modelingonlineauctions.com/datasets,Machine Learning,,2012
    New Yorker Captions,New Yorker caption contest ratings,https://github.com/nextml/caption-contest-data,Machine Learning,GitHub,NA
    Cooper-Hewitt's Collection,Cooper-Hewitt's Collection Database,https://github.com/cooperhewitt/collection,Museums,GitHub,NA
    Minneapolis Institute,Minneapolis Institute of Arts metadata,https://github.com/artsmia/collection,Museums,GitHub,NA
    Tate Collection,Tate Collection metadata,https://github.com/tategallery/collection,Museums,GitHub,NA
    Google 5gram,"Google Web 5gram (1TB, 2006)",https://catalog.ldc.upenn.edu/LDC2006T13,Natural Language,,2006
    "Arabic, 30K articles","SaudiNewsNet Collection of Saudi Newspaper Articles (Arabic, 30K articles)",https://github.com/ParallelMazen/SaudiNewsNet,Natural Language,GitHub,NA
    USENET postings,USENET postings corpus of 2005~2011,http://www.psych.ualberta.ca/~westburylab/downloads/usenetcorpus.download.html,Natural Language,,2005
    Datahub.io,Datahub.io,https://datahub.io/dataset,Search Engines,,NA
    Twitter Scrape CIKM,Cheng-Caverlee-Lee September 2009 - January 2010 Twitter Scrape,https://archive.org/details/twitter_cikm_2010,Social Networks,,2009
    Facebook Data,Facebook Data Scrape (2005),https://archive.org/details/oxford-2005-facebook-matrix,Social Networks,,2005
    LAW graphs,Facebook Social Networks from LAW (since 2007),http://law.di.unimi.it/datasets.php,Social Networks,,2007
    Foursquare from,Foursquare from UMN/Sarwat (2013),https://archive.org/details/201309_foursquare_dataset_umn,Social Networks,,2013
    Skytrax' Air,Skytrax' Air Travel Reviews Dataset,https://github.com/quankiquanki/skytrax-reviews-dataset,Social Networks,GitHub,NA
    Twitter Scrape,Twitter Scrape Calufa May 2011,http://archive.org/details/2011-05-calufa-twitter-sql,Social Networks,,2011
    Youtube Video,"Youtube Video Social Graph in 2007,2008",http://netsg.cs.sfu.ca/youtubedata/,Social Networks,,2007
    FBI Hate Crime 2013,FBI Hate Crime 2013 - aggregated data,https://github.com/emorisse/FBI-Hate-Crime-Statistics/tree/master/2013,Social Sciences,GitHub,2013
    GSS,General Social Survey (GSS) since 1972,http://gss.norc.org,Social Sciences,,1972
    Texas Inmates,Texas Inmates Executed Since 1984,http://www.tdcj.state.tx.us/death_row/dr_executed_offenders.html,Social Sciences,,1984
    Formula 1,"Ergast Formula 1, from 1950 up to date (API)",http://ergast.com/mrd/db,Sports,,1950
    Pinhooker: Thoroughbred,Pinhooker: Thoroughbred Bloodstock Sale Data,https://github.com/phillc73/pinhooker,Sports,GitHub,NA
    Airlines OD,Airlines OD Data 1987-2008,http://stat-computing.org/dataexpo/2009/the-data.html,Transportation,,2008
    BSS,Bike Share Systems (BSS) collection,https://github.com/BetaNYC/Bike-Share-Data-Best-Practices/wiki/Bike-Share-Data-Systems,Transportation,GitHub,NA
    NYC Taxi,NYC Taxi Trip Data 2009-,http://www.nyc.gov/html/tlc/html/about/trip_record_data.shtml,Transportation,,2009
    FOIA/FOILed,NYC Taxi Trip Data 2013 (FOIA/FOILed),https://archive.org/details/nycTaxiTripData2013,Transportation,,2013
    NYC Uber,NYC Uber trip data April 2014 to September 2014,https://github.com/fivethirtyeight/uber-tlc-foil-response,Transportation,GitHub,2014
    Open Traffic,Open Traffic collection,https://github.com/graphhopper/open-traffic-collection,Transportation,GitHub,NA
    Plane Crash,"Plane Crash Database, since 1920",http://www.planecrashinfo.com/database.htm,Transportation,,1920
    U.S. Domestic,U.S. Domestic Flights 1990 to 2009,http://academictorrents.com/details/a2ccf94bbb4af222bf8e69dad60a68a29f310d9a,Transportation,,2009
    U.S. Freight,U.S. Freight Analysis Framework since 2007,http://ops.fhwa.dot.gov/freight/freight_analysis/faf/index.htm,Transportation,,2007
    Data Packaged,Data Packaged Core Datasets,https://github.com/datasets/,Complementary Collections,GitHub,NA
    USDA PLANTS,U.S. Department of Agriculture's PLANTS Database,http://www.plants.usda.gov/dl_all.html,Agriculture,,NA
    ClueWeb09,ClueWeb09 - 1B web pages,http://lemurproject.org/clueweb09/,Computer Networks,,2009
    ClueWeb12,ClueWeb12 - 733M web pages,http://lemurproject.org/clueweb12/,Computer Networks,,2012
    DEFRA Projects,DEFRA Science and Research Projects data,http://randd.defra.gov.uk/,Energy,,NA
    UK-DALE,UK Domestic Appliance-Level Electricity (UK-DALE) dataset,http://www.doc.ic.ac.uk/~dk3810/data/,Energy,,2016
    Landsat 8,Landsat 8 on AWS,https://aws.amazon.com/public-data-sets/landsat/,GIS,Amazon,NA
    Reverse Geocode,Simple but fast reverse geocoding up to city granularitiy level,https://github.com/kno10/reversegeocode,GIS,GitHub,NA
    Faces Database,10k US Adult Faces Database,http://wilmabainbridge.com/facememorability2.html,Image Processing,,NA
    ClueWeb09 FACC,ClueWeb09 FACC,http://lemurproject.org/clueweb09/FACC1/,Natural Language,,2009
    ClueWeb12 FACC,ClueWeb12 FACC,http://lemurproject.org/clueweb12/FACC1/,Natural Language,,2012
    Google Ngrams,Google Books Ngrams (2.2TB),https://aws.amazon.com/datasets/google-books-ngrams/,Natural Language,Amazon,NA
    EDRM Enron,"EDRM Enron EMail of 151 users, hosted on S3",https://aws.amazon.com/datasets/enron-email-data/,Social Networks,Amazon,NA
    GetGlue,GetGlue - users rating TV shows,http://getglue-data.s3.amazonaws.com/getglue_sample.tar.gz,Social Networks,,NA
    Twitter RepLab,Twitter Data for Online Reputation Management,http://nlp.uned.es/replab2013/,Social Networks,,2013`;
  }
  downloadFile({
    data: [...url].join('\n'),
    fileName: 'table.csv',
    fileType: 'text/csv',
  })
}

//json editor test save
const textSave = (e)=> {
  setSave(false);
  setJson(e.target.value);
}

//function used to upload any images using ipfs network blockchain technologies
const pushImage = async (element, index) => {
  try {
    const created = await client.add(selectedImage);
    const url = `https://ipfs.infura.io/ipfs/${created.path}`;
    const obj={
      image_title : "",
      image_name : `${url}`,
      image_description: "",
      height: "100%",
      width: "100%"
    }
    const sample = data;
    sample.template[index].images.push(obj);
    setData(sample);
    setJson(JSON.stringify(data, null, ' '));
    setSelectedImage(null);
  } catch (error) {
    console.log(error.message);
  }
}

const renderData = () => {
    if(data.template){
    return data.template.map((element, index) => {
      if(index===0){
        return(
          <section id="first-section">
            {heading2(element.heading)}
            {paragraph(element.top_text)}
            <div className={element.table ? 'wrapper' : 'non-wrapper'}>
               { element.table &&
                <Fab size="small" className="preview-button" aria-label="Fullscreen" onClick = {(e) => exportToCsv(e,element.table)} >
                 <CloudDownloadOutlined />
               </Fab>}
               {element.table && renderCsv(element.table)}
             </div>
             <br />
            <div className={element.images.length>0 ? 'wrapper' : 'non-wrapper'}>
            <div className='container'>
            { element.images && 
              element.images.map((ele, i) => {
                return(
                  <div className='item'>
                    <p id='image-tag' className='container' style={{"padding": "0", "margin": "0", "fontWeight": "bolder", "color": "#F5922E", "fontSize":"16px"}}>{ele.image_title && ele.image_title}</p>
                    <TransformWrapper
                        initialScale={1}
                        initialPositionX={0}
                        initialPositionY={0}
                      >
                        {({ zoomIn, zoomOut, resetTransform, centerView, ...rest }) => {
                          return(
                            <div> 
                             <div className='zoom-control-buttons' style={{"display": "block", "marginTop": "10px"}}> 
                               <ZoomIn className='zoom-control-buttons' style={{"margin": "2px"}} onClick={() => zoomIn()}/>
                               <ZoomOut className='zoom-control-buttons' style={{"margin": "2px"}} onClick={() => zoomOut()}/>
                               <ZoomOutMapOutlined className='zoom-control-buttons' style={{"margin": "2px"}} onClick={() => resetTransform()}/>
                               <CropFreeOutlined className='zoom-control-buttons' style={{"margin": "2px"}} onClick={() => centerView()}/>  
                             </div>
                             <TransformComponent>
                                {ele.image_name &&  renderBase64Image(ele.image_name, ele.image_title, ele.height, ele.width)}  
                             </TransformComponent>                             
                             </div>
                          )
                        }}
                    </TransformWrapper> 
                    <p id='image-tag2' className='container' style={{"padding": "0", "margin": "0", "fontWeight": "lighter"}}>{ele.image_description && ele.image_description}</p>
                    
                  </div>                
                );
              })
            }
            </div>
            </div>
            {paragraph(element.bottom_text)}

            <input
              type="file"
              name="myImage"
              onChange={(e) => {
              setSelectedImage(e.target.files[0]);
              }}
            />
            {selectedImage &&
              <button style={{"backgroundColor": "#E89746", "color": "white", "padding": "10px", "margin": "10px", "borderRadius": "8px"}} 
               onClick={()=> {
               pushImage(element, index);
              }}>Save</button> 
            }
          </section>
        );
      } else {
        return(
          <section>
            {heading2(element.heading)}
            {paragraph(element.top_text)}
            <div className={element.table ? 'wrapper' : 'non-wrapper'}>
              { element.table &&
                <Fab size="small" className="preview-button" aria-label="Fullscreen" onClick = {(e) => exportToCsv(e,element.table)} >
                 <CloudDownloadOutlined />
               </Fab>}
               {element.table && renderCsv(element.table)}
             </div>
             <br />
            <div className={element.images.length>0 ? 'wrapper' : 'non-wrapper'}>
            <div className='container'>
            { element.images &&
              element.images.map((ele, i) => {
                return(
                  <div className='item' style={{"paddingTop": "25px", "paddingLeft":"10px"}}>
                  <p id='image-tag' className='container' style={{"padding-left": "75px", "margin": "0", "fontWeight": "bolder", "color": "#F5922E", "fontSize":"16px"}}>{ele.image_title && ele.image_title}</p>
                    <TransformWrapper
                        initialScale={1}                       
                      >
                        {({ zoomIn, zoomOut, resetTransform, centerView, ...rest }) => {
                          return(
                            <div> 
                             <div className='zoom-control-buttons' style={{"display": "block", "marginTop": "10px"}}> 
                               <ZoomIn className='zoom-control-buttons' style={{"margin": "2px"}} onClick={() => zoomIn()}/>
                               <ZoomOut className='zoom-control-buttons' style={{"margin": "2px"}} onClick={() => zoomOut()}/>
                               <ZoomOutMapOutlined className='zoom-control-buttons' style={{"margin": "2px"}} onClick={() => resetTransform()}/>
                               <CropFreeOutlined className='zoom-control-buttons' style={{"margin": "2px"}} onClick={() => centerView()}/>  
                             </div>
                             <TransformComponent> 
                             {ele.image_name && renderBase64Image(ele.image_name, ele.image_title, ele.height, ele.width)}
                             </TransformComponent>                             
                             </div>
                          )
                        }}
                    </TransformWrapper>                    
                  <p id='image-tag2' className='container' style={{"padding": "0", "margin": "0", "fontWeight": "lighter"}}>{ele.image_description && ele.image_description}</p>               
                  </div>                
                );
              })
            }
            
            </div>
            </div>
            {paragraph(element.bottom_text)}
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
              setSelectedImage(e.target.files[0]);
              }}
            />
            {selectedImage &&
              <button style={{"backgroundColor": "#E89746", "color": "white", "padding": "10px", "margin": "10px", "borderRadius": "8px"}} 
               onClick={()=> {
               pushImage(element, index);
              }}>Save</button> 
            }
          </section>
        );
      }
    });
  }
}

  return (
    <div style={{ width: "calc(100% - 10px)" }}>

        <Container
            padding = "30px 30px"
            minHeight="50%"
            height="auto"
            margin = "0"
        >
      <div style={{ "display": "flex" }}>

      {toggle && toggle2 &&
        
        <div style={{ position: "sticky", flex: "0.6", height : "auto", border: "solid 1px #dddddd"}}>
          <JsonEditor jsonObject={json} onChange={(value)=> {
              setJson(value);
              setSave(false);
              console.log(JSON.parse(value));
            }}/>
        </div>

      }

      {toggle && !toggle2 &&

        <div style={{ position: "sticky", flex: "0.6", height : "auto", border: "solid 1px #dddddd"}}>
          <div className={styles.jsonContainer}>
            <textarea value={json} onChange={textSave}/>
          </div>
        </div>

      }
      
        <div style={{ flex: "0.01" }}>
          <FullscreenExitOutlined onClick={()=> setToggle(!toggle)}/>
          <Code onClick={()=> setToggle2(!toggle2)}/>
          <Save onClick={()=> setSave(true)} />
        </div>
            
        <div style={{ "flex": "1", "overflowY": "auto" }} id="main-container">
         
          <h1 id="BM-t1">{data.engine_name}</h1>

          {renderData()}
        
        </div>
            </div>
        </Container>
        
    </div>
    
  );
}

export default App;


// {selectedImage && (
//   <div>
//   <img alt="not fount" className="list-img" width={"650px"} height={"400px"} src={URL.createObjectURL(selectedImage)} />
//   <br />
//   <button style={{"backgroundColor": "#E89746", "color": "white", "padding": "10px", "margin": "10px", "borderRadius": "8px"}} onClick={()=>setSelectedImage(null)}>Remove</button>
//   </div>
// )} 