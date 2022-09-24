import { useEffect, useState } from "react";
import { Alert, Button, Grid, MenuItem, TextField } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../hooks/useActions";
import { addPeaje, setInitAction } from "../../store/slices/peajes";
const categories = [
  {
    value: "categoryA",
    label: "Categoria A",
  },

  {
    value: "categoryB",
    label: "Categoria B",
  },

  {
    value: "categoryC",
    label: "Categoria C",
  },
];

const vehicles = [
  {
    category: "categoryA",
    value: "vehiculo",
    vehicles: "vehiculo",
  },
  {
    category: "categoryA",
    vehicles: "bus",
    value: "bus",
  },
  {
    category: "categoryB",
    value: "camion",
    vehicles: "camion",
  },
  {
    category: "categoryB",
    value: "grua",
    vehicles: "grua",
  },
  {
    category: "categoryC",
    value: "Tractocamion",
    vehicles: "Tractocamion",
  },
];

const prices = [
  {
    category: "categoryA",
    value: 1500,
  },
  {
    category: "categoryB",
    value: 2100,
  },
  {
    category: "categoryC",
    value: 2700,
  },
];

export const FormRegisterVehicle = ({ handleClose }: any) => {
  const dispatch = useAppDispatch();

  const [isDisable, setIsDisable] = useState({
    disabledVehicle: true,
    diabledPrice: true,
  });

  const [errors, setErrors] = useState({
    errorCategory: false,
    errorVehicle: false,
    alert: false,
  });
  const { errorCategory, errorVehicle, alert } = errors;

  const [myPrice, setPrice] = useState(0);

  const { form, reset, handleInputChange } = useForm({
    typeVehicle: "",
    price: 0,
    typeCategory: "",
    labelCategory: "",
    id: "",
    placa: "",
    turno: "Turno 1",
  });

  const { typeVehicle, typeCategory, price, placa, labelCategory, id, turno } =
    form;

  const { disabledVehicle, diabledPrice } = isDisable;

  useEffect(() => {
    console.log(typeCategory);
    if (typeCategory) {
      setIsDisable((prev) => (prev = { ...isDisable, disabledVehicle: false }));
      setPrice(
        (prev) =>
          (prev = prices.filter((v) => v.category === typeCategory)[0]?.value)
      );
    }
  }, [typeCategory]);

  useEffect(() => {
    console.log(typeVehicle);
    if (typeVehicle) {
      setIsDisable((prev) => (prev = { ...isDisable, diabledPrice: false }));
    }
  }, [typeVehicle]);

  const handleSubmit = () => {
    dispatch(setInitAction());

    const payload = {
      typeCategory,
      typeVehicle,
      price: myPrice,
      placa,
      turno,
      labelCategory: categories.filter((c) => c.value === typeCategory)[0]
        ?.label,
      id: uuidv4(),
    };

    if (payload.typeCategory === "") {
      setErrors(
        (prev) =>
          (prev = {
            ...errors,
            errorCategory: true,
          })
      );
      return;
    }

    if (payload.typeVehicle === "") {
      setErrors(
        (prev) =>
          (prev = {
            ...errors,
            errorVehicle: true,
          })
      );
      return;
    }

    setErrors(
      (prev) =>
        (prev = {
          ...errors,
          alert: true,
          errorCategory: false,
          errorVehicle: false,
        })
    );

    console.log(payload);
    dispatch(addPeaje(payload));
    reset();
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  return (
    <>
      <Alert
        sx={{
          position: "absolute",
          top: "1vh",
          right: "1vw",
          zIndex: "999",
          display: `${alert ? "flex" : "none"}`,
        }}
      >
        Tarea exitosa — se creo un nuevo registro!
      </Alert>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap={3}
        sx={{ mt: 3 }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          gap={2}
        >
          <TextField
            id="outlined-select-currency"
            select
            label="turno"
            value={turno}
            defaultValue="Turno 1"
            name="turno"
            onChange={(e) => handleInputChange(e)}
            helperText="seleccione un valor"
            sx={{
              width: 200,
            }}
          >
            <MenuItem value={"Turno 1"}>Turno 1</MenuItem>
            <MenuItem value={"Turno 2"}>Turno 2</MenuItem>
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="tipo de categoria"
            error={errorCategory}
            value={typeCategory}
            name="typeCategory"
            onChange={(e) => handleInputChange(e)}
            helperText="seleccione un valor"
            sx={{
              width: 200,
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          gap={2}
        >
          <TextField
            id="outlined-select-currency"
            select
            label="tipo de vehiculo"
            value={typeVehicle}
            name="typeVehicle"
            error={errorVehicle}
            disabled={isDisable.disabledVehicle}
            onChange={(e) => handleInputChange(e)}
            sx={{
              width: 200,
            }}
          >
            {vehicles
              .filter((v) => v.category === typeCategory)
              .map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.vehicles}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            value={myPrice}
            name="price"
            disabled={true}
            sx={{
              width: 200,
            }}
          />

          {/* <TextField
          label="placa"
          variant="outlined"
          value={placa}
          name="placa"
          onChange={(e) => handleInputChange(e)}
        /> */}
        </Grid>
        <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
          <Button onClick={handleSubmit} variant="outlined" sx={{ mt: 5 }}>
            crear
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="error"
            sx={{ mt: 5 }}
          >
            Cerrar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
