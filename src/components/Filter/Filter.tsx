"useClient";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Chip, FormLabel } from "@mui/material";
import { ArrowDown3, Icon } from "iconsax-react";
import { ClassNames } from "@emotion/react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function Filter() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className=" flex flex-row gap-x-2 ">
      <div className="!w-full flex flex-row justify-center items-center gap-x-2">
        <label className="font-medium text-2 " id="multiple-checkbox">
          ناشر
        </label>
        <Select
          className="!w-full h-10 "
          labelId="multiple-checkbox"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span>ناشر</span>;
            }
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            );
          }}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </div>
      <Button
        startIcon={<ArrowDown3 size="16" />}
        variant="outlined"
        disableElevation
        className="w-30 h-10 text-nowrap text-primary border-primary flex gap-x-2"
      >
        اعمال فیلتر
      </Button>
    </div>
  );
}

{
  /* <div>
<FormControl sx={{ m: 1, width: 300 }}>
  <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
  <Select

    MenuProps={MenuProps}
  >
    {names.map((name) => (
      <MenuItem
        key={name}
        value={name}
        style={getStyles(name, personName, theme)}
      >
        {name}
      </MenuItem>
    ))}
  </Select>
</FormControl>
</div> */
}
