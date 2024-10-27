import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Sort } from "iconsax-react";

export default function SortFile() {
  const [priceValue, setPriceValue] = React.useState("");
  const [pointsValue, setPointsValue] = React.useState("");

  const handleChangeScore = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointsValue((event.target as HTMLInputElement).value);
  };
  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl className=" !w-full flex flex-row justify-start items-center px-4 lg:px-2">
      <div>
        <FormLabel>
          <Sort className="text-primary" />
        </FormLabel>
      </div>
      <div className="!w-full flex flex-row gap-10">
        {/* points */}
        <RadioGroup
          className="flex flex-row text-primary"
          name="controlled-radio-buttons-group"
          value={pointsValue}
          onChange={handleChangeScore}
        >
          <FormControlLabel
            value="mostPoints"
            control={<Radio />}
            label="بیشترین امتیاز"
          />
          <FormControlLabel
            value="lowestPoints"
            control={<Radio />}
            label="کمترین امتیاز"
          />
        </RadioGroup>

        {/* price */}
        <RadioGroup
          className="flex flex-row text-primary"
          name="controlled-radio-buttons-group"
          value={priceValue}
          onChange={handleChangePrice}
        >
          <FormControlLabel
            value="mostPrice"
            control={<Radio />}
            label="کمترین قیمت"
          />
          <FormControlLabel
            value="lowestPrice"
            control={<Radio />}
            label="بیشترین قیمت"
          />
        </RadioGroup>
      </div>
    </FormControl>
  );
}
