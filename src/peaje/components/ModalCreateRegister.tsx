import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { setCloseModalPeaje } from "../../store/slices/ui";
import { FormRegisterVehicle } from "./";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  minWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export const ModalCreateRegister = () => {
    const dispatch = useAppDispatch();
  const { isOpenModalPeaje } = useAppSelector((state) => state.ui);
  const handleClose = () => dispatch(setCloseModalPeaje());

  return (
    <>
      <Modal
        open={isOpenModalPeaje}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            container
            sx={{
              backgroundColor: "#fff",
              p: 5,
              borderRadius: 2,
            }}
            justifyContent='center'
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Registre el vehiculo
            </Typography>
            <FormRegisterVehicle handleClose={handleClose} />
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
