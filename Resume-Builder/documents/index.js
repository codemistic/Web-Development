module.exports = (values) => {
	const {
		// Profile-Information
		firstname,
		lastname,
		email,
		phone,
		website,
		github,
		linkedin,
		twitter,
		facebook,
		instagram,

		// Education Information
		college,
		fromyear1,
		toyear1,
		qualification1,
		description1,
		school,
		fromyear2,
		toyear2,
		qualification2,
		description2,

		// Project Information...
		title1,
		link1,
		projectDescription1,
		title2,
		link2,
		projectDescription2,
		title3,
		link3,
		projectDescription3,

		// Experience Information
		institute1,
		position1,
		duration1,
		experienceDescription1,
		institute2,
		position2,
		duration2,
		experienceDescription2,

		// Extra Information
		skill1,
		skill2,
		skill3,
		skill4,
		skill5,
		skill6,
		interest1,
		interest2,
		interest3,
		interest4,
		interest5,
		interest6,
	} = values;

	let htmlTemplate = `
  <!DOCTYPE html>
    <html>
    <head>
    <title>${firstname}'s Resume</title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet">
	<style>
	* {
		box-sizing: border-box;
		transition: 0.35s ease;
		font-style: normal;
	  }
	  .rela-block {
		width: 100%;
		display: block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .rela-inline {
		display: inline-block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .floated {
		display: inline-block;
		position: relative;
		margin: false;
		top: ;
		left: ;
		right: ;
		bottom: ;
		float: left;
	  }
	  .abs-center {
		display: false;
		position: absolute;
		margin: false;
		top: 50%;
		left: 50%;
		right: false;
		bottom: false;
		-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
		text-align: center;
		width: 88%;
		font-style: normal;
	  }
	  body {
		font-family: 'Roboto Slab';
		font-size: 18px;
		letter-spacing: 0px;
		font-weight: 400;
		line-height: 28px;
		background-size: cover;
		font-style: normal;
	  }
	  
	  .caps {
		text-transform: uppercase;
	  }
	  .justified {
		text-align: justify;
	  }
	  p.light {
		color: #777;
		font-size: 14px;
		font-style: normal;
	  }
	  h2 {
		font-family: 'Roboto Slab', serif;
		font-size: 30px;
		letter-spacing: 5px;
		font-weight: 600;
		line-height: 40px;
		color: #000;
		font-style: normal;
	  }
	  h3 {
		font-family: 'Roboto Slab', serif;
		font-size: 21px;
		letter-spacing: 1px;
		font-weight: 600;
		line-height: 28px;
		color: #000;
	  }
	  .page {
		width: 90%;
		max-width: 1200px;
		margin: 80px auto;
		background-color: #fff;
		box-shadow: 6px 10px 28px 0px rgba(0,0,0,0.4);
	  }
	  .top-bar {
		height: 220px;
		background-color: #848484;
		color: #fff;
	  }
	  .name {
		display: false;
		position: absolute;
		margin: false;
		top: false;
		left: calc(350px + 5%);
		right: 0;
		bottom: 0;
		height: 120px;
		text-align: center;
		font-family: 'Roboto Slab';
		font-size: 58px;
		letter-spacing: 8px;
		font-weight: 100;
		line-height: 60px;
		font-style: normal;
	  }
	  .name div {
		width: 94%;
	  }
	  .side-bar {
		display: false;
		position: absolute;
		margin: false;
		top: 60px;
		left: 2%;
		right: false;
		bottom: 0;
		width: 380px;
		background-color: #f7e0c1;
		padding: 320px 30px 50px;
	  }
	  .mugshot {
		display: false;
		position: absolute;
		margin: false;
		top: 50px;
		left: 70px;
		right: false;
		bottom: false;
		height: 210px;
		width: 210px;
	  }
	  .mugshot .logo {
		margin: -23px;
	  }
	  .logo {
		display: false;
		position: absolute;
		margin: false;
		top: 0;
		left: 0;
		right: false;
		bottom: false;
		z-index: 100;
		margin: 0;
		color: #000;
		height: 250px;
		width: 250px;
	  }
	  .logo .logo-svg {
		height: 100%;
		width: 100%;
		stroke: #000;
		cursor: pointer;
	  }
	  .logo .logo-text {
		display: false;
		position: absolute;
		margin: false;
		top: 60%;
		left: ;
		right: 20%;
		bottom: ;
		cursor: pointer;
		font-family: 'Roboto Slab', serif;
		font-size: 60px;
		letter-spacing: 0px;
		font-weight: 400;
		line-height: 58.333333333333336px;
		font-style: normal;
	  }
	  .social {
		padding-left: 10px;
		margin-bottom: 0px;
		cursor: pointer;
	  }
	  
	  .side-header {
		font-family: 'Roboto Slab', serif;
		font-size: 18px;
		letter-spacing: 4px;
		font-weight: 600;
		line-height: 28px;
		margin: 60px auto 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid #888;
	  }
	  .list-thing {
		padding-left: 20px;
		margin-bottom: 5px;
	  }
	  .content-container {
		margin-right: 0;
		width: calc(95% - 350px);
		padding: 25px 40px 50px;
	  }
	  .content-container > * {
		margin: 0 auto 25px;
	  }
	  .content-container > h3 {
		margin: 0 auto 5px;
	  }
	  .content-container > p.long-margin {
		margin: 0 auto 50px;
	  }
	  .title {
		width: 80%;
		text-align: center;
	  }
	  .separator {
		width: 300px;
		height: 2px;
		background-color: #999;
	  }
	  .greyed {
		background-color: #ddd;
		width: 100%;
		max-width: 580px;
		text-align: center;
		font-family: 'Roboto Slab';
		font-size: 18px;
		letter-spacing: 6px;
		font-weight: 600;
		line-height: 28px;
	  }
	  @media screen and (max-width: 1150px) {
		.name {
		  color: #fff;
		  font-family: 'Roboto Slab';
		  font-size: 38px;
		  letter-spacing: 6px;
		  font-weight: 100;
		  line-height: 48px;
		}
	  }	  
	</style>
    </head>
	<body>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <div class="rela-block page">
        <div class="rela-block top-bar">
			<div class="caps name"><div class="abs-center">${firstname} ${lastname}</div></div>
        </div>
        <div class="side-bar">
            <div class="mugshot">
                <div class="logo">
                    <svg viewbox="0 0 80 80" class="rela-block logo-svg">
                        <path d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z" stroke-width="2.5" fill="none"/>
                    </svg>
                    <p class="logo-text">${firstname[0]}${lastname[0]}</p>
                </div>
			</div>
			<!--
            <p class="mb-1">Address Line 1</p>
            <p class="mb-1">Address Line 2</p>
			<p class="mb-1">City, Country</p>
			-->
			<p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-envelope"></i></span>${email}</p>
			<p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-phone-square-alt"></i></span>${phone}</p>
			`;
	if (skill1 != "" && skill1 != null)
		htmlTemplate += `<p class="rela-block caps side-header">Skills</p>
				<p class="rela-block list-thing">${skill1}</p>`;
	if (skill2 != "" && skill2 != null)
		htmlTemplate += `<p class="rela-block list-thing">${skill2}</p>`;
	if (skill3 != "" && skill3 != null)
		htmlTemplate += `<p class="rela-block list-thing">${skill3}</p>`;
	if (skill4 != "" && skill4 != null)
		htmlTemplate += `<p class="rela-block list-thing">${skill4}</p>`;
	if (skill5 != "" && skill5 != null)
		htmlTemplate += `<p class="rela-block list-thing">${skill5}</p>`;
	if (skill6 != "" && skill6 != null)
		htmlTemplate += `<p class="rela-block list-thing">${skill6}</p>`;

	if (interest1 != "" && interest1 != null)
		htmlTemplate += `<p class="rela-block caps side-header">Interests</p>
				<p class="rela-block list-thing">${interest1}</p>`;
	if (interest2 != "" && interest2 != null)
		htmlTemplate += `<p class="rela-block list-thing">${interest2}</p>`;
	if (interest3 != "" && interest3 != null)
		htmlTemplate += `<p class="rela-block list-thing">${interest3}</p>`;
	if (interest4 != "" && interest4 != null)
		htmlTemplate += `<p class="rela-block list-thing">${interest4}</p>`;
	if (interest6 != "" && interest6 != null)
		htmlTemplate += `<p class="rela-block list-thing">${interest5}</p>`;
	if (interest6 != "" && interest6 != null)
		htmlTemplate += `<p class="rela-block list-thing">${interest6}</p>`;

	htmlTemplate += `
  			</div>
			<div class="rela-block content-container">			
			<div class="rela-block caps greyed">Profile</div>`;
	if (website != "" && website != null)
		htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fas fa-globe"></i></span>${website}</p>`;
	if (github != "" && github != null)
		htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-github"></i></span>${github}</p>`;
	if (facebook != "" && facebook != null)
		htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-facebook"></i></span>${facebook}</p>`;
	if (twitter != "" && twitter != null)
		htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-twitter-square"></i></span>${twitter}</p>`;
	if (instagram != "" && github != instagram)
		htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-instagram"></i></span>${instagram}</p>`;
	if (linkedin != "" && linkedin != null)
		htmlTemplate += `<p class="rela-block social mb-4"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-linkedin"></i></span>${linkedin}</p>`;

	htmlTemplate += `<div class="rela-block caps greyed">Education</div>`;
	if (college != "" && college != null)
		htmlTemplate += `<h3 class="mb-0">${college}</h3>
			<p class="text-muted light mt-0 mb-1">${fromyear1}<span class="mx-2">to</span>${toyear1}</p>
			<p class="justified mt-0 mb-1" style="font-size: 17px;">${qualification1}</p>
			<p class="justified mt-0 mb-3" style="font-size: 17px;">${description1}</p>`;

	if (school != "" && school != null)
		htmlTemplate += `  <h3 class="mb-0">${school}</h3>
			<p class="text-muted light mt-0 mb-1">${fromyear2}<span class="mx-2">to</span>${toyear2}</p>
			<p class="justified mt-0 mb-1" style="font-size: 17px;">${qualification2}</p>
			<p class="justified mt-0 mb-1" style="font-size: 17px;">${description2}</p>`;

	htmlTemplate += `<div class="rela-block caps greyed">Experience</div>`;

	if (institute1 != "" && institute1 != null)
		htmlTemplate += `<h3>${institute1}</h3>
            <p class="text-muted light mt-1 mb-2" style="font-size:17px;">${position1}<span class="ml-5 pl-5">Duration: ${duration1}</span></p>
            <p class="justified" style="font-size:17px;">${experienceDescription1}</p>`;

	if (institute2 != "" && institute2 != null)
		htmlTemplate += `<h3>${institute2}</h3>
            <p class="text-muted light mt-1 mb-2" style="font-size:17px;">${position2}<span class="ml-5 pl-5">Duration: ${duration2}</span></p>
            <p class="justified" style="font-size:17px;">${experienceDescription2}</p>`;

	htmlTemplate += `<div class="rela-block caps greyed">Projects</div>`;

	if (title1 != "" && title1 != null)
		htmlTemplate += `
			<h3>${title1}</h3>
            <p class="light mt-1 mb-2" style="font-size:17px;"><span class="mr-2"><i class="fas fa-link"></i></span>${link1}</p>
            <p class="justified" style="font-size:17px;">${experienceDescription1}</p>`;

	if (title2 != "" && title2 != null)
		htmlTemplate += `
            <h3>${title2}</h3>
            <p class="light mt-1 mb-2" style="font-size:17px;"><span class="mr-2"><i class="fas fa-link"></i></span>${link1}</p>
            <p class="justified" style="font-size:17px;">${experienceDescription2}</p>
			
        </div>
    </div>
    </body>
    </html>
  `;
	return htmlTemplate;
};
