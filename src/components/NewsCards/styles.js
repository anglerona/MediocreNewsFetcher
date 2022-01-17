import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '55vh',
    padding: '20px 15px 60px 15px',
    borderRadius: 10,
    color: 'white',
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0,
  },
});