let currentPlayer = 'noughts';

const gamerClick = (event) => {
  if ( currentPlayer === 'noughts') {
    event.target.classList.add('one--noughts');
    event.target.disabled = true;
    return (currentPlayer = 'crosses');
  } else if  (currentPlayer === 'crosses') {
    event.target.classList.add('one--crosses');
    event.target.disabled = true;
    return (currentPlayer = 'noughts')
  }
}

document.querySelector('#jedna').addEventListener('click', gamerClick )
document.querySelector('#dva').addEventListener('click', gamerClick )
document.querySelector('#tri').addEventListener('click', gamerClick)
document.querySelector('#ctyri').addEventListener('click', gamerClick)
document.querySelector('#pet').addEventListener('click', gamerClick)
document.querySelector('#sest').addEventListener('click', gamerClick)
document.querySelector('#sedm').addEventListener('click', gamerClick)
document.querySelector('#osm').addEventListener('click', gamerClick)
document.querySelector('#devet').addEventListener('click', gamerClick)
document.querySelector('#deset').addEventListener('click', gamerClick)


const restartButton = (event) => {
 confirm('Opravdu chceš začít znovu?');
 
 if ('OK') {
   return true
 } else {
  event.preventDefault()
 }

} 
document.querySelector('.restart').addEventListener('click', restartButton)