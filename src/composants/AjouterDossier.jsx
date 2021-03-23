import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { makeStyles } from '@material-ui/core/styles';

const stylesBoutons = makeStyles({
    ajouter: {
      background: '#009900',
      color: 'white'
    },
    annuler: {
      background: '#990000',
      color: 'white'
    },
  });

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  const classes = stylesBoutons();

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker
            width="100%"
            colors={['#537169', '#55BBB2', '#F6D2A3', '#F3D379', '#FB7778', '#5990B8']}
            triangle="hide"
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.annuler} onClick={()=>{setOuvert(false); viderChamps()}} variant="contained" color="secondary">
            Annuler
          </Button>
          <Button className={classes.ajouter} onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} variant="contained" color={'#00ff00'}>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}