import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { fetchCityData } from '../../../state/actions';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    allignItems: 'center',
    justifyItems: 'center',
    width: '430px',
    position: 'absolute',
    backgroundColor: 'lightgrey',
    border: '2px solid #000',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '20px',
  },
}));

function SchoolModal() {
  const [schoolCities, setSchoolCities] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get('http://localhost:8002/school')
      .then(res => {
        setSchoolCities(res.data);
      })
      .catch(err => {
        console.error('There was an error', err);
      });
  }, []);

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setCityAndState = value => {
    localStorage.setItem('cityAndState', value);
    fetchCityData(value);
    push(`/citySearch/${value}`);
  };

  const body = (
    <div style={modalStyle} className="modal">
      <h2
        className="modalH2"
        id="simple-modal-title"
        style={{
          fontWeight: 'bold',
          fontSize: '23px',
          fontFamily: 'Barlow, sans-serif',
          textDecoration: 'underline',
          color: '#01336E',
        }}
      >
        Top Schools in America
      </h2>
      <br />
      <p id="simple-modal-description">
        {schoolCities.map((city, index) => {
          return (
            <div key={index}>
              <a
                className="modalText"
                onClick={() => setCityAndState(city.city)}
              >
                &#9632; {city.city}, {city.state} <br />
              </a>
              <br />
            </div>
          );
        })}
      </p>
    </div>
  );

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
        View
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default SchoolModal;
