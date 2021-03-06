import Button from '@mui/material/Button';
import "./css/style.css"

function BasicButton({label, type, onClick}) {
  return (
      <Button className="button" variant="contained" type={type} onClick={onClick} >{label}</Button>
  );
}

export {BasicButton};