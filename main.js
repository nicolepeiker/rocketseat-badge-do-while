const socialMediaLinks = {
  github: 'nicolepeiker',
  youtube: 'nicolerv1',
  facebook: 'nicole.rafaela.11',
  instagram: 'nicolepeiker',
  twitter: 'nicolerv'
}

function changeSocialMediaLinks () {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://www.${social}.com/${socialMediaLinks[social]}` 
  }

}

changeSocialMediaLinks()

function getGitHubProfileInfos () {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`
 
  fetch(url)
  .then (response => response.json())
  .then (data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userGithub.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  }) 
}
getGitHubProfileInfos ()
