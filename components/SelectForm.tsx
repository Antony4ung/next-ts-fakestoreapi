import { Box, MenuItem, Select } from '@mui/material'
import React, { Dispatch, FC, SetStateAction } from 'react'

type Props = {
    setCategory: Dispatch<SetStateAction<string>>,
    category:string
}

const SelectForm : FC<Props> = ({category,setCategory}) => {
  return (
    <Box>
        <Select
            sx={{width:"150px"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            variant='filled'
            onChange={e=>setCategory(e.target.value)}
            size="small"
          >
             <MenuItem value={"all"}>all</MenuItem>
            <MenuItem value={"men's clothing"}>{"men's clothing"}</MenuItem>
            <MenuItem value={"jewelery"}>jewelery</MenuItem>
            <MenuItem value={"electronics"}>electronics</MenuItem>
            <MenuItem value={"women's clothing"}>{"women's clothing"}</MenuItem>
          </Select>
    </Box>
   
  )
}

export default SelectForm;