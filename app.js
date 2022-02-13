let img = document.getElementsByClassName('img');
const form = document.querySelector('form');
const memeArea = document.getElementById('for-memes');

form.addEventListener('submit', function(e){
  e.preventDefault();
  let memeDiv = document.createElement('div');
  memeDiv.classList.toggle('meme-div');

  let newImg = document.createElement('img');
  newImg.src = document.getElementById('photoUrl').value;

  let topText = document.createElement('div');
  topText.innerText = document.getElementById('topText').value;
  topText.classList.toggle('top-text');

  let bottomText = document.createElement('div');
  bottomText.innerText = document.getElementById('bottomText').value;
  bottomText.classList.toggle('bottom-text');

  let removeBtn = document.createElement('button');
  removeBtn.innerText = 'REMOVE';
  removeBtn.classList.toggle('remove-button');

  memeDiv.append(newImg);
  memeDiv.append(topText)
  memeDiv.append(bottomText);
  memeDiv.append(removeBtn);
  memeArea.append(memeDiv);


  removeBtn.addEventListener('click', function(event){
    event.target.parentElement.remove();
  });

  form.reset();

});