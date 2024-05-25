const divContainer = document.querySelector('.container');

const divHeader = document.createElement('div');
divHeader.style.textAlign = 'center';

const div30DaysOf = document.createElement('div');
div30DaysOf.style.display = 'flex';
div30DaysOf.style.flexDirection = 'column';

const devInfos = document.createElement('div');
devInfos.style.textAlign = 'center';
devInfos.style.maxWidth = '650px';
devInfos.style.margin = 'auto';

const devSkills = document.createElement('div');
devSkills.style.display = 'flex';
devSkills.style.justifyContent = 'space-between';

const pageKeywords = document.createElement('div');

divContainer.appendChild(divHeader);
divContainer.appendChild(div30DaysOf);
divContainer.appendChild(devInfos);
divContainer.appendChild(devSkills);
divContainer.appendChild(pageKeywords);

// header
const divHeaderH1 = document.createElement('h1');
divHeader.appendChild(divHeaderH1);
divHeaderH1.style.fontSize = '1.5rem';

const spanH1 = document.createElement('span');
spanH1.textContent = asabenehChallenges2020.challengeYear;
divHeaderH1.textContent = `${asabenehChallenges2020.challengeTitle} in `;
divHeaderH1.appendChild(spanH1);
spanH1.style.fontSize = '4rem';
changeColorYear();

//h2
const divHEaderH2 = document.createElement('h2');
divHEaderH2.textContent = `${asabenehChallenges2020.challengeSubtitle}`;
divHEaderH2.style.textDecoration = 'underline';
divHEaderH2.style.margin = '0';
divHEaderH2.style.fontSize = '1.2rem';
divHeader.appendChild(divHEaderH2);

// current date
const datetext = document.createElement('p');
divHeader.appendChild(datetext);
afficheDate();

// div 30 days of
const skillsArray = asabenehChallenges2020.challenges.map(skill => {
  const divSkill = document.createElement('div');
  divSkill.style.display = 'flex';
  divSkill.style.width = '100%';
  divSkill.style.alignItems = 'center';

  const divSkillName = document.createElement('p');
  divSkillName.textContent = `${skill.name}`;
  divSkillName.style.flex = '1';

  const divSkillList = document.createElement('details');
  divSkillList.style.textAlign = 'center';
  divSkillList.style.flex = '1';
  divSkillList.style.textAlign = 'left';
  divSkillList.style.marginLeft = '10rem';

  const topicSummary = document.createElement('summary');
  divSkillList.appendChild(topicSummary);

  topicSummary.textContent = `${skill.topics[0]}`;
  const TopicList = skill.topics.map(topic => {
    const topicTopic = document.createElement('p');
    topicTopic.textContent = topic;
    divSkillList.appendChild(topicTopic);
  });

  const devSkillStatus = document.createElement('p');
  devSkillStatus.textContent = `${skill.status}`;
  devSkillStatus.style.flex = '1';
  devSkillStatus.style.textAlign = 'right';

  switch (skill.status) {
    case 'Done':
      divSkill.style.backgroundColor = '#22BF73';
      break;
    case 'Ongoing':
      divSkill.style.backgroundColor = '#FDDB3A';
      break;
    case 'Coming':
      divSkill.style.backgroundColor = '#FD5E53';
      break;
    default:
      break;
  }

  divSkill.style.padding = '0.5rem 1rem';
  divSkill.style.margin = '2px 0';

  divSkill.appendChild(divSkillName);
  divSkill.appendChild(divSkillList);
  divSkill.appendChild(devSkillStatus);
  div30DaysOf.appendChild(divSkill);
});

// dev infos
const devInfoH2 = document.createElement('h2');
devInfoH2.style.marginBottom = '0.2rem';
devInfoH2.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
devInfos.appendChild(devInfoH2);

// dev socials
const socialsDiv = document.createElement('div');
devInfos.appendChild(socialsDiv);
socialsDiv.style.marginBottom = '1rem';

const socialsArray = asabenehChallenges2020.author.socialLinks.map(link => {
  const socialLink = document.createElement('a');
  socialLink.setAttribute('href', `${link.url}`);
  socialLink.innerHTML = `${link.fontawesomeIcon}`;
  socialLink.style.color = 'black';
  socialLink.style.margin = '0.5rem 0.2rem';
  socialLink.style.fontSize = '1.5rem';
  socialsDiv.appendChild(socialLink);
});

const devDescription = document.createElement('p');
devDescription.textContent = asabenehChallenges2020.author.bio;
devDescription.style.margin = '2rem 0';
devInfos.appendChild(devDescription);

// dev skills
const devSkillsTitles = document.createElement('div');
const devSkillsContent = document.createElement('div');
const devSkillsQualifications = document.createElement('div');
devSkills.appendChild(devSkillsTitles);
devSkills.appendChild(devSkillsContent);
devSkills.appendChild(devSkillsQualifications);

// titles
const skillsTitleH3 = document.createElement('h3');
devSkillsTitles.appendChild(skillsTitleH3);
skillsTitleH3.innerText = 'Titles';

const skillsTittleDiv = document.createElement('div');
devSkillsTitles.appendChild(skillsTittleDiv);

const skillsTittleArray = asabenehChallenges2020.author.titles.map(title => {
  const skillTitle = document.createElement('p');
  skillTitle.style.margin = '0.2rem 0';
  const emojiSpan = document.createElement('span');
  emojiSpan.textContent = title[0];
  const titleSpan = document.createElement('span');
  titleSpan.textContent = title[1];
  skillTitle.appendChild(emojiSpan);
  skillTitle.appendChild(titleSpan);
  skillsTittleDiv.appendChild(skillTitle);
});

// skills
const skillsContentH3 = document.createElement('h3');
devSkillsContent.appendChild(skillsContentH3);
skillsContentH3.innerText = 'Skills';

const skillsContentDiv = document.createElement('div');
devSkillsContent.appendChild(skillsContentDiv);

const skillsContentArray = asabenehChallenges2020.author.skills.map(skill => {
  const skillContent = document.createElement('p');
  skillContent.textContent = `✅ ${skill}`;
  skillContent.style.margin = '0.2rem 0';
  skillsContentDiv.appendChild(skillContent);
});

// qualifications
const skillsQualificationsH3 = document.createElement('h3');
devSkillsQualifications.appendChild(skillsQualificationsH3);
skillsQualificationsH3.innerText = 'Qualifications';

const skillsQualificationsDiv = document.createElement('div');
devSkillsQualifications.appendChild(skillsQualificationsDiv);

const skillsQualificationsArray =
  asabenehChallenges2020.author.qualifications.map(qualification => {
    const skillQualifications = document.createElement('p');
    skillQualifications.textContent = `🎓 ${qualification}`;
    skillQualifications.style.margin = '0.2rem 0';
    skillsQualificationsDiv.appendChild(skillQualifications);
  });

// keywords
const keywordsH3 = document.createElement('h3');
pageKeywords.appendChild(keywordsH3);
keywordsH3.innerText = 'Keywords';

// kewords div
const keywordsDiv = document.createElement('div');
pageKeywords.appendChild(keywordsDiv);

const keywordsArray = asabenehChallenges2020.keywords.map(keyword => {
  const singleKeyword = document.createElement('p');
  singleKeyword.textContent = `# ${keyword}`;
  singleKeyword.style.display = 'inline-block';
  singleKeyword.style.backgroundColor = getRandomHexColor();
  singleKeyword.style.padding = '0.5rem 1rem';
  singleKeyword.style.margin = '0.2rem';
  singleKeyword.style.borderRadius = '25px';
  keywordsDiv.appendChild(singleKeyword);
});
