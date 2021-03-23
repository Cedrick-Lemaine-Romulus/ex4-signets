import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Imgagecouverture from '../images/couverture.webp';

export default function Dossier({id, nom, couleur, datemodif, couverture}) {

  const [ancrageEl, setAncrageEl] = useState(null);

  const boutonClick = (event) => {
    setAncrageEl(event.currentTarget);
  };

  const boutonFermer = () => {
    setAncrageEl(null);
  };

  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={couverture? couverture : Imgagecouverture} alt={nom}/>
        
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small" onClick={boutonClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu
          id="simple-menu"
          anchorEl={ancrageEl}
          keepMounted
          open={Boolean(ancrageEl)}
          onClose={boutonFermer}
        >
          <MenuItem onClick={boutonFermer}>Modifier</MenuItem>
          <MenuItem onClick={boutonFermer}>Supprimer</MenuItem>
        </Menu>
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}