import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #08B5CE',
  boxShadow: 24,
  p: 4,
  opacity: "0.9"
};

export default function ModalTerms() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} className="text-[#08B5CE] hover:underline ml-2"> termos e condições</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Termos e condições
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            EM CONSTRUÇÃO
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}